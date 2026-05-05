import type { SiteConstraints, DevelopmentType, AssessmentType } from '@/types';

interface DetectionResult {
  assessment_type_id: string;
  short_name: string;
  name: string;
  confidence_score: number;
  reason: string;
  credit_cost: number;
}

interface DetectionContext {
  developmentType: DevelopmentType | null;
  numUnits: number | null;
  floorAreaSqm: number | null;
  siteAreaHectares: number | null;
  useClass: string | null;
  constraints: SiteConstraints;
  lpaCode: string | null;
}

/**
 * Rule-based assessment detection engine.
 * Maps site constraints, development type, and thresholds to required assessments.
 * Returns assessments sorted by confidence score (highest first).
 */
export function detectRequiredAssessments(
  context: DetectionContext,
  assessmentTypes: AssessmentType[]
): DetectionResult[] {
  const results: DetectionResult[] = [];
  const typeMap = new Map(assessmentTypes.map(t => [t.short_name, t]));

  // Always required
  addIfExists(results, typeMap, 'PS', 1.0, 'Required for all planning applications');

  // DAS required for major applications
  const isMajor = (context.numUnits ?? 0) >= 10 ||
    (context.floorAreaSqm ?? 0) >= 1000 ||
    (context.siteAreaHectares ?? 0) >= 0.5;

  if (isMajor) {
    addIfExists(results, typeMap, 'DAS', 0.95, 'Required for major applications (10+ units or 1000+ sqm)');
  } else {
    addIfExists(results, typeMap, 'DAS', 0.7, 'Recommended for most applications');
  }

  // Flood risk
  const floodZone = context.constraints.flood_zone;
  if (floodZone === '2' || floodZone === '3a' || floodZone === '3b') {
    addIfExists(results, typeMap, 'FRA', 1.0, `Site is in Flood Zone ${floodZone} - FRA required`);
    addIfExists(results, typeMap, 'STF', 0.95, `Sequential Test required for Flood Zone ${floodZone}`);
    if (floodZone === '3a' || floodZone === '3b') {
      addIfExists(results, typeMap, 'ETF', 0.9, `Exception Test required for Flood Zone ${floodZone}`);
    }
  } else if ((context.siteAreaHectares ?? 0) >= 1) {
    addIfExists(results, typeMap, 'FRA', 0.85, 'Site area >= 1 hectare - FRA required even in Flood Zone 1');
  }

  // Drainage - major developments
  if (isMajor) {
    addIfExists(results, typeMap, 'DS', 0.85, 'Drainage strategy required for major developments');
  }

  // Heritage
  if (context.constraints.conservation_area) {
    addIfExists(results, typeMap, 'HS', 1.0, 'Site is within a conservation area');
  }
  if (context.constraints.listed_building && context.constraints.listed_building.length > 0) {
    const nearest = context.constraints.listed_building[0];
    addIfExists(results, typeMap, 'HS', 1.0, `Listed building (Grade ${nearest.grade}) within ${nearest.distance_m}m: ${nearest.name}`);
  }

  // Archaeological
  if (context.constraints.archaeological_priority_area) {
    addIfExists(results, typeMap, 'ADBA', 0.9, 'Site is within an Archaeological Priority Area');
  }

  // Transport
  if (isMajor) {
    if ((context.numUnits ?? 0) >= 50 || (context.floorAreaSqm ?? 0) >= 2500) {
      addIfExists(results, typeMap, 'TA', 0.95, 'Transport Assessment required for large developments');
    } else {
      addIfExists(results, typeMap, 'TS', 0.9, 'Transport Statement required for major developments');
    }
    addIfExists(results, typeMap, 'TP', 0.85, 'Travel Plan required for major developments');
  }

  // Parking
  if (context.developmentType === 'residential' && (context.numUnits ?? 0) >= 5) {
    addIfExists(results, typeMap, 'PKS', 0.6, 'Parking survey may be required for residential developments');
  }

  // CTMP for major developments
  if (isMajor) {
    addIfExists(results, typeMap, 'CTMP', 0.75, 'Construction Traffic Management Plan typically required for major developments');
  }

  // Ecology
  if (context.constraints.sssi) {
    addIfExists(results, typeMap, 'PEA', 1.0, 'Site is within/near a SSSI');
    addIfExists(results, typeMap, 'PSS', 0.8, 'Protected species survey likely required near SSSI');
  }
  if (context.constraints.aonb) {
    addIfExists(results, typeMap, 'PEA', 0.9, 'Site is within an AONB');
    addIfExists(results, typeMap, 'LVIA', 0.95, 'Landscape and Visual Impact Assessment required in AONB');
  }

  // BNG - all major developments
  if (isMajor) {
    addIfExists(results, typeMap, 'BNG', 0.9, 'Biodiversity Net Gain assessment mandatory for major developments');
  }

  // Trees
  if (context.constraints.tree_preservation_orders) {
    addIfExists(results, typeMap, 'AIA', 0.95, 'Site has Tree Preservation Orders');
  }

  // Air quality
  if (context.constraints.air_quality_management_area) {
    addIfExists(results, typeMap, 'AQA', 0.9, 'Site is within an Air Quality Management Area');
  }

  // Green Belt
  if (context.constraints.green_belt) {
    // Planning statement will need to address very special circumstances
    addIfExists(results, typeMap, 'LVIA', 0.85, 'Landscape assessment recommended for Green Belt sites');
  }

  // Affordable housing - residential with 10+ units
  if (context.developmentType === 'residential' && (context.numUnits ?? 0) >= 10) {
    addIfExists(results, typeMap, 'AHS', 0.95, 'Affordable housing statement required for 10+ residential units');
  }

  // Energy/sustainability for major developments
  if (isMajor) {
    addIfExists(results, typeMap, 'ES', 0.8, 'Energy statement typically required for major developments');
    addIfExists(results, typeMap, 'SS', 0.75, 'Sustainability statement recommended for major developments');
  }

  // Fire statement for buildings 18m+
  if ((context.floorAreaSqm ?? 0) >= 1000 && context.developmentType === 'residential') {
    addIfExists(results, typeMap, 'FS', 0.7, 'Fire statement may be required for tall residential buildings');
  }

  // Noise
  if (context.constraints.noise_exposure === 'high' || context.constraints.noise_exposure === 'medium') {
    addIfExists(results, typeMap, 'NIA', 0.85, `Site has ${context.constraints.noise_exposure} noise exposure`);
  }

  // SCI for large schemes
  if ((context.numUnits ?? 0) >= 50) {
    addIfExists(results, typeMap, 'SCI', 0.8, 'Statement of Community Involvement expected for large schemes');
  }

  // Commercial/retail specific
  if (context.developmentType === 'retail' || context.useClass === 'E') {
    addIfExists(results, typeMap, 'RIA', 0.8, 'Retail Impact Assessment for town centre/retail use');
    addIfExists(results, typeMap, 'STR', 0.85, 'Sequential Test (Retail) required for out-of-centre retail');
  }

  // CMP for major developments
  if (isMajor) {
    addIfExists(results, typeMap, 'CMP', 0.7, 'Construction Management Plan recommended for major developments');
  }

  // Waste management
  if (isMajor) {
    addIfExists(results, typeMap, 'WMS', 0.6, 'Waste Management Strategy for major developments');
  }

  // De-duplicate (keep highest confidence)
  const deduped = new Map<string, DetectionResult>();
  for (const result of results) {
    const existing = deduped.get(result.short_name);
    if (!existing || result.confidence_score > existing.confidence_score) {
      deduped.set(result.short_name, result);
    }
  }

  return Array.from(deduped.values()).sort((a, b) => b.confidence_score - a.confidence_score);
}

function addIfExists(
  results: DetectionResult[],
  typeMap: Map<string, AssessmentType>,
  shortName: string,
  confidence: number,
  reason: string
) {
  const type = typeMap.get(shortName);
  if (type && type.active) {
    results.push({
      assessment_type_id: type.id,
      short_name: shortName,
      name: type.name,
      confidence_score: confidence,
      reason,
      credit_cost: type.credit_cost,
    });
  }
}
