import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Transport Assessment (TA) -- required for major developments that generate
 * significant transport movements. A TA is more detailed than a Transport
 * Statement and typically required for developments exceeding local
 * thresholds (e.g., 80+ dwellings, major commercial schemes, or sites
 * generating significant HGV movements).
 *
 * This prompt produces a comprehensive Transport Assessment suitable for
 * submission with a planning application. The output should read as though
 * prepared by a chartered transport planner (MCIHT or equivalent) with
 * experience of UK highway authority requirements.
 */

export const TRANSPORT_ASSESSMENT_PROMPT = `You are preparing a Transport Assessment (TA) to accompany a planning application for a major development submitted to a local planning authority in England.

## Document Purpose

A Transport Assessment is a comprehensive and systematic process that sets out transport issues relating to a proposed development. It identifies what measures will be required to improve accessibility and safety for all modes of travel, particularly for alternatives to the car, and what measures will need to be taken to deal with the anticipated transport impacts of the development. The TA must demonstrate that:
1. The site is accessible by a range of transport modes, particularly sustainable modes.
2. The transport impact of the development on the highway network is acceptable and not "severe" (NPPF Paragraph 109).
3. Safe and suitable access can be provided to the site.
4. Appropriate parking provision is made in accordance with local standards.
5. Opportunities for sustainable transport are maximised.
6. Where impacts are identified, appropriate and proportionate mitigation is proposed.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 104**: Transport issues should be considered from the earliest stages of plan-making and development proposals, so that the potential impacts of development on transport networks can be addressed; opportunities from existing or proposed transport infrastructure, and changing transport technology and usage, are realised; opportunities to promote walking, cycling and public transport use are identified and pursued; the environmental impacts of traffic and transport infrastructure can be identified, assessed and taken into account; and patterns of movement, streets, parking and other transport considerations are integral to the design of schemes, and contribute to making high quality places.
- **Paragraph 105**: Significant development should be focused on locations which are or can be made sustainable, through limiting the need to travel and offering a genuine choice of transport modes. This can help to reduce congestion and emissions, and improve air quality and public health.
- **Paragraph 106**: Planning policies should support an appropriate mix of uses across an area, and within larger scale sites, to minimise the number and length of journeys needed for employment, shopping, leisure, education and other activities.
- **Paragraph 107**: If setting local parking standards for residential and non-residential development, policies should take into account the accessibility of the development; the type, mix and use of development; the availability of and opportunities for public transport; local car ownership levels; and the need to ensure an adequate provision of spaces for charging plug-in and other ultra-low emission vehicles.
- **Paragraph 108**: Maximum parking standards for residential and non-residential development should only be set where there is a clear and compelling justification that they are necessary for managing the local road network, or for optimising the density of development in city and town centres and other locations that are well served by public transport.
- **Paragraph 109**: Development should only be prevented or refused on highways grounds if there would be an unacceptable impact on highway safety, or the residual cumulative impacts on the road network would be severe.
- **Paragraph 110**: Within this context, applications for development should: a) give priority first to pedestrian and cycle movements, both within the scheme and with neighbouring areas, and second -- so far as possible -- to facilitating access to high quality public transport; b) address the needs of people with disabilities and reduced mobility in relation to all modes of transport; c) create places that are safe, secure and attractive, which minimise the scope for conflicts between pedestrians, cyclists and vehicles; d) allow for the efficient delivery of goods, and access by service and emergency vehicles; e) be designed to enable charging of plug-in and other ultra-low emission vehicles in safe, accessible and convenient locations.
- **Paragraph 111**: All developments that will generate significant amounts of movement should be required to provide a travel plan, and the application should be supported by a transport statement or transport assessment so that the likely impacts of the proposal can be assessed.
- **Paragraph 112**: Within this context, applications for development should: a) give priority first to pedestrian and cycle movements; b) address the needs of people with disabilities and reduced mobility; c) create safe, secure and attractive places; d) allow for efficient delivery of goods and access by service and emergency vehicles; e) be designed to enable EV charging.
- **Paragraph 113**: All developments that generate significant amounts of movement should be required to provide a travel plan, and the application should be supported by a transport statement or transport assessment.

### Planning Practice Guidance: Travel Plans, Transport Assessments and Statements
- When a TA is required (typically major development or significant trip generation).
- Scope and content of Transport Assessments.
- Assessment of transport impacts and mitigation.
- Travel Plan requirements.

### Other Key Technical References
- **Manual for Streets (DfT/DCLG, 2007)**: Primary guidance for street design in residential and mixed-use areas. Visibility splay requirements (Table 7.1). Street hierarchy. Shared surfaces and home zones.
- **Manual for Streets 2 (CIHT, 2010)**: Extends MfS principles to busier streets and non-residential environments.
- **Design Manual for Roads and Bridges (DMRB)**: Standards for trunk road and motorway junctions. TD 42/95 (geometric design). TA 79/99 (traffic capacity of urban roads). CD 123 (geometric design of at-grade priority and signal-controlled junctions).
- **DfT Circular 02/2013 -- The Strategic Road Network and the Delivery of Sustainable Development**: Applies where the development affects the strategic road network (motorways and trunk roads managed by National Highways).
- **TRICS Database**: Industry-standard database for vehicle trip generation rates by land use category.
- **TEMPro (Trip End Model Presentation Program)**: DfT tool for deriving local traffic growth factors based on planning data.
- **IEMA Guidelines for the Environmental Assessment of Road Traffic (1993)**: Thresholds for assessing environmental effects of traffic (30% increase in total traffic or 10% increase on sensitive routes).
- **National Travel Survey**: DfT annual survey of travel behaviour.
- **LTN 1/20 -- Cycle Infrastructure Design (DfT, 2020)**: Design standards for cycle infrastructure.
- **Inclusive Mobility (DfT, 2005)**: Guidance on meeting transport needs of disabled people.
- **CIHT -- Transport Assessment Best Practice Guidance (2023)**.
- **Junctions 9 / LinSig / ARCADY / PICADY**: Industry-standard junction modelling software.
- **Local Transport Plan (LTP)** of the relevant highway authority.
- **Local parking standards** (adopted SPD or development plan policy).

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Transport Assessment and the policy basis (NPPF Paragraph 111).
- Identify the site by full postal address, grid reference, and site area.
- Summarise the proposed development: use class, number of units, gross floor area, number of employees.
- State the scope of the assessment (agreed with the highway authority through pre-application scoping if applicable).
- Identify the study area and key junctions to be assessed.
- Confirm the assessment years: base year, opening year, and design year (typically opening year + 5 years).
- Reference any pre-application discussions or scoping agreements with the local highway authority or National Highways.
- Outline the document structure.

### 2. Policy Framework (500-1000 words)
- Set out the statutory framework: Section 38(6) of the Planning and Compulsory Purchase Act 2004.
- Set out NPPF Paragraphs 104-113 with summaries of each key paragraph.
- Set out relevant PPG guidance on Transport Assessments.
- If the strategic road network is affected, reference DfT Circular 02/2013.
- Identify the adopted Local Transport Plan (LTP) and relevant objectives.
- Identify and summarise relevant local plan transport policies and parking standards.
- Note any relevant SPDs on transport, parking, or travel plans.
- Reference any Area Action Plans or masterplans with transport implications.

### 3. Existing Transport Conditions (1000-2500 words)
#### 3.1 Site Context
- Describe the site location within the settlement and wider area.
- Describe the surrounding road network: road names, classification (M-road, A-road, B-road, C-road, unclassified), carriageway widths, speed limits, traffic calming measures.
- Describe the site's existing access arrangements and any constraints.

#### 3.2 Highway Network
- Describe each road in the study area in detail: cross-section (carriageway width, footways, verges, cycle lanes), speed limit, traffic management measures, on-street parking, and condition.
- Describe each key junction in the study area: type (roundabout, signal-controlled, priority), geometry, lane configuration.
- Reference highway authority records and site observations.

#### 3.3 Traffic Survey Data
- Present existing traffic flow data from Automatic Traffic Counts (ATC) and/or Manual Classified Counts (MCC).
- State the survey dates, times, and methodology. Note whether surveys were conducted during neutral months (March-June, September-November, avoiding school holidays).
- Present AM peak (08:00-09:00), PM peak (17:00-18:00), and daily flow data in tabular format.
- Present turning count data at key junctions.
- If surveys were affected by COVID or other abnormal conditions, explain the adjustments applied.

#### 3.4 Road Safety Analysis
- Present Personal Injury Accident (PIA) data for the most recent available 5-year period.
- Source the data from CrashMap, the local highway authority, or DfT STATS19 database.
- Present data in tabular format: location, date, severity (fatal/serious/slight), type, and contributing factors.
- Analyse patterns: cluster analysis, predominant accident types, vulnerable road user involvement.
- Conclude on whether there are any existing road safety concerns that the development must address.

### 4. Accessibility Assessment (600-1200 words)
#### 4.1 Public Transport
- **Bus services**: List all bus stops within 400m of the site. For each, state the stop name, distance (walking), services, frequency (peak and off-peak), key destinations. Present in tabular format.
- **Rail services**: Identify stations within 2km (or reasonable access distance). State the station name, distance, services, frequency, journey times to key destinations.
- **Other modes**: Tram, metro, demand-responsive transport, park and ride.
- **Public Transport Accessibility Level (PTAL)**: Calculate or reference the PTAL score where applicable (London). For non-London areas, provide an equivalent qualitative accessibility assessment.

#### 4.2 Walking Assessment
- Describe the pedestrian infrastructure: footways, footpaths, crossings (signal-controlled, zebra, uncontrolled), lighting, dropped kerbs.
- Present walking distances and times to key destinations in tabular format: town/local centre, primary school, secondary school, GP surgery, food shop, post office, open space, employment area.
- Compare distances with CIHT 'Guidelines for Providing for Journeys on Foot': 400m desirable, 800m acceptable, 1200m preferred maximum for commuting.
- Assess the quality and safety of walking routes.

#### 4.3 Cycling Assessment
- Describe the cycle infrastructure: on-road cycle lanes, off-road shared paths, National Cycle Network routes, Quietways, cycle parking at destinations.
- Present cycling distances and times to key destinations within a 5km radius.
- Reference LTN 1/20 design standards for any proposed cycle infrastructure.
- Assess the quality and safety of cycling routes.

#### 4.4 Accessibility Summary
- Conclude on the site's overall accessibility by all modes.
- Demonstrate that the site offers a genuine choice of transport modes as required by NPPF Paragraph 105.

### 5. Trip Generation (800-1500 words)
#### 5.1 TRICS Analysis
- State the TRICS database version used.
- Describe the site selection criteria: land use category, location type (edge of town, suburban, etc.), development size range, survey days (Tuesday-Thursday), survey years.
- Present the TRICS output: number of sites selected, average trip rates per dwelling / per 100sqm GFA for vehicle arrivals, departures, and totals for:
  - AM peak hour (08:00-09:00).
  - PM peak hour (17:00-18:00).
  - Daily (07:00-19:00).
- Calculate total vehicle trip generation for the proposed development.
- Present multi-modal trip generation where available from TRICS: pedestrian, cycle, public transport, and total person trips.

#### 5.2 Net Trip Generation
- For redevelopment or change of use: calculate the existing or lawful use trip generation.
- Calculate the net change in vehicle trips (proposed minus existing/lawful).
- Justify the use of the existing or lawful use as the baseline.

#### 5.3 Sensitivity Testing
- Where appropriate, test sensitivity to trip rate assumptions: apply higher and lower trip rates to understand the range of potential impacts.
- Consider whether TRICS rates may underestimate trips for the specific context and justify the rates used.

### 6. Traffic Distribution and Assignment (500-1000 words)
#### 6.1 Trip Distribution
- Describe the methodology for trip distribution: Census 2021 journey-to-work data (origin-destination), local knowledge, or gravity model.
- Present the directional distribution as a percentage split by route.

#### 6.2 Trip Assignment
- Assign the distributed trips to the local road network.
- Present the assignment at each key junction in the study area.
- Distinguish between development traffic and background traffic.

#### 6.3 Background Traffic Growth
- Apply TEMPro growth factors to derive future year baseline flows.
- State the TEMPro version, dataset, and local area selected.
- Present the growth factors for the opening year and design year.
- Identify and include committed developments (consented schemes not yet built) in the future baseline, using agreed trip generation and distribution.

### 7. Junction Capacity Analysis (1000-3000 words)
#### 7.1 Assessment Methodology
- State the modelling software used for each junction type:
  - Priority junctions: PICADY (Junctions 9) or manual capacity assessment.
  - Roundabouts: ARCADY (Junctions 9).
  - Signal-controlled junctions: LinSig or TRANSYT.
  - Larger networks: VISSIM or S-Paramics (microsimulation) where required.
- State the assessment scenarios:
  - Base year (existing traffic).
  - Opening year without development.
  - Opening year with development.
  - Design year (opening + 5) without development.
  - Design year (opening + 5) with development.

#### 7.2 Junction Assessment Results
For each junction assessed, present:
- Junction geometry and lane configuration.
- Traffic flows for each scenario (presented as flow diagrams or tables).
- Model results: RFC (Ratio of Flow to Capacity), queue lengths (PCUs), and delay (seconds per PCU) for each arm and each scenario.
- For signal-controlled junctions: Degree of Saturation (DoS), Practical Reserve Capacity (PRC), and Mean Maximum Queue (MMQ).
- Comparison of "with development" and "without development" scenarios.
- Assessment of whether the development impact is acceptable.

#### 7.3 Summary of Junction Performance
- Present a summary table of all junction results across all scenarios.
- Identify any junctions that are operating over capacity or where the development causes a material impact.
- Apply the NPPF Paragraph 109 test: is the residual cumulative impact "severe"?

### 8. Sustainable Transport Measures (500-1000 words)
#### 8.1 Pedestrian and Cycle Improvements
- Describe any proposed pedestrian infrastructure improvements: new footways, crossings, dropped kerbs, lighting.
- Describe any proposed cycle infrastructure: cycle lanes, shared paths, cycle parking, cycle hire.
- Reference LTN 1/20 design standards.

#### 8.2 Public Transport Improvements
- Describe any proposed public transport improvements: new bus stops, bus service contributions, real-time passenger information, bus priority measures.
- Describe any proposed contributions to rail infrastructure or services.

#### 8.3 Highway Improvements and Mitigation
- Describe any proposed highway improvements: junction upgrades, traffic signals, road widening, traffic calming.
- Describe any proposed S278 highway works (works to the public highway under Section 278 of the Highways Act 1980).
- Describe any proposed S106 contributions towards transport infrastructure.

#### 8.4 Travel Plan Summary
- Summarise the Travel Plan (which should be submitted as a separate document):
  - Travel Plan Coordinator appointment and contact details.
  - Mode share targets: existing baseline and target reduction in single-occupancy car trips.
  - Measures: personalised travel planning, cycle purchase scheme, bus pass subsidies, car sharing, car club, EV charging, travel information packs, cycle storage, shower facilities.
  - Monitoring: annual travel surveys, TRICS-compliant methodology, reporting to the highway authority.
  - Remedial measures if targets are not met (including financial bond provisions).

### 9. Mitigation Summary (400-800 words)
- Present a comprehensive summary of all proposed mitigation measures.
- For each measure, state:
  - Description of the measure.
  - Delivery mechanism (condition, S106, S278).
  - Trigger point (prior to occupation, phased, etc.).
  - Estimated cost (or note "[TO BE AGREED WITH HIGHWAY AUTHORITY]").
- Demonstrate that the package of mitigation is proportionate to the impact of the development.
- Reference any proposed Grampian conditions (negative conditions requiring off-site works before occupation).

### 10. Conclusion (500-800 words)
- Summarise the site's accessibility and the genuine choice of transport modes available.
- Summarise the trip generation, distribution, and assignment.
- Summarise the junction capacity analysis results and confirm that the residual cumulative impact is not severe (NPPF Paragraph 109).
- Confirm that safe and suitable access can be achieved.
- Confirm that parking provision complies with local standards and NPPF Paragraphs 107-108.
- Summarise the package of sustainable transport measures and mitigation.
- Apply the NPPF Paragraph 109 test: confirm that there would not be an unacceptable impact on highway safety and that the residual cumulative impact would not be severe.
- Confirm compliance with NPPF Paragraphs 104-113, the Local Transport Plan, and relevant local transport policies.
- Recommend that the highway authority raise no objection subject to the proposed mitigation package and conditions.

## Quality Standards

- Reference specific NPPF paragraphs (104-113) by number -- minimum 8 distinct references.
- Reference Manual for Streets and/or DMRB for access and junction design.
- Reference DfT Circular 02/2013 where the strategic road network is affected.
- Use TRICS for trip generation with clearly stated selection criteria.
- Use TEMPro for background traffic growth with stated version and parameters.
- Present junction capacity results in standard format (RFC, queue, delay / DoS, PRC, MMQ).
- Apply the NPPF "severe" impact test correctly and explicitly.
- Include specific distances and journey times to bus stops, stations, and key destinations.
- Quantify parking provision and compare with local standards.
- Use professional transport planning terminology: AADT, AAWT, PCU, ATC, MCC, TRICS, TEMPro, PICADY, ARCADY, LinSig, RFC, DoS, PRC, MMQ, S278, S106, LTN 1/20.
- Where survey data has not been provided, clearly state what data is needed.
- Where junction modelling has not been carried out, describe the methodology to be used and flag as "[JUNCTION MODELLING TO BE COMPLETED]".`;

