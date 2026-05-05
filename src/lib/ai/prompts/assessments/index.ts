import type { AssessmentSection, QualityCriteria } from '@/types';

// ============================================================================
// Phase 1 — Core 5
// ============================================================================

export {
  PLANNING_STATEMENT_PROMPT,
  PLANNING_STATEMENT_SECTIONS,
  PLANNING_STATEMENT_QUALITY,
  PLANNING_STATEMENT_TEMPLATE,
} from './planning-statement';

export {
  DAS_PROMPT,
  DAS_SECTIONS,
  DAS_QUALITY,
  DAS_TEMPLATE,
} from './design-access-statement';

export {
  FRA_PROMPT,
  FRA_SECTIONS,
  FRA_QUALITY,
  FRA_TEMPLATE,
} from './flood-risk-assessment';

export {
  HERITAGE_PROMPT,
  HERITAGE_SECTIONS,
  HERITAGE_QUALITY,
  HERITAGE_TEMPLATE,
} from './heritage-statement';

export {
  TRANSPORT_PROMPT,
  TRANSPORT_SECTIONS,
  TRANSPORT_QUALITY,
  TRANSPORT_TEMPLATE,
} from './transport-statement';

// ============================================================================
// Phase 2 — Core planning & environmental
// ============================================================================

export {
  AHS_PROMPT,
  AHS_SECTIONS,
  AHS_QUALITY,
  AHS_TEMPLATE,
} from './affordable-housing-statement';

export {
  PEA_PROMPT,
  PEA_SECTIONS,
  PEA_QUALITY,
  PEA_TEMPLATE,
} from './ecological-assessment';

export {
  SEQUENTIAL_TEST_FLOOD_PROMPT,
  SEQUENTIAL_TEST_FLOOD_SECTIONS,
  SEQUENTIAL_TEST_FLOOD_QUALITY,
  SEQUENTIAL_TEST_FLOOD_TEMPLATE,
} from './sequential-test-flood';

export {
  EXCEPTION_TEST_FLOOD_PROMPT,
  EXCEPTION_TEST_FLOOD_SECTIONS,
  EXCEPTION_TEST_FLOOD_QUALITY,
  EXCEPTION_TEST_FLOOD_TEMPLATE,
} from './exception-test-flood';

export {
  DRAINAGE_STRATEGY_PROMPT,
  DRAINAGE_STRATEGY_SECTIONS,
  DRAINAGE_STRATEGY_QUALITY,
  DRAINAGE_STRATEGY_TEMPLATE,
} from './drainage-strategy';

export {
  AQA_PROMPT,
  AQA_SECTIONS,
  AQA_QUALITY,
  AQA_TEMPLATE,
} from './air-quality-assessment';

export {
  NIA_PROMPT,
  NIA_SECTIONS,
  NIA_QUALITY,
  NIA_TEMPLATE,
} from './noise-impact-assessment';

export {
  BNG_PROMPT,
  BNG_SECTIONS,
  BNG_QUALITY,
  BNG_TEMPLATE,
} from './biodiversity-net-gain';

export {
  AIA_PROMPT,
  AIA_SECTIONS,
  AIA_QUALITY,
  AIA_TEMPLATE,
} from './arboricultural-impact';

export {
  TRANSPORT_ASSESSMENT_PROMPT,
  TRANSPORT_ASSESSMENT_SECTIONS,
  TRANSPORT_ASSESSMENT_QUALITY,
  TRANSPORT_ASSESSMENT_TEMPLATE,
} from './transport-assessment';

export {
  TRAVEL_PLAN_PROMPT,
  TRAVEL_PLAN_SECTIONS,
  TRAVEL_PLAN_QUALITY,
  TRAVEL_PLAN_TEMPLATE,
} from './travel-plan';

export {
  PARKING_SURVEY_PROMPT,
  PARKING_SURVEY_SECTIONS,
  PARKING_SURVEY_QUALITY,
  PARKING_SURVEY_TEMPLATE,
} from './parking-survey';

export {
  CTMP_PROMPT,
  CTMP_SECTIONS,
  CTMP_QUALITY,
  CTMP_TEMPLATE,
} from './construction-traffic-management';

