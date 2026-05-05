import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Wind / Microclimate Assessment -- required for tall buildings and developments
 * that could alter the wind environment at pedestrian level, potentially causing
 * discomfort or safety concerns for pedestrians and users of outdoor amenity
 * spaces.
 *
 * AI Difficulty: Hard (20-50 pages). This assessment typically requires wind
 * tunnel testing or computational fluid dynamics (CFD) analysis by a specialist
 * wind engineering consultant.
 *
 * DISCLAIMER: This document is AI-generated and constitutes a draft framework only.
 * It MUST be reviewed, verified, and endorsed by a suitably qualified wind
 * engineering consultant before submission to the local planning authority.
 * Wind tunnel testing and CFD analysis require specialist facilities, software,
 * and expertise that cannot be replicated by AI.
 */

export const WMA_PROMPT = `You are preparing a Wind / Microclimate Assessment (also referred to as a Pedestrian Level Wind Assessment) to accompany a planning application submitted to a local planning authority in England. The assessment evaluates the wind conditions at pedestrian level around and within the proposed development and demonstrates that acceptable comfort and safety standards are achieved for the intended use of each area.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft framework only. It MUST be reviewed, verified, and endorsed by a suitably qualified wind engineering consultant (e.g., chartered engineer with wind engineering expertise, member of the UK Wind Engineering Society, or equivalent specialist) before submission to the local planning authority. Wind tunnel testing (boundary layer wind tunnel) and/or computational fluid dynamics (CFD) analysis require specialist equipment, validated software, and expert interpretation. The AI cannot conduct wind tunnel tests or CFD simulations and no wind speed data or comfort categorisation results should be fabricated.

## Document Purpose

The Wind / Microclimate Assessment must:
1. Assess the existing (baseline) wind conditions at pedestrian level around the application site.
2. Predict the wind conditions at pedestrian level around and within the proposed development, including ground-level thoroughfares, entrances, amenity spaces, balconies, and roof terraces.
3. Categorise each area according to the Lawson Comfort Criteria for the intended pedestrian use (sitting, standing, strolling, walking, uncomfortable).
4. Identify any areas where the wind conditions exceed the safety threshold (strong winds criterion).
5. Compare the baseline and proposed conditions to determine the impact of the development on the pedestrian wind environment.
6. Where comfort or safety exceedances are identified, propose wind mitigation measures and demonstrate their effectiveness.
7. Assess the cumulative wind effects of the proposed development in combination with other consented or planned developments.

## Key Policy and Guidance References

### Lawson Comfort Criteria
The Lawson Comfort Criteria (Lawson, T.V., 1978, updated in Lawson, 2001) are the industry-standard framework for assessing pedestrian-level wind comfort in the UK. The criteria categorise wind conditions based on the frequency of exceedance of threshold wind speeds (typically the mean hourly wind speed exceeded for a specified percentage of the time):

#### Comfort Categories (based on mean wind speed exceeded for a given percentage of time, typically 5% exceedance):
- **Sitting (Long-term)**: Suitable for outdoor seating areas where people will remain for extended periods (parks, cafes, residential gardens, balconies). Threshold: approximately 2.5 m/s (mean wind speed exceeded no more than 5% of the time). Equivalent Beaufort 2 or less for 95% of the time.
- **Standing (Short-term)**: Suitable for areas where people will stand for moderate periods (building entrances, bus stops, window shopping). Threshold: approximately 4.0 m/s exceeded no more than 5% of the time. Equivalent Beaufort 3.
- **Strolling (Leisure walking)**: Suitable for pedestrian areas where people walk at a leisurely pace (pedestrian streets, promenades, parks). Threshold: approximately 6.0 m/s exceeded no more than 5% of the time. Equivalent Beaufort 4.
- **Walking (Business walking)**: Suitable for areas where people walk briskly and purposefully (pavements on busy roads, car parks, open spaces adjacent to roads). Threshold: approximately 8.0 m/s exceeded no more than 5% of the time. Equivalent Beaufort 5.
- **Uncomfortable**: Wind conditions exceed the walking threshold and are uncomfortable for any pedestrian activity. Not suitable for regular pedestrian use.

#### Safety Criterion (Strong Winds):
- The safety threshold is typically defined as a mean hourly wind speed of 15 m/s exceeded for more than 0.025% of the time (approximately 2.2 hours per year), or a gust speed threshold.
- Alternative definitions: some assessors use a peak gust speed exceeded for a given frequency.
- Any location exceeding the safety threshold is unacceptable and requires mitigation regardless of the intended use.
- The safety criterion protects against the risk of pedestrians being knocked off balance, particularly vulnerable groups (elderly, disabled, children).

### City of London Wind Microclimate Guidelines (2019)
- Specific guidance for developments in the City of London (also widely referenced elsewhere).
- Key requirements:
  - Wind microclimate assessment required for buildings over 25m in height, or where the building is significantly taller than its surroundings.
  - Assessment should cover both the existing and proposed scenarios.
  - Results should be presented using the Lawson Comfort Criteria.
  - Mitigation measures should be proposed where conditions are unsuitable for the intended use.
  - Cumulative assessment should include consented schemes.
  - Verification of mitigation measures through retesting.

### NPPF and Design Policy
- **NPPF Paragraph 130(f)**: Developments should create places with a high standard of amenity for existing and future users.
- **NPPF Paragraph 131**: Planning policies and decisions should ensure that developments are sympathetic to local character and history, including the surrounding built environment and landscape setting, while not preventing or discouraging appropriate innovation or change.
- **London Plan Policy D3 (Optimising Site Capacity through the Design-Led Approach)**: Requires developments to respond to site context, including environmental conditions.
- **London Plan Policy D8 (Public Realm)**: Public realm should be comfortable, safe, and accessible.
- **London Plan Policy D9 (Tall Buildings)**: Tall buildings should not cause unacceptable harm to the comfort of people in the surrounding area, including pedestrian comfort.
- **Local plan design and amenity policies**: Authority-specific requirements on microclimate and amenity.

### Other Key References
- **BS EN 1991-1-4:2005 (Eurocode 1: Actions on Structures -- Wind Actions)**: Provides the wind loading standard for structural design but also contains relevant wind speed data (basic wind speed, terrain roughness categories, directional factors) used in pedestrian-level wind assessments.
- **Lawson, T.V. (1978) The Wind Content of the Built Environment. Journal of Wind Engineering and Industrial Aerodynamics, 3, 93-105.** Original paper defining the comfort criteria.
- **Lawson, T.V. (2001) Building Aerodynamics. Imperial College Press.** Updated and expanded comfort criteria and wind engineering principles.
- **Blocken, B. et al. (2016) Pedestrian-level wind conditions around buildings: Review of wind-tunnel and CFD techniques and their accuracy for wind comfort assessment.** Review of methodological approaches.
- **CIBSE AM11 Building Performance Modelling (2015)**: Guidance on CFD modelling for building services, including external airflow.
- **RWDI, ARUP, WSP, BMT and other specialist consultancies**: Providers of wind tunnel testing and CFD analysis services for planning applications.
- **Meteorological Office wind speed data**: Hourly wind speed and direction data from representative meteorological stations.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Wind / Microclimate Assessment and its policy basis.
- Identify the site by full postal address and grid reference.
- Summarise the proposed development: use, height, massing, tower elements, podium, public realm.
- State why a wind assessment is required: building height, relationship to surroundings, sensitive ground-level uses, outdoor amenity provision.
- Identify the intended pedestrian uses of the ground-level and elevated amenity areas:
  - Thoroughfares and pavements (walking/strolling).
  - Building entrances (standing).
  - Outdoor seating areas, cafes, restaurants (sitting).
  - Balconies, terraces, roof gardens (sitting/standing).
  - Children's play areas (sitting/standing).
  - Public open spaces and parks (sitting/strolling).
- State the qualifications of the author (or "[PREPARED BY A SPECIALIST WIND ENGINEERING CONSULTANT]").
- State any limitations of the assessment.
- Include the AI-generated disclaimer.

### 2. Policy Framework (400-700 words)
- Set out NPPF Paragraph 130(f) and other relevant design and amenity paragraphs.
- Describe the Lawson Comfort Criteria in detail:
  - Each comfort category (sitting, standing, strolling, walking, uncomfortable) with threshold wind speeds and intended pedestrian activities.
  - The safety criterion (strong winds) with threshold definition.
- Reference the City of London Wind Microclimate Guidelines (2019) or equivalent local authority guidance.
- Set out London Plan policies (D3, D8, D9) if in London, or equivalent local plan policies.
- Reference BS EN 1991-1-4 (Eurocode 1) for wind speed data.
- Reference any local authority supplementary planning guidance on microclimate and tall buildings.

### 3. Methodology (600-1200 words)
- Describe the wind assessment methodology:

#### 3.1 Approach
- Describe whether the assessment is based on:
  - **Wind tunnel testing** (boundary layer wind tunnel): describe the wind tunnel facility, scale of the model (typically 1:200 to 1:400), extent of the surrounding urban context modelled (typically 300-500m radius), number of measurement points, measurement technique (Irwin probes, hot-wire anemometers, or erosion technique).
  - **CFD (Computational Fluid Dynamics) analysis**: describe the CFD software used (e.g., ANSYS Fluent, OpenFOAM, Autodesk CFD, Star-CCM+), turbulence model (e.g., RANS k-epsilon, SST k-omega, LES), domain size, mesh resolution, boundary conditions, validation methodology.
  - **Desk-based qualitative assessment**: for smaller or less sensitive developments, a qualitative assessment of likely wind effects based on building form, orientation, and aerodynamic principles (channelling, corner acceleration, downwash, venturi effects, wake effects).
- Describe the scenarios assessed:
  - **Baseline (existing)**: Current site condition and surrounding buildings.
  - **Proposed (with development)**: Proposed development with surrounding buildings.
  - **Proposed with mitigation**: Proposed development with wind mitigation measures in place.
  - **Cumulative**: Proposed development with consented/planned cumulative schemes.

#### 3.2 Meteorological Data
- Describe the meteorological data used:
  - Source station: name, location, distance from site, data period (minimum 10-30 years).
  - Parameters: hourly mean wind speed and direction.
  - Wind rose: present the annual and seasonal wind roses for the site.
  - Prevailing wind direction: identify the dominant wind direction(s) (typically SW in England).
  - Adjustment factors: terrain roughness, topographic effects, directional frequency.
- Reference BS EN 1991-1-4 for basic wind speed data.

#### 3.3 Assessment Criteria
- Present the Lawson Comfort Criteria used:
  - Threshold wind speeds for each comfort category.
  - Exceedance probability (typically 5% of the time for comfort categories).
  - Safety criterion: define the strong winds threshold (e.g., mean hourly wind speed >15 m/s exceeded for >0.025% of time).
- Define how each location is categorised:
  - Desired comfort category based on intended use (e.g., sitting for outdoor cafes, standing for entrances, walking for pavements).
  - Actual comfort category from the assessment results.
  - Pass: actual category is equal to or better (calmer) than the desired category.
  - Fail: actual category is worse (windier) than the desired category.

#### 3.4 Measurement/Probe Locations
- Describe the locations where wind conditions have been assessed:
  - Ground-level points: thoroughfares, pavements, building entrances, public realm, car parks.
  - Elevated points: balconies, terraces, roof gardens, sky gardens.
  - Existing amenity areas: neighbouring gardens, parks, public spaces.
  - Present a measurement point location plan.
- If wind tunnel or CFD data has not been provided, flag: "[WIND TUNNEL TESTING OR CFD ANALYSIS TO BE CONDUCTED BY SPECIALIST WIND ENGINEERING CONSULTANT]".

### 4. Baseline Wind Conditions (400-800 words)
- Present the baseline (existing site) wind conditions:
  - Describe the existing wind environment around the site in qualitative terms: the current building context and its effect on wind patterns.
  - Present the baseline comfort categorisation at each measurement point.
  - Identify any existing areas of concern: exposed corners, channelled streets, open spaces.
  - Present wind speed contour plots or probe location results on a plan (reference appendix).
  - Present seasonal variation: windier conditions in winter, calmer in summer.
- Note that the baseline assessment provides the reference against which the impact of the proposed development is assessed.

### 5. Wind Tunnel / CFD Analysis (600-1200 words)
- Present the results of the wind tunnel testing or CFD analysis for the proposed development:

#### 5.1 Proposed Scenario (without mitigation)
- Present the comfort categorisation at each measurement point for the proposed scenario:
  - Tabulate: probe/point number, location description, intended use, desired comfort category, actual comfort category (annual and seasonal if available), pass/fail.
  - Identify all points where the actual comfort category is worse than the desired category.
  - Identify any safety exceedances.
  - Present wind speed contour plots for the proposed scenario.
- Describe the aerodynamic effects of the proposed development on the wind environment:
  - **Downwash**: Tall buildings deflect high-level winds downward to pedestrian level. Most significant effect for towers >6 storeys above surrounding buildings.
  - **Corner acceleration**: Wind accelerates around building corners. Most significant at the windward corners of tall buildings.
  - **Channelling (venturi effect)**: Wind speeds increase through gaps between buildings or along narrow streets.
  - **Wake effects**: Turbulent wake behind buildings can cause gusty, uncomfortable conditions.
  - **Podium effects**: Podium/base elements can redirect downwash but may create their own wind acceleration zones.
  - **Through-flow**: Wind passing through open passages, undercrofts, or colonnades at ground level.

#### 5.2 Proposed Scenario (with mitigation)
- Present the comfort categorisation with the proposed wind mitigation measures in place.
- Demonstrate that the mitigation measures resolve identified comfort and safety exceedances.
- Present comparison: without mitigation vs with mitigation.

### 6. Pedestrian Comfort Assessment (500-1000 words)
- Provide a detailed assessment of pedestrian comfort conditions for each area of the development:

#### 6.1 Building Entrances
- Assess wind conditions at all building entrances (residential, commercial, retail).
- Desired category: standing.
- Identify any entrances failing the standing criterion.
- Describe mitigation: entrance canopies, recessed entrances, revolving doors, wind screens.

#### 6.2 Pedestrian Thoroughfares
- Assess wind conditions on pavements, pedestrian routes, and crossings.
- Desired category: walking or strolling (depending on character).
- Identify any thoroughfares failing the criterion.
- Describe mitigation: landscaping, screens, canopies.

#### 6.3 Outdoor Amenity Areas
- Assess wind conditions in outdoor seating areas, cafes, restaurants, public realm.
- Desired category: sitting.
- Identify any amenity areas failing the sitting criterion.
- Describe mitigation: planting, screens, canopies, pergolas, wind baffles.

#### 6.4 Balconies and Terraces
- Assess wind conditions on private and communal balconies, terraces, and roof gardens.
- Desired category: sitting or standing (depending on intended use and exposure).
- Identify any elevated amenity areas failing the criterion.
- Note that exposed upper-floor balconies and roof terraces are frequently challenging for wind comfort.
- Describe mitigation: solid balustrades, glass screens, recessed balconies, wind breaks, planting.

#### 6.5 Children's Play Areas
- If applicable, assess wind conditions in designated children's play areas.
- Desired category: sitting or standing.
- Note the particular vulnerability of children and elderly users.

### 7. Safety Assessment (300-600 words)
- Present the safety assessment results:
  - Identify all locations where the strong winds safety threshold is exceeded in any scenario.
  - Present the frequency and magnitude of safety exceedances.
  - State that any safety exceedance is unacceptable and must be mitigated.
- Describe the implications of safety exceedances:
  - Risk to vulnerable pedestrians (elderly, disabled, young children).
  - Risk of falls, injuries, structural damage to temporary structures.
  - Risk to cyclists.
- If safety exceedances are present in the proposed scenario without mitigation:
  - Describe the mitigation measures and demonstrate that they resolve all safety exceedances.
  - Confirm that no safety exceedances remain in the mitigated scenario.
- If no safety exceedances are identified, confirm this as a positive finding.

### 8. Impact on Amenity Spaces (400-700 words)
- Assess the impact of the proposed development on existing neighbouring amenity areas:
  - Neighbouring gardens and outdoor spaces.
  - Public parks and recreation areas.
  - Existing pedestrian thoroughfares.
- Compare baseline and proposed wind conditions at these locations.
- Identify any locations where the proposed development worsens the existing comfort category.
- Assess the significance of any adverse impacts.
- Describe any mitigation measures to address impacts on existing amenity.

### 9. Mitigation Strategy (500-1000 words)
- Describe all proposed wind mitigation measures:

#### 9.1 Architectural Mitigation (Embedded Design)
- Building form and massing: setbacks, stepped profiles, rounded corners, cantilevered elements, podium design.
- Building orientation: minimising exposure of large facades to the prevailing wind.
- Canopies and overhangs: at building entrances, along retail frontages, over amenity areas.
- Recessed entrances and colonnades: reducing wind acceleration at doorways.
- Balcony design: solid balustrades (min 1.1m), recessed balconies, winter gardens (enclosed balconies).

#### 9.2 Landscape and Screening Mitigation
- Tree planting: deciduous and evergreen tree planting to provide wind attenuation (note: trees require adequate soil volume and growing conditions; effectiveness increases with maturity).
  - Specify species, size at planting, spacing, and expected canopy size at maturity.
  - Note that deciduous trees provide reduced wind attenuation in winter when wind speeds are highest.
- Hedging and shrub planting: lower-level wind screening.
- Screens and wind baffles: solid or perforated screens at key locations. Specify height, material, porosity (typically 40-50% porosity is more effective than solid screens, which cause turbulence in the lee).
- Pergolas and canopies: overhead structures with or without infill panels.
- Earth mounding and topographic features.

#### 9.3 Verification
- Recommend that the effectiveness of mitigation measures be verified through:
  - Retesting in the wind tunnel with mitigation measures modelled.
  - Updated CFD analysis with mitigation measures included.
  - Post-construction wind monitoring at key locations.
- Recommend a planning condition securing the implementation and maintenance of wind mitigation measures.

### 10. Conclusion (300-600 words)
- Summarise the assessment findings:
  - Baseline wind conditions.
  - Wind conditions with the proposed development (without and with mitigation).
  - Comfort assessment: compliance with Lawson criteria for each intended use.
  - Safety assessment: confirm no safety exceedances (or that all are mitigated).
  - Impact on existing amenity spaces.
  - Effectiveness of proposed mitigation.
- Confirm that with the proposed mitigation measures, all areas of the development and surrounding public realm achieve wind conditions suitable for their intended use.
- Confirm that no safety exceedances remain in the mitigated scenario.
- Confirm compliance with NPPF Paragraph 130(f) and relevant local/London Plan policies.
- Recommend planning conditions: implementation of mitigation measures, maintenance, post-construction monitoring.
- State the AI-generated disclaimer and professional endorsement requirement.

## Quality Standards

- Reference the Lawson Comfort Criteria by name and describe each category with threshold wind speeds.
- Reference the safety (strong winds) criterion with the threshold definition.
- Reference the City of London Wind Microclimate Guidelines (2019) or equivalent guidance.
- Reference NPPF Paragraph 130(f) by number.
- Reference London Plan policies (D3, D8, D9) if in London, by policy number.
- Reference BS EN 1991-1-4 for wind speed data.
- Present results in tabular format: probe location, intended use, desired category, actual category, pass/fail.
- Present wind speed contour plots or isopleth maps (reference appendices).
- Describe aerodynamic effects clearly: downwash, corner acceleration, channelling, wake effects, through-flow.
- Describe mitigation measures with sufficient detail for implementation.
- Where wind tunnel or CFD data has not been provided, clearly flag as required.
- Do not fabricate wind speed measurements, comfort categorisations, or safety assessment results.
- Use correct wind engineering terminology: Lawson Comfort Criteria, pedestrian-level wind, comfort category, safety exceedance, downwash, corner acceleration, venturi effect, boundary layer, turbulence intensity.
- Maintain professional wind engineering consultancy language throughout.
- Include the AI-generated disclaimer prominently.`;

