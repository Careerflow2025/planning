import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Fire Statement (Gateway One) -- required for planning applications
 * involving a relevant building, as defined by the Town and Country
 * Planning (Development Management Procedure and Section 62A Applications)
 * (England) (Amendment) Order 2021.
 *
 * A relevant building is one that contains two or more dwellings or
 * educational accommodation and meets the height condition (18m or more
 * in height, or 7 or more storeys).
 *
 * The Fire Statement addresses fire safety matters relevant to the
 * planning stage (land use planning considerations) and is distinct from
 * the detailed fire safety design required under Building Regulations.
 */

export const FS_PROMPT = `You are preparing a Fire Statement to accompany a planning application for a relevant building in England. The Fire Statement is a requirement of Planning Gateway One, introduced by the Building Safety Act 2022 and the associated amendments to the Town and Country Planning (Development Management Procedure) Order. It addresses fire safety matters that are relevant at the planning application stage.

## Document Purpose

The Fire Statement must:
- Provide information about the fire safety design principles, concepts, and standards applied to the development.
- Explain the building's relationship to its external environment in terms of fire safety, including access for fire service vehicles and personnel.
- Set out the approach to means of escape from the building.
- Describe the fire safety features of the building that are relevant to land use planning.
- Demonstrate that fire safety has been considered at the earliest stage of the design process.
- Be prepared by or in consultation with a suitably qualified fire safety professional.

Note: The Fire Statement addresses planning-relevant fire safety matters. It does not replace the detailed fire safety design and analysis required for Building Regulations approval (Gateway Two and Three under the Building Safety Act 2022).

## Key Policy and Legislation References

### Building Safety Act 2022
- Introduces a new regulatory framework for higher-risk buildings (defined as buildings at least 18m in height or at least 7 storeys, containing at least two residential units).
- Establishes three Gateways:
  - **Gateway One (Planning)**: Fire Statement requirement at planning application stage. The applicant must submit a Fire Statement with the planning application.
  - **Gateway Two (Before Construction)**: Building control approval for higher-risk buildings, requiring detailed fire safety information.
  - **Gateway Three (Before Occupation)**: Completion certificate and registration with the Building Safety Regulator.
- The Building Safety Regulator (within HSE) oversees the regulatory regime.

### Town and Country Planning (Development Management Procedure and Section 62A Applications) (England) (Amendment) Order 2021
- Requires a Fire Statement to be submitted with planning applications for "relevant buildings."
- **Relevant building**: A building that (a) contains two or more dwellings or educational accommodation, and (b) is 18 metres or more in height, or contains 7 or more storeys.
- The Fire Statement must be on a form published by the Secretary of State (or contain equivalent information).

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 96**: Planning policies and decisions should aim to achieve healthy, inclusive and safe places which promote social interaction, are safe and accessible, and enable and support healthy lifestyles.
- **Paragraph 97**: Planning policies and decisions should promote public safety and take into account wider security and defence requirements.

### Approved Document B (Fire Safety) -- Building Regulations 2010
- **Volume 1**: Dwellings.
- **Volume 2**: Buildings other than dwellings.
- Provides guidance on:
  - B1: Means of warning and escape.
  - B2: Internal fire spread (linings).
  - B3: Internal fire spread (structure).
  - B4: External fire spread.
  - B5: Access and facilities for the fire service.
- Note: Compliance with AD B is a Building Regulations matter, not a planning matter. However, the Fire Statement should demonstrate that the planning-stage design is consistent with achieving AD B compliance.

### BS 9991:2015 Fire Safety in the Design, Management and Use of Residential Buildings -- Code of Practice
- Provides recommendations for fire safety in residential buildings, including alternative approaches to AD B.
- Particularly relevant for buildings with a single staircase, extended travel distances, or innovative layouts.

### BS 9999:2017 Fire Safety in the Design, Management and Use of Buildings -- Code of Practice
- Provides recommendations for fire safety in non-residential buildings and mixed-use buildings.
- Offers a risk-based approach to fire safety design.

### Other Key References
- The Regulatory Reform (Fire Safety) Order 2005: Operational fire safety requirements.
- Fire Safety (England) Regulations 2022: Duties on building owners/managers.
- NFCC (National Fire Chiefs Council) guidance: Sprinkler protection, means of escape, access for fire and rescue services.
- London Plan Policy D12: Fire safety (London only) -- requires a Fire Statement for all major developments in London, with a wider scope than the national requirement.
- GLA Fire Safety Guidance (2022) (London only): Detailed guidance on preparing Fire Statements for London planning applications.
- LGA Fire Safety in Purpose-Built Blocks of Flats guidance.
- MHCLG / DLUHC guidance on Planning Gateway One.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Fire Statement and the Gateway One requirement.
- Identify the building: address, number of storeys, height (in metres), number of dwellings/units, and use.
- Confirm that the building meets the definition of a "relevant building."
- State the name and qualifications of the fire safety professional who has been consulted or who has prepared/reviewed the Fire Statement. If an AI-generated draft, note "[TO BE REVIEWED AND ENDORSED BY A CHARTERED FIRE ENGINEER / SUITABLY QUALIFIED FIRE SAFETY PROFESSIONAL]."
- Confirm that fire safety has been considered from the outset of the design process.
- Outline the document structure.

### 2. Legislative Framework (300-600 words)
- Set out the Building Safety Act 2022 and the three Gateway framework.
- Describe the Planning Gateway One requirement and the definition of a relevant building.
- Reference the 2021 Amendment Order.
- Reference NPPF Paragraphs 96-97.
- Reference Approved Document B (as the baseline guidance for fire safety in buildings, acknowledging it is a Building Regulations matter).
- Reference BS 9991 and/or BS 9999 as the adopted fire safety standard (identify which standard the design follows).
- For London: reference London Plan Policy D12 and GLA Fire Safety Guidance.
- Reference any relevant local plan policies on fire safety.

### 3. Building Description (400-700 words)
- Describe the building in fire safety terms:
  - **Building use**: Residential (flats), mixed-use (residential over commercial), student accommodation, or educational.
  - **Building form**: Number of storeys (including basements), height in metres (measured per the Building Safety Act definition), number of units per floor.
  - **Building layout**: Core arrangement (single staircase, dual staircase, scissor stairs), corridor layout (dead-end corridors, through corridors), flat layouts per floor.
  - **Structural system**: Frame type (concrete, steel, timber, hybrid), floor construction, separating wall/floor construction.
  - **Basement**: Presence and use of any basement levels, separate means of escape from basement.
  - **Car park**: Presence of any car park (surface, undercroft, basement), ventilation arrangements.
  - **Ancillary uses**: Plant rooms, refuse stores, cycle stores, commercial units at ground floor, communal amenity spaces.
- Describe the site context relevant to fire safety:
  - Adjacent buildings and separation distances.
  - Fire service access routes and constraints.
  - Water supply for firefighting (hydrant locations).

### 4. Fire Safety Strategy (500-1000 words)
Set out the overarching fire safety strategy for the building:

#### 4.1 Fire Detection and Warning
- Type of fire detection system: Category LD2 (BS 5839-6 for residential) or equivalent.
- Communal fire alarm system for common parts.
- Alerting arrangements: sounders, visual alarms, voice alarm (for larger/complex buildings).
- Interface with building management systems.

#### 4.2 Fire Suppression
- Sprinkler provision: residential sprinkler system to BS 9251 for buildings over 11m in height (AD B requirement).
- Describe the sprinkler system coverage: all habitable rooms, corridors, ancillary areas.
- Sprinkler system water supply and tank location.
- Any additional suppression systems (car park suppression, commercial kitchen systems).

#### 4.3 Compartmentation
- Describe the fire compartmentation strategy:
  - Each flat as a separate fire compartment (minimum 60 minutes fire resistance).
  - Fire resistance of separating floors between dwellings (minimum 60 minutes REI).
  - Fire resistance of corridors and lobbies (minimum 30 minutes or 60 minutes depending on strategy).
  - Protected shafts: stairways, lift shafts, service risers (minimum 60 minutes or 120 minutes for stairs serving buildings over 30m).
  - Fire stopping: commitment to a comprehensive fire stopping strategy at all penetrations and junctions.

#### 4.4 Ventilation and Smoke Control
- Describe the smoke control strategy for common areas:
  - Natural smoke ventilation: Automatic Opening Vents (AOVs) at head of stairway, corridor ventilation.
  - Mechanical smoke ventilation: mechanical smoke shaft, pressurisation system.
  - Firefighter ventilation provisions.
- Describe the approach to smoke control in corridors: natural ventilation, mechanical extract, or smoke shafts.
- Stair pressurisation (for buildings over 30m or single-staircase buildings as appropriate).

### 5. Means of Escape (500-1000 words)
- Describe the means of escape strategy:
  - **Evacuation strategy**: Simultaneous evacuation, defend-in-place (stay-put), phased evacuation, or a combination. State the primary strategy and any conditions that would trigger a change (e.g., from stay-put to simultaneous).
  - **Escape routes from flats**: Travel distance within each flat to the flat entrance door. Compliance with AD B / BS 9991 maximum travel distances.
  - **Escape from corridors**: Maximum travel distance in corridors (dead-end and alternative direction). Number and width of stairs served. Compliance with AD B / BS 9991 maximum travel distances.
  - **Stairway provision**: Number of stairs, width, protected lobby provision (buildings over 11m require a protected lobby to the stairway). Stairway capacity for evacuation.
  - **Single staircase assessment**: If the building has a single staircase, justify this against BS 9991 criteria (maximum building height for single stair, maximum number of units per floor, corridor length, sprinkler provision).
  - **Escape for mobility-impaired persons**: Evacuation lifts, refuges, personal emergency evacuation plans (PEEPs). Describe provision for disabled residents to escape independently or with assistance.
  - **Basement escape**: Separate escape route from basement not passing through the ground floor lobby (AD B requirement).
  - **External escape routes**: Protected routes from stairway exits to a place of safety (open air at ground level).

### 6. Fire Service Access and Facilities (400-800 words)
- Describe fire service vehicle access:
  - Access route to the building: minimum road width (3.7m), minimum carrying capacity (12.5 tonnes for pump appliance, 17 tonnes for turntable ladder), turning facilities, gradient (maximum 1 in 12 for access, 1 in 10 for hardstanding).
  - Fire appliance hardstanding: location, dimensions (minimum requirements per AD B Table 15.1), proximity to dry riser/wet riser inlets and building entrances.
  - Aerial appliance access: for buildings over 18m, access for a turntable ladder or hydraulic platform. Unobstructed space for aerial operations. Set-back distances from the building face.
  - Perimeter access: percentage of building perimeter accessible to fire appliances (AD B requires access to a percentage of the perimeter depending on building footprint).
- Describe fire service facilities within the building:
  - **Dry riser / wet riser**: Provision in accordance with AD B (dry riser for buildings 18-50m, wet riser for buildings over 50m). Inlet and outlet locations.
  - **Firefighting shaft**: Provision in accordance with AD B for buildings over 18m. Firefighting lift, firefighting lobby, firefighting stairway.
  - **Firefighting lift**: Capacity, fire protection, dual power supply, firefighter control switch.
  - **Fire mains**: Location and access.
  - **Hydrant provision**: Adequate water supply within prescribed distances (fire hydrants within 90m of a dry riser inlet per AD B, or within 100m for residential sprinkler systems per AD B).
- Demonstrate that the site layout and access arrangements have been designed to facilitate fire service operations. Reference swept path analysis for fire appliance access.

### 7. Fire Spread Prevention (400-700 words)
#### 7.1 Internal Fire Spread
- Describe the measures to prevent internal fire spread:
  - Compartmentation (summarised above and cross-referenced).
  - Internal wall and ceiling linings: Class 0 or Class B-s3, d2 in escape routes.
  - Fire doors: rating, self-closing devices, signage.
  - Fire stopping at all service penetrations and construction junctions.
  - Cavity barriers in any concealed spaces.

#### 7.2 External Fire Spread
- Describe the external wall construction and its fire performance:
  - External wall materials and systems: specify the cladding system, insulation material, and fixing method.
  - For buildings over 18m: the external wall (including insulation and cladding) must achieve Class A2-s1, d0 or Class A1 (materials of limited combustibility) per the Building Regulations ban on combustible materials in external walls of residential buildings over 18m (Regulation 7(2) as amended).
  - Confirm compliance with the ban on combustible materials in external walls.
  - Window and balcony specification: fire performance of windows, balcony materials, and any projecting elements.
  - Boundary condition: fire resistance of external walls near boundaries to prevent fire spread to adjacent buildings.
  - Green walls/green roofs: fire performance and separation from combustible elements (where applicable).

### 8. Construction Materials (300-500 words)
- Provide a summary of the key materials proposed and their fire classification:
  - Structural frame: material and fire resistance (e.g., concrete frame, 120 minutes fire resistance).
  - External walls: material, insulation type, cladding type, fire classification.
  - Roof: material and fire classification.
  - Internal partitions: material and fire resistance.
  - Balconies: material and fire classification.
  - Insulation: type (mineral wool, PIR, phenolic, EPS -- note that EPS and PIR require careful consideration in buildings over 18m).
- Confirm that all materials in external walls of buildings over 18m will be Class A1 or A2-s1, d0 (or state any deviations and the basis for these).
- Note that full material specifications will be confirmed at Gateway Two (Building Regulations stage).

### 9. Conclusion (300-500 words)
- Summarise the fire safety strategy: detection, suppression, compartmentation, smoke control, means of escape, fire service access, and external fire spread prevention.
- Confirm that fire safety has been considered from the outset of the design process (the principle underpinning Gateway One).
- Confirm that the building design is consistent with achieving compliance with Approved Document B (or BS 9991/BS 9999 as applicable).
- Confirm that the fire safety professional has reviewed and endorsed the fire safety approach (or flag "[ENDORSEMENT BY FIRE ENGINEER REQUIRED]").
- Confirm compliance with the Building Safety Act 2022 Gateway One requirements.
- For London: confirm compliance with London Plan Policy D12.
- Note that the fire safety strategy will be developed in detail for Gateway Two (Building Regulations application).
- State any recommended planning conditions relating to fire safety.

## Quality Standards

- Reference the Building Safety Act 2022 and the Gateway framework.
- Reference the 2021 Amendment Order and the definition of "relevant building."
- Reference Approved Document B by specific functional requirement (B1-B5).
- Reference BS 9991 or BS 9999 as the adopted fire safety standard.
- State specific building dimensions: height in metres, number of storeys, number of units.
- Address all six topics required by the Fire Statement form: fire safety strategy, means of escape, fire service access, fire spread, construction materials, and building information.
- Distinguish between planning-relevant fire safety matters and detailed Building Regulations matters.
- Use correct fire safety terminology: compartmentation, fire resistance, reaction to fire classification, evacuation strategy.
- For buildings over 18m, address the ban on combustible materials in external walls.
- State that the Fire Statement has been prepared in consultation with a fire safety professional (or flag for review).
- Professional fire safety language; technically accurate but accessible to planning officers.`;

