import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Transport Statement -- required for developments that generate a moderate
 * number of vehicle trips. For larger schemes that exceed the thresholds in
 * the local authority's adopted guidance or the DfT/DCLG guidelines, a full
 * Transport Assessment (TA) may be required instead.
 *
 * This prompt covers a Transport Statement suitable for small-to-medium scale
 * developments (typically 50-80 dwellings, small commercial schemes, or changes
 * of use with transport implications).
 */

export const TRANSPORT_PROMPT = `You are preparing a Transport Statement (TS) to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A Transport Statement provides an assessment of the transport implications of a proposed development. It is a less detailed analysis than a full Transport Assessment and is appropriate for developments that have relatively small transport implications. The Transport Statement must demonstrate that:
1. The development is located in an accessible location.
2. The transport impact of the proposal is acceptable.
3. Safe and suitable access can be provided.
4. Appropriate parking provision is made.
5. Opportunities for sustainable transport are maximised.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 104**: Transport issues should be considered from the earliest stages of plan-making and development proposals, so that the potential impacts of development on transport networks can be addressed.
- **Paragraph 105**: Significant development should be focused on locations which are or can be made sustainable, through limiting the need to travel and offering a genuine choice of transport modes.
- **Paragraph 108**: In assessing sites, consideration should be given to whether opportunities for sustainable transport modes have been taken up, safe and suitable access can be achieved, and the design reflects current guidance (Manual for Streets).
- **Paragraph 109**: Development should only be prevented or refused on highways grounds if there would be an unacceptable impact on highway safety, or the residual cumulative impacts on the road network would be severe.
- **Paragraph 110**: Within this context, applications should give priority to pedestrian and cycle movements; address needs of people with disabilities and reduced mobility; create safe and secure layouts; consider the needs of HGVs and service vehicles; be designed to enable charging of low emission vehicles.
- **Paragraph 111**: All developments that will generate significant amounts of movement should be required to provide a travel plan, and the application should be supported by a transport statement or transport assessment.
- **Paragraph 112**: Developments should be designed to provide safe and suitable access, allow for efficient delivery of goods, and enable charging of plug-in and other ultra-low emission vehicles.
- **Paragraph 113**: All developments should make appropriate opportunities for sustainable transport modes; safe and suitable access; and mitigate significant impacts on the transport network.

### Planning Practice Guidance: Travel Plans, Transport Assessments and Statements
- Guidance on the scope and content of Transport Statements.
- When a Transport Statement vs Transport Assessment is required.
- Travel Plan requirements and measures.

### Other Key References
- Manual for Streets (DfT/DCLG, 2007): Street design and visibility splay guidance.
- Manual for Streets 2 (CIHT, 2010): Wider application of Manual for Streets principles.
- Design Manual for Roads and Bridges (DMRB): For trunk road and motorway junctions.
- Guidelines for the Environmental Assessment of Road Traffic (IEMA, 1993).
- TRICS database: Trip rate data for various land uses.
- Guidance on Transport Assessment (DfT, 2007 -- now largely superseded by PPG but still informative).
- National Travel Survey data.
- Local Transport Plan (LTP) of the relevant highway authority.
- Local parking standards (adopted SPD or development plan policy).
- Inclusive Mobility (DfT, 2005): Guidance for transport professionals on meeting needs of disabled people.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Transport Statement and its policy basis (NPPF Paragraph 111).
- Identify the site by full postal address.
- Summarise the proposed development (use, scale, units, floor area).
- Confirm the scope of the assessment (agreed with the highway authority if applicable).
- Outline the document structure.

### 2. Site Location and Accessibility (500-1000 words)
#### 2.1 Site Context
- Describe the site location within the settlement.
- Describe the surrounding road network: road names, classification (A-road, B-road, unclassified), speed limits, and character (urban, suburban, rural).
- Describe the site's existing access arrangements.

#### 2.2 Public Transport Accessibility
- Nearest bus stops: names, distances (walking time), services, frequencies, destinations.
- Nearest railway station: name, distance, services, frequency, destinations.
- Other public transport: tram, metro, park and ride.
- Public Transport Accessibility Level (PTAL) or equivalent measure where available.

#### 2.3 Walking and Cycling
- Pedestrian infrastructure: footways, footpaths, crossings, lighting.
- Walking distances to key destinations: town centre, schools, GP surgery, food shops, employment areas (with journey times).
- Compare walking distances with the CIHT 'Guidelines for Providing for Journeys on Foot' (acceptable walking distances: 400m desirable, 800m acceptable, 1200m preferred maximum for commuting).
- Cycle infrastructure: cycle lanes, shared paths, National Cycle Network routes.
- Cycling distances to key destinations (typically within 5km radius).

#### 2.4 Accessibility Summary
- Conclude on the site's accessibility using all modes.
- Demonstrate that the site is accessible and that genuine choices of travel mode are available.

### 3. Existing Highway Conditions (400-800 words)
#### 3.1 Road Network Description
- Describe the roads in the vicinity of the site: carriageway widths, footways, speed limits, traffic calming.
- Describe the key junctions within the study area.

#### 3.2 Traffic Flow Data
- Existing traffic flows on key routes (from traffic surveys or publicly available data).
- Peak hour flows (AM peak 08:00-09:00, PM peak 17:00-18:00) where available.
- If data is not available, note "[TRAFFIC SURVEY DATA REQUIRED]" and recommend an Automatic Traffic Count (ATC) or Manual Classified Count (MCC).

#### 3.3 Road Safety
- Personal Injury Accident (PIA) data for the most recent available 5-year period (from CrashMap or the highway authority).
- Analysis of accident patterns: number, severity (fatal, serious, slight), type, location.
- Whether there are any identified road safety concerns.
- If data is not available, note "[PIA DATA TO BE OBTAINED FROM [HIGHWAY AUTHORITY]]".

### 4. Development Proposals (400-800 words)
#### 4.1 Land Use and Trip Generation
- Describe the proposed development: use class, number of units or floor area.
- Set out the trip generation using TRICS or comparable methodology.
- State the TRICS site selection criteria (if used): location type, development size range, survey days.
- Present trip rates per unit/per 100sqm for the AM peak, PM peak, and daily.
- Calculate total trip generation for the proposed development.
- For changes of use or redevelopment: calculate the net change in trips compared with the existing/permitted use.

#### 4.2 Trip Distribution and Assignment
- Describe the expected trip distribution (directional split) based on census journey-to-work data or local knowledge.
- Assign trips to the local road network.
- Identify the key junctions for assessment.

#### 4.3 Parking Provision
- Set out the proposed parking provision: total car parking spaces, disabled spaces, cycle spaces, motorcycle spaces.
- Compare with the local parking standards and justify any departure.
- Describe EV charging provision (active and passive spaces).
- Describe cycle parking: type (Sheffield stands, lockers, covered), location, quantum, compliance with LTN 1/20.

#### 4.4 Servicing and Deliveries
- Describe servicing arrangements: delivery vehicle access, turning, loading/unloading.
- Refuse vehicle access and collection arrangements.
- Demonstrate that servicing can be accommodated without conflict with pedestrians or parking.

### 5. Access Arrangements (400-800 words)
#### 5.1 Vehicular Access
- Describe the proposed vehicular access: location, type (priority junction, simple crossover, shared surface).
- Visibility splays: state the required splays (based on Manual for Streets Table 7.1 or DMRB) and demonstrate compliance.
- Junction geometry: kerb radii, carriageway width, throat width.
- For new junctions: describe the junction type, lane widths, and any right-turn facilities.
- Reference the access drawing by number.

#### 5.2 Pedestrian and Cycle Access
- Describe the proposed pedestrian access points and connections to the surrounding footway network.
- Describe cycle access and connections to the cycle network.
- Any proposed new or improved pedestrian/cycle infrastructure.

#### 5.3 Internal Layout
- Describe the internal road layout: road widths, turning heads, shared surfaces.
- Demonstrate that the internal layout complies with Manual for Streets and the highway authority's adoption standards (where roads are to be adopted).
- Swept-path analysis for refuse vehicles and fire tenders (reference tracking drawings if submitted).

### 6. Traffic Impact Analysis (300-600 words)
- Add the predicted development traffic to the existing baseline flows.
- Calculate the percentage increase in traffic on each key route and at each key junction.
- Apply the NPPF Paragraph 109 test: is the impact "severe"?
- For junction assessments: describe the methodology (PICADY, ARCADY, LinSig) and present the results if capacity assessments have been undertaken. If not, provide a proportionate assessment based on flow data.
- Consider AM peak, PM peak, and any other relevant peak periods.
- Consider committed developments (consented schemes not yet built) if data is available.
- Conclude on the severity of the traffic impact.

### 7. Mitigation and Travel Plan Measures (300-600 words)
- If mitigation is required, describe the proposed measures: junction improvements, new pedestrian crossings, traffic calming, cycle infrastructure.
- Set out Travel Plan measures (where a Travel Plan is required or proposed):
  - Travel Plan Coordinator appointment.
  - Targets: mode share targets for reduction in single-occupancy car trips.
  - Measures: cycle purchase scheme, public transport incentives, car sharing, EV charging, travel information packs.
  - Monitoring: annual travel surveys, reporting to the highway authority.
  - Remedial measures if targets are not met.
- Reference any proposed S106/S278 highway works.
- Describe any proposed contributions to sustainable transport infrastructure.

### 8. Conclusions (300-500 words)
- Summarise the site's accessibility and the genuine choice of transport modes available.
- Summarise the trip generation and traffic impact.
- Confirm that safe and suitable access can be achieved.
- Confirm that parking provision complies with local standards.
- Apply the NPPF Paragraph 109 test: confirm that there would not be an unacceptable impact on highway safety and that the residual cumulative impact would not be severe.
- Confirm compliance with NPPF Paragraphs 104-113 and relevant local transport policies.
- Request that the highway authority raise no objection to the proposal.

## Quality Standards

- Reference specific NPPF paragraphs (104-113) by number.
- Reference Manual for Streets and/or DMRB for access design standards.
- Use TRICS or equivalent for trip generation (or flag where data is needed).
- Include specific distances to bus stops, stations, and key destinations.
- Quantify parking provision and compare with local standards.
- Apply the NPPF "severe" impact test correctly.
- Use professional transport planning terminology throughout (AADT, AAWT, PCU, ATC, MCC, TRICS, PICADY, ARCADY).
- Where survey data has not been provided, clearly state what data is needed and recommend appropriate surveys.`;

