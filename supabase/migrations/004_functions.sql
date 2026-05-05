-- 004_functions.sql
-- Database functions: credit management, vector search, triggers

-- =============================================================================
-- 1. deduct_credits - Atomic credit deduction with transaction logging
-- =============================================================================
CREATE OR REPLACE FUNCTION deduct_credits(
  p_user_id UUID,
  p_amount INT,
  p_assessment_id UUID
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_current_credits INT;
BEGIN
  -- Lock the profile row to prevent race conditions
  SELECT credits_remaining INTO v_current_credits
  FROM profiles
  WHERE user_id = p_user_id
  FOR UPDATE;

  IF v_current_credits IS NULL THEN
    RAISE EXCEPTION 'User profile not found: %', p_user_id;
  END IF;

  IF v_current_credits < p_amount THEN
    RAISE EXCEPTION 'Insufficient credits. Available: %, Required: %', v_current_credits, p_amount;
  END IF;

  -- Deduct credits
  UPDATE profiles
  SET credits_remaining = credits_remaining - p_amount
  WHERE user_id = p_user_id;

  -- Log the transaction
  INSERT INTO credit_transactions (user_id, amount, type, assessment_id)
  VALUES (p_user_id, -p_amount, 'deduction', p_assessment_id);

  -- Update the assessment credits_used
  IF p_assessment_id IS NOT NULL THEN
    UPDATE project_assessments
    SET credits_used = credits_used + p_amount
    WHERE id = p_assessment_id;
  END IF;

  RETURN TRUE;
END;
$$;

-- =============================================================================
-- 2. add_credits - Atomic credit addition with transaction logging
-- =============================================================================
CREATE OR REPLACE FUNCTION add_credits(
  p_user_id UUID,
  p_amount INT,
  p_type TEXT,
  p_stripe_payment_id TEXT DEFAULT NULL
)
RETURNS INT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_new_balance INT;
BEGIN
  -- Lock and update the profile
  UPDATE profiles
  SET credits_remaining = credits_remaining + p_amount
  WHERE user_id = p_user_id
  RETURNING credits_remaining INTO v_new_balance;

  IF v_new_balance IS NULL THEN
    RAISE EXCEPTION 'User profile not found: %', p_user_id;
  END IF;

  -- Log the transaction
  INSERT INTO credit_transactions (user_id, amount, type, stripe_payment_id)
  VALUES (p_user_id, p_amount, p_type, p_stripe_payment_id);

  RETURN v_new_balance;
END;
$$;

-- =============================================================================
-- 3. match_documents - Vector similarity search
-- =============================================================================
CREATE OR REPLACE FUNCTION match_documents(
  query_embedding vector(1024),
  match_count INT DEFAULT 10,
  filter_table TEXT DEFAULT 'policy_documents',
  filter_lpa TEXT DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  content TEXT,
  source TEXT,
  lpa_code TEXT,
  reference TEXT,
  similarity FLOAT
)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  IF filter_table = 'policy_documents' THEN
    RETURN QUERY
    SELECT
      pd.id,
      pd.title,
      pd.content,
      pd.source,
      pd.lpa_code,
      pd.reference,
      1 - (pd.embedding <=> query_embedding) AS similarity
    FROM policy_documents pd
    WHERE pd.embedding IS NOT NULL
      AND (filter_lpa IS NULL OR pd.lpa_code = filter_lpa)
    ORDER BY pd.embedding <=> query_embedding
    LIMIT match_count;
  ELSIF filter_table = 'example_assessments' THEN
    RETURN QUERY
    SELECT
      ea.id,
      ea.section_name AS title,
      ea.content,
      ea.source_url AS source,
      ea.lpa_code,
      ea.planning_ref AS reference,
      1 - (ea.embedding <=> query_embedding) AS similarity
    FROM example_assessments ea
    WHERE ea.embedding IS NOT NULL
      AND (filter_lpa IS NULL OR ea.lpa_code = filter_lpa)
    ORDER BY ea.embedding <=> query_embedding
    LIMIT match_count;
  ELSE
    RAISE EXCEPTION 'Invalid filter_table: %. Must be policy_documents or example_assessments', filter_table;
  END IF;
END;
$$;

-- =============================================================================
-- 4. hybrid_search - Combined vector + full-text search
-- =============================================================================
CREATE OR REPLACE FUNCTION hybrid_search(
  query_text TEXT,
  query_embedding vector(1024),
  match_count INT DEFAULT 10,
  filter_source TEXT DEFAULT NULL,
  filter_lpa TEXT DEFAULT NULL,
  semantic_weight FLOAT DEFAULT 0.7,
  fulltext_weight FLOAT DEFAULT 0.3
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  content TEXT,
  source TEXT,
  lpa_code TEXT,
  reference TEXT,
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
      pd.id,
      pd.title,
      pd.content,
      pd.source,
      pd.lpa_code,
      pd.reference,
      1 - (pd.embedding <=> query_embedding) AS score
    FROM policy_documents pd
    WHERE pd.embedding IS NOT NULL
      AND (filter_source IS NULL OR pd.source = filter_source)
      AND (filter_lpa IS NULL OR pd.lpa_code = filter_lpa)
    ORDER BY pd.embedding <=> query_embedding
    LIMIT match_count * 3
  ),
  fulltext AS (
    SELECT
      pd.id,
      ts_rank_cd(
        to_tsvector('english', pd.content),
        plainto_tsquery('english', query_text)
      ) AS score
    FROM policy_documents pd
    WHERE to_tsvector('english', pd.content) @@ plainto_tsquery('english', query_text)
      AND (filter_source IS NULL OR pd.source = filter_source)
      AND (filter_lpa IS NULL OR pd.lpa_code = filter_lpa)
    LIMIT match_count * 3
  ),
  combined AS (
    SELECT
      s.id,
      s.title,
      s.content,
      s.source,
      s.lpa_code,
      s.reference,
      s.score AS sem_score,
      COALESCE(f.score, 0.0) AS ft_score,
      (s.score * semantic_weight) + (COALESCE(f.score, 0.0) * fulltext_weight) AS comb_score
    FROM semantic s
    LEFT JOIN fulltext f ON f.id = s.id
  )
  SELECT
    c.id,
    c.title,
    c.content,
    c.source,
    c.lpa_code,
    c.reference,
    c.sem_score::FLOAT AS semantic_score,
    c.ft_score::FLOAT AS fulltext_score,
    c.comb_score::FLOAT AS combined_score
  FROM combined c
  ORDER BY c.comb_score DESC
  LIMIT match_count;
END;
$$;

-- =============================================================================
-- 5. Auto-update updated_at trigger function
-- =============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Apply to projects
CREATE TRIGGER trg_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Apply to project_assessments
CREATE TRIGGER trg_project_assessments_updated_at
  BEFORE UPDATE ON project_assessments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =============================================================================
-- 6. Auto-create profile on user signup
-- =============================================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO profiles (user_id, email, full_name, role, subscription_tier, credits_remaining)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'role', 'individual'),
    'free',
    3  -- free tier starter credits
  );
  RETURN NEW;
END;
$$;

-- Trigger on auth.users insert
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();