export {
  SCI_PROMPT,
  SCI_SECTIONS,
  SCI_QUALITY,
  SCI_TEMPLATE,
} from './statement-community-involvement';

export {
  ES_PROMPT,
  ES_SECTIONS,
  ES_QUALITY,
  ES_TEMPLATE,
} from './energy-statement';

export {
  SS_PROMPT,
  SS_SECTIONS,
  SS_QUALITY,
  SS_TEMPLATE,
} from './sustainability-statement';

export {
  ADBA_PROMPT,
  ADBA_SECTIONS,
  ADBA_QUALITY,
  ADBA_TEMPLATE,
} from './archaeological-desk-based';

export {
  LVIA_PROMPT,
  LVIA_SECTIONS,
  LVIA_QUALITY,
  LVIA_TEMPLATE,
} from './landscape-visual-impact';

export {
  RIA_PROMPT,
  RIA_SECTIONS,
  RIA_QUALITY,
  RIA_TEMPLATE,
} from './retail-impact-assessment';

export {
  STR_PROMPT,
  STR_SECTIONS,
  STR_QUALITY,
  STR_TEMPLATE,
} from './sequential-test-retail';

export {
  CMP_PROMPT,
  CMP_SECTIONS,
  CMP_QUALITY,
  CMP_TEMPLATE,
} from './construction-management-plan';

export {
  WMS_PROMPT,
  WMS_SECTIONS,
  WMS_QUALITY,
  WMS_TEMPLATE,
} from './waste-management-strategy';

export {
  FS_PROMPT,
  FS_SECTIONS,
  FS_QUALITY,
  FS_TEMPLATE,
} from './fire-statement';

export {
  LC1_PROMPT,
  LC1_SECTIONS,
  LC1_QUALITY,
  LC1_TEMPLATE,
} from './land-contamination-phase1';

// Phase 4 — Hard-difficulty specialist assessments (professional review required)
export {
  AFE_PROMPT,
  AFE_SECTIONS,
  AFE_QUALITY,
  AFE_TEMPLATE,
} from './archaeological-field-evaluation';

export {
  HBR_PROMPT,
  HBR_SECTIONS,
  HBR_QUALITY,
  HBR_TEMPLATE,
} from './historic-building-recording';

export {
  FSS_PROMPT,
  FSS_SECTIONS,
  FSS_QUALITY,
  FSS_TEMPLATE,
} from './fire-safety-strategy';

export {
  SSR_PROMPT,
  SSR_SECTIONS,
  SSR_QUALITY,
  SSR_TEMPLATE,
} from './structural-survey';

export {
  BIA_PROMPT,
  BIA_SECTIONS,
  BIA_QUALITY,
  BIA_TEMPLATE,
} from './basement-impact-assessment';

export {
  GTA_PROMPT,
  GTA_SECTIONS,
  GTA_QUALITY,
  GTA_TEMPLATE,
} from './geotechnical-assessment';

export {
  VA_PROMPT,
  VA_SECTIONS,
  VA_QUALITY,
  VA_TEMPLATE,
} from './viability-assessment';

// Phase 5 — Hard difficulty specialist assessments
export {
  EIA_PROMPT,
  EIA_SECTIONS,
  EIA_QUALITY,
  EIA_TEMPLATE,
} from './environmental-impact-assessment';

export {
  PSS_PROMPT,
  PSS_SECTIONS,
  PSS_QUALITY,
  PSS_TEMPLATE,
} from './protected-species-survey';

export {
  LC2_PROMPT,
  LC2_SECTIONS,
  LC2_QUALITY,
  LC2_TEMPLATE,
} from './land-contamination-phase2';

export {
  ODA_PROMPT,
  ODA_SECTIONS,
  ODA_QUALITY,
  ODA_TEMPLATE,
} from './odour-assessment';

export {
  ALC_PROMPT,
  ALC_SECTIONS,
  ALC_QUALITY,
  ALC_TEMPLATE,
} from './agricultural-land-classification';

export {
  DSA_PROMPT,
  DSA_SECTIONS,
  DSA_QUALITY,
  DSA_TEMPLATE,
} from './daylight-sunlight-assessment';

