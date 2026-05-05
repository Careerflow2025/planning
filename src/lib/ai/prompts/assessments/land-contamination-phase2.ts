import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Land Contamination Phase 2 Intrusive Investigation -- required where a Phase 1
 * Desk Study has identified moderate or higher risks from potential contamination
 * and recommended further investigation to quantify those risks through sampling,
 * chemical testing, and a Generic Quantitative Risk Assessment (GQRA).
 *
 * AI Difficulty: Hard (30-60 pages). This document requires actual intrusive site
 * investigation data including soil, groundwater, and gas monitoring results from
 * field sampling and laboratory analysis.
 *
 * DISCLAIMER: This document is AI-generated and constitutes a draft framework only.
 * It MUST be reviewed, verified, and endorsed by a suitably qualified
 * geo-environmental professional (SiLC, CGeol, or equivalent) before submission
 * to the local planning authority. Actual intrusive investigation, sampling,
 * laboratory analysis, and risk assessment must be conducted by competent persons.
 */

export const LC2_PROMPT = `You are preparing a Phase 2 Land Contamination Intrusive Investigation Report (also referred to as a Generic Quantitative Risk Assessment or Geo-Environmental Assessment) to accompany a planning application submitted to a local planning authority in England. The Phase 2 report presents the findings of intrusive ground investigation and quantitative risk assessment to determine whether the site is suitable for the proposed use or whether remediation is required.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft framework only. It MUST be reviewed, verified, and endorsed by a suitably qualified geo-environmental professional (SiLC registered, Chartered Geologist, Chartered Scientist, or equivalent competent person as required by NPPF Paragraph 184) before submission to the local planning authority. Intrusive site investigation, soil/groundwater/gas sampling, laboratory analysis, and risk assessment require field work by competent professionals. The AI cannot conduct site investigations and no analytical data should be fabricated.

## Document Purpose

The Phase 2 Intrusive Investigation Report must:
1. Present the findings of the intrusive site investigation: ground conditions encountered, groundwater levels, and ground gas monitoring results.
2. Present the results of chemical testing of soil, groundwater, and leachate samples.
3. Compare analytical results against appropriate Generic Assessment Criteria (GAC) for the proposed end use.
4. Update the Conceptual Site Model (CSM) based on the investigation findings.
5. Provide a Generic Quantitative Risk Assessment (GQRA) for human health, controlled waters, and ground gas.
6. Determine whether the site is suitable for the proposed use without remediation, or whether remediation and/or further investigation is required.
7. Where remediation is required, provide preliminary recommendations for a Remediation Strategy.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 183**: Planning policies and decisions should ensure that a site is suitable for its proposed use taking account of ground conditions and any risks arising from land instability and contamination, including risks arising from natural hazards or former activities such as mining, and any proposals for mitigation including land remediation.
- **Paragraph 184**: Where a site is affected by contamination or land stability issues, responsibility for securing a safe development rests with the developer and/or landowner. At least an adequate site investigation and assessment should be prepared by a competent person.
- **Paragraph 185**: New development should be appropriate for its location taking into account the likely effects of pollution on health, living conditions, and the natural environment.

### Land Contamination Risk Management (LCRM) -- Environment Agency (2020, updated 2023)
The LCRM guidance sets out a three-stage risk management framework:
1. **Stage 1: Risk Assessment**
   - Preliminary Risk Assessment (PRA) / Phase 1 Desk Study.
   - Generic Quantitative Risk Assessment (GQRA): Comparison of site investigation data against Generic Assessment Criteria.
   - Detailed Quantitative Risk Assessment (DQRA): Site-specific risk assessment using detailed modelling (where GQRA is insufficient to characterise risk).
2. **Stage 2: Options Appraisal**: Evaluation of remediation options.
3. **Stage 3: Remediation and Verification**: Implementation and verification of remediation works.

### BS 10175:2011+A2:2017 Investigation of Potentially Contaminated Sites -- Code of Practice
- Provides methodology for the design and execution of intrusive site investigations.
- Key requirements:
  - Investigation design based on the Conceptual Site Model from the Phase 1 Desk Study.
  - Appropriate investigation techniques: trial pits, window samples, cable percussion boreholes, rotary boreholes.
  - Sampling strategy: targeted and non-targeted (systematic or random) sampling.
  - Sampling depths: to cover the full profile of contamination and to reach natural ground/competent strata.
  - Sample handling, storage, and chain of custody.
  - Quality assurance/quality control (QA/QC): field duplicates, trip blanks, laboratory accreditation (MCERTS, UKAS).

### Generic Assessment Criteria (GAC)
- **DEFRA Category 4 Screening Levels (C4SLs)**: Conservative screening criteria below which land contamination is unlikely to pose an unacceptable risk. Currently available for arsenic, benzene, benzo[a]pyrene, cadmium, chromium (VI), lead, ethylbenzene, naphthalene, toluene, and xylene. Published for residential with and without homegrown produce.
- **LQM/CIEH Suitable 4 Use Levels (S4ULs)**: Generic Assessment Criteria derived using CLEA UK methodology for a wider range of contaminants. Published for residential, allotments, and commercial land uses (3rd Edition, 2015).
- **Environment Agency Soil Guideline Values (SGVs)**: Legacy GAC, now largely superseded by C4SLs and S4ULs.
- **CL:AIRE/CIEH GAC Spreadsheets**: Compilation of available GAC from multiple sources.
- Note: GAC are land-use specific. For residential end use, the most conservative criteria (residential with homegrown produce) are typically applied unless site-specific justification is provided.

### Groundwater Risk Assessment
- **Environment Agency Remedial Targets Methodology (RTM)**: Methodology for deriving site-specific groundwater remediation targets.
- **ConSim (Contamination Impact on Groundwater Simulation)**: Environment Agency approved tool for Tier 2 groundwater risk assessment.
- **EA Groundwater Protection Position Statements**: Constraints on activities within Source Protection Zones.
- **Water Quality Standards**: Environmental Quality Standards (EQS) under the Water Framework Directive, Drinking Water Standards (Water Supply (Water Quality) Regulations 2016).

### Ground Gas Risk Assessment
- **CIRIA C665 (2007)**: Assessing risks posed by hazardous ground gases to buildings. Superseded in part by BS 8576.
- **BS 8576:2013**: Guidance on investigations for ground gas. Minimum 6 monitoring rounds over a minimum of 3 months, including at least one visit during falling/low barometric pressure.
- **BS 8485:2015+A1:2019**: Code of practice for the design of protective measures for methane and carbon dioxide in ground gas from beneath buildings. Defines Gas Screening Values (GSV) and the traffic light system (Green, Amber 1, Amber 2, Red) for gas protection measures.
- **NHBC/RSK/Environment Agency guidance (2007)**: Guidance on evaluation of development proposals on sites where methane and carbon dioxide are present.
- **Wilson & Card (1999)**: Classification of characteristic gas regimes (CS1-CS5).

### Other Key References
- **Part 2A of the Environmental Protection Act 1990**: The contaminated land regime.
- **BS 5930:2015+A1:2020**: Code of practice for ground investigations.
- **CL:AIRE Definition of Waste: Development Industry Code of Practice (2011)**: For Materials Management Plans (MMPs) for sustainable reuse of excavated materials.
- **CIRIA C552 (2001)**: Contaminated land risk assessment -- A guide to good practice.
- **CIRIA C733 (2014)**: Asbestos in soil and made ground -- a guide to understanding and managing risks.
- **HSG 248 (2006)**: Asbestos: The analysts' guide for sampling, analysis and clearance procedures.
- **EA guidance on piling and penetrative ground improvement methods on contaminated land (NC/99/73)**: Constraints on piling through contaminated ground.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Phase 2 Intrusive Investigation Report and the policy context (NPPF Paragraphs 183-184).
- Identify the site: postal address, National Grid Reference, site area.
- Describe the proposed development and proposed end use.
- Summarise the Phase 1 Desk Study findings that triggered the Phase 2 investigation (key risks identified in the CSM).
- State the objectives of the Phase 2 investigation:
  - To determine the ground conditions beneath the site.
  - To obtain soil, groundwater, and gas samples for chemical testing.
  - To compare analytical results against Generic Assessment Criteria.
  - To update the Conceptual Site Model.
  - To provide a Generic Quantitative Risk Assessment.
  - To determine whether remediation is required.
- State the qualifications of the author and the competent person requirement (NPPF Paragraph 184). Note "[PREPARED BY A SUITABLY QUALIFIED GEO-ENVIRONMENTAL PROFESSIONAL]" for AI-generated drafts.
- Include the AI-generated disclaimer.

### 2. Policy Framework (300-500 words)
- Summarise NPPF Paragraphs 183-185.
- Summarise the LCRM framework and the position of the GQRA within Stage 1.
- Reference BS 10175 and BS 5930 for investigation methodology.
- Reference the Generic Assessment Criteria used (C4SLs, S4ULs, other GAC).
- Reference the ground gas assessment framework (BS 8485, BS 8576, CIRIA C665).
- Reference any local authority contaminated land policies or supplementary guidance.

### 3. Phase 1 Findings Summary (300-600 words)
- Summarise the key findings of the Phase 1 Desk Study:
  - Environmental setting: geology, hydrogeology, hydrology, sensitive receptors.
  - Site history: key potentially contaminative uses identified.
  - Conceptual Site Model: potential sources, pathways, and receptors.
  - Preliminary risk assessment conclusions: which source-pathway-receptor linkages were assessed as moderate or higher risk.
  - Recommendations from the Phase 1 for Phase 2 investigation scope.
- Cross-reference the Phase 1 report.
- If the Phase 1 has not been provided by the user, flag: "[PHASE 1 DESK STUDY FINDINGS TO BE SUMMARISED]".

### 4. Investigation Rationale (300-600 words)
- Explain the rationale for the investigation design:
  - How the investigation targets the contaminant sources, pathways, and receptors identified in the Phase 1 CSM.
  - The spatial coverage of investigation points across the site.
  - The depths of investigation relative to the expected ground profile and contamination.
  - The sampling strategy: targeted (over identified potential sources) and non-targeted (systematic grid or random to characterise general site conditions).
  - The chemical testing suite selected (based on the contaminants of concern identified in the Phase 1).
- Reference BS 10175 for investigation design principles.

### 5. Investigation Methodology (500-1000 words)
- Describe the investigation methodology:
  - **Investigation points**: Number, type (trial pits, window samples, cable percussion boreholes, rotary boreholes), and locations (referenced to a plan).
  - **Depths**: Target depths for each investigation type.
  - **Logging**: Description of strata encountered following BS 5930 and BS EN ISO 14688/14689.
  - **Soil sampling**: Depths sampled, sample containers, preservation requirements, chain of custody.
  - **Groundwater monitoring**: Installation of monitoring wells (well construction details: diameter, screen length, bentonite seal, headworks). Groundwater level monitoring. Groundwater purging and sampling methodology (low-flow or standard purge).
  - **Ground gas monitoring**: Installation of gas standpipes (standpipe construction: diameter, response zone, bentonite seal). Gas monitoring methodology: instrument (GA5000 or equivalent), parameters measured (methane, carbon dioxide, oxygen, hydrogen sulphide, flow rate, atmospheric pressure). Minimum 6 rounds over minimum 3 months per BS 8576. At least one visit during falling/low barometric pressure.
  - **Laboratory analysis**: MCERTS/UKAS accredited laboratory. Analytical suite: metals (arsenic, cadmium, chromium, copper, lead, mercury, nickel, selenium, zinc), PAHs (EPA 16), TPH (CWG), BTEX, VOCs, SVOCs, asbestos, pH, sulphate, organic matter, speciated PAH, phenols, cyanide, PCBs -- as appropriate to the contaminants of concern.
  - **QA/QC**: Field duplicates (minimum 1 in 10), trip blanks, laboratory QA (RPD, spike recovery, blanks).
  - **Geotechnical testing** (if combined investigation): moisture content, Atterberg limits, particle size distribution, compaction, CBR, soluble sulphate, BRE SD1 concrete classification.
- If investigation data has not been provided, flag: "[INVESTIGATION DATA TO BE PROVIDED BY GEO-ENVIRONMENTAL CONSULTANT]".

### 6. Ground Conditions (400-800 words)
- Present the ground conditions encountered:
  - **Made ground**: Thickness, composition (granular fill, cohesive fill, ash, rubite, demolition rubble, etc.), odours, staining, inclusions (metal, wood, plastic, asbestos fragments), visual/olfactory evidence of contamination.
  - **Superficial deposits**: Type, thickness, description (e.g., alluvium, river terrace deposits, glacial till).
  - **Bedrock**: Formation encountered, depth, description.
  - **Groundwater**: Depth to groundwater in each monitoring well, date of measurement, seasonal variation. Groundwater flow direction (from contour mapping).
- Present a summary table of ground conditions and a geological cross-section (reference appendix).
- Describe any unexpected ground conditions encountered (e.g., greater thickness of made ground, underground tanks, voids, obstructions).

### 7. Chemical Testing Results (600-1200 words)
- Present the chemical testing results:
  - **Soil results**: Tabulate results for each sample (location, depth, analyte, concentration, unit) and compare against the selected GAC for the proposed end use. Highlight exceedances of GAC.
  - **Groundwater results**: Tabulate results for each monitoring well and compare against Drinking Water Standards (DWS) or Environmental Quality Standards (EQS) as appropriate.
  - **Leachate results** (if leachate testing conducted): tabulate and compare against relevant criteria.
  - **Asbestos**: Results of asbestos screening (fibre type, quantification, presence in soils).
- Present statistical summary: minimum, maximum, mean, 95th percentile upper confidence limit (95% UCL) for key contaminants.
- Highlight all exceedances of GAC and identify the spatial distribution of contamination (hotspots, widespread, localised).
- If analytical data has not been provided, flag: "[LABORATORY ANALYTICAL RESULTS TO BE INSERTED]".

### 8. Generic Quantitative Risk Assessment (GQRA) (600-1200 words)
#### 8.1 Human Health Risk Assessment
- Compare soil analytical results against the appropriate GAC for the proposed end use:
  - **Residential with homegrown produce**: C4SLs and/or S4ULs for residential with plant uptake.
  - **Residential without homegrown produce**: C4SLs and/or S4ULs for residential without plant uptake.
  - **Commercial/industrial**: S4ULs for commercial land use.
  - **Public open space/allotments**: Allotment S4ULs.
- Assess whether exceedances represent an unacceptable risk to human health receptors:
  - Consider the magnitude and frequency of exceedances.
  - Consider the location and depth of contaminated samples (surface soils accessible to receptors vs deeper soils below hardstanding).
  - Consider the exposure pathways relevant to the proposed end use (direct ingestion, dermal contact, inhalation of dust, inhalation of vapours, consumption of homegrown produce).
- Identify contaminants of concern requiring remediation or further DQRA.

#### 8.2 Controlled Waters Risk Assessment
- Compare groundwater results against DWS and/or EQS.
- Assess the risk of contaminant migration from soil to groundwater using leachate results or soil-to-water partitioning calculations.
- Consider the sensitivity of the groundwater receptor (aquifer classification, SPZ status, proximity to abstractions and surface water).
- If exceedances are identified, recommend further assessment using Tier 2 tools (e.g., ConSim, RTM) or DQRA.

#### 8.3 Gas Risk Assessment
- Present the ground gas monitoring results:
  - For each monitoring round: date, atmospheric pressure, barometric trend, gas concentrations (CH4, CO2, O2, H2S), flow rate, borehole response (steady-state confirmation).
  - Maximum concentrations and flow rates recorded.
- Calculate the Gas Screening Value (GSV) for methane and carbon dioxide following BS 8485:
  - GSV = maximum concentration (%) x maximum flow rate (l/hr).
  - Or use the limiting value approach where flow rates are below detection limits.
- Classify the gas regime using the traffic light system:
  - **Green (Characteristic Situation CS1)**: Very low risk. No gas protection measures required beyond standard construction.
  - **Amber 1 (CS2)**: Low to moderate risk. Basic gas protection measures required.
  - **Amber 2 (CS3-CS4)**: Moderate to moderately high risk. Enhanced gas protection measures required.
  - **Red (CS5)**: High risk. Full gas protection measures required (gas membrane + ventilation system).
- Specify the required gas protection measures for the proposed buildings.
- Reference BS 8485:2015+A1:2019 and CIRIA C665.

### 9. Conceptual Site Model Update (400-800 words)
- Update the Conceptual Site Model from the Phase 1 based on the investigation findings:
  - Confirm or revise the identified sources, pathways, and receptors.
  - Remove linkages where investigation has demonstrated absence of contamination.
  - Confirm or update risk ratings for each S-P-R linkage based on quantitative data.
- Present the updated CSM in tabular format showing:
  - Source, pathway, receptor.
  - Risk rating (based on GQRA findings): very low, low, moderate, moderate/high, high.
  - Whether the risk is acceptable or requires remediation.
- Provide a narrative summary of the updated risk assessment.

### 10. Remediation Requirements (400-800 words)
- Based on the GQRA findings, state the remediation requirements:
  - If all risks are acceptable (below GAC or very low/low risk): confirm the site is suitable for the proposed use without remediation. Recommend a discovery strategy for unexpected contamination during construction.
  - If remediation is required, identify:
    - Contaminants of concern requiring remediation.
    - Affected areas and volumes of contaminated material.
    - Remediation objectives (target concentrations based on GAC or site-specific criteria).
    - Preliminary remediation options:
      - Excavation and off-site disposal (dig and dump).
      - Excavation and on-site treatment (bioremediation, soil washing, stabilisation).
      - In-situ treatment (permeable reactive barriers, enhanced bioremediation, soil vapour extraction).
      - Cover systems (clean cover with barrier layer, raised levels with imported soils).
      - Institutional controls (restrictions on land use, groundwater monitoring).
    - Recommend that a Remediation Strategy be prepared and submitted for LPA approval.
    - Recommend that a Verification Report be prepared following completion of remediation.
  - Address gas protection requirements: specify the appropriate gas protection measures per BS 8485 traffic light classification.
  - Address asbestos in soils (if detected): describe management/remediation approach per CIRIA C733.
  - If further investigation is required (DQRA), specify the scope and rationale.

### 11. Conclusion (400-700 words)
- Summarise the ground conditions encountered.
- Summarise the chemical testing results and key exceedances.
- Summarise the GQRA conclusions for human health, controlled waters, and ground gas.
- Summarise the updated Conceptual Site Model.
- State whether the site is suitable for the proposed use:
  - Without remediation (all risks acceptable).
  - With remediation (specify key requirements).
  - Subject to further investigation (DQRA required for specific contaminants/pathways).
- Confirm compliance with NPPF Paragraphs 183-184.
- Confirm that the assessment has been prepared in accordance with BS 10175 and the LCRM framework.
- Recommend planning conditions: Remediation Strategy, Verification Report, unexpected contamination discovery strategy, gas protection verification.
- State the AI-generated disclaimer and professional endorsement requirement.

## Quality Standards

- Reference NPPF Paragraphs 183-184 by specific number.
- Reference BS 10175:2011+A2:2017 and the LCRM framework by name.
- Reference Part 2A of the Environmental Protection Act 1990 where relevant.
- Reference the specific GAC used (C4SLs and/or S4ULs) by name and publication.
- Reference BS 8485:2015+A1:2019 and BS 8576:2013 for gas assessment.
- Reference CIRIA C665 for gas risk assessment.
- Present analytical results in tabular format with GAC comparisons and exceedances highlighted.
- Present statistical summaries (min, max, mean, 95% UCL) for key contaminants.
- Update the Conceptual Site Model with revised S-P-R linkages and risk ratings.
- Calculate Gas Screening Values correctly following BS 8485 methodology.
- Use correct technical terminology: GQRA, DQRA, GAC, C4SL, S4UL, CSM, S-P-R linkage, GSV, characteristic situation, traffic light classification.
- Where investigation data has not been provided, clearly flag as "[DATA TO BE PROVIDED]".
- Do not fabricate analytical results, gas monitoring data, or ground conditions.
- Maintain professional geo-environmental consultancy language throughout.
- Include the AI-generated disclaimer prominently in the Introduction and Conclusion.`;

