export type AssessmentDifficulty = 'easy' | 'medium' | 'hard';

export type AssessmentStatus = 'pending' | 'generating' | 'draft' | 'final' | 'downloaded';

export type AssessmentCategory =
  | 'core_planning'
  | 'environmental'
  | 'flood_drainage'
  | 'transport'
  | 'energy_sustainability'
  | 'daylight_amenity'
  | 'heritage_archaeology'
  | 'fire_structural'
  | 'landscape_visual'
  | 'commercial_viability'
  | 'specialist';

export interface AssessmentType {
  id: string;
  name: string;
  short_name: string;
  category: AssessmentCategory;
  description: string | null;
  typical_cost_min: number;
  typical_cost_max: number;
  typical_pages_min: number;
  typical_pages_max: number;
  requires_licensed_pro: boolean;
  ai_difficulty: AssessmentDifficulty;
  template: AssessmentTemplate | null;
  trigger_conditions: TriggerCondition[] | null;
  credit_cost: number;
  active: boolean;
}

export interface AssessmentTemplate {
  sections: AssessmentSection[];
  system_prompt?: string;
  quality_criteria?: QualityCriteria;
}

export interface AssessmentSection {
  name: string;
  description: string;
  required: boolean;
  min_words: number;
  max_words: number;
  guidance: string;
  subsections?: AssessmentSection[];
}

export interface QualityCriteria {
  min_policy_refs: number;
  required_sections: string[];
  max_quality_score: number;
}

export interface TriggerCondition {
  type: 'site_constraint' | 'development_type' | 'threshold' | 'lpa_requirement';
  constraint?: string;
  value?: string | number | boolean;
  description: string;
}

export interface ProjectAssessment {
  id: string;
  project_id: string;
  assessment_type_id: string;
  assessment_type?: AssessmentType;
  status: AssessmentStatus;
  confidence_score: number | null;
  quality_score: number | null;
  generated_document: GeneratedDocument | null;
  document_version: number;
  credits_used: number;
  created_at: string;
  updated_at: string;
}

export interface GeneratedDocument {
  title: string;
  sections: GeneratedSection[];
  metadata: DocumentMetadata;
}

export interface GeneratedSection {
  id: string;
  name: string;
  content: string;
  word_count: number;
  quality_score: number | null;
  policy_refs: string[];
  version: number;
}

export interface DocumentMetadata {
  generated_at: string;
  model_used: string;
  total_tokens: number;
  quality_scores: QualityScores;
}

export interface QualityScores {
  structure_score: number;
  policy_accuracy_score: number;
  factual_score: number;
  professional_score: number;
  overall_score: number;
}
