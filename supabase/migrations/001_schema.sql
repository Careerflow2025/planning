-- 001_schema.sql
-- InstantAI Assessment - Core schema with pgvector support
-- Creates all tables, indexes (B-tree, GIN, HNSW, trigram)

-- =============================================================================
-- Extensions
-- =============================================================================
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- =============================================================================
-- Tables
-- =============================================================================

-- profiles (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  role TEXT NOT NULL DEFAULT 'individual',
  subscription_tier TEXT DEFAULT 'free',
  credits_remaining INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- projects
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  site_address TEXT,
  postcode TEXT,
  lpa_code TEXT,
  lpa_name TEXT,
  development_type TEXT,
  development_description TEXT,
  num_units INT,
  floor_area_sqm NUMERIC,
  site_area_hectares NUMERIC,
  use_class TEXT,
  status TEXT DEFAULT 'draft',
  site_constraints JSONB DEFAULT '{}',
  uploaded_documents JSONB DEFAULT '[]',
  chat_history JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- assessment_types (66 types catalog)
CREATE TABLE assessment_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  typical_cost_min INT,
  typical_cost_max INT,
  typical_pages_min INT,
  typical_pages_max INT,
  requires_licensed_pro BOOLEAN DEFAULT false,
  ai_difficulty TEXT,
  template JSONB,
  trigger_conditions JSONB,
  credit_cost INT DEFAULT 1,
  active BOOLEAN DEFAULT true
);

-- project_assessments (generated assessments per project)
CREATE TABLE project_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  assessment_type_id UUID NOT NULL REFERENCES assessment_types(id),
  status TEXT DEFAULT 'pending',
  confidence_score NUMERIC,
  quality_score NUMERIC,
  generated_document JSONB,
  document_version INT DEFAULT 1,
  credits_used INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- lpa_profiles
CREATE TABLE lpa_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lpa_code TEXT UNIQUE NOT NULL,
  lpa_name TEXT NOT NULL,
  region TEXT,
  country TEXT DEFAULT 'England',
  local_plan_url TEXT,
  validation_checklist_url TEXT,
  specific_requirements JSONB DEFAULT '{}',
  contact_info JSONB DEFAULT '{}',
  submission_guidance TEXT,
  last_crawled_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- policy_documents (knowledge base with vector embedding)
CREATE TABLE policy_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source TEXT NOT NULL,
  lpa_code TEXT,
  title TEXT NOT NULL,
  reference TEXT,
  content TEXT NOT NULL,
  effective_date DATE,
  superseded_by UUID REFERENCES policy_documents(id),
  metadata JSONB DEFAULT '{}',
  embedding vector(1024),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- example_assessments (knowledge base with vector embedding)
CREATE TABLE example_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_type_id UUID REFERENCES assessment_types(id),
  lpa_code TEXT,
  development_type TEXT,
  source_url TEXT,
  planning_ref TEXT,
  outcome TEXT,
  quality_score NUMERIC,
  section_name TEXT,
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  embedding vector(1024),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- assessment_templates
CREATE TABLE assessment_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_type_id UUID NOT NULL REFERENCES assessment_types(id),
  lpa_code TEXT,
  version INT DEFAULT 1,
  sections JSONB NOT NULL,
  system_prompt TEXT,
  quality_criteria JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- site_constraints (spatial data cache)
CREATE TABLE site_constraints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  constraint_type TEXT NOT NULL,
  name TEXT,
  lpa_code TEXT,
  data JSONB NOT NULL,
  geometry JSONB,
  source TEXT,
  last_updated TIMESTAMPTZ DEFAULT now()
);

-- document_versions
CREATE TABLE document_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_assessment_id UUID NOT NULL REFERENCES project_assessments(id) ON DELETE CASCADE,
  version INT NOT NULL,
  content JSONB NOT NULL,
  quality_scores JSONB,
  change_summary TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- crawler_jobs
CREATE TABLE crawler_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_type TEXT NOT NULL,
  target_url TEXT NOT NULL,
  lpa_code TEXT,
  status TEXT DEFAULT 'pending',
  last_run_at TIMESTAMPTZ,
  next_run_at TIMESTAMPTZ,
  result_summary JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- credit_transactions
CREATE TABLE credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  amount INT NOT NULL,
  type TEXT NOT NULL,
  assessment_id UUID REFERENCES project_assessments(id),
  stripe_payment_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================================================
-- B-tree Indexes (common query patterns)
-- =============================================================================

-- profiles
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_email ON profiles(email);

-- projects
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_lpa_code ON projects(lpa_code);
CREATE INDEX idx_projects_postcode ON projects(postcode);
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);

-- project_assessments
CREATE INDEX idx_project_assessments_project_id ON project_assessments(project_id);
CREATE INDEX idx_project_assessments_type_id ON project_assessments(assessment_type_id);
CREATE INDEX idx_project_assessments_status ON project_assessments(status);

