-- 005_pgvector.sql
-- Optimized vector search indexes and helper functions

-- =============================================================================
-- Set HNSW search parameters for optimal recall/speed balance
-- =============================================================================
-- These can be tuned per-session via SET LOCAL hnsw.ef_search = 100;
-- ALTER DATABASE is not permitted on Supabase managed hosting.

-- =============================================================================
-- Full-text search configuration
-- =============================================================================

-- Composite full-text + title search on policy_documents
CREATE INDEX idx_policy_documents_composite_fts ON policy_documents
  USING GIN (
    (setweight(to_tsvector('english', COALESCE(title, '')), 'A') ||
     setweight(to_tsvector('english', COALESCE(reference, '')), 'B') ||
     setweight(to_tsvector('english', content), 'C'))
  );

-- Composite full-text search on example_assessments
CREATE INDEX idx_example_assessments_composite_fts ON example_assessments
  USING GIN (
    (setweight(to_tsvector('english', COALESCE(section_name, '')), 'A') ||
     setweight(to_tsvector('english', content), 'B'))
  );

-- =============================================================================
-- Semantic search helper: policy_documents
-- =============================================================================
CREATE OR REPLACE FUNCTION search_policy_documents(
  query_embedding vector(1024),
  match_count INT DEFAULT 10,
  filter_lpa TEXT DEFAULT NULL,
  filter_source TEXT DEFAULT NULL,
  similarity_threshold FLOAT DEFAULT 0.0
)
RETURNS TABLE (
  id UUID,
  source TEXT,
  lpa_code TEXT,
  title TEXT,
  reference TEXT,
  content TEXT,
  effective_date DATE,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN QUERY
  SELECT
    pd.id,
    pd.source,
    pd.lpa_code,
    pd.title,
    pd.reference,
    pd.content,
    pd.effective_date,
    pd.metadata,
    1 - (pd.embedding <=> query_embedding) AS similarity
  FROM policy_documents pd
  WHERE pd.embedding IS NOT NULL
    AND (filter_lpa IS NULL OR pd.lpa_code = filter_lpa)
    AND (filter_source IS NULL OR pd.source = filter_source)
    AND (pd.superseded_by IS NULL) -- exclude superseded documents
    AND (1 - (pd.embedding <=> query_embedding)) >= similarity_threshold
  ORDER BY pd.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- =============================================================================
-- Semantic search helper: example_assessments
-- =============================================================================
CREATE OR REPLACE FUNCTION search_example_assessments(
  query_embedding vector(1024),
  match_count INT DEFAULT 10,
  filter_lpa TEXT DEFAULT NULL,
  filter_type_id UUID DEFAULT NULL,
  filter_dev_type TEXT DEFAULT NULL,
  similarity_threshold FLOAT DEFAULT 0.0
)
RETURNS TABLE (
  id UUID,
  assessment_type_id UUID,
  lpa_code TEXT,
  development_type TEXT,
  planning_ref TEXT,
  outcome TEXT,
  quality_score NUMERIC,
  section_name TEXT,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ea.id,
    ea.assessment_type_id,
    ea.lpa_code,
    ea.development_type,
    ea.planning_ref,
    ea.outcome,
    ea.quality_score,
    ea.section_name,
    ea.content,
    ea.metadata,
    1 - (ea.embedding <=> query_embedding) AS similarity
  FROM example_assessments ea
  WHERE ea.embedding IS NOT NULL
    AND (filter_lpa IS NULL OR ea.lpa_code = filter_lpa)
    AND (filter_type_id IS NULL OR ea.assessment_type_id = filter_type_id)
    AND (filter_dev_type IS NULL OR ea.development_type = filter_dev_type)
    AND (1 - (ea.embedding <=> query_embedding)) >= similarity_threshold
  ORDER BY ea.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- =============================================================================
-- Full-text search helper: policy_documents
-- =============================================================================
CREATE OR REPLACE FUNCTION fulltext_search_policies(
  query_text TEXT,
  match_count INT DEFAULT 20,
  filter_lpa TEXT DEFAULT NULL,
  filter_source TEXT DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  source TEXT,
  lpa_code TEXT,
  title TEXT,
  reference TEXT,
  content_snippet TEXT,
  rank FLOAT
)
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  tsquery_val tsquery;
BEGIN
  tsquery_val := plainto_tsquery('english', query_text);

  RETURN QUERY
  SELECT
    pd.id,
    pd.source,
    pd.lpa_code,
    pd.title,
    pd.reference,
    ts_headline('english', pd.content, tsquery_val,
      'StartSel=<mark>, StopSel=</mark>, MaxWords=60, MinWords=20'
    ) AS content_snippet,
    ts_rank_cd(
      setweight(to_tsvector('english', COALESCE(pd.title, '')), 'A') ||
      setweight(to_tsvector('english', COALESCE(pd.reference, '')), 'B') ||
      setweight(to_tsvector('english', pd.content), 'C'),
      tsquery_val
    )::FLOAT AS rank
  FROM policy_documents pd
  WHERE (
    setweight(to_tsvector('english', COALESCE(pd.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(pd.reference, '')), 'B') ||
    setweight(to_tsvector('english', pd.content), 'C')
  ) @@ tsquery_val
    AND pd.superseded_by IS NULL
    AND (filter_lpa IS NULL OR pd.lpa_code = filter_lpa)
    AND (filter_source IS NULL OR pd.source = filter_source)
  ORDER BY rank DESC
  LIMIT match_count;
END;
$$;

-- =============================================================================
-- Hybrid search helper: combined semantic + full-text for example_assessments
-- =============================================================================
CREATE OR REPLACE FUNCTION hybrid_search_examples(
  query_text TEXT,
  query_embedding vector(1024),
  match_count INT DEFAULT 10,
  filter_lpa TEXT DEFAULT NULL,
  filter_type_id UUID DEFAULT NULL,
  semantic_weight FLOAT DEFAULT 0.7,
  fulltext_weight FLOAT DEFAULT 0.3
)
RETURNS TABLE (
  id UUID,
  assessment_type_id UUID,
  lpa_code TEXT,
  development_type TEXT,
  section_name TEXT,
  content TEXT,
  quality_score NUMERIC,
  semantic_score FLOAT,
  fulltext_score FLOAT,
  combined_score FLOAT
)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN QUERY
  WITH semantic AS (
    SELECT
      ea.id,
      ea.assessment_type_id,
      ea.lpa_code,
      ea.development_type,
      ea.section_name,
      ea.content,
      ea.quality_score,
      1 - (ea.embedding <=> query_embedding) AS score
    FROM example_assessments ea
    WHERE ea.embedding IS NOT NULL
      AND (filter_lpa IS NULL OR ea.lpa_code = filter_lpa)
      AND (filter_type_id IS NULL OR ea.assessment_type_id = filter_type_id)
    ORDER BY ea.embedding <=> query_embedding
    LIMIT match_count * 3
  ),
  fulltext AS (
    SELECT
      ea.id,
      ts_rank_cd(
        setweight(to_tsvector('english', COALESCE(ea.section_name, '')), 'A') ||
        setweight(to_tsvector('english', ea.content), 'B'),
        plainto_tsquery('english', query_text)
      ) AS score
    FROM example_assessments ea
    WHERE (
      setweight(to_tsvector('english', COALESCE(ea.section_name, '')), 'A') ||
      setweight(to_tsvector('english', ea.content), 'B')
    ) @@ plainto_tsquery('english', query_text)
      AND (filter_lpa IS NULL OR ea.lpa_code = filter_lpa)
      AND (filter_type_id IS NULL OR ea.assessment_type_id = filter_type_id)
    LIMIT match_count * 3
  ),
  combined AS (
    SELECT
      s.id,
      s.assessment_type_id,
      s.lpa_code,
      s.development_type,
      s.section_name,
      s.content,
      s.quality_score,
      s.score AS sem_score,
      COALESCE(f.score, 0.0) AS ft_score,
      (s.score * semantic_weight) + (COALESCE(f.score, 0.0) * fulltext_weight) AS comb_score
    FROM semantic s
    LEFT JOIN fulltext f ON f.id = s.id
  )
  SELECT
    c.id,
    c.assessment_type_id,
    c.lpa_code,
    c.development_type,
    c.section_name,
    c.content,
    c.quality_score,
    c.sem_score::FLOAT,
    c.ft_score::FLOAT,
    c.comb_score::FLOAT
  FROM combined c
  ORDER BY c.comb_score DESC
  LIMIT match_count;
END;
$$;

-- =============================================================================
-- Utility: batch embedding upsert for policy_documents
-- =============================================================================
CREATE OR REPLACE FUNCTION upsert_policy_embedding(
  p_document_id UUID,
  p_embedding vector(1024)
)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE policy_documents
  SET embedding = p_embedding
  WHERE id = p_document_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Document not found: %', p_document_id;
  END IF;
END;
$$;

-- =============================================================================
-- Utility: batch embedding upsert for example_assessments
-- =============================================================================
CREATE OR REPLACE FUNCTION upsert_example_embedding(
  p_example_id UUID,
  p_embedding vector(1024)
)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE example_assessments
  SET embedding = p_embedding
  WHERE id = p_example_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Example assessment not found: %', p_example_id;
  END IF;
END;
$$;

-- =============================================================================
-- Utility: get embedding statistics for monitoring
-- =============================================================================
CREATE OR REPLACE FUNCTION get_embedding_stats()
RETURNS TABLE (
  table_name TEXT,
  total_rows BIGINT,
  rows_with_embeddings BIGINT,
  coverage_pct NUMERIC
)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN QUERY
  SELECT
    'policy_documents'::TEXT,
    COUNT(*)::BIGINT,
    COUNT(pd.embedding)::BIGINT,
    ROUND(COUNT(pd.embedding)::NUMERIC / GREATEST(COUNT(*), 1) * 100, 2)
  FROM policy_documents pd
  UNION ALL
  SELECT
    'example_assessments'::TEXT,
    COUNT(*)::BIGINT,
    COUNT(ea.embedding)::BIGINT,
    ROUND(COUNT(ea.embedding)::NUMERIC / GREATEST(COUNT(*), 1) * 100, 2)
  FROM example_assessments ea;
END;
$$;
