import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Construction Management Plan (CMP) -- frequently required as a
 * pre-commencement condition or as a submission document for planning
 * applications involving significant construction activity, particularly
 * in urban areas, near sensitive receptors, or for major developments.
 *
 * The CMP sets out how construction will be managed to minimise
 * disruption, nuisance, and environmental impact on the surrounding
 * area and its occupants.
 */

export const CMP_PROMPT = `You are preparing a Construction Management Plan (CMP) to accompany a planning application (or to discharge a planning condition) submitted to a local planning authority in England. The CMP sets out the measures that will be implemented during the construction phase to minimise noise, dust, traffic disruption, and other environmental impacts on the surrounding area, including residents, businesses, and the natural environment.

## Document Purpose

A Construction Management Plan must:
- Describe the construction programme, phasing, and working hours.
- Set out site setup arrangements, including compound location, hoarding, welfare facilities, and material storage.
- Describe measures to control noise and vibration during construction.
- Describe measures to control dust and maintain air quality.
- Set out the construction traffic management strategy, including routing, deliveries, and wheel washing.
- Describe waste management arrangements during construction.
- Set out the community liaison strategy.
- Describe environmental protection measures (ecology, watercourses, contamination).
- Establish monitoring arrangements and complaint procedures.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 180**: Planning decisions should contribute to and enhance the natural and local environment.
- **Paragraph 185**: Planning policies and decisions should ensure that new development is appropriate for its location taking into account the likely effects (including cumulative effects) of pollution on health, living conditions, and the natural environment.
- **Paragraph 186**: Planning decisions should sustain and contribute towards compliance with relevant limit values or national objectives for pollutants, taking into account the presence of Air Quality Management Areas.

### British Standards
- **BS 5228-1:2009+A1:2014**: Code of practice for noise and vibration control on construction and open sites -- Part 1: Noise.
- **BS 5228-2:2009+A1:2014**: Code of practice for noise and vibration control on construction and open sites -- Part 2: Vibration.
- **BS 6472-1:2008**: Guide to evaluation of human exposure to vibration in buildings.

### Air Quality Guidance
- **IAQM Guidance on the Assessment of Dust from Demolition and Construction (2023)**: Step-by-step methodology for assessing dust risk and identifying appropriate mitigation.
- **GLA SPG on the Control of Dust and Emissions during Construction and Demolition (2014)** (London only): Non-Road Mobile Machinery (NRMM) requirements and best practice.
- **DEFRA Clean Air Strategy 2019**: National context for air quality management.

### Other Key References
- **The Control of Pollution Act 1974**: Section 60 (prior consent for construction works) and Section 61 (agreements relating to construction noise).
- **Environmental Protection Act 1990**: Statutory nuisance provisions.
- **Construction (Design and Management) Regulations 2015 (CDM 2015)**: Health and safety requirements for construction.
- **CIRIA C741**: Environmental good practice on site (4th edition, 2015).
- **CIRIA C532**: Control of water pollution from construction sites.
- **Considerate Constructors Scheme (CCS)**: Voluntary best practice scheme.
- **WRAP**: Resource efficiency and waste reduction guidance.
- **Local authority CMP guidance**: Many authorities publish CMP requirements or checklists.
- **Highways Authority requirements**: Temporary traffic orders, traffic management plans, and vehicle routing agreements.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the CMP and the requirement (planning condition reference or submission with application).
- Identify the site and the proposed development.
- Name the principal contractor (or note "[TO BE APPOINTED]" for pre-construction CMPs).
- State the anticipated construction programme duration.
- Confirm that the CMP is a live document that will be reviewed and updated as necessary.
- Note any consultation with the LPA Environmental Health team or highways authority.
- Outline the document structure.

### 2. Site Description (300-500 words)
- Describe the site: location, size, current condition, access points.
- Describe the surrounding context with specific attention to sensitive receptors:
  - Residential properties (identify specific properties or groups, with approximate distances).
  - Schools, nurseries, hospitals, care homes, places of worship.
  - Businesses and commercial premises.
  - Public rights of way and public open spaces.
  - Ecological receptors: watercourses, protected habitats, trees with TPOs.
  - Heritage assets: listed buildings, conservation areas, scheduled monuments.
- Describe the existing access arrangements and highway network.
- Identify any site constraints relevant to construction (e.g., restricted access, overhead cables, underground services, contamination).

### 3. Construction Programme (300-600 words)
- Set out the anticipated construction programme with key phases and durations.
- Typical phases may include: enabling works/demolition, earthworks/foundations, substructure, superstructure, fit-out, external works, commissioning.
- State the overall construction period (months).
- Identify the most intensive/disruptive phases and their approximate timing.
- Set out working hours:
  - Standard working hours (typically Monday-Friday 08:00-18:00, Saturday 08:00-13:00, no working on Sundays or Bank Holidays -- but check local authority requirements).
  - Any requirement for extended hours for specific activities (e.g., concrete pours, crane operations, road closures during off-peak hours).
  - Confirmation that noisy work will be restricted to the core working hours.
- State the anticipated peak number of construction workers on site.

### 4. Site Setup and Logistics (400-800 words)
- Describe the site compound location: offices, welfare facilities, material storage, parking.
- Describe site hoarding: type, height, location, graphics/community information boards, maintenance.
- Describe site access:
  - Construction vehicle access point(s) and any temporary access arrangements.
  - Pedestrian access for workers.
  - Separation of construction traffic from pedestrians and cyclists.
- Describe material storage and handling arrangements.
- Describe crane positions (if applicable): type, height, oversail, consultation with adjacent landowners.
- Describe temporary works: scaffolding, shoring, temporary drainage, temporary lighting.
- Describe security arrangements: CCTV, fencing, lighting, manned security.
- Describe welfare facilities: toilets, washing, drying rooms, rest areas, first aid.
- Present a site logistics plan or reference "[SITE LOGISTICS PLAN APPENDED]".

### 5. Noise and Vibration Management (500-1000 words)
- Set out the noise control strategy in accordance with BS 5228-1:
  - **Best Practicable Means (BPM)**: Commitment to apply BPM to minimise noise as far as reasonably practicable.
  - **Plant selection**: Use of modern, well-maintained plant with low noise emission levels. Specify noise levels for key plant items or reference manufacturer data.
  - **Operational measures**: Switching off engines when not in use, no unnecessary revving, no radios audible outside the site boundary, positioning noisy plant away from sensitive receptors.
  - **Physical measures**: Acoustic hoarding (minimum height and specification), temporary noise barriers, enclosures for static plant (generators, compressors).
  - **Scheduling**: Programming the noisiest activities for the least sensitive times within permitted hours. Avoiding simultaneous noisy activities near the same receptor.
- Describe vibration control measures in accordance with BS 5228-2:
  - Identify vibration-generating activities: piling, compaction, demolition, heavy vehicle movements.
  - Specify vibration limits at sensitive receptors (typically PPV 1.0 mm/s for cosmetic damage threshold per BS 7385, and perceptibility threshold per BS 6472).
  - Describe the approach to vibration-generating work: selection of low-vibration methods (e.g., CFA piling over driven piling, use of vibration-dampened compaction equipment).
- Describe the noise and vibration monitoring programme:
  - Baseline noise survey (pre-construction).
  - Continuous or periodic monitoring during construction at identified sensitive receptors.
  - Trigger levels and action plan if exceeded.
  - Frequency of monitoring and reporting.
- Consider Section 61 agreement with the local authority (if appropriate for prolonged or particularly noisy works).

### 6. Dust and Air Quality Management (400-800 words)
- Set out the dust management strategy in accordance with the IAQM Guidance on the Assessment of Dust from Demolition and Construction:
  - **Risk assessment**: Classify the dust emission risk as low, medium, or high based on the scale and nature of works and the sensitivity of surrounding receptors.
  - **Dust suppression measures**:
    - Damping down of haul roads, stockpiles, and demolition areas.
    - Water sprays and misting systems on cutting and grinding operations.
    - Covering of stockpiles and skips.
    - Sheeting of vehicles carrying dusty materials.
    - Speed limits on haul roads (typically 10-15 mph).
    - Wheel washing and road sweeping.
  - **Demolition measures** (where applicable): Soft strip before demolition, damping during demolition, use of enclosed crushers.
  - **Materials handling**: Enclosed storage, drop heights minimised, cement handling in enclosed systems.
  - **Monitoring**: Visual dust monitoring (daily), real-time PM10/PM2.5 monitoring where required by the LPA, trigger levels and action plan.
- For London sites, address the GLA NRMM requirements:
  - All NRMM used on site must meet the emissions standards for the relevant zone (Central Activity Zone, Greater London).
  - Registration with the NRMM Register.
  - Exemption procedures where compliant machinery is not available.
- Describe measures to control emissions from construction plant and vehicles: Euro VI vehicles, use of electric or hybrid plant where feasible, no idling policy.

### 7. Traffic Management (500-1000 words)
- Set out the construction traffic management strategy:
  - **Vehicle routing**: Approved routes for construction vehicles (to and from the site). Identify routes to be avoided (residential streets, school zones, weight-restricted routes). Provide a route plan.
  - **Deliveries management**: Booking system for deliveries (to avoid queuing on the highway). Consolidation strategy (reducing total vehicle movements). Delivery times (avoiding peak hours -- typically restrict to 09:30-15:30 for urban sites).
  - **Vehicle numbers**: Estimate the number of daily HGV and LGV movements during each construction phase. State the peak daily vehicle numbers.
  - **Wheel washing**: Specification and location of wheel wash facility. Procedure for cleaning the highway if mud is tracked.
  - **Banksman/marshal**: Use of trained banksmen for vehicle manoeuvring at the site access. Requirement for all reversing movements to be supervised.
  - **Pedestrian and cyclist safety**: Temporary footway diversions, signage, barriers, marshals at peak times.
  - **Parking**: Construction worker parking arrangements (on-site, designated off-site, public transport encouragement). Prohibition of worker parking on surrounding streets.
  - **Temporary traffic management**: Any road closures, lane closures, or temporary traffic signals required (with reference to the need for a temporary traffic regulation order).
  - **Construction Logistics Plan (CLP)**: For London, reference the TfL CLP requirements and the CLOCS (Construction Logistics and Community Safety) standard.

### 8. Waste Management (300-600 words)
- Set out the construction waste management strategy:
  - Waste minimisation: design for waste reduction, offsite manufacture, standardisation.
  - Waste segregation: on-site separation into recyclable streams (timber, metals, plasterboard, concrete/rubble, mixed waste).
  - Target for waste diversion from landfill (typically 90%+ for best practice).
  - Waste carriers: confirm all waste carriers will be licensed. Confirm duty of care compliance.
  - Waste transfer notes: maintenance of records for all waste removed from site.
  - Hazardous waste: identification and segregation of hazardous materials (asbestos, contaminated soil, paint, solvents). Registered hazardous waste carriers. Consignment notes.
  - Demolition waste (where applicable): pre-demolition audit, salvage of reusable materials, crushing and reuse of concrete/brick on site (subject to EA exemption or permit).
- Reference WRAP guidance on resource efficiency in construction.

### 9. Community Liaison (300-500 words)
- Describe the community liaison strategy:
  - **Liaison contact**: Name (or role) and contact details of the community liaison officer or site manager. Available during working hours and on an emergency basis.
  - **Pre-start notification**: Letters to all neighbours within an agreed radius at least 2 weeks before commencement, describing the works, duration, working hours, and contact details.
  - **Ongoing communication**: Regular updates to neighbours before particularly disruptive works. Newsletters, information boards on hoarding, website.
  - **Complaints procedure**: Clear procedure for receiving, logging, investigating, and responding to complaints. Target response time (typically 24 hours for acknowledgement, 5 working days for full response).
  - **Considerate Constructors Scheme**: Confirm registration with the CCS (if applicable).
  - **Specific liaison**: With schools (term dates, examination periods), hospitals, care homes, places of worship, businesses. Coordination with other nearby construction projects.

### 10. Environmental Protection (400-800 words)
- Describe measures to protect the wider environment during construction:
  - **Ecology**: Protection of retained trees (in accordance with BS 5837), hedgerows, and habitats. Root protection areas and tree protection fencing. Ecological watching briefs where required. Timing constraints for works near nesting birds (March-August), bat roosts, badger setts, etc. Reference the approved ecological mitigation strategy.
  - **Watercourses**: Pollution prevention measures in accordance with CIRIA C532. Silt fencing, settlement tanks, bunded fuel storage, spill kits. No discharge of silty water to watercourses or surface water drains without treatment. Emergency spill response plan.
  - **Ground contamination**: Control measures for working on contaminated land. Dust suppression, gas monitoring, protective equipment. Proper handling, treatment, and disposal of contaminated soils under an appropriate EA permit or exemption.
  - **Surface water drainage**: Temporary drainage arrangements during construction. Protection of existing drains and watercourses. SuDS installation sequencing.
  - **Lighting**: Directional lighting to minimise light spill to neighbouring properties and ecological receptors (particularly bats). Compliance with Institute of Lighting Professionals guidance.
  - **Heritage**: Protection measures for listed buildings, conservation area settings, and archaeological remains. Reference any archaeological watching brief requirements.

### 11. Monitoring (200-400 words)
- Describe the monitoring regime:
  - Noise monitoring: locations, frequency, trigger levels, reporting.
  - Vibration monitoring: locations, frequency, trigger levels, reporting.
  - Dust monitoring: visual assessments (daily), real-time PM monitoring (if required), trigger levels.
  - Traffic monitoring: vehicle counts, compliance with routing.
  - Environmental monitoring: water quality, ecological compliance.
- Describe the review and update process for the CMP.
- Confirm that monitoring records will be available for inspection by the LPA and relevant authorities.

### 12. Conclusion (200-400 words)
- Summarise the key management measures across all topics.
- Confirm that the CMP provides a comprehensive framework for managing the construction impacts.
- Confirm that the measures accord with relevant standards (BS 5228, IAQM, CIRIA).
- Confirm that the CMP will be implemented, monitored, and updated throughout the construction period.
- State the commitment to being a good neighbour and minimising disruption.
- Confirm compliance with any relevant planning conditions.

## Quality Standards

- Reference BS 5228-1 and BS 5228-2 for noise and vibration control.
- Reference the IAQM Guidance on Dust from Demolition and Construction.
- Reference CIRIA C741 and C532 for environmental good practice.
- Identify specific sensitive receptors by name, type, and distance from the site.
- Include specific, measurable commitments (working hours, vehicle numbers, noise limits, dust monitoring frequency).
- Provide a realistic construction programme with phases and durations.
- Address all environmental media: noise, vibration, dust, air quality, water, ecology, waste.
- Include a complaints procedure with response timescales.
- Professional construction management language; practical and implementable measures.
- Where specific details are not yet available (contractor not appointed), clearly state this and provide the framework to be completed.`;

