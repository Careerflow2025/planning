import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Overheating Risk Assessment (ORA) -- required for new residential
 * developments under Approved Document O of the Building Regulations
 * (introduced June 2022) and by specific planning policies, notably
 * London Plan Policy SI 4. The assessment demonstrates that the proposed
 * development will not be subject to unacceptable overheating risk through
 * the application of the cooling hierarchy.
 *
 * For domestic buildings, the assessment typically uses CIBSE TM59
 * methodology; for non-domestic buildings, CIBSE TM52.
 */

export const ORA_PROMPT = `You are preparing an Overheating Risk Assessment (ORA) to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

An Overheating Risk Assessment is required to demonstrate that:
1. The risk of overheating in the proposed development has been assessed using an appropriate methodology.
2. The proposed development will not be subject to unacceptable levels of overheating, protecting the health and comfort of future occupants.
3. The cooling hierarchy has been applied: reducing internal heat gains, then maximising passive cooling (orientation, shading, ventilation), then considering mechanical ventilation, and only using active cooling (air conditioning) as a last resort.
4. The development complies with Approved Document O of the Building Regulations and/or relevant planning policies (such as London Plan Policy SI 4).
5. Where active cooling is proposed, the additional energy demand has been accounted for in the Energy Assessment.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 157**: The planning system should support the transition to a low carbon future in a changing climate.
- **Paragraph 158**: Plans should take a proactive approach to mitigating and adapting to climate change, taking into account the long-term implications of overheating from rising temperatures.
- **Paragraph 159**: New development should be planned for in ways that avoid increased vulnerability to the range of impacts arising from climate change.

### Building Regulations Approved Document O: Overheating (2022)
- Introduced in June 2022 for new residential buildings.
- Provides two compliance routes:
  - **Simplified Method**: A prescriptive checklist approach based on glazing limits, shading, ventilation openings, and cross-ventilation. Suitable for simpler residential buildings.
  - **Dynamic Thermal Modelling Method**: Full dynamic thermal simulation demonstrating compliance with CIBSE TM59 criteria. Required for more complex developments or where the simplified method cannot demonstrate compliance.
- Applies to new dwellings, including residential conversions creating new dwellings.
- Requires consideration of noise constraints on openable windows (particularly relevant in urban areas and near transport corridors).
- Requires consideration of security constraints on ground floor openable windows.

### CIBSE TM59: Design methodology for the assessment of overheating risk in homes (2017)
- The industry-standard methodology for assessing overheating risk in domestic buildings.
- Defines two criteria for compliance:
  - **Criterion A (Living rooms, kitchens, bedrooms -- daytime)**: For the hours between 10:00 and 22:00, the operative temperature should not exceed the upper limit of the comfort range (based on the adaptive thermal comfort model, CIBSE Guide A) for more than 3% of occupied hours.
  - **Criterion B (Bedrooms -- night-time)**: For the hours between 22:00 and 07:00, the operative temperature should not exceed 26 degrees Celsius for more than 1% of the annual hours. This criterion applies to bedrooms only.
- Requires use of Design Summer Year (DSY) weather files:
  - DSY1: moderate warm summer (used for compliance assessment).
  - DSY2: short, intense warm spell (sensitivity test).
  - DSY3: long, moderate warm spell (sensitivity test).
- Requires assessment under future climate scenarios (2020s, 2050s, 2080s) using CIBSE Future Weather Files.

### CIBSE TM52: The limits of thermal comfort -- avoiding overheating in European buildings (2013)
- Applies to non-domestic buildings (offices, schools, healthcare, etc.).
- Defines three criteria based on the adaptive thermal comfort model:
  - **Criterion 1**: Hours of exceedance -- the number of hours during which the operative temperature exceeds the upper limit of the comfort range should not exceed 3% of occupied hours.
  - **Criterion 2**: Daily weighted exceedance -- the severity of overheating on any single day should not exceed 6 degree-hours.
  - **Criterion 3**: Upper limit temperature -- the operative temperature should not exceed the absolute maximum acceptable temperature (4K above the comfort temperature).
- Failure of any two of the three criteria indicates the room has failed the overheating assessment.

### London Plan (2021) -- for developments in London
- **Policy SI 4 (Managing heat risk)**: Major development proposals should demonstrate through an energy strategy how they will reduce the potential for internal overheating and reliance on air conditioning systems, in accordance with the cooling hierarchy:
  1. Reduce the amount of heat entering a building through orientation, shading, high albedo materials, fenestration, insulation, and green infrastructure.
  2. Minimise internal heat generation through energy-efficient design.
  3. Manage the heat within the building through exposed thermal mass and high ceilings.
  4. Provide passive ventilation.
  5. Provide mechanical ventilation.
  6. Provide active cooling systems (as a last resort).
- Requires dynamic thermal modelling using CIBSE TM59 (domestic) or TM52 (non-domestic).
- Requires assessment against DSY1, DSY2, and DSY3 weather files.
- Requires assessment under current and future climate scenarios.

### GLA Energy Assessment Guidance (2022)
- Provides detailed guidance on overheating assessments for London plan referral schemes.
- Requires a sample of the worst-case units to be modelled (single aspect, south/west facing, upper floors, near noise sources).
- Requires demonstration that the cooling hierarchy has been applied sequentially.
- Requires justification for any use of active cooling.

### Good Homes Alliance -- Overheating in New Homes Tool (2019)
- Provides a risk assessment tool for early-stage identification of overheating risk.
- Considers factors including location, orientation, glazing ratios, ventilation strategy, and internal heat gains.
- Useful as a screening tool at pre-planning stage.

### Other Key References
- CIBSE Guide A: Environmental Design (2015) -- adaptive thermal comfort criteria.
- CIBSE AM11: Building performance modelling (2015) -- modelling methodology.
- BS EN 16798-1:2019 -- Indoor environmental input parameters for design and assessment of energy performance of buildings.
- Chartered Institution of Building Services Engineers (CIBSE) weather data files.
- BRE Thermal Comfort assessment guidance.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Overheating Risk Assessment and the policy basis for its preparation.
- Identify the application site by address and local planning authority.
- Summarise the proposed development: building type (residential, mixed-use), number of dwellings, number of storeys, orientation.
- State which policies and regulations require the assessment (Approved Document O, London Plan Policy SI 4, local plan policies).
- State the assessment methodology being used (CIBSE TM59 for domestic, CIBSE TM52 for non-domestic, or AD O simplified method).
- Note any site-specific constraints relevant to overheating (noise, security, air quality affecting openable windows).
- Outline the document structure.

### 2. Policy Framework (300-600 words)
- Set out the national planning policy context: NPPF paragraphs 157-159 on climate change adaptation and overheating.
- Describe the Building Regulations Approved Document O requirements: compliance routes (simplified method vs. dynamic thermal modelling), scope of application.
- For London developments: detail London Plan Policy SI 4 and the cooling hierarchy.
- Reference CIBSE TM59 (domestic) and/or CIBSE TM52 (non-domestic) as the assessment methodology.
- Reference GLA Energy Assessment Guidance for London schemes.
- Set out any relevant local plan policies on overheating, thermal comfort, or climate change adaptation.
- Explain the policy rationale: with increasing summer temperatures due to climate change and the urban heat island effect, overheating is a growing public health concern.

### 3. Site and Building Context (300-600 words)
- Describe the site location and its relevance to overheating risk:
  - Urban heat island: is the site in a densely built-up area?
  - Orientation: which directions do the principal facades face?
  - Surrounding buildings: do they provide shading or restrict airflow?
  - Noise environment: are there noise sources (roads, railways, airports) that may constrain openable window use?
  - Air quality: are there air quality constraints on ventilation strategy?
  - Security: are there security concerns for ground-floor openable windows?
- Describe the proposed building design relevant to overheating:
  - Building form and massing.
  - Dwelling types: single aspect, dual aspect, triple aspect.
  - Glazing ratios (window-to-floor area ratios) and glazing specification (g-value, U-value).
  - Insulation levels and airtightness.
  - Internal heat gains: lighting, equipment, occupancy.
  - Communal heating systems (if applicable): heat gains from corridors and risers.
- Identify the highest-risk dwelling types: single aspect south or west facing, upper floors, dwellings near noise sources.

### 4. Methodology (400-700 words)
- State the assessment methodology:
  - **Dynamic thermal modelling**: software used (e.g., IES VE, TAS, EnergyPlus, DesignBuilder).
  - **Compliance standard**: CIBSE TM59 for domestic, CIBSE TM52 for non-domestic, or AD O simplified method.
- If using dynamic thermal modelling:
  - State the weather files used: CIBSE DSY1 (compliance), DSY2 and DSY3 (sensitivity tests), and the weather station location.
  - State the future climate scenarios modelled (2020s, 2050s, 2080s).
  - State the emission scenario used (typically medium emission scenario for compliance, high emission for sensitivity).
  - Describe the modelling assumptions: occupancy patterns, internal heat gains (lighting, equipment, cooking, metabolic), ventilation assumptions (window opening behaviour, background ventilation, mechanical ventilation rates).
  - State the sample of units modelled: all units or a representative worst-case sample (justify the selection).
  - State the assessment criteria:
    - TM59 Criterion A: operative temperature not to exceed adaptive comfort upper limit for more than 3% of occupied hours (10:00-22:00) in living rooms and bedrooms.
    - TM59 Criterion B: bedrooms not to exceed 26 degrees Celsius operative temperature for more than 1% of annual hours (22:00-07:00).
  - State any additional criteria applied (e.g., CIBSE Guide A fixed thresholds for corridors or communal areas).
- If using AD O simplified method:
  - Describe the prescriptive checks: glazing area limits, shading provisions, ventilation openings (free area as percentage of floor area), cross-ventilation requirements.
  - State the reference tables used from AD O.

### 5. Overheating Risk Analysis (500-1000 words)
- Present the results of the overheating assessment:
  - For dynamic thermal modelling: present the results by unit type and orientation, stating pass or fail against each criterion (TM59 Criteria A and B, or TM52 Criteria 1-3).
  - Present a summary table of results showing each modelled unit, its type (studio, 1-bed, 2-bed, etc.), orientation, floor level, and pass/fail status.
  - Identify any units that fail the criteria and the degree of failure.
  - Present the results for DSY1 (primary compliance) and note the results for DSY2 and DSY3 (sensitivity).
  - Present the results under current and future climate scenarios.
- For the AD O simplified method: demonstrate compliance against each prescriptive requirement.
- Discuss the key drivers of overheating risk:
  - Solar gains through glazing (orientation, glazing ratio, g-value).
  - Internal heat gains (lighting, equipment, communal heating pipework).
  - Ventilation effectiveness (single aspect vs. dual aspect, window opening restrictions).
  - Thermal mass and insulation levels.
  - Urban heat island effect.

### 6. Mitigation Strategy (500-800 words)
- Present the cooling hierarchy and demonstrate that it has been applied sequentially:

#### 6.1 Reduce Heat Gains (Passive First)
- External shading: fixed shading devices (brise soleil, overhangs, fins), recessed balconies, external louvres or shutters.
- Solar control glazing: g-value specification (typically 0.4 or lower for south/west facades).
- Glazing ratios: limit glazing-to-floor area ratios (typically 25-30% maximum for south/west facades).
- High albedo materials: reflective roof finishes, light-coloured external surfaces.
- Green infrastructure: green roofs, green walls, tree planting for shading.
- Insulation and thermal bridging: well-insulated building fabric to prevent heat gain.

#### 6.2 Minimise Internal Heat Gains
- Energy-efficient lighting (LED throughout).
- Energy-efficient appliances and equipment.
- Communal heating system design: insulated pipework in corridors, minimised heat loss from distribution systems.
- Heat interface unit specification to minimise standing losses.

#### 6.3 Manage Heat Within the Building
- Exposed thermal mass: concrete soffits, heavyweight internal partitions (where appropriate for the structural system).
- Ceiling heights: higher ceilings improve thermal stratification and comfort.

#### 6.4 Passive Ventilation
- Cross-ventilation: dual-aspect dwellings, ventilation openings on opposite facades.
- Purge ventilation: large openable windows or doors for rapid heat dissipation.
- Secure ventilation: night-time ventilation through secure openable windows (restrictors, louvres).
- Stack ventilation: where building form allows (atria, lightwells).

#### 6.5 Mechanical Ventilation
- Mechanical ventilation with heat recovery (MVHR) with summer bypass.
- Tempered fresh air supply to address noise and air quality constraints on openable windows.

#### 6.6 Active Cooling (Last Resort Only)
- If active cooling is required: justify why the cooling hierarchy measures above are insufficient.
- Describe the proposed active cooling system: type (split system, VRF, district cooling), capacity, energy demand.
- Demonstrate that the additional energy demand is accounted for in the Energy Assessment.
- Set out the carbon impact of active cooling and how it is offset.

### 7. Compliance Demonstration (300-600 words)
- Present a clear compliance statement against each applicable standard:
  - Approved Document O: confirm compliance by either simplified method or dynamic thermal modelling.
  - CIBSE TM59 (domestic): confirm all modelled units pass Criteria A and B under DSY1 with the proposed mitigation measures.
  - CIBSE TM52 (non-domestic): confirm all modelled spaces pass at least two of the three criteria.
  - London Plan Policy SI 4 (for London): confirm the cooling hierarchy has been applied and demonstrate compliance with GLA requirements.
- Where any units require active cooling: confirm that all other cooling hierarchy steps have been exhausted first.
- Present a final summary table showing the pass/fail status of all modelled units with mitigation measures applied.
- Confirm that the assessment accounts for future climate change scenarios.

### 8. Conclusion (200-400 words)
- Summarise the overheating risk assessment findings.
- Confirm the methodology used and the compliance standard.
- State the overall outcome: pass or fail (with all mitigation measures applied).
- Summarise the key mitigation measures adopted through the cooling hierarchy.
- Confirm compliance with Approved Document O, CIBSE TM59/TM52, London Plan Policy SI 4 (if applicable), and relevant local plan policies.
- Note any recommended planning conditions (e.g., details of shading devices to be submitted, compliance with approved overheating strategy).
- State any further work required at detailed design stage (e.g., updated modelling at RIBA Stage 4 with finalised specifications).
- Note any commitments to post-construction monitoring of thermal performance.

## Quality Standards

- Reference the correct Building Regulations: Approved Document O (2022).
- Reference CIBSE TM59 (domestic) and/or CIBSE TM52 (non-domestic) correctly, including the specific criteria and thresholds.
- State the correct DSY weather files (DSY1, DSY2, DSY3) and their purpose.
- Present the cooling hierarchy in the correct order: reduce heat gains, minimise internal gains, manage heat, passive ventilation, mechanical ventilation, active cooling (last resort).
- Reference London Plan Policy SI 4 and GLA guidance for London developments.
- Use correct technical terminology: g-value, operative temperature, adaptive thermal comfort, DSY, purge ventilation, MVHR, thermal mass.
- Present results in a clear summary table format showing pass/fail against criteria.
- Where modelling has not been carried out, clearly state this and note that dynamic thermal modelling is recommended before determination.
- Distinguish between the AD O simplified method and the dynamic thermal modelling method.`;

