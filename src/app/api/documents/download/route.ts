import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { generateDocx } from '@/lib/documents/docx-generator';
import { generatePdf } from '@/lib/documents/pdf-generator';
import type { GeneratedDocument, Project } from '@/types';

export async function GET(request: NextRequest) {
  return handleDownload(request);
}

export async function POST(request: NextRequest) {
  return handleDownload(request);
}

async function handleDownload(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Support both GET query params and POST body
    let assessmentId: string | null = null;
    let requestedFormat: string = 'docx';

    if (request.method === 'GET') {
      const url = new URL(request.url);
      assessmentId = url.searchParams.get('assessment_id');
      requestedFormat = url.searchParams.get('format') || 'docx';
    } else {
      const body = await request.json();
      assessmentId = body.project_assessment_id || body.assessment_id;
      requestedFormat = body.format || 'docx';
    }

    if (!assessmentId) {
      return NextResponse.json({ error: 'assessment_id is required' }, { status: 400 });
    }

    if (requestedFormat !== 'docx' && requestedFormat !== 'pdf') {
      return NextResponse.json({ error: 'Format must be "docx" or "pdf"' }, { status: 400 });
    }

    // Get project assessment with project data
    const { data: projectAssessment, error: paError } = await supabase
      .from('project_assessments')
      .select('*, projects(*)')
      .eq('id', assessmentId)
      .single();

    if (paError || !projectAssessment) {
      return NextResponse.json({ error: 'Project assessment not found' }, { status: 404 });
    }

    const project = projectAssessment.projects as unknown as Project;

    if (project.user_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const document = projectAssessment.generated_document as GeneratedDocument | null;
    if (!document) {
      return NextResponse.json({ error: 'No generated document available for download' }, { status: 400 });
    }

    // Get user profile for company name
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name, company_name')
      .eq('user_id', user.id)
      .single();

    const docOptions = {
      clientName: profile?.full_name ?? undefined,
      companyName: profile?.company_name ?? undefined,
      projectRef: `${project.name} - ${project.postcode ?? ''}`.trim(),
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };

    let buffer: Buffer;
    let contentType: string;
    let extension: string;

    if (requestedFormat === 'pdf') {
      buffer = await generatePdf(document, docOptions);
      contentType = 'application/pdf';
      extension = 'pdf';
    } else {
      buffer = await generateDocx(document, docOptions);
      contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      extension = 'docx';
    }

    // Sanitize filename
    const safeName = document.title
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .replace(/\s+/g, '_')
      .slice(0, 100);

    // Update status to downloaded
    await supabase
      .from('project_assessments')
      .update({
        status: 'downloaded',
        updated_at: new Date().toISOString(),
      })
      .eq('id', assessmentId);

    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${safeName}.${extension}"`,
        'Content-Length': String(buffer.length),
      },
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