export const LC2_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description:
      'Purpose, site identification, proposed use, Phase 1 summary, investigation objectives, competent person, and AI disclaimer.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State purpose and NPPF Paragraphs 183-184 requirement. Identify the site (address, NGR, area). Describe proposed development and end use. Summarise Phase 1 findings that triggered the Phase 2. State investigation objectives. Note competent person requirement. Include AI disclaimer.',
  },
  {
    name: 'Policy Framework',
    description:
      'NPPF, LCRM, BS 10175, GAC references, gas assessment framework, and local authority guidance.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise NPPF Paragraphs 183-185. Summarise LCRM framework and GQRA position. Reference BS 10175 and BS 5930. Reference GAC (C4SLs, S4ULs). Reference gas framework (BS 8485, BS 8576, CIRIA C665). Reference local authority contaminated land policies.',
  },
  {
    name: 'Phase 1 Findings Summary',
    description:
      'Summary of Phase 1 Desk Study findings including environmental setting, site history, CSM, and risk assessment conclusions.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise environmental setting, site history, and key potentially contaminative uses. Summarise CSM: sources, pathways, receptors. Summarise preliminary risk assessment conclusions. State recommendations from Phase 1 for Phase 2 scope. Cross-reference Phase 1 report.',
  },
  {
    name: 'Investigation Rationale',
    description:
      'Design rationale linking investigation to the Phase 1 CSM, spatial coverage, depths, and sampling strategy.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Explain how investigation targets CSM sources, pathways, and receptors. Describe spatial coverage. Describe depths relative to expected contamination. Describe targeted and non-targeted sampling strategy. Describe analytical suite selection. Reference BS 10175.',
  },
  {
    name: 'Investigation Methodology',
    description:
      'Detailed methodology for intrusive investigation, sampling, monitoring well installation, gas monitoring, laboratory analysis, and QA/QC.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe investigation points (number, type, locations). Describe depths. Describe logging methodology (BS 5930). Describe soil sampling and chain of custody. Describe monitoring well installation and groundwater sampling. Describe gas standpipe installation and monitoring methodology (instrument, parameters, rounds). Describe laboratory analysis suite and accreditation. Describe QA/QC programme.',
  },
  {
    name: 'Ground Conditions',
    description:
      'Description of strata encountered, made ground, superficial deposits, bedrock, and groundwater levels.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe made ground (thickness, composition, contamination evidence). Describe superficial deposits. Describe bedrock. Present groundwater levels and flow direction. Present summary table and reference geological cross-section. Note unexpected conditions.',
  },
  {
    name: 'Chemical Testing Results',
    description:
      'Tabulated soil, groundwater, leachate, and asbestos results compared against GAC with exceedances highlighted.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Tabulate soil results with GAC comparisons. Tabulate groundwater results against DWS/EQS. Tabulate leachate results. Present asbestos screening results. Present statistical summary (min, max, mean, 95% UCL). Highlight all exceedances. Identify spatial distribution. Flag if data not yet available.',
  },
  {
    name: 'Generic Quantitative Risk Assessment',
    description:
      'GQRA for human health (soil vs GAC), controlled waters (groundwater and leachate), and ground gas (GSV calculation and BS 8485 classification).',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Human health: compare against C4SLs/S4ULs for proposed use, assess magnitude/frequency of exceedances, consider exposure pathways, identify contaminants requiring remediation. Controlled waters: compare groundwater against DWS/EQS, assess soil-to-water risk, consider aquifer sensitivity. Gas: present monitoring results, calculate GSVs, classify using BS 8485 traffic light system, specify gas protection measures.',
    subsections: [
      {
        name: 'Human Health Risk Assessment',
        description: 'Soil results compared against land-use-specific GAC with risk characterisation.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance:
          'Compare against C4SLs/S4ULs. Assess exceedance magnitude and frequency. Consider depth and accessibility. Identify contaminants of concern.',
      },
      {
        name: 'Groundwater Risk Assessment',
        description: 'Groundwater and leachate results assessed against water quality standards.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance:
          'Compare groundwater against DWS/EQS. Assess soil-to-water migration risk. Consider aquifer sensitivity and SPZ status. Recommend further assessment if needed.',
      },
      {
        name: 'Gas Risk Assessment',
        description: 'Gas monitoring results, GSV calculation, and BS 8485 traffic light classification.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance:
          'Present gas monitoring data per round. Calculate GSV (concentration x flow rate). Classify using BS 8485 traffic light system. Specify required gas protection measures.',
      },
    ],
  },
  {
    name: 'Conceptual Site Model Update',
    description:
      'Updated CSM based on investigation findings with revised S-P-R linkages and risk ratings.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Update CSM from Phase 1. Confirm or revise sources, pathways, receptors. Remove completed linkages where no contamination found. Update risk ratings based on GQRA. Present updated CSM table. Provide narrative summary of revised risk assessment.',
  },
  {
    name: 'Remediation Requirements',
    description:
      'Remediation recommendations including contaminants, affected areas, objectives, options, gas protection, and asbestos management.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'State whether remediation is required. If yes: identify contaminants, areas, and volumes. Set remediation objectives (GAC or site-specific targets). Describe preliminary remediation options (excavation, treatment, cover systems, institutional controls). Recommend Remediation Strategy and Verification Report. Specify gas protection per BS 8485. Address asbestos if detected. If no remediation required: confirm suitability and recommend discovery strategy.',
  },
  {
    name: 'Conclusion',
    description:
      'Summary of ground conditions, testing results, GQRA conclusions, CSM, suitability determination, and recommended conditions.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise ground conditions, key exceedances, GQRA conclusions for human health/controlled waters/gas. Summarise updated CSM. State suitability determination (suitable without remediation, with remediation, or subject to further investigation). Confirm NPPF Paragraphs 183-184 compliance. Confirm BS 10175/LCRM compliance. Recommend conditions. State AI disclaimer.',
  },
];

export const LC2_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Phase 1 Findings Summary',
    'Investigation Rationale',
    'Investigation Methodology',
    'Ground Conditions',
    'Chemical Testing Results',
    'Generic Quantitative Risk Assessment',
    'Conceptual Site Model Update',
    'Remediation Requirements',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const LC2_TEMPLATE = {
  assessment_type: 'Land Contamination - Phase 2 Intrusive Investigation',
  short_name: 'LC2',
  version: 1,
  sections: LC2_SECTIONS,
  quality_criteria: LC2_QUALITY,
};