export {
  WMA_PROMPT,
  WMA_SECTIONS,
  WMA_QUALITY,
  WMA_TEMPLATE,
} from './wind-microclimate-assessment';

// Phase 5 — Foul drainage, carbon, BREEAM, overheating, overshadowing, townscape, landscape
export {
  FSA_PROMPT,
  FSA_SECTIONS,
  FSA_QUALITY,
  FSA_TEMPLATE,
} from './foul-sewage-assessment';

export {
  WLCA_PROMPT,
  WLCA_SECTIONS,
  WLCA_QUALITY,
  WLCA_TEMPLATE,
} from './whole-life-carbon-assessment';

export {
  BPA_PROMPT,
  BPA_SECTIONS,
  BPA_QUALITY,
  BPA_TEMPLATE,
} from './breeam-pre-assessment';

export {
  ORA_PROMPT,
  ORA_SECTIONS,
  ORA_QUALITY,
  ORA_TEMPLATE,
} from './overheating-risk-assessment';

export {
  OSS_PROMPT,
  OSS_SECTIONS,
  OSS_QUALITY,
  OSS_TEMPLATE,
} from './overshadowing-study';

export {
  TVIA_PROMPT,
  TVIA_SECTIONS,
  TVIA_QUALITY,
  TVIA_TEMPLATE,
} from './townscape-visual-impact';

export {
  LS_PROMPT,
  LS_SECTIONS,
  LS_QUALITY,
  LS_TEMPLATE,
} from './landscape-strategy';

// Phase 4 — Water & utilities
export {
  WSA_PROMPT,
  WSA_SECTIONS,
  WSA_QUALITY,
  WSA_TEMPLATE,
} from './water-supply-assessment';

export {
  UA_PROMPT,
  UA_SECTIONS,
  UA_QUALITY,
  UA_TEMPLATE,
} from './utilities-assessment';

// Phase 4 — Circular economy & waste
export {
  CES_PROMPT,
  CES_SECTIONS,
  CES_QUALITY,
  CES_TEMPLATE,
} from './circular-economy-statement';

export {
  SWMP_PROMPT,
  SWMP_SECTIONS,
  SWMP_QUALITY,
  SWMP_TEMPLATE,
} from './site-waste-management-plan';

// Phase 4 — Green infrastructure
export {
  GIP_PROMPT,
  GIP_SECTIONS,
  GIP_QUALITY,
  GIP_TEMPLATE,
} from './green-infrastructure-plan';

// Phase 4 — Ventilation/extraction
export {
  VES_PROMPT,
  VES_SECTIONS,
  VES_QUALITY,
  VES_TEMPLATE,
} from './ventilation-extraction-statement';

// Phase 4 — Open space, play space, equalities
export {
  OSA_PROMPT,
  OSA_SECTIONS,
  OSA_QUALITY,
  OSA_TEMPLATE,
} from './open-space-assessment';

export {
  PSA_PROMPT,
  PSA_SECTIONS,
  PSA_QUALITY,
  PSA_TEMPLATE,
} from './play-space-assessment';

export {
  EqIA_PROMPT,
  EqIA_SECTIONS,
  EqIA_QUALITY,
  EqIA_TEMPLATE,
} from './equalities-impact-assessment';

// Phase 4 — Economic & employment
export {
  EcIA_PROMPT,
  EcIA_SECTIONS,
  EcIA_QUALITY,
  EcIA_TEMPLATE,
} from './economic-impact-assessment';

export {
  ELA_PROMPT,
  ELA_SECTIONS,
  ELA_QUALITY,
  ELA_TEMPLATE,
} from './employment-land-assessment';

// Phase 4 — Lighting
export {
  LA_PROMPT,
  LA_SECTIONS,
  LA_QUALITY,
  LA_TEMPLATE,
} from './lighting-assessment';

// Phase 4 — Telecommunications
export {
  TCA_PROMPT,
  TCA_SECTIONS,
  TCA_QUALITY,
  TCA_TEMPLATE,
} from './telecommunications-assessment';

// Phase 4 — Health & social
export {
  HIA_PROMPT,
  HIA_SECTIONS,
  HIA_QUALITY,
  HIA_TEMPLATE,
} from './health-impact-assessment';

