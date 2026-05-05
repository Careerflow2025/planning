import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Air Quality Assessment (AQA) -- required for developments that may affect air
 * quality or are located within or adjacent to an Air Quality Management Area
 * (AQMA), major developments generating significant traffic, developments
 * introducing new receptors into areas of poor air quality, or developments
 * involving significant demolition or construction.
 *
 * The AQA follows the IAQM/EPUK guidance methodology and assesses both
 * construction-phase dust emissions and operational-phase traffic-related
 * pollutant emissions (primarily NO2 and PM10/PM2.5).
 */

export const AQA_PROMPT = `You are preparing an Air Quality Assessment (AQA) to accompany a planning application submitted to a local planning authority in England. The AQA should read as though prepared by a competent air quality consultant (Member of the Institute of Air Quality Management or equivalent) with experience of the IAQM/EPUK guidance methodology.

## Document Purpose

An Air Quality Assessment is required to evaluate the air quality impacts of a proposed development and to demonstrate that:
1. The development will not cause any exceedance of national air quality objectives at existing sensitive receptors.
2. Where the development introduces new sensitive receptors (e.g., residential uses) into an area, future occupants will not be exposed to unacceptable levels of air pollution.
3. Construction-phase dust emissions will be adequately managed.
4. Appropriate mitigation measures are proposed to minimise air quality impacts.
5. The development accords with national and local air quality policy.

## Key Policy, Legislation, and Guidance References

### Air Quality Legislation
- **Environment Act 1995 (Part IV)**: Establishes the framework for Local Air Quality Management (LAQM). Requires local authorities to review and assess air quality against national objectives and to declare Air Quality Management Areas (AQMAs) where objectives are not being met.
- **Air Quality Standards Regulations 2010 (as amended 2016)**: Transpose the EU Ambient Air Quality Directive (2008/50/EC) into domestic law. Set legally binding limit values for pollutants including NO2 (annual mean 40 ug/m3, 1-hour mean 200 ug/m3 not to be exceeded more than 18 times per year) and PM10 (annual mean 40 ug/m3, 24-hour mean 50 ug/m3 not to be exceeded more than 35 times per year).
- **Air Quality (England) Regulations 2000 and (Amendment) Regulations 2002**: Set the national air quality objectives.
- **Clean Air Strategy 2019**: Government strategy to reduce emissions and improve air quality. Sets an ambition to halve the number of people living in areas exceeding WHO guideline levels for PM2.5 by 2025.
- **Environment Act 2021**: Sets a legally binding target for PM2.5 (annual mean concentration of 10 ug/m3 by 2040) and a population exposure reduction target.
- **Environmental Targets (Fine Particulate Matter) (England) Regulations 2023**: Statutory PM2.5 targets.

### National Air Quality Objectives (England)
| Pollutant | Objective | Averaging Period | Notes |
|-----------|-----------|------------------|-------|
| NO2 | 40 ug/m3 | Annual mean | |
| NO2 | 200 ug/m3 | 1-hour mean | Not to be exceeded >18 times/year |
| PM10 | 40 ug/m3 | Annual mean | |
| PM10 | 50 ug/m3 | 24-hour mean | Not to be exceeded >35 times/year |
| PM2.5 | 20 ug/m3 | Annual mean | Target (not objective); 10 ug/m3 by 2040 (Environment Act 2021) |

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174(e)**: Planning policies and decisions should contribute to and enhance the natural and local environment by preventing new and existing development from contributing to, being put at unacceptable risk from, or being adversely affected by, unacceptable levels of soil, air, water, or noise pollution or land instability.
- **Paragraph 186**: Planning policies and decisions should sustain and contribute towards compliance with relevant limit values or national objectives for pollutants, taking into account the presence of Air Quality Management Areas and Clean Air Zones, and the cumulative impacts from individual sites in local areas. Opportunities to improve air quality or mitigate impacts should be identified, such as through traffic and travel management, and green infrastructure provision and enhancement. Planning decisions should ensure that any new development in Air Quality Management Areas and Clean Air Zones is consistent with the local air quality action plan.
- **Paragraph 187**: Planning policies and decisions should ensure that new development is appropriate for its location taking into account the likely effects (including cumulative effects) of pollution on health, living conditions and the natural environment, as well as the potential sensitivity of the site or the wider area to impacts that could arise from the development.

### Planning Practice Guidance: Air Quality
- Guidance on when an air quality assessment is required.
- Considerations for plan-making and decision-taking.
- Mitigation measures for air quality impacts.

### IAQM/EPUK Guidance
- **Land-Use Planning & Development Control: Planning for Air Quality (IAQM/EPUK, 2017)**: The primary industry guidance for air quality assessment in the planning context. Sets out:
  - Screening criteria for when a detailed assessment is required.
  - Methodology for assessing the significance of air quality impacts.
  - Construction dust assessment methodology.
  - Descriptors for impact magnitude and significance.
- **Guidance on the Assessment of Dust from Demolition and Construction (IAQM, 2023 v2.1)**: Step-by-step methodology for assessing dust risk during construction and demolition.
- **A Guide to the Assessment of Air Quality Impacts on Designated Nature Conservation Sites (IAQM, 2020)**: Where ecological receptors are relevant.

### Other Key References
- **LAQM Technical Guidance TG(22)**: Defra guidance for local authorities on LAQM processes, monitoring, and modelling.
- **Local Authority Air Quality Annual Status Reports (ASR)**: Source of local monitoring data and AQMA information.
- **Defra Background Maps**: Mapped background concentrations for all pollutants on a 1km grid (updated annually).
- **DMRB LA 105 Air Quality**: Highways England methodology for air quality assessment (relevant for developments affecting the strategic road network).
- **Emissions Factor Toolkit (EFT)**: Defra tool for calculating road traffic emissions.
- **ADMS-Roads dispersion model**: Industry-standard model for roadside air quality assessment (or equivalent: AERMOD, CAL3QHCR).
- **WHO Global Air Quality Guidelines (2021)**: Updated guideline values (NO2: 10 ug/m3 annual mean; PM2.5: 5 ug/m3 annual mean; PM10: 15 ug/m3 annual mean).

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the Air Quality Assessment and its policy basis (NPPF Paragraphs 174(e) and 186).
- Identify the site by full postal address and grid reference.
- Summarise the proposed development.
- State whether the site is within or adjacent to an AQMA.
- Identify the key air quality issues to be assessed: construction dust, operational traffic emissions, and exposure of new receptors.
- State the qualifications of the author (or "[PREPARED BY A COMPETENT AIR QUALITY PROFESSIONAL]").
- Outline the document structure.

### 2. Policy and Legislative Framework (500-1000 words)
- Set out the air quality legislation: Environment Act 1995, Air Quality Standards Regulations 2010, Clean Air Strategy 2019, Environment Act 2021.
- State the national air quality objectives in a table (NO2, PM10, PM2.5).
- Reference the WHO 2021 guideline values and note that these are more stringent than UK objectives.
- Set out the relevant NPPF paragraphs (174(e), 186, 187).
- Reference the IAQM/EPUK 2017 guidance as the assessment methodology.
- Identify the relevant local plan air quality policies and quote the key requirements.
- Note any local AQMA designations, the pollutants and sources for which the AQMA was declared, and the Air Quality Action Plan (AQAP) objectives.
- Reference any local SPD or guidance on air quality and development.

### 3. Baseline Conditions (600-1200 words)
#### 3.1 Local Air Quality Management
- State whether the site is within an AQMA. If so, identify the AQMA name, pollutant(s), source(s), and date of declaration.
- Summarise the findings of the most recent Annual Status Report (ASR) for the relevant local authority.
- Describe any AQMAs within 500m of the site.

#### 3.2 Local Authority Monitoring Data
- Identify the nearest local authority monitoring stations (automatic and diffusion tube).
- Present recent monitoring data (latest 3-5 years) for NO2, PM10, and PM2.5 where available.
- State whether any monitored exceedances of the national objectives have been recorded.
- If monitoring data is not available, note "[LOCAL AIR QUALITY MONITORING DATA TO BE OBTAINED FROM THE LOCAL AUTHORITY ASR]".

#### 3.3 Defra Background Concentrations
- State the Defra background map concentrations for NO2, PM10, and PM2.5 for the 1km grid squares covering the site (reference the grid square IDs and the year of the maps).
- Note the projected concentrations for the assessment year (year of opening/occupation).
- Compare background concentrations with the national objectives.

#### 3.4 Sensitive Receptors
- Identify existing sensitive receptors in the vicinity of the site: residential properties, schools, hospitals, care homes, nurseries.
- Identify locations where new receptors will be introduced by the proposed development.
- Present receptors in a table with receptor ID, description, location, and grid reference.

### 4. Assessment Methodology (500-1000 words)
#### 4.1 Construction Phase Methodology
- Reference the IAQM Guidance on the Assessment of Dust from Demolition and Construction (2023, v2.1).
- Describe the step-by-step methodology:
  Step 1: Screen the need for a detailed assessment (based on distance to receptors and activity types).
  Step 2: Assess the risk of dust impacts from demolition, earthworks, construction, and trackout.
  Step 3: Determine the site-specific mitigation for each risk category (low, medium, high).
  Step 4: Define the significance of effects after mitigation.
- State the dust emission magnitude classification criteria for each activity (based on building volume, site area, material quantity, and number of HDV movements).

#### 4.2 Operational Phase Methodology
- Reference the IAQM/EPUK 2017 guidance.
- Apply the screening criteria to determine whether a detailed dispersion modelling assessment is required:
  - Change in AADT (LDV and HDV) on local roads.
  - Number of parking spaces.
  - Proximity to an AQMA.
  - Change in traffic flows on roads within or adjacent to an AQMA.
- If screening indicates a detailed assessment is required:
  - Describe the dispersion model used (e.g., ADMS-Roads) and the model version.
  - Describe the meteorological data used (source, years, representativeness).
  - Describe the emissions data: Defra Emissions Factor Toolkit version, fleet composition, vehicle speeds.
  - Describe the model verification process: comparison of modelled and monitored concentrations at monitoring locations, application of adjustment factors.
  - State the assessment year and projected baseline.
  - Reference the IAQM/EPUK impact descriptors: negligible, slight, moderate, substantial.
- If screening indicates a detailed assessment is not required, present the screening results and conclude proportionately.
- If traffic data is not available, note "[TRAFFIC DATA REQUIRED FROM TRANSPORT ASSESSMENT/STATEMENT]" and describe the methodology that would be applied.

#### 4.3 Significance Criteria
- Present the IAQM/EPUK significance criteria:
  - Impact magnitude: based on the percentage change in pollutant concentration relative to the air quality objective.
  - Impact descriptor matrix: combining the magnitude of change with the absolute pollutant concentration (as a percentage of the objective value).
  - Overall significance: professional judgement considering the number and sensitivity of receptors affected, the magnitude and spatial extent of impacts, and existing baseline conditions.

### 5. Construction Phase Assessment (600-1200 words)
#### 5.1 Demolition
- State whether demolition is required.
- If yes, classify the dust emission magnitude (small, medium, large) based on building volume and materials.
- Assess the sensitivity of the area (low, medium, high) based on receptor proximity and numbers.
- Determine the risk category for dust soiling and human health impacts.

#### 5.2 Earthworks
- Classify the dust emission magnitude based on site area and soil type.
- Assess the sensitivity of the area.
- Determine the risk category.

#### 5.3 Construction
- Classify the dust emission magnitude based on building volume and materials.
- Assess the sensitivity of the area.
- Determine the risk category.

#### 5.4 Trackout
- Classify the dust emission magnitude based on the number of HDV movements per day.
- Assess the sensitivity of the area.
- Determine the risk category.

#### 5.5 Unmitigated Risk Summary
- Present the unmitigated dust risk in a summary table for each activity and impact pathway (dust soiling, human health PM10, ecological).

#### 5.6 Recommended Mitigation Measures
- Set out the site-specific mitigation measures for each risk category, following the IAQM guidance tables.
- Include as a minimum: dust management plan, site boundary hoarding, wheel washing, water suppression, covered loads, on-site speed limits, monitoring.
- Conclude that with the recommended mitigation measures in place, the residual construction dust effects will be "not significant" (per IAQM guidance).

### 6. Operational Phase Assessment (600-1500 words)
#### 6.1 Traffic Data
- State the traffic data used: AADT, percentage HDVs, vehicle speeds, for each modelled road link.
- State the source of traffic data: Transport Assessment, Transport Statement, or "[TRAFFIC DATA TO BE PROVIDED]".
- Compare 'without development' and 'with development' traffic flows.

#### 6.2 Modelling Results -- Existing Receptors
- Present predicted pollutant concentrations at existing receptors for the 'without development' and 'with development' scenarios.
- Present the change in concentration at each receptor.
- Apply the IAQM/EPUK impact descriptors.
- Present results in a table: Receptor ID, 'without development' concentration, 'with development' concentration, change, percentage of objective, impact descriptor.

#### 6.3 Modelling Results -- Proposed Receptors (Exposure Assessment)
- Present predicted pollutant concentrations at the locations of proposed new sensitive receptors.
- Compare with the national air quality objectives and WHO guideline values.
- Assess whether future occupants will be exposed to acceptable air quality.

#### 6.4 Significance of Operational Effects
- Apply professional judgement to determine the overall significance of operational air quality effects, considering:
  - Number and sensitivity of receptors experiencing adverse impacts.
  - Whether any receptor experiences a worsening to above the objective.
  - Spatial extent of impacts.
  - Cumulative impacts.
- State whether the effects are "not significant" or "significant" in the context of the IAQM/EPUK guidance.

### 7. Mitigation Measures (400-800 words)
#### 7.1 Construction Phase Mitigation
- Summarise the dust mitigation measures (cross-reference the construction phase assessment).
- Recommend a Construction Environmental Management Plan (CEMP) or Dust Management Plan (DMP) to be secured by planning condition.
- Recommend dust monitoring during construction (where high-risk activities are identified near sensitive receptors).

#### 7.2 Operational Phase Mitigation
- Where operational impacts are identified, set out mitigation measures:
  - Travel Plan to reduce vehicle trips and promote sustainable modes.
  - Electric vehicle charging provision.
  - Low or zero-emission heating systems (no gas boilers in Clean Air Zones).
  - Green infrastructure: trees and hedgerows for pollutant filtration (noting that this is a supplementary measure, not a standalone solution).
  - Building design: locate habitable rooms and air intakes away from pollution sources; mechanical ventilation with filtration for facades facing busy roads.
  - Non-opening windows on facades facing heavily trafficked roads (with alternative ventilation).
- Where the site is within an AQMA, describe how the development is consistent with the Air Quality Action Plan.

#### 7.3 Emissions Mitigation (Type 1-3)
- Reference the IAQM/EPUK guidance on emission mitigation:
  - Type 1: Measures to reduce trip generation and promote sustainable transport.
  - Type 2: Measures to reduce emissions from buildings (energy-efficient design, renewable energy, low-emission heating).
  - Type 3: Measures to reduce exposure (building design, ventilation, green infrastructure).

### 8. Conclusion (300-600 words)
- Summarise the baseline air quality conditions and identify any existing exceedances.
- Summarise the construction phase dust risk assessment and confirm that with mitigation, effects are not significant.
- Summarise the operational phase assessment: impacts on existing receptors and exposure at proposed receptors.
- Confirm whether the air quality objectives are met at all receptor locations with the development in place.
- Confirm that the development will not cause new exceedances or materially worsen existing exceedances.
- Confirm compliance with NPPF Paragraphs 174(e), 186, and 187.
- Confirm consistency with the local AQAP (where the site is within or near an AQMA).
- List recommended planning conditions: CEMP/DMP, Travel Plan, EV charging, ventilation strategy.
- Request that the Environmental Health Officer raise no objection.

## Quality Standards

- Reference specific NPPF paragraphs (174(e), 186, 187) by number.
- Reference the correct national air quality objectives with units (ug/m3) and averaging periods.
- Reference the IAQM/EPUK 2017 guidance and the IAQM 2023 dust guidance by their full titles.
- Reference the Environment Act 2021 PM2.5 targets.
- Reference the Defra background maps and Emissions Factor Toolkit.
- Use correct air quality terminology: AQMA, AQAP, ASR, AQO, AADT, HDV, LDV, NOx, NO2, PM10, PM2.5, ug/m3, ADMS.
- Apply the IAQM/EPUK impact descriptors correctly (negligible, slight, moderate, substantial).
- Clearly distinguish between construction-phase and operational-phase impacts.
- Present data in tables where appropriate (monitoring data, receptor locations, modelling results).
- Where monitoring data or traffic data has not been provided, clearly flag as required.
- Do not fabricate monitoring data, traffic data, or dispersion modelling results.`;