export const ORA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site details, development summary, assessment methodology, and scope.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the ORA purpose and policy basis. Identify the site. Summarise the development. State the applicable policies and regulations. Confirm the methodology (CIBSE TM59/TM52 or AD O simplified). Note site constraints.',
  },
  {
    name: 'Policy Framework',
    description: 'National, regional, and local planning policy and regulatory context.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF paragraphs 157-159. Describe AD O requirements. For London, detail Policy SI 4 and the cooling hierarchy. Reference CIBSE TM59/TM52. Set out local plan policies.',
  },
  {
    name: 'Site and Building Context',
    description: 'Site location, urban heat island, orientation, noise, and building design.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe site context relevant to overheating: urban heat island, orientation, surrounding buildings, noise and air quality constraints, security. Describe building design: form, dwelling types, glazing ratios, insulation. Identify highest-risk units.',
  },
  {
    name: 'Methodology',
    description: 'Assessment methodology, modelling software, weather files, and compliance criteria.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'State the methodology and software. Describe weather files (DSY1-3) and future climate scenarios. Set out modelling assumptions. Describe the unit sample. State TM59 Criteria A and B or TM52 Criteria 1-3.',
  },
  {
    name: 'Overheating Risk Analysis',
    description: 'Results of the overheating assessment by unit type, orientation, and scenario.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present results by unit type and orientation with pass/fail against criteria. Present summary table. Identify failing units. Show results for DSY1, DSY2, DSY3 and future scenarios. Discuss key overheating drivers.',
  },
  {
    name: 'Mitigation Strategy',
    description: 'Application of the cooling hierarchy with specific mitigation measures.',
    required: true,
    min_words: 500,
    max_words: 800,
    guidance:
      'Present the cooling hierarchy sequentially: reduce heat gains (shading, g-value, glazing ratio), minimise internal gains, manage heat (thermal mass), passive ventilation, mechanical ventilation, active cooling (last resort). Justify any active cooling.',
    subsections: [
      {
        name: 'Reduce Heat Gains',
        description: 'External shading, solar control glazing, glazing ratios, green infrastructure.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe shading devices, g-value specifications, glazing ratio limits, albedo materials, and green infrastructure.',
      },
      {
        name: 'Passive and Mechanical Ventilation',
        description: 'Cross-ventilation, purge ventilation, MVHR with summer bypass.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe cross-ventilation, purge ventilation, night ventilation, stack ventilation, and MVHR bypass strategies.',
      },
      {
        name: 'Active Cooling (if required)',
        description: 'Justification and description of active cooling as a last resort.',
        required: false,
        min_words: 100,
        max_words: 200,
        guidance: 'If active cooling is needed, justify why the hierarchy is insufficient. Describe the system and account for energy demand.',
      },
    ],
  },
  {
    name: 'Compliance Demonstration',
    description: 'Compliance statement against AD O, CIBSE TM59/TM52, and planning policies.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Present a clear compliance statement for each standard. Show final pass/fail summary table with mitigation applied. Confirm cooling hierarchy application. Confirm future climate scenario compliance.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of findings, compliance confirmation, and recommended conditions.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise findings and overall outcome. Confirm compliance with AD O, CIBSE TM59/TM52, and planning policies. Summarise key mitigation measures. Note recommended conditions and further work at detailed design.',
  },
];

export const ORA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Site and Building Context',
    'Methodology',
    'Overheating Risk Analysis',
    'Mitigation Strategy',
    'Compliance Demonstration',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const ORA_TEMPLATE = {
  assessment_type: 'Overheating Risk Assessment',
  short_name: 'ORA',
  version: 1,
  sections: ORA_SECTIONS,
  quality_criteria: ORA_QUALITY,
};
