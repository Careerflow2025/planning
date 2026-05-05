import { NextRequest } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server';
import { anthropic } from '@/lib/ai/claude';
import { extractDocxText } from '@/lib/documents/parser';
import type { ChatMessage, Project, UploadedDocument } from '@/types';
import type Anthropic from '@anthropic-ai/sdk';

const MAX_DOCUMENT_BYTES = 20 * 1024 * 1024; // 20MB total per message

const SYSTEM_PROMPT = `You are an expert UK planning consultant conducting a project intake interview. Your goal is to gather comprehensive information about the user's development project to determine which planning assessments are required.

Ask about the following topics naturally in conversation:
1. SITE DETAILS: Full address, postcode (if not already provided), current site use
2. DEVELOPMENT TYPE: What they want to build/change (residential, commercial, mixed-use, etc.)
3. SCALE: Number of units, floor area, site area, height/storeys
4. USE CLASS: Current and proposed use class (C3, E, B2, etc.)
5. SITE CONSTRAINTS: Any known constraints (flood risk, conservation area, listed buildings nearby, trees, etc.)
6. EXISTING DOCUMENTS: What documents/surveys they already have (topographical survey, ecology report, etc.)
7. LPA REQUIREMENTS: Any pre-application advice or known LPA requirements
8. TIMELINE: When they plan to submit

Guidelines:
- Be professional but approachable
- Ask 1-2 questions at a time, do not overwhelm
- Acknowledge and confirm information the user provides
- If unsure about something, ask for clarification
- When you have gathered enough information (address, development type, description, approximate scale), suggest the user proceed to assessment detection by saying: "I think I have enough information to identify which assessments your project will need. Would you like me to detect the required assessments now?"
- Do not make up information or assume details not provided
- Reference relevant planning policy where appropriate

DOCUMENT ANALYSIS:
When the user uploads documents (PDFs, images, DOCX files), you can see and read them directly.
- For planning drawings, site plans, and elevations: describe what you see, note key dimensions, layouts, and any planning-relevant details
- For images/photos: describe the site, surroundings, and any constraints visible
- For text documents: summarise key points relevant to the planning application
- Always confirm what you've observed and ask if your interpretation is correct`;

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { project_id, message, document_ids } = body;

    if (!project_id) {
      return new Response(JSON.stringify({ error: 'project_id is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const hasMessage = message && typeof message === 'string' && message.trim();
    const hasDocuments = Array.isArray(document_ids) && document_ids.length > 0;

    if (!hasMessage && !hasDocuments) {
      return new Response(JSON.stringify({ error: 'message or document_ids required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get project
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('*')
      .eq('id', project_id)
      .eq('user_id', user.id)
      .single();

    if (projectError || !project) {
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const typedProject = project as Project;
    const chatHistory = (typedProject.chat_history ?? []) as ChatMessage[];

    // Build project context for the system prompt
    const projectContext = buildProjectContext(typedProject);

    // Build messages array from chat history
    const messages: Anthropic.MessageParam[] = chatHistory.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Build the new user message content blocks (multi-modal)
    const contentBlocks: Anthropic.ContentBlockParam[] = [];
    const attachedDocNames: string[] = [];

    if (hasDocuments) {
      const serviceClient = await createServiceRoleClient();
      const uploadedDocs = (typedProject.uploaded_documents ?? []) as UploadedDocument[];

      console.log('[chat] document_ids received:', document_ids);
      console.log('[chat] uploaded_documents in project:', uploadedDocs.map(d => ({ id: d.id, name: d.name, storage_path: d.storage_path })));

      let totalBytes = 0;
      for (const docId of document_ids as string[]) {
        const doc = uploadedDocs.find((d) => d.id === docId);
        if (!doc) {
          console.log(`[chat] doc ID ${docId} NOT FOUND in uploaded_documents`);
          continue;
        }

        console.log(`[chat] Processing doc: ${doc.name}, path: ${doc.storage_path}, mime: ${doc.mime_type}`);

        totalBytes += doc.size_bytes ?? 0;
        if (totalBytes > MAX_DOCUMENT_BYTES) break;

        // Download file from storage (with retry)
        let fileData: Blob | null = null;
        for (let attempt = 0; attempt < 2; attempt++) {
          const { data, error: downloadError } = await serviceClient.storage
            .from('project-documents')
            .download(doc.storage_path);
          if (data) {
            fileData = data;
            break;
          }
          console.log(`[chat] Download attempt ${attempt + 1} FAILED for ${doc.name}:`, downloadError?.message);
        }

        if (!fileData) {
          console.log(`[chat] Skipping ${doc.name} after 2 failed download attempts`);
          continue;
        }

        console.log(`[chat] Downloaded ${doc.name}: ${fileData.size} bytes`);

        const buffer = Buffer.from(await fileData.arrayBuffer());
        const base64 = buffer.toString('base64');

        if (doc.mime_type === 'application/pdf') {
          contentBlocks.push({
            type: 'document',
            source: {
              type: 'base64',
              media_type: 'application/pdf',
              data: base64,
            },
          });
        } else if (doc.mime_type.startsWith('image/')) {
          contentBlocks.push({
            type: 'image',
            source: {
              type: 'base64',
              media_type: doc.mime_type as 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif',
              data: base64,
            },
          });
        } else if (
          doc.mime_type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
          doc.mime_type === 'application/msword'
        ) {
          const text = await extractDocxText(buffer);
          if (text.trim()) {
            contentBlocks.push({
              type: 'text',
              text: `[Document: ${doc.name}]\n\n${text}`,
            });
          }
        }

        attachedDocNames.push(doc.name);
      }
    }

    console.log(`[chat] Content blocks built: ${contentBlocks.length} blocks, doc names: ${attachedDocNames.join(', ')}`);

    // Add the text message
    const textContent = hasMessage ? (message as string).trim() : 'Please review the attached document(s).';
    contentBlocks.push({ type: 'text', text: textContent });

    messages.push({ role: 'user', content: contentBlocks });

    // Create the user ChatMessage for persistence
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: textContent,
      timestamp: new Date().toISOString(),
      attachments: attachedDocNames.length > 0 ? attachedDocNames : undefined,
      document_ids: hasDocuments ? (document_ids as string[]) : undefined,
    };

    // Stream the response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        let fullResponse = '';

        try {
          const anthropicStream = anthropic.messages.stream({
            model: 'claude-sonnet-4-6',
            max_tokens: hasDocuments ? 4096 : 1024,
            temperature: 0.4,
            system: `${SYSTEM_PROMPT}\n\nCURRENT PROJECT CONTEXT:\n${projectContext}`,
            messages,
          });

          for await (const event of anthropicStream) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
              fullResponse += event.delta.text;
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ type: 'delta', text: event.delta.text })}\n\n`)
              );
            }
          }

          // Save both messages to chat history
          const assistantMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: 'assistant',
            content: fullResponse,
            timestamp: new Date().toISOString(),
          };

          const updatedHistory = [...chatHistory, userMessage, assistantMessage];

          // Extract any new project data from the conversation
          const extractedData = await extractProjectData(fullResponse, textContent, typedProject);

          const updatePayload: Record<string, unknown> = {
            chat_history: updatedHistory,
            updated_at: new Date().toISOString(),
          };

          // Merge extracted data if any
          if (extractedData) {
            for (const [key, value] of Object.entries(extractedData)) {
              if (value !== null && value !== undefined) {
                updatePayload[key] = value;
              }
            }
          }

          await supabase
            .from('projects')
            .update(updatePayload)
            .eq('id', project_id);

          // Check if AI suggested moving to detection
          const suggestsDetection = fullResponse.toLowerCase().includes('detect the required assessments') ||
            fullResponse.toLowerCase().includes('identify which assessments');

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: 'done',
                message_id: assistantMessage.id,
                suggests_detection: suggestsDetection,
              })}\n\n`
            )
          );

          controller.close();
        } catch (err) {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: 'error',
                error: err instanceof Error ? err.message : 'Chat failed',
              })}\n\n`
            )
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

function buildProjectContext(project: Project): string {
  const parts: string[] = [];

  if (project.name) parts.push(`Project name: ${project.name}`);
  if (project.site_address) parts.push(`Site address: ${project.site_address}`);
  if (project.postcode) parts.push(`Postcode: ${project.postcode}`);
  if (project.lpa_name) parts.push(`LPA: ${project.lpa_name}`);
  if (project.development_type) parts.push(`Development type: ${project.development_type}`);
  if (project.development_description) parts.push(`Description: ${project.development_description}`);
  if (project.num_units) parts.push(`Number of units: ${project.num_units}`);
  if (project.floor_area_sqm) parts.push(`Floor area: ${project.floor_area_sqm} sqm`);
  if (project.site_area_hectares) parts.push(`Site area: ${project.site_area_hectares} hectares`);
  if (project.use_class) parts.push(`Use class: ${project.use_class}`);

  const constraints = project.site_constraints;
  if (constraints && Object.keys(constraints).length > 0) {
    parts.push(`Known constraints: ${JSON.stringify(constraints)}`);
  }

  if (project.uploaded_documents?.length > 0) {
    parts.push(`Uploaded documents: ${project.uploaded_documents.map((d) => d.name).join(', ')}`);
  }

  return parts.length > 0 ? parts.join('\n') : 'No project information gathered yet.';
}

async function extractProjectData(
  aiResponse: string,
  userMessage: string,
  currentProject: Project
): Promise<Partial<Project> | null> {
  const updates: Partial<Project> = {};
  let hasUpdates = false;

  // Extract postcode if not already set
  if (!currentProject.postcode) {
    const postcodeMatch = userMessage.match(/[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i);
    if (postcodeMatch) {
      const cleaned = postcodeMatch[0].replace(/\s+/g, '').toUpperCase();
      updates.postcode = `${cleaned.slice(0, -3)} ${cleaned.slice(-3)}`;
      hasUpdates = true;
    }
  }

  // Extract number of units
  if (!currentProject.num_units) {
    const unitsMatch = userMessage.match(/(\d+)\s*(?:units?|homes?|flats?|houses?|dwellings?|apartments?)/i);
    if (unitsMatch) {
      updates.num_units = parseInt(unitsMatch[1]);
      hasUpdates = true;
    }
  }

  return hasUpdates ? updates : null;
}
