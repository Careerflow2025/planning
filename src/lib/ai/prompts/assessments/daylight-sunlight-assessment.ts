import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Daylight and Sunlight Assessment -- required for developments that may affect
 * the daylight and sunlight received by existing neighbouring properties, or
 * where it is necessary to demonstrate adequate internal daylight and sunlight
 * provision for a proposed development (particularly residential).
 *
 * AI Difficulty: Hard (20-60 pages). This assessment requires specialist 3D
 * modelling and computational analysis using software such as Radiance, AGi32,
 * or Autodesk tools. Results must be provided by a specialist daylight/sunlight
 * consultant.
 *
 * DISCLAIMER: This document is AI-generated and constitutes a draft framework only.
 * It MUST be reviewed, verified, and endorsed by a suitably qualified daylight and
 * sunlight specialist (e.g., BRE-trained assessor, Chartered Building Surveyor,
 * or equivalent) before submission to the local planning authority. Computational
 * analysis of VSC, NSL, APSH, and ADF requires specialist software and 3D
 * modelling that cannot be replicated by AI.
 */

export const DSA_PROMPT = `You are preparing a Daylight and Sunlight Assessment to accompany a planning application submitted to a local planning authority in England. The assessment evaluates the impact of the proposed development on the daylight and sunlight received by existing neighbouring properties, and demonstrates that the proposed development itself provides adequate internal daylight and sunlight conditions for future occupants.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft framework only. It MUST be reviewed, verified, and endorsed by a suitably qualified daylight and sunlight specialist before submission to the local planning authority. The computational analysis of Vertical Sky Component (VSC), No-Sky Line (NSL), Annual Probable Sunlight Hours (APSH), Average Daylight Factor (ADF), and overshadowing requires specialist 3D modelling software (e.g., Radiance, AGi32, Waldram tools) and accurate survey data. The AI cannot conduct this modelling and no computational results should be fabricated.

## Document Purpose

The Daylight and Sunlight Assessment must:
1. Assess the impact of the proposed development on the daylight received by existing neighbouring properties (VSC and NSL analysis).
2. Assess the impact of the proposed development on the sunlight received by existing neighbouring properties (APSH analysis).
3. Assess the internal daylight conditions within the proposed development (ADF, room depth, and where applicable, illuminance targets per BS EN 17037).
4. Assess overshadowing of gardens and amenity areas (sun hours on ground analysis).
5. Compare results against the BRE Guidelines (BR 209, 3rd Edition, 2022) and any local authority daylight/sunlight policies.
6. Apply the flexibility provisions of the BRE Guidelines for urban areas and higher-density development.
7. Where impacts are identified, describe design mitigation measures.

## Key Policy and Guidance References

### BRE Site Layout Planning for Daylight and Sunlight: A Guide to Good Practice (BR 209, 3rd Edition, 2022)
The primary guidance for daylight and sunlight assessment in England. Key metrics:

#### Daylight to Existing Buildings
- **Vertical Sky Component (VSC)**: The ratio of direct sky illuminance on a vertical plane at the window reference point (centre of the window on the outer pane) to the simultaneous horizontal illuminance from an unobstructed sky. Expressed as a percentage.
  - BRE target: VSC should be at least 27% at the window face.
  - Impact criterion: If the VSC is reduced to less than 0.8 times its former value (i.e., more than 20% reduction) AND the resulting VSC is below 27%, the occupants will notice a reduction in daylight.
  - Note: The 27% target is based on a CIE overcast sky. In urban areas, existing VSC values may already be below 27%.
- **No-Sky Line (NSL) / Daylight Distribution**: The area of the working plane (typically 850mm above floor level) that can receive direct skylight. Mapped as the percentage of the room area that has a direct view of the sky through the window.
  - BRE target: At least 50% of the room area should be able to receive direct skylight (i.e., lie within the NSL).
  - Impact criterion: If the NSL area is reduced to less than 0.8 times its former value (i.e., more than 20% reduction), the distribution of daylight in the room will be significantly affected.
  - Note: NSL analysis requires knowledge of the room layout (obtained from floor plans, or assumed if not available).

#### Sunlight to Existing Buildings
- **Annual Probable Sunlight Hours (APSH)**: The number of hours of sunlight received at the centre of a window, expressed as a percentage of the maximum possible sunlight hours.
  - BRE recommends assessment for windows that face within 90 degrees of due south.
  - BRE target (annual): At least 25% of annual probable sunlight hours (i.e., APSH >= 25%).
  - BRE target (winter): At least 5% of annual probable sunlight hours during the winter months (21 September to 21 March) (i.e., WPSH >= 5%).
  - Impact criterion: If the APSH is reduced to less than 0.8 times its former value AND the resulting APSH is below 25% annual / 5% winter, the occupants will notice a reduction in sunlight.
  - Note: Only windows within 90 degrees of due south are assessed. Non-south-facing windows are excluded.

#### Daylight Within Proposed Buildings
- **Average Daylight Factor (ADF)**: The ratio of total daylight flux received on the working plane to the outdoor illuminance on a horizontal unobstructed surface under a CIE standard overcast sky. Expressed as a percentage.
  - BRE/BS 8206-2 recommended minimum ADF values:
    - Kitchens: 2.0%
    - Living rooms: 1.5%
    - Bedrooms: 1.0%
  - Note: BS 8206-2 has been superseded by BS EN 17037:2018, but ADF is still widely used in UK planning practice.
- **BS EN 17037:2018 Daylight in Buildings**: European standard providing illuminance-based criteria:
  - Target illuminance on the working plane: 300 lux for a living room, 200 lux for a bedroom, 500 lux for a kitchen.
  - Compliance assessed as the percentage of the reference plane achieving the target illuminance for at least half of daylight hours.
  - Minimum recommendation: 300 lux target for at least 50% of the reference plane.
  - Note: Not all LPAs require BS EN 17037 compliance; many still accept ADF assessment.
- **Room Depth Criterion**: BRE recommends that the room depth (D) should satisfy:
  - D/W + D/HW < 2/(1-RB)
  - Where W = room width, HW = window head height above floor, RB = average reflectance of rear half of room.
  - Simplified: in a standard room (2.6m floor-to-ceiling), room depth should not exceed approximately 2.5 x the room width for single-aspect rooms.

#### Sunlight to Gardens and Amenity Areas (Overshadowing)
- **Sun Hours on Ground (SHOG)**: The number of hours of sunlight received on a point on the ground.
  - BRE target: At least 50% of the garden/amenity area should receive at least 2 hours of sunlight on 21 March (spring equinox).
  - Impact criterion: If the area receiving 2 hours of sunlight on 21 March is reduced to less than 0.8 times its former value, the amenity area will appear more enclosed and less pleasant.

### NPPF and Local Policy
- **NPPF Paragraph 130(f)**: Planning policies and decisions should ensure that developments create places with a high standard of amenity for existing and future users.
- **NPPF Paragraph 125(c)**: When considering applications for housing, authorities should take a flexible approach in applying policies or guidance relating to daylight and sunlight, where they would otherwise inhibit making efficient use of a site (as long as the resulting scheme would provide acceptable living standards).
- **London Plan Policy D6 (Housing Quality and Standards)**: Requires adequate daylight and sunlight provision in new housing, referencing BRE guidelines with flexibility for urban locations.
- **London Plan Policy D9 (Tall Buildings)**: Requires daylight/sunlight assessment for tall buildings.
- **Local plan design and amenity policies**: Authority-specific requirements.

### Other Key References
- BS EN 17037:2018 Daylight in Buildings.
- BS 8206-2:2008 Code of Practice for Daylighting (withdrawn, replaced by BS EN 17037, but ADF still widely used).
- Littlefair, P.J. (2022) Site Layout Planning for Daylight and Sunlight: A Guide to Good Practice (BRE BR 209, 3rd Edition).
- Littlefair, P.J. (2012) Daylight and Sunlight Planning (BRE BR 209, 2nd Edition) -- the previous edition, still referenced in some local authority policies.
- CIBSE Lighting Guide LG10: Daylighting -- A Design Guide (2014).
- Historic England guidance on daylight/sunlight to listed buildings and conservation areas.
- Radiance lighting simulation software (Ward, G.J.).
- Building Regulations Approved Document O: Overheating (2022) -- interrelation between daylight, solar gains, and overheating risk.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Daylight and Sunlight Assessment and its policy basis.
- Identify the site by full postal address and grid reference.
- Summarise the proposed development: use, height, massing, layout.
- Identify the properties to be assessed: existing neighbouring buildings, proposed units, amenity areas.
- State the qualifications of the author (or "[PREPARED BY A SUITABLY QUALIFIED DAYLIGHT AND SUNLIGHT SPECIALIST]").
- State any limitations: assumptions about room layouts, room uses, existing window positions, construction details.
- Include the AI-generated disclaimer.

### 2. Policy Framework (400-700 words)
- Set out the BRE Guidelines (BR 209, 3rd Edition, 2022) and summarise the key metrics:
  - VSC target (27%) and impact criterion (0.8x former value).
  - NSL target (50% of room area) and impact criterion (0.8x former value).
  - APSH targets (25% annual, 5% winter) and impact criterion (0.8x former value).
  - ADF targets (2.0% kitchen, 1.5% living room, 1.0% bedroom).
  - SHOG target (50% of area receiving 2 hours on 21 March).
- Note that the BRE Guidelines are advisory, not mandatory, and that flexibility is appropriate in urban areas and for higher-density development.
- Set out NPPF Paragraph 130(f) and Paragraph 125(c) (flexible approach to daylight/sunlight).
- Set out relevant local plan design and amenity policies.
- Set out London Plan policies (D6, D9) if in London.
- Reference BS EN 17037:2018 if applicable.

### 3. Methodology (500-1000 words)
- Describe the assessment methodology:
  - **3D modelling**: Describe the 3D model of the existing and proposed development used for the analysis (source: topographic survey, architectural drawings, OS mapping, height data). Software used (e.g., Radiance, AGi32, Waldram diagram, proprietary tools).
  - **Existing properties assessed**: List all neighbouring properties assessed, with address and number of windows/rooms analysed. Explain the selection criteria (properties within a defined distance or which lie within the shadow path of the proposed development).
  - **Baseline scenario**: Describe the baseline condition (existing site condition for impact on neighbours; no obstruction for proposed units).
  - **Proposed scenario**: Describe the proposed development as modelled (building heights, massing, facade positions).
  - **Window identification**: How windows were identified (external survey, architectural drawings, assumed positions where internal layouts are unknown).
  - **Room use assumptions**: Where room uses are not known, the BRE default assumption is applied (worst-case assessment based on the most sensitive room use).
  - **VSC methodology**: Calculate VSC at the centre of each window (outer pane) for the baseline and proposed scenarios. Compare against the 27% target and the 0.8x impact criterion.
  - **NSL methodology**: Calculate the NSL area for each room. Compare against the 50% target and the 0.8x impact criterion.
  - **APSH methodology**: Calculate APSH (annual and winter) for each south-facing window (within 90 degrees of due south). Compare against the 25%/5% targets and the 0.8x impact criterion.
  - **ADF methodology**: Calculate ADF for each habitable room in the proposed development. Compare against the BRE/BS 8206-2 targets.
  - **SHOG methodology**: Calculate sun hours on ground on 21 March for existing and proposed gardens/amenity areas. Compare against the BRE target (50% of area receiving 2 hours).
- If computational analysis has not been conducted, flag: "[3D MODELLING AND COMPUTATIONAL ANALYSIS TO BE CONDUCTED BY SPECIALIST DAYLIGHT/SUNLIGHT CONSULTANT]".

### 4. Baseline Conditions (400-800 words)
- Describe the existing baseline daylight and sunlight conditions:
  - **Existing site**: Current buildings, structures, and obstructions on the application site.
  - **Surrounding context**: Urban context, street width, building heights, orientation, density.
  - **Existing VSC values**: Present the existing (baseline) VSC values at assessed windows. Note that in dense urban areas, existing VSC values may already be significantly below 27%.
  - **Existing NSL**: Note the existing daylight distribution in assessed rooms (where room layouts are known).
  - **Existing APSH**: Present existing sunlight hours for south-facing windows.
  - **Existing overshadowing**: Describe the current sunlight conditions for gardens and amenity areas.
- Contextualise the baseline: in a dense urban environment, lower baseline values are expected and the BRE Guidelines acknowledge that rigid application of the 27% VSC target may be unreasonable.

### 5. Impact on Existing Properties (Daylight) (600-1200 words)
- Present the VSC results for each affected property:
  - Tabulate: property address, window reference, room use (if known), existing VSC, proposed VSC, absolute reduction, percentage reduction, pass/fail against BRE criterion.
  - Identify all windows where the VSC is reduced to below 0.8x the former value AND falls below 27%.
  - For affected windows, describe the degree of impact: marginal (20-30% reduction), moderate (30-40% reduction), or major (>40% reduction).
  - Consider mitigating factors: rooms may be dual-aspect, alternative windows may be unaffected, rooms may be non-habitable (bathrooms, staircases), existing conditions may already be constrained.
- Present the NSL results for each affected room (where room layouts are known):
  - Tabulate: property, room, existing NSL area (%), proposed NSL area (%), reduction, pass/fail.
  - Note that NSL analysis provides a more meaningful assessment of daylight quality than VSC alone.
- Provide a property-by-property narrative discussing the results and their significance.
- Apply the BRE flexibility principle for urban areas: where existing VSC values are already low, a proportionate assessment should consider the urban context, the massing of surrounding buildings, and the scale of reduction relative to the constrained baseline.

### 6. Impact on Existing Properties (Sunlight) (400-800 words)
- Present the APSH results for each south-facing window:
  - Tabulate: property address, window reference, room use (if known), existing APSH (annual), proposed APSH (annual), existing WPSH (winter), proposed WPSH (winter), pass/fail.
  - Identify all windows where APSH is reduced to below 0.8x the former value AND falls below 25% annual or 5% winter.
  - Discuss the degree and significance of any impacts.
  - Note that non-south-facing windows are excluded from APSH assessment per BRE guidance.
- For living rooms: highlight any impacts on the main habitable room windows, as sunlight to living rooms is given particular weight.

### 7. Internal Daylight for Proposed Development (500-1000 words)
- Present the ADF results for each habitable room in the proposed development:
  - Tabulate: unit reference, room, room use, ADF (%), BRE target, pass/fail.
  - Summarise compliance rate: percentage of rooms meeting the BRE target.
  - Identify any rooms falling below the target and discuss:
    - Room orientation and aspect.
    - Whether the room is dual-aspect.
    - Room depth and proportion.
    - Balcony or overhang effects (balconies significantly reduce daylight to rooms below).
    - Mitigation measures: increased glazing area, higher floor-to-ceiling heights, internal layouts optimised, lighter internal finishes.
- If BS EN 17037 assessment is required, present the illuminance results:
  - Target illuminance achieved on 50% or more of the reference plane.
  - Minimum illuminance achieved on 95% of the reference plane.
- Assess room depth against the BRE room depth criterion for single-aspect rooms.
- Discuss the overall daylight quality of the proposed development.

### 8. Overshadowing Assessment (400-700 words)
- Present the sun hours on ground results for existing and proposed gardens, balconies, terraces, and communal amenity spaces:
  - For existing amenity areas of neighbouring properties:
    - State the existing area receiving at least 2 hours of sunlight on 21 March.
    - State the proposed area receiving at least 2 hours of sunlight on 21 March.
    - Calculate the percentage of the area meeting the BRE target.
    - Assess against the BRE criterion: at least 50% of the area should receive at least 2 hours of sunlight on 21 March, and the area should not be reduced to below 0.8x its former value.
  - For proposed amenity areas:
    - Assess whether the proposed gardens, balconies, and communal spaces meet the BRE 2-hour sunlight on 21 March target.
    - Note that balconies on north-facing elevations and lower floors of tall buildings may not meet the target.
- Discuss the significance of any overshadowing impacts.

### 9. Summary of Compliance (400-800 words)
- Present a summary table of all results:
  - Number and percentage of windows/rooms meeting/failing each BRE criterion (VSC, NSL, APSH, ADF, SHOG).
  - Breakdown by property for impact on existing buildings.
  - Breakdown by unit/floor for proposed development.
- Discuss the overall compliance profile:
  - Where a high percentage of windows/rooms meet the BRE criteria, confirm acceptable performance.
  - Where failures occur, discuss their significance:
    - Are the failures marginal or substantial?
    - Are the affected rooms/windows in habitable or non-habitable rooms?
    - Is the urban context relevant (dense urban area where lower values are expected)?
    - NPPF Paragraph 125(c): should a flexible approach be applied?
- Apply professional judgement to the overall impact.

### 10. Mitigation (300-600 words)
- Describe any design measures taken to mitigate daylight and sunlight impacts:
  - Massing and height adjustments: reduced building height, stepped massing, increased separation distances.
  - Facade design: recessed balconies, angled facades, projecting bays, increased glazing ratios.
  - Material choices: light-coloured external surfaces to increase reflected light.
  - Internal design: room layout optimisation, dual-aspect units, reduced room depths, higher floor-to-ceiling heights, lighter internal finishes.
  - Landscaping: deciduous trees (allowing winter light), low-level planting, avoidance of evergreen trees near windows.
- Describe any design iteration that has occurred to improve daylight/sunlight performance.
- Where impacts remain after mitigation, explain why further mitigation is not practicable or would undermine other planning objectives (housing delivery, urban design, efficient land use).

### 11. Conclusion (300-600 words)
- Summarise the assessment findings:
  - Impact on existing properties (daylight -- VSC and NSL): compliance rate, significance of impacts.
  - Impact on existing properties (sunlight -- APSH): compliance rate, significance of impacts.
  - Internal daylight for proposed development (ADF and/or BS EN 17037): compliance rate.
  - Overshadowing of amenity areas (SHOG): compliance.
- Apply the BRE flexibility principle: note that the BRE Guidelines are advisory and that in urban contexts, strict compliance may not be achievable or expected.
- Apply NPPF Paragraph 125(c): where a flexible approach supports efficient use of land while providing acceptable living standards.
- Confirm compliance with the BRE Guidelines (or explain departures with justification).
- Confirm compliance with local plan design and amenity policies.
- Confirm compliance with London Plan policies (if applicable).
- State the AI-generated disclaimer and professional endorsement requirement.

## Quality Standards

- Reference the BRE Guidelines (BR 209, 3rd Edition, 2022) by name and edition throughout.
- Reference specific BRE metrics with target values: VSC (27%), NSL (50%), APSH (25% annual, 5% winter), ADF (2.0%/1.5%/1.0%), SHOG (50% of area receiving 2 hours on 21 March).
- Reference the 0.8x impact criterion correctly (retained value, not percentage reduction).
- Reference BS EN 17037:2018 where applicable.
- Reference NPPF Paragraph 130(f) and Paragraph 125(c) by number.
- Present results in clear tabular format with existing values, proposed values, reductions, and pass/fail.
- Distinguish clearly between impact on existing properties and daylight within the proposed development.
- Apply the BRE flexibility principle appropriately for urban contexts.
- Use correct daylight/sunlight terminology: VSC, NSL, APSH, WPSH, ADF, SHOG, Vertical Sky Component, No-Sky Line, Annual Probable Sunlight Hours, Average Daylight Factor.
- Where computational analysis has not been conducted, clearly flag as required.
- Do not fabricate VSC, NSL, APSH, ADF, or SHOG values.
- Maintain professional building surveying and daylight/sunlight consultancy language throughout.
- Include the AI-generated disclaimer prominently.`;

