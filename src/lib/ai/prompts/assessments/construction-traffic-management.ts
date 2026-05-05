import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Construction Traffic Management Plan (CTMP) -- often required by
 * planning condition or by the highway authority as part of the planning
 * application for developments that will generate significant construction
 * traffic, involve heavy vehicle movements on residential streets, or
 * require temporary road closures or traffic management measures.
 *
 * This prompt produces a comprehensive CTMP suitable for submission to
 * discharge a planning condition or to accompany a planning application.
 * The output should read as though prepared by a construction logistics
 * or transport planning consultant.
 */

export const CTMP_PROMPT = `You are preparing a Construction Traffic Management Plan (CTMP) to accompany a planning application or to discharge a planning condition for a development in England.

## Document Purpose

A Construction Traffic Management Plan sets out the measures to manage and mitigate the impact of construction traffic and construction activity on the local highway network, neighbouring residents, and the environment. The CTMP must:
- Describe the site location, access arrangements, and surrounding highway network.
- Set out the construction programme and phases.
- Identify the anticipated types and volumes of construction vehicles.
- Define approved vehicle routes to and from the site, avoiding sensitive streets.
- Describe traffic management measures during construction.
- Set out delivery management arrangements to minimise peak-hour movements.
- Describe wheel washing and highway cleanliness measures.
- Define construction working hours and any restrictions.
- Set out measures to protect pedestrian and cyclist safety during construction.
- Describe communication arrangements with neighbours and the highway authority.

## Key References

### Planning Policy Context
- **NPPF Paragraph 109**: Development should only be prevented or refused on highways grounds if there would be an unacceptable impact on highway safety, or the residual cumulative impacts on the road network would be severe.
- **NPPF Paragraph 110**: Applications should create places that are safe, secure and attractive, which minimise the scope for conflicts between pedestrians, cyclists and vehicles.
- Construction traffic management is frequently secured by planning condition. The CTMP demonstrates how construction impacts will be managed to an acceptable level.

### Construction Logistics and Safety
- **Transport for London (TfL) Construction Logistics Plan (CLP) Guidance (2017)**: Applicable for London developments; best practice for all areas. Sets out the methodology for assessing construction traffic impacts and the management measures required.
- **CLOCS Standard (Construction Logistics and Community Safety)**: Industry standard for managing construction vehicle safety, particularly in relation to vulnerable road users (cyclists and pedestrians).
- **Fleet Operator Recognition Scheme (FORS)**: Accreditation scheme for fleet operators promoting safety, efficiency, and environmental protection. FORS Silver or Gold accreditation may be required by condition.
- **Work-Related Road Risk guidance (HSE)**: Health and safety obligations for construction vehicle movements.
- **Traffic Signs Manual Chapter 8 (DfT)**: Requirements for temporary traffic management signs and equipment.
- **Safety at Street Works and Road Works: A Code of Practice (DfT)**: Requirements for temporary traffic management.
- **BS 5228-1:2009+A1:2014**: Code of practice for noise and vibration control on construction and open sites (relevant to working hours and vehicle movements).
- **Considerate Constructors Scheme (CCS)**: Best practice for considerate construction activity.

### Local Authority Requirements
- Local highway authority construction traffic management guidance (where published).
- Standard planning conditions for construction management.
- Any pre-application or discharge of condition requirements specified by the LPA.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the CTMP and the planning condition or policy requirement it addresses.
- Identify the application site by full postal address.
- Summarise the proposed development: use, scale, number of units or floor area.
- State the relevant planning permission reference number (or note "[PLANNING REFERENCE]" if pre-determination).
- Note any conditions requiring the CTMP to be submitted and approved prior to commencement.
- Identify the principal contractor (or note "[PRINCIPAL CONTRACTOR TO BE APPOINTED]").
- Describe the document's relationship to the wider Construction Environmental Management Plan (CEMP) where applicable.
- Outline the document structure.

### 2. Site Location and Access (300-600 words)
#### 2.1 Site Location
- Describe the site location within the settlement.
- Describe the surrounding road network: road names, classification, carriageway widths, speed limits, weight restrictions, and height restrictions.
- Describe the surrounding land uses with specific attention to sensitive receptors: residential properties, schools, hospitals, care homes, places of worship, parks, and playgrounds.
- Identify any specific constraints: narrow roads, one-way streets, low bridges, tight bends, weight-restricted routes.

#### 2.2 Site Access
- Describe the proposed construction traffic access point(s) to the site.
- Describe the access geometry: entrance width, gate or hoarding position, visibility splays.
- Distinguish between the construction access and the permanent development access if they differ.
- Describe any temporary crossovers, dropped kerbs, or highway works required for construction access.
- Describe how pedestrian and cyclist safety will be maintained at the access point(s): banks-persons, traffic signals, signage, barriers, pedestrian diversions.
- Reference access drawings where available (or flag as "[CONSTRUCTION ACCESS DRAWING TO BE PROVIDED]").

### 3. Construction Programme (300-600 words)
- Set out the anticipated construction programme with key phases and durations:
  - Site clearance and demolition (if applicable).
  - Enabling works (foundations, piling, ground preparation).
  - Substructure (below ground level).
  - Superstructure (above ground level).
  - Building envelope and fit-out.
  - External works, landscaping, and highways.
- Present the programme in Gantt chart format or tabular format:
  | Phase | Description | Approximate Duration | Anticipated Start | Anticipated Completion |
- Identify the phases with the highest construction traffic intensity (typically enabling works and superstructure).
- State the overall anticipated construction duration.
- Note that the programme is indicative and subject to change, but the traffic management measures apply throughout.

### 4. Vehicle Routing (400-800 words)
#### 4.1 Approved Routes
- Define the approved vehicle route(s) from the strategic road network (motorway/trunk road) to the site.
- Describe the route in detail: road names, junctions, and turning movements.
- Justify the route selection: avoidance of residential streets, schools, and other sensitive receptors; suitability for heavy vehicles (road widths, weight limits, turning radii).
- Present the approved route(s) on a plan (or flag as "[VEHICLE ROUTING PLAN TO BE PROVIDED]").

#### 4.2 Prohibited Routes
- Identify routes that construction vehicles must not use, with clear justification: residential streets, roads with weight restrictions, roads past schools (during school opening/closing times), narrow lanes.
- Describe how prohibited routes will be communicated to drivers (briefings, route cards, GPS/satnav restrictions).

#### 4.3 Route Signage
- Describe any temporary directional signage to be installed to guide construction vehicles along the approved route.
- Reference Traffic Signs Manual Chapter 8 requirements.
- Note the need for highway authority approval of temporary signage.

### 5. Traffic Management Measures (400-800 words)
#### 5.1 Vehicle Types and Volumes
- Estimate the types and volumes of construction vehicles anticipated during each phase:
  - HGVs (articulated and rigid): concrete deliveries, steel, materials, plant.
  - LGVs: tradespeople, suppliers.
  - Abnormal loads: oversized deliveries, crane mobilisation.
  - Worker vehicles: cars, minibuses.
- Present estimated daily vehicle movements (arrivals + departures) by phase in tabular format:
  | Phase | HGV Movements/Day | LGV Movements/Day | Worker Vehicles/Day | Total/Day |

#### 5.2 On-Site Traffic Management
- Describe the on-site traffic circulation: one-way systems, turning areas, loading/unloading areas, plant storage zones.
- Describe how vehicles will enter and exit the site: banksman control, traffic signals, holding areas.
- Describe the on-site vehicle speed limit (typically 5-10 mph).
- Describe how conflicts between pedestrians and vehicles on site will be managed.
- Describe the site compound location and temporary works layout.

#### 5.3 Off-Site Traffic Management
- Describe any temporary traffic management measures on the public highway:
  - Temporary traffic signals or stop/go boards.
  - Road closures (with dates, times, and diversion routes -- subject to highway authority approval).
  - Footway closures and pedestrian diversions (with alternative routes and appropriate signage).
  - Cycle lane diversions.
  - Temporary speed restrictions.
  - Banksmen or traffic marshals at the site entrance.
- Reference the need for Section 171 (licence to place skip/hoarding on highway) or Section 176 (licence to erect hoarding) of the Highways Act 1980 where applicable.
- Reference the need for temporary traffic regulation orders (TTROs) where road closures are required.

#### 5.4 Pedestrian and Cyclist Safety
- Describe specific measures to protect pedestrians and cyclists:
  - Banksmen at all vehicle entry/exit points during deliveries.
  - Clear signage and barriers separating pedestrians from construction traffic.
  - Maintained footway access (or clearly signed diversions with dropped kerbs and tactile paving).
  - Cyclist safety: cycle lane protection or diversions, CLOCS-compliant vehicles, FORS-accredited operators.
  - School drop-off/pick-up times: no HGV movements during school opening and closing times (typically 08:00-09:00 and 15:00-16:00 on weekdays during term time) if the route passes a school.

### 6. Delivery Management (300-600 words)
- Describe the delivery management system:
  - Pre-booked delivery slots: all HGV deliveries to be pre-booked within agreed time windows.
  - Delivery windows: avoid network peak hours (typically no HGV deliveries 07:30-09:30 and 16:30-18:30, or as agreed with the highway authority).
  - Maximum number of deliveries per hour or per day.
  - Delivery holding area: where vehicles will wait if they arrive early or cannot be accommodated on site immediately (off the public highway).
  - Consolidation: use of a construction consolidation centre to reduce the number of vehicle movements to the site.
- Describe the logistics management role:
  - Appointment of a Construction Logistics Manager or Site Manager responsible for delivery coordination.
  - Use of a booking system or logistics management software.
  - Communication with delivery companies regarding approved routes, site rules, and time slots.
- Describe procedures for rejecting non-compliant deliveries (arriving outside booked slots, using prohibited routes, non-FORS vehicles where required).

### 7. Wheel Washing and Highway Cleanliness (200-400 words)
- Describe the wheel washing facility:
  - Type: automated wheel wash, manual jet wash, or wheel bath.
  - Location: within the site boundary, positioned to ensure all vehicles pass through before exiting.
  - Capacity: able to handle the anticipated vehicle volumes.
  - Water recycling: describe how wash water is collected, treated, and recycled (discharge to sewer requires water company consent).
- Describe additional highway cleanliness measures:
  - Road sweeping: mechanical road sweeper deployed as necessary (state frequency, e.g., daily during earthworks phase).
  - Vehicle sheeting: all vehicles carrying loose materials to be fully sheeted before leaving the site.
  - Monitoring: regular inspection of the highway adjacent to the site entrance; immediate clean-up of any tracked debris.
- State the commitment that the public highway will be kept clean and free of mud and debris at all times.
- Reference Section 148 of the Highways Act 1980 (offence to deposit material on the highway) and Section 149 (duty to remove deposits on the highway).

### 8. Working Hours and Noise (200-400 words)
- State the approved construction working hours:
  - Standard: Monday to Friday 08:00-18:00, Saturday 08:00-13:00, no working on Sundays or Bank Holidays (or as conditioned).
  - Note any variations agreed or sought for specific activities (e.g., concrete pours, crane operations, highway works requiring night-time closures).
- Describe measures to minimise noise and disturbance:
  - Best practicable means (BPM) to minimise noise as required by Section 60/61 of the Control of Pollution Act 1974.
  - Reference BS 5228-1:2009+A1:2014 for noise control.
  - Noise barriers or hoardings around the site perimeter.
  - Use of quiet plant and equipment.
  - Piling methodology (where applicable): CFA, rotary bored, or driven (with justification for the chosen method).
- Describe vibration management where relevant (piling, demolition, heavy compaction).
- Describe the complaints procedure: site contact details, 24-hour emergency contact, response timescales.
- Reference registration with the Considerate Constructors Scheme.

### 9. Conclusion (200-400 words)
- Summarise the key traffic management measures.
- Confirm that the CTMP demonstrates how construction traffic impacts will be managed to an acceptable level.
- Confirm that pedestrian and cyclist safety will be maintained throughout construction.
- Confirm that the highway will be kept clean and free of debris.
- Confirm compliance with any relevant planning conditions.
- State that the CTMP will be reviewed and updated as construction progresses, with amendments submitted to the LPA for approval where required.
- Note that the CTMP will be made available to all contractors and delivery companies working on the project.
- Provide the site contact details for construction traffic queries: Site Manager name, telephone number, email (or flag as "[TO BE CONFIRMED ON APPOINTMENT]").

## Quality Standards

- Reference NPPF Paragraphs 109-110 where relevant.
- Reference TfL CLP Guidance where applicable (London sites), or equivalent local guidance.
- Reference CLOCS standard and FORS accreditation.
- Reference Traffic Signs Manual Chapter 8 for temporary traffic management.
- Reference Highways Act 1980 sections (148, 149, 171, 176) as applicable.
- Reference Control of Pollution Act 1974 (Sections 60/61) and BS 5228 for noise.
- Include specific estimated vehicle numbers by phase.
- Present data in tabular format where appropriate.
- Use professional construction logistics terminology.
- Where detailed programme data has not been provided, flag as "[DETAILED CONSTRUCTION PROGRAMME TO BE PROVIDED BY PRINCIPAL CONTRACTOR]".
- The document must be practical and implementable -- not a theoretical exercise.`;