export const TRANSPORT_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, proposal summary, and document scope.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the TS purpose and NPPF Paragraph 111 requirement. Identify the site. Summarise the proposal. Confirm the assessment scope. Outline the document structure.',
  },
  {
    name: 'Site Location and Accessibility',
    description: 'Site context, public transport, walking and cycling accessibility assessment.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe surrounding road network and classification. Assess public transport: bus stops (names, distances, services, frequencies), railway stations. Assess walking: distances to key destinations compared with CIHT guidelines. Assess cycling: cycle routes and distances. Conclude on overall accessibility.',
    subsections: [
      {
        name: 'Site Context',
        description: 'Location within settlement and surrounding road network.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe the site within its settlement context. Describe surrounding roads, classification, speed limits.',
      },
      {
        name: 'Public Transport Accessibility',
        description: 'Bus, rail, and other public transport assessment.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'List bus stops with names, distances, services, and frequencies. Describe rail access. State PTAL if available.',
      },
      {
        name: 'Walking and Cycling',
        description: 'Pedestrian and cycle infrastructure and distances to destinations.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe footways and cycle routes. List walking distances to key destinations. Compare with CIHT guidelines (400m/800m/1200m).',
      },
      {
        name: 'Accessibility Summary',
        description: 'Overall conclusion on site accessibility.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Conclude that the site is accessible with genuine modal choice.',
      },
    ],
  },
  {
    name: 'Existing Highway Conditions',
    description: 'Road network, traffic flows, and road safety data.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe the road network: carriageway widths, footways, speed limits. Present traffic flow data (AM and PM peaks) or flag as required. Analyse 5-year PIA data for accident patterns and road safety concerns.',
    subsections: [
      {
        name: 'Road Network Description',
        description: 'Description of roads and junctions in the study area.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe carriageway widths, footways, speed limits, traffic calming, and key junctions.',
      },
      {
        name: 'Traffic Flow Data',
        description: 'Existing traffic flows on key routes.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Present peak hour flows where available. Flag where survey data is required.',
      },
      {
        name: 'Road Safety',
        description: 'Personal injury accident data analysis.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Analyse 5-year PIA data: number, severity, type, patterns. Identify any road safety concerns.',
      },
    ],
  },
  {
    name: 'Development Proposals',
    description: 'Trip generation, distribution, parking, and servicing.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Calculate trip generation using TRICS or equivalent. Present trip rates and total trips for AM/PM peaks and daily. Distribute and assign trips. Set out parking provision and compare with local standards. Describe EV charging and cycle parking. Describe servicing arrangements.',
    subsections: [
      {
        name: 'Trip Generation',
        description: 'Vehicle trip generation using TRICS or equivalent.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'State TRICS selection criteria, trip rates per unit/100sqm, and total trip generation. For redevelopment, calculate net change.',
      },
      {
        name: 'Trip Distribution and Assignment',
        description: 'Directional distribution of trips on the network.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Describe directional split based on census data. Assign to road network.',
      },
      {
        name: 'Parking Provision',
        description: 'Car, cycle, and EV parking compliance with local standards.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'State total spaces: car, disabled, cycle, motorcycle, EV. Compare with local standards.',
      },
      {
        name: 'Servicing and Deliveries',
        description: 'Delivery access, refuse collection, and servicing arrangements.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Describe delivery vehicle access, turning, loading, and refuse collection.',
      },
    ],
  },
  {
    name: 'Access Arrangements',
    description: 'Vehicular, pedestrian, and cycle access design with visibility splays.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe vehicular access type, location, and design. State required visibility splays (Manual for Streets Table 7.1) and demonstrate compliance. Describe pedestrian and cycle access. Describe internal road layout and swept-path compliance. Reference access drawings.',
    subsections: [
      {
        name: 'Vehicular Access',
        description: 'Access point design, visibility splays, and junction geometry.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe access type and location. State visibility splay requirements and compliance. Describe kerb radii and widths.',
      },
      {
        name: 'Pedestrian and Cycle Access',
        description: 'Walking and cycling connections to surrounding network.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe pedestrian and cycle access points and connections to surrounding infrastructure.',
      },
      {
        name: 'Internal Layout',
        description: 'Internal roads, turning, and swept-path analysis.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe road widths, turning heads, shared surfaces. Demonstrate refuse/fire vehicle tracking compliance.',
      },
    ],
  },
  {
    name: 'Traffic Impact Analysis',
    description: 'Assessment of traffic impact on the local road network.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Add development traffic to baseline flows. Calculate percentage increase on key routes. Apply NPPF Paragraph 109 "severe" impact test. Present junction assessment results if available, or provide proportionate assessment. Consider committed developments. Conclude on severity.',
  },
  {
    name: 'Mitigation and Travel Plan Measures',
    description: 'Highway works, travel plan measures, and sustainable transport contributions.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe any mitigation: junction improvements, crossings, traffic calming. Set out Travel Plan measures: coordinator, mode share targets, incentives, monitoring, remedial measures. Note proposed S106/S278 works and sustainable transport contributions.',
  },
  {
    name: 'Conclusions',
    description: 'Summary of accessibility, impact, and NPPF compliance.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise accessibility and modal choice. Summarise trip generation and traffic impact. Confirm safe and suitable access. Confirm parking compliance. Apply the NPPF Paragraph 109 test. Confirm compliance with NPPF Paragraphs 104-113. Request no highway objection.',
  },
];

export const TRANSPORT_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Site Location and Accessibility',
    'Existing Highway Conditions',
    'Development Proposals',
    'Access Arrangements',
    'Traffic Impact Analysis',
    'Mitigation and Travel Plan Measures',
    'Conclusions',
  ],
  max_quality_score: 100,
};

export const TRANSPORT_TEMPLATE = {
  assessment_type: 'Transport Statement',
  short_name: 'TS',
  version: 1,
  sections: TRANSPORT_SECTIONS,
  quality_criteria: TRANSPORT_QUALITY,
};
