import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Agricultural Land Classification (ALC) -- required for developments on land
 * outside of existing settlements, particularly where the loss of agricultural
 * land is a material consideration. The NPPF requires that where significant
 * development of agricultural land is demonstrated to be necessary, areas of
 * poorer quality land should be preferred to higher quality land (best and most
 * versatile -- Grades 1, 2, and 3a).
 *
 * AI Difficulty: Hard (10-20 pages). Requires field soil survey by a qualified
 * soil scientist, including auger bore surveys and trial pit analysis.
 *
 * DISCLAIMER: This document is AI-generated and constitutes a draft framework only.
 * It MUST be reviewed, verified, and endorsed by a suitably qualified soil scientist
 * or agricultural land classification surveyor before submission to the local
 * planning authority. Actual soil surveys, laboratory analysis, and ALC grading
 * must be conducted in the field by competent professionals.
 */

export const ALC_PROMPT = `You are preparing an Agricultural Land Classification (ALC) report to accompany a planning application submitted to a local planning authority in England. The ALC report determines the agricultural quality of the land affected by the proposed development and assesses the significance of any loss of best and most versatile (BMV) agricultural land.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft framework only. It MUST be reviewed, verified, and endorsed by a suitably qualified soil scientist or agricultural land classification surveyor (e.g., Member of the British Society of Soil Science, Chartered Scientist, or equivalent) before submission to the local planning authority. Agricultural Land Classification requires detailed field soil survey (auger bore surveys, trial pit excavation, soil profile description, laboratory analysis) that cannot be replicated by AI. No soil survey data should be fabricated.

## Document Purpose

The Agricultural Land Classification report must:
1. Determine the agricultural quality of the land on and around the application site using the ALC system (Grades 1-5, with Grade 3 subdivided into 3a and 3b).
2. Identify whether the site includes any "best and most versatile" (BMV) agricultural land (Grades 1, 2, and 3a).
3. Present the results of a detailed soil survey following the methodology in the Agricultural Land Classification of England and Wales (MAFF, 1988).
4. Assess the significance of any loss of agricultural land, having regard to the NPPF and local plan policies.
5. Consider whether poorer quality land is available as an alternative.
6. Where BMV land is affected, provide justification for its loss and describe any measures to minimise or compensate for the impact.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174(b)**: Planning policies and decisions should contribute to and enhance the natural and local environment by recognising the intrinsic character and beauty of the countryside, and the wider benefits from natural capital and ecosystem services -- including the economic and other benefits of the best and most versatile agricultural land.
- **Paragraph 175**: Plans should allocate land with the least environmental or amenity value, where consistent with other policies in the Framework.
- **Footnote 58 to Paragraph 175**: "Where significant development of agricultural land is demonstrated to be necessary, areas of poorer quality land should be preferred to that of a higher quality." The footnote defines best and most versatile agricultural land as "land in Grades 1, 2 and 3a of the Agricultural Land Classification."
- **Paragraph 174**: Overall, planning policies should contribute to enhancing the natural environment.

### Agricultural Land Classification of England and Wales -- Revised Guidelines and Criteria for Grading the Quality of Agricultural Land (MAFF, 1988)
The definitive ALC grading system:
- **Grade 1 -- Excellent quality**: Land with no or very minor limitations to agricultural use. A very wide range of agricultural and horticultural crops can be grown, including the most demanding root crops and soft fruit. Yields are high and consistent.
- **Grade 2 -- Very good quality**: Land with minor limitations which affect crop yield, cultivations, or harvesting. A wide range of agricultural and horticultural crops can usually be grown. On some Grade 2 land, the range of crops may be restricted by limitations of climate, gradient, or soil.
- **Grade 3 -- Good to moderate quality**: Land with moderate limitations which affect the choice of crops, timing and type of cultivation, harvesting, or the level of yield. Grade 3 is subdivided:
  - **Subgrade 3a -- Good quality**: Land capable of consistently producing moderate to high yields of a narrow range of arable crops, especially cereals, or moderate yields of a wide range of crops including cereals, grass, oilseed rape, potatoes, sugar beet, and the less demanding horticultural crops.
  - **Subgrade 3b -- Moderate quality**: Land capable of producing moderate yields of a narrow range of crops, principally cereals and grass, or lower yields of a wider range of crops, or high yields of grass which can be grazed or harvested over most of the year.
- **Grade 4 -- Poor quality**: Land with severe limitations which significantly restrict the range of crops and/or the level of yields. Mainly suitable for grass with occasional arable crops.
- **Grade 5 -- Very poor quality**: Land with very severe limitations which restrict use to permanent pasture or rough grazing, except for occasional pioneer forage crops.

The ALC grade is determined by the most limiting factor from the following parameters:
- **Climate**: Accumulated temperature (day degrees above 0 degrees C, January-June), average annual rainfall, field capacity days, climate grade.
- **Site**: Gradient, micro-relief, flood risk.
- **Soil**: Texture, structure, depth, stoniness, chemical fertility (topsoil pH, nutrients).
- **Wetness**: Soil wetness class (based on drainage and water regime), field capacity days, depth to slowly permeable layer, depth to gleying.
- **Droughtiness**: Available water capacity (AWC) in the profile, moisture balance.
- **Gradient**: Slope angle and its effect on mechanised cultivation.
- **Flood risk**: Frequency and duration of flooding.

### Natural England Technical Information Notes
- **TIN049: Agricultural Land Classification -- Protecting the Best and Most Versatile Agricultural Land (2012)**: Explains the ALC system and Natural England's role.
- **TIN073: Triggers for Consultation with Natural England (2018)**: Natural England must be consulted on planning applications involving the loss of 20ha or more of BMV land (Grades 1, 2, 3a), or where the LPA does not have sufficient information to make a decision.
- **Guidance on ALC survey methodology**: Natural England provides guidance on survey density, auger spacing, and reporting.

### Planning Practice Guidance: Natural Environment (PPG)
- **Paragraph 026**: How does the ALC system work?
- **Paragraph 027**: What is "best and most versatile" agricultural land?
- **Paragraph 028**: When is an ALC assessment required?
- **Paragraph 029**: How should ALC assessments be presented?

### Other Key References
- **DEFRA Magic Map**: Provisional ALC grading (1:250,000 scale) available on the MAGIC mapping system. Note: Provisional ALC is reconnaissance-level and may not accurately reflect site-specific conditions; detailed survey is required for planning applications.
- **Soil Survey of England and Wales**: Published soil association maps and memoirs.
- **Cranfield University Soilscapes**: Generalised soil type mapping.
- **British Standard BS 1377**: Methods of test for soils for civil engineering purposes (relevant to some soil testing).
- **Natural England Provisional ALC dataset**: Post-1988 detailed ALC surveys held by Natural England (available on request).

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the ALC report and the policy context (NPPF Paragraph 174(b) and Footnote 58 to Paragraph 175).
- Identify the site: full postal address, National Grid Reference, site area.
- Describe the proposed development and the area of agricultural land affected.
- Summarise the current agricultural use of the site (arable, pastoral, mixed, equestrian, unused).
- State the objectives of the ALC survey:
  - To determine the ALC grade of the site.
  - To identify whether the land is BMV (Grades 1, 2, 3a).
  - To inform the planning assessment of agricultural land loss.
- State the qualifications of the author (or "[PREPARED BY A SUITABLY QUALIFIED SOIL SCIENTIST / ALC SURVEYOR]").
- Include the AI-generated disclaimer.

### 2. Policy Framework (300-600 words)
- Set out NPPF Paragraph 174(b) and Footnote 58 to Paragraph 175 in full.
- Explain the definition of BMV agricultural land (Grades 1, 2, and 3a).
- Reference the PPG on Natural Environment (Paragraphs 026-029).
- Reference the requirement to consult Natural England for loss of 20ha+ BMV land (TIN073).
- Reference relevant local plan policies on agricultural land protection.
- Note that the provisional ALC data (MAGIC map) is at reconnaissance level and may not accurately reflect site-specific conditions.
- Explain the importance of a detailed ALC survey for planning applications.

### 3. Methodology (400-800 words)
- Describe the ALC survey methodology:
  - **Survey date(s)**: When the field survey was conducted (note seasonal considerations -- surveys should ideally be conducted when the soil is at or near field capacity, typically October-April).
  - **Survey density**: Number of auger bores per hectare (Natural England recommends a minimum of 1 auger bore per hectare for detailed surveys; denser sampling may be required for complex sites).
  - **Auger bore survey**: Method (hand auger to typically 1.0-1.2m depth), positions (systematic grid or targeted), parameters recorded:
    - Topsoil: depth, texture, colour, organic matter content, structure, stoniness.
    - Subsoil: depth, texture, colour, structure, mottling/gleying depth, stoniness.
    - Depth to slowly permeable layer.
    - Depth to gleying.
    - Presence of rock or impenetrable layers.
    - Drainage conditions.
  - **Trial pit(s)**: If excavated, describe the methodology, dimensions, and parameters assessed (full soil profile description, detailed structural assessment, bulk density, compaction).
  - **Laboratory analysis** (if conducted): Topsoil pH, nutrient status (P, K, Mg), organic matter content, particle size distribution.
  - **Climatic assessment**: Obtained from the ALC system's climatic database (Meteorological Office data interpolated to the site grid reference):
    - Accumulated temperature (day degrees above 0 degrees C, January-June).
    - Average annual rainfall (mm).
    - Field capacity days.
    - Climate grade.
  - **Reference materials**: MAFF 1988 ALC guidelines, Soil Survey of England and Wales mapping.
- If survey data has not been provided, flag: "[DETAILED SOIL SURVEY DATA TO BE PROVIDED BY QUALIFIED SOIL SCIENTIST]".

### 4. Site Description (300-600 words)
- Describe the site:
  - Location: describe the geographical setting, surrounding land uses, landscape context.
  - Topography: elevation (mAOD), gradient, aspect, micro-relief.
  - Current land use: arable, pastoral, mixed farming, equestrian, horticulture, set-aside, unused/derelict.
  - Cropping: current and recent cropping history (if known).
  - Field pattern: field sizes, boundaries (hedgerows, ditches, walls, fences).
  - Drainage: existing land drains, ditches, watercourses. Evidence of waterlogging or poor drainage.
  - Vegetation: grassland type, crop type, weed species, general condition.
  - Access: farm access tracks, proximity to farm buildings.
- Describe the regional agricultural context: the character of farming in the area, typical enterprises, soil types.

### 5. Soil Survey Results (600-1200 words)
- Present the soil survey findings:
  - **Soil type(s)**: Identify the soil association(s) present on the site (from the Soil Survey of England and Wales or Cranfield Soilscapes) and describe the soil type(s) found.
  - **Topsoil**: Describe the topsoil characteristics:
    - Depth (typically 20-35cm for cultivated soils).
    - Texture (sandy, loamy, clayey -- using the MAFF textural classes: sand, loamy sand, sandy loam, sandy silt loam, silt loam, sandy clay loam, clay loam, silty clay loam, sandy clay, silty clay, clay).
    - Colour: Munsell colour or description (dark brown, greyish brown, etc.).
    - Organic matter content: estimated or measured (low <3%, moderate 3-6%, high >6%).
    - Structure: granular, blocky, prismatic.
    - Stoniness: percentage volume, stone type, stone size.
  - **Subsoil**: Describe the subsoil characteristics at each depth interval:
    - Texture and structure changes with depth.
    - Colour changes: gleying indicators (grey, bluish-grey mottles indicating waterlogging).
    - Depth to slowly permeable layer (texture class Clay or heavy Clay Loam with massive or weakly developed structure).
    - Depth to gleying/mottling.
    - Root development depth.
    - Stoniness.
  - **Profile depth**: Depth to rock, gravel, or other impenetrable layer.
  - **Soil wetness**: Soil wetness class (I-VI based on duration of waterlogging):
    - Class I: Not waterlogged within 70cm for more than 30 days.
    - Class II: Waterlogged within 70cm for 30-90 days.
    - Class III: Waterlogged within 70cm for 90-180 days.
    - Class IV: Waterlogged within 70cm for more than 180 days.
    - Class V: Waterlogged at the surface for most of the year.
    - Class VI: Permanently waterlogged at the surface.
  - **Droughtiness**: Available water capacity (AWC) calculated from soil texture and depth. Express as mm AWC in the profile.
  - Present the auger bore results in a summary table: auger number, grid reference, topsoil depth, topsoil texture, subsoil texture, depth to slowly permeable layer, depth to gleying, soil wetness class, AWC, limiting factor, ALC grade.
  - Present representative soil profile descriptions.
  - If laboratory results are available, present pH, nutrient levels, organic matter, and particle size.
  - If survey data has not been provided, clearly state: "[SOIL SURVEY DATA TO BE PROVIDED BY QUALIFIED SOIL SCIENTIST]".

### 6. Agricultural Land Classification (400-800 words)
- Determine the ALC grade for each auger bore / survey point:
  - Apply the MAFF 1988 criteria, assessing the following limiting factors:
    - **Climate**: State the climatic grade for the site.
    - **Wetness**: Determine the wetness limitation based on soil wetness class and field capacity days.
    - **Droughtiness**: Determine the droughtiness limitation based on AWC and moisture balance.
    - **Gradient**: Determine any gradient limitation.
    - **Flood risk**: Determine any flood risk limitation (frequency, duration of inundation).
    - **Stoniness**: Determine any stoniness limitation.
    - **Soil depth**: Determine any soil depth limitation.
  - The overall ALC grade is determined by the most limiting factor.
  - Classify each survey point as Grade 1, 2, 3a, 3b, 4, or 5.
- Present the ALC results:
  - Summary table: auger number, limiting factor(s), overall ALC grade.
  - ALC map: show the spatial distribution of ALC grades across the site (reference appendix).
  - Area calculation: calculate the area (hectares) of each ALC grade across the site.
  - Percentage breakdown: percentage of site area in each grade.
- Identify whether the site contains BMV agricultural land (Grades 1, 2, and/or 3a):
  - If BMV: state the area of BMV land affected and its significance.
  - If not BMV (all Grade 3b or below): confirm that the site is not BMV and that the loss of agricultural land is less sensitive.
- Compare the detailed survey results with the provisional ALC data (MAGIC map) and explain any differences.

### 7. Impact Assessment (400-800 words)
- Assess the significance of the loss of agricultural land:
  - **Area of loss**: Total area of agricultural land affected (hectares). Area by ALC grade.
  - **BMV land affected**: Whether any BMV land (Grades 1, 2, 3a) is affected and the area.
  - **Context**: The proportion of BMV land in the local authority area and the region. Whether the loss is locally significant.
  - **Reversibility**: Whether the land use change is permanent or temporary. Whether soil resources can be conserved and reused.
  - **National significance**: Natural England consultation threshold (20ha of BMV land -- TIN073).
  - **Alternatives**: Whether the development could be located on poorer quality agricultural land (NPPF Footnote 58).
  - **Cumulative loss**: Whether there has been significant cumulative loss of BMV land in the local authority area.
- Apply a qualitative assessment of significance:
  - Negligible: Loss of non-BMV land (Grades 3b-5), small area.
  - Minor: Loss of small area of BMV land, or large area of non-BMV land.
  - Moderate: Loss of significant area of BMV land (Grade 3a).
  - Major: Loss of significant area of high-quality BMV land (Grades 1-2).
- If the site does not contain BMV land, state this clearly as a positive finding.

### 8. Conclusion (300-500 words)
- Summarise the soil survey findings: soil types, profiles, limitations.
- State the ALC grade(s) determined: area by grade.
- Confirm whether the site contains BMV agricultural land (Grades 1, 2, 3a).
- Summarise the impact assessment: significance of agricultural land loss.
- If BMV land is affected:
  - Explain the justification for its loss (e.g., housing need, no alternative sites on poorer land, brownfield land insufficient, site allocation in the development plan).
  - Describe measures to minimise impact: soil conservation and reuse (stripping and stockpiling topsoil and subsoil), sustainable use of soil resources, minimising the development footprint.
  - Describe any soil resource management plan (SRMP) or soil handling strategy.
- If no BMV land is affected:
  - Confirm that the loss of agricultural land is not a significant planning constraint.
- Confirm compliance with NPPF Paragraph 174(b) and Footnote 58 to Paragraph 175.
- Confirm compliance with relevant local plan agricultural land policies.
- State the AI-generated disclaimer and professional endorsement requirement.

## Quality Standards

- Reference NPPF Paragraph 174(b) and Footnote 58 to Paragraph 175 by specific number.
- Reference the Agricultural Land Classification of England and Wales (MAFF, 1988) by name.
- Reference Natural England TIN049 and TIN073 by name.
- Reference PPG Natural Environment paragraphs 026-029.
- Correctly describe all ALC grades (1-5, with 3a/3b subdivision).
- Define BMV agricultural land as Grades 1, 2, and 3a.
- Present soil survey results in tabular format with auger bore data and ALC grading.
- Apply the MAFF 1988 criteria to determine ALC grade from limiting factors.
- Identify and quantify areas of each ALC grade.
- Use correct soil science terminology: texture classes, soil wetness class, gleying, slowly permeable layer, AWC, field capacity days, accumulated temperature.
- Where soil survey data has not been provided, clearly flag as required.
- Do not fabricate soil survey data, texture descriptions, or ALC grades.
- Maintain professional soil science and agricultural consultancy language throughout.
- Include the AI-generated disclaimer prominently.`;