export const CTMP_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, development summary, planning reference, and contractor.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the CTMP purpose and planning condition requirement. Identify the site. Summarise the proposal. State the planning reference. Note relevant conditions. Identify the principal contractor. Describe relationship to CEMP. Outline the document structure.',
  },
  {
    name: 'Site Location and Access',
    description: 'Site context, surrounding network, sensitive receptors, and construction access arrangements.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe the site location and surrounding road network with widths, speed limits, and restrictions. Identify sensitive receptors (schools, hospitals, residential). Describe construction access point geometry and visibility. Describe pedestrian/cyclist safety at the access. Reference access drawings.',
    subsections: [
      {
        name: 'Site Location',
        description: 'Location, surrounding roads, and sensitive receptors.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe the site within its settlement. Describe surrounding roads and sensitive receptors.',
      },
      {
        name: 'Site Access',
        description: 'Construction access point design and pedestrian safety.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe access geometry, temporary works, and pedestrian/cyclist safety measures at the entrance.',
      },
    ],
  },
  {
    name: 'Construction Programme',
    description: 'Key phases, durations, and peak traffic intensity periods.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out the construction programme by phase in tabular or Gantt format. Identify phases with highest traffic intensity. State overall duration. Note the programme is indicative.',
  },
  {
    name: 'Vehicle Routing',
    description: 'Approved and prohibited routes with justification and signage.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Define approved routes from the strategic network to the site with road names and junctions. Justify route selection. Identify prohibited routes with reasons. Describe driver communication (briefings, route cards). Describe temporary directional signage. Reference Traffic Signs Manual Chapter 8.',
    subsections: [
      {
        name: 'Approved Routes',
        description: 'Defined routes from the strategic network to the site.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Define routes with road names and junctions. Justify selection. Present on a plan.',
      },
      {
        name: 'Prohibited Routes',
        description: 'Routes that construction vehicles must not use.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Identify prohibited routes with reasons. Describe driver communication.',
      },
      {
        name: 'Route Signage',
        description: 'Temporary directional signage arrangements.',
        required: false,
        min_words: 50,
        max_words: 150,
        guidance: 'Describe temporary signage. Reference Traffic Signs Manual Chapter 8.',
      },
    ],
  },
  {
    name: 'Traffic Management Measures',
    description: 'Vehicle volumes, on-site circulation, off-site measures, and pedestrian/cyclist safety.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Estimate vehicle types and daily volumes by phase in tabular format. Describe on-site circulation, speed limits, and compound layout. Describe off-site measures: temporary signals, road closures, footway diversions. Describe pedestrian/cyclist safety: banksmen, barriers, CLOCS, FORS, school exclusion times. Reference Highways Act.',
    subsections: [
      {
        name: 'Vehicle Types and Volumes',
        description: 'Estimated construction vehicle movements by phase.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Present HGV, LGV, and worker vehicle movements per day by phase in tabular format.',
      },
      {
        name: 'On-Site Traffic Management',
        description: 'Site circulation, turning, loading, and speed limits.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Describe on-site circulation, banksman control, speed limit, and compound layout.',
      },
      {
        name: 'Off-Site Traffic Management',
        description: 'Temporary traffic management on the public highway.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe temporary signals, road/footway closures, diversions, and highway licences/TTROs.',
      },
      {
        name: 'Pedestrian and Cyclist Safety',
        description: 'Specific measures to protect vulnerable road users.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe banksmen, barriers, footway maintenance, CLOCS/FORS, and school time restrictions.',
      },
    ],
  },
  {
    name: 'Delivery Management',
    description: 'Pre-booked deliveries, time windows, holding areas, and logistics management.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe the delivery booking system. State delivery windows avoiding peak hours. State maximum deliveries per hour/day. Describe the holding area. Describe consolidation measures. Identify the logistics manager role. Describe procedures for non-compliant deliveries.',
  },
  {
    name: 'Wheel Washing and Highway Cleanliness',
    description: 'Wheel wash facility, road sweeping, vehicle sheeting, and highway monitoring.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Describe the wheel wash type, location, and capacity. Describe road sweeping frequency. Require vehicle sheeting. Describe highway inspection and clean-up. Reference Highways Act Sections 148 and 149.',
  },
  {
    name: 'Working Hours and Noise',
    description: 'Approved hours, noise management, vibration, and complaints procedure.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State approved working hours (or conditioned hours). Describe noise mitigation: BPM, BS 5228, noise barriers, quiet plant. Describe vibration management. Describe the complaints procedure with contact details. Reference CoPA 1974 Sections 60/61. Note CCS registration.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of measures, compliance confirmation, and site contact details.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise key traffic management measures. Confirm pedestrian/cyclist safety. Confirm highway cleanliness. Confirm compliance with conditions. Note CTMP will be reviewed and updated. Provide site contact details.',
  },
];

export const CTMP_QUALITY: QualityCriteria = {
  min_policy_refs: 4,
  required_sections: [
    'Introduction',
    'Site Location and Access',
    'Construction Programme',
    'Vehicle Routing',
    'Traffic Management Measures',
    'Delivery Management',
    'Wheel Washing and Highway Cleanliness',
    'Working Hours and Noise',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const CTMP_TEMPLATE = {
  assessment_type: 'Construction Traffic Management Plan',
  short_name: 'CTMP',
  version: 1,
  sections: CTMP_SECTIONS,
  quality_criteria: CTMP_QUALITY,
};
