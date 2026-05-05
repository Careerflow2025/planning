import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Overshadowing Study (OSS) -- required where a proposed development has
 * the potential to overshadow neighbouring amenity spaces, gardens, or
 * public open spaces. The study assesses sun-on-ground availability to
 * amenity areas and presents transient overshadowing patterns throughout
 * the day and year, following the methodology in the BRE Guide "Site
 * Layout Planning for Daylight and Sunlight" (BR 209, 3rd Edition, 2022).
 *
 * This assessment is distinct from a daylight/sunlight assessment (which
 * assesses impacts on windows) and focuses specifically on the impact on
 * outdoor spaces and gardens.
 */

export const OSS_PROMPT = `You are preparing an Overshadowing Study to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

An Overshadowing Study is required to demonstrate that:
1. The proposed development will not cause unacceptable overshadowing of existing and proposed gardens, amenity spaces, and public open spaces.
2. Sun-on-ground availability to amenity areas has been assessed following the BRE methodology.
3. The key date of 21 March (the equinox) has been used for the quantitative sun-on-ground assessment.
4. Transient overshadowing patterns have been analysed to show the movement of shadows throughout representative days and seasons.
5. Where impacts are identified, appropriate mitigation measures have been considered.
6. The development provides acceptable sunlight amenity to its own proposed amenity spaces.

## Key Policy and Guidance References

### BRE Site Layout Planning for Daylight and Sunlight: A Guide to Good Practice (BR 209, 3rd Edition, 2022)
- The primary technical guidance for assessing overshadowing impacts in the UK planning system.
- **Sun-on-ground assessment**: At least half (50%) of any amenity area (garden, park, outdoor sitting area) should receive at least 2 hours of sunlight on 21 March (the spring equinox).
- **Existing vs. proposed condition**: The assessment should compare the existing situation (without the development) with the proposed situation (with the development) to determine the change.
- If the area receiving 2 hours of sunlight on 21 March falls below 50%, or if the area receiving 2 hours is reduced by more than 20% of its former value (relative reduction), then the impact is significant.
- The 3rd Edition (2022) provides updated guidance and emphasises that the BRE criteria are targets, not absolute standards, and should be applied flexibly with professional judgement.
- Where a development faces a major obstruction to the south (existing building, hill, tree belt), the reference point for comparison may be the existing situation rather than the unobstructed sky.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 130**: Planning policies and decisions should ensure that developments create places with a high standard of amenity for existing and future users.
- **Paragraph 135**: Planning policies and decisions should ensure that developments are sympathetic to local character and history, including the surrounding built environment and landscape setting, while not preventing or discouraging appropriate innovation or change.
- **Paragraph 131**: The creation of high quality, beautiful and sustainable buildings and places is fundamental to what the planning and development process should achieve.

### Local Plan Policies
- Most local plans include policies protecting residential amenity, which encompasses overshadowing impacts.
- Some local plans specifically reference the BRE Guide as the standard for daylight, sunlight, and overshadowing assessments.
- Reference the specific local plan amenity and design policies for the relevant authority.
- Supplementary planning documents (SPDs) on design or residential amenity may provide additional local guidance.

### Other Key References
- BS 8206-2:2008 -- Lighting for buildings. Code of practice for daylighting (now withdrawn but historically referenced).
- BS EN 17037:2018 -- Daylight in buildings (the current European standard for daylight).
- Planning Practice Guidance on design: process and tools.
- Historic England guidance on setting of heritage assets (where overshadowing could affect the setting or use of a heritage asset).

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Overshadowing Study and the policy basis for its preparation.
- Identify the application site by address, National Grid reference, and local planning authority.
- Summarise the proposed development: building height(s), number of storeys, footprint, and proximity to neighbouring amenity spaces.
- State the amenity areas being assessed: neighbouring gardens, communal amenity spaces, public open spaces, children's play areas, outdoor seating areas.
- Confirm the methodology: BRE Guide BR 209 (3rd Edition, 2022) sun-on-ground assessment and transient overshadowing analysis.
- State the software used for shadow modelling (e.g., Autodesk Revit, SketchUp, Rhino, 3D Studio Max, or specialist daylight software such as Radiance).
- Note whether the assessment covers impacts on existing neighbouring spaces, proposed new amenity spaces, or both.
- Outline the document structure.

### 2. Policy Framework (300-500 words)
- Set out the national planning policy context: NPPF paragraphs 130, 131, and 135 on amenity and design quality.
- Reference the BRE Guide BR 209 (3rd Edition, 2022) as the primary technical standard.
- Set out the BRE sun-on-ground criteria:
  - At least 50% of the amenity area should receive at least 2 hours of sunlight on 21 March.
  - If the area receiving 2 hours falls below 50%, or is reduced by more than 20% of its former value relative to the existing situation, the impact is significant.
- Note that the BRE criteria are guidelines, not absolute standards, and should be applied with flexibility and professional judgement, particularly in dense urban contexts.
- Reference relevant local plan policies on amenity protection, design quality, and outdoor space standards.
- Reference any local SPDs that provide additional guidance on daylight, sunlight, and overshadowing.
- Explain the importance of sunlight to amenity spaces for health, wellbeing, and quality of life.

### 3. Methodology (300-600 words)
- Describe the assessment methodology in detail:

#### 3.1 Sun-on-Ground Assessment
- Explain the sun-on-ground assessment: this determines the percentage of an amenity area that receives at least 2 hours of direct sunlight on 21 March.
- State the date of assessment: 21 March (spring equinox) as specified by the BRE Guide.
- Describe the modelling approach: a 3D model of the proposed development and surrounding context is used to calculate the shadow patterns.
- State the model inputs: site topography, existing building heights and positions, proposed building heights and positions, latitude and longitude for solar geometry.
- State the accuracy of the model: source of survey data (topographic survey, OS mapping, laser scanning), level of detail for surrounding buildings.
- Explain the comparison: existing condition (without the proposed development) vs. proposed condition (with the proposed development), showing the change in sun-on-ground area.

#### 3.2 Transient Overshadowing Analysis
- Explain the transient overshadowing analysis: this shows the movement of shadows cast by the proposed development across the site and surrounding area at regular time intervals throughout representative days.
- State the dates assessed: typically 21 March (equinox), 21 June (summer solstice), 21 December (winter solstice), and optionally 21 September (autumn equinox).
- State the time intervals: typically hourly (e.g., 08:00, 09:00, 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00).
- Describe the output format: plan-view shadow diagrams showing the shadow footprint at each time interval, with the amenity areas clearly identified.
- Note any limitations of the model (e.g., deciduous trees modelled with/without leaf cover, temporary structures excluded).

### 4. Sun on Ground Assessment (400-800 words)
- Present the sun-on-ground results for each assessed amenity area.
- For each amenity area, present:
  - **Area identification**: name/label, location, current use (private garden, communal garden, public park, play area).
  - **Total area**: in square metres.
  - **Existing condition**: percentage of area receiving at least 2 hours of sunlight on 21 March (without the proposed development).
  - **Proposed condition**: percentage of area receiving at least 2 hours of sunlight on 21 March (with the proposed development).
  - **Change**: absolute reduction in percentage and relative reduction (as a percentage of the former value).
  - **BRE compliance**: does the area meet the 50% minimum threshold? Has the relative reduction exceeded 20%?
  - **Conclusion**: pass, marginal, or fail against the BRE criteria.
- Present the results in a clear summary table.
- Discuss any areas that do not meet the BRE criteria:
  - What is the degree of non-compliance?
  - Is the non-compliance a result of the existing urban context (e.g., the area already receives limited sunlight due to existing buildings)?
  - Is the area particularly sensitive (e.g., a main garden, children's play area)?
  - Are there mitigating factors (e.g., access to other well-sunlit amenity areas nearby)?

### 5. Transient Overshadowing Analysis (400-800 words)
- Present the transient overshadowing analysis results.
- For each assessed date (21 March, 21 June, 21 December):
  - Describe the shadow patterns at each time interval.
  - Identify which amenity areas are affected by shadows at different times of day.
  - Note the duration of shadowing for each amenity area.
  - Compare the existing condition with the proposed condition to identify the additional shadow cast by the proposed development.
- Reference the shadow plan diagrams (which should accompany the assessment as appendices or embedded figures).
- Describe the key findings:
  - At which times of day do the greatest impacts occur?
  - Which amenity areas are most affected?
  - Is the overshadowing primarily in the morning, midday, or afternoon?
  - How does the impact vary between seasons (equinox vs. summer vs. winter)?
- Discuss the significance of the transient overshadowing in the context of the use of the affected spaces:
  - For private gardens: impacts during typical daytime use (mornings and afternoons).
  - For public open spaces: impacts during peak use times.
  - For children's play areas: impacts during after-school and weekend periods.

### 6. Impact on Amenity Spaces (300-600 words)
- Assess the impact on existing neighbouring amenity spaces:
  - Private gardens of adjacent residential properties.
  - Communal amenity spaces serving adjacent developments.
  - Public open spaces and parks.
  - Children's play areas.
  - Outdoor seating areas (e.g., cafe terraces, pub gardens).
- Assess the sunlight amenity of proposed new amenity spaces within the development:
  - Do proposed communal gardens meet the BRE 50%/2 hours criterion?
  - Do proposed private gardens/terraces/balconies receive adequate sunlight?
  - Do proposed children's play areas receive adequate sunlight?
- For each amenity area, provide a professional judgement on the significance of the impact:
  - **No impact / negligible**: The development causes no material change to sun-on-ground availability.
  - **Minor adverse**: There is a measurable reduction but the BRE criteria are still met.
  - **Moderate adverse**: The BRE criteria are not met, but the impact is mitigated by other factors (existing context, alternative spaces, seasonal variation).
  - **Major adverse**: The BRE criteria are significantly breached and the affected space is particularly sensitive.
- Consider the overall balance: are the majority of amenity areas compliant? Is the development overall acceptable in terms of sunlight amenity?

### 7. Mitigation Measures (200-400 words)
- Where impacts are identified, describe mitigation measures that have been incorporated or could be incorporated:
  - **Design amendments**: reducing building height at key points, stepping back upper storeys, repositioning the building footprint.
  - **Landscape design**: positioning amenity areas to maximise sun exposure, using south-facing orientations for gardens and play areas.
  - **Compensatory provision**: where existing spaces are affected, providing new or improved amenity spaces with good sunlight access.
  - **Material selection**: using light-coloured or reflective materials on facades and ground surfaces to increase reflected light in shadowed areas.
  - **Tree management**: selective pruning or repositioning of proposed tree planting to avoid further overshadowing.
- Note any design evolution that has occurred in response to early overshadowing analysis (demonstrating iterative design response to technical assessment).
- Where no further mitigation is feasible: explain why and provide justification for the residual impact being acceptable (e.g., dense urban context where BRE criteria are routinely not met, access to alternative amenity areas).

### 8. Conclusion (200-400 words)
- Summarise the overshadowing study findings.
- State the number and type of amenity areas assessed.
- Confirm how many amenity areas meet the BRE sun-on-ground criterion (50% of area receiving 2+ hours on 21 March).
- Summarise the transient overshadowing findings and key patterns.
- For any areas that do not meet the BRE criteria: summarise the mitigating factors and professional judgement on acceptability.
- Confirm compliance with NPPF amenity requirements (paragraph 130) and relevant local plan policies.
- State the professional conclusion: is the proposed development acceptable in terms of its overshadowing impact?
- Note any recommended conditions (e.g., landscape scheme to maximise sunlight to amenity areas, detailed design of boundary treatments).
- Recommend that the shadow diagrams are submitted as part of the planning application documentation.

## Quality Standards

- Reference the BRE Guide BR 209 (3rd Edition, 2022) correctly and completely.
- Apply the correct sun-on-ground criterion: 50% of the amenity area receiving at least 2 hours of sunlight on 21 March.
- State the 20% relative reduction threshold for determining significant impact.
- Present results in a clear summary table showing existing and proposed sun-on-ground percentages for each amenity area.
- Reference NPPF paragraphs on amenity (130, 131, 135) by number.
- Reference relevant local plan amenity and design policies.
- Distinguish between the sun-on-ground assessment (quantitative) and the transient overshadowing analysis (illustrative shadow patterns).
- Use the correct assessment date: 21 March (spring equinox).
- Include or reference shadow plan diagrams at hourly intervals.
- Where the BRE criteria are not met, provide professional justification for the impact being acceptable, referencing the BRE Guide's flexibility provisions.
- Use correct technical terminology: sun-on-ground, transient overshadowing, solar geometry, amenity area, equinox, solstice.`;