-- assessment_types
CREATE INDEX idx_assessment_types_category ON assessment_types(category);
CREATE INDEX idx_assessment_types_short_name ON assessment_types(short_name);
CREATE INDEX idx_assessment_types_active ON assessment_types(active) WHERE active = true;

-- lpa_profiles
CREATE INDEX idx_lpa_profiles_lpa_code ON lpa_profiles(lpa_code);
CREATE INDEX idx_lpa_profiles_region ON lpa_profiles(region);

-- policy_documents
CREATE INDEX idx_policy_documents_source ON policy_documents(source);
CREATE INDEX idx_policy_documents_lpa_code ON policy_documents(lpa_code);
CREATE INDEX idx_policy_documents_reference ON policy_documents(reference);
CREATE INDEX idx_policy_documents_effective_date ON policy_documents(effective_date DESC);

-- example_assessments
CREATE INDEX idx_example_assessments_type_id ON example_assessments(assessment_type_id);
CREATE INDEX idx_example_assessments_lpa_code ON example_assessments(lpa_code);
CREATE INDEX idx_example_assessments_dev_type ON example_assessments(development_type);

-- assessment_templates
CREATE INDEX idx_assessment_templates_type_id ON assessment_templates(assessment_type_id);
CREATE INDEX idx_assessment_templates_lpa_code ON assessment_templates(lpa_code);

-- site_constraints
CREATE INDEX idx_site_constraints_type ON site_constraints(constraint_type);
CREATE INDEX idx_site_constraints_lpa_code ON site_constraints(lpa_code);

-- document_versions
CREATE INDEX idx_document_versions_pa_id ON document_versions(project_assessment_id);
CREATE INDEX idx_document_versions_version ON document_versions(project_assessment_id, version DESC);

-- crawler_jobs
CREATE INDEX idx_crawler_jobs_status ON crawler_jobs(status);
CREATE INDEX idx_crawler_jobs_lpa_code ON crawler_jobs(lpa_code);
CREATE INDEX idx_crawler_jobs_next_run ON crawler_jobs(next_run_at) WHERE status != 'completed';

-- credit_transactions
CREATE INDEX idx_credit_transactions_user_id ON credit_transactions(user_id);
CREATE INDEX idx_credit_transactions_type ON credit_transactions(type);
CREATE INDEX idx_credit_transactions_created_at ON credit_transactions(created_at DESC);

-- =============================================================================
-- GIN Indexes (JSONB and full-text search)
-- =============================================================================

CREATE INDEX idx_projects_site_constraints_gin ON projects USING GIN (site_constraints);
CREATE INDEX idx_projects_uploaded_docs_gin ON projects USING GIN (uploaded_documents);
CREATE INDEX idx_lpa_profiles_requirements_gin ON lpa_profiles USING GIN (specific_requirements);
CREATE INDEX idx_policy_documents_metadata_gin ON policy_documents USING GIN (metadata);
CREATE INDEX idx_example_assessments_metadata_gin ON example_assessments USING GIN (metadata);
CREATE INDEX idx_site_constraints_data_gin ON site_constraints USING GIN (data);

-- Full-text search (tsvector) indexes
CREATE INDEX idx_policy_documents_content_fts ON policy_documents
  USING GIN (to_tsvector('english', content));

CREATE INDEX idx_policy_documents_title_fts ON policy_documents
  USING GIN (to_tsvector('english', title));

CREATE INDEX idx_example_assessments_content_fts ON example_assessments
  USING GIN (to_tsvector('english', content));

CREATE INDEX idx_projects_name_fts ON projects
  USING GIN (to_tsvector('english', name));

-- =============================================================================
-- Trigram Indexes (fuzzy text search via pg_trgm)
-- =============================================================================

CREATE INDEX idx_projects_name_trgm ON projects USING GIN (name gin_trgm_ops);
CREATE INDEX idx_projects_site_address_trgm ON projects USING GIN (site_address gin_trgm_ops);
CREATE INDEX idx_projects_postcode_trgm ON projects USING GIN (postcode gin_trgm_ops);
CREATE INDEX idx_lpa_profiles_name_trgm ON lpa_profiles USING GIN (lpa_name gin_trgm_ops);
CREATE INDEX idx_policy_documents_title_trgm ON policy_documents USING GIN (title gin_trgm_ops);
CREATE INDEX idx_assessment_types_name_trgm ON assessment_types USING GIN (name gin_trgm_ops);

-- =============================================================================
-- HNSW Vector Indexes (pgvector similarity search)
-- =============================================================================

CREATE INDEX idx_policy_documents_embedding_hnsw ON policy_documents
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 200);

CREATE INDEX idx_example_assessments_embedding_hnsw ON example_assessments
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 200);
