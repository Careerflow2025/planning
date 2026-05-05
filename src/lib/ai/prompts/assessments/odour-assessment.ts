import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Odour Assessment -- required for developments that may generate odour emissions
 * (e.g., waste management, wastewater treatment, food processing, agricultural,
 * rendering, composting, industrial) or for odour-sensitive developments (e.g.,
 * residential) proposed near existing odour sources.
 *
 * AI Difficulty: Hard (20-40 pages). This document typically requires specialist
 * odour measurement, dispersion modelling, and professional assessment.
 *
 * DISCLAIMER: This document is AI-generated and constitutes a draft framework only.
 * It MUST be reviewed, verified, and endorsed by a suitably qualified odour
 * assessment specialist (e.g., Member of IAQM, chartered scientist, or engineer
 * with odour expertise) before submission to the local planning authority.
 * Dispersion modelling, odour emission measurements, and olfactometry must be
 * conducted by competent professionals.
 */

export const ODA_PROMPT = `You are preparing an Odour Assessment to accompany a planning application submitted to a local planning authority in England. The assessment evaluates the potential odour impacts of a proposed development on surrounding sensitive receptors, or the odour impact of existing sources on a proposed odour-sensitive development.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft framework only. It MUST be reviewed, verified, and endorsed by a suitably qualified odour assessment specialist before submission to the local planning authority. Odour emission measurement (including olfactometry to BS EN 13725), dispersion modelling (ADMS or AERMOD), sniff testing, and odour impact assessment require specialist expertise and equipment. The AI cannot conduct odour surveys or dispersion modelling and no measurement data should be fabricated.

## Document Purpose

The Odour Assessment must:
1. Identify all potential odour sources associated with the proposed development or existing sources affecting the site.
2. Characterise odour emissions: emission rates, source characteristics, temporal patterns.
3. Where dispersion modelling is required, predict odour concentrations at sensitive receptors using an approved atmospheric dispersion model.
4. Assess the odour impact against relevant benchmark criteria using the FIDOL factors (Frequency, Intensity, Duration, Offensiveness, Location).
5. Demonstrate that the proposed development will not give rise to unacceptable odour impacts on amenity.
6. Set out odour mitigation and management measures to prevent or minimise odour nuisance.
7. Propose a monitoring regime where appropriate.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174(e)**: Planning policies and decisions should prevent new and existing development from contributing to, being put at unacceptable risk from, or being adversely affected by, unacceptable levels of pollution, including odour.
- **Paragraph 185**: Planning decisions should ensure that new development is appropriate for its location taking into account the likely effects of pollution on health, living conditions, and the natural environment.
- **Paragraph 187**: Planning decisions should ensure new development can be integrated effectively with existing businesses and community facilities, including by considering whether the existing use should be given weight in deciding the suitability of the location for the proposed development (the "agent of change" principle).

### IAQM Guidance on the Assessment of Odour for Planning (2018)
The Institute of Air Quality Management (IAQM) guidance provides a framework for odour assessment in planning:
- **Step 1: Source characterisation**: Identify and quantify odour sources.
- **Step 2: Pathway assessment**: Determine how odour reaches receptors (dispersion modelling or qualitative assessment).
- **Step 3: Receptor assessment**: Identify sensitive receptors and assess their sensitivity.
- **Step 4: Impact assessment**: Determine the significance of odour impact using the FIDOL factors.
- **Step 5: Mitigation**: Identify measures to prevent or reduce odour impacts.

IAQM Assessment Criteria:
- The IAQM recommends benchmark odour exposure criteria based on the offensiveness of the odour source:
  - **Most offensive** (e.g., rendering, wastewater treatment, intensive animal farming): 1.5 ouE/m3 as the 98th percentile of 1-hour mean concentrations.
  - **Moderately offensive** (e.g., food processing, landfill, composting): 3.0 ouE/m3 as the 98th percentile of 1-hour mean concentrations.
  - **Less offensive** (e.g., brewery, coffee roasting, bakery, paint manufacture): 6.0 ouE/m3 as the 98th percentile of 1-hour mean concentrations.
- These benchmarks are indicative and professional judgement is required.

### Environment Agency H4 Odour Management -- How to Comply with Your Environmental Permit (2011)
- Applies to permitted installations regulated under the Environmental Permitting Regulations 2016.
- Provides guidance on:
  - Odour management plans.
  - Source-pathway-receptor approach.
  - Odour impact assessment for permit applications.
  - Best Available Techniques (BAT) for odour control.
  - Complaint investigation and assessment.
- Defines odour effects at receptors: detection, recognition, objection, complaint, annoyance, serious detriment.

### BS EN 13725:2022 Stationary Source Emissions -- Determination of Odour Concentration by Dynamic Olfactometry
- The standard method for measuring odour emission rates using olfactometry.
- Odour concentration expressed in European odour units per cubic metre (ouE/m3).
- Requires a panel of trained assessors and calibrated olfactometer.

### FIDOL Factors
The FIDOL framework assesses the overall odour impact:
- **Frequency**: How often the odour is experienced (temporal patterns, wind direction).
- **Intensity**: How strong the odour is perceived (detection, faint, distinct, strong, very strong, overpowering).
- **Duration**: How long the odour is experienced (minutes, hours, continuous).
- **Offensiveness**: How unpleasant the odour character is (hedonic tone: pleasant to very unpleasant).
- **Location**: The sensitivity of the location (residential, hospital, school = high sensitivity; commercial, industrial = low sensitivity).

### Other Key References
- **DEFRA Code of Practice on Odour Nuisance from Sewage Treatment Works (2006)**: Specific guidance for wastewater treatment odour.
- **DEFRA Odour Guidance for Local Authorities (2010)**: Guidance on investigating odour complaints.
- **ADMS (Atmospheric Dispersion Modelling System)**: CERC atmospheric dispersion model widely used in the UK.
- **AERMOD**: US EPA regulatory dispersion model also accepted in the UK.
- **BS 4142:2014+A1:2019**: While primarily a noise standard, BS 4142 principles of context and character are relevant to odour assessment by analogy.
- **Environmental Permitting (England and Wales) Regulations 2016**: Regulatory framework for permitted installations.
- **Waste Management Facilities**: Environment Agency sector guidance notes for waste operations (e.g., composting, anaerobic digestion, mechanical biological treatment).
- **Clean Air Act 1993**: Provisions on nuisance from fumes and gases.
- **Environmental Protection Act 1990, Part III**: Statutory nuisance provisions including odour.
- **Local plan amenity policies**: Authority-specific requirements on protecting residential amenity.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the Odour Assessment and its policy basis (NPPF Paragraphs 174(e), 185, 187).
- Identify the site by full postal address and grid reference.
- Summarise the proposed development.
- Identify the key odour issue: odour from the proposed development affecting existing receptors, or odour from existing sources affecting a proposed odour-sensitive development.
- State the qualifications of the author (or "[PREPARED BY A SUITABLY QUALIFIED ODOUR ASSESSMENT SPECIALIST]").
- State any limitations of the assessment.
- Include the AI-generated disclaimer.

### 2. Policy Framework (400-700 words)
- Set out NPPF Paragraphs 174(e), 185, and 187 (agent of change principle).
- Describe the IAQM Guidance on the Assessment of Odour for Planning (2018):
  - The five-step assessment process.
  - Benchmark odour exposure criteria (1.5, 3.0, 6.0 ouE/m3 at the 98th percentile).
  - The FIDOL factors framework.
- Describe the Environment Agency H4 Odour Management guidance (where the source is a permitted installation).
- Reference BS EN 13725:2022 for olfactometry.
- Reference local plan amenity policies and any supplementary planning guidance on odour.
- Reference the Environmental Protection Act 1990 Part III statutory nuisance provisions.

### 3. Methodology (500-1000 words)
- Describe the odour assessment methodology:

#### 3.1 Source Characterisation
- Identify each potential odour source within the proposed development or from existing operations:
  - Source type: point (stack, vent), area (lagoon, open composting, landfill), volume (building, shed), fugitive (leaks, loading/unloading).
  - Process description and materials handled.
  - Odour emission rate: measured by olfactometry (BS EN 13725), estimated from published emission factors, or literature values.
  - Temporal variability: continuous, intermittent, batch process, seasonal.
  - Source parameters: temperature, velocity, height, area, volume.
- If odour emission data has not been provided, flag: "[ODOUR EMISSION DATA TO BE PROVIDED -- OLFACTOMETRY MEASUREMENT OR PUBLISHED EMISSION FACTORS REQUIRED]".

#### 3.2 Dispersion Modelling
- Describe the atmospheric dispersion model used (ADMS 5 or AERMOD):
  - Model version and validation status.
  - Meteorological data: source (nearest representative station), years of data (minimum 5 years, or 1 year site-specific), parameters (wind speed, direction, temperature, cloud cover, precipitation).
  - Wind rose analysis: prevailing wind direction and frequency of calms.
  - Terrain: flat or complex terrain modelling.
  - Buildings: building downwash effects modelled (where relevant).
  - Source parameters: as characterised in Step 1.
  - Output metrics: 1-hour mean odour concentrations, 98th percentile of 1-hour means.
  - Model domain and receptor grid resolution.
  - Sensitivity analysis: emission rate uncertainty, meteorological variability.
- If dispersion modelling has not been conducted, flag: "[DISPERSION MODELLING TO BE CONDUCTED BY SPECIALIST AIR QUALITY CONSULTANT]" and describe the qualitative assessment approach as an alternative.

#### 3.3 Receptor Identification
- Identify and map all odour-sensitive receptors within the study area:
  - Residential properties (individual dwellings, housing estates).
  - Schools, nurseries, hospitals, care homes (high sensitivity).
  - Commercial premises, offices, retail (medium sensitivity).
  - Industrial premises (low sensitivity).
  - Outdoor recreation areas, public open spaces, PRoW.
- For each receptor or receptor group, assign a sensitivity classification: high, medium, or low.
- State the distance and direction from the odour source(s) to each receptor.

### 4. Odour Source Identification (400-800 words)
- Provide a detailed description of each odour source:
  - For a proposed development generating odour:
    - Process description: what produces the odour (e.g., anaerobic digestion, composting, food manufacturing, wastewater treatment, rendering, paint application).
    - Materials and substances involved.
    - Odour character: describe the odour quality (e.g., putrid, sour, sweet, chemical, earthy, rotten egg).
    - Hedonic tone: pleasant, neutral, unpleasant, very unpleasant (assess using FIDOL "Offensiveness").
    - Emission rate: measured in ouE/s (European odour units per second) by olfactometry, or estimated from emission factors.
    - Operating hours and patterns.
    - Existing odour controls and abatement equipment.
  - For existing sources affecting a proposed odour-sensitive development:
    - Identify all existing odour sources within the zone of influence (typically 500m-2km depending on source type).
    - Describe each source: type, process, materials, operating patterns.
    - Obtain or estimate emission rates.
    - Review complaint history (from local authority Environmental Health records).
    - Review any existing odour management plans or environmental permit conditions.

### 5. Dispersion Modelling (600-1200 words)
- Present the dispersion modelling results (or qualitative assessment):

#### 5.1 Modelling Results
- Present predicted 98th percentile 1-hour mean odour concentrations at each sensitive receptor:
  - Tabulate results: receptor, distance, predicted concentration (ouE/m3), benchmark criterion.
  - Present isopleth contour maps showing odour concentration contours overlaid on a site plan:
    - 1.5 ouE/m3 contour (most offensive benchmark).
    - 3.0 ouE/m3 contour (moderately offensive benchmark).
    - 6.0 ouE/m3 contour (less offensive benchmark).
- Identify any receptors where predicted concentrations exceed the relevant benchmark.
- Present wind rose analysis and identify the receptor directions most affected.

#### 5.2 Sensitivity Analysis
- Present the results of sensitivity testing:
  - Variation in emission rate (e.g., +/- 50%).
  - Variation in meteorological year.
  - Effect of building downwash.
  - Effect of terrain.
- Discuss the confidence in the modelling results.

#### 5.3 Qualitative Assessment (where modelling is not conducted)
- If dispersion modelling is not warranted (e.g., for smaller or less offensive sources), provide a qualitative odour risk assessment:
  - Source magnitude and offensiveness.
  - Distance to receptors and prevailing wind direction.
  - Frequency and duration of emissions.
  - Comparison with similar operations.
  - Professional judgement on likely odour impact.

### 6. Odour Impact Assessment (500-1000 words)
- Assess the overall odour impact using the FIDOL factors:
  - **Frequency**: Based on the dispersion modelling, what percentage of the time are receptors exposed to odour above the detection threshold? What is the 98th percentile concentration?
  - **Intensity**: What is the predicted odour intensity at receptors (detection, recognition, distinct, strong)?
  - **Duration**: How long are odour episodes likely to last (minutes, hours)?
  - **Offensiveness**: What is the hedonic tone of the odour? How unpleasant is it perceived to be?
  - **Location**: How sensitive are the receptors to odour impact?
- Apply the IAQM significance criteria to determine the overall impact:
  - Negligible: No perceptible change to existing odour climate.
  - Slight: Odour detectable but not offensive; no impact on amenity.
  - Moderate: Odour noticeable and may be offensive to some; some impact on amenity.
  - Substantial: Odour clearly offensive; significant impact on amenity.
  - Severe: Odour causing widespread annoyance; unacceptable impact.
- Determine whether the effect is "significant" in planning terms.
- Apply the NPPF test: is the development appropriate for its location?
- Apply the "agent of change" principle (NPPF Paragraph 187) where an odour-sensitive use is proposed near an existing odour source.

### 7. Mitigation and Management (500-1000 words)
- Describe the odour mitigation and management measures:

#### 7.1 Source Control (Prevention)
- Process design to minimise odour generation:
  - Enclosed processes and buildings.
  - Negative pressure ventilation systems.
  - Sealed storage and handling areas.
  - Optimised process parameters (temperature, pH, aeration).
  - Materials management and housekeeping.

#### 7.2 Pathway Control (Abatement)
- Odour abatement technologies:
  - Biofilters: biological treatment of odorous exhaust air. Design parameters: media type, depth, moisture, residence time, removal efficiency.
  - Carbon adsorption: activated carbon filters for VOC/odour removal. Design parameters: carbon type, bed depth, breakthrough monitoring.
  - Chemical scrubbers: wet scrubbing with chemical reagents. Design parameters: scrubbing solution, contact time, removal efficiency.
  - Thermal oxidisers: for high-concentration, high-flow odorous gases.
  - Discharge height and velocity: elevated discharge to promote dispersion.
- Specify the abatement efficiency and the residual emission rate.

#### 7.3 Receptor Protection
- For proposed odour-sensitive development near existing sources:
  - Layout design: orient buildings and amenity areas away from odour sources.
  - Buffer distances: maintain appropriate separation.
  - Mechanical ventilation with filtration: MVHR systems with carbon filtration.
  - Sealed building envelope: minimise infiltration of external air.
  - Landscaping: planting as visual screen (noting that planting provides minimal odour reduction).

#### 7.4 Odour Management Plan
- Recommend the preparation and implementation of an Odour Management Plan (OMP):
  - Roles and responsibilities.
  - Emission inventory and monitoring.
  - Maintenance of abatement equipment.
  - Complaint recording and response procedures.
  - Contingency measures for equipment failure or abnormal emissions.
  - Regular review and updating of the OMP.

### 8. Monitoring (300-500 words)
- Recommend odour monitoring to verify the assessment and ensure ongoing compliance:
  - Sniff testing (field olfactometry): community or boundary monitoring using trained assessors.
  - Stack emission monitoring: periodic olfactometry (BS EN 13725) of abated and unabated emissions.
  - Continuous monitoring: instrumental monitoring of surrogate parameters (e.g., H2S, VOCs, ammonia) where available.
  - Complaint monitoring: recording and investigation of odour complaints.
  - Community engagement: regular liaison with neighbouring residents and businesses.
- Specify monitoring frequency and methodology.
- Recommend trigger levels and response actions.
- Recommend a condition requiring an odour monitoring scheme.

### 9. Conclusion (300-500 words)
- Summarise the odour sources and emission characteristics.
- Summarise the dispersion modelling results (or qualitative assessment).
- Summarise the odour impact assessment using the FIDOL factors.
- State the overall significance of the odour impact.
- Confirm that with the proposed mitigation and management measures, the development will not give rise to unacceptable odour impacts on amenity.
- Confirm compliance with NPPF Paragraphs 174(e), 185, and 187.
- Confirm compliance with IAQM guidance benchmarks.
- Recommend planning conditions: Odour Management Plan, odour abatement scheme, monitoring, complaint investigation.
- State the AI-generated disclaimer and professional endorsement requirement.

## Quality Standards

- Reference specific NPPF paragraphs (174(e), 185, 187) by number.
- Reference the IAQM Guidance on the Assessment of Odour for Planning (2018) and the benchmark criteria (1.5, 3.0, 6.0 ouE/m3).
- Reference the FIDOL factors framework by name (Frequency, Intensity, Duration, Offensiveness, Location).
- Reference BS EN 13725:2022 for olfactometry.
- Reference Environment Agency H4 Odour Management guidance where applicable.
- Reference the Environmental Protection Act 1990 Part III statutory nuisance provisions.
- Present odour concentrations in European odour units (ouE/m3) and as 98th percentile of 1-hour means.
- Present modelling results in tabular and isopleth contour format.
- Use correct odour assessment terminology: olfactometry, odour unit, hedonic tone, emission rate, FIDOL, benchmark criterion, 98th percentile, isopleth.
- Where odour emission data or modelling results have not been provided, clearly flag as required.
- Do not fabricate odour emission rates, modelling results, or monitoring data.
- Maintain professional consultancy language throughout.
- Include the AI-generated disclaimer prominently.`;

