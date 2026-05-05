import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Fire Safety Strategy (FSS) -- a comprehensive fire safety design document
 * addressing all functional requirements B1-B5 of the Building Regulations,
 * typically required for complex, large, or higher-risk buildings. This is
 * distinct from the Fire Statement (Gateway One planning document) and
 * provides the detailed fire safety engineering analysis required for
 * Building Regulations approval (Gateway Two for higher-risk buildings).
 *
 * The strategy may include fire safety engineering analysis where the design
 * departs from the prescriptive guidance in Approved Document B, following
 * BS 7974 methodology.
 *
 * AI Difficulty: Hard -- requires review by a chartered fire engineer.
 */

export const FSS_PROMPT = `You are preparing a Fire Safety Strategy report to accompany a planning application and/or Building Regulations submission for a building in England. The Fire Safety Strategy provides a comprehensive analysis of the fire safety design for the building, addressing all functional requirements of the Building Regulations 2010 (as amended) Part B (Fire Safety), and may include fire safety engineering analysis where the design departs from the prescriptive guidance in Approved Document B.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft only. It MUST be reviewed, verified, and endorsed by a chartered fire engineer (CEng MIFireE or equivalent) before submission to the local planning authority, Building Control Body, or the Building Safety Regulator. The AI-generated content does not constitute professional fire engineering advice and should not be relied upon without professional validation. All fire safety calculations, means of escape analyses, fire resistance specifications, and fire engineering justifications must be verified by a suitably qualified fire safety professional.

## Document Purpose

A Fire Safety Strategy must:
- Provide a comprehensive fire safety design for the building addressing all functional requirements B1-B5 of the Building Regulations 2010.
- Identify where the design follows the prescriptive guidance in Approved Document B and where it departs from it.
- For any departures from Approved Document B, provide fire safety engineering analysis demonstrating that the functional requirements are met by alternative means, following BS 7974 methodology.
- Address fire detection and warning (B1), means of escape (B1), internal fire spread -- linings (B2), internal fire spread -- structure (B3), external fire spread (B4), and access and facilities for the fire service (B5).
- For higher-risk buildings (18m+ or 7+ storeys, residential), address the Building Safety Act 2022 Gateway Two requirements.
- Demonstrate that the building management arrangements support the fire safety strategy.
- Be prepared by or in consultation with a chartered fire engineer.

## Key Policy and Legislation References

### Building Regulations 2010 (as amended)
- **Regulation 4**: Requirements relating to building work -- building work shall be carried out so that it complies with the applicable requirements of Schedule 1.
- **Schedule 1, Part B**: Fire Safety:
  - **B1**: Means of warning and escape. The building shall be designed and constructed so that there are appropriate provisions for the early warning of fire, and appropriate means of escape in case of fire from the building to a place of safety outside the building.
  - **B2**: Internal fire spread (linings). To inhibit the spread of fire within the building, the internal linings shall (a) adequately resist the spread of flame over their surfaces; and (b) have, if ignited, a rate of heat release or a rate of fire growth, which is reasonable.
  - **B3**: Internal fire spread (structure). The building shall be designed and constructed so that, in the event of fire, its stability will be maintained for a reasonable period; the building is sub-divided by elements of fire resistance where this is necessary to inhibit the spread of fire; unseen spread of fire within concealed spaces is inhibited.
  - **B4**: External fire spread. The external walls and roof shall adequately resist the spread of fire over the walls and from one building to another, having regard to the height, use, and position of the building.
  - **B5**: Access and facilities for the fire service. The building shall be designed and constructed so as to provide reasonable facilities to assist firefighters in the protection of life; reasonable provision shall be made within the site of the building to enable fire appliances to gain access to the building.
- **Regulation 7(2) (as amended)**: Ban on the use of combustible materials in the external walls of buildings over 18m containing dwellings (inserted by the Building (Amendment) Regulations 2018).

### Approved Document B (Fire Safety), 2019 edition
- **Volume 1**: Dwellings (covering houses, flats, and maisonettes).
- **Volume 2**: Buildings other than dwellings.
- Provides prescriptive guidance on meeting functional requirements B1-B5.
- Compliance with AD B is one way to demonstrate compliance with the Building Regulations, but not the only way.

### BS 9991:2015 Fire Safety in the Design, Management and Use of Residential Buildings -- Code of Practice
- Alternative to AD B for residential buildings.
- Provides recommendations including a risk-based approach to fire safety design.
- Particularly relevant for buildings with a single staircase, extended travel distances, or innovative layouts.
- Addresses evacuation strategies (stay-put, simultaneous, phased).

### BS 9999:2017 Fire Safety in the Design, Management and Use of Buildings -- Code of Practice
- Alternative to AD B for non-residential and mixed-use buildings.
- Risk-based approach using risk profiles and occupancy characteristics.
- More flexible than AD B in many areas, allowing optimised design.

### BS 7974:2019 Application of Fire Safety Engineering Principles to the Design of Buildings -- Code of Practice
- Framework for fire safety engineering (FSE) analysis.
- Used where the design departs from prescriptive guidance and an engineered solution is proposed.
- Supported by Published Documents (PD 7974 series):
  - PD 7974-0: Guide to the application of fire safety engineering principles.
  - PD 7974-1: Initiation and development of fire within the enclosure of origin (fire source characterisation).
  - PD 7974-2: Spread of smoke and toxic gases within and beyond the enclosure of origin.
  - PD 7974-3: Structural response and fire spread beyond the enclosure of origin.
  - PD 7974-4: Detection of fire and activation of fire protection systems.
  - PD 7974-5: Fire service intervention.
  - PD 7974-6: Evacuation (human behaviour, escape route design, egress modelling).
  - PD 7974-7: Probabilistic risk assessment.
- Fire safety engineering analysis requires a systematic process: qualitative design review (QDR), quantitative analysis, assessment against criteria, and reporting.

### Building Safety Act 2022
- Establishes the Building Safety Regulator (BSR) within HSE for higher-risk buildings.
- **Gateway Two**: Before construction begins on a higher-risk building (HRB), the developer must apply to the BSR for building control approval, providing full fire safety design information.
- **Gateway Three**: Before occupation, the BSR must issue a completion certificate.
- HRB definition: Buildings at least 18m in height or at least 7 storeys, containing at least 2 residential units.
- The Fire Safety Strategy is a key document for the Gateway Two application.

### Regulatory Reform (Fire Safety) Order 2005 (RRO)
- Applies to the common parts of blocks of flats (not individual dwellings) and to all non-domestic premises.
- Requires a fire risk assessment to be carried out and kept under review.
- The Fire Safety Strategy should be compatible with the requirements of the RRO.

### Fire Safety (England) Regulations 2022
- Duties on responsible persons for buildings containing two or more sets of domestic premises:
  - Information sharing about external wall construction.
  - Fire door checks.
  - Provision of wayfinding signage.
  - Provision of floor plans and building plans to the fire and rescue service.

### Other Key References
- NFCC (National Fire Chiefs Council) guidance notes.
- London Plan Policy D12: Fire Safety (London only).
- GLA Fire Safety Guidance (2022) (London only).
- LGA Fire Safety in Purpose-Built Blocks of Flats guidance.
- BS 5839-1: Fire detection and fire alarm systems for buildings.
- BS 5839-6: Fire detection and fire alarm systems for dwellings.
- BS 9251: Fire sprinkler systems for domestic and residential occupancies.
- BS EN 12845: Fixed firefighting systems -- automatic sprinkler systems.
- BS EN 12101 series: Smoke and heat control systems.
- SCA Guide to Smoke Control in Complex Buildings.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Fire Safety Strategy and whether it supports a planning application, Building Regulations application, or both.
- Identify the building: address, building name, number of storeys (including basements), height in metres, number of residential units (if applicable), gross floor area, and proposed use(s).
- Confirm whether the building is a higher-risk building (HRB) under the Building Safety Act 2022 and state the implications for the regulatory route (Building Safety Regulator or local authority Building Control).
- State the fire safety standard adopted as the primary design code: AD B, BS 9991, BS 9999, or a combination.
- State any departures from the prescriptive guidance and confirm that fire safety engineering analysis to BS 7974 is provided.
- State the name and qualifications of the fire engineer (or flag "[TO BE REVIEWED AND ENDORSED BY CHARTERED FIRE ENGINEER (CEng MIFireE)]" for AI-generated drafts).
- Outline the document structure.

### 2. Applicable Standards (400-800 words)
- List all applicable legislation, approved documents, British Standards, and guidance documents.
- For each standard, state its applicability to the building:
  - Building Regulations 2010 (Schedule 1, Part B, B1-B5).
  - Approved Document B Volume 1 or Volume 2 (or both for mixed use).
  - BS 9991 or BS 9999 (state which is adopted and why).
  - BS 7974 (where fire engineering is applied).
  - Building Safety Act 2022 (for HRBs).
  - Regulation 7(2) combustible materials ban (for buildings over 18m).
  - RRO 2005.
  - Fire Safety (England) Regulations 2022.
  - London Plan D12 / GLA guidance (London only).
  - Any other relevant standards.
- Present a compliance matrix or table showing each functional requirement (B1-B5) and the standard(s) relied upon for compliance.

### 3. Building Description (500-1000 words)
- Describe the building in fire safety terms:
  - **Building use class**: Purpose Group (AD B classification), occupancy type(s).
  - **Building geometry**: Number of storeys, height (top occupied storey above fire service access level), building footprint area, gross internal area per floor.
  - **Building layout**: Core arrangement (single staircase, dual staircase, scissor stairs), corridor layout (dead-end, through, open plan), number of units per floor.
  - **Structural system**: Frame type (reinforced concrete, structural steel, mass timber, load-bearing masonry, hybrid), floor construction, roof construction.
  - **External wall construction**: Outer leaf material, insulation type and thickness, cavity, inner leaf, rainscreen or cladding system.
  - **Basement levels**: Number, use (car park, plant, storage, habitable), ventilation.
  - **Car park**: Type (open-sided, enclosed, mechanical), capacity, ventilation.
  - **Ancillary spaces**: Plant rooms, refuse stores, cycle stores, commercial units, communal amenity areas.
- Describe the site context:
  - Boundary distances and separation to adjacent buildings.
  - Fire service access routes and constraints.
  - Water supply (hydrant locations, water mains capacity).

### 4. Fire Safety Engineering Approach (400-800 words)
- State whether the design is:
  - **Fully prescriptive**: Compliant with AD B (or BS 9991/9999) in all respects. If so, state this and note that no fire safety engineering is required.
  - **Partially engineered**: Prescriptive in most respects but with specific departures requiring engineered justification. Identify each departure.
  - **Fully engineered**: A performance-based design using BS 7974 methodology throughout.
- For each departure from prescriptive guidance, provide:
  - The prescriptive requirement that is not met (with specific AD B/BS clause reference).
  - The reason for the departure (design constraint, architectural intent, improved performance).
  - The fire engineering approach adopted (qualitative, quantitative, or combination).
  - A summary of the engineering analysis and its conclusions (with cross-reference to detailed analysis in appendices).
  - The compensatory features or measures provided.
- Describe the Qualitative Design Review (QDR) process undertaken per BS 7974:
  - Trial designs reviewed.
  - Fire scenarios considered.
  - Acceptance criteria adopted.
  - Fire safety objectives.

### 5. Fire Detection and Warning -- B1 (400-700 words)
- Describe the fire detection and alarm system:
  - **System category**: For residential buildings, BS 5839-6 Category LD2 (minimum) or LD1. For non-residential, BS 5839-1 Category L2 or L1. For mixed-use, describe the integration.
  - **Detection devices**: Smoke detectors (optical, ionisation, multi-sensor), heat detectors, aspirating systems, flame detectors. Describe detector placement and coverage.
  - **Alarm devices**: Sounders, visual alarm devices (VADs), voice alarm systems. Sound levels and intelligibility requirements.
  - **Manual call points**: Location and coverage.
  - **Fire alarm panel**: Location, type (conventional, addressable, analogue-addressable), cause-and-effect matrix.
  - **Interface with other systems**: Smoke control activation, lift recall, access control release, building management system (BMS) interface, suppression system monitoring.
  - **False alarm management**: Alarm verification, investigation delay, double-knock, pre-alarm.
- State compliance with the relevant standard (BS 5839-1 or BS 5839-6).

### 6. Means of Escape -- B1 (800-1500 words)
- This is typically the most detailed section. Describe the means of escape strategy:

#### 6.1 Evacuation Strategy
- State the evacuation strategy: stay-put (defend in place), simultaneous evacuation, phased evacuation, or a combination.
- Justify the strategy with reference to the building type, height, number of stairs, and fire safety features.
- Describe the circumstances under which the strategy would change (e.g., from stay-put to simultaneous in the event of a fire affecting the common parts).

#### 6.2 Escape from Rooms/Flats
- Maximum travel distance within rooms or flats to the flat entrance door.
- Inner room arrangements and alternative escape provisions.
- Compliance with AD B / BS 9991 / BS 9999 travel distance limits.

#### 6.3 Escape from Corridors
- Corridor layout: dead-end corridors and corridors with alternative escape routes.
- Maximum travel distance in dead-end corridors and to the nearest stairway.
- Corridor width requirements.
- Protected corridor/lobby arrangements.
- Compliance with travel distance limits (state the specific limits adopted from the relevant standard).
- Where travel distances exceed the prescriptive limits, provide fire engineering justification (cross-reference to the engineering analysis).

#### 6.4 Stairway Provision
- Number of stairways, widths, and capacity.
- Protected stairway enclosure: fire resistance, self-closing fire doors, ventilation.
- Protected lobby provision (required for buildings over 11m per AD B).
- Firefighting stairway and lobby provision (for buildings over 18m).
- Stair pressurisation (for buildings over 30m or where required to support single-stair design).
- Accommodation stairways and unprotected stairways (where permitted).

#### 6.5 Single Staircase Buildings
- If the building has a single staircase, provide a detailed justification against BS 9991 Table 5 criteria:
  - Maximum building height for single-stair design.
  - Maximum number of units per floor.
  - Maximum dead-end corridor length.
  - Sprinkler provision required.
  - Lobby protection required.
  - Smoke control required.
- Reference the BS 9991 risk assessment for single-stair buildings.

#### 6.6 Escape for Disabled People
- Evacuation lift provision (for buildings above a certain height per BS 9991/9999).
- Refuge provision and location.
- Personal Emergency Evacuation Plans (PEEPs).
- Management procedures for assisting disabled people in an evacuation.
- Compliance with Equality Act 2010 and BS 9999 / BS 9991 recommendations.

#### 6.7 Basement Escape
- Separate escape route from basement levels not passing through the ground floor lobby.
- Smoke control and ventilation of basement escape routes.

#### 6.8 External Escape Routes
- Protected routes from stairway exits to a place of safety (open air at ground level away from the building).

### 7. Internal Fire Spread (Linings) -- B2 (300-500 words)
- Describe the fire performance of internal wall and ceiling linings:
  - Surface spread of flame classifications for different locations (escape routes, rooms, other areas).
  - National classifications (Class 0, Class 1, Class 3) and European classifications (Class A1, A2-s1,d0, B-s3,d2, C, D, E).
  - Specific requirements for escape routes: walls and ceilings to achieve Class 0 or Class B-s3,d2 (minimum).
  - Specific requirements for other rooms and areas.
  - Thermoplastic materials: limitations on lighting diffusers and rooflights.
- State compliance with AD B requirements or the equivalent standard adopted.

### 8. Internal Fire Spread (Structure) -- B3 (500-1000 words)
- Describe the structural fire protection strategy:

#### 8.1 Fire Resistance
- Minimum periods of fire resistance for structural elements (loadbearing walls, floors, beams, columns):
  - Based on building height, use, and basement depth (per AD B Table 7.1 or BS 9999 Table 26).
  - State the required fire resistance periods in minutes (R for loadbearing capacity, E for integrity, I for insulation): 30, 60, 90, 120, or 180 minutes.
- Fire resistance of elements of structure: how compliance will be demonstrated (test evidence, calculation, assessment).

#### 8.2 Compartmentation
- Compartment sizes: maximum compartment floor area and building height limits per AD B or BS 9999.
- Compartment walls and floors: fire resistance, construction, continuity.
- Each dwelling as a separate fire compartment.
- Protected shafts: stairways, lift shafts, service risers, refuse chutes.
- Fire resistance of protected shafts (typically 60 minutes, 120 minutes for stairs in buildings over 30m).

#### 8.3 Concealed Spaces and Cavity Barriers
- Provision of cavity barriers to sub-divide concealed spaces (voids, ceiling voids, roof voids, rain-screen cladding cavities).
- Cavity barrier locations: at compartment wall junctions, around openings, at maximum 20m intervals in roof voids.
- Cavity barrier specification and fire performance.

#### 8.4 Fire Stopping
- Fire stopping strategy at all penetrations of fire-separating elements (pipes, cables, ducts, structural connections).
- Fire stopping at junctions between different construction types.
- Fire stopping specification, installation standards, and inspection regime.
- Third-party certification of fire stopping installers.

### 9. External Fire Spread -- B4 (400-700 words)
- Describe the measures to prevent external fire spread:

#### 9.1 External Wall Construction
- External wall construction build-up: each layer from inside to outside.
- Fire performance of external wall materials.
- For buildings over 18m containing dwellings: compliance with Regulation 7(2) -- all materials in the external wall (above 18m) must be Class A1 or A2-s1,d0.
- For buildings over 11m but below 18m: materials should be Class A2-s1,d0 or justified by full-scale fire test (BS 8414 with BR 135 criteria).
- For buildings below 11m: state the fire performance achieved.

#### 9.2 Boundary Conditions
- Relevant boundary distance from the site boundary (or centre line of road, railway, canal).
- Unprotected area calculations per AD B or BS 9999 (enclosing rectangle method, aggregate notional area method, or BS 9999 method).
- Fire resistance of external walls within the relevant distances.
- State the maximum percentage of unprotected areas permitted and the percentage proposed.

#### 9.3 Roof Fire Spread
- Roof covering classification (per AD B Table 14.1): designation AA, AB, AC, BA, BB, BC (national) or BROOF(t4) (European).
- Roof covering requirements based on boundary distance.

#### 9.4 Balconies and Projections
- Fire performance of balcony materials (decking, balustrades, soffits).
- For buildings over 18m: balcony materials should be Class A1 or A2-s1,d0.
- Separation between balconies and fire compartmentation.

### 10. Access and Facilities for Fire Service -- B5 (500-800 words)
- Describe the fire service access and facilities:

#### 10.1 Vehicle Access
- Fire appliance access route: minimum road width (3.7m), minimum gateway width (3.1m), load capacity (12.5 tonnes pump, 17 tonnes high-reach), turning facilities (turning circles and hammerheads), gradient.
- Hardstanding for pump appliance: location, dimensions, surface construction, proximity to building entrance and dry/wet riser inlet.
- Aerial appliance access: for buildings over 18m, access for turntable ladder or hydraulic platform. Set-back distances, unobstructed elevation.
- Perimeter access requirements (percentage of building perimeter based on footprint area per AD B).
- Swept path analysis demonstration (or cross-reference to transport consultant's analysis).

#### 10.2 Dry Riser / Wet Riser Provision
- Dry riser: for buildings 18-50m in height. Number, location (within firefighting shaft), inlet location, outlet locations per floor, and testing/maintenance provisions.
- Wet riser: for buildings over 50m in height. Pump set, tank, distribution, outlets, testing/maintenance.
- Combined systems and phased installations.

#### 10.3 Firefighting Shaft
- For buildings over 18m: firefighting shaft provision per AD B Section 15.
- Firefighting stairway, firefighting lobby, firefighting lift.
- Fire resistance of firefighting shaft enclosure (120 minutes minimum).
- Smoke control of firefighting lobby (mechanical ventilation or pressurisation).
- Firefighting lift: capacity (8 persons / 630kg minimum), dimensions, dual power supply, firefighter control switch, communication, fire protection.
- Number and location of firefighting shafts.

#### 10.4 Hydrant Provision
- Fire hydrant provision: number, location, flow rate, and pressure.
- Within 90m of dry riser inlet or within 100m for sprinklered buildings.
- Private hydrants on site or reliance on public water mains.
- Water supply adequacy for firefighting operations and sprinkler systems.

### 11. Building Management (300-600 words)
- Describe how the building management will support the fire safety strategy:
  - Evacuation strategy: management procedures for implementing stay-put or simultaneous evacuation. Communication protocols.
  - Fire risk assessment: commitment to a compliant fire risk assessment under the RRO 2005 before occupation.
  - Maintenance: maintenance regimes for fire safety systems (detection, sprinklers, smoke control, fire doors, emergency lighting, fire stopping).
  - Operational procedures: fire marshal/warden arrangements, fire action notices, fire safety signage.
  - Information sharing: building safety case (for HRBs), residents' engagement strategy, golden thread of building information.
  - Disabled evacuation: PEEPs, evacuation chair/lift training, refuge management.
  - Fire Safety (England) Regulations 2022 compliance: floor plans, wayfinding signage, fire door checks, external wall information.
- Confirm that the fire safety strategy is compatible with the building management arrangements.

### 12. Conclusion (400-700 words)
- Summarise the fire safety strategy: detection, suppression, compartmentation, means of escape, smoke control, fire service access, external fire spread prevention, and building management.
- Confirm the fire safety standard(s) adopted (AD B, BS 9991, BS 9999).
- Summarise any departures from prescriptive guidance and confirm that fire safety engineering analysis (BS 7974) demonstrates equivalent or improved safety.
- Confirm compliance with each functional requirement (B1-B5) of the Building Regulations.
- For HRBs: confirm compliance with the Building Safety Act 2022 Gateway Two requirements.
- Confirm compliance with Regulation 7(2) (combustible materials ban) where applicable.
- Confirm that the fire safety strategy has been reviewed and endorsed by a chartered fire engineer (or flag "[ENDORSEMENT BY CHARTERED FIRE ENGINEER REQUIRED]").
- State any recommended planning or Building Regulations conditions relating to fire safety.
- Note any outstanding items requiring further design development.

## Quality Standards

- Include the AI-generated disclaimer prominently in the document frontispiece and introduction, stating that the report requires review and endorsement by a chartered fire engineer.
- Reference the Building Regulations 2010 with specific functional requirements (B1-B5) and regulation numbers.
- Reference Approved Document B by specific section and table numbers.
- Reference BS 9991 or BS 9999 with specific clause numbers.
- Reference BS 7974 and relevant PD 7974 subseries for fire engineering analysis.
- Reference the Building Safety Act 2022 for HRBs.
- Reference Regulation 7(2) for combustible materials ban.
- State specific building dimensions: height, storeys, units, floor areas.
- Address all five functional requirements B1-B5 systematically.
- Provide travel distance calculations with reference to specific prescriptive limits.
- Provide unprotected area calculations for boundary conditions.
- Where fire engineering is applied, describe the QDR process, fire scenarios, acceptance criteria, and conclusions.
- Distinguish between prescriptive compliance and engineered departures.
- Use correct fire safety terminology: fire resistance (REI), reaction to fire classification, fire load density, evacuation strategy, compartmentation, protected shaft.
- For buildings over 18m, address the combustible materials ban with specific material classifications.
- Professional fire engineering language throughout, technically accurate but accessible to building control and planning officers.`;