export const OSS_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, development summary, amenity areas, and methodology.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the study purpose and policy basis. Identify the site. Summarise the development. Identify the amenity areas assessed. Confirm the BRE methodology and software used.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local planning policy context for overshadowing assessment.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Set out NPPF paragraphs 130, 131, 135. Reference BRE Guide BR 209 (3rd Edition, 2022) and state the sun-on-ground criteria. Note the flexibility of the BRE guidance. Reference local plan amenity policies.',
  },
  {
    name: 'Methodology',
    description: 'Sun-on-ground and transient overshadowing assessment methodology.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe the sun-on-ground methodology (21 March, 2 hours, 50% of area). Describe the transient overshadowing methodology (dates, time intervals, output format). State model inputs and accuracy. Describe comparison approach.',
    subsections: [
      {
        name: 'Sun-on-Ground Assessment Method',
        description: 'Quantitative assessment of sunlight availability on 21 March.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Explain the 21 March / 2 hours / 50% criterion. Describe the 3D modelling approach and inputs.',
      },
      {
        name: 'Transient Overshadowing Analysis Method',
        description: 'Shadow pattern analysis across representative days and times.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'State dates assessed (21 March, 21 June, 21 December), time intervals, and output format.',
      },
    ],
  },
  {
    name: 'Sun on Ground Assessment',
    description: 'Results of the quantitative sun-on-ground analysis for each amenity area.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present results for each amenity area: identification, total area, existing and proposed sun-on-ground percentage, change, BRE compliance. Present summary table. Discuss any areas not meeting criteria.',
  },
  {
    name: 'Transient Overshadowing Analysis',
    description: 'Shadow patterns throughout representative days, showing shadow movement.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present shadow patterns for each assessed date and time interval. Identify most affected amenity areas. Compare existing and proposed conditions. Discuss timing and duration of shadow impacts. Reference shadow diagrams.',
  },
  {
    name: 'Impact on Amenity Spaces',
    description: 'Assessment of impact significance on existing and proposed amenity spaces.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Assess impact on existing neighbouring amenity spaces and proposed new spaces. Provide professional judgement on significance (negligible, minor, moderate, major adverse). Consider overall balance of compliance.',
  },
  {
    name: 'Mitigation Measures',
    description: 'Design measures to reduce overshadowing impacts.',
    required: false,
    min_words: 200,
    max_words: 400,
    guidance:
      'Describe mitigation: design amendments, landscape design, compensatory provision, material selection. Note design evolution in response to analysis. Where no further mitigation is feasible, justify residual impact.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of findings, compliance confirmation, and professional conclusion.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise findings. State how many areas meet BRE criteria. Summarise transient overshadowing patterns. Provide mitigating factors for non-compliant areas. Confirm NPPF and local policy compliance. State professional conclusion on acceptability.',
  },
];

export const OSS_QUALITY: QualityCriteria = {
  min_policy_refs: 4,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Sun on Ground Assessment',
    'Transient Overshadowing Analysis',
    'Impact on Amenity Spaces',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const OSS_TEMPLATE = {
  assessment_type: 'Overshadowing Study',
  short_name: 'OSS',
  version: 1,
  sections: OSS_SECTIONS,
  quality_criteria: OSS_QUALITY,
};
