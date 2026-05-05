import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * BREEAM Pre-Assessment (BPA) -- required or encouraged by many local
 * planning authorities for major non-residential and mixed-use developments.
 * The pre-assessment provides an early-stage evaluation of the likely BREEAM
 * rating achievable, identifying targeted credits and demonstrating the
 * ability to meet the required rating (typically Excellent or Outstanding).
 *
 * This document follows the BREEAM New Construction assessment scheme
 * (currently the 2018 version, SD5078) and covers all assessment categories.
 */

export const BPA_PROMPT = `You are preparing a BREEAM Pre-Assessment to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A BREEAM Pre-Assessment is prepared to demonstrate that:
1. The proposed development has been evaluated against the BREEAM New Construction assessment criteria at an early design stage.
2. A credible strategy exists to achieve the required BREEAM rating (typically Excellent or Outstanding, as specified by planning policy or condition).
3. Targeted credits have been identified across all BREEAM categories, with clear justification for their achievability.
4. The design team has engaged with the BREEAM process and understands the requirements for formal certification.
5. Any credits considered unachievable or not targeted have been identified with reasons.

The pre-assessment is not a formal BREEAM assessment and does not result in a certified rating. It provides an indicative rating based on the information available at the planning stage and the design team's commitments.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 157**: The planning system should support the transition to a low carbon future in a changing climate.
- **Paragraph 158**: Plans should take a proactive approach to mitigating and adapting to climate change.
- **Paragraph 159**: New development should be planned for in ways that can help to reduce greenhouse gas emissions.
- **Paragraph 131**: The creation of high quality, beautiful and sustainable buildings and places is fundamental to what the planning and development process should achieve.
- **Paragraph 135**: Planning policies and decisions should ensure that developments are visually attractive as a result of good architecture, layout and appropriate landscaping; are sympathetic to local character; establish a strong sense of place; and optimise the potential of the site.

### BREEAM New Construction 2018 (SD5078)
- The current version of BREEAM for new non-residential and mixed-use buildings in the UK.
- Rating benchmarks: Pass (30%), Good (45%), Very Good (55%), Excellent (70%), Outstanding (85%).
- Minimum standards: certain credits are mandatory at each rating level.
- Assessment categories: Management, Health and Wellbeing, Energy, Transport, Water, Materials, Waste, Land Use and Ecology, Pollution, Innovation.
- Category weightings vary by building type (e.g., office, retail, industrial, residential institution).

### Local Plan BREEAM Requirements
- Many local planning authorities require major non-residential developments to achieve a minimum BREEAM rating, typically Excellent.
- Some authorities require Outstanding for flagship or publicly funded projects.
- Planning conditions commonly require submission of the design stage certificate prior to commencement and the post-construction certificate prior to occupation.
- Reference the specific local plan policy for the relevant authority.

### Building Regulations (England)
- Part L (Conservation of fuel and power) -- sets minimum energy performance standards.
- Part O (Overheating) -- relates to BREEAM Health and Wellbeing credits.
- Part S (Infrastructure for electric vehicle charging).
- Part G (Sanitation, hot water safety and water efficiency) -- water consumption targets.
- Part F (Ventilation) -- relates to indoor air quality credits.

### Other Key References
- CIBSE TM54: Evaluating operational energy performance at the design stage.
- BSRIA BG 54: Design framework for building services.
- ISO 14001: Environmental management systems (relevant to Management credits).
- Considerate Constructors Scheme (relevant to Management credits).
- WELL Building Standard (complementary to Health and Wellbeing credits).

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the BREEAM Pre-Assessment and the policy basis for its preparation.
- Identify the application site by address and local planning authority.
- Summarise the proposed development: building type, gross internal area (GIA in m2), number of storeys, primary use.
- State the BREEAM scheme and version being assessed against (BREEAM New Construction 2018, SD5078).
- State the target BREEAM rating (as required by planning policy or as committed by the applicant).
- Confirm the assessment stage (pre-assessment at planning stage, typically RIBA Stage 2 or 3).
- Note that a licensed BREEAM Assessor will be appointed (or has been appointed) to carry out the formal assessment.
- State any limitations of the pre-assessment (design information available, early-stage assumptions).

### 2. Policy Framework (300-500 words)
- Set out the national planning policy context: NPPF paragraphs on sustainability and building quality.
- Reference the specific local plan policy requiring BREEAM certification, stating the required rating level.
- If applicable, reference any supplementary planning documents (SPDs) or sustainability checklists that require BREEAM.
- Note the Building Regulations requirements that interact with BREEAM credits (Part L, Part G, Part F, Part O).
- Explain how the BREEAM assessment supports the policy objectives of sustainable development and climate change mitigation.

### 3. Assessment Methodology (200-400 words)
- Confirm the BREEAM scheme: BREEAM UK New Construction 2018 (SD5078).
- State the building type classification for BREEAM purposes (e.g., office, retail, education, industrial, multi-residential).
- State the category weightings applicable to the building type.
- Explain the rating benchmarks: Pass (30%), Good (45%), Very Good (55%), Excellent (70%), Outstanding (85%).
- Note the minimum standards requirements: certain credits are mandatory at each rating level.
- Describe the approach to the pre-assessment: desk-based review of design information, assessment of credit achievability, identification of design actions required.
- State the information sources used: architectural drawings, MEP design information, landscape proposals, sustainability strategy.

### 4. Management (300-600 words)
- Assess the following credits:
  - Man 01: Project brief and design -- sustainability champion, BREEAM AP, design and delivery stakeholder consultation.
  - Man 02: Life cycle cost and service life planning -- elemental LCC plan, component-level LCC plan.
  - Man 03: Responsible construction practices -- Considerate Constructors Scheme, monitoring of construction site impacts.
  - Man 04: Commissioning and handover -- commissioning schedule, building user guide, seasonal commissioning, post-occupancy evaluation.
  - Man 05: Aftercare -- aftercare support, seasonal commissioning, post-occupancy evaluation.
- For each credit: state whether it is targeted, the number of credits available, the number targeted, and any design actions required.
- Note any minimum standards in this category for the target rating.

### 5. Health and Wellbeing (400-700 words)
- Assess the following credits:
  - Hea 01: Visual comfort -- daylighting, view out, internal and external lighting levels, glare control.
  - Hea 02: Indoor air quality -- ventilation, indoor air quality plan, VOC emissions from products, post-construction IAQ testing.
  - Hea 04: Thermal comfort -- thermal modelling, adaptable systems, thermal zoning.
  - Hea 05: Acoustic performance -- acoustic design, noise levels, sound insulation.
  - Hea 06: Accessibility -- inclusive design, accessible building features.
  - Hea 07: Hazards -- safe access, trip and fall risks, swimming pools and water bodies.
- For each credit: state whether targeted, credits available, credits targeted, design actions.
- Note minimum standards for the target rating (typically Hea 01 prerequisite at Excellent).

### 6. Energy (400-700 words)
- Assess the following credits:
  - Ene 01: Reduction of energy use and carbon emissions -- energy performance ratio (EPR), improvement over Building Regulations Part L.
  - Ene 02: Energy monitoring -- sub-metering of major energy systems, display energy certificate.
  - Ene 03: External lighting -- external lighting design, luminaire efficiency, controls.
  - Ene 04: Low carbon design -- passive design analysis, free cooling, low and zero carbon feasibility study.
  - Ene 05: Energy efficient cold storage -- for relevant building types.
  - Ene 06: Energy efficient transportation systems -- lifts, escalators, moving walkways.
- Note that Ene 01 carries the most credits in this category and is typically the most significant contributor.
- State the predicted EPR and the associated credits.
- Note minimum standards for the target rating (Ene 01 minimum credits at Excellent and Outstanding).

### 7. Transport (300-500 words)
- Assess the following credits:
  - Tra 01: Public transport accessibility -- proximity and frequency of public transport services.
  - Tra 02: Proximity to amenities -- distance to local amenities.
  - Tra 03: Alternative modes of transport -- cyclist facilities (cycle storage, changing, showers), electric vehicle charging.
  - Tra 04: Maximum car parking capacity -- compliance with local parking standards, green travel plan.
  - Tra 05: Travel plan -- full travel plan with targets and monitoring.
- For each credit: state whether targeted, credits available, credits targeted, design actions.

### 8. Water (300-500 words)
- Assess the following credits:
  - Wat 01: Water consumption -- water efficiency fittings, flow rates, cistern sizes, target consumption reduction.
  - Wat 02: Water monitoring -- water metering, leak detection, sub-metering.
  - Wat 03: Water efficient equipment -- for relevant process water uses.
  - Wat 04: Water reuse and recycling -- rainwater harvesting, greywater recycling.
- State the target water consumption reduction compared to the baseline (Building Regulations Part G).
- Note minimum standards for the target rating (Wat 01 minimum at Excellent).

### 9. Materials (300-600 words)
- Assess the following credits:
  - Mat 01: Environmental impacts of construction products -- environmental profiles of specified materials (Green Guide or EPDs).
  - Mat 02: Material efficiency -- material efficiency plan, design for disassembly.
  - Mat 03: Responsible sourcing of construction products -- responsible sourcing of key materials (timber, concrete, steel), supply chain management.
  - Mat 05: Designing for durability and resilience -- protection of exposed elements, durability measures.
  - Mat 06: Material efficiency -- resource efficiency plan.
- For each credit: state whether targeted, credits available, credits targeted, design actions.
- Note the importance of early specification of responsibly sourced materials.

### 10. Waste (300-500 words)
- Assess the following credits:
  - Wst 01: Construction waste management -- site waste management plan, waste reduction targets, diversion from landfill.
  - Wst 02: Recycled aggregates -- use of recycled or secondary aggregates.
  - Wst 03: Operational waste -- provision of recycling storage, waste management strategy, compactors/balers.
  - Wst 05: Adaptation to climate change -- climate change adaptation strategy.
  - Wst 06: Design for disassembly and adaptability -- functional adaptability, design for disassembly.
- For each credit: state whether targeted, credits available, credits targeted, design actions.

### 11. Land Use and Ecology (300-600 words)
- Assess the following credits:
  - LE 01: Site selection -- previously developed land, contaminated land.
  - LE 02: Ecological value of the site and protection of ecological features.
  - LE 03: Minimising impact on existing site ecology -- ecological risk assessment, protection during construction.
  - LE 04: Enhancing site ecology -- ecological enhancement, habitat creation, increase in ecological value.
  - LE 05: Long-term impact on biodiversity -- landscape and ecology management plan, 5-year maintenance commitment.
- Reference biodiversity net gain requirements (Environment Act 2021, minimum 10%).
- For each credit: state whether targeted, credits available, credits targeted, design actions.

### 12. Pollution (300-500 words)
- Assess the following credits:
  - Pol 01: Impact of refrigerants -- refrigerant GWP, leak detection, refrigerant selection.
  - Pol 02: NOx emissions -- NOx emissions from heating and hot water systems.
  - Pol 03: Surface water run-off -- flood risk, SuDS, surface water attenuation and treatment.
  - Pol 04: Reduction of night time light pollution -- external lighting design, light spill, curfew.
  - Pol 05: Reduction of noise pollution -- noise from building services, acoustic design.
- For each credit: state whether targeted, credits available, credits targeted, design actions.
- Note that Pol 03 typically interacts with the Drainage Strategy and Flood Risk Assessment.

### 13. Innovation (200-300 words)
- Assess the potential for Innovation credits:
  - Inn 01: Innovation -- up to 10 additional credits for exemplary performance in specific categories.
  - Identify which credits could achieve exemplary level performance.
- Note that Innovation credits can raise the overall score but are not relied upon for achieving the target rating in a robust pre-assessment.
- Identify any genuine exemplary performance opportunities.

### 14. Credit Summary (300-600 words)
- Present a summary table showing:
  - Each BREEAM category.
  - Credits available.
  - Credits targeted.
  - Percentage of category credits targeted.
  - Weighted category score.
- Calculate the overall predicted BREEAM score as a percentage.
- State the predicted BREEAM rating.
- Confirm whether the target rating is achievable based on the credits targeted.
- Identify any categories where performance is marginal and additional credits may be needed as contingency.
- Note the minimum standards: confirm all mandatory credits for the target rating are targeted.

### 15. Conclusion (200-400 words)
- Summarise the predicted BREEAM rating and overall percentage score.
- Confirm that the target rating (as required by planning policy) is achievable.
- List the key design commitments required to achieve the target rating.
- Note any risks to achieving the target rating and the proposed mitigation.
- Recommend that a licensed BREEAM Assessor is formally appointed and that the design stage assessment is carried out at the earliest opportunity.
- Set out the programme for formal BREEAM certification: design stage certificate before commencement, post-construction certificate before occupation.
- Note that the pre-assessment will be updated as the design develops.

## Quality Standards

- Reference the correct BREEAM scheme and version (BREEAM UK New Construction 2018, SD5078).
- State the correct rating benchmarks: Pass (30%), Good (45%), Very Good (55%), Excellent (70%), Outstanding (85%).
- Reference specific BREEAM credit codes (e.g., Ene 01, Wat 01, Mat 03).
- Demonstrate understanding of minimum standards requirements for the target rating.
- Present a clear credit summary table with available, targeted, and weighted scores by category.
- Reference the correct NPPF paragraphs and local plan policies.
- Use correct BREEAM terminology throughout: credits, categories, minimum standards, EPR, innovation credits.
- Where design information is not yet available, state this and note assumptions made.
- Ensure that the predicted score is realistic and achievable, not overly optimistic.`;