export const DSA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description:
      'Purpose, site identification, proposed development, properties assessed, qualifications, limitations, and AI disclaimer.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State purpose and policy basis. Identify the site. Summarise proposed development (use, height, massing). Identify properties to be assessed. State qualifications. Note limitations and assumptions. Include AI disclaimer.',
  },
  {
    name: 'Policy Framework',
    description:
      'BRE Guidelines (BR 209), VSC/NSL/APSH/ADF/SHOG targets, NPPF, BS EN 17037, and local/London Plan policies.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise BRE Guidelines with key metrics and targets (VSC 27%, NSL 50%, APSH 25%/5%, ADF 2.0/1.5/1.0%, SHOG 50% at 2 hours on 21 March). State 0.8x impact criterion. Note BRE flexibility for urban areas. Set out NPPF Paragraphs 130(f) and 125(c). Reference BS EN 17037. Set out local plan and London Plan policies.',
  },
  {
    name: 'Methodology',
    description:
      '3D modelling approach, properties assessed, baseline and proposed scenarios, and analytical methods for each metric.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe 3D model source and software. List properties assessed with selection criteria. Describe baseline and proposed scenarios. Describe VSC, NSL, APSH, ADF, and SHOG calculation methods. Describe room use assumptions. Flag if analysis not yet conducted.',
  },
  {
    name: 'Baseline Conditions',
    description:
      'Existing site and urban context, baseline VSC/APSH values, and contextualisation of existing daylight/sunlight conditions.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe existing site and surrounding urban context. Present existing VSC values. Note existing conditions relative to BRE targets. Contextualise: in dense urban areas, values below 27% VSC are common. Present existing APSH values. Describe existing overshadowing conditions.',
  },
  {
    name: 'Impact on Existing Properties (Daylight)',
    description:
      'VSC and NSL analysis for existing neighbouring properties with tabulated results and property-by-property narrative.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Tabulate VSC: property, window, room use, existing VSC, proposed VSC, reduction, pass/fail. Identify all failures. Categorise impact degree (marginal/moderate/major). Tabulate NSL where room layouts known. Discuss mitigating factors. Apply BRE urban flexibility. Provide property-by-property narrative.',
  },
  {
    name: 'Impact on Existing Properties (Sunlight)',
    description:
      'APSH analysis for south-facing windows of existing properties with tabulated results.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Tabulate APSH: property, window, room use, existing annual APSH, proposed annual APSH, existing WPSH, proposed WPSH, pass/fail. Identify failures. Discuss significance. Note non-south-facing exclusion. Highlight living room impacts.',
  },
  {
    name: 'Internal Daylight for Proposed Development',
    description:
      'ADF (and BS EN 17037 if applicable) analysis for proposed habitable rooms with compliance summary.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Tabulate ADF: unit, room, use, ADF %, target, pass/fail. Summarise compliance rate. Discuss failures: orientation, aspect, room depth, balcony effects. Describe mitigation: glazing, ceiling heights, layouts, finishes. Present BS EN 17037 results if required. Assess room depth criterion.',
  },
  {
    name: 'Overshadowing Assessment',
    description:
      'Sun hours on ground analysis for existing and proposed gardens, balconies, and amenity areas on 21 March.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Present SHOG for existing amenity areas: existing area meeting 2-hour target, proposed area meeting target, reduction, pass/fail. Present SHOG for proposed amenity areas. Discuss significance of overshadowing impacts. Note limitations for north-facing and lower-floor amenity areas.',
  },
  {
    name: 'Summary of Compliance',
    description:
      'Overall compliance summary table across all metrics with discussion of significance and urban context flexibility.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present summary table: number/percentage meeting each criterion (VSC, NSL, APSH, ADF, SHOG). Discuss overall compliance. Where failures exist, assess significance (marginal vs substantial, habitable vs non-habitable). Apply BRE flexibility for urban context. Apply NPPF Paragraph 125(c). Apply professional judgement.',
  },
  {
    name: 'Mitigation',
    description:
      'Design measures to mitigate daylight and sunlight impacts including massing, facade, internal design, and landscaping.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe massing adjustments, facade design (recessed balconies, glazing), material choices, internal layout optimisation, room depth reduction, lighter finishes, deciduous landscaping. Describe design iteration. Explain where further mitigation is impracticable.',
  },
  {
    name: 'Conclusion',
    description:
      'Summary of all findings, BRE compliance, urban flexibility, NPPF compliance, and professional endorsement requirement.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise daylight impact on existing (VSC, NSL). Summarise sunlight impact (APSH). Summarise internal daylight (ADF). Summarise overshadowing (SHOG). Apply BRE flexibility. Apply NPPF Paragraph 125(c). Confirm BRE and local policy compliance. State AI disclaimer.',
  },
];

export const DSA_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Baseline Conditions',
    'Impact on Existing Properties (Daylight)',
    'Impact on Existing Properties (Sunlight)',
    'Internal Daylight for Proposed Development',
    'Overshadowing Assessment',
    'Summary of Compliance',
    'Mitigation',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const DSA_TEMPLATE = {
  assessment_type: 'Daylight and Sunlight Assessment',
  short_name: 'DSA',
  version: 1,
  sections: DSA_SECTIONS,
  quality_criteria: DSA_QUALITY,
};
