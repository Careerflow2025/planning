import { createServiceRoleClient } from '@/lib/supabase/server';
import { generateEmbedding } from './embeddings';
import { classifyWithHaiku } from './claude';
import type { RAGSearchParams, RAGSearchResult } from '@/types';

interface RetrievalContext {
  policies: RAGSearchResult[];
  examples: RAGSearchResult[];
  template: Record<string, unknown> | null;
  councilConfig: Record<string, unknown> | null;
  technical: RAGSearchResult[];
}

export async function retrieveContext(params: RAGSearchParams): Promise<RetrievalContext> {
  const supabase = await createServiceRoleClient();

  // Stage 1: Query decomposition (parallel with deterministic lookups)
  const [queryFacets, template, councilConfig] = await Promise.all([
    decomposeQuery(params.query, params.assessment_type),
    getTemplate(supabase, params.assessment_type),
    getCouncilConfig(supabase, params.lpa_code),
  ]);

  // Stage 2: Hybrid vector + keyword search across collections
  const collections = params.collections ?? ['policies', 'examples', 'technical'];
  const searchPromises = collections.map((collection) =>
    hybridSearch(supabase, {
      query: params.query,
      queryFacets,
      collection,
      lpa_code: params.lpa_code,
      top_k: params.top_k ?? 10,
      min_score: params.min_score ?? 0.5,
    })
  );

  const results = await Promise.all(searchPromises);
  const [policies, examples, technical] = [
    results.find((_, i) => collections[i] === 'policies') ?? [],
    results.find((_, i) => collections[i] === 'examples') ?? [],
    results.find((_, i) => collections[i] === 'technical') ?? [],
  ];

  // Stage 3: Re-rank with Haiku
  const rerankedPolicies = await rerankResults(policies as RAGSearchResult[], params.query);
  const rerankedExamples = await rerankResults(examples as RAGSearchResult[], params.query);

  return {
    policies: rerankedPolicies,
    examples: rerankedExamples,
    template,
    councilConfig,
    technical: technical as RAGSearchResult[],
  };
}

async function decomposeQuery(
  query: string,
  assessmentType?: string
): Promise<string[]> {
  const systemPrompt = `You are a UK planning assessment expert. Decompose the user's query into 3-6 specific search facets for retrieving relevant planning policies and guidance. Return one facet per line, no numbering.`;
  const input = assessmentType
    ? `Assessment type: ${assessmentType}\nQuery: ${query}`
    : query;

  const result = await classifyWithHaiku(systemPrompt, input);
  return result
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

async function getTemplate(
  supabase: ReturnType<typeof createServiceRoleClient> extends Promise<infer T> ? T : never,
  assessmentType?: string
): Promise<Record<string, unknown> | null> {
  if (!assessmentType) return null;

  const { data } = await supabase
    .from('assessment_templates')
    .select('sections, system_prompt, quality_criteria')
    .eq('assessment_type_id', assessmentType)
    .order('version', { ascending: false })
    .limit(1)
    .single();

  return data;
}

async function getCouncilConfig(
  supabase: ReturnType<typeof createServiceRoleClient> extends Promise<infer T> ? T : never,
  lpaCode?: string
): Promise<Record<string, unknown> | null> {
  if (!lpaCode) return null;

  const { data } = await supabase
    .from('lpa_profiles')
    .select('*')
    .eq('lpa_code', lpaCode)
    .single();

  return data;
}

interface HybridSearchParams {
  query: string;
  queryFacets: string[];
  collection: string;
  lpa_code?: string;
  top_k: number;
  min_score: number;
}

async function hybridSearch(
  supabase: ReturnType<typeof createServiceRoleClient> extends Promise<infer T> ? T : never,
  params: HybridSearchParams
): Promise<RAGSearchResult[]> {
  const embedding = await generateEmbedding(params.query);

  const tableName =
    params.collection === 'policies'
      ? 'policy_documents'
      : params.collection === 'examples'
        ? 'example_assessments'
        : 'policy_documents';

  // Vector search via RPC
  const { data: vectorResults } = await supabase.rpc('match_documents', {
    query_embedding: embedding,
    match_count: params.top_k,
    filter_table: tableName,
    filter_lpa: params.lpa_code ?? null,
  });

  // Full-text keyword search
  const searchQuery = params.queryFacets.join(' | ');
  const { data: keywordResults } = await supabase
    .from(tableName)
    .select('id, content, source, metadata')
    .textSearch('content', searchQuery)
    .limit(params.top_k);

  // Reciprocal Rank Fusion
  return fuseResults(
    vectorResults ?? [],
    keywordResults ?? [],
    params.top_k,
    params.min_score
  );
}

function fuseResults(
  vectorResults: Array<{ id: string; content: string; similarity: number; source?: string; metadata?: Record<string, unknown> }>,
  keywordResults: Array<{ id: string; content: string; source?: string; metadata?: Record<string, unknown> }>,
  topK: number,
  minScore: number
): RAGSearchResult[] {
  const k = 60; // RRF constant
  const scores = new Map<string, { score: number; content: string; source: string; metadata: Record<string, unknown> }>();

  vectorResults.forEach((r, i) => {
    const rrfScore = 1 / (k + i + 1);
    scores.set(r.id, {
      score: rrfScore * 0.7,
      content: r.content,
      source: r.source ?? 'vector',
      metadata: r.metadata ?? {},
    });
  });

  keywordResults.forEach((r, i) => {
    const rrfScore = 1 / (k + i + 1);
    const existing = scores.get(r.id);
    if (existing) {
      existing.score += rrfScore * 0.3;
    } else {
      scores.set(r.id, {
        score: rrfScore * 0.3,
        content: r.content,
        source: r.source ?? 'keyword',
        metadata: r.metadata ?? {},
      });
    }
  });

  return Array.from(scores.entries())
    .map(([id, data]) => ({ id, ...data }))
    .filter((r) => r.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

async function rerankResults(
  results: RAGSearchResult[],
  query: string
): Promise<RAGSearchResult[]> {
  if (results.length <= 3) return results;

  const systemPrompt = `Score each document's relevance to the query on a scale of 0-10. Return only the scores as comma-separated numbers in the same order as the documents.`;

  const docsText = results
    .map((r, i) => `[Doc ${i + 1}]: ${r.content.slice(0, 300)}`)
    .join('\n\n');

  const input = `Query: ${query}\n\n${docsText}`;
  const scoreText = await classifyWithHaiku(systemPrompt, input);

  const scores = scoreText.match(/\d+/g)?.map(Number) ?? [];

  return results
    .map((r, i) => ({
      ...r,
      score: scores[i] !== undefined ? scores[i] / 10 : r.score,
    }))
    .sort((a, b) => b.score - a.score);
}