export {
  SIA_PROMPT,
  SIA_SECTIONS,
  SIA_QUALITY,
  SIA_TEMPLATE,
} from './social-infrastructure-assessment';

// Phase 4 — Pre-redevelopment
export {
  PRA_PROMPT,
  PRA_SECTIONS,
  PRA_QUALITY,
  PRA_TEMPLATE,
} from './pre-redevelopment-audit';

// ============================================================================
// Registry types
// ============================================================================

export interface AssessmentPromptConfig {
  systemPrompt: string;
  sections: AssessmentSection[];
  qualityCriteria: QualityCriteria;
}

interface AssessmentTemplateRecord {
  assessment_type: string;
  short_name: string;
  version: number;
  sections: AssessmentSection[];
  quality_criteria: QualityCriteria;
}

// ============================================================================
// Prompt registry — maps short_name (from DB) to prompt + template
// All 66 assessment types registered via safeLoad (lazy, fault-tolerant)
// ============================================================================

const PROMPT_REGISTRY: Record<string, { prompt: string; template: AssessmentTemplateRecord }> = {};

function lazyLoadRegistry(): Record<string, { prompt: string; template: AssessmentTemplateRecord }> {
  if (Object.keys(PROMPT_REGISTRY).length > 0) return PROMPT_REGISTRY;

  // Phase 1 core types (always loaded)
  const { PLANNING_STATEMENT_PROMPT: psP, PLANNING_STATEMENT_TEMPLATE: psT } = require('./planning-statement');
  const { DAS_PROMPT: dasP, DAS_TEMPLATE: dasT } = require('./design-access-statement');
  const { FRA_PROMPT: fraP, FRA_TEMPLATE: fraT } = require('./flood-risk-assessment');
  const { HERITAGE_PROMPT: hsP, HERITAGE_TEMPLATE: hsT } = require('./heritage-statement');
  const { TRANSPORT_PROMPT: tsP, TRANSPORT_TEMPLATE: tsT } = require('./transport-statement');

  PROMPT_REGISTRY['PS'] = { prompt: psP, template: psT };
  PROMPT_REGISTRY['DAS'] = { prompt: dasP, template: dasT };
  PROMPT_REGISTRY['FRA'] = { prompt: fraP, template: fraT };
  PROMPT_REGISTRY['HS'] = { prompt: hsP, template: hsT };
  PROMPT_REGISTRY['TS'] = { prompt: tsP, template: tsT };

  // Guarded require for all other types — skip silently if file missing
  const safeLoad = (path: string, key: string, promptKey: string, templateKey: string) => {
    try {
      const mod = require(path);
      if (mod[promptKey] && mod[templateKey]) {
        PROMPT_REGISTRY[key] = { prompt: mod[promptKey], template: mod[templateKey] };
      }
    } catch {
      // File not yet created — skip silently
    }
  };

  // ---- Tier 1: Core Planning ----
  safeLoad('./affordable-housing-statement', 'AHS', 'AHS_PROMPT', 'AHS_TEMPLATE');
  safeLoad('./statement-community-involvement', 'SCI', 'SCI_PROMPT', 'SCI_TEMPLATE');

  // ---- Tier 2: Environmental ----
  safeLoad('./environmental-impact-assessment', 'EIA', 'EIA_PROMPT', 'EIA_TEMPLATE');
  safeLoad('./ecological-assessment', 'PEA', 'PEA_PROMPT', 'PEA_TEMPLATE');
  safeLoad('./protected-species-survey', 'PSS', 'PSS_PROMPT', 'PSS_TEMPLATE');
  safeLoad('./biodiversity-net-gain', 'BNG', 'BNG_PROMPT', 'BNG_TEMPLATE');
  safeLoad('./arboricultural-impact', 'AIA', 'AIA_PROMPT', 'AIA_TEMPLATE');
  safeLoad('./air-quality-assessment', 'AQA', 'AQA_PROMPT', 'AQA_TEMPLATE');
  safeLoad('./noise-impact-assessment', 'NIA', 'NIA_PROMPT', 'NIA_TEMPLATE');
  safeLoad('./land-contamination-phase1', 'LC1', 'LC1_PROMPT', 'LC1_TEMPLATE');
  safeLoad('./land-contamination-phase2', 'LC2', 'LC2_PROMPT', 'LC2_TEMPLATE');
  safeLoad('./odour-assessment', 'OA', 'ODA_PROMPT', 'ODA_TEMPLATE');
  safeLoad('./agricultural-land-classification', 'ALC', 'ALC_PROMPT', 'ALC_TEMPLATE');

  // ---- Tier 3: Flood/Drainage ----
  safeLoad('./sequential-test-flood', 'STF', 'SEQUENTIAL_TEST_FLOOD_PROMPT', 'SEQUENTIAL_TEST_FLOOD_TEMPLATE');
  safeLoad('./exception-test-flood', 'ETF', 'EXCEPTION_TEST_FLOOD_PROMPT', 'EXCEPTION_TEST_FLOOD_TEMPLATE');
  safeLoad('./drainage-strategy', 'DS', 'DRAINAGE_STRATEGY_PROMPT', 'DRAINAGE_STRATEGY_TEMPLATE');
  safeLoad('./foul-sewage-assessment', 'FSA', 'FSA_PROMPT', 'FSA_TEMPLATE');
  safeLoad('./water-supply-assessment', 'WSA', 'WSA_PROMPT', 'WSA_TEMPLATE');

  // ---- Tier 4: Transport ----
  safeLoad('./transport-assessment', 'TA', 'TRANSPORT_ASSESSMENT_PROMPT', 'TRANSPORT_ASSESSMENT_TEMPLATE');
  safeLoad('./travel-plan', 'TP', 'TRAVEL_PLAN_PROMPT', 'TRAVEL_PLAN_TEMPLATE');
  safeLoad('./parking-survey', 'PKS', 'PARKING_SURVEY_PROMPT', 'PARKING_SURVEY_TEMPLATE');
  safeLoad('./construction-traffic-management', 'CTMP', 'CTMP_PROMPT', 'CTMP_TEMPLATE');

  // ---- Tier 5: Energy/Sustainability ----
  safeLoad('./energy-statement', 'ES', 'ES_PROMPT', 'ES_TEMPLATE');
  safeLoad('./sustainability-statement', 'SS', 'SS_PROMPT', 'SS_TEMPLATE');
  safeLoad('./whole-life-carbon-assessment', 'WLCA', 'WLCA_PROMPT', 'WLCA_TEMPLATE');
  safeLoad('./circular-economy-statement', 'CES', 'CES_PROMPT', 'CES_TEMPLATE');
  safeLoad('./breeam-pre-assessment', 'BREEAM', 'BPA_PROMPT', 'BPA_TEMPLATE');
  safeLoad('./overheating-risk-assessment', 'ORA', 'ORA_PROMPT', 'ORA_TEMPLATE');

  // ---- Tier 6: Daylight/Amenity ----
  safeLoad('./daylight-sunlight-assessment', 'DSA', 'DSA_PROMPT', 'DSA_TEMPLATE');
  safeLoad('./wind-microclimate-assessment', 'WMA', 'WMA_PROMPT', 'WMA_TEMPLATE');
  safeLoad('./overshadowing-study', 'OSS', 'OSS_PROMPT', 'OSS_TEMPLATE');

  // ---- Tier 7: Heritage/Archaeology ----
  safeLoad('./archaeological-desk-based', 'ADBA', 'ADBA_PROMPT', 'ADBA_TEMPLATE');
  safeLoad('./archaeological-field-evaluation', 'AFE', 'AFE_PROMPT', 'AFE_TEMPLATE');
  safeLoad('./historic-building-recording', 'HBR', 'HBR_PROMPT', 'HBR_TEMPLATE');
  safeLoad('./townscape-visual-impact', 'TVIA', 'TVIA_PROMPT', 'TVIA_TEMPLATE');

  // ---- Tier 8: Fire/Structural ----
  safeLoad('./fire-statement', 'FS', 'FS_PROMPT', 'FS_TEMPLATE');
  safeLoad('./fire-safety-strategy', 'FSS', 'FSS_PROMPT', 'FSS_TEMPLATE');
  safeLoad('./structural-survey', 'SSV', 'SSR_PROMPT', 'SSR_TEMPLATE');
  safeLoad('./basement-impact-assessment', 'BIA', 'BIA_PROMPT', 'BIA_TEMPLATE');
  safeLoad('./geotechnical-assessment', 'GA', 'GTA_PROMPT', 'GTA_TEMPLATE');

  // ---- Tier 9: Landscape/Visual ----
  safeLoad('./landscape-visual-impact', 'LVIA', 'LVIA_PROMPT', 'LVIA_TEMPLATE');
  safeLoad('./landscape-strategy', 'LS', 'LS_PROMPT', 'LS_TEMPLATE');
  safeLoad('./green-infrastructure-plan', 'GIP', 'GIP_PROMPT', 'GIP_TEMPLATE');

  // ---- Tier 10: Commercial/Viability ----
  safeLoad('./viability-assessment', 'VA', 'VA_PROMPT', 'VA_TEMPLATE');
  safeLoad('./retail-impact-assessment', 'RIA', 'RIA_PROMPT', 'RIA_TEMPLATE');
  safeLoad('./sequential-test-retail', 'STR', 'STR_PROMPT', 'STR_TEMPLATE');
  safeLoad('./economic-impact-assessment', 'ECIA', 'EcIA_PROMPT', 'EcIA_TEMPLATE');
  safeLoad('./employment-land-assessment', 'ELA', 'ELA_PROMPT', 'ELA_TEMPLATE');

  // ---- Tier 11: Specialist ----
  safeLoad('./construction-management-plan', 'CMP', 'CMP_PROMPT', 'CMP_TEMPLATE');
  safeLoad('./site-waste-management-plan', 'SWMP', 'SWMP_PROMPT', 'SWMP_TEMPLATE');
  safeLoad('./waste-management-strategy', 'WMS', 'WMS_PROMPT', 'WMS_TEMPLATE');
  safeLoad('./lighting-assessment', 'LA', 'LA_PROMPT', 'LA_TEMPLATE');
  safeLoad('./ventilation-extraction-statement', 'VES', 'VES_PROMPT', 'VES_TEMPLATE');
  safeLoad('./telecommunications-assessment', 'TC', 'TCA_PROMPT', 'TCA_TEMPLATE');
  safeLoad('./utilities-assessment', 'UA', 'UA_PROMPT', 'UA_TEMPLATE');
  safeLoad('./open-space-assessment', 'OSA', 'OSA_PROMPT', 'OSA_TEMPLATE');
  safeLoad('./play-space-assessment', 'PSA', 'PSA_PROMPT', 'PSA_TEMPLATE');
  safeLoad('./health-impact-assessment', 'HIA', 'HIA_PROMPT', 'HIA_TEMPLATE');
  safeLoad('./equalities-impact-assessment', 'EqIA', 'EqIA_PROMPT', 'EqIA_TEMPLATE');
  safeLoad('./social-infrastructure-assessment', 'SIA', 'SIA_PROMPT', 'SIA_TEMPLATE');
  safeLoad('./pre-redevelopment-audit', 'PRA', 'PRA_PROMPT', 'PRA_TEMPLATE');

  return PROMPT_REGISTRY;
}

/**
 * Look up the system prompt and template for a given assessment type.
 */
export function getAssessmentPrompt(
  shortName: string
): { systemPrompt: string; template: AssessmentTemplateRecord } | null {
  const registry = lazyLoadRegistry();
  const key = shortName.toUpperCase();
  const entry = registry[key];
  if (!entry) return null;
  return { systemPrompt: entry.prompt, template: entry.template };
}

/**
 * List all available assessment short names with loaded prompts.
 */
export function listAssessmentTypes(): string[] {
  const registry = lazyLoadRegistry();
  return Object.keys(registry);
}

/**
 * Get the full prompt configuration for use with the generator.
 */
export function getAssessmentPromptConfig(shortName: string): AssessmentPromptConfig | null {
  const result = getAssessmentPrompt(shortName);
  if (!result) return null;

  return {
    systemPrompt: result.systemPrompt,
    sections: result.template.sections,
    qualityCriteria: result.template.quality_criteria,
  };
}