export const BPA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site details, development summary, target rating, and assessment stage.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the pre-assessment purpose and policy basis. Identify the site. Summarise the development. State the BREEAM scheme version and target rating. Confirm the assessment stage and note that a licensed Assessor will be appointed.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local planning policy context for BREEAM requirements.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Set out NPPF sustainability paragraphs. Reference specific local plan BREEAM policy and required rating. Note Building Regulations interactions. Explain how BREEAM supports policy objectives.',
  },
  {
    name: 'Assessment Methodology',
    description: 'BREEAM scheme, building type, category weightings, and pre-assessment approach.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Confirm BREEAM UK NC 2018. State the building type classification and category weightings. Explain rating benchmarks and minimum standards. Describe the pre-assessment approach and information sources.',
  },
  {
    name: 'Management',
    description: 'Assessment of Management category credits (Man 01-05).',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Assess Man 01 to Man 05. For each credit, state whether targeted, credits available, credits targeted, and design actions required. Note minimum standards.',
  },
  {
    name: 'Health and Wellbeing',
    description: 'Assessment of Health and Wellbeing category credits (Hea 01-07).',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Assess Hea 01 to Hea 07. Cover daylighting, indoor air quality, thermal comfort, acoustics, accessibility. Note minimum standards for Hea 01 at Excellent.',
  },
  {
    name: 'Energy',
    description: 'Assessment of Energy category credits (Ene 01-06).',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Assess Ene 01 to Ene 06. Present predicted EPR and associated credits. Note that Ene 01 carries the most credits. State minimum standards for the target rating.',
  },
  {
    name: 'Transport',
    description: 'Assessment of Transport category credits (Tra 01-05).',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Assess Tra 01 to Tra 05. Cover public transport accessibility, proximity to amenities, cyclist facilities, EV charging, travel plan.',
  },
  {
    name: 'Water',
    description: 'Assessment of Water category credits (Wat 01-04).',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Assess Wat 01 to Wat 04. State target water consumption reduction. Cover metering, efficient equipment, and water reuse. Note minimum standards for Wat 01.',
  },
  {
    name: 'Materials',
    description: 'Assessment of Materials category credits (Mat 01-06).',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Assess Mat 01 to Mat 06. Cover environmental profiles, material efficiency, responsible sourcing, and durability. Note importance of early material specification.',
  },
  {
    name: 'Waste',
    description: 'Assessment of Waste category credits (Wst 01-06).',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Assess Wst 01 to Wst 06. Cover construction waste management, recycled aggregates, operational waste, climate change adaptation, and design for disassembly.',
  },
  {
    name: 'Land Use and Ecology',
    description: 'Assessment of Land Use and Ecology category credits (LE 01-05).',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Assess LE 01 to LE 05. Cover site selection, ecological protection and enhancement, biodiversity net gain. Reference Environment Act 2021.',
  },
  {
    name: 'Pollution',
    description: 'Assessment of Pollution category credits (Pol 01-05).',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Assess Pol 01 to Pol 05. Cover refrigerants, NOx emissions, surface water run-off, light pollution, and noise pollution. Note interaction with Drainage Strategy.',
  },
  {
    name: 'Innovation',
    description: 'Assessment of potential Innovation credits.',
    required: false,
    min_words: 200,
    max_words: 300,
    guidance:
      'Identify potential exemplary level performance opportunities. Note that Innovation credits should not be relied upon for achieving the target rating.',
  },
  {
    name: 'Credit Summary',
    description: 'Summary table of credits by category, overall score, and predicted rating.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Present a summary table showing credits available, targeted, and weighted scores by category. Calculate overall predicted percentage. State predicted rating. Confirm target achievability. Identify marginal categories. Confirm minimum standards compliance.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of predicted rating, key commitments, risks, and certification programme.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise predicted rating. Confirm achievability of target. List key design commitments. Note risks and mitigation. Recommend formal BREEAM Assessor appointment. Set out certification programme.',
  },
];

export const BPA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Assessment Methodology',
    'Management',
    'Health and Wellbeing',
    'Energy',
    'Transport',
    'Water',
    'Materials',
    'Waste',
    'Land Use and Ecology',
    'Pollution',
    'Credit Summary',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const BPA_TEMPLATE = {
  assessment_type: 'BREEAM Pre-Assessment',
  short_name: 'BPA',
  version: 1,
  sections: BPA_SECTIONS,
  quality_criteria: BPA_QUALITY,
};
