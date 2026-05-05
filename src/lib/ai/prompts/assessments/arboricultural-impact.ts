import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Arboricultural Impact Assessment (AIA) -- required for planning applications
 * where development may affect trees on or adjacent to the site, including those
 * protected by Tree Preservation Orders (TPOs), trees within Conservation Areas,
 * and any trees of significant amenity or ecological value.
 *
 * The AIA is prepared in accordance with BS 5837:2012 "Trees in relation to
 * design, demolition and construction -- Recommendations" and assesses the
 * impact of the proposed development on existing trees, provides a Tree
 * Protection Plan, and sets out mitigation and replacement planting proposals.
 */

export const AIA_PROMPT = `You are preparing an Arboricultural Impact Assessment (AIA) to accompany a planning application submitted to a local planning authority in England. The AIA should read as though prepared by a suitably qualified arboriculturist (Chartered Arboriculturist, Registered Consultant of the Arboricultural Association, or equivalent) in accordance with BS 5837:2012.

## Document Purpose

An Arboricultural Impact Assessment evaluates the impact of a proposed development on existing trees and hedgerows. It must:
1. Identify all trees within the site and those on adjacent land whose root protection areas (RPAs) may be affected by the development.
2. Categorise trees using the BS 5837:2012 quality classification (A, B, C, U).
3. Assess the impact of the proposed development on each tree, including direct removal, crown reduction, root severance, and changes to the soil environment.
4. Set out a Tree Protection Plan (TPP) showing protective barriers and construction exclusion zones.
5. Provide an Arboricultural Method Statement (AMS) for works within or adjacent to RPAs.
6. Set out mitigation and replacement planting proposals to compensate for any tree losses.

## Key Policy and Standards References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 131**: Planning policies and decisions should ensure that new streets are tree-lined, that opportunities are taken to incorporate trees elsewhere in developments (such as parks and community orchards), that appropriate measures are in place to secure the long-term maintenance of newly-planted trees, and that existing trees are retained wherever possible.
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment by: (a) protecting and enhancing valued landscapes, sites of biodiversity or geological value and soils (in a manner commensurate with their statutory status or identified quality in the development plan); (b) recognising the intrinsic character and beauty of the countryside, and the wider benefits from natural capital and ecosystem services.
- **Paragraph 180(c)**: Development resulting in the loss or deterioration of irreplaceable habitats (such as ancient woodland and ancient or veteran trees) should be refused, unless there are wholly exceptional reasons and a suitable compensation strategy exists.

### BS 5837:2012 Trees in Relation to Design, Demolition and Construction
This is the primary technical standard for the AIA. Key requirements:

#### Tree Survey and Categorisation
- **Survey scope**: All trees within the site and those on adjacent land where the development could affect their root protection areas. Minimum stem diameter threshold: 75mm at 1.5m above ground level (or where stems emerge from the ground for multi-stemmed trees).
- **Data recorded per tree**: Reference number, species (common and scientific name), stem diameter (mm) at 1.5m height, crown spread (m to N/E/S/W), crown clearance (m), height (m), age class (young, semi-mature, early-mature, mature, over-mature, veteran), condition (physiological and structural), preliminary management recommendations, estimated remaining contribution (years), BS 5837 category.
- **Category classification**:
  - **Category A (high quality)**: Trees of high quality with an estimated remaining life expectancy of at least 40 years. Subcategories: A1 (arboricultural), A2 (landscape), A3 (cultural/historical/conservation).
  - **Category B (moderate quality)**: Trees of moderate quality with an estimated remaining life expectancy of at least 20 years. Subcategories: B1, B2, B3.
  - **Category C (low quality)**: Trees of low quality with an estimated remaining life expectancy of at least 10 years, or young trees with a stem diameter below 150mm. Subcategories: C1, C2, C3.
  - **Category U (unsuitable for retention)**: Trees in such a condition that they cannot realistically be retained as living trees in the context of the current land use for longer than 10 years. Includes dead, dying, dangerous, or structurally unsound trees.
- **Colour coding**: A = dark green; B = mid blue; C = grey; U = dark red.
- **Groups and hedgerows**: Where trees form a group or hedgerow, they may be surveyed as a collective feature with an overall category.

#### Root Protection Areas (RPAs)
- **Calculation**: RPA = area equivalent to a circle with a radius 12 times the stem diameter (at 1.5m) for single-stemmed trees. For multi-stemmed trees, the stem diameter is calculated as the square root of the sum of squares of the individual stem diameters.
- **Minimum RPA**: No tree shall have an RPA with a radius less than 2m.
- **Maximum RPA**: The default 12x multiplier may be modified (reduced or increased) based on site-specific factors such as species tolerance, soil type, topography, and existing root constraints.
- **RPA shape**: While calculated as a circle, the RPA may be plotted as an asymmetric shape where factors constrain root growth (e.g., existing structures, compacted ground).

#### Tree Constraints Plan (TCP)
- A plan showing trees plotted to scale with their RPAs, category colour coding, and any constraints arising from their presence.

#### Arboricultural Impact Assessment
- Assessment of the impact of the proposed development on each tree.
- Identification of trees to be removed and justification for removal.
- Assessment of impacts on trees to be retained: root severance, crown reduction, soil compaction, changes to drainage/water table.

#### Tree Protection Plan (TPP)
- A plan showing protective barriers (to BS 5837 specification), construction exclusion zones, and access routes.
- Barrier type: vertical and horizontal barriers constructed of weld-mesh panels on a scaffold framework, at minimum 2.3m high.
- Ground protection within RPAs where access is required: load-bearing boards on a compressible layer to prevent soil compaction.

#### Arboricultural Method Statement (AMS)
- Detailed method statement for any works within or adjacent to RPAs.
- Covers: foundation design (pile and beam, pier and beam, mini-pile), service routes (thrust boring, hand dig), surface treatments (no-dig construction using cellular confinement systems), drainage, and construction sequencing.

### Other Key References
- **Town and Country Planning Act 1990 (Part VIII)**: Tree Preservation Orders.
- **Town and Country Planning (Tree Preservation) (England) Regulations 2012**: TPO procedures, notification requirements, and exemptions.
- **Planning (Listed Buildings and Conservation Areas) Act 1990, Section 211**: Six-week notification for works to trees in Conservation Areas.
- **NPPG Trees and planning**: Planning practice guidance on trees.
- **Natural England and Forestry Commission Standing Advice on Ancient Woodland, Ancient Trees and Veteran Trees (2022)**: Assessment of impacts on irreplaceable habitats.
- **Ancient Woodland Inventory (AWI)**: Natural England mapping of ancient woodland.
- **NJUG Guidelines for the Planning, Installation and Maintenance of Utility Apparatus in Proximity to Trees (Volume 4, 2007)**: Guidance on utility installations near trees.
- **Local TPO schedule and Conservation Area boundaries**: Obtained from the LPA.
- **Local plan tree and landscape policies**: Authority-specific requirements.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the AIA and its policy basis (NPPF Paragraphs 131 and 174).
- Identify the site by full postal address and grid reference.
- Summarise the proposed development.
- State the scope of the assessment: all trees surveyed, the survey area extent, and any adjacent trees included.
- Confirm compliance with BS 5837:2012 as the technical standard.
- State the qualifications of the author (or "[PREPARED FOR REVIEW BY A SUITABLY QUALIFIED ARBORICULTURIST]").
- Note any limitations (access restrictions, survey season, adjacent land access).
- Outline the document structure and list accompanying plans (TCP, TPP, AMS).

### 2. Survey Methodology (400-800 words)
- State the date of the tree survey.
- Describe the survey methodology with reference to BS 5837:2012 Section 4.
- State the minimum stem diameter threshold (75mm at 1.5m).
- List the data recorded for each tree: reference number, species, stem diameter, crown spread (N/E/S/W), height, crown clearance, age class, physiological condition, structural condition, preliminary management recommendations, estimated remaining contribution, BS 5837 category.
- Describe the method for calculating Root Protection Areas (12 x stem diameter for single stems, sqrt of sum of squares for multi-stemmed).
- Describe the categorisation criteria (A, B, C, U) with subcategories.
- State the equipment used (diameter tape, clinometer, measuring tape, hand-held GPS where applicable).
- Note the weather and ground conditions at the time of survey.
- State whether the survey was undertaken during the leaf-on or leaf-off season and note any implications for condition assessment.
- If survey data has been provided by the user, reference it. If not, flag as "[TREE SURVEY DATA REQUIRED -- TO BE UNDERTAKEN BY A QUALIFIED ARBORICULTURIST TO BS 5837:2012]".

### 3. Tree Survey Schedule (500-1000 words)
- Present the tree survey data in a tabular format following BS 5837:2012:
  - Tree Reference Number (T1, T2... G1, G2... H1, H2... for individual trees, groups, and hedgerows).
  - Species (common name and botanical name).
  - Stem Diameter (mm at 1.5m above ground level).
  - Crown Spread (m to N/E/S/W or as a radius for symmetrical crowns).
  - Height (m).
  - Crown Clearance (m above ground level).
  - Age Class (Y/SM/EM/M/OM/V).
  - Physiological Condition (Good/Fair/Poor/Dead).
  - Structural Condition (Good/Fair/Poor).
  - Preliminary Management Recommendations.
  - Estimated Remaining Contribution (>40 years / 20-40 years / 10-20 years / <10 years).
  - BS 5837 Category (A1/A2/A3, B1/B2/B3, C1/C2/C3, U).
  - Root Protection Area radius (m) and area (m2).
- Provide a narrative summary of the tree population: total number, species diversity, age class distribution, category distribution.
- Describe any notable or significant trees: large specimens, veteran characteristics, TPO trees, trees of particular amenity value.
- Reference the Tree Survey Plan (drawing number).
- If survey data has not been provided, present a preliminary assessment based on aerial photography and OS mapping and flag: "[TREE SURVEY SCHEDULE TO BE COMPLETED FOLLOWING FIELD SURVEY]".

### 4. Arboricultural Constraints (400-800 words)
#### 4.1 Tree Preservation Orders and Conservation Area Trees
- State whether any trees on or adjacent to the site are subject to TPOs. If so, identify the TPO reference number and the trees covered.
- State whether the site is within a Conservation Area (all trees with a stem diameter >75mm at 1.5m are protected by the six-week notification requirement under Section 211).
- Describe the implications: consent required for works to TPO trees; notification required for works to CA trees.

#### 4.2 Ancient Woodland and Veteran Trees
- State whether the site is within or adjacent to ancient woodland (reference the Ancient Woodland Inventory on MAGIC).
- Identify any veteran or ancient trees (applying Natural England criteria: large girth for species, crown retrenchment, hollowing, bark loss, deadwood).
- Reference the Natural England and Forestry Commission standing advice: a minimum 15m buffer zone from ancient woodland (or the root protection area, whichever is greater).
- Reference NPPF Paragraph 180(c): irreplaceable habitats.

#### 4.3 Tree Constraints Analysis
- Describe the constraints arising from the tree survey:
  - Category A and B trees that should be retained and whose RPAs represent development constraints.
  - Trees with large RPAs that constrain building footprints, access routes, or infrastructure.
  - Trees with structural defects requiring management prior to or during development.
  - Shade and overshadowing from retained trees affecting building design or garden amenity.
- Reference the Tree Constraints Plan (TCP) showing RPAs and tree locations.

### 5. Impact Assessment (600-1200 words)
#### 5.1 Trees Proposed for Removal
- List each tree or group proposed for removal with the BS 5837 category, reason for removal, and justification:
  - Category U trees: removal justified on grounds of condition (dead, dangerous, structurally unsound).
  - Category C trees: removal justified where necessary to enable development and where loss is compensated.
  - Category B trees: removal to be avoided where possible; where necessary, provide clear justification and enhanced compensatory planting.
  - Category A trees: removal should be strongly resisted. Only proposed if absolutely essential to enable development with no feasible alternative layout.
- Present a removal summary table: Tree Ref, Species, Category, Stem Diameter, Reason for Removal.
- State the total number of trees removed by category.

#### 5.2 Impact on Retained Trees
- For each retained tree whose RPA overlaps with the proposed development:
  - Describe the nature of the encroachment: building footprint, access road, service trench, hard landscaping, level changes.
  - Quantify the RPA encroachment as a percentage of the total RPA.
  - Assess the likely impact: root severance, soil compaction, changes to drainage, crown pruning requirement.
  - State whether the encroachment is acceptable (BS 5837 recommends that RPA encroachment should not exceed 20% and should be no closer than the circle of radius equal to the RPA radius minus 20%).
- Describe any crown works required to accommodate the development: crown lifting, crown reduction, selective pruning.

#### 5.3 Construction Impacts
- Assess the potential construction-phase impacts:
  - Soil compaction from plant and vehicle movements.
  - Root severance from excavation.
  - Root desiccation from exposure.
  - Crown damage from machinery operation.
  - Chemical contamination from concrete washout, fuels, or other construction materials.
  - Changes to the water table or drainage patterns.

### 6. Tree Protection Plan (400-800 words)
- Describe the Tree Protection Plan (TPP) prepared in accordance with BS 5837:2012 Section 6.2.
- Set out the protective barrier specification:
  - Type: weld-mesh panels on a scaffold framework, minimum 2.3m high.
  - Position: at the edge of the RPA or at an agreed reduced distance (with arboricultural justification).
  - Fixings: secured to the ground to prevent displacement.
  - Signage: "CONSTRUCTION EXCLUSION ZONE -- NO ACCESS, STORAGE, OR GROUND DISTURBANCE" (or similar).
- Describe the construction exclusion zones within the barriers.
- Describe ground protection where access within RPAs is necessary:
  - Type: proprietary ground protection boards (e.g., compressed plywood or plastic track mats) on a compressible layer (150mm woodchip or similar).
  - Extent: covering the area of access within the RPA.
- Set out the installation timeline: barriers erected before any site clearance or construction activity commences and maintained until completion.
- Describe the role of the Arboricultural Clerk of Works (ACoW):
  - Pre-commencement site meeting to agree barrier positions.
  - Regular monitoring inspections during construction.
  - Sign-off on barrier removal.
- Reference the Tree Protection Plan drawing (number).

### 7. Mitigation and Replacement Planting (400-800 words)
#### 7.1 Arboricultural Method Statement (AMS)
- Provide a method statement for all works within or adjacent to RPAs:
  - **Foundations**: Where buildings are within RPAs, specify foundation design to minimise root damage: pile and beam, screw piles, pad foundations on geotextile. No conventional strip or trench foundations within RPAs.
  - **Service routes**: Thrust boring or directional drilling beneath RPAs. Hand excavation within RPAs where open-cut is unavoidable. No mechanical excavation within RPAs.
  - **Hard surfaces within RPAs**: No-dig construction using cellular confinement systems (e.g., CellWeb) on geotextile, filled with clean angular stone. No reduction of existing soil levels.
  - **Level changes**: No changes to existing ground levels within RPAs without arboricultural supervision.
  - **Demolition**: Careful demolition of structures within RPAs using hand tools or lightweight machinery. Roots exposed during demolition to be retained and protected.

#### 7.2 Replacement Planting
- Set out the proposed replacement planting to compensate for tree losses:
  - Apply the LPA's replacement planting policy (common approaches: 2:1 or 3:1 replacement ratio for Category B trees, 1:1 for Category C trees, or canopy area replacement).
  - State the number and species of replacement trees.
  - State the planting size: minimum 12-14cm girth for standard trees, 14-16cm or 16-18cm for extra-heavy standards, 20-25cm girth for semi-mature specimens (depending on local policy and site context).
  - Describe planting locations (reference the landscape plan).
  - Describe planting methodology: pit preparation, soil amelioration, staking, guarding, mulching.
  - Describe the maintenance regime for the establishment period (typically 5 years): watering, weeding, mulch replenishment, formative pruning, stake/guard removal, replacement of failures.
- Where space constraints prevent on-site replacement, describe the approach to off-site planting or a financial contribution in lieu.

#### 7.3 Retained Tree Management
- Set out management recommendations for retained trees:
  - Crown works recommended in the tree survey: deadwood removal, crown lifting for access clearance, crown reduction for building clearance.
  - Timing of works: outside the bird nesting season (March-August) unless preceded by a nesting bird check.
  - Ongoing monitoring: annual inspection of retained trees during the establishment period.

### 8. Conclusion (300-500 words)
- Summarise the tree survey findings: total trees surveyed, category distribution (A, B, C, U), notable trees.
- Summarise the trees proposed for removal: number by category and justification.
- Summarise the trees to be retained and the tree protection measures (TPP and AMS).
- Summarise the replacement planting proposals: number, species, size.
- Confirm that the proposed development retains all Category A and B trees wherever practicable, and where removal is necessary, adequate mitigation is provided.
- Confirm that the TPP and AMS are in accordance with BS 5837:2012.
- Confirm compliance with NPPF Paragraphs 131 and 174 and relevant local tree policies.
- Note any TPO consent or Conservation Area notification requirements.
- Recommend planning conditions: TPP implementation, AMS compliance, replacement planting, ACoW appointment, landscaping maintenance.

## Quality Standards

- Reference specific NPPF paragraphs (131, 174, 180(c)) by number.
- Reference BS 5837:2012 as the primary technical standard throughout.
- Use the BS 5837 category system correctly (A1-A3, B1-B3, C1-C3, U) with the correct colour coding.
- Calculate RPAs correctly (12 x stem diameter for single-stemmed trees).
- Reference the Ancient Woodland Inventory and standing advice for ancient/veteran trees.
- Present tree survey data in BS 5837-compliant tabular format.
- Provide specific tree protection barrier specifications (weld-mesh on scaffold, 2.3m high).
- Specify arboricultural construction methods for works within RPAs (pile and beam foundations, thrust boring, no-dig surfaces).
- State replacement planting numbers, species, and sizes.
- Use correct arboricultural terminology: RPA, TCP, TPP, AMS, ACoW, DBH, stem diameter, crown spread, crown clearance, physiological condition, structural condition.
- Where tree survey data has not been provided, clearly flag as required.
- Do not fabricate tree survey data, species identifications, or measurements.`;

