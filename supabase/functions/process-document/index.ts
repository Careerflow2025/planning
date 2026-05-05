// Supabase Edge Function: process-document
// Processes uploaded documents: parse, chunk, embed, and store in knowledge base

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ProcessRequest {
  document_url: string;
  source: 'policy' | 'example_assessment';
  lpa_code?: string;
  assessment_type_id?: string;
  title: string;
  reference?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const body: ProcessRequest = await req.json();
    const { document_url, source, lpa_code, assessment_type_id, title, reference } = body;

    // 1. Fetch document content
    const docResponse = await fetch(document_url);
    const content = await docResponse.text();

    // 2. Chunk the document
    const chunks = chunkDocument(content, {
      maxTokens: 500,
      overlapTokens: 50,
      contextHeader: `Source: ${title}${reference ? ` (${reference})` : ''}`,
    });

    // 3. Generate embeddings for each chunk
    const embeddings = await generateEmbeddings(chunks);

    // 4. Insert into appropriate table
    const tableName = source === 'policy' ? 'policy_documents' : 'example_assessments';

    const records = chunks.map((chunk, i) => ({
      source: source === 'policy' ? 'local_plan' : undefined,
      lpa_code,
      assessment_type_id: source === 'example_assessment' ? assessment_type_id : undefined,
      title,
      reference,
      content: chunk,
      embedding: embeddings[i],
      metadata: { chunk_index: i, total_chunks: chunks.length },
    }));

    const { error } = await supabase.from(tableName).insert(records);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        chunks_processed: chunks.length,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

interface ChunkConfig {
  maxTokens: number;
  overlapTokens: number;
  contextHeader: string;
}

function chunkDocument(content: string, config: ChunkConfig): string[] {
  const paragraphs = content.split(/\n\n+/).filter(Boolean);
  const chunks: string[] = [];
  let currentChunk = config.contextHeader + '\n\n';
  let currentTokens = estimateTokens(currentChunk);

  for (const paragraph of paragraphs) {
    const paraTokens = estimateTokens(paragraph);

    if (currentTokens + paraTokens > config.maxTokens && currentChunk.length > config.contextHeader.length + 5) {
      chunks.push(currentChunk.trim());
      // Start new chunk with overlap
      const overlapText = currentChunk.split(/\n/).slice(-2).join('\n');
      currentChunk = config.contextHeader + '\n\n' + overlapText + '\n\n';
      currentTokens = estimateTokens(currentChunk);
    }

    currentChunk += paragraph + '\n\n';
    currentTokens += paraTokens;
  }

  if (currentChunk.trim().length > config.contextHeader.length + 5) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
    },
    body: JSON.stringify({
      model: 'text-embedding-3-large',
      input: texts,
      dimensions: 1024,
    }),
  });

  const data = await response.json();
  return data.data
    .sort((a: { index: number }, b: { index: number }) => a.index - b.index)
    .map((d: { embedding: number[] }) => d.embedding);
}
