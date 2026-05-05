export type ProjectStatus = 'draft' | 'in_progress' | 'completed';

export type DevelopmentType =
  | 'residential'
  | 'commercial'
  | 'mixed_use'
  | 'industrial'
  | 'retail'
  | 'education'
  | 'healthcare'
  | 'leisure'
  | 'infrastructure'
  | 'agricultural'
  | 'change_of_use'
  | 'listed_building_consent'
  | 'householder'
  | 'other';

export type UseClass =
  | 'C3' | 'C2' | 'C1' | 'C4'
  | 'E' | 'B2' | 'B8'
  | 'F1' | 'F2'
  | 'sui_generis'
  | 'other';

export interface Project {
  id: string;
  user_id: string;
  name: string;
  site_address: string | null;
  postcode: string | null;
  lpa_code: string | null;
  lpa_name: string | null;
  development_type: DevelopmentType | null;
  development_description: string | null;
  num_units: number | null;
  floor_area_sqm: number | null;
  site_area_hectares: number | null;
  use_class: UseClass | null;
  status: ProjectStatus;
  site_constraints: SiteConstraints;
  uploaded_documents: UploadedDocument[];
  chat_history: ChatMessage[];
  created_at: string;
  updated_at: string;
}

export interface SiteConstraints {
  flood_zone?: '1' | '2' | '3a' | '3b';
  conservation_area?: boolean;
  listed_building?: {
    grade: 'I' | 'II*' | 'II';
    name: string;
    distance_m: number;
  }[];
  green_belt?: boolean;
  aonb?: boolean;
  sssi?: boolean;
  tree_preservation_orders?: boolean;
  archaeological_priority_area?: boolean;
  air_quality_management_area?: boolean;
  noise_exposure?: 'low' | 'medium' | 'high';
  [key: string]: unknown;
}

export interface UploadedDocument {
  id: string;
  name: string;
  url: string;
  storage_path: string;
  size_bytes: number;
  mime_type: string;
  uploaded_at: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  attachments?: string[];
  document_ids?: string[];
}

export interface LpaProfile {
  id: string;
  lpa_code: string;
  lpa_name: string;
  region: string;
  country: string;
  local_plan_url: string | null;
  validation_checklist_url: string | null;
  specific_requirements: Record<string, unknown>;
  contact_info: Record<string, unknown>;
  submission_guidance: string | null;
  last_crawled_at: string | null;
}