export const FS_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, building identification, relevant building confirmation, and fire safety professional.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the Gateway One requirement. Identify the building (address, storeys, height, units). Confirm relevant building status. Name the fire safety professional or flag for review. Confirm early-stage fire safety consideration.',
  },
  {
    name: 'Legislative Framework',
    description: 'Building Safety Act, Gateway framework, NPPF, AD B, and BS standards.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out Building Safety Act 2022 Gateways. Describe the 2021 Amendment Order. Reference NPPF Paragraphs 96-97. Reference AD B (B1-B5). Identify the fire safety standard (BS 9991/BS 9999). For London, reference Policy D12.',
  },
  {
    name: 'Building Description',
    description: 'Use, form, height, layout, structure, car park, and site context.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe building use, form, storeys, height, units per floor, core arrangement, structural system, basement, car park, ancillary uses. Describe site context: adjacent buildings, fire access, water supply.',
  },
  {
    name: 'Fire Safety Strategy',
    description: 'Detection, suppression, compartmentation, and smoke control.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe fire detection (Category LD2). Describe sprinkler system (BS 9251 for buildings over 11m). Describe compartmentation (fire resistance periods, fire stopping). Describe smoke control (AOVs, mechanical smoke ventilation, stair pressurisation).',
    subsections: [
      {
        name: 'Fire Detection and Warning',
        description: 'Detection system, communal alarm, and alerting arrangements.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe detection category, communal alarm, sounders/voice alarm, BMS interface.',
      },
      {
        name: 'Fire Suppression',
        description: 'Sprinkler provision, coverage, water supply, and additional systems.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe sprinkler system to BS 9251, coverage, water supply, any additional suppression.',
      },
      {
        name: 'Compartmentation',
        description: 'Fire compartment strategy, fire resistance periods, and fire stopping.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe compartmentation: flat as compartment (60 min), protected shafts (60/120 min), fire stopping commitment.',
      },
      {
        name: 'Ventilation and Smoke Control',
        description: 'Smoke ventilation of corridors, stairs, and firefighter ventilation.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe smoke control: AOVs, mechanical smoke ventilation, stair pressurisation for buildings over 30m.',
      },
    ],
  },
  {
    name: 'Means of Escape',
    description: 'Evacuation strategy, escape routes, stairway provision, and disabled escape.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'State evacuation strategy (stay-put/simultaneous/phased). Describe escape from flats, corridors (travel distances), stairways (number, width, lobbies). Address single staircase justification where applicable. Describe disabled escape (evacuation lifts, refuges). Address basement and external escape.',
  },
  {
    name: 'Fire Service Access and Facilities',
    description: 'Vehicle access, hardstanding, aerial access, risers, firefighting shafts, and hydrants.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe fire vehicle access (road width, load capacity, turning). Describe hardstanding and aerial access. Describe dry/wet riser provision. Describe firefighting shaft and lift for buildings over 18m. Describe hydrant provision. Reference swept path analysis.',
  },
  {
    name: 'Fire Spread Prevention',
    description: 'Internal fire spread measures and external wall fire performance.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe internal fire spread prevention: linings, fire doors, fire stopping, cavity barriers. Describe external wall construction and fire classification. For buildings over 18m, confirm compliance with combustible materials ban (Class A1/A2-s1,d0). Address windows, balconies, boundary conditions.',
    subsections: [
      {
        name: 'Internal Fire Spread',
        description: 'Linings, fire doors, fire stopping, and cavity barriers.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe wall/ceiling linings, fire doors, fire stopping, cavity barriers.',
      },
      {
        name: 'External Fire Spread',
        description: 'External wall materials, combustible materials ban, and boundary conditions.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Describe external wall system and fire classification. Confirm combustible materials ban compliance. Address windows, balconies, green walls.',
      },
    ],
  },
  {
    name: 'Construction Materials',
    description: 'Key materials and fire classifications for structure, walls, roof, and insulation.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise structural frame, external wall, roof, partition, balcony, and insulation materials with fire classifications. Confirm external wall materials comply with combustible materials ban. Note Gateway Two detailed specifications.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of fire safety strategy, compliance, and professional endorsement.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise the fire safety strategy. Confirm early-stage fire safety consideration. Confirm consistency with AD B / BS 9991. Confirm fire professional endorsement (or flag). Confirm Gateway One compliance. Note Gateway Two development. State recommended conditions.',
  },
];

export const FS_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Legislative Framework',
    'Building Description',
    'Fire Safety Strategy',
    'Means of Escape',
    'Fire Service Access and Facilities',
    'Fire Spread Prevention',
    'Construction Materials',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const FS_TEMPLATE = {
  assessment_type: 'Fire Statement',
  short_name: 'FS',
  version: 1,
  sections: FS_SECTIONS,
  quality_criteria: FS_QUALITY,
};