export const CMP_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, development, contractor, programme, and document status.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the CMP purpose and planning condition reference. Identify the site and development. Name the contractor or note to be appointed. State programme duration. Confirm live document status.',
  },
  {
    name: 'Site Description',
    description: 'Site location, surroundings, sensitive receptors, and constraints.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe the site. Identify sensitive receptors with distances: residential, schools, hospitals, ecology, heritage. Describe existing access and highways. Note site constraints.',
  },
  {
    name: 'Construction Programme',
    description: 'Phases, durations, working hours, and peak workforce.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out construction phases and durations. Identify the most disruptive phases. State working hours (standard and extended). Identify peak workforce numbers.',
  },
  {
    name: 'Site Setup and Logistics',
    description: 'Compound, hoarding, access, materials, cranes, security, and welfare.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe compound location and facilities. Describe hoarding. Describe construction vehicle and pedestrian access. Describe material storage, crane positions, scaffolding, security, and welfare. Reference site logistics plan.',
  },
  {
    name: 'Noise and Vibration Management',
    description: 'BS 5228 compliance, BPM, plant selection, monitoring, and Section 61.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Set out noise control per BS 5228-1: BPM, plant selection, operational measures, acoustic hoarding, scheduling. Describe vibration control per BS 5228-2: methods, limits, monitoring. Describe monitoring programme with trigger levels. Consider Section 61 agreement.',
  },
  {
    name: 'Dust and Air Quality Management',
    description: 'IAQM dust risk assessment, suppression measures, NRMM, and monitoring.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Classify dust emission risk per IAQM guidance. Describe suppression measures: damping, covering, wheel washing, speed limits. For London, address NRMM requirements. Describe PM monitoring and trigger levels.',
  },
  {
    name: 'Traffic Management',
    description: 'Vehicle routing, deliveries, wheel washing, pedestrian safety, and worker parking.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe approved vehicle routes. Describe delivery booking and consolidation. Estimate daily HGV/LGV numbers. Describe wheel washing. Address pedestrian/cyclist safety. Describe worker parking. Note temporary traffic management orders.',
  },
  {
    name: 'Waste Management',
    description: 'Waste minimisation, segregation, diversion targets, and hazardous waste.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe waste minimisation and segregation. State diversion target (90%+). Confirm licensed carriers and duty of care. Address hazardous waste. Describe demolition waste management where applicable.',
  },
  {
    name: 'Community Liaison',
    description: 'Liaison contact, notification, complaints procedure, and CCS registration.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Identify the liaison contact. Describe pre-start notification. Describe ongoing communication. Set out the complaints procedure with response times. Confirm CCS registration. Describe liaison with schools, hospitals, etc.',
  },
  {
    name: 'Environmental Protection',
    description: 'Ecology, watercourses, contamination, drainage, lighting, and heritage protection.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe tree and habitat protection (BS 5837). Describe watercourse pollution prevention (CIRIA C532). Address contaminated land controls. Describe temporary drainage. Address construction lighting. Note heritage protection measures.',
  },
  {
    name: 'Monitoring',
    description: 'Noise, vibration, dust, traffic, and environmental monitoring regime.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Describe monitoring for each topic: locations, frequency, trigger levels, reporting. Describe CMP review and update process. Confirm records available for inspection.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of measures, standards compliance, and commitment.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise key measures. Confirm compliance with BS 5228, IAQM, CIRIA. Confirm implementation and monitoring. State commitment to minimising disruption. Confirm planning condition compliance.',
  },
];

export const CMP_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Site Description',
    'Construction Programme',
    'Site Setup and Logistics',
    'Noise and Vibration Management',
    'Dust and Air Quality Management',
    'Traffic Management',
    'Waste Management',
    'Community Liaison',
    'Environmental Protection',
    'Monitoring',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const CMP_TEMPLATE = {
  assessment_type: 'Construction Management Plan',
  short_name: 'CMP',
  version: 1,
  sections: CMP_SECTIONS,
  quality_criteria: CMP_QUALITY,
};