export const FSS_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, building identification, HRB status, adopted fire safety standard, and document structure.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the purpose and regulatory context. Identify the building (address, storeys, height, units, area, use). Confirm HRB status. State the primary fire safety standard. Note any departures and fire engineering. State fire engineer qualifications. Outline structure.',
  },
  {
    name: 'Applicable Standards',
    description: 'Comprehensive list of applicable legislation, approved documents, British Standards, and guidance.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'List all applicable standards with statement of applicability. Present compliance matrix for B1-B5 functional requirements against adopted standards. Reference Building Regulations, AD B, BS 9991/9999, BS 7974, Building Safety Act, Regulation 7(2), RRO 2005, Fire Safety Regulations 2022.',
  },
  {
    name: 'Building Description',
    description: 'Building use, geometry, layout, structure, external walls, basement, car park, and site context.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe purpose group, storeys, height, floor areas, core arrangement, structural system, external wall build-up, basement, car park, ancillary spaces. Describe boundary distances, fire service access, and water supply.',
  },
  {
    name: 'Fire Safety Engineering Approach',
    description: 'Statement of prescriptive compliance or departures, QDR process, and engineering methodology.',
    required: false,
    min_words: 400,
    max_words: 800,
    guidance:
      'State whether fully prescriptive, partially engineered, or fully engineered. For each departure, identify prescriptive requirement, reason, engineering approach, and compensatory measures. Describe QDR process per BS 7974: fire scenarios, acceptance criteria, objectives.',
  },
  {
    name: 'Fire Detection and Warning',
    description: 'Detection system category, devices, alarm, manual call points, panel, and system interfaces.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe system category (BS 5839-6 LD2/LD1 or BS 5839-1 L2/L1). Describe detectors, alarm devices, voice alarm, manual call points, panel, cause-and-effect, system interfaces, and false alarm management. State compliance.',
  },
  {
    name: 'Means of Escape',
    description: 'Evacuation strategy, travel distances, stairway provision, single stair justification, disabled escape, and basement escape.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'State evacuation strategy and justification. Describe escape from rooms/flats, corridors (travel distances and limits), stairways (number, width, lobbies, pressurisation). For single-stair buildings, provide BS 9991 Table 5 justification. Describe disabled escape (lifts, refuges, PEEPs). Address basement and external escape.',
    subsections: [
      {
        name: 'Evacuation Strategy',
        description: 'Stay-put, simultaneous, or phased evacuation strategy and justification.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'State and justify the evacuation strategy with reference to building type, height, stairs, and fire safety features.',
      },
      {
        name: 'Travel Distances and Escape Routes',
        description: 'Travel distances from rooms, corridors, and to stairways, with prescriptive limits.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'State travel distances within flats, dead-end corridors, and to stairways. State prescriptive limits from AD B/BS 9991/9999. Note any exceedances and fire engineering justification.',
      },
      {
        name: 'Stairway Provision and Capacity',
        description: 'Number, width, protection, lobbies, pressurisation, and firefighting stairs.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Describe stairway number, width, fire resistance, lobby provision, pressurisation, and firefighting shaft provision.',
      },
      {
        name: 'Disabled Escape and Basement',
        description: 'Evacuation lifts, refuges, PEEPs, and basement escape arrangements.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe evacuation lift provision, refuge locations, PEEP management, and separate basement escape route.',
      },
    ],
  },
  {
    name: 'Internal Fire Spread (Linings)',
    description: 'Surface spread of flame classifications for wall and ceiling linings in escape routes and other areas.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe lining classifications for escape routes and other areas. State national and European classifications. Address thermoplastic materials. State compliance with AD B or adopted standard.',
  },
  {
    name: 'Internal Fire Spread (Structure)',
    description: 'Fire resistance periods, compartmentation, protected shafts, concealed spaces, and fire stopping.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'State fire resistance periods for structural elements with AD B/BS 9999 reference. Describe compartmentation (sizes, walls, floors, dwellings). Describe protected shafts. Describe cavity barriers and concealed spaces. Describe fire stopping strategy, specification, and installer certification.',
    subsections: [
      {
        name: 'Fire Resistance and Compartmentation',
        description: 'Fire resistance periods, compartment sizes, and fire-separating elements.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'State fire resistance periods for elements of structure. Describe compartment strategy, sizes, and fire-separating element specifications.',
      },
      {
        name: 'Concealed Spaces and Fire Stopping',
        description: 'Cavity barriers, fire stopping at penetrations and junctions, and inspection regime.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Describe cavity barrier locations and specification. Describe fire stopping strategy for all penetrations and junctions. State installer certification and inspection regime.',
      },
    ],
  },
  {
    name: 'External Fire Spread',
    description: 'External wall construction, combustible materials ban, boundary conditions, roof, and balconies.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe external wall build-up and fire performance. For buildings over 18m, confirm Regulation 7(2) compliance (Class A1/A2-s1,d0). Describe boundary conditions and unprotected area calculations. Describe roof classification. Describe balcony materials.',
  },
  {
    name: 'Access and Facilities for Fire Service',
    description: 'Vehicle access, hardstanding, aerial access, risers, firefighting shafts, and hydrants.',
    required: true,
    min_words: 500,
    max_words: 800,
    guidance:
      'Describe fire vehicle access (width, capacity, turning, gradient). Describe hardstanding and aerial access. Describe dry/wet riser provision. Describe firefighting shaft (stairway, lobby, lift) for buildings over 18m. Describe hydrant provision and water supply. Reference swept path analysis.',
  },
  {
    name: 'Building Management',
    description: 'Evacuation procedures, fire risk assessment, maintenance, PEEPs, and Fire Safety Regulations compliance.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe evacuation management procedures. Confirm fire risk assessment commitment. Describe maintenance regimes for fire safety systems. Describe fire marshal arrangements. For HRBs, describe building safety case and golden thread. Describe PEEPs. Address Fire Safety (England) Regulations 2022.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of fire safety strategy, compliance with B1-B5, departures, and professional endorsement.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise the fire safety strategy. Confirm adopted standards. Summarise departures and engineering justification. Confirm B1-B5 compliance. For HRBs, confirm Gateway Two compliance. Confirm Regulation 7(2) compliance. Confirm fire engineer endorsement. State recommended conditions and outstanding items.',
  },
];

export const FSS_QUALITY: QualityCriteria = {
  min_policy_refs: 10,
  required_sections: [
    'Introduction',
    'Applicable Standards',
    'Building Description',
    'Fire Detection and Warning',
    'Means of Escape',
    'Internal Fire Spread (Linings)',
    'Internal Fire Spread (Structure)',
    'External Fire Spread',
    'Access and Facilities for Fire Service',
    'Building Management',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const FSS_TEMPLATE = {
  assessment_type: 'Fire Safety Strategy',
  short_name: 'FSS',
  version: 1,
  sections: FSS_SECTIONS,
  quality_criteria: FSS_QUALITY,
};
