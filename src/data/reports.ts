export type ProRequirement = "none" | "recommended" | "required";

export interface ProfessionalInfo {
  level: ProRequirement;
  reason: string;
  legislation?: string;
  professionalType: string;
}

export interface Report {
  id: number;
  tier: string;
  name: string;
  code: string;
  difficulty: "easy" | "medium" | "hard";
  credits: number;
  keywords: string[];
  professional: ProfessionalInfo;
}

export const REPORTS: Report[] = [
  // ── Core Planning (all none) ──
  { id: 1, tier: "Core Planning", name: "Planning Statement", code: "PS", difficulty: "easy", credits: 1, keywords: ["planning", "general", "statement", "basic", "application"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 2, tier: "Core Planning", name: "Design and Access Statement", code: "DAS", difficulty: "medium", credits: 1, keywords: ["design", "access", "appearance", "layout", "scale"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 3, tier: "Core Planning", name: "Heritage Statement", code: "HS", difficulty: "medium", credits: 2, keywords: ["heritage", "listed", "conservation", "historic", "old building"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 4, tier: "Core Planning", name: "Affordable Housing Statement", code: "AHS", difficulty: "easy", credits: 1, keywords: ["affordable", "housing", "social", "shared ownership"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 5, tier: "Core Planning", name: "Statement of Community Involvement", code: "SCI", difficulty: "easy", credits: 1, keywords: ["community", "consultation", "neighbours", "engagement"], professional: { level: "none", reason: "", professionalType: "" } },

  // ── Environmental ──
  { id: 6, tier: "Environmental", name: "Environmental Impact Assessment", code: "EIA", difficulty: "hard", credits: 10, keywords: ["environment", "impact", "major", "large scale"], professional: { level: "required", reason: "EIA Regulations 2017 require a competent expert to coordinate the Environmental Statement", legislation: "Town and Country Planning (EIA) Regulations 2017", professionalType: "EIA Coordinator" } },
  { id: 7, tier: "Environmental", name: "Preliminary Ecological Appraisal", code: "PEA", difficulty: "hard", credits: 5, keywords: ["ecology", "wildlife", "habitat", "nature", "green"], professional: { level: "recommended", reason: "CIEEM guidelines recommend a qualified ecologist reviews ecological appraisals", professionalType: "Ecologist" } },
  { id: 8, tier: "Environmental", name: "Protected Species Survey", code: "PSS", difficulty: "hard", credits: 5, keywords: ["bats", "newts", "badgers", "protected", "species", "wildlife"], professional: { level: "required", reason: "Natural England requires surveys to be conducted by licensed ecologists", legislation: "Wildlife and Countryside Act 1981, Conservation of Habitats and Species Regulations 2017", professionalType: "Licensed Ecologist" } },
  { id: 9, tier: "Environmental", name: "Biodiversity Net Gain Assessment", code: "BNG", difficulty: "hard", credits: 5, keywords: ["biodiversity", "net gain", "BNG", "habitat", "nature"], professional: { level: "required", reason: "Environment Act 2021 requires a competent person to complete the BNG metric", legislation: "Environment Act 2021", professionalType: "Ecologist" } },
  { id: 10, tier: "Environmental", name: "Arboricultural Impact Assessment", code: "AIA", difficulty: "hard", credits: 5, keywords: ["trees", "arboricultural", "tree survey", "roots", "canopy"], professional: { level: "recommended", reason: "BS 5837:2012 recommends assessment by a qualified arboriculturist", professionalType: "Arboriculturist" } },
  { id: 11, tier: "Environmental", name: "Air Quality Assessment", code: "AQA", difficulty: "medium", credits: 3, keywords: ["air quality", "pollution", "emissions", "dust"], professional: { level: "recommended", reason: "IAQM guidance recommends review by a competent air quality professional", professionalType: "Air Quality Consultant" } },
  { id: 12, tier: "Environmental", name: "Noise Impact Assessment", code: "NIA", difficulty: "hard", credits: 5, keywords: ["noise", "sound", "acoustic", "disturbance", "neighbours"], professional: { level: "recommended", reason: "ProPG and BS 4142 recommend assessment by a qualified acoustician", professionalType: "Acoustician" } },
  { id: 13, tier: "Environmental", name: "Land Contamination Phase 1", code: "LC1", difficulty: "medium", credits: 3, keywords: ["contamination", "land", "soil", "brownfield", "phase 1"], professional: { level: "required", reason: "NPPF and BS 10175 require desk studies to be prepared by a competent person", legislation: "NPPF Para 189, BS 10175:2011", professionalType: "Contaminated Land Specialist" } },
  { id: 14, tier: "Environmental", name: "Land Contamination Phase 2", code: "LC2", difficulty: "hard", credits: 5, keywords: ["contamination", "land", "soil", "brownfield", "phase 2", "intrusive"], professional: { level: "required", reason: "Intrusive site investigations must be supervised by a qualified geoenvironmental engineer", legislation: "NPPF Para 189, BS 10175:2011", professionalType: "Contaminated Land Specialist" } },
  { id: 15, tier: "Environmental", name: "Odour Assessment", code: "OA", difficulty: "hard", credits: 5, keywords: ["odour", "smell", "food", "restaurant", "waste"], professional: { level: "recommended", reason: "IAQM guidance recommends review by a competent odour assessment professional", professionalType: "Environmental Consultant" } },
  { id: 16, tier: "Environmental", name: "Agricultural Land Classification", code: "ALC", difficulty: "hard", credits: 5, keywords: ["agricultural", "farm", "land classification", "rural"], professional: { level: "recommended", reason: "Natural England recommends ALC surveys by a qualified soil scientist", professionalType: "Soil Scientist" } },

  // ── Flood / Drainage (all none) ──
  { id: 17, tier: "Flood / Drainage", name: "Flood Risk Assessment", code: "FRA", difficulty: "medium", credits: 2, keywords: ["flood", "flooding", "water", "river", "risk", "zone"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 18, tier: "Flood / Drainage", name: "Drainage Strategy", code: "DS", difficulty: "medium", credits: 3, keywords: ["drainage", "SuDS", "surface water", "runoff"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 19, tier: "Flood / Drainage", name: "Sequential Test (Flood)", code: "STF", difficulty: "easy", credits: 1, keywords: ["flood", "sequential test", "alternative sites"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 20, tier: "Flood / Drainage", name: "Exception Test (Flood)", code: "ETF", difficulty: "easy", credits: 1, keywords: ["flood", "exception test", "wider benefits"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 21, tier: "Flood / Drainage", name: "Foul Sewage Assessment", code: "FSA", difficulty: "medium", credits: 2, keywords: ["sewage", "foul", "drainage", "waste water"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 22, tier: "Flood / Drainage", name: "Water Supply Assessment", code: "WSA", difficulty: "easy", credits: 1, keywords: ["water", "supply", "mains", "connection"], professional: { level: "none", reason: "", professionalType: "" } },

  // ── Transport ──
  { id: 23, tier: "Transport", name: "Transport Assessment", code: "TA", difficulty: "medium", credits: 3, keywords: ["transport", "traffic", "roads", "highways", "junction"], professional: { level: "recommended", reason: "Most LPAs require TAs to be prepared by a qualified transport planner", professionalType: "Transport Planner" } },
  { id: 24, tier: "Transport", name: "Transport Statement", code: "TS", difficulty: "easy", credits: 1, keywords: ["transport", "traffic", "statement", "small scale"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 25, tier: "Transport", name: "Travel Plan", code: "TP", difficulty: "easy", credits: 1, keywords: ["travel", "commute", "sustainable", "cycling", "bus"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 26, tier: "Transport", name: "Parking Survey", code: "PKS", difficulty: "easy", credits: 1, keywords: ["parking", "cars", "spaces", "survey", "on-street"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 27, tier: "Transport", name: "Construction Traffic Management Plan", code: "CTMP", difficulty: "easy", credits: 1, keywords: ["construction", "traffic", "lorries", "delivery", "management"], professional: { level: "none", reason: "", professionalType: "" } },

  // ── Energy / Sustainability ──
  { id: 28, tier: "Energy / Sustainability", name: "Energy Statement", code: "ES", difficulty: "medium", credits: 2, keywords: ["energy", "carbon", "renewable", "solar", "heat pump"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 29, tier: "Energy / Sustainability", name: "Sustainability Statement", code: "SS", difficulty: "easy", credits: 1, keywords: ["sustainability", "green", "environment", "eco"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 30, tier: "Energy / Sustainability", name: "Whole Life Carbon Assessment", code: "WLCA", difficulty: "medium", credits: 3, keywords: ["carbon", "whole life", "embodied", "lifecycle"], professional: { level: "recommended", reason: "GLA and RICS guidance recommend WLCA by a qualified sustainability consultant", professionalType: "Sustainability Consultant" } },
  { id: 31, tier: "Energy / Sustainability", name: "Circular Economy Statement", code: "CES", difficulty: "easy", credits: 1, keywords: ["circular economy", "waste", "reuse", "recycle"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 32, tier: "Energy / Sustainability", name: "BREEAM Pre-Assessment", code: "BREEAM", difficulty: "medium", credits: 3, keywords: ["BREEAM", "building", "rating", "assessment", "sustainability"], professional: { level: "recommended", reason: "BREEAM assessments must be certified by a licensed BREEAM assessor for formal submission", professionalType: "BREEAM Assessor" } },
  { id: 33, tier: "Energy / Sustainability", name: "Overheating Risk Assessment", code: "ORA", difficulty: "medium", credits: 2, keywords: ["overheating", "heat", "summer", "cooling", "temperature"], professional: { level: "recommended", reason: "CIBSE TM59 methodology requires qualified building physics modelling", professionalType: "Building Physics Engineer" } },

  // ── Daylight / Amenity ──
  { id: 34, tier: "Daylight / Amenity", name: "Daylight and Sunlight Assessment", code: "DSA", difficulty: "hard", credits: 5, keywords: ["daylight", "sunlight", "light", "shadow", "BRE"], professional: { level: "recommended", reason: "BRE Guide recommends daylight assessments by a qualified rights of light surveyor", professionalType: "Rights of Light Surveyor" } },
  { id: 35, tier: "Daylight / Amenity", name: "Wind Microclimate Assessment", code: "WMA", difficulty: "hard", credits: 5, keywords: ["wind", "microclimate", "tall building", "comfort"], professional: { level: "recommended", reason: "CFD modelling and wind tunnel testing require specialist expertise", professionalType: "Wind Engineer" } },
  { id: 36, tier: "Daylight / Amenity", name: "Overshadowing Study", code: "OSS", difficulty: "medium", credits: 2, keywords: ["shadow", "overshadowing", "sunlight", "garden", "neighbour"], professional: { level: "none", reason: "", professionalType: "" } },

  // ── Heritage / Archaeology ──
  { id: 37, tier: "Heritage / Archaeology", name: "Archaeological Desk-Based Assessment", code: "ADBA", difficulty: "medium", credits: 3, keywords: ["archaeology", "historic", "ancient", "desk-based"], professional: { level: "recommended", reason: "CIfA standards recommend preparation by a qualified archaeologist", professionalType: "Archaeologist" } },
  { id: 38, tier: "Heritage / Archaeology", name: "Archaeological Field Evaluation", code: "AFE", difficulty: "hard", credits: 5, keywords: ["archaeology", "field", "dig", "excavation", "trial trench"], professional: { level: "recommended", reason: "CIfA standards require field evaluations to be directed by a qualified archaeologist", professionalType: "Archaeologist" } },
  { id: 39, tier: "Heritage / Archaeology", name: "Historic Building Recording", code: "HBR", difficulty: "hard", credits: 5, keywords: ["historic", "building", "recording", "listed", "old"], professional: { level: "recommended", reason: "Historic England guidance recommends recording by a qualified building archaeologist", professionalType: "Heritage Consultant" } },
  { id: 40, tier: "Heritage / Archaeology", name: "Townscape and Visual Impact Assessment", code: "TVIA", difficulty: "medium", credits: 3, keywords: ["townscape", "visual", "impact", "character", "views"], professional: { level: "none", reason: "", professionalType: "" } },

  // ── Fire / Structural ──
  { id: 41, tier: "Fire / Structural", name: "Fire Statement", code: "FS", difficulty: "medium", credits: 3, keywords: ["fire", "safety", "escape", "gateway", "tall"], professional: { level: "required", reason: "Planning Gateway One requires fire statements for relevant buildings to be prepared by a qualified fire engineer", legislation: "Building Safety Act 2022, Planning Gateway One", professionalType: "Fire Engineer" } },
  { id: 42, tier: "Fire / Structural", name: "Fire Safety Strategy", code: "FSS", difficulty: "hard", credits: 5, keywords: ["fire", "safety", "strategy", "residential", "tall building"], professional: { level: "required", reason: "Fire safety strategies for higher-risk buildings must be prepared by a chartered fire engineer", legislation: "Building Safety Act 2022, BS 9991", professionalType: "Fire Engineer" } },
  { id: 43, tier: "Fire / Structural", name: "Structural Survey", code: "SSV", difficulty: "hard", credits: 5, keywords: ["structural", "survey", "building", "condition", "walls"], professional: { level: "recommended", reason: "Structural assessments should be carried out by a chartered structural engineer", professionalType: "Structural Engineer" } },
  { id: 44, tier: "Fire / Structural", name: "Basement Impact Assessment", code: "BIA", difficulty: "hard", credits: 5, keywords: ["basement", "underground", "excavation", "groundwater"], professional: { level: "recommended", reason: "Basement impact assessments typically require sign-off by a chartered structural or geotechnical engineer", professionalType: "Structural Engineer" } },
  { id: 45, tier: "Fire / Structural", name: "Geotechnical Assessment", code: "GA", difficulty: "hard", credits: 5, keywords: ["geotechnical", "ground", "soil", "foundation", "stability"], professional: { level: "recommended", reason: "Eurocode 7 recommends geotechnical assessments by a qualified geotechnical engineer", professionalType: "Geotechnical Engineer" } },

  // ── Landscape / Visual (all none) ──
  { id: 46, tier: "Landscape / Visual", name: "Landscape and Visual Impact Assessment", code: "LVIA", difficulty: "medium", credits: 3, keywords: ["landscape", "visual", "impact", "countryside", "views"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 47, tier: "Landscape / Visual", name: "Landscape Strategy", code: "LS", difficulty: "medium", credits: 2, keywords: ["landscape", "planting", "garden", "design", "strategy"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 48, tier: "Landscape / Visual", name: "Green Infrastructure Plan", code: "GIP", difficulty: "easy", credits: 1, keywords: ["green", "infrastructure", "planting", "ecology", "open space"], professional: { level: "none", reason: "", professionalType: "" } },

  // ── Commercial / Viability ──
  { id: 49, tier: "Commercial / Viability", name: "Viability Assessment", code: "VA", difficulty: "hard", credits: 10, keywords: ["viability", "cost", "financial", "affordable housing"], professional: { level: "recommended", reason: "RICS guidance recommends viability assessments by a qualified chartered surveyor", professionalType: "Chartered Surveyor" } },
  { id: 50, tier: "Commercial / Viability", name: "Retail Impact Assessment", code: "RIA", difficulty: "medium", credits: 3, keywords: ["retail", "shop", "town centre", "impact"], professional: { level: "recommended", reason: "NPPF requires robust evidence base — professional review strengthens retail assessments", professionalType: "Planning Consultant" } },
  { id: 51, tier: "Commercial / Viability", name: "Sequential Test (Retail)", code: "STR", difficulty: "easy", credits: 1, keywords: ["retail", "sequential", "town centre", "alternative"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 52, tier: "Commercial / Viability", name: "Economic Impact Assessment", code: "ECIA", difficulty: "medium", credits: 2, keywords: ["economic", "jobs", "employment", "impact", "growth"], professional: { level: "recommended", reason: "Economic impact assessments benefit from review by a qualified economist", professionalType: "Economist" } },
  { id: 53, tier: "Commercial / Viability", name: "Employment Land Assessment", code: "ELA", difficulty: "medium", credits: 2, keywords: ["employment", "land", "industrial", "office", "workspace"], professional: { level: "none", reason: "", professionalType: "" } },

  // ── Specialist ──
  { id: 54, tier: "Specialist", name: "Construction Management Plan", code: "CMP", difficulty: "easy", credits: 1, keywords: ["construction", "management", "site", "plan", "works"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 55, tier: "Specialist", name: "Site Waste Management Plan", code: "SWMP", difficulty: "easy", credits: 1, keywords: ["waste", "site", "management", "demolition", "disposal"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 56, tier: "Specialist", name: "Waste Management Strategy", code: "WMS", difficulty: "easy", credits: 1, keywords: ["waste", "bins", "collection", "refuse", "strategy"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 57, tier: "Specialist", name: "Lighting Assessment", code: "LA", difficulty: "medium", credits: 2, keywords: ["lighting", "light", "external", "pollution", "lux"], professional: { level: "recommended", reason: "ILP guidance recommends lighting assessments by a qualified lighting engineer", professionalType: "Lighting Engineer" } },
  { id: 58, tier: "Specialist", name: "Ventilation/Extraction Statement", code: "VES", difficulty: "easy", credits: 1, keywords: ["ventilation", "extraction", "kitchen", "fumes", "restaurant"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 59, tier: "Specialist", name: "Telecommunications Compliance", code: "TC", difficulty: "medium", credits: 2, keywords: ["telecom", "mast", "antenna", "signal", "5G"], professional: { level: "recommended", reason: "ICNIRP compliance certificates typically require sign-off by a qualified RF engineer", professionalType: "RF Engineer" } },
  { id: 60, tier: "Specialist", name: "Utilities Assessment", code: "UA", difficulty: "easy", credits: 1, keywords: ["utilities", "gas", "electric", "water", "connection"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 61, tier: "Specialist", name: "Open Space Assessment", code: "OSA", difficulty: "easy", credits: 1, keywords: ["open space", "park", "recreation", "public", "amenity"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 62, tier: "Specialist", name: "Play Space Assessment", code: "PSA", difficulty: "easy", credits: 1, keywords: ["play", "children", "playground", "amenity", "space"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 63, tier: "Specialist", name: "Health Impact Assessment", code: "HIA", difficulty: "medium", credits: 3, keywords: ["health", "impact", "wellbeing", "community", "air quality"], professional: { level: "recommended", reason: "HIA best practice recommends review by a public health professional", professionalType: "Public Health Consultant" } },
  { id: 64, tier: "Specialist", name: "Equalities Impact Assessment", code: "EqIA", difficulty: "easy", credits: 1, keywords: ["equalities", "equality", "diversity", "inclusion", "impact"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 65, tier: "Specialist", name: "Social Infrastructure Assessment", code: "SIA", difficulty: "medium", credits: 2, keywords: ["social", "infrastructure", "schools", "GP", "community"], professional: { level: "none", reason: "", professionalType: "" } },
  { id: 66, tier: "Specialist", name: "Pre-redevelopment Audit", code: "PRA", difficulty: "medium", credits: 2, keywords: ["pre-redevelopment", "audit", "demolition", "existing use"], professional: { level: "none", reason: "", professionalType: "" } },
];

export const TIERS = [...new Set(REPORTS.map((r) => r.tier))];

export function searchReports(query: string): Report[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return REPORTS.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.code.toLowerCase().includes(q) ||
      r.tier.toLowerCase().includes(q) ||
      r.keywords.some((k) => k.includes(q))
  );
}

export function getRecommendedReports(answers: {
  projectType?: string;
  buildingType?: string;
  workType?: string;
  issues?: string[];
}): Report[] {
  const recommended: Set<number> = new Set();

  // Always recommend Planning Statement
  recommended.add(1);

  // Design & Access for most projects
  if (answers.workType && answers.workType !== "other") {
    recommended.add(2);
  }

  // Heritage related
  if (answers.issues?.includes("listed") || answers.issues?.includes("conservation")) {
    recommended.add(3);
    recommended.add(37);
    recommended.add(40);
  }

  // Trees
  if (answers.issues?.includes("trees")) {
    recommended.add(10);
    recommended.add(47);
  }

  // Flooding
  if (answers.issues?.includes("flooding")) {
    recommended.add(17);
    recommended.add(18);
    recommended.add(19);
  }

  // Noise
  if (answers.issues?.includes("noise")) {
    recommended.add(12);
  }

  // Neighbours
  if (answers.issues?.includes("neighbours")) {
    recommended.add(5);
    recommended.add(36);
  }

  // Access issues
  if (answers.issues?.includes("access")) {
    recommended.add(23);
    recommended.add(26);
  }

  // New build
  if (answers.workType === "new-build") {
    recommended.add(9); // BNG
    recommended.add(28); // Energy
    recommended.add(29); // Sustainability
    recommended.add(54); // CMP
    recommended.add(18); // Drainage
  }

  // Change of use
  if (answers.workType === "change-of-use") {
    recommended.add(23);
    recommended.add(56);
  }

  // Commercial
  if (answers.buildingType === "commercial") {
    recommended.add(50);
    recommended.add(52);
    recommended.add(25);
  }

  return REPORTS.filter((r) => recommended.has(r.id));
}

export function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "easy":
      return "bg-green-100 text-green-800";
    case "medium":
      return "bg-amber-100 text-amber-800";
    case "hard":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
