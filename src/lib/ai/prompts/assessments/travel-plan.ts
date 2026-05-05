import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Travel Plan -- required for developments that generate significant
 * transport movements (NPPF Paragraph 111). A Travel Plan is a long-term
 * management strategy for reducing car dependency and promoting sustainable
 * travel choices for occupiers, employees, and visitors.
 *
 * This prompt produces a comprehensive Travel Plan suitable for submission
 * with a planning application. The output should read as though prepared
 * by a chartered transport planner (MCIHT or equivalent) experienced in
 * UK Travel Plan development and monitoring.
 */

export const TRAVEL_PLAN_PROMPT = `You are preparing a Travel Plan to accompany a planning application for a development submitted to a local planning authority in England.

## Document Purpose

A Travel Plan is a long-term management strategy for an occupier or site that seeks to deliver sustainable transport objectives through positive action. It must:
- Identify existing travel patterns and opportunities for change.
- Set clear, measurable targets for reducing single-occupancy car use and increasing sustainable travel.
- Propose a package of practical measures to encourage walking, cycling, public transport use, and reduce the need to travel by car.
- Set out an implementation programme with responsibilities and timescales.
- Establish a robust monitoring and review framework to track progress against targets.
- Provide for remedial measures if targets are not met.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 104**: Transport issues should be considered from the earliest stages of plan-making and development proposals. Opportunities to promote walking, cycling and public transport use should be identified and pursued.
- **Paragraph 105**: Significant development should be focused on locations which are or can be made sustainable, through limiting the need to travel and offering a genuine choice of transport modes.
- **Paragraph 109**: Development should only be prevented or refused on highways grounds if there would be an unacceptable impact on highway safety, or the residual cumulative impacts on the road network would be severe.
- **Paragraph 110**: Applications should give priority first to pedestrian and cycle movements; address needs of people with disabilities; create safe, secure and attractive places; allow for efficient delivery of goods; and be designed to enable EV charging.
- **Paragraph 111**: All developments that will generate significant amounts of movement should be required to provide a travel plan, and the application should be supported by a transport statement or transport assessment.
- **Paragraph 112**: Applications should give priority to pedestrian and cycle movements, facilitate access to high quality public transport, and enable EV charging.
- **Paragraph 113**: All developments that generate significant amounts of movement should provide a travel plan.

### Planning Practice Guidance: Travel Plans, Transport Assessments and Statements
- **Paragraph 005 (Reference ID: 42-005-20140306)**: Travel plans should set out clear objectives and targets, together with measures to achieve those targets and arrangements for monitoring and enforcement.
- **Paragraph 006**: Key elements of a Travel Plan: clear objectives, measurable targets, a package of measures, an implementation programme, and monitoring and review framework.
- **Paragraph 007**: Travel Plans should be reviewed against targets annually.
- **Paragraph 008**: Travel Plan measures should be tailored to the site, its accessibility, and the type of development.

### Other Key References
- **DfT -- Making Travel Plans Work: Lessons from UK Case Studies (2002)**: Guidance on effective Travel Plan measures and monitoring.
- **DfT -- Making Residential Travel Plans Work (2005)**: Specific guidance for residential Travel Plans.
- **TRICS Travel Plan Guidance**: Methodology for Travel Plan surveys and monitoring.
- **LTN 1/20 -- Cycle Infrastructure Design (DfT, 2020)**: Design standards for cycle infrastructure relevant to Travel Plan infrastructure measures.
- **Inclusive Mobility (DfT, 2005)**: Ensuring travel options are accessible to all.
- **Local Transport Plan (LTP)**: Relevant objectives and targets.
- **Local plan transport and travel plan policies**.
- **iTRACE or TRICS SAM (Standard Assessment Methodology)**: Standard methodology for annual Travel Plan monitoring surveys.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the Travel Plan and its policy basis (NPPF Paragraphs 111 and 113).
- Identify the application site by full postal address.
- Summarise the proposed development: use, scale, number of units or floor area, number of employees/residents.
- State the type of Travel Plan: full Travel Plan, framework Travel Plan, or residential Travel Plan.
- Note any Travel Plan conditions or requirements agreed with the highway authority.
- Identify the Travel Plan Coordinator (TPC) or state that one will be appointed prior to first occupation.
- Outline the document structure.
- State the Travel Plan duration (typically 5 years from first occupation, or as required by the LPA).

### 2. Policy Framework (300-600 words)
- Set out NPPF Paragraphs 104-113 with emphasis on Paragraphs 111 and 113.
- Summarise PPG guidance on Travel Plans (Paragraphs 005-008).
- Identify relevant local plan policies on Travel Plans and sustainable transport.
- Reference the adopted Local Transport Plan (LTP) and its modal shift objectives.
- Note any local authority Travel Plan guidance, templates, or requirements.
- Reference any relevant SPDs on sustainable transport.

### 3. Site Audit (600-1200 words)
A comprehensive assessment of the site's existing transport accessibility.

#### 3.1 Site Location and Context
- Describe the site location within the settlement.
- Describe the surrounding land uses and key destinations (employment, retail, education, health, leisure).
- Describe the site's position relative to the town centre and local facilities.

#### 3.2 Public Transport Accessibility
- **Bus services**: List all bus stops within 400m. For each: stop name, distance, services, frequency (peak and off-peak), key destinations. Present in tabular format.
- **Rail services**: Identify stations within 2km. State services, frequency, journey times to key destinations.
- **Other modes**: Tram, metro, demand-responsive transport, community transport.
- **PTAL or equivalent**: State the Public Transport Accessibility Level or qualitative assessment.

#### 3.3 Walking Audit
- Describe the pedestrian infrastructure: footways, footpaths, crossing facilities, dropped kerbs, tactile paving, lighting.
- Present walking distances and times to key destinations in tabular format.
- Compare with CIHT acceptable walking distances (400m/800m/1200m).
- Assess the quality, safety, and attractiveness of walking routes.
- Identify any barriers to walking (severance by busy roads, poor lighting, lack of crossings).

#### 3.4 Cycling Audit
- Describe cycle infrastructure: on-road lanes, off-road paths, National Cycle Network, Quietways.
- Present cycling distances and times to key destinations within 5km.
- Assess route quality, gradient, safety, and LTN 1/20 compliance.
- Identify cycle parking at key destinations.
- Identify any barriers to cycling.

#### 3.5 Highway Network and Parking
- Briefly describe the local road network and access to the site.
- Describe existing on-street and off-street parking in the vicinity.
- State the proposed on-site parking provision and how it relates to the Travel Plan objectives.

### 4. Travel Survey Results (300-600 words)
- For existing uses: present results of a baseline travel survey of current occupiers/employees.
- State the survey methodology: questionnaire type, sample size, response rate, survey dates.
- Present existing mode share data: walk, cycle, bus, rail, car driver, car passenger, other.
- Compare with Census 2021 mode share data for the local area.
- For new developments: if no baseline survey is possible, use Census 2021 journey-to-work data for the ward/MSOA as the proxy baseline.
- Identify the existing car driver mode share as the key metric for target-setting.
- Note "[BASELINE TRAVEL SURVEY TO BE CONDUCTED WITHIN 3 MONTHS OF [X]% OCCUPATION]" where applicable.

### 5. Objectives and Targets (400-800 words)
#### 5.1 Objectives
Set out clear, SMART objectives. Typical objectives include:
- Reduce single-occupancy car trips generated by the development below the baseline level.
- Increase the proportion of trips made by walking, cycling, and public transport.
- Raise awareness of sustainable travel options among residents/employees/visitors.
- Reduce the environmental impact of travel associated with the development.
- Comply with local and national sustainable transport policy objectives.

#### 5.2 Mode Share Targets
- State the baseline mode share (from survey or Census proxy).
- Set target mode shares for each year of the Travel Plan (Years 1-5).
- Targets should demonstrate a realistic but ambitious trajectory of improvement.
- Typical target: reduce car driver mode share by 10-15% over 5 years from the baseline.
- Present targets in tabular format:
  | Mode | Baseline | Year 1 | Year 3 | Year 5 |
- Justify the targets by reference to the site's accessibility, local benchmarks, and the Travel Plan measures proposed.

#### 5.3 Interim Targets
- Set interim targets for Years 1 and 3 to enable progress monitoring.
- Relate interim targets to the implementation phasing of Travel Plan measures.

### 6. Travel Plan Measures (800-1500 words)
Set out a comprehensive package of measures tailored to the site and development type.

#### 6.1 Walking Measures
- Pedestrian access improvements: new footways, crossings, dropped kerbs, lighting.
- Walking maps and route information for residents/employees.
- Walking challenges and incentive schemes.
- Maintenance of pedestrian routes within the site.
- Wayfinding signage.

#### 6.2 Cycling Measures
- Secure, covered, and accessible cycle parking provision (residential: 1 space per bedroom; commercial: per local standards).
- Cycle storage design: Sheffield stands, two-tier racks, lockers.
- Shower and changing facilities (for commercial developments).
- Cycle purchase/loan scheme (Cycle to Work scheme for commercial).
- Cycle repair kits and tools.
- Cycle route information and mapping.
- Bike Doctor days (periodic cycle maintenance events).
- Electric bike charging points.

#### 6.3 Public Transport Measures
- Free or subsidised bus passes for residents/employees (e.g., first 12 months).
- Real-time public transport information displays.
- Bus stop improvements: shelters, seating, information, lighting.
- Financial contribution to bus services (new routes or increased frequency).
- Rail season ticket loans (for commercial developments).
- Integration with Mobility as a Service (MaaS) platforms where available.

#### 6.4 Car Reduction Measures
- Car sharing scheme: dedicated spaces, matching platform (e.g., Liftshare).
- Car club provision: dedicated on-site car club bays (e.g., Zipcar, Enterprise Car Club) with free membership for residents/employees.
- EV charging points: active and passive provision in accordance with local standards and Building Regulations Part S.
- Parking management: parking charges, limited parking allocation, permit systems.
- Reduced parking provision (where justified by accessibility).

#### 6.5 Information and Marketing
- Travel information packs for all new residents/employees at move-in.
- Welcome events with sustainable travel focus.
- Dedicated Travel Plan page on development website or intranet.
- Personalised travel planning sessions.
- Regular newsletters and communications promoting sustainable travel.
- Promotion during Sustainable Travel Weeks and national campaigns.

#### 6.6 Delivery and Servicing (for commercial)
- Delivery consolidation plan.
- Off-peak delivery scheduling.
- Cargo bike delivery options.
- Click-and-collect lockers.

### 7. Action Plan and Implementation (400-800 words)
- Present a phased Action Plan in tabular format:
  | Measure | Responsibility | Trigger/Timing | Cost | Funding Source |
- Phase 1: Pre-occupation measures (e.g., cycle parking installation, TPC appointment, travel information packs prepared).
- Phase 2: First occupation to Year 1 (e.g., travel packs distributed, car club operational, bus passes issued, baseline survey conducted).
- Phase 3: Years 1-3 (e.g., ongoing measures, first monitoring survey, remedial measures if needed).
- Phase 4: Years 3-5 (e.g., continued monitoring, measure refinement, final review).
- Identify clear responsibilities for each action: developer, Travel Plan Coordinator, management company, highway authority.
- State the total Travel Plan budget or note "[TRAVEL PLAN BUDGET TO BE AGREED]".

### 8. Monitoring and Review (400-800 words)
- Describe the monitoring methodology: annual travel survey using TRICS-compliant or iTRACE methodology.
- State the survey requirements: mode share, trip distance, frequency, satisfaction.
- State the survey timing: conducted annually from first occupation or agreed trigger occupancy level.
- State minimum response rates: typically 30% for residential, 50% for commercial.
- Describe the reporting process: annual monitoring report submitted to the highway authority.
- Describe how results will be compared against Year 1/3/5 targets.
- Describe trigger points for remedial action: failure to meet interim or annual targets.
- Describe the review process: annual review of measures, feedback from residents/employees, and adjustment of measures.
- State the Travel Plan duration and handover arrangements at the end of the monitoring period.

### 9. Management and Remedial Measures (300-600 words)
#### 9.1 Travel Plan Coordinator
- Describe the TPC role and responsibilities: implementation, monitoring, liaison with highway authority, promotion of measures.
- State when the TPC will be appointed (prior to first occupation) and the time commitment (full-time, part-time, or percentage of role).
- State the TPC qualifications or experience requirements.

#### 9.2 Governance
- Describe the management structure: who oversees the Travel Plan (developer, management company, employer).
- Describe the relationship between the TPC and the highway authority.
- Describe how Travel Plan obligations will transfer from the developer to the end-user/occupier.

#### 9.3 Remedial Measures
- If monitoring shows targets are not being met, describe the escalation process:
  - Year 1 shortfall: review measures, increase promotion, adjust incentives.
  - Year 3 shortfall: introduce additional measures (e.g., enhanced bus pass provision, additional car club vehicles, parking charges).
  - Persistent shortfall: trigger the financial bond/penalty (where secured through S106).
- Describe the financial bond mechanism (where applicable):
  - Bond amount (typically agreed with the highway authority).
  - Trigger conditions for bond drawdown.
  - How the bond will be used to fund additional measures.
- State that the highway authority retains the right to request additional measures through the S106/condition mechanism.

## Quality Standards

- Reference specific NPPF paragraphs (104-113) by number -- minimum 5 distinct references.
- Reference PPG Travel Plan guidance paragraphs (005-008).
- Set SMART targets with specific mode share percentages and timescales.
- Include a measurable baseline (survey or Census proxy) against which targets are set.
- Provide a comprehensive package of measures across all modes (walk, cycle, PT, car reduction, information).
- Include a phased Action Plan with responsibilities, timescales, and costs.
- Include monitoring arrangements with survey methodology, response rates, and reporting.
- Include remedial measures and financial bond provisions.
- Use professional transport planning terminology: TPC, mode share, TRICS, iTRACE, PTAL, LTN 1/20, S106.
- Professional language throughout -- no marketing or promotional language.
- Where baseline survey data has not been provided, state Census proxy data and flag "[BASELINE SURVEY TO BE CONDUCTED]".`;

