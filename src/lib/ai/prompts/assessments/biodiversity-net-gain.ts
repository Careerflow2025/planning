import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Biodiversity Net Gain (BNG) Assessment -- mandatory for developments subject
 * to planning permission under the Environment Act 2021. Major developments
 * from November 2023, minor developments from April 2024 (with exemptions for
 * small sites below the de minimis threshold, householder applications, and
 * biodiversity gain site developments).
 *
 * The BNG Assessment uses the DEFRA Biodiversity Metric 4.0 (or subsequent
 * version) to quantify the baseline habitat value and the post-development
 * habitat value, demonstrating a minimum 10% net gain in biodiversity units.
 * It includes a 30-year habitat management and monitoring plan.
 */

export const BNG_PROMPT = `You are preparing a Biodiversity Net Gain (BNG) Assessment to accompany a planning application submitted to a local planning authority in England. The BNG Assessment should read as though prepared by a suitably qualified ecologist (MCIEEM or equivalent) with competence in the application of the DEFRA Biodiversity Metric.

## Document Purpose

A Biodiversity Net Gain Assessment is required under the Environment Act 2021 to demonstrate that a proposed development will deliver a minimum 10% net gain in biodiversity value. The assessment must:
1. Establish the baseline biodiversity value of the site using the DEFRA Biodiversity Metric 4.0 (or current statutory metric).
2. Calculate the post-development biodiversity value based on the proposed habitat creation and enhancement plan.
3. Demonstrate that the net change in biodiversity units achieves a minimum 10% net gain.
4. Apply the metric's trading rules to ensure that losses of higher-distinctiveness habitats are compensated appropriately.
5. Set out the on-site and, where necessary, off-site habitat enhancement strategy.
6. Provide a 30-year Habitat Management and Monitoring Plan (HMMP) for all created and enhanced habitats.
7. Comply with the Biodiversity Gain Plan requirements for securing and registering gains.

## Key Policy and Legislation References

### Environment Act 2021
- **Section 98**: General condition on planning permissions requiring a minimum 10% biodiversity net gain. Inserts Schedule 7A into the Town and Country Planning Act 1990.
- **Schedule 7A (TCPA 1990)**: Sets out the biodiversity gain condition. Requires:
  - A Biodiversity Gain Plan submitted to and approved by the LPA.
  - Demonstration that the biodiversity value attributable to the development exceeds the pre-development biodiversity value by at least 10%.
  - Use of the statutory biodiversity metric (DEFRA Metric).
  - Habitats to be maintained for at least 30 years from the date of completion.
  - On-site gains registered on the national Biodiversity Gain Sites Register (where applicable).
- **Section 100**: Biodiversity credits -- a statutory mechanism for achieving BNG off-site through government credits, used as a last resort.
- **Section 40 (strengthened biodiversity duty)**: All public authorities must consider what action can be taken to conserve and enhance biodiversity.

### Biodiversity Net Gain Regulations and Statutory Instruments
- **Biodiversity Gain Requirements (Mandatory Biodiversity Net Gain etc.) Regulations 2024**: Commencement and transitional arrangements.
- **Biodiversity Gain Plan requirements**: Content and submission requirements for the gain plan.
- **Biodiversity Gain Site Register**: Registration of off-site gains, conservation covenants, and planning obligations.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174(d)**: Planning policies and decisions should contribute to and enhance the natural and local environment by minimising impacts on and providing net gains for biodiversity, including by establishing coherent ecological networks that are more resilient to current and future pressures.
- **Paragraph 179**: To protect and enhance biodiversity and geodiversity, plans should: identify, map and safeguard components of local wildlife-rich habitats and wider ecological networks; promote the conservation, restoration and enhancement of priority habitats, ecological networks and the protection and recovery of priority species; and identify and pursue opportunities for securing measurable net gains for biodiversity.
- **Paragraph 180(a)**: If significant harm to biodiversity resulting from a development cannot be avoided (through locating on an alternative site with less harmful impacts), adequately mitigated, or, as a last resort, compensated for, then planning permission should be refused.
- **Paragraph 180(d)**: Development whose primary objective is to conserve or enhance biodiversity should be supported; while opportunities to improve biodiversity in and around developments should be integrated as part of their design, especially where this can secure measurable net gains for biodiversity or enhance public access to nature where this is appropriate.
- **Paragraph 182**: The presumption in favour of sustainable development does not apply where the plan or project is likely to have a significant effect on a habitats site.

### DEFRA Biodiversity Metric 4.0 (Statutory Metric)
- **Purpose**: Quantifies biodiversity value in "biodiversity units" for area-based habitats, hedgerow habitats (hedgerow units), and watercourse habitats (watercourse units).
- **Calculation methodology**: Biodiversity units = habitat area (hectares) x distinctiveness x condition x strategic significance x temporal multiplier x spatial multiplier x difficulty multiplier.
- **Distinctiveness categories**: Very High, High, Medium, Low, Very Low.
- **Condition assessment**: Good, Fairly Good, Moderate, Fairly Poor, Poor, N/A.
- **Strategic significance**: Formally identified in local strategy, Location ecologically desirable but not formally identified, Area/compensation not in local strategy or no local strategy.
- **Trading rules**:
  - Like-for-like or like-for-better: Losses of habitats of higher distinctiveness must be compensated with habitats of the same or higher distinctiveness within the same broad habitat type.
  - No trading down: Cannot compensate for loss of high-distinctiveness habitat with creation of low-distinctiveness habitat.
  - Irreplaceable habitats: Ancient woodland, ancient/veteran trees, blanket bog, limestone pavement, and certain other habitats cannot be accounted for through the metric and require bespoke assessment.
- **Hierarchy of delivery**: On-site provision (preferred) > off-site within the LPA area > off-site elsewhere > statutory biodiversity credits (last resort).

### Small Sites Metric (SSM)
- Simplified version of the DEFRA Metric for minor developments (1-9 dwellings, site area below 1 hectare for residential, below 0.5 hectares for commercial).
- Uses a proportionate approach with reduced data requirements.

### Other Key References
- **CIEEM Biodiversity Net Gain Report and Audit Templates (2023)**: Industry-standard reporting templates.
- **CIEEM Guidelines for Ecological Impact Assessment in the UK and Ireland (2018, updated 2022)**.
- **BS 42020:2013 Biodiversity -- Code of practice for planning and development**.
- **Natural England Biodiversity Metric 4.0 User Guide**: Technical guidance for metric application.
- **Natural England Biodiversity Metric 4.0 Condition Assessment Sheets**: Habitat-specific condition criteria.
- **Planning Advisory Service (PAS) BNG Toolkit**: LPA guidance on BNG processes.
- **Conservation Covenants (Part 7 of the Environment Act 2021)**: Mechanism for securing off-site gains.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the BNG Assessment and the statutory requirement (Environment Act 2021, Schedule 7A TCPA 1990).
- Identify the site by full postal address, grid reference, and site area (hectares).
- Summarise the proposed development.
- State whether the mandatory BNG condition applies (confirm not exempt).
- State whether the full DEFRA Metric 4.0 or the Small Sites Metric is used, with justification.
- State the qualifications of the assessor (or "[PREPARED FOR REVIEW BY A SUITABLY QUALIFIED ECOLOGIST (MCIEEM)]").
- Note any limitations (e.g., seasonal constraints on condition assessments, access limitations).
- Outline the document structure.

### 2. Policy and Legislative Framework (400-800 words)
- Set out the Environment Act 2021 requirements: Section 98, Schedule 7A, the 10% minimum net gain, 30-year management period, Biodiversity Gain Plan, and the gain site register.
- Set out the NPPF paragraphs (174(d), 179, 180) supporting biodiversity net gain.
- Reference the DEFRA Biodiversity Metric 4.0 as the statutory metric.
- Set out the metric trading rules and the hierarchy of delivery (on-site > off-site > credits).
- Identify the relevant local plan biodiversity and BNG policies and any local BNG targets (some LPAs require more than 10%).
- Reference any local Nature Recovery Strategy (where published) and how it informs strategic significance scoring.
- Note any adopted local BNG SPD or guidance.
- Reference conservation covenants and S106/planning conditions as securing mechanisms.

### 3. Baseline Habitat Survey (600-1200 words)
#### 3.1 Survey Methodology
- Describe the habitat survey methodology:
  - Reference the DEFRA Metric 4.0 Condition Assessment Sheets.
  - Survey date, surveyor name and qualifications.
  - Phase 1 Habitat Survey (JNCC methodology) with UKHab classification mapping.
  - UKHab habitat classification system (as required by the DEFRA Metric).
  - Condition assessment for each habitat parcel using the metric's condition criteria.
  - Hedgerow survey: length (km), species composition, condition.
  - Watercourse survey: length (km), type, condition (where applicable).
- State the optimal survey season (April-September for most habitats) and note any limitations.
- If field survey data has not been provided, flag as "[BASELINE HABITAT SURVEY DATA REQUIRED -- TO BE UNDERTAKEN BY A QUALIFIED ECOLOGIST DURING THE OPTIMAL SURVEY SEASON]".

#### 3.2 Baseline Habitat Description
- Describe each habitat parcel present on site:
  - UKHab habitat type and DEFRA Metric habitat code.
  - Area (hectares) measured from the site plan.
  - Condition assessment result (Good, Fairly Good, Moderate, Fairly Poor, Poor) with justification by reference to the condition criteria.
  - Strategic significance: reference the local Nature Recovery Strategy or local ecological network mapping.
- Present the baseline habitats in a table: Parcel ID, UKHab Type, Metric Code, Area (ha), Distinctiveness, Condition, Strategic Significance.
- Describe baseline hedgerows: length, species composition, condition.
- Describe baseline watercourses: length, type, condition.
- Note any irreplaceable habitats (ancient woodland, veteran trees) and confirm they are excluded from the metric calculation.

### 4. DEFRA Metric Calculation (600-1200 words)
#### 4.1 Baseline Biodiversity Value
- Present the baseline biodiversity units calculation:
  - Area-based habitat units: summarise the total baseline habitat units from the metric spreadsheet.
  - Hedgerow units: total baseline hedgerow units.
  - Watercourse units: total baseline watercourse units (where applicable).
- Present the calculation in a summary table: Habitat Type, Area, Distinctiveness, Condition, Strategic Significance, Biodiversity Units.

#### 4.2 Post-Development Biodiversity Value
- Describe the proposed post-development habitat plan:
  - Retained habitats: type, area, and any condition change.
  - Enhanced habitats: type, area, target condition, and enhancement measures.
  - Created habitats: type, area, target condition, and creation methodology.
  - Retained and enhanced hedgerows: length, target condition.
  - Created hedgerows: length, species mix, target condition.
  - Retained and enhanced watercourses: length, target condition.
- Present the post-development biodiversity units in a table: Habitat Type, Area, Distinctiveness, Target Condition, Strategic Significance, Temporal Multiplier, Spatial Multiplier, Difficulty Multiplier, Biodiversity Units.
- Note the temporal multiplier (reflecting time to reach target condition -- shorter is better) and the difficulty multiplier (reflecting the ease or difficulty of habitat creation).

#### 4.3 Net Change and Trading Rules
- Calculate the net change in biodiversity units:
  - Area-based habitat units: post-development units minus baseline units = net change (units and %).
  - Hedgerow units: post-development units minus baseline units = net change (units and %).
  - Watercourse units: post-development units minus baseline units = net change (units and %).
- Confirm that the net change achieves a minimum 10% net gain for each unit type (area, hedgerow, watercourse).
- Apply the trading rules:
  - Confirm that losses of Very High and High distinctiveness habitats are compensated like-for-like or like-for-better.
  - Confirm that Medium distinctiveness losses are compensated with Medium or higher habitats.
  - Confirm that the metric trading rules are satisfied (check the metric spreadsheet summary).
- If the 10% target is not achieved on-site, describe the off-site strategy or statutory credits.

### 5. Habitat Enhancement Strategy (500-1000 words)
#### 5.1 On-Site Habitat Creation and Enhancement
- Describe each proposed habitat creation or enhancement measure in detail:
  - Habitat type (UKHab classification).
  - Location on the site (reference the habitat plan drawing).
  - Area (hectares) or length (km for hedgerows).
  - Creation or enhancement methodology: soil preparation, seed mix (specify species composition and source -- locally sourced native seed), planting specification (species, sizes, densities), hydrological management, and initial establishment care.
  - Target condition and the estimated time to achieve target condition.
- Address each habitat type separately: grassland, woodland, scrub, hedgerow, pond, watercourse, green roof, etc.

#### 5.2 Off-Site Habitat Provision (if required)
- If on-site provision alone does not achieve the 10% net gain, describe the off-site strategy:
  - Location of the off-site land (within or outside the LPA area -- preference for within).
  - Habitat type and area/length.
  - Securing mechanism: S106 obligation, conservation covenant, or biodiversity gain site registration.
  - Describe the Biodiversity Gain Site Register process (where applicable).
- If statutory biodiversity credits are proposed as a last resort, explain why on-site and off-site provision are not achievable and state the number of credits required and their estimated cost.

### 6. 30-Year Management Plan (500-1000 words)
#### 6.1 Management Objectives
- Set out the overarching management objective: to maintain and improve created and enhanced habitats to achieve and sustain the target condition over a minimum 30-year period.
- List habitat-specific management objectives linked to the DEFRA Metric condition criteria.

#### 6.2 Management Prescriptions
- For each habitat type, provide detailed management prescriptions:
  - **Grassland**: Cutting regime (frequency, timing, method), arisings removal, overseeding if establishment is poor, grazing regime (if applicable).
  - **Woodland/tree planting**: Formative pruning, thinning, protection (guards, fencing), replacement of failures (within 5 years), understorey management.
  - **Hedgerows**: Cutting regime (frequency, timing -- cut no more than annually; ideally every 2-3 years on rotation), laying/coppicing cycle, gapping-up, base enrichment.
  - **Ponds/wetlands**: Water level management, silt removal (infrequent), marginal and emergent vegetation management, control of invasive species.
  - **Green roofs**: Substrate maintenance, planting replacement, drainage checks.
  - **Scrub**: Management to prevent succession or maintain as open mosaic.
- Include management calendar showing activities by month/season.

#### 6.3 Management Responsibilities
- Identify the management body: developer during establishment period, then transfer to management company, local authority, wildlife trust, or private landowner.
- Describe the funding mechanism: management company service charges, commuted sum, endowment.
- Describe the legal securing mechanism: S106 obligation, conservation covenant, condition.

### 7. Monitoring and Reporting (400-800 words)
#### 7.1 Monitoring Programme
- Set out the monitoring frequency:
  - Years 1, 2, 3, 5, 10, 15, 20, 25, 30 as a minimum (more frequent in the first 5 years during habitat establishment).
- Describe the monitoring methodology for each habitat type:
  - Habitat condition assessment using the DEFRA Metric condition criteria.
  - Fixed-point photography.
  - Quadrat surveys for grassland condition (species richness, indicator species).
  - Tree and hedgerow survival counts and condition assessment.
  - Pond condition assessment (water quality, aquatic plants, amphibian use).
  - Invasive species monitoring.
- Reference the CIEEM monitoring guidelines.

#### 7.2 Reporting and Adaptive Management
- Describe the reporting requirements: monitoring reports submitted to the LPA at specified intervals.
- Set out the adaptive management framework:
  - Trigger points for remedial action (e.g., if habitat condition falls below the target, if establishment rates are below 80%).
  - Remedial measures: reseeding, replanting, altered management regimes, additional habitat creation.
  - Escalation procedure: notification to LPA, revised management plan, additional monitoring.
- Describe the role of ecological monitoring by a qualified ecologist (MCIEEM).

### 8. Conclusion (300-500 words)
- Summarise the baseline biodiversity value in habitat units, hedgerow units, and watercourse units.
- Summarise the post-development biodiversity value.
- State the net change in biodiversity units and the percentage gain for each unit type.
- Confirm that the minimum 10% net gain is achieved (or explain how it will be achieved through off-site provision/credits).
- Confirm that the trading rules are satisfied.
- Confirm that a 30-year Habitat Management and Monitoring Plan is provided.
- Confirm that gains will be secured through a Biodiversity Gain Plan, S106 obligation, and/or conservation covenant.
- Confirm compliance with the Environment Act 2021, NPPF Paragraphs 174(d), 179, 180, and relevant local policies.
- Recommend planning conditions: Biodiversity Gain Plan, LEMP, habitat management and monitoring, habitat creation details.

## Quality Standards

- Reference the Environment Act 2021 (Section 98, Schedule 7A) accurately.
- Reference specific NPPF paragraphs (174(d), 179, 180) by number.
- Reference the DEFRA Biodiversity Metric 4.0 by its correct name and version.
- Use UKHab habitat classification terminology correctly.
- Apply the metric trading rules accurately (like-for-like, no trading down).
- State the hierarchy of delivery (on-site > off-site > credits).
- Present biodiversity unit calculations in tables with all metric parameters.
- Provide specific management prescriptions for each habitat type (not generic guidance).
- Include a monitoring programme with frequencies and methodology.
- Clearly distinguish between field survey data and desk-based estimates.
- Where baseline survey data has not been provided, clearly flag as required with optimal survey timing.
- Do not fabricate habitat condition assessments, biodiversity unit calculations, or survey data.
- Use correct ecological and BNG terminology: biodiversity units, hedgerow units, watercourse units, distinctiveness, condition, strategic significance, temporal multiplier, spatial multiplier, difficulty multiplier, HMMP, LEMP.`;