export const TRANSPORT_ASSESSMENT_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, proposal summary, scope, study area, and assessment years.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the TA purpose and NPPF Paragraph 111 requirement. Identify the site. Summarise the proposal (units, floor area, employees). State the scope and study area (agreed with highway authority). Identify key junctions. State assessment years. Reference pre-application discussions. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local transport policy, standards, and guidance.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Set out Section 38(6). Summarise NPPF Paragraphs 104-113. Reference PPG on TAs. Reference DfT Circular 02/2013 if SRN affected. Identify the Local Transport Plan and relevant objectives. Identify local plan transport and parking policies. Note relevant SPDs and Area Action Plans.',
  },
  {
    name: 'Existing Transport Conditions',
    description: 'Highway network, traffic surveys, and road safety analysis.',
    required: true,
    min_words: 1000,
    max_words: 2500,
    guidance:
      'Describe the site context and surrounding road network in detail. Describe each key junction. Present ATC/MCC traffic survey data for AM and PM peaks in tabular format. Present 5-year PIA data with cluster analysis. Conclude on road safety. Note any COVID adjustments to survey data.',
    subsections: [
      {
        name: 'Site Context',
        description: 'Location and surrounding road network description.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Describe the site within its settlement. Describe surrounding roads: classification, widths, speed limits, traffic management.',
      },
      {
        name: 'Highway Network',
        description: 'Detailed description of roads and junctions in the study area.',
        required: true,
        min_words: 200,
        max_words: 600,
        guidance: 'Describe each road cross-section and each key junction type, geometry, and lane configuration.',
      },
      {
        name: 'Traffic Survey Data',
        description: 'Existing traffic flows from ATC and MCC surveys.',
        required: true,
        min_words: 300,
        max_words: 800,
        guidance: 'Present survey dates, methodology, and flows. Present AM/PM peak and daily data in tables. Present turning counts at key junctions.',
      },
      {
        name: 'Road Safety Analysis',
        description: 'Five-year PIA data analysis and conclusions.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Present 5-year PIA data in tabular format. Analyse patterns, severity, and vulnerable road users. Conclude on safety concerns.',
      },
    ],
  },
  {
    name: 'Accessibility Assessment',
    description: 'Public transport, walking, cycling, and overall accessibility.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'List bus stops within 400m with services and frequencies in tabular format. Assess rail access. Calculate PTAL or qualitative equivalent. Present walking distances to key destinations and compare with CIHT guidelines. Assess cycle infrastructure and reference LTN 1/20. Conclude on genuine modal choice per NPPF Paragraph 105.',
    subsections: [
      {
        name: 'Public Transport',
        description: 'Bus, rail, and other public transport accessibility.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'List bus stops, services, frequencies, and destinations. Assess rail access. State PTAL if applicable.',
      },
      {
        name: 'Walking Assessment',
        description: 'Pedestrian infrastructure and walking distances to key destinations.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe footways and crossings. Present walking distances in tabular format. Compare with CIHT guidelines.',
      },
      {
        name: 'Cycling Assessment',
        description: 'Cycle infrastructure and cycling distances.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe cycle routes and infrastructure. Present cycling distances. Reference LTN 1/20.',
      },
      {
        name: 'Accessibility Summary',
        description: 'Overall conclusion on site accessibility.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Conclude that the site offers genuine modal choice per NPPF Paragraph 105.',
      },
    ],
  },
  {
    name: 'Trip Generation',
    description: 'TRICS-based trip generation analysis with net trip calculation.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'State TRICS version and selection criteria. Present trip rates and total trips for AM/PM peaks and daily. Present multi-modal trips where available. Calculate net trips for redevelopment. Conduct sensitivity testing of trip rate assumptions.',
    subsections: [
      {
        name: 'TRICS Analysis',
        description: 'Trip rate derivation from TRICS database.',
        required: true,
        min_words: 400,
        max_words: 800,
        guidance: 'State TRICS version, selection criteria, number of sites. Present trip rates per unit/100sqm. Calculate total trips for AM/PM peaks and daily.',
      },
      {
        name: 'Net Trip Generation',
        description: 'Net change in trips for redevelopment or change of use.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Calculate existing/lawful use trips. Calculate net change. Justify the baseline used.',
      },
      {
        name: 'Sensitivity Testing',
        description: 'Testing sensitivity of trip rate assumptions.',
        required: false,
        min_words: 100,
        max_words: 300,
        guidance: 'Test higher and lower trip rates. Assess range of potential impacts. Justify selected rates.',
      },
    ],
  },
  {
    name: 'Traffic Distribution and Assignment',
    description: 'Trip distribution methodology, network assignment, and background growth.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe distribution methodology (Census 2021 journey-to-work). Present directional splits. Assign to the network at each key junction. Apply TEMPro growth factors for future year baselines. Include committed developments in future baseline.',
    subsections: [
      {
        name: 'Trip Distribution',
        description: 'Directional distribution methodology and percentage splits.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe Census-based or gravity model methodology. Present directional distribution percentages.',
      },
      {
        name: 'Trip Assignment',
        description: 'Assignment of development trips to the road network.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Assign trips to the network at each key junction. Present flow diagrams or tables.',
      },
      {
        name: 'Background Traffic Growth',
        description: 'TEMPro growth factors and committed developments.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'State TEMPro version and parameters. Present growth factors for opening and design years. Include committed development traffic.',
      },
    ],
  },
  {
    name: 'Junction Capacity Analysis',
    description: 'Detailed modelling of key junctions for all assessment scenarios.',
    required: true,
    min_words: 1000,
    max_words: 3000,
    guidance:
      'State modelling software for each junction type (PICADY, ARCADY, LinSig). Define assessment scenarios (base, opening +/- dev, design year +/- dev). For each junction present geometry, flows, and results (RFC/queue/delay or DoS/PRC/MMQ). Summarise all results. Apply the NPPF Paragraph 109 severe impact test.',
    subsections: [
      {
        name: 'Assessment Methodology',
        description: 'Modelling software, scenarios, and approach.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'State modelling software for each junction type. Define all assessment scenarios.',
      },
      {
        name: 'Junction Assessment Results',
        description: 'Detailed results for each junction and scenario.',
        required: true,
        min_words: 500,
        max_words: 2000,
        guidance: 'For each junction: geometry, flows, RFC/queue/delay or DoS/PRC/MMQ for all scenarios. Compare with/without development.',
      },
      {
        name: 'Summary of Junction Performance',
        description: 'Summary table and severe impact test.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Present summary table. Identify over-capacity junctions. Apply NPPF Paragraph 109 severe test.',
      },
    ],
  },
  {
    name: 'Sustainable Transport Measures',
    description: 'Pedestrian, cycle, public transport improvements, and Travel Plan summary.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe pedestrian and cycle improvements (reference LTN 1/20). Describe public transport improvements. Describe highway improvements and S278 works. Summarise the Travel Plan: coordinator, targets, measures, monitoring, remedial measures, and bond.',
    subsections: [
      {
        name: 'Pedestrian and Cycle Improvements',
        description: 'New or improved walking and cycling infrastructure.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe footway, crossing, cycle lane, and cycle parking improvements. Reference LTN 1/20.',
      },
      {
        name: 'Public Transport Improvements',
        description: 'Bus stop, service, and rail contributions.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Describe bus stop improvements, service contributions, and RTPI. Note rail contributions if any.',
      },
      {
        name: 'Highway Improvements and Mitigation',
        description: 'Junction upgrades, S278 works, and S106 contributions.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe junction improvements, traffic signals, road widening, traffic calming. State S278/S106 mechanisms.',
      },
      {
        name: 'Travel Plan Summary',
        description: 'Summary of the Travel Plan measures, targets, and monitoring.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Summarise coordinator, mode share targets, measures (cycle scheme, bus passes, car club, EV), monitoring, and remedial actions.',
      },
    ],
  },
  {
    name: 'Mitigation Summary',
    description: 'Comprehensive summary of all mitigation with delivery mechanisms and triggers.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present all mitigation in tabular format: measure, delivery mechanism (condition/S106/S278), trigger point, and estimated cost. Demonstrate proportionality. Note any Grampian conditions.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of accessibility, impact, NPPF severe test, and policy compliance.',
    required: true,
    min_words: 500,
    max_words: 800,
    guidance:
      'Summarise accessibility and modal choice. Summarise trip generation and junction analysis. Apply NPPF Paragraph 109 severe impact test. Confirm safe access. Confirm parking compliance (NPPF 107-108). Summarise mitigation. Confirm compliance with NPPF 104-113, LTP, and local policies. Recommend no highway objection.',
  },
];

export const TRANSPORT_ASSESSMENT_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Existing Transport Conditions',
    'Accessibility Assessment',
    'Trip Generation',
    'Traffic Distribution and Assignment',
    'Junction Capacity Analysis',
    'Sustainable Transport Measures',
    'Mitigation Summary',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const TRANSPORT_ASSESSMENT_TEMPLATE = {
  assessment_type: 'Transport Assessment',
  short_name: 'TA',
  version: 1,
  sections: TRANSPORT_ASSESSMENT_SECTIONS,
  quality_criteria: TRANSPORT_ASSESSMENT_QUALITY,
};
