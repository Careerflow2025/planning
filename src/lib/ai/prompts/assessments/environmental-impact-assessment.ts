import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Environmental Impact Assessment (EIA) / Environmental Statement -- required for
 * developments falling within Schedule 1 or Schedule 2 of the Town and Country
 * Planning (Environmental Impact Assessment) Regulations 2017, where the
 * development is likely to have significant effects on the environment by virtue
 * of its nature, size, or location.
 *
 * AI Difficulty: Hard (100-500+ pages). This is a comprehensive, multi-disciplinary
 * document that co-ordinates specialist technical chapters. Actual environmental
 * surveys, modelling, and field data must be provided by competent specialists.
 *
 * DISCLAIMER: This document is AI-generated and constitutes a draft framework only.
 * It MUST be reviewed, verified, and endorsed by a suitably qualified EIA
 * co-ordinator and the relevant technical specialists before submission to the
 * local planning authority.
 */

export const EIA_PROMPT = `You are preparing an Environmental Impact Assessment (EIA) Environmental Statement (ES) to accompany a planning application submitted to a local planning authority in England. The ES must be prepared in accordance with the Town and Country Planning (Environmental Impact Assessment) Regulations 2017 and satisfy the information requirements of Schedule 4 to those Regulations.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft framework only. It MUST be reviewed, verified, and endorsed by a suitably qualified EIA co-ordinator and the relevant chapter-specific technical specialists (ecologists, acousticians, air quality consultants, transport engineers, landscape architects, heritage consultants, hydrogeologists, etc.) before submission to the local planning authority. The AI-generated content does not replace professional judgement, site-specific survey data, or specialist modelling. No reliance should be placed on this document without independent professional review.

## Document Purpose

The Environmental Statement must:
1. Provide a systematic identification, description, and assessment of the likely significant effects of the proposed development on the environment, covering direct and indirect, secondary, cumulative, short-, medium- and long-term, permanent and temporary, positive and negative effects.
2. Satisfy the information requirements of Schedule 4 to the EIA Regulations 2017, including:
   - A description of the development (location, design, size, and other relevant features).
   - A description of the likely significant effects on the environment.
   - A description of the measures envisaged to prevent, reduce, and where possible offset any significant adverse effects.
   - A description of the reasonable alternatives studied and the reasons for the chosen option.
   - A non-technical summary accessible to the general public.
3. Describe the environmental baseline conditions established through desk study, field surveys, and monitoring.
4. Apply a robust methodology for assessing the significance of effects (combining receptor sensitivity with magnitude of change).
5. Set out the mitigation hierarchy (avoid, reduce, remedy/compensate) and describe mitigation measures for each environmental topic.
6. Assess cumulative effects in combination with other existing and proposed developments.
7. Describe residual effects remaining after mitigation.
8. Include a mitigation and monitoring schedule summarising all committed measures.

## Key Policy, Legislative, and Guidance References

### The Town and Country Planning (Environmental Impact Assessment) Regulations 2017
- Transpose the requirements of EU Directive 2011/92/EU (as amended by Directive 2014/52/EU) into English law (retained post-Brexit via the European Union (Withdrawal) Act 2018).
- **Regulation 4**: Prohibition on granting planning permission for EIA development without consideration of environmental information.
- **Regulation 6**: Screening -- determining whether an EIA is required for Schedule 2 development.
- **Regulation 15**: Scoping -- applicant may request a Scoping Opinion from the LPA to determine the scope and level of detail of the ES.
- **Schedule 1**: Development always requiring EIA (e.g., power stations >300MW, chemical installations, motorways, airports >2,100m runway).
- **Schedule 2**: Development requiring EIA where likely to have significant environmental effects (thresholds and criteria apply, e.g., urban development >1ha, industrial estate >0.5ha).
- **Schedule 3**: Selection criteria for Schedule 2 screening (characteristics of the development, location sensitivity, characteristics of the potential impact).
- **Schedule 4**: Information required in the Environmental Statement:
  Part 1 (mandatory): description of the project, description of the likely significant effects, description of the measures to avoid/prevent/reduce/offset significant adverse effects, description of reasonable alternatives, non-technical summary.
  Part 2 (as relevant): description of physical characteristics, land-use requirements, main characteristics of production processes, estimate of expected residues and emissions, description of the main features of the significant effects.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174**: Contributing to and enhancing the natural and local environment.
- **Paragraph 180**: Biodiversity -- mitigation hierarchy, irreplaceable habitats.
- **Paragraph 183-184**: Land contamination and ground conditions.
- **Paragraph 185**: Pollution -- noise, air quality, light.
- **Paragraph 152-158**: Climate change mitigation and adaptation.
- **Paragraph 159-169**: Flood risk.
- **Paragraph 189-199**: Heritage assets.

### EIA Directive 2011/92/EU (as retained)
- The substantive requirements of the Directive continue to apply in English law.
- Article 3: Assessment of direct and indirect significant effects on population/human health, biodiversity, land/soil/water/air/climate, material assets/cultural heritage/landscape, and the interaction between these factors.
- Article 5: Information to be provided by the developer (Schedule 4 equivalent).

### IEMA EIA Quality Mark
- The Institute of Environmental Management and Assessment (IEMA) EIA Quality Mark scheme promotes excellence in EIA practice.
- Key principles: proportionality, transparency, robustness, practicality, and effectiveness.
- Shaping Quality guidance (IEMA, 2011) and EIA Guide to Delivering Quality Development (2016).

### Other Key References
- Planning Practice Guidance: Environmental Impact Assessment (PPG-EIA, updated 2020).
- IEMA Guidelines for Environmental and Sustainability Statement Review (2020).
- DMRB LA 104 (Environmental Assessment and Monitoring) for highways schemes.
- CIEEM Guidelines for Ecological Impact Assessment (2018, updated 2022).
- GLVIA3 Guidelines for Landscape and Visual Impact Assessment (2013).
- IAQM Land-Use Planning & Development Control: Planning for Air Quality (2017).
- BS 5228 Parts 1 and 2 for construction noise and vibration.
- BS 4142:2014+A1:2019 for operational noise.
- LCRM and BS 10175 for ground conditions.
- BRE BR 209 for daylight/sunlight.
- Lawson Comfort Criteria for wind microclimate.
- NPPF and PPG for flood risk, heritage, transport, and other topics.

## Section-by-Section Guidance

### 1. Non-Technical Summary (NTS) (2000-5000 words)
The NTS is a mandatory requirement of Schedule 4 and must be accessible to the general public. It should:
- Summarise the proposed development in plain English: what is proposed, where, by whom.
- Summarise the EIA process: scoping, consultation, methodology.
- Summarise each technical chapter: baseline, likely significant effects, mitigation, residual effects.
- Summarise the assessment of alternatives and the reasons for the chosen option.
- Summarise cumulative effects.
- Summarise the mitigation and monitoring commitments.
- Be self-contained (readable without reference to the main ES).
- Avoid excessive technical jargon.
- Include a site location plan and key figures.
- State the AI-generated disclaimer prominently: "This Environmental Statement has been prepared using AI-assisted drafting and MUST be reviewed and endorsed by qualified professionals before submission."

### 2. Introduction (500-1000 words)
- State the purpose of the ES and the legislative basis (EIA Regulations 2017, Schedule 4).
- Identify the applicant and the EIA co-ordinator.
- Describe the site: location, address, grid reference, site area, current use.
- Summarise the proposed development.
- Explain the EIA process: screening (if applicable), scoping (reference the Scoping Opinion if one was obtained), consultation, preparation of the ES.
- Describe the structure of the ES (list of chapters/volumes).
- State the availability of the ES for public inspection.
- Include the professional review disclaimer.

### 3. EIA Methodology (800-1500 words)
- Describe the overarching EIA methodology:
  - Baseline establishment: desk study, field surveys, monitoring, consultation.
  - Impact identification: systematic identification of potential environmental effects.
  - Impact assessment: methodology for determining significance by combining receptor sensitivity/value with magnitude of change/impact.
  - Significance criteria: define the scales used for sensitivity (e.g., Very High, High, Medium, Low, Negligible) and magnitude (e.g., Major, Moderate, Minor, Negligible, No Change).
  - Significance matrix: present the matrix showing how sensitivity and magnitude combine to determine significance of effect (e.g., Major Significant, Moderate Significant, Minor Not Significant, Negligible Not Significant).
  - State which levels of effect are considered "significant" in EIA terms (typically Major and Moderate).
  - Nature of effect: adverse, neutral, beneficial.
  - Duration: temporary (construction) vs permanent (operation).
  - Extent: local, district, regional, national, international.
- Describe the mitigation hierarchy: avoid, reduce, remedy/compensate.
- Describe the approach to cumulative effects assessment:
  - Type 1: Cumulative effects of the proposed development with other developments.
  - Type 2: Combined effects of different environmental topics on the same receptor (inter-project effects).
  - Identify the list of cumulative schemes considered (agreed with LPA at scoping).
- Describe the approach to the assessment of alternatives.
- Reference the Scoping Opinion and how the ES responds to each point raised.
- Identify any topics scoped out of the assessment and provide justification.

### 4. Alternatives Assessment (500-1200 words)
- Describe the reasonable alternatives studied by the developer and the reasons for the chosen option. This is a mandatory requirement of Schedule 4, Part 1.
- Alternatives to consider:
  - Alternative sites (where relevant).
  - Alternative designs and layouts.
  - Alternative scales of development.
  - Alternative uses.
  - The "do nothing" scenario (no development).
  - Alternative construction methods.
  - Alternative access arrangements.
  - Alternative technologies (energy, waste, drainage).
- For each alternative, explain why it was considered, what environmental effects it would have, and why it was accepted or rejected.
- Explain the evolution of the scheme design and how environmental considerations have influenced the design.

### 5. Project Description (800-2000 words)
- Provide a comprehensive description of the proposed development as required by Schedule 4:
  - Location and site context.
  - Land use: existing and proposed.
  - Development parameters: building heights, footprints, floor areas, plot ratios.
  - Phasing and programme.
  - Construction methodology: earthworks, foundations, superstructure, services, landscaping.
  - Construction traffic: routes, vehicle numbers, duration.
  - Operational characteristics: uses, occupancy, hours of operation.
  - Infrastructure: access roads, utilities, drainage, energy.
  - Demolition (if applicable): buildings to be demolished, methodology.
  - Landscaping and open space: hard and soft landscaping, public realm.
  - Decommissioning (if relevant, e.g., for renewable energy projects).
- Include key parameter plans and drawings (reference appendices).

### 6. Socio-Economics (600-1500 words)
- Describe the baseline socio-economic conditions:
  - Population and demographics (ONS data, Census data).
  - Employment and economic activity (NOMIS, local authority data).
  - Housing: stock, tenure, affordability, need (SHMA data).
  - Community facilities and services: healthcare, education, open space, retail.
  - Deprivation (Index of Multiple Deprivation).
- Assess the likely significant effects during construction:
  - Construction employment (direct and indirect/induced, using multipliers).
  - Construction spending in the local economy.
  - Disruption to local residents and businesses.
- Assess the likely significant effects during operation:
  - Operational employment (direct and indirect).
  - Population increase and demand on services (healthcare, education, open space -- using appropriate ratios).
  - Housing delivery and contribution to housing need.
  - Economic output (GVA contribution).
  - Community infrastructure provision (on-site and S106/CIL contributions).
- Assess cumulative socio-economic effects.
- Propose mitigation and enhancement: local employment and procurement strategies, skills and training, community infrastructure contributions.
- Assess residual effects.

### 7. Transport and Access (600-1500 words)
- Describe the baseline transport conditions:
  - Highway network: local and strategic roads, capacity, congestion.
  - Public transport: bus, rail, cycling, walking accessibility (PTAL or equivalent).
  - Traffic flows: existing AADT and peak-hour flows (from ATC/MCC surveys).
  - Accident data: PIC records for the study area (typically 5 years).
  - Pedestrian and cycle infrastructure.
- Assess the likely significant effects during construction:
  - Construction traffic generation: HGV and LGV movements.
  - Routing and access.
  - Impact on highway capacity and delay (junction modelling).
  - Pedestrian and cyclist safety.
- Assess the likely significant effects during operation:
  - Trip generation (TRICS database).
  - Trip distribution and assignment.
  - Impact on junction capacity (LinSig, ARCADY, PICADY, Vissim modelling).
  - Impact on highway safety.
  - Impact on public transport capacity.
  - Parking provision and impact.
  - Severance, delay, amenity, fear and intimidation (IEMA guidelines).
- Assess cumulative transport effects.
- Propose mitigation: access design, Travel Plan, highway improvements, S278 works, public transport contributions, pedestrian/cycle improvements, CTMP.
- Assess residual effects.
- Cross-reference the Transport Assessment and Travel Plan (separate documents).

### 8. Air Quality (600-1500 words)
- Describe the baseline air quality:
  - AQMA designations.
  - Background pollutant concentrations (DEFRA background maps).
  - Local monitoring data (LA diffusion tubes and automatic monitors).
  - Key pollutants: NO2, PM10, PM2.5.
- Assess the likely significant effects during construction:
  - Construction dust: apply the IAQM methodology (risk categorisation based on scale, proximity, and sensitivity).
  - Construction traffic emissions.
- Assess the likely significant effects during operation:
  - Road traffic emissions: dispersion modelling (ADMS-Roads or equivalent) of NO2, PM10, PM2.5 at sensitive receptors.
  - Comparison with air quality objectives and limit values (AQS Regulations 2010).
  - Assessment of significance using IAQM criteria (change in concentration and absolute concentration).
  - Point source emissions (energy centres, CHP, industrial processes) if applicable.
- Assess cumulative air quality effects.
- Propose mitigation: construction dust management (IAQM best practice measures), low emission strategy, EV charging, Travel Plan, energy strategy.
- Assess residual effects.
- Reference the Air Quality Assessment technical appendix for detailed modelling results.

### 9. Noise and Vibration (600-1500 words)
- Describe the baseline noise environment:
  - Noise survey methodology and results (LAeq, LA90, LAFmax).
  - Dominant noise sources.
- Assess the likely significant effects during construction:
  - Construction noise: BS 5228-1 methodology.
  - Construction vibration: BS 5228-2 methodology.
  - Construction traffic noise.
- Assess the likely significant effects during operation:
  - Operational noise: BS 4142:2014+A1:2019 for plant/commercial noise.
  - Road traffic noise changes: CRTN methodology.
  - Internal noise for proposed residential: BS 8233:2014, ProPG.
  - Apply NPSE/PPG-Noise NOEL/LOAEL/SOAEL framework.
- Assess cumulative noise effects.
- Propose mitigation: good acoustic design, building envelope specifications, plant noise limits, CEMP, barriers/bunds.
- Assess residual effects.
- Reference the Noise Impact Assessment technical appendix.

### 10. Ecology and Biodiversity (600-1500 words)
- Describe the baseline ecology:
  - Designated sites: international (SAC, SPA, Ramsar), national (SSSI, NNR), local (LNR, LWS/SINC).
  - Habitats: Phase 1 habitat survey results, Habitats of Principal Importance.
  - Protected and notable species: survey results for bats, GCN, badger, reptiles, breeding birds, dormouse, otter, water vole, invertebrates.
  - Biodiversity value assessment using CIEEM EcIA methodology.
- Assess the likely significant effects:
  - Habitat loss and fragmentation.
  - Disturbance to protected species.
  - Effects on designated sites (direct and indirect, including Habitats Regulations Assessment screening).
  - Lighting, noise, vibration, air quality, water quality effects on ecology.
- Assess cumulative ecological effects.
- Apply the mitigation hierarchy: avoid, mitigate, compensate, enhance.
- Address Biodiversity Net Gain: mandatory 10% BNG (Environment Act 2021), DEFRA Metric 4.0 assessment.
- Propose mitigation: CEMP (Biodiversity), protected species licences, habitat creation, sensitive timing, ECoW.
- Assess residual effects.
- Reference the Preliminary Ecological Appraisal, Phase 2 species surveys, and BNG Metric in appendices.

### 11. Landscape and Visual (600-1500 words)
- Describe the baseline landscape and visual conditions:
  - Landscape character: NCA, county/district LCA.
  - Landscape designations: AONB/National Landscape, Green Belt, local designations.
  - Landscape value assessment.
  - Visual baseline: ZTV, viewpoint selection and descriptions.
  - Visual receptor groups and sensitivity.
- Assess the likely significant effects following GLVIA3 methodology:
  - Landscape effects: on character, features, perceptual qualities.
  - Visual effects: on views from representative viewpoints and receptor groups.
  - At construction, Year 1, and Year 15.
- Assess cumulative landscape and visual effects.
- Propose mitigation: embedded design measures, planting strategy, landscape management plan.
- Assess residual effects (at Year 15 after mitigation planting maturity).
- Reference the standalone LVIA and visualisations/photomontages in appendices.

### 12. Water Resources and Flood Risk (600-1500 words)
- Describe the baseline:
  - Hydrology: surface water features, catchments, water quality classifications.
  - Hydrogeology: aquifer designations, groundwater vulnerability, SPZs.
  - Flood risk: EA Flood Zones, surface water flood risk, groundwater flood risk, reservoir flood risk.
  - Existing drainage: foul, surface water, combined sewers.
- Assess the likely significant effects during construction:
  - Pollution risk to watercourses and groundwater (sediment, hydrocarbons, cement).
  - Increased flood risk during construction.
  - Dewatering effects on groundwater.
- Assess the likely significant effects during operation:
  - Changes to surface water runoff: impermeable area, peak flows, volumes.
  - Flood risk to and from the development.
  - Water quality effects: pollutant loading from roads, car parks, commercial areas.
  - Water supply demand and wastewater generation.
  - Effects on groundwater levels and flows.
- Assess cumulative effects.
- Propose mitigation: SuDS strategy (following the SuDS hierarchy), flood risk management, CEMP (water), pollution prevention measures, water efficiency measures.
- Assess residual effects.
- Cross-reference the Flood Risk Assessment, Drainage Strategy, and Water Framework Directive assessment (if required).

### 13. Ground Conditions (600-1200 words)
- Describe the baseline:
  - Geology: made ground, superficial, bedrock (from BGS data and site investigation).
  - Contamination: Phase 1 Desk Study and Phase 2 investigation findings, Conceptual Site Model.
  - Geotechnical conditions.
  - Mining/mineral resources.
- Assess the likely significant effects:
  - Risk to human health from contaminated land (during construction and operation).
  - Risk to controlled waters from contaminant mobilisation.
  - Ground gas risk.
  - Geotechnical risk (settlement, stability, shrinkage/heave).
  - Loss of mineral resource.
- Propose mitigation: remediation strategy, gas protection measures, foundation design, CEMP (contamination), CL:AIRE Materials Management Plan.
- Assess residual effects.
- Cross-reference the Phase 1 and Phase 2 contamination reports, Remediation Strategy, and Geotechnical Assessment.

### 14. Climate Change (600-1200 words)
- Assess the development's contribution to greenhouse gas emissions:
  - Embodied carbon in construction (Scope 3).
  - Operational energy carbon emissions (Scope 1 and 2).
  - Transport carbon emissions (Scope 3).
  - Lifecycle carbon assessment.
  - Comparison with relevant carbon budgets and net zero targets.
- Assess climate change resilience:
  - Vulnerability of the development to future climate change (UKCP18 projections).
  - Overheating risk assessment (CIBSE TM59).
  - Flood risk under climate change scenarios (using appropriate climate change allowances from EA guidance).
  - Water stress and drought resilience.
  - Biodiversity resilience.
- Propose mitigation and adaptation: energy efficiency, renewable energy, low-carbon heat, sustainable transport, green infrastructure, SuDS, overheating measures.
- Assess residual effects.
- Cross-reference the Energy Statement and Sustainability Statement.

### 15. Cumulative Effects (800-1500 words)
- List all cumulative schemes considered (agreed at scoping or identified subsequently):
  - Planning reference, description, status (consented, under construction, application submitted, allocation).
  - Location relative to the application site.
- Assess Type 1 cumulative effects (inter-project): the combined effects of the proposed development with other developments on each environmental topic:
  - Transport: combined traffic generation and impact on the network.
  - Air quality: combined emissions and impact on air quality objectives.
  - Noise: combined noise levels at sensitive receptors.
  - Ecology: combined habitat loss, fragmentation, disturbance.
  - Landscape and visual: combined effects on landscape character and views.
  - Socio-economics: combined housing delivery, employment, demand on services.
  - Water resources: combined effects on flood risk and water quality.
  - Ground conditions: combined contamination risks.
  - Climate change: combined GHG emissions.
- Assess Type 2 cumulative effects (intra-project): combined effects of different environmental topics on the same receptor (e.g., combined noise + air quality + visual effects on the same residential receptor).
- Present a summary table of cumulative effects by topic.
- Propose any additional mitigation required to address cumulative effects.

### 16. Mitigation Summary (500-1000 words)
- Present a comprehensive schedule/register of all mitigation and monitoring measures committed to in the ES:
  - Mitigation measure description.
  - Environmental topic.
  - Phase (construction/operation/decommissioning).
  - Mechanism for securing (planning condition, S106, CEMP, detailed design).
  - Responsible party.
  - Monitoring requirements.
- This schedule should be presented as a table and should be the definitive list of commitments.
- Cross-reference to the specific ES chapters where each measure is described in detail.

### 17. Residual Effects Summary (500-1000 words)
- Present a summary table of all residual effects (after mitigation) for each environmental topic:
  - Topic.
  - Receptor.
  - Nature of effect (adverse/beneficial).
  - Significance of residual effect (Major/Moderate/Minor/Negligible).
  - Whether the residual effect is "significant" in EIA terms.
  - Duration and reversibility.
- Identify all significant residual effects and provide a narrative discussing them.
- Note any significant beneficial effects.

### 18. Conclusion (500-1000 words)
- Provide an overall summary of the EIA findings.
- Confirm that the ES satisfies the requirements of Schedule 4 to the EIA Regulations 2017.
- Summarise the key significant effects identified (both adverse and beneficial).
- Confirm that the mitigation hierarchy has been applied and all practicable mitigation measures have been identified.
- State the overall conclusion: whether the development can proceed without unacceptable significant adverse environmental effects, having regard to the mitigation measures committed.
- Note any monitoring requirements.
- State the AI-generation disclaimer and the requirement for professional endorsement.

## Quality Standards

- Reference the Town and Country Planning (Environmental Impact Assessment) Regulations 2017 throughout.
- Reference Schedule 4 information requirements explicitly.
- Reference EIA Directive 2011/92/EU (as retained) where relevant.
- Reference specific NPPF paragraphs by number for each topic.
- Apply a consistent significance methodology throughout (sensitivity x magnitude = significance matrix).
- Clearly define significance criteria and state which levels constitute "significant" in EIA terms.
- Apply the mitigation hierarchy (avoid, reduce, remedy/compensate) for each topic.
- Present a mitigation register/schedule as a definitive commitment table.
- Present a residual effects summary table covering all topics.
- Reference the Scoping Opinion (if obtained) and demonstrate how each scoping point has been addressed.
- Cross-reference standalone technical assessments and appendices.
- Ensure the Non-Technical Summary is self-contained, accessible, and free of excessive jargon.
- Use correct EIA terminology: significance, magnitude, sensitivity, receptor, mitigation hierarchy, cumulative effects, residual effects.
- Include the AI-generated disclaimer prominently in the NTS, Introduction, and Conclusion.
- Where survey or modelling data has not been provided, clearly flag as "[DATA TO BE PROVIDED BY SPECIALIST CONSULTANT]".
- Do not fabricate survey results, monitoring data, or modelling outputs.`;