export const TRAVEL_PLAN_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, development summary, Travel Plan type, and coordinator.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the Travel Plan purpose and NPPF Paragraphs 111/113 requirement. Identify the site. Summarise the proposal. State the Travel Plan type. Note agreed conditions. Identify the TPC. Outline document structure. State the Travel Plan duration.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local transport policy context for Travel Plans.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF Paragraphs 104-113 emphasising Paragraphs 111 and 113. Summarise PPG guidance (Paragraphs 005-008). Identify local plan policies. Reference the Local Transport Plan. Note any local TP guidance or templates.',
  },
  {
    name: 'Site Audit',
    description: 'Comprehensive accessibility assessment covering public transport, walking, cycling, and parking.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Describe site location and key destinations. List bus stops with services and frequencies. Assess rail access. State PTAL. Audit walking routes with distances to destinations (compare CIHT guidelines). Audit cycling infrastructure (reference LTN 1/20). Assess route quality and barriers. Describe highway and parking context.',
    subsections: [
      {
        name: 'Site Location and Context',
        description: 'Location within settlement and proximity to key destinations.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Describe the site location, surrounding land uses, and position relative to the town centre.',
      },
      {
        name: 'Public Transport Accessibility',
        description: 'Bus, rail, and other public transport assessment.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'List bus stops with distances, services, frequencies in tabular format. Assess rail access. State PTAL.',
      },
      {
        name: 'Walking Audit',
        description: 'Pedestrian infrastructure, distances, and route quality.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe footways, crossings, lighting. Present distances to key destinations. Compare with CIHT guidelines. Identify barriers.',
      },
      {
        name: 'Cycling Audit',
        description: 'Cycle infrastructure, distances, and route quality.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe cycle routes. Present distances to destinations within 5km. Reference LTN 1/20. Identify barriers.',
      },
      {
        name: 'Highway Network and Parking',
        description: 'Road access and parking context.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Describe local road network. Describe existing and proposed parking and its relation to TP objectives.',
      },
    ],
  },
  {
    name: 'Travel Survey Results',
    description: 'Baseline mode share data from surveys or Census proxy.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Present baseline survey results or Census 2021 proxy. State methodology, sample size, response rate. Present mode share data (walk, cycle, bus, rail, car driver, car passenger). Compare with local Census data. Identify car driver mode share as the key metric. Flag where baseline survey is needed.',
  },
  {
    name: 'Objectives and Targets',
    description: 'SMART objectives and mode share targets for Years 1, 3, and 5.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set SMART objectives for car trip reduction and sustainable mode increase. Present mode share targets in tabular format for baseline, Year 1, Year 3, Year 5. Target 10-15% car driver reduction over 5 years. Set interim targets for Years 1 and 3. Justify targets by reference to accessibility and measures proposed.',
    subsections: [
      {
        name: 'Objectives',
        description: 'Clear SMART objectives for the Travel Plan.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Set objectives for car reduction, sustainable mode increase, awareness, and environmental impact.',
      },
      {
        name: 'Mode Share Targets',
        description: 'Tabular mode share targets for the Travel Plan period.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Present baseline and target mode shares for Years 1, 3, and 5. Justify the trajectory.',
      },
      {
        name: 'Interim Targets',
        description: 'Progress milestones for Years 1 and 3.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Set interim targets linked to phased implementation of measures.',
      },
    ],
  },
  {
    name: 'Travel Plan Measures',
    description: 'Comprehensive package of measures for walking, cycling, public transport, car reduction, and information.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Describe walking measures (access, maps, challenges). Describe cycling measures (parking, storage, showers, cycle scheme, repair). Describe PT measures (bus passes, RTPI, service contributions). Describe car reduction measures (car sharing, car club, EV, parking management). Describe information measures (travel packs, personalised planning, communications). For commercial, include delivery/servicing measures.',
    subsections: [
      {
        name: 'Walking Measures',
        description: 'Pedestrian infrastructure and promotion measures.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe footway improvements, walking maps, incentives, and wayfinding.',
      },
      {
        name: 'Cycling Measures',
        description: 'Cycle parking, facilities, and promotion measures.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe cycle parking (quantum, type), showers, cycle scheme, repair events, and e-bike charging.',
      },
      {
        name: 'Public Transport Measures',
        description: 'Bus pass, service improvement, and information measures.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe free/subsidised passes, RTPI, bus stop improvements, and service contributions.',
      },
      {
        name: 'Car Reduction Measures',
        description: 'Car sharing, car club, EV charging, and parking management.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe car sharing, car club provision, EV charging, and parking management measures.',
      },
      {
        name: 'Information and Marketing',
        description: 'Travel information packs, personalised planning, and communications.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe travel packs, welcome events, personalised planning, website, and campaigns.',
      },
    ],
  },
  {
    name: 'Action Plan and Implementation',
    description: 'Phased action plan with responsibilities, timescales, costs, and funding.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present a phased Action Plan in tabular format (measure, responsibility, timing, cost, funding). Phase 1: pre-occupation. Phase 2: occupation to Year 1. Phase 3: Years 1-3. Phase 4: Years 3-5. Identify clear responsibilities. State the Travel Plan budget.',
  },
  {
    name: 'Monitoring and Review',
    description: 'Annual survey methodology, reporting, and review framework.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe annual travel survey methodology (TRICS/iTRACE). State survey requirements and response rates (30% residential, 50% commercial). Describe annual reporting to highway authority. Describe comparison against targets. Describe trigger points for remedial action. Describe the review process and handover arrangements.',
  },
  {
    name: 'Management and Remedial Measures',
    description: 'TPC role, governance, escalation process, and financial bond.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe the TPC role, appointment timing, and qualifications. Describe governance structure and LPA liaison. Describe the escalation process for missed targets (Year 1, 3, persistent). Describe the financial bond mechanism: amount, triggers, and use. State the highway authority rights under S106/condition.',
    subsections: [
      {
        name: 'Travel Plan Coordinator',
        description: 'TPC role, appointment, and responsibilities.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Describe TPC role, appointment timing (prior to first occupation), and time commitment.',
      },
      {
        name: 'Governance',
        description: 'Management structure and transfer arrangements.',
        required: true,
        min_words: 75,
        max_words: 150,
        guidance: 'Describe oversight structure and how obligations transfer from developer to occupier.',
      },
      {
        name: 'Remedial Measures',
        description: 'Escalation process and financial bond provisions.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe escalation for Year 1/3/persistent shortfalls. Describe bond amount, triggers, and use.',
      },
    ],
  },
];

export const TRAVEL_PLAN_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Site Audit',
    'Travel Survey Results',
    'Objectives and Targets',
    'Travel Plan Measures',
    'Action Plan and Implementation',
    'Monitoring and Review',
    'Management and Remedial Measures',
  ],
  max_quality_score: 100,
};

export const TRAVEL_PLAN_TEMPLATE = {
  assessment_type: 'Travel Plan',
  short_name: 'TP',
  version: 1,
  sections: TRAVEL_PLAN_SECTIONS,
  quality_criteria: TRAVEL_PLAN_QUALITY,
};
