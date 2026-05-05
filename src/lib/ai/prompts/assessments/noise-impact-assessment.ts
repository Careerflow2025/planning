import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Noise Impact Assessment (NIA) -- required for developments that may generate
 * significant noise (e.g., commercial, industrial, entertainment, transport
 * infrastructure) or that introduce noise-sensitive receptors (e.g., residential)
 * into areas affected by existing noise sources such as roads, railways,
 * industrial premises, or commercial activities.
 *
 * The NIA follows the methodology set out in BS 4142:2014+A1:2019 (for
 * commercial/industrial noise), BS 8233:2014 (for internal ambient noise in
 * buildings), ProPG: Planning and Noise (for new residential near transport
 * sources), and WHO Environmental Noise Guidelines.
 */

export const NIA_PROMPT = `You are preparing a Noise Impact Assessment (NIA) to accompany a planning application submitted to a local planning authority in England. The NIA should read as though prepared by a competent acoustics consultant (Member of the Institute of Acoustics or equivalent) with experience of planning-related noise assessments.

## Document Purpose

A Noise Impact Assessment is required to evaluate the noise and vibration impacts of a proposed development and to demonstrate that:
1. Existing noise-sensitive receptors will not be subjected to unacceptable noise levels as a result of the proposed development.
2. Where the development introduces new noise-sensitive receptors (e.g., residential uses), future occupants will enjoy acceptable internal and external noise conditions.
3. Vibration impacts are assessed where relevant (e.g., proximity to railways, industrial processes, or construction activities).
4. Appropriate mitigation measures are proposed to achieve acceptable noise conditions.
5. The development accords with national and local noise policy.

## Key Policy, Standards, and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174(e)**: Planning policies and decisions should contribute to and enhance the natural and local environment by preventing new and existing development from contributing to, being put at unacceptable risk from, or being adversely affected by, unacceptable levels of soil, air, water, or noise pollution or land instability.
- **Paragraph 185**: Planning policies and decisions should also ensure that new development is appropriate for its location taking into account the likely effects (including cumulative effects) of pollution on health, living conditions and the natural environment, as well as the potential sensitivity of the site or the wider area to impacts that could arise from the development. In doing so they should: (a) mitigate and reduce to a minimum potential adverse impacts resulting from noise from new development -- and avoid noise giving rise to significant adverse impacts on health and the quality of life; (b) identify and protect tranquil areas which have remained relatively undisturbed by noise and are prized for their recreational and amenity value for this reason.
- **Paragraph 187**: Planning policies and decisions should ensure that new development is appropriate for its location taking into account the likely effects (including cumulative effects) of pollution on health, living conditions and the natural environment.

### Noise Policy Statement for England (NPSE, 2010)
The overarching policy framework. Establishes three concepts:
- **NOEL (No Observed Effect Level)**: The level below which no effect can be detected. Below this level, no measures are necessary.
- **LOAEL (Lowest Observed Adverse Effect Level)**: The level above which adverse effects on health and quality of life can be detected. Above this level, measures should be taken to mitigate and minimise effects.
- **SOAEL (Significant Observed Adverse Effect Level)**: The level above which significant adverse effects on health and quality of life occur. Above this level, effects should be avoided.

### Planning Practice Guidance: Noise (PPG-Noise, 2019)
- Provides a table summarising effect levels and the resulting actions:
  - Below NOEL: No specific measures required.
  - Above NOEL, below LOAEL: No specific measures required, but consider good acoustic design.
  - Above LOAEL, below SOAEL: Mitigate and reduce to a minimum.
  - Above SOAEL: Avoid. Where development is considered necessary, ensure effective mitigation to avoid significant adverse effects.
- Provides guidance on noise exposure hierarchy and considerations for plan-making and decision-taking.

### British Standards
- **BS 8233:2014 Guidance on sound insulation and noise reduction for buildings**: Internal ambient noise level criteria for residential uses:
  - Living rooms: 35 dB LAeq,16hr (daytime, 07:00-23:00).
  - Bedrooms: 30 dB LAeq,8hr (night-time, 23:00-07:00).
  - Bedrooms: 45 dB LAFmax (night-time, for individual noise events -- not to be regularly exceeded; approximately 10-15 events per night is considered reasonable).
  - External amenity areas (gardens, balconies): 50-55 dB LAeq,T is desirable; up to 55 dB LAeq,T is acceptable in noisier environments.
- **BS 4142:2014+A1:2019 Methods for rating and assessing industrial and commercial sound**: Used to assess the impact of industrial/commercial noise sources on residential receptors:
  - Rating level = specific sound level + character corrections (tonality, impulsivity, intermittency, other features: each typically +2 to +6 dB).
  - Assessment: Rating level minus background sound level:
    - Difference of +10 dB or more: indication of significant adverse impact.
    - Difference of +5 dB: indication of adverse impact.
    - Difference of 0 dB or below: indication of low impact (depending on context).
  - Context is critical: absolute levels, existing soundscape, duration, and receptor sensitivity.
- **BS 5228-1:2009+A1:2014 Code of practice for noise and vibration control on construction and open sites -- Part 1: Noise**: Prediction of construction noise levels using the ABC method or the 5 dB(A) change method.
- **BS 5228-2:2009+A1:2014 Code of practice for noise and vibration control on construction and open sites -- Part 2: Vibration**: Guidance on vibration from construction activities, including vibration dose values (VDVs) and peak particle velocity (PPV) thresholds.
- **BS 6472-1:2008 Guide to evaluation of human exposure to vibration in buildings -- Part 1: Vibration sources other than blasting**: Vibration dose value criteria for residential and commercial receptors.

### ProPG: Planning and Noise -- Professional Practice Guidance on Planning and Noise (2017)
- Guidance specifically for new residential development near existing noise sources (transport).
- Two-stage process:
  - Stage 1: Initial noise risk assessment based on transport noise levels.
    - Negligible risk: LAeq,16hr <50 dB and LAeq,8hr <40 dB (facades).
    - Low risk: LAeq,16hr 50-63 dB and LAeq,8hr 40-55 dB.
    - Medium risk: LAeq,16hr 63-69 dB and LAeq,8hr 55-60 dB.
    - High risk: LAeq,16hr >69 dB and LAeq,8hr >60 dB.
  - Stage 2: Full assessment considering good acoustic design, internal noise levels, external amenity, and other considerations (e.g., overheating risk with windows closed).
- Emphasises that acoustic design should not rely solely on closed windows and mechanical ventilation; a hierarchy of measures should be applied.

### WHO Environmental Noise Guidelines for the European Region (2018)
- Road traffic noise: strongly recommends reducing noise levels below 53 dB Lden (day-evening-night) and 45 dB Lnight.
- Railway noise: strongly recommends reducing noise levels below 54 dB Lden and 44 dB Lnight.
- Aircraft noise: strongly recommends reducing noise levels below 45 dB Lden and 40 dB Lnight.
- Note: These guidelines are not adopted as UK policy but are material considerations.

### Other Key References
- **Association of Noise Consultants (ANC) Good Practice Guide**: Measurement of sound insulation.
- **Calculation of Road Traffic Noise (CRTN, 1988)**: Method for predicting road traffic noise levels (with corrections for modern conditions).
- **Calculation of Railway Noise (CRN, 1995)**: Method for predicting railway noise levels.
- **IOA Good Practice Guide on the Control of Noise from Pubs and Clubs (2003)**: For entertainment noise assessments.
- **The Design Manual for Roads and Bridges (DMRB) LA 111**: Noise and vibration assessment for road schemes.
- **Local plan noise policies and SPDs**: Authority-specific requirements and thresholds.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the Noise Impact Assessment and its policy basis (NPPF Paragraphs 174(e) and 185).
- Identify the site by full postal address and grid reference.
- Summarise the proposed development.
- Identify the key noise issues: noise from the development affecting existing receptors, and/or noise from existing sources affecting proposed receptors.
- State the qualifications of the author (or "[PREPARED BY A COMPETENT ACOUSTICS PROFESSIONAL (MIOA OR EQUIVALENT)]").
- State any limitations of the assessment.
- Outline the document structure.

### 2. Policy and Standards (500-1000 words)
- Set out the NPPF paragraphs (174(e), 185, 187) with a summary of each.
- Set out the Noise Policy Statement for England (NPSE) and the NOEL/LOAEL/SOAEL framework.
- Summarise the PPG-Noise effect level table and the required actions at each level.
- Set out the relevant British Standards:
  - BS 8233:2014: Internal noise level criteria (living rooms, bedrooms, external amenity).
  - BS 4142:2014+A1:2019: Industrial/commercial noise rating methodology (where applicable).
  - BS 5228-1 and BS 5228-2: Construction noise and vibration (where applicable).
  - BS 6472-1:2008: Vibration in buildings (where applicable).
- Summarise ProPG (where the development introduces residential uses near transport noise sources):
  - Stage 1 risk categories.
  - Stage 2 assessment process.
- Reference WHO 2018 guidelines and note their status as material considerations.
- Identify the relevant local plan noise policies and quote the key requirements.

### 3. Baseline Noise Survey (600-1200 words)
#### 3.1 Survey Methodology
- Describe the noise survey methodology:
  - Survey dates and times (covering representative weekday and weekend periods).
  - Measurement positions (referenced to a plan/map).
  - Equipment used: sound level meter make, model, and serial number; calibrator make and model; microphone windshield.
  - Equipment calibration: field calibration before and after each measurement session, with drift noted.
  - Measurement parameters: LAeq, LA90, LA10, LAFmax, and 1/3 octave spectra where relevant.
  - Measurement duration: short-term (minimum 15-minute attended) and/or long-term (minimum 24-hour unattended continuous monitoring).
  - Weather conditions during the survey: wind speed (<5m/s for valid data), rainfall (no measurement during rain), temperature.
  - Measurement height: 1.2-1.5m above ground level (free-field) or at facade height as appropriate.
- Note whether the survey data has been provided by the user. If not, flag as "[NOISE SURVEY DATA REQUIRED -- A SURVEY BY A COMPETENT ACOUSTICS CONSULTANT IS ESSENTIAL]".

#### 3.2 Survey Results
- Present the measured noise levels at each monitoring position:
  - Daytime (07:00-23:00): LAeq,16hr, LA90, LA10.
  - Night-time (23:00-07:00): LAeq,8hr, LA90, LAFmax (number of events exceeding 60 dB LAFmax).
  - If measured during shorter periods, state the measurement duration and any extrapolation methodology.
- Describe the dominant noise sources at each position (road traffic, rail, aviation, industrial, commercial, natural).
- Identify the prevailing background sound level (LA90) for use in BS 4142 assessments (where applicable).
- Present results in tables and, where available, time-history plots.
- If survey data has not been provided, present estimated noise levels based on CRTN/CRN predictions or other available data and flag: "[ESTIMATED VALUES -- TO BE CONFIRMED BY NOISE SURVEY]".

### 4. Assessment Methodology (400-800 words)
- Describe the assessment methodology used for each noise issue:

#### 4.1 Noise from Existing Sources Affecting Proposed Development
- Apply ProPG Stage 1 initial risk assessment using the measured or predicted facade noise levels.
- Apply BS 8233:2014 internal noise level criteria.
- Set out the required sound insulation performance to achieve the BS 8233 criteria (expressed as Rw + Ctr values for the building envelope, or specific glazing and ventilation specifications).
- Address external amenity areas with reference to the BS 8233 guideline value of 50-55 dB LAeq,T.
- Address overheating risk: demonstrate that the scheme can achieve acceptable thermal comfort without relying on opening windows in rooms exposed to high noise levels.

#### 4.2 Noise from the Proposed Development Affecting Existing Receptors
- For plant and mechanical services: Apply BS 4142:2014+A1:2019 rating level methodology.
- For traffic noise from the development: Apply CRTN methodology or DMRB LA 111 for road noise changes.
- For commercial/entertainment noise: Apply appropriate assessment criteria (IOA Good Practice Guide, local authority conditions).

#### 4.3 Construction Noise and Vibration
- Apply BS 5228-1 (noise) and BS 5228-2 (vibration) for the construction phase assessment.
- State the construction noise threshold: typically the ABC method from BS 5228-1 or the 5 dB(A) change criterion.
- State vibration thresholds from BS 6472-1 (VDV) and BS 5228-2 (PPV).

### 5. Noise Impact Assessment (800-1500 words)
#### 5.1 Noise from Existing Sources Affecting Proposed Receptors
- Present the ProPG Stage 1 noise risk category for the site.
- Calculate the required building envelope sound insulation (Rw + Ctr) for each facade and each room type to achieve BS 8233 internal levels.
- Specify the glazing and ventilation requirements (e.g., acoustic glazing specification, trickle ventilators, MVHR system).
- Assess external amenity areas: predict noise levels in proposed gardens, balconies, and communal spaces. Apply the BS 8233 guideline.
- Address overheating: describe how acoustic design is integrated with thermal comfort (e.g., acoustic louvres, alternative ventilation, MVHR with summer bypass).
- Apply the NPSE/PPG-Noise effect level framework: determine whether the proposed mitigation achieves conditions below SOAEL, and ideally below LOAEL.

#### 5.2 Noise from the Proposed Development Affecting Existing Receptors
- For plant/mechanical services:
  - Identify the plant items and their source noise levels (dB LWA or dB LpA at 1m).
  - Calculate the specific sound level at the nearest noise-sensitive receptors (using distance attenuation, screening, reflection corrections).
  - Apply character corrections (tonality, impulsivity, intermittency, other features) to derive the rating level.
  - Compare the rating level with the representative background sound level (LA90).
  - Determine the BS 4142 impact assessment: significant adverse impact / adverse impact / low impact.
  - Where adverse impact is predicted, set out mitigation measures: plant selection, acoustic enclosures, attenuators, barriers, time-of-use restrictions.
- For traffic noise:
  - Calculate the change in road traffic noise levels on surrounding roads as a result of the development's traffic generation.
  - Apply the significance criteria (typically DMRB: negligible <1 dB, minor 1-3 dB, moderate 3-5 dB, major >5 dB).

#### 5.3 Construction Noise and Vibration
- Predict construction noise levels at the nearest sensitive receptors using BS 5228-1 methodology (plant list, duty cycles, distances).
- Compare with the BS 5228-1 threshold criteria (ABC method or 5 dB change).
- Predict construction vibration levels where relevant (e.g., piling, vibratory compaction) using BS 5228-2 methodology.
- Compare with BS 5228-2 PPV thresholds (cosmetic damage to buildings) and BS 6472-1 VDV thresholds (human perception and disturbance).
- Set out construction mitigation measures: best practicable means, hours of work, CEMP, noise and vibration monitoring.

### 6. Vibration Assessment (300-600 words)
- Assess vibration from operational sources where relevant:
  - Railways: predict vibration levels at the proposed development using empirical data or measurement (PPV and VDV).
  - Industrial plant: assess vibration transmission from nearby industrial processes.
  - Road traffic: assess ground-borne vibration from heavy vehicles on poor road surfaces.
- Compare with BS 6472-1:2008 VDV criteria for residential receptors:
  - Day (16hr): 0.2-0.4 m/s^1.75 (low probability of adverse comment), 0.4-0.8 (adverse comment possible), 0.8-1.6 (adverse comment probable).
  - Night (8hr): 0.1-0.2, 0.2-0.4, 0.4-0.8 respectively.
- Describe any vibration mitigation measures required: resilient track, vibration isolation pads, structural discontinuity.
- If vibration is not a relevant issue for the site, state this and provide brief justification.

### 7. Mitigation Measures (500-1000 words)
#### 7.1 Design and Layout Mitigation (Good Acoustic Design)
- Describe how the site layout has been designed to minimise noise exposure:
  - Barrier blocks or commercial buildings fronting noise sources.
  - Noise-sensitive rooms oriented away from noise sources.
  - Balconies and gardens located in acoustically shielded areas.
  - Acoustic barriers, fences, or bunds where required.
  - Buffer distances from noise sources.

#### 7.2 Building Envelope Specifications
- Present a glazing and ventilation specification table for each facade:
  - Glazing: acoustic rating (Rw, Rw + Ctr), typical specification (e.g., 6/16/6.4mm laminated).
  - Ventilation: trickle ventilator performance (Dn,e,w + Ctr), or MVHR system specification.
  - Demonstrate that BS 8233 internal levels are achieved with windows closed.
- Present the required external wall construction (where enhanced is needed).

#### 7.3 Plant Noise Mitigation
- For proposed mechanical plant:
  - Set noise emission limits derived from the BS 4142 assessment (e.g., "plant noise rating level shall not exceed the prevailing background sound level at the nearest noise-sensitive receptor").
  - Specify mitigation: acoustic enclosures, attenuators on intake/exhaust, anti-vibration mounts, acoustic screens/barriers.
  - Recommend a planning condition requiring a post-installation noise survey to verify compliance.

#### 7.4 External Amenity Areas
- Describe mitigation for external spaces: screening walls/fences (minimum 1.8m, acoustically solid), earth bunds, planting (noting that planting provides only visual screening, not significant acoustic attenuation), enclosed/semi-enclosed balconies, winter gardens.

#### 7.5 Construction Phase Mitigation
- Recommend a Construction Environmental Management Plan (CEMP) secured by planning condition.
- Set out best practicable means: hours of work restrictions (typically 08:00-18:00 Monday-Friday, 08:00-13:00 Saturday, no work Sunday/Bank Holidays), use of quiet plant, acoustic hoarding, vibration monitoring, community liaison.

### 8. Conclusion (300-600 words)
- Summarise the baseline noise environment.
- Summarise the noise impact assessment findings:
  - For noise affecting proposed receptors: confirm that BS 8233 internal levels are achievable with the specified mitigation. State the ProPG risk category and confirm appropriate design response.
  - For noise from the development: confirm BS 4142 assessment outcome and specify plant noise limits.
  - For construction: confirm that with CEMP measures, impacts are temporary and controlled.
  - For vibration: confirm compliance with BS 6472-1 criteria.
- Apply the NPSE/PPG-Noise framework: confirm that the development avoids significant adverse effects (above SOAEL) and mitigates/minimises adverse effects (above LOAEL).
- Confirm compliance with NPPF Paragraphs 174(e), 185, and 187 and relevant local noise policies.
- List recommended planning conditions: glazing/ventilation scheme, plant noise limits, CEMP, post-completion verification.
- Request that the Environmental Health Officer raise no objection.

## Quality Standards

- Reference specific NPPF paragraphs (174(e), 185, 187) by number.
- Reference the Noise Policy Statement for England and the NOEL/LOAEL/SOAEL framework.
- Reference the PPG-Noise effect level table.
- Reference BS 8233:2014 internal noise level criteria with specific dB values (35 dB LAeq,16hr living rooms, 30 dB LAeq,8hr bedrooms, 45 dB LAFmax, 50-55 dB LAeq,T external amenity).
- Reference BS 4142:2014+A1:2019 methodology (where applicable) with the significance threshold framework (+5 dB, +10 dB).
- Reference ProPG (where applicable) with Stage 1 risk categories.
- Reference BS 5228-1 and BS 5228-2 for construction noise and vibration (where applicable).
- Reference BS 6472-1:2008 for vibration criteria.
- Use correct acoustics terminology: LAeq, LA90, LA10, LAFmax, Rw, Ctr, dB, dB(A), VDV, PPV, SOAEL, LOAEL.
- Present noise data in tables with appropriate units and measurement parameters.
- Where noise survey data has not been provided, clearly flag as required.
- Do not fabricate noise measurement data or survey results.`;

