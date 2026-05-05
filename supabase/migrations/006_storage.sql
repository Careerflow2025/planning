-- 006_storage.sql
-- Storage buckets and policies for document uploads and generated files

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('project-documents', 'project-documents', false, 26214400, -- 25MB
   ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg', 'image/webp', 'text/plain']),
  ('generated-assessments', 'generated-assessments', false, 52428800, -- 50MB
   ARRAY['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']),
  ('site-images', 'site-images', false, 10485760, -- 10MB
   ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/tiff'])
ON CONFLICT (id) DO NOTHING;

-- Storage policies: project-documents
-- Users can upload to their own project folders
CREATE POLICY "Users upload own project docs"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'project-documents'
    AND (storage.foldername(name))[1] IN (
      SELECT id::text FROM projects WHERE user_id = auth.uid()
    )
  );

-- Users can read their own project docs
CREATE POLICY "Users read own project docs"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'project-documents'
    AND (storage.foldername(name))[1] IN (
      SELECT id::text FROM projects WHERE user_id = auth.uid()
    )
  );

-- Users can delete their own project docs
CREATE POLICY "Users delete own project docs"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'project-documents'
    AND (storage.foldername(name))[1] IN (
      SELECT id::text FROM projects WHERE user_id = auth.uid()
    )
  );

-- Storage policies: generated-assessments
CREATE POLICY "Users read own generated assessments"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'generated-assessments'
    AND (storage.foldername(name))[1] IN (
      SELECT id::text FROM projects WHERE user_id = auth.uid()
    )
  );

-- Service role can write generated assessments (via API routes)
CREATE POLICY "Service role writes generated assessments"
  ON storage.objects FOR INSERT
  TO service_role
  WITH CHECK (bucket_id = 'generated-assessments');

-- Storage policies: site-images
CREATE POLICY "Users upload own site images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'site-images'
    AND (storage.foldername(name))[1] IN (
      SELECT id::text FROM projects WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users read own site images"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'site-images'
    AND (storage.foldername(name))[1] IN (
      SELECT id::text FROM projects WHERE user_id = auth.uid()
    )
  );