export const BNG_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, statutory requirement, site identification, metric version, and document structure.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the BNG Assessment purpose and Environment Act 2021 requirement. Identify the site by address, grid reference, and area. Summarise the proposed development. Confirm the mandatory BNG condition applies. State whether the full Metric 4.0 or SSM is used. State qualifications. Note limitations. Outline the document structure.',
  },
  {
    name: 'Policy and Legislative Framework',
    description: 'Environment Act 2021, NPPF, DEFRA Metric, trading rules, hierarchy, and local policies.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out Environment Act 2021 Section 98 and Schedule 7A. Set out NPPF Paragraphs 174(d), 179, 180. Reference DEFRA Metric 4.0. Describe trading rules and delivery hierarchy. Identify local plan BNG policies and any targets above 10%. Reference the Nature Recovery Strategy. Note securing mechanisms.',
  },
  {
    name: 'Baseline Habitat Survey',
    description: 'Survey methodology, UKHab habitat mapping, condition assessment, and baseline habitat description.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Describe survey methodology: UKHab classification, condition assessment using DEFRA Metric condition sheets, survey date, surveyor, season. Describe each habitat parcel: type, area, condition, strategic significance. Present in a table. Describe hedgerows and watercourses. Note irreplaceable habitats. Flag if survey data is not available.',
    subsections: [
      {
        name: 'Survey Methodology',
        description: 'Habitat survey and condition assessment methodology.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance: 'Describe UKHab classification, DEFRA Metric condition sheets, survey timing, surveyor qualifications, limitations.',
      },
      {
        name: 'Baseline Habitat Description',
        description: 'Description and tabulation of all habitat parcels, hedgerows, and watercourses.',
        required: true,
        min_words: 300,
        max_words: 750,
        guidance: 'Describe each parcel: UKHab type, area, condition (with justification), strategic significance. Present in a table. Include hedgerows and watercourses.',
      },
    ],
  },
  {
    name: 'DEFRA Metric Calculation',
    description: 'Baseline units, post-development units, net change, and trading rules compliance.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Present baseline biodiversity units (area, hedgerow, watercourse) in tables. Describe the post-development habitat plan: retained, enhanced, and created habitats with target conditions. Present post-development units with temporal, spatial, and difficulty multipliers. Calculate net change and percentage gain. Confirm trading rules compliance.',
    subsections: [
      {
        name: 'Baseline Biodiversity Value',
        description: 'Total baseline habitat, hedgerow, and watercourse units.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Present baseline calculation in a summary table with all metric parameters. State total baseline units.',
      },
      {
        name: 'Post-Development Biodiversity Value',
        description: 'Retained, enhanced, and created habitats with post-development units.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Describe post-development habitats. Present units in a table with multipliers. State total post-development units.',
      },
      {
        name: 'Net Change and Trading Rules',
        description: 'Net change calculation, percentage gain, and trading rules compliance.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Calculate net change for area, hedgerow, and watercourse units. State percentage gain. Confirm minimum 10% achieved. Confirm trading rules satisfied.',
      },
    ],
  },
  {
    name: 'Habitat Enhancement Strategy',
    description: 'Detailed on-site and off-site habitat creation and enhancement measures.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe each habitat creation/enhancement measure: UKHab type, location, area/length, methodology (soil preparation, seed mix, planting spec), target condition, time to target. Address each habitat type separately. If off-site provision is required, describe the location, securing mechanism, and gain site registration. Describe statutory credits if proposed as last resort.',
    subsections: [
      {
        name: 'On-Site Habitat Creation and Enhancement',
        description: 'Detailed measures for on-site habitat delivery.',
        required: true,
        min_words: 300,
        max_words: 700,
        guidance: 'Describe each habitat measure: type, location, area, methodology, seed mix/planting spec, target condition, establishment timeline.',
      },
      {
        name: 'Off-Site Habitat Provision',
        description: 'Off-site provision where on-site delivery is insufficient.',
        required: false,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe off-site location, habitat type, area, securing mechanism (S106, conservation covenant, gain site registration). Explain why on-site is insufficient.',
      },
    ],
  },
  {
    name: '30-Year Management Plan',
    description: 'Management objectives, prescriptions for each habitat type, responsibilities, and funding.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Set out overarching management objectives. Provide habitat-specific prescriptions: grassland cutting, woodland thinning, hedgerow cutting regime, pond management, green roof maintenance. Include a management calendar. Identify the management body and funding mechanism. Describe the legal securing mechanism.',
    subsections: [
      {
        name: 'Management Objectives',
        description: 'Overarching and habitat-specific management objectives.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'State the overarching 30-year objective. List habitat-specific objectives linked to DEFRA Metric condition criteria.',
      },
      {
        name: 'Management Prescriptions',
        description: 'Detailed management prescriptions for each habitat type.',
        required: true,
        min_words: 250,
        max_words: 550,
        guidance: 'Describe grassland, woodland, hedgerow, pond, scrub management regimes with frequency, timing, and methods.',
      },
      {
        name: 'Management Responsibilities',
        description: 'Management body, funding, and legal securing mechanisms.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Identify manager (developer, management company, wildlife trust). Describe funding (service charges, endowment). Describe legal mechanism (S106, conservation covenant).',
      },
    ],
  },
  {
    name: 'Monitoring and Reporting',
    description: 'Monitoring programme, methodology, reporting frequency, and adaptive management framework.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out monitoring frequency (Years 1, 2, 3, 5, 10, 15, 20, 25, 30). Describe methodology: condition assessment, fixed-point photography, quadrat surveys, survival counts. Describe reporting requirements. Set out adaptive management framework: trigger points, remedial measures, escalation. Reference CIEEM monitoring guidelines.',
    subsections: [
      {
        name: 'Monitoring Programme',
        description: 'Monitoring frequency and methodology for each habitat type.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance: 'State monitoring years. Describe methodology per habitat type: condition assessment, photography, quadrats, survival counts.',
      },
      {
        name: 'Reporting and Adaptive Management',
        description: 'Reporting to LPA, trigger points, remedial measures, and escalation.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe reporting intervals and content. Set trigger points for remedial action. Describe remedial measures and escalation procedures.',
      },
    ],
  },
  {
    name: 'Conclusion',
    description: 'Summary of baseline, net change, trading rules compliance, management plan, and policy compliance.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise baseline and post-development biodiversity units. State net change and percentage gain. Confirm 10% minimum achieved. Confirm trading rules satisfied. Confirm 30-year HMMP provided. Confirm securing mechanism. Confirm Environment Act 2021 and NPPF compliance. Recommend conditions.',
  },
];

export const BNG_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy and Legislative Framework',
    'Baseline Habitat Survey',
    'DEFRA Metric Calculation',
    'Habitat Enhancement Strategy',
    '30-Year Management Plan',
    'Monitoring and Reporting',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const BNG_TEMPLATE = {
  assessment_type: 'Biodiversity Net Gain Assessment',
  short_name: 'BNG',
  version: 1,
  sections: BNG_SECTIONS,
  quality_criteria: BNG_QUALITY,
};