export const AQA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, AQMA status, key issues, and document structure.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the AQA purpose and policy basis (NPPF Paragraphs 174(e), 186). Identify the site by address and grid reference. Summarise the proposed development. State AQMA status. Identify key air quality issues. State author qualifications. Outline the document structure.',
  },
  {
    name: 'Policy and Legislative Framework',
    description: 'Air quality legislation, national objectives, NPPF policy, IAQM guidance, and local policies.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Set out the Environment Act 1995, Air Quality Standards Regulations 2010, Clean Air Strategy 2019, Environment Act 2021. Present national air quality objectives in a table. Reference WHO 2021 guidelines. Set out NPPF Paragraphs 174(e), 186, 187. Reference IAQM/EPUK 2017 guidance. Identify local plan policies and any AQMA designations and AQAPs.',
  },
  {
    name: 'Baseline Conditions',
    description: 'AQMA status, local monitoring data, Defra background concentrations, and sensitive receptors.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'State AQMA status and pollutant sources. Summarise the latest ASR findings. Present monitoring data (3-5 years) for NO2, PM10, PM2.5. State Defra background concentrations. Identify existing and proposed sensitive receptors with grid references.',
    subsections: [
      {
        name: 'Local Air Quality Management',
        description: 'AQMA status, pollutants, and ASR findings.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'State AQMA status, pollutants, sources, date of declaration. Summarise the latest ASR.',
      },
      {
        name: 'Local Authority Monitoring Data',
        description: 'Automatic and diffusion tube monitoring data for key pollutants.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Identify nearest monitoring stations. Present 3-5 years of NO2, PM10, PM2.5 data. Note any exceedances.',
      },
      {
        name: 'Defra Background Concentrations',
        description: 'Background mapped concentrations for the site location.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'State Defra background map concentrations for NO2, PM10, PM2.5. Note projected assessment year concentrations.',
      },
      {
        name: 'Sensitive Receptors',
        description: 'Identification of existing and proposed sensitive receptors.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'List existing receptors (residential, schools, hospitals). Identify proposed new receptor locations. Present in a table.',
      },
    ],
  },
  {
    name: 'Assessment Methodology',
    description: 'Construction dust assessment and operational dispersion modelling methodology.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe the IAQM 2023 construction dust methodology (Steps 1-4). Describe the IAQM/EPUK 2017 operational methodology: screening criteria, dispersion model, meteorological data, emissions data, model verification. Present the significance criteria and impact descriptor matrix. If detailed modelling is not triggered, present screening results.',
    subsections: [
      {
        name: 'Construction Phase Methodology',
        description: 'IAQM dust assessment step-by-step methodology.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Reference IAQM 2023 guidance. Describe Steps 1-4: screening, risk assessment, mitigation, significance.',
      },
      {
        name: 'Operational Phase Methodology',
        description: 'IAQM/EPUK screening and dispersion modelling methodology.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance: 'Apply IAQM/EPUK screening criteria. Describe dispersion model, meteorological data, emissions, verification process.',
      },
      {
        name: 'Significance Criteria',
        description: 'Impact magnitude and significance descriptors.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Present the IAQM/EPUK impact descriptor matrix: magnitude of change vs percentage of objective.',
      },
    ],
  },
  {
    name: 'Construction Phase Assessment',
    description: 'Dust risk assessment for demolition, earthworks, construction, and trackout activities.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Assess each activity (demolition, earthworks, construction, trackout) for dust emission magnitude and receptor sensitivity. Determine unmitigated risk category for dust soiling, human health, and ecological impacts. Present in a summary table. Set out site-specific mitigation measures from IAQM guidance. Conclude that residual effects are not significant.',
    subsections: [
      {
        name: 'Demolition',
        description: 'Dust emission assessment from demolition activities.',
        required: false,
        min_words: 75,
        max_words: 200,
        guidance: 'Classify dust emission magnitude and area sensitivity. Determine risk category. State if no demolition.',
      },
      {
        name: 'Earthworks',
        description: 'Dust emission assessment from earthworks.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Classify dust emission magnitude based on site area and soil type. Assess area sensitivity.',
      },
      {
        name: 'Construction',
        description: 'Dust emission assessment from construction activities.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Classify dust emission magnitude based on building volume and materials. Assess area sensitivity.',
      },
      {
        name: 'Trackout',
        description: 'Dust emission assessment from vehicle movements.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Classify dust emission magnitude based on HDV movements per day. Assess area sensitivity.',
      },
      {
        name: 'Recommended Mitigation Measures',
        description: 'Site-specific dust mitigation measures following IAQM guidance.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Set out mitigation for each risk category. Include DMP, hoarding, wheel washing, water suppression, monitoring.',
      },
    ],
  },
  {
    name: 'Operational Phase Assessment',
    description: 'Assessment of traffic-related air quality impacts on existing and proposed receptors.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Present traffic data used. Present modelling results at existing receptors (with and without development scenarios). Apply IAQM/EPUK impact descriptors. Present exposure assessment at proposed receptor locations. Determine overall significance. If screening shows detailed modelling is not required, present screening results and conclude proportionately.',
    subsections: [
      {
        name: 'Traffic Data',
        description: 'Traffic flows used in the assessment.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'State AADT, HDV percentage, vehicle speeds for each road link. Compare with and without development flows.',
      },
      {
        name: 'Modelling Results -- Existing Receptors',
        description: 'Predicted concentrations and impact descriptors at existing receptors.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Present results in a table: receptor, with/without development concentrations, change, percentage of objective, descriptor.',
      },
      {
        name: 'Modelling Results -- Proposed Receptors',
        description: 'Predicted concentrations at proposed new receptor locations.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Present predicted concentrations. Compare with objectives and WHO guidelines. Assess acceptability for future occupants.',
      },
      {
        name: 'Significance of Operational Effects',
        description: 'Overall significance determination using professional judgement.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Apply professional judgement considering receptor numbers, magnitude, extent. Conclude significant or not significant.',
      },
    ],
  },
  {
    name: 'Mitigation Measures',
    description: 'Construction and operational phase mitigation including emission reduction and exposure management.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise construction dust mitigation and recommend CEMP/DMP condition. Set out operational mitigation: Travel Plan, EV charging, low-emission heating, green infrastructure, building design (ventilation, room layout). Reference IAQM/EPUK Type 1-3 emission mitigation. Describe consistency with AQAP where in an AQMA.',
    subsections: [
      {
        name: 'Construction Phase Mitigation',
        description: 'Dust management plan and monitoring requirements.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Summarise dust measures. Recommend CEMP/DMP planning condition. Recommend monitoring where high risk.',
      },
      {
        name: 'Operational Phase Mitigation',
        description: 'Transport, building design, and emission reduction measures.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Set out Travel Plan, EV charging, low-emission heating, green infrastructure, building design measures. Reference AQAP consistency.',
      },
      {
        name: 'Emission Mitigation Classification',
        description: 'IAQM/EPUK Type 1-3 emission mitigation measures.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Reference Type 1 (trip reduction), Type 2 (building emissions), Type 3 (exposure reduction) measures.',
      },
    ],
  },
  {
    name: 'Conclusion',
    description: 'Summary of baseline, construction and operational assessments, policy compliance, and recommendations.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise baseline conditions and any exceedances. Summarise construction dust assessment (not significant with mitigation). Summarise operational assessment (impacts and significance). Confirm objectives are met. Confirm no new exceedances. Confirm NPPF Paragraphs 174(e), 186, 187 compliance. Confirm AQAP consistency. List recommended conditions. Request no objection from Environmental Health.',
  },
];

export const AQA_QUALITY: QualityCriteria = {
  min_policy_refs: 7,
  required_sections: [
    'Introduction',
    'Policy and Legislative Framework',
    'Baseline Conditions',
    'Assessment Methodology',
    'Construction Phase Assessment',
    'Operational Phase Assessment',
    'Mitigation Measures',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const AQA_TEMPLATE = {
  assessment_type: 'Air Quality Assessment',
  short_name: 'AQA',
  version: 1,
  sections: AQA_SECTIONS,
  quality_criteria: AQA_QUALITY,
};
