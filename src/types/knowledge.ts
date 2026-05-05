export type PolicySource = 'nppf' | 'ppg' | 'local_plan' | 'spd' | 'building_regs' | 'legislation';

export interface PolicyDocument {
  id: string;
  source: PolicySource;
  lpa_code: string | null;
  title: string;
  reference: string;
  content: string;
  effective_date: string | null;
  superseded_by: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface ExampleAssessment {
  id: string;
  assessment_type_id: string;
  lpa_code: string | null;
  development_type: string | null;
  source_url: string | null;
  planning_ref: string | null;
  outcome: 'approved' | 'refused' | null;
  quality_score: number | null;
  section_name: string | null;
  content: string;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface RAGSearchParams {
  query: string;
  assessment_type?: string;
  lpa_code?: string;
  collections?: ('policies' | 'examples' | 'templates' | 'technical')[];
  top_k?: number;
  min_score?: number;
}

export interface RAGSearchResult {
  id: string;
  content: string;
  source: string;
  score: number;
  metadata: Record<string, unknown>;
}

export interface EmbeddingRequest {
  text: string;
  model?: string;
}

export interface ChunkingConfig {
  max_tokens: number;
  overlap_tokens: number;
  preserve_paragraphs: boolean;
  add_context_header: boolean;
}

export type CrawlerJobStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface CrawlerJob {
  id: string;
  source_type: 'lpa_validation' | 'planning_portal' | 'policy_doc';
  target_url: string;
  lpa_code: string | null;
  status: CrawlerJobStatus;
  last_run_at: string | null;
  next_run_at: string | null;
  result_summary: Record<string, unknown> | null;
}
