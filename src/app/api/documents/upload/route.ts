import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import type { UploadedDocument } from '@/types';

const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/tiff',
]);

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const projectId = formData.get('project_id') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!projectId) {
      return NextResponse.json({ error: 'project_id is required' }, { status: 400 });
    }

    // Validate file type
    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json({
        error: `File type "${file.type}" is not allowed. Allowed types: PDF, DOCX, JPEG, PNG, WebP, TIFF`,
      }, { status: 400 });
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({
        error: `File size exceeds maximum of ${MAX_FILE_SIZE / 1024 / 1024}MB`,
      }, { status: 400 });
    }

    // Verify project ownership
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('id, user_id, uploaded_documents')
      .eq('id', projectId)
      .eq('user_id', user.id)
      .single();

    if (projectError || !project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Generate storage path
    const fileExt = file.name.split('.').pop() ?? 'bin';
    const fileId = crypto.randomUUID();
    const storagePath = `${projectId}/${fileId}.${fileExt}`;

    // Upload to Supabase Storage
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const { error: uploadError } = await supabase.storage
      .from('project-documents')
      .upload(storagePath, fileBuffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('project-documents')
      .getPublicUrl(storagePath);

    // Update project's uploaded_documents array
    const existingDocs = (project.uploaded_documents ?? []) as UploadedDocument[];
    const newDoc: UploadedDocument = {
      id: fileId,
      name: file.name,
      url: publicUrl,
      storage_path: storagePath,
      size_bytes: file.size,
      mime_type: file.type,
      uploaded_at: new Date().toISOString(),
    };

    const { error: updateError } = await supabase
      .from('projects')
      .update({
        uploaded_documents: [...existingDocs, newDoc],
        updated_at: new Date().toISOString(),
      })
      .eq('id', projectId);

    if (updateError) {
      return NextResponse.json({
        error: 'File uploaded but failed to update project record',
        file: newDoc,
      }, { status: 500 });
    }

    return NextResponse.json({ file: newDoc }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