export const ALC_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description:
      'Purpose, site identification, proposed development, current agricultural use, survey objectives, and AI disclaimer.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State purpose and policy context (NPPF Paragraph 174(b), Footnote 58). Identify the site (address, NGR, area). Describe proposed development and area of agricultural land affected. Describe current use. State survey objectives. State qualifications. Include AI disclaimer.',
  },
  {
    name: 'Policy Framework',
    description:
      'NPPF BMV policy, ALC system, Natural England consultation thresholds, PPG, and local plan policies.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF Paragraph 174(b) and Footnote 58. Define BMV (Grades 1, 2, 3a). Reference PPG Natural Environment paras 026-029. Reference Natural England TIN049 and TIN073 (20ha consultation threshold). Reference local plan agricultural land policies. Note provisional ALC limitations.',
  },
  {
    name: 'Methodology',
    description:
      'ALC survey methodology including survey date, density, auger bore procedure, climatic assessment, and laboratory analysis.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe survey date and seasonal considerations. Describe survey density (auger bores per hectare). Describe auger bore method: depth, parameters recorded (topsoil depth/texture/colour, subsoil texture/colour/gleying, slowly permeable layer, drainage). Describe trial pits if applicable. Describe laboratory analysis. Describe climatic data (accumulated temperature, rainfall, field capacity days). Reference MAFF 1988 guidelines.',
  },
  {
    name: 'Site Description',
    description:
      'Geographical setting, topography, current land use, cropping history, drainage, and regional agricultural context.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe location and setting. Describe topography (elevation, gradient, aspect). Describe current land use and cropping. Describe field pattern and boundaries. Describe drainage and evidence of waterlogging. Describe vegetation. Describe regional farming context.',
  },
  {
    name: 'Soil Survey Results',
    description:
      'Detailed soil profile descriptions, topsoil and subsoil characteristics, wetness class, droughtiness, and auger bore summary table.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Identify soil association(s). Describe topsoil: depth, texture, colour, organic matter, structure, stoniness. Describe subsoil: texture, colour, gleying depth, slowly permeable layer, structure, stoniness. State soil wetness class (I-VI). Calculate AWC. Present auger bore summary table (number, NGR, depths, textures, limiting factors, grade). Present representative profiles. Present laboratory results if available.',
  },
  {
    name: 'Agricultural Land Classification',
    description:
      'ALC grading of each survey point by limiting factor, ALC map, area calculations, and BMV determination.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Apply MAFF 1988 criteria: climate, wetness, droughtiness, gradient, flood risk, stoniness, depth. Determine grade by most limiting factor. Present summary table (auger, limiting factors, grade). Reference ALC map. Calculate area by grade (hectares and percentage). State whether BMV present. Compare with provisional ALC data.',
  },
  {
    name: 'Impact Assessment',
    description:
      'Significance assessment of agricultural land loss including BMV area, context, alternatives, and cumulative effects.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Quantify area of loss by grade. Identify BMV land affected. Assess context: proportion of BMV locally and regionally. Assess reversibility. Assess national significance (20ha threshold). Assess alternatives on poorer land (Footnote 58). Assess cumulative loss. Apply significance criteria (negligible to major).',
  },
  {
    name: 'Conclusion',
    description:
      'Summary of soil findings, ALC grades, BMV determination, significance, justification for loss, soil conservation, and policy compliance.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise soil types and profiles. State ALC grades and areas. Confirm BMV status. Summarise impact significance. If BMV affected: justify loss and describe soil conservation measures (SRMP, soil stripping and stockpiling). If no BMV: confirm not a significant constraint. Confirm NPPF and local policy compliance. State AI disclaimer.',
  },
];

export const ALC_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Site Description',
    'Soil Survey Results',
    'Agricultural Land Classification',
    'Impact Assessment',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const ALC_TEMPLATE = {
  assessment_type: 'Agricultural Land Classification',
  short_name: 'ALC',
  version: 1,
  sections: ALC_SECTIONS,
  quality_criteria: ALC_QUALITY,
};