export const EIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Non-Technical Summary',
    description:
      'Plain-English summary of the entire ES accessible to the general public, covering all topics, alternatives, mitigation, and residual effects.',
    required: true,
    min_words: 2000,
    max_words: 5000,
    guidance:
      'Summarise the proposed development in plain English. Summarise EIA process. Summarise each technical chapter: baseline, significant effects, mitigation, residual effects. Summarise alternatives assessment. Summarise cumulative effects. Summarise mitigation commitments. Include site location plan reference. Include AI-generated disclaimer. Must be self-contained.',
  },
  {
    name: 'Introduction',
    description:
      'Purpose of the ES, legislative basis, site identification, EIA process, and document structure.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'State purpose and legislative basis (EIA Regulations 2017, Schedule 4). Identify applicant and EIA co-ordinator. Describe the site (location, NGR, area, current use). Summarise the proposed development. Explain the EIA process: screening, scoping, consultation. Describe ES structure. State availability for public inspection. Include professional review disclaimer.',
  },
  {
    name: 'EIA Methodology',
    description:
      'Overarching assessment methodology, significance criteria, cumulative approach, and scoping response.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Describe baseline establishment. Describe impact identification. Set out sensitivity and magnitude scales. Present significance matrix. State which levels are "significant" in EIA terms. Describe mitigation hierarchy. Describe cumulative effects methodology (Type 1 and Type 2). Describe alternatives assessment approach. Reference Scoping Opinion and demonstrate how each point is addressed. Identify topics scoped out with justification.',
    subsections: [
      {
        name: 'Assessment Framework',
        description: 'Sensitivity, magnitude, and significance determination.',
        required: true,
        min_words: 300,
        max_words: 600,
        guidance:
          'Define sensitivity/value scales. Define magnitude scales. Present significance matrix. Define significance threshold. Define nature (adverse/beneficial), duration, and extent.',
      },
      {
        name: 'Cumulative Assessment Approach',
        description: 'Type 1 and Type 2 cumulative effects methodology.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance:
          'Define Type 1 (inter-project) and Type 2 (intra-project) cumulative effects. Describe approach to identifying cumulative schemes. Reference agreed list from scoping.',
      },
      {
        name: 'Scoping and Consultation',
        description: 'Scoping Opinion response and topics scoped out.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance:
          'Reference the Scoping Opinion. List key scoping points and where they are addressed in the ES. Identify topics scoped out with justification.',
      },
    ],
  },
  {
    name: 'Alternatives Assessment',
    description:
      'Reasonable alternatives studied and reasons for the chosen option, as required by Schedule 4.',
    required: true,
    min_words: 500,
    max_words: 1200,
    guidance:
      'Describe alternative sites, layouts, designs, scales, uses, construction methods, access, and technologies considered. Explain the "do nothing" scenario. For each alternative, describe environmental effects and reasons for acceptance/rejection. Describe scheme evolution and how environmental considerations influenced design.',
  },
  {
    name: 'Project Description',
    description:
      'Comprehensive description of the proposed development including construction, operation, and decommissioning.',
    required: true,
    min_words: 800,
    max_words: 2000,
    guidance:
      'Describe location and context. Describe land use (existing and proposed). Describe development parameters (heights, areas, densities). Describe phasing and programme. Describe construction methodology and traffic. Describe operational characteristics. Describe infrastructure, drainage, and energy. Describe demolition (if applicable). Describe landscaping and open space.',
  },
  {
    name: 'Socio-Economics',
    description:
      'Baseline socio-economic conditions and assessment of construction and operational effects on employment, housing, and community infrastructure.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Describe baseline: population, employment, housing, services, deprivation. Assess construction effects: jobs, spending, disruption. Assess operational effects: employment, population, housing delivery, service demand, GVA. Assess cumulative effects. Propose mitigation and enhancement. Assess residual effects.',
  },
  {
    name: 'Transport and Access',
    description:
      'Baseline transport conditions and assessment of construction and operational traffic, highway capacity, safety, and sustainable transport effects.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Describe baseline: highway network, public transport, traffic flows, accidents, pedestrian/cycle infrastructure. Assess construction traffic effects. Assess operational trip generation, distribution, junction capacity, safety, public transport, parking, severance, delay, amenity. Assess cumulative effects. Propose mitigation. Assess residual effects.',
  },
  {
    name: 'Air Quality',
    description:
      'Baseline air quality and assessment of construction dust and operational traffic emission effects.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Describe baseline: AQMAs, background concentrations, monitoring data. Assess construction dust using IAQM methodology. Assess operational road traffic emissions using dispersion modelling. Compare with AQS objectives. Apply IAQM significance criteria. Assess cumulative effects. Propose mitigation. Assess residual effects.',
  },
  {
    name: 'Noise and Vibration',
    description:
      'Baseline noise environment and assessment of construction and operational noise and vibration effects.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Describe baseline noise survey results. Assess construction noise (BS 5228-1) and vibration (BS 5228-2). Assess operational noise: BS 4142 for plant, CRTN for traffic, BS 8233/ProPG for internal levels. Apply NPSE/PPG-Noise NOEL/LOAEL/SOAEL framework. Assess cumulative effects. Propose mitigation. Assess residual effects.',
  },
  {
    name: 'Ecology and Biodiversity',
    description:
      'Baseline ecological conditions and assessment of effects on designated sites, habitats, and protected species.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Describe baseline: designated sites, habitats (Phase 1), protected species (Phase 2 surveys). Assess effects using CIEEM EcIA methodology. Address HRA screening for European sites. Apply mitigation hierarchy. Address BNG (10% mandatory). Assess cumulative effects. Propose mitigation: CEMP, licences, habitat creation, ECoW. Assess residual effects.',
  },
  {
    name: 'Landscape and Visual',
    description:
      'Baseline landscape character and visual amenity, and assessment of landscape and visual effects following GLVIA3.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Describe baseline: landscape character (NCA, LCA), designations, landscape value, ZTV, viewpoints, visual receptors. Assess landscape effects on character, features, perceptual qualities. Assess visual effects at construction, Year 1, Year 15. Assess cumulative effects. Propose mitigation: design, planting, management. Assess residual effects.',
  },
  {
    name: 'Water Resources and Flood Risk',
    description:
      'Baseline water environment and assessment of effects on hydrology, hydrogeology, flood risk, and water quality.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Describe baseline: hydrology, hydrogeology, flood risk zones, drainage. Assess construction effects: pollution, flood risk, dewatering. Assess operational effects: runoff, flood risk, water quality, water supply, wastewater. Assess cumulative effects. Propose mitigation: SuDS, CEMP, pollution prevention. Assess residual effects.',
  },
  {
    name: 'Ground Conditions',
    description:
      'Baseline geology, contamination, and geotechnical conditions, and assessment of effects on human health and controlled waters.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Describe baseline: geology, contamination (CSM, Phase 1/Phase 2 results), geotechnical conditions, mining. Assess effects: human health risk, controlled waters risk, ground gas, geotechnical risk, mineral resource loss. Propose mitigation: remediation, gas protection, CEMP. Assess residual effects.',
  },
  {
    name: 'Climate Change',
    description:
      'Assessment of the development contribution to GHG emissions and vulnerability to climate change.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Assess GHG emissions: embodied carbon, operational energy, transport. Compare with carbon budgets. Assess climate resilience: overheating (CIBSE TM59), flood risk under climate change, water stress, biodiversity resilience. Propose mitigation and adaptation. Assess residual effects.',
  },
  {
    name: 'Cumulative Effects',
    description:
      'Combined effects of the proposed development with other developments (Type 1) and combined topic effects on receptors (Type 2).',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'List cumulative schemes with planning reference, description, status, and location. Assess Type 1 cumulative effects for each environmental topic. Assess Type 2 combined effects on key receptors. Present summary table. Propose additional mitigation if required.',
  },
  {
    name: 'Mitigation Summary',
    description:
      'Comprehensive schedule of all mitigation and monitoring measures committed to in the ES.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present a mitigation register table: measure description, topic, phase, mechanism for securing (condition, S106, CEMP), responsible party, monitoring. This is the definitive commitment list. Cross-reference ES chapters.',
  },
  {
    name: 'Residual Effects Summary',
    description:
      'Summary table of all residual effects after mitigation for each environmental topic.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present summary table: topic, receptor, nature (adverse/beneficial), significance, whether "significant" in EIA terms, duration, reversibility. Identify all significant residual effects with narrative discussion. Note significant beneficial effects.',
  },
  {
    name: 'Conclusion',
    description:
      'Overall summary confirming Schedule 4 compliance, key significant effects, mitigation, and professional endorsement requirement.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Summarise EIA findings. Confirm Schedule 4 compliance. Summarise key significant effects (adverse and beneficial). Confirm mitigation hierarchy applied. State overall conclusion on environmental acceptability. Note monitoring requirements. State AI-generation disclaimer and professional endorsement requirement.',
  },
];

export const EIA_QUALITY: QualityCriteria = {
  min_policy_refs: 15,
  required_sections: [
    'Non-Technical Summary',
    'Introduction',
    'EIA Methodology',
    'Alternatives Assessment',
    'Project Description',
    'Socio-Economics',
    'Transport and Access',
    'Air Quality',
    'Noise and Vibration',
    'Ecology and Biodiversity',
    'Landscape and Visual',
    'Water Resources and Flood Risk',
    'Ground Conditions',
    'Climate Change',
    'Cumulative Effects',
    'Mitigation Summary',
    'Residual Effects Summary',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const EIA_TEMPLATE = {
  assessment_type: 'Environmental Impact Assessment / Environmental Statement',
  short_name: 'EIA',
  version: 1,
  sections: EIA_SECTIONS,
  quality_criteria: EIA_QUALITY,
};