export const NIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, key noise issues, qualifications, limitations, and document structure.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the NIA purpose and policy basis (NPPF Paragraphs 174(e), 185). Identify the site by address and grid reference. Summarise the proposed development. Identify key noise issues (noise from/to the development). State qualifications. Note limitations. Outline the document structure.',
  },
  {
    name: 'Policy and Standards',
    description: 'NPPF, NPSE, PPG-Noise, BS 8233, BS 4142, ProPG, WHO guidelines, and local policies.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Set out NPPF Paragraphs 174(e), 185, 187. Describe the NPSE NOEL/LOAEL/SOAEL framework. Summarise the PPG-Noise effect level table. Set out BS 8233:2014 criteria. Set out BS 4142:2014+A1:2019 methodology (if applicable). Summarise ProPG (if applicable). Reference WHO 2018 guidelines. Identify local plan noise policies.',
  },
  {
    name: 'Baseline Noise Survey',
    description: 'Survey methodology, equipment, measurement positions, and measured noise levels.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Describe survey methodology: dates, positions, equipment (make/model/serial), calibration, measurement parameters, duration, weather, height. Present measured noise levels: LAeq, LA90, LA10, LAFmax for daytime and night-time at each position. Describe dominant noise sources. Present data in tables. Flag if survey data is not available.',
    subsections: [
      {
        name: 'Survey Methodology',
        description: 'Equipment, positions, timing, parameters, and weather conditions.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'Describe equipment, calibration, positions (referenced to plan), timing, parameters, duration, weather, height.',
      },
      {
        name: 'Survey Results',
        description: 'Measured noise levels at each monitoring position.',
        required: true,
        min_words: 250,
        max_words: 700,
        guidance: 'Present LAeq, LA90, LA10, LAFmax for daytime and night-time. Describe dominant sources. Present in tables.',
      },
    ],
  },
  {
    name: 'Assessment Methodology',
    description: 'Methodologies for assessing noise from existing sources, development noise, and construction noise.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe ProPG Stage 1 risk assessment and BS 8233 criteria methodology for noise affecting proposed receptors. Describe BS 4142 methodology for development noise affecting existing receptors. Describe BS 5228-1/5228-2 methodology for construction noise and vibration. State assessment criteria and significance thresholds.',
    subsections: [
      {
        name: 'Noise from Existing Sources Affecting Proposed Development',
        description: 'ProPG and BS 8233 assessment methodology.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe ProPG Stage 1 risk categories. Set out BS 8233 internal criteria. Describe sound insulation calculation approach.',
      },
      {
        name: 'Noise from Proposed Development Affecting Existing Receptors',
        description: 'BS 4142 and traffic noise change methodology.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe BS 4142 rating level methodology. Describe traffic noise change assessment. State significance criteria.',
      },
      {
        name: 'Construction Noise and Vibration Methodology',
        description: 'BS 5228-1 and BS 5228-2 assessment approach.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe BS 5228-1 ABC method. Describe BS 5228-2 PPV thresholds. State BS 6472-1 VDV criteria.',
      },
    ],
  },
  {
    name: 'Noise Impact Assessment',
    description: 'Detailed assessment of noise impacts on proposed and existing receptors and from construction.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Present ProPG risk category. Calculate building envelope requirements. Specify glazing and ventilation. Assess external amenity. Address overheating. For development noise: calculate BS 4142 rating levels, compare with background, determine impact. For construction: predict noise levels using BS 5228-1, compare with thresholds.',
    subsections: [
      {
        name: 'Noise from Existing Sources Affecting Proposed Receptors',
        description: 'ProPG risk assessment, sound insulation, external amenity, and overheating.',
        required: true,
        min_words: 300,
        max_words: 600,
        guidance: 'State ProPG risk category. Calculate Rw + Ctr requirements. Specify glazing/ventilation. Assess external areas. Address overheating.',
      },
      {
        name: 'Noise from Proposed Development Affecting Existing Receptors',
        description: 'BS 4142 assessment for plant noise and traffic noise change.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Identify plant items and source levels. Calculate specific and rating levels. Compare with background. Determine impact. Assess traffic noise change.',
      },
      {
        name: 'Construction Noise and Vibration',
        description: 'Predicted construction noise and vibration levels and comparison with criteria.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Predict construction noise using BS 5228-1 (plant list, distances). Predict vibration using BS 5228-2. Compare with criteria. Set out mitigation.',
      },
    ],
  },
  {
    name: 'Vibration Assessment',
    description: 'Assessment of operational vibration from railways, industrial sources, or road traffic.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Assess vibration from operational sources: railways, industrial plant, road traffic. Predict PPV and VDV at proposed receptors. Compare with BS 6472-1 criteria. Describe mitigation if required. If vibration is not relevant, state this with brief justification.',
  },
  {
    name: 'Mitigation Measures',
    description: 'Acoustic design, building envelope, plant noise limits, external amenity, and construction mitigation.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe layout and design mitigation (barrier blocks, room orientation, buffers). Present glazing and ventilation specifications for each facade in a table. Set plant noise emission limits from BS 4142 assessment. Describe external amenity mitigation (screens, walls, enclosed balconies). Recommend CEMP with hours of work and best practicable means.',
    subsections: [
      {
        name: 'Design and Layout Mitigation',
        description: 'Good acoustic design principles applied to the site layout.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe barrier blocks, room orientation, buffer distances, acoustic barriers/bunds.',
      },
      {
        name: 'Building Envelope Specifications',
        description: 'Glazing, ventilation, and wall specifications for each facade.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Present glazing Rw + Ctr specifications, ventilation Dn,e,w + Ctr requirements, wall construction. Present in a table per facade.',
      },
      {
        name: 'Plant Noise Mitigation',
        description: 'Noise emission limits and control measures for mechanical plant.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Set noise limits derived from BS 4142. Specify enclosures, attenuators, anti-vibration mounts. Recommend post-installation verification.',
      },
      {
        name: 'External Amenity Areas',
        description: 'Mitigation for gardens, balconies, and communal spaces.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Describe screening walls, enclosed balconies, winter gardens. Reference BS 8233 guideline.',
      },
      {
        name: 'Construction Phase Mitigation',
        description: 'CEMP, hours of work, best practicable means, and monitoring.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Recommend CEMP condition. Set hours of work. Describe BPM, acoustic hoarding, vibration monitoring, community liaison.',
      },
    ],
  },
  {
    name: 'Conclusion',
    description: 'Summary of baseline, assessment findings, NPSE/PPG compliance, and recommended conditions.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise baseline noise environment. Summarise assessment findings for each noise issue. Apply the NPSE/PPG-Noise framework (avoid SOAEL, minimise above LOAEL). Confirm BS 8233, BS 4142, and ProPG compliance. Confirm NPPF Paragraphs 174(e), 185, 187 compliance. List recommended conditions. Request no objection from Environmental Health.',
  },
];

export const NIA_QUALITY: QualityCriteria = {
  min_policy_refs: 7,
  required_sections: [
    'Introduction',
    'Policy and Standards',
    'Baseline Noise Survey',
    'Assessment Methodology',
    'Noise Impact Assessment',
    'Vibration Assessment',
    'Mitigation Measures',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const NIA_TEMPLATE = {
  assessment_type: 'Noise Impact Assessment',
  short_name: 'NIA',
  version: 1,
  sections: NIA_SECTIONS,
  quality_criteria: NIA_QUALITY,
};