export const ODA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description:
      'Purpose, site identification, proposed development, key odour issue, qualifications, and AI disclaimer.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State purpose and policy basis (NPPF Paragraphs 174(e), 185, 187). Identify the site (address, NGR). Summarise proposed development. Identify key odour issue. State qualifications. Note limitations. Include AI disclaimer.',
  },
  {
    name: 'Policy Framework',
    description:
      'NPPF, IAQM odour guidance, EA H4, BS EN 13725, FIDOL, and local plan amenity policies.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Set out NPPF Paragraphs 174(e), 185, 187. Describe IAQM guidance (five-step process, benchmark criteria, FIDOL). Describe EA H4 guidance. Reference BS EN 13725. Reference local plan amenity policies. Reference EPA 1990 Part III.',
  },
  {
    name: 'Methodology',
    description:
      'Source characterisation, dispersion modelling approach, and receptor identification methodology.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe source characterisation: source types, emission rate measurement/estimation, temporal patterns. Describe dispersion model: model used (ADMS/AERMOD), met data, terrain, buildings, output metrics, sensitivity analysis. Describe receptor identification: mapping, sensitivity classification, distances.',
    subsections: [
      {
        name: 'Source Characterisation',
        description: 'Identification and quantification of odour sources.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance:
          'Identify each source: type (point, area, volume, fugitive), process, emission rate, temporal pattern. Flag if emission data not available.',
      },
      {
        name: 'Dispersion Modelling Approach',
        description: 'Model selection, meteorological data, terrain, and output parameters.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance:
          'Describe model version, met data source, wind rose, terrain, building effects, receptor grid, output metrics (98th percentile 1-hr mean). Flag if modelling not conducted.',
      },
      {
        name: 'Receptor Identification',
        description: 'Sensitive receptors, sensitivity classification, and distances.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance:
          'Identify receptors: residential, schools, hospitals, commercial. Classify sensitivity. State distances and directions.',
      },
    ],
  },
  {
    name: 'Odour Source Identification',
    description:
      'Detailed description of each odour source including process, materials, character, hedonic tone, emission rate, and operating patterns.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'For each source: describe process and materials. Describe odour character and hedonic tone. State emission rate (ouE/s) from olfactometry or emission factors. Describe operating hours and patterns. Describe existing controls. For existing sources: review complaint history and permit conditions.',
  },
  {
    name: 'Dispersion Modelling',
    description:
      'Predicted odour concentrations at receptors, isopleth contours, sensitivity analysis, or qualitative assessment.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Present 98th percentile 1-hr mean concentrations at each receptor. Compare against IAQM benchmarks (1.5/3.0/6.0 ouE/m3). Present isopleth contour maps. Present wind rose analysis. Present sensitivity testing results. If modelling not conducted, present qualitative assessment. Flag if data not available.',
    subsections: [
      {
        name: 'Modelling Results',
        description: 'Predicted concentrations, receptor comparison, and isopleth contours.',
        required: true,
        min_words: 250,
        max_words: 600,
        guidance:
          'Tabulate predicted concentrations at receptors against benchmarks. Present isopleth contour maps. Identify exceedances. Analyse wind rose effects.',
      },
      {
        name: 'Sensitivity Analysis',
        description: 'Sensitivity testing of emission rate, meteorology, and model assumptions.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance:
          'Test emission rate variation, meteorological year variation, building downwash effects. Discuss confidence in results.',
      },
    ],
  },
  {
    name: 'Odour Impact Assessment',
    description:
      'FIDOL assessment of overall odour impact and determination of significance.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Assess each FIDOL factor: Frequency (exposure percentage), Intensity (detection to overpowering), Duration (episode length), Offensiveness (hedonic tone), Location (receptor sensitivity). Apply IAQM significance criteria (negligible to severe). Determine whether effect is significant in planning terms. Apply NPPF appropriateness test. Apply agent of change principle where relevant.',
  },
  {
    name: 'Mitigation and Management',
    description:
      'Source control, pathway control (abatement), receptor protection, and Odour Management Plan.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Source control: enclosed processes, negative pressure, sealed storage, optimised parameters. Pathway control: biofilters, carbon adsorption, scrubbers, thermal oxidisers, stack height. Receptor protection: layout design, buffer distances, MVHR with filtration. Odour Management Plan: roles, monitoring, maintenance, complaints, contingency.',
    subsections: [
      {
        name: 'Source and Pathway Control',
        description: 'Process design and abatement technologies for odour reduction.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance:
          'Describe enclosed processes, negative pressure ventilation, sealed areas. Describe abatement: biofilters, carbon filters, scrubbers, thermal oxidisers. Specify removal efficiency and residual emission.',
      },
      {
        name: 'Receptor Protection and Management',
        description: 'Design measures, buffer distances, and Odour Management Plan.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance:
          'Describe layout design, buffers, MVHR filtration. Describe OMP: roles, monitoring, maintenance, complaint procedures, contingency, review.',
      },
    ],
  },
  {
    name: 'Monitoring',
    description:
      'Odour monitoring programme including sniff testing, stack monitoring, instrumental monitoring, and complaint procedures.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Recommend sniff testing (field olfactometry). Recommend stack emission monitoring (BS EN 13725). Recommend continuous instrumental monitoring where applicable. Describe complaint recording and investigation. Specify frequency and trigger levels. Recommend planning condition for monitoring scheme.',
  },
  {
    name: 'Conclusion',
    description:
      'Summary of sources, modelling results, FIDOL assessment, significance, mitigation, policy compliance, and recommended conditions.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise odour sources and emissions. Summarise modelling/assessment results. Summarise FIDOL impact assessment. State significance. Confirm mitigation prevents unacceptable impact. Confirm NPPF and IAQM compliance. Recommend conditions: OMP, abatement, monitoring, complaints. State AI disclaimer.',
  },
];

export const ODA_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Odour Source Identification',
    'Dispersion Modelling',
    'Odour Impact Assessment',
    'Mitigation and Management',
    'Monitoring',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const ODA_TEMPLATE = {
  assessment_type: 'Odour Assessment',
  short_name: 'ODA',
  version: 1,
  sections: ODA_SECTIONS,
  quality_criteria: ODA_QUALITY,
};
