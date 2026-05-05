-- 003_policies.sql
-- Row Level Security policies for all tables

-- =============================================================================
-- Enable RLS on all tables
-- =============================================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lpa_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE policy_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE example_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_constraints ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE crawler_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE credit_transactions ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- profiles: users can read/update their own profile
-- =============================================================================
CREATE POLICY "profiles_select_own"
  ON profiles FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "profiles_insert_own"
  ON profiles FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "profiles_update_own"
  ON profiles FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- =============================================================================
-- projects: users can CRUD their own projects
-- projects.user_id = auth.users.id (direct reference)
-- =============================================================================
CREATE POLICY "projects_select_own"
  ON projects FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "projects_insert_own"
  ON projects FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "projects_update_own"
  ON projects FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "projects_delete_own"
  ON projects FOR DELETE
  USING (user_id = auth.uid());

-- =============================================================================
-- project_assessments: users can read/write assessments for their own projects
-- =============================================================================
CREATE POLICY "project_assessments_select_own"
  ON project_assessments FOR SELECT
  USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "project_assessments_insert_own"
  ON project_assessments FOR INSERT
  WITH CHECK (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "project_assessments_update_own"
  ON project_assessments FOR UPDATE
  USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "project_assessments_delete_own"
  ON project_assessments FOR DELETE
  USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

-- =============================================================================
-- assessment_types: all authenticated users can read
-- =============================================================================
CREATE POLICY "assessment_types_select_authenticated"
  ON assessment_types FOR SELECT
  USING (auth.role() = 'authenticated');

-- =============================================================================
-- lpa_profiles: all authenticated users can read
-- =============================================================================
CREATE POLICY "lpa_profiles_select_authenticated"
  ON lpa_profiles FOR SELECT
  USING (auth.role() = 'authenticated');

-- =============================================================================
-- policy_documents: all authenticated users can read
-- =============================================================================
CREATE POLICY "policy_documents_select_authenticated"
  ON policy_documents FOR SELECT
  USING (auth.role() = 'authenticated');

-- =============================================================================
-- example_assessments: all authenticated users can read
-- =============================================================================
CREATE POLICY "example_assessments_select_authenticated"
  ON example_assessments FOR SELECT
  USING (auth.role() = 'authenticated');

-- =============================================================================
-- assessment_templates: all authenticated users can read
-- =============================================================================
CREATE POLICY "assessment_templates_select_authenticated"
  ON assessment_templates FOR SELECT
  USING (auth.role() = 'authenticated');

-- =============================================================================
-- site_constraints: all authenticated users can read
-- =============================================================================
CREATE POLICY "site_constraints_select_authenticated"
  ON site_constraints FOR SELECT
  USING (auth.role() = 'authenticated');

-- =============================================================================
-- document_versions: users can read/insert versions for their own project assessments
-- =============================================================================
CREATE POLICY "document_versions_select_own"
  ON document_versions FOR SELECT
  USING (
    project_assessment_id IN (
      SELECT pa.id FROM project_assessments pa
      JOIN projects p ON p.id = pa.project_id
      WHERE p.user_id = auth.uid()
    )
  );

CREATE POLICY "document_versions_insert_own"
  ON document_versions FOR INSERT
  WITH CHECK (
    project_assessment_id IN (
      SELECT pa.id FROM project_assessments pa
      JOIN projects p ON p.id = pa.project_id
      WHERE p.user_id = auth.uid()
    )
  );

-- =============================================================================
-- crawler_jobs: admin-only (service role), no user access
-- =============================================================================
CREATE POLICY "crawler_jobs_select_admin"
  ON crawler_jobs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- =============================================================================
-- credit_transactions: users can read their own transactions
-- credit_transactions.user_id = auth.users.id (direct reference)
-- =============================================================================
CREATE POLICY "credit_transactions_select_own"
  ON credit_transactions FOR SELECT
  USING (user_id = auth.uid());