export const AIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, scope, BS 5837 compliance, qualifications, and document structure.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the AIA purpose and policy basis (NPPF Paragraphs 131, 174). Identify the site by address and grid reference. Summarise the proposed development. State the survey scope. Confirm BS 5837:2012 compliance. State qualifications. Note limitations. Outline the document structure and list accompanying plans.',
  },
  {
    name: 'Survey Methodology',
    description: 'BS 5837:2012 survey methodology, data recorded, RPA calculation, and categorisation criteria.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'State survey date. Describe BS 5837:2012 Section 4 methodology. State minimum diameter threshold (75mm). List data recorded per tree. Describe RPA calculation (12x stem diameter). Describe categorisation criteria (A, B, C, U). State equipment. Note weather and season. Flag if survey data is not available.',
  },
  {
    name: 'Tree Survey Schedule',
    description: 'Tabulated tree survey data and narrative summary of the tree population.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present tree data in BS 5837-compliant table: reference, species, diameter, crown spread, height, age class, condition, management recommendations, remaining contribution, category, RPA. Summarise the tree population: total number, species, age distribution, category distribution. Describe notable trees and TPO trees. Reference the Tree Survey Plan.',
  },
  {
    name: 'Arboricultural Constraints',
    description: 'TPOs, Conservation Area status, ancient woodland, veteran trees, and tree constraints analysis.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'State TPO status and references. State Conservation Area status. Identify ancient woodland (AWI on MAGIC) and veteran trees. Reference NPPF Paragraph 180(c) and standing advice. Describe constraints from Category A and B trees, large RPAs, shade impacts. Reference the Tree Constraints Plan.',
    subsections: [
      {
        name: 'Tree Preservation Orders and Conservation Area Trees',
        description: 'TPO status, CA status, and implications for the development.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'State TPO references. State CA status. Describe consent and notification requirements.',
      },
      {
        name: 'Ancient Woodland and Veteran Trees',
        description: 'Assessment of irreplaceable habitats and buffer requirements.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Check AWI. Identify veteran trees. Reference 15m buffer. Reference NPPF 180(c) and standing advice.',
      },
      {
        name: 'Tree Constraints Analysis',
        description: 'Constraints arising from tree locations and RPAs.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Describe constraints from Category A/B trees, large RPAs, structural defects, shade. Reference the TCP.',
      },
    ],
  },
  {
    name: 'Impact Assessment',
    description: 'Trees for removal (by category with justification), impact on retained trees, and construction impacts.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'List trees for removal with category, reason, and justification. Present removal summary table. For retained trees with RPA encroachment: describe nature, quantify percentage, assess acceptability. Describe crown works required. Assess construction-phase impacts: compaction, root severance, chemical contamination, drainage changes.',
    subsections: [
      {
        name: 'Trees Proposed for Removal',
        description: 'Schedule of trees to be removed with categorisation and justification.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'List removals with reference, species, category, reason. Justify Category B removals robustly. State totals by category.',
      },
      {
        name: 'Impact on Retained Trees',
        description: 'RPA encroachment assessment and crown works for retained trees.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance: 'For each encroachment: describe nature, quantify as % of RPA, assess acceptability (BS 5837 20% guidance). Describe crown works.',
      },
      {
        name: 'Construction Impacts',
        description: 'Potential construction-phase impacts on trees.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Assess compaction, root severance, desiccation, crown damage, chemical contamination, drainage changes.',
      },
    ],
  },
  {
    name: 'Tree Protection Plan',
    description: 'Protective barriers, construction exclusion zones, ground protection, and ACoW role.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe BS 5837-compliant barrier specification (weld-mesh on scaffold, 2.3m). Describe exclusion zones. Describe ground protection (boards on compressible layer). Set installation timeline (before site clearance). Describe ACoW role: pre-commencement meeting, monitoring, sign-off. Reference the TPP drawing.',
  },
  {
    name: 'Mitigation and Replacement Planting',
    description: 'Arboricultural method statement, replacement planting, and retained tree management.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Provide AMS for works within RPAs: foundation design (pile and beam), service routes (thrust boring), hard surfaces (no-dig cellular confinement), demolition methodology. Set out replacement planting: ratio, numbers, species, sizes, planting methodology, maintenance regime. Describe retained tree management: crown works, timing, monitoring.',
    subsections: [
      {
        name: 'Arboricultural Method Statement',
        description: 'Method statement for construction works within or adjacent to RPAs.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe foundation design, service installation, hard surfaces, level changes, and demolition methods within RPAs.',
      },
      {
        name: 'Replacement Planting',
        description: 'Compensatory tree planting to offset removals.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'State replacement ratio, numbers, species, sizes (girth), planting methodology, maintenance (5-year establishment). Describe off-site options if applicable.',
      },
      {
        name: 'Retained Tree Management',
        description: 'Management recommendations for retained trees.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Describe crown works, timing (outside nesting season), annual monitoring during establishment period.',
      },
    ],
  },
  {
    name: 'Conclusion',
    description: 'Summary of survey, removals, protection, replacement planting, and policy compliance.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise tree survey: total trees, category distribution, notable trees. Summarise removals by category with justification. Summarise tree protection (TPP and AMS). Summarise replacement planting. Confirm Category A and B retention. Confirm BS 5837:2012 compliance. Confirm NPPF Paragraphs 131, 174 compliance. Note TPO/CA requirements. Recommend conditions.',
  },
];

export const AIA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Survey Methodology',
    'Tree Survey Schedule',
    'Arboricultural Constraints',
    'Impact Assessment',
    'Tree Protection Plan',
    'Mitigation and Replacement Planting',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const AIA_TEMPLATE = {
  assessment_type: 'Arboricultural Impact Assessment',
  short_name: 'AIA',
  version: 1,
  sections: AIA_SECTIONS,
  quality_criteria: AIA_QUALITY,
};