export const WMA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description:
      'Purpose, site identification, proposed development, reason for assessment, intended pedestrian uses, qualifications, and AI disclaimer.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State purpose and policy basis. Identify the site. Summarise proposed development (use, height, massing, towers, public realm). Explain why wind assessment is required. Identify intended uses of ground-level and elevated areas. State qualifications. Include AI disclaimer.',
  },
  {
    name: 'Policy Framework',
    description:
      'Lawson Comfort Criteria, City of London guidelines, NPPF, London Plan/local policies, and BS EN 1991-1-4.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe Lawson Comfort Criteria: each category (sitting, standing, strolling, walking, uncomfortable) with thresholds. Describe safety criterion. Reference City of London guidelines. Set out NPPF Paragraph 130(f). Set out London Plan/local plan policies. Reference BS EN 1991-1-4.',
  },
  {
    name: 'Methodology',
    description:
      'Wind tunnel/CFD approach, scenarios assessed, meteorological data, Lawson criteria application, and measurement locations.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Describe wind tunnel or CFD methodology (facility, scale, software, turbulence model, validation). Describe scenarios: baseline, proposed, proposed with mitigation, cumulative. Describe met data: source station, wind rose, prevailing direction. Present Lawson criteria thresholds and exceedance probabilities. Describe measurement locations and present plan. Flag if analysis not yet conducted.',
    subsections: [
      {
        name: 'Assessment Approach',
        description: 'Wind tunnel or CFD methodology, model details, and scenarios.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance:
          'Describe wind tunnel facility/CFD software. Describe model scale, domain, mesh. Describe scenarios assessed. Describe qualitative approach if applicable.',
      },
      {
        name: 'Meteorological Data and Criteria',
        description: 'Wind data source, wind rose, Lawson criteria, and safety threshold.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance:
          'Describe met station and data period. Present wind rose. State Lawson criteria thresholds. Define safety criterion. Describe how desired categories are assigned to each location.',
      },
      {
        name: 'Measurement Locations',
        description: 'Probe/point locations for ground-level and elevated areas.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance:
          'Describe measurement point locations: entrances, thoroughfares, amenity areas, balconies, terraces, existing spaces. Present location plan.',
      },
    ],
  },
  {
    name: 'Baseline Wind Conditions',
    description:
      'Existing wind environment, baseline comfort categorisation, and identification of existing concerns.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe existing wind environment qualitatively. Present baseline comfort categorisation at each point. Identify existing areas of concern. Present wind contour plots. Describe seasonal variation.',
  },
  {
    name: 'Wind Tunnel / CFD Analysis',
    description:
      'Proposed scenario results (without and with mitigation), comfort categorisation, aerodynamic effects, and contour plots.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Present proposed scenario comfort categorisation (without mitigation). Identify failures and safety exceedances. Describe aerodynamic effects (downwash, corner acceleration, channelling, wake, through-flow). Present proposed scenario with mitigation. Demonstrate resolution of exceedances. Present contour plots.',
    subsections: [
      {
        name: 'Proposed Scenario (Without Mitigation)',
        description: 'Results and aerodynamic effects without mitigation measures.',
        required: true,
        min_words: 250,
        max_words: 600,
        guidance:
          'Tabulate comfort categories at each point vs desired category. Identify failures and safety exceedances. Describe aerodynamic effects: downwash, corner acceleration, channelling, wake. Present contour plots.',
      },
      {
        name: 'Proposed Scenario (With Mitigation)',
        description: 'Results with mitigation measures demonstrating resolution of exceedances.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance:
          'Present mitigated comfort categories. Compare with unmitigated. Demonstrate all failures and safety exceedances resolved.',
      },
    ],
  },
  {
    name: 'Pedestrian Comfort Assessment',
    description:
      'Detailed comfort assessment for building entrances, thoroughfares, amenity areas, balconies, and play areas.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Assess building entrances (desired: standing). Assess thoroughfares (desired: walking/strolling). Assess outdoor amenity areas (desired: sitting). Assess balconies and terraces (desired: sitting/standing). Assess play areas (desired: sitting/standing). Identify failures. Describe specific mitigation for each area.',
    subsections: [
      {
        name: 'Building Entrances and Thoroughfares',
        description: 'Comfort assessment for entrances, pavements, and pedestrian routes.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance:
          'Assess entrances against standing criterion. Assess thoroughfares against walking/strolling. Describe mitigation: canopies, recessed entrances, screens.',
      },
      {
        name: 'Amenity Areas and Balconies',
        description: 'Comfort assessment for outdoor seating, balconies, terraces, and roof gardens.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance:
          'Assess amenity areas against sitting criterion. Assess balconies and terraces. Note exposure challenges for upper floors. Describe mitigation: screens, solid balustrades, planting, pergolas.',
      },
    ],
  },
  {
    name: 'Safety Assessment',
    description:
      'Strong winds safety threshold assessment with identification and resolution of any exceedances.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Present safety assessment results. Identify all locations exceeding safety threshold. State that any exceedance is unacceptable. Describe implications for vulnerable pedestrians. Demonstrate mitigation resolves all exceedances. Confirm no safety exceedances remain.',
  },
  {
    name: 'Impact on Amenity Spaces',
    description:
      'Assessment of wind impact on existing neighbouring gardens, parks, and public spaces.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Assess impact on existing neighbouring amenity areas. Compare baseline and proposed conditions. Identify any worsening of comfort category. Assess significance. Describe mitigation for adverse impacts on existing spaces.',
  },
  {
    name: 'Mitigation Strategy',
    description:
      'Architectural, landscape, and screening mitigation measures with verification requirements.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe architectural mitigation: building form, setbacks, rounded corners, canopies, recessed entrances, balcony design. Describe landscape mitigation: tree planting (species, size, spacing), hedging, screens (height, porosity), pergolas, earth mounding. Recommend verification: retesting, post-construction monitoring. Recommend planning condition securing mitigation implementation and maintenance.',
    subsections: [
      {
        name: 'Architectural Mitigation',
        description: 'Building form, massing, canopies, entrances, and balcony design.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance:
          'Describe setbacks, stepped profiles, rounded corners, cantilevered elements, podium design, canopies, recessed entrances, solid balustrades, winter gardens.',
      },
      {
        name: 'Landscape and Screening Mitigation',
        description: 'Planting, screens, wind baffles, pergolas, and verification.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance:
          'Describe tree planting (species, maturity, spacing). Describe screens (height, material, porosity 40-50%). Describe pergolas and canopies. Note deciduous limitations in winter. Recommend wind tunnel retesting and post-construction monitoring.',
      },
    ],
  },
  {
    name: 'Conclusion',
    description:
      'Summary of baseline and proposed conditions, comfort and safety compliance, mitigation effectiveness, policy compliance, and recommended conditions.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise baseline conditions. Summarise proposed conditions (without and with mitigation). Confirm comfort compliance for all intended uses. Confirm no safety exceedances remain. Summarise impact on existing amenity. Summarise mitigation effectiveness. Confirm NPPF and local/London Plan compliance. Recommend conditions. State AI disclaimer.',
  },
];

export const WMA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Baseline Wind Conditions',
    'Wind Tunnel / CFD Analysis',
    'Pedestrian Comfort Assessment',
    'Safety Assessment',
    'Impact on Amenity Spaces',
    'Mitigation Strategy',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const WMA_TEMPLATE = {
  assessment_type: 'Wind / Microclimate Assessment',
  short_name: 'WMA',
  version: 1,
  sections: WMA_SECTIONS,
  quality_criteria: WMA_QUALITY,
};
