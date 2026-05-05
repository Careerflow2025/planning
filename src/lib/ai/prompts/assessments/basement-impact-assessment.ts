import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Basement Impact Assessment (BIA) -- required by many London boroughs
 * and other local planning authorities where basement construction is
 * proposed beneath existing or new buildings. The assessment evaluates
 * the impact of basement construction on groundwater flow, neighbouring
 * properties, trees, drainage, and flooding.
 *
 * Many London boroughs have specific basement policies (e.g., RBKC,
 * Westminster, Camden, Islington) that require a Basement Impact
 * Assessment (or Construction Management Plan with basement-specific
 * content) to be submitted with the planning application.
 *
 * AI Difficulty: Hard -- requires review by a geotechnical/structural
 * engineer.
 */

export const BIA_PROMPT = `You are preparing a Basement Impact Assessment (BIA) to accompany a planning application submitted to a local planning authority in England, typically a London borough. The BIA assesses the impact of proposed basement construction on the surrounding environment, including groundwater flow, neighbouring properties (settlement, vibration, structural effects), trees, and drainage and flooding.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft only. It MUST be reviewed, verified, and endorsed by a suitably qualified geotechnical engineer or structural engineer (CEng MICE, CEng MIStructE, or equivalent) before submission to the local planning authority. The AI-generated content does not constitute professional geotechnical or structural engineering advice and should not be relied upon without professional validation. All ground condition assessments, groundwater analyses, structural impact assessments, and construction methodology descriptions must be verified through site-specific ground investigation data and engineering analysis by a suitably qualified professional.

## Document Purpose

A Basement Impact Assessment must:
- Describe the site's geological and hydrogeological conditions, including groundwater levels and flow regime.
- Describe the proposed basement design: depth, extent, construction methodology, and waterproofing.
- Assess the impact of the basement construction on groundwater flow, including any diversion or obstruction of groundwater.
- Assess the impact on neighbouring properties: ground movement (settlement, heave), vibration during construction, structural effects on party walls and adjacent foundations.
- Assess the impact on trees: root zones, water availability, and potential for damage or loss.
- Assess the impact on surface water drainage and flood risk: changes to infiltration, impermeable area, and groundwater-related flooding.
- Propose mitigation measures and a structural monitoring programme.
- Demonstrate compliance with local plan basement policies and NPPF requirements.

## Key Policy and Legislation References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 159**: Inappropriate development in areas at risk of flooding should be avoided by directing development away from areas at highest risk. Where development is necessary in such areas, the development should be made safe for its lifetime without increasing flood risk elsewhere.
- **Paragraph 167**: When determining any planning applications, local planning authorities should ensure that flood risk is not increased elsewhere.
- **Paragraph 169**: Major developments should incorporate sustainable drainage systems unless there is clear evidence that this would be inappropriate.
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment.
- **Paragraph 130**: Development should function well and add to the overall quality of the area, be visually attractive, be sympathetic to local character, establish a strong sense of place, and create safe, inclusive, and accessible places.

### Local Plan Basement Policies
Many London boroughs have adopted specific basement development policies. Common requirements include:
- **Royal Borough of Kensington and Chelsea (RBKC)**: Policy CL7 -- Basements. Requires a Basement Impact Assessment addressing structural stability, groundwater, flooding, trees, amenity, and construction impacts.
- **City of Westminster**: Policies S25 and S29 -- Basement development. Requires structural methodology statement and assessment of impact on neighbours, drainage, and trees.
- **London Borough of Camden**: Policy D2 -- Basements. Requires a Construction Management Plan and impact assessment addressing amenity, structural, and environmental impacts.
- **London Borough of Islington**: Specific guidance on basement developments addressing groundwater, structural, and amenity impacts.
- **London Borough of Hammersmith and Fulham**: Policy DC4 -- Basements. Requires assessment of structural, hydrological, and arboricultural impacts.
- Other boroughs with basement policies include Wandsworth, Richmond, Barnet, Haringey, Lambeth, and Southwark.
- Outside London, some authorities in areas with high water tables or sensitive geology also have basement-specific requirements.

Note: Reference the specific local plan policy applicable to the application site. The above are examples; the relevant policy for the specific LPA must be identified.

### Building Regulations and Standards
- **NHBC Standards Chapter 4.4**: Foundations -- strip and trench fill foundations (relevant for assessing impact on adjacent foundations at different levels).
- **BS 8004:2015 Code of Practice for Foundations**: Guidance on foundation design, including basements and retaining walls.
- **BS 8102:2009 Code of Practice for Protection of Below Ground Structures Against Water from the Ground**: Waterproofing design grades and systems.
- **BS 6031:2009 Code of Practice for Earthworks**: Guidance on excavation and earthworks, including support of adjacent structures.
- **BS EN 1997 (Eurocode 7)**: Geotechnical design, including retaining structures and groundwater considerations.
- **BS EN 1992 (Eurocode 2)**: Concrete design for basement structures.
- **BS EN 1996 (Eurocode 6)**: Masonry design (relevant for assessing impact on masonry adjacent structures).
- **BS 5228-1:2009+A1:2014 Code of Practice for Noise and Vibration Control on Construction and Open Sites -- Part 1: Noise**: Noise from basement construction.
- **BS 5228-2:2009+A1:2014 Part 2: Vibration**: Vibration from basement construction, including assessment criteria for cosmetic and structural damage.
- **BS 7385-2:1993 Evaluation and Measurement for Vibration in Buildings -- Part 2**: Guide to damage levels from ground-borne vibration.

### ICE Guidance
- **ICE Conditions of Contract for Ground Investigation**: Standard contract for ground investigation works.
- **Guidance notes on subterranean development (various borough-specific)**: Published by boroughs in consultation with ICE.

### Party Wall etc. Act 1996
- The Party Wall etc. Act 1996 applies to basement construction in most situations:
  - **Section 1**: Building a new wall on the boundary line.
  - **Section 2**: Works to an existing party wall or party structure (including underpinning).
  - **Section 6**: Excavation near neighbouring buildings' foundations (within prescribed distances: 3m if deeper than neighbour's foundations, 6m for deeper excavations on a 45-degree line from the bottom of the neighbour's foundations).
- The BIA is distinct from the Party Wall process but should demonstrate that Party Wall implications have been considered.

### Other Key References
- **CIRIA C580**: Embedded retaining walls -- guidance for economic design.
- **CIRIA C517**: Temporary propping of deep excavations -- guidance on design.
- **CIRIA C515**: Groundwater control -- design and practice.
- **CIRIA C760**: Guidance on embedded retaining wall design.
- **BRE Digest 240**: Low-rise buildings on shrinkable clay soils.
- **BRE Digest 241**: Low-rise buildings on shrinkable clay soils: Part 2.
- **BRE Digest 412**: Desiccation in clay soils.
- **NHBC Standards Chapter 4.2**: Building near trees.
- **BS 5837:2012**: Trees in relation to design, demolition and construction.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the Basement Impact Assessment and the local plan policy requirement (cite the specific policy number and local plan).
- Provide commission details: client, consulting engineer, site address, planning application reference.
- Identify the site: address, National Grid Reference, site area, current use, and description of existing building(s).
- Summarise the proposed basement development: number of basement levels, approximate plan area, depth below existing ground level, proposed use (habitable rooms, car park, plant, storage, swimming pool).
- State the scope of the assessment: what impacts are assessed and the geographical extent of the assessment.
- State the qualifications and experience of the author (or flag "[TO BE REVIEWED AND ENDORSED BY CHARTERED GEOTECHNICAL/STRUCTURAL ENGINEER]").
- Reference any ground investigation report(s) relied upon (with report reference, date, and author).
- Outline the document structure.

### 2. Policy Framework (400-700 words)
- Set out the specific local plan basement policy (cite the policy number, wording, and local plan adoption date).
- Set out NPPF Paragraphs 159, 167, 169 (flood risk and drainage).
- Set out any supplementary planning guidance or supplementary planning documents (SPDs) on basements published by the LPA.
- Reference the Party Wall etc. Act 1996 and note that Party Wall matters are distinct from planning but that the BIA addresses the planning-relevant impacts.
- Reference the relevant Building Regulations and British Standards.
- Set out any other relevant local plan policies (design, amenity, trees, flood risk).

### 3. Site Description and Geology (400-700 words)
- Describe the site:
  - Location and surrounding land uses.
  - Topography: ground levels (AOD), gradient, relationship to neighbouring properties and road levels.
  - Existing buildings: construction type, number of storeys, basement (if existing).
  - Neighbouring buildings: construction type, approximate age, number of storeys, basement levels, proximity to the site boundary.
- Describe the geology:
  - Published geological mapping (BGS): bedrock geology (formation, lithology) and superficial deposits.
  - Relevant geological characteristics: clay mineralogy (for London Clay, Lambeth Group, etc.), permeability, shrink-swell potential.
  - Made ground: thickness and composition (if known from ground investigation).
- Describe the site history: previous uses that may have affected ground conditions (previous basements, wells, watercourses, construction, demolition).

### 4. Existing Ground Conditions (500-1000 words)
- Present the results of the site-specific ground investigation (or reference the ground investigation report):
  - **Borehole/trial pit logs**: Number, locations, depths, and key findings.
  - **Soil profile**: Description of each stratum encountered (depth, thickness, description, strength/stiffness parameters).
  - **Groundwater**: Groundwater level (recorded in boreholes as struck level, equilibrium level, and any monitoring results). Seasonal variation. Perched water tables. Artesian conditions.
  - **Ground strength parameters**: SPT N-values, undrained shear strength (cu), angle of shearing resistance, stiffness parameters.
  - **Chemical testing**: pH, sulphate content, aggressive ground conditions (Design Sulphate Class, ACEC Class per BRE SD1).
- Assess the ground conditions relevant to basement construction:
  - Excavation characteristics: ease of excavation, stability of excavation faces, need for temporary support.
  - Groundwater inflow: expected dewatering requirements during construction.
  - Bearing capacity and settlement of the basement formation level.
  - Earth pressure parameters for retaining wall design.
- If no ground investigation has been undertaken, state this clearly and recommend that one is carried out before detailed design. Provide a preliminary assessment based on published geological data and neighbouring site investigations (or flag "[GROUND INVESTIGATION DATA TO BE INSERTED]").

### 5. Proposed Basement Design (400-700 words)
- Describe the proposed basement:
  - **Plan extent**: Footprint relative to the existing building and site boundaries. Distance from site boundaries and neighbouring structures.
  - **Depth**: Formation level relative to existing ground level and Ordnance Datum (AOD).
  - **Number of levels**: Single or double basement.
  - **Proposed use**: Habitable rooms, car parking, plant, storage, swimming pool, cinema room.
  - **Lightwells**: Location, dimensions, drainage.
  - **Structural form**: Retaining wall type (contiguous piled wall, secant piled wall, sheet pile wall, concrete diaphragm wall, king post wall, reinforced concrete underpinning). Wall thickness, toe depth, propping/anchoring arrangement.
  - **Basement slab**: Type (reinforced concrete raft, ground-bearing slab with waterproofing), thickness.
  - **Waterproofing**: Grade of waterproofing per BS 8102 (Grade 1, 2, or 3 for habitable use). Waterproofing system type (Type A -- barrier, Type B -- structurally integral, Type C -- drained cavity, or combination).
  - **Drainage**: Basement drainage strategy (gravity or pumped), connection to site drainage.
- Present a summary of the structural design parameters (or note "[DETAILED STRUCTURAL DESIGN TO BE COMPLETED]").

### 6. Groundwater Assessment (500-1000 words)
- Assess the impact of the proposed basement on groundwater:
  - **Existing groundwater regime**: Describe the groundwater flow direction, gradient, and seasonal variation, based on monitoring data and regional hydrogeological understanding.
  - **Impact on groundwater flow**: Assess whether the basement will obstruct or divert groundwater flow. For basement structures that extend below the water table, assess the upstream mounding (rise in groundwater level up-gradient of the basement) and downstream lowering (reduction in groundwater level down-gradient).
  - **Quantitative assessment**: Where required by local policy, provide a quantitative assessment of groundwater flow diversion using analytical methods (e.g., flow net analysis) or numerical modelling. State the assumptions and parameters used.
  - **Cumulative impact**: Assess the cumulative effect of the proposed basement in combination with other existing and proposed basements in the area (particularly relevant in areas with multiple basement developments).
  - **Impact on neighbouring properties**: Assess whether changes in groundwater level could cause settlement (through consolidation of clay due to lowering of water table) or heave (through rise in water table) affecting neighbouring properties.
  - **Impact on basements of neighbouring properties**: Assess whether changes in groundwater level could increase hydrostatic pressure on, or cause flooding of, adjacent basements.
  - **Dewatering during construction**: Assess the impact of construction-phase dewatering on neighbouring properties and infrastructure (settlement due to groundwater lowering in granular soils).

### 7. Construction Methodology (500-1000 words)
- Describe the proposed construction methodology for the basement:
  - **Enabling works**: Site clearance, demolition (if applicable), temporary works, protection of retained structures.
  - **Retaining wall installation**: Methodology for the chosen wall type (e.g., CFA piling, rotary bored piling, sheet piling, mini-piling). Plant to be used, working radius, access requirements.
  - **Excavation sequence**: Top-down or bottom-up construction. Excavation in stages with progressive propping (if bottom-up). Sequence of bulk excavation and hand excavation near boundaries and retained structures.
  - **Temporary support**: Temporary propping system (steel props, raking struts, tie-backs). Propping design parameters and factors of safety.
  - **Dewatering**: Dewatering methodology (sump pumping, well-point dewatering, deep-well dewatering). Discharge arrangements. Impact of dewatering on neighbours (settlement monitoring).
  - **Underpinning**: If traditional underpinning is used for the basement or for protecting neighbouring foundations, describe the methodology (mass concrete underpinning in hit-and-miss sequence, mini-piled underpinning, jet grouting).
  - **Base slab construction**: Methodology and sequence.
  - **Waterproofing installation**: Methodology for the chosen waterproofing system.
  - **Backfilling and reinstatement**: Methodology and materials.
- Describe the construction programme: phasing, duration, working hours.
- Address the potential for construction impacts: noise, vibration, dust, traffic, access.

### 8. Impact on Neighbouring Properties (500-1000 words)
- Assess the impact of basement construction on neighbouring properties:
  - **Ground movement -- settlement**: Assess the potential for settlement of neighbouring properties due to:
    - Lateral wall movement (outward deformation of retaining wall during excavation).
    - Stress relief (vertical movement due to removal of overburden).
    - Dewatering (consolidation settlement in granular soils or desiccation of clay due to lowered water table).
    - Use settlement prediction methods (e.g., Clough and O'Rourke, or CIRIA C760 methods) to estimate the magnitude and extent of ground settlement behind the retaining wall.
  - **Ground movement -- heave**: Assess heave at the formation level and any implications for neighbouring structures.
  - **Vibration**: Assess the vibration generated by piling, excavation, and construction activities:
    - Predicted Peak Particle Velocity (PPV) at neighbouring properties.
    - Assessment against BS 7385-2 and BS 5228-2 damage criteria.
    - Assessment of human perception thresholds (BS 6472-1).
  - **Structural effects on party walls**: Assess the impact on shared party walls, including:
    - Differential movement between the basement and the retained party wall.
    - Need for temporary and permanent support of the party wall during and after construction.
    - Effect on the foundation of the neighbouring property.
  - **Party Wall etc. Act 1996**: Confirm that the works will trigger Party Wall notices under Sections 2 and/or 6. State the approximate number of affected owners. Note that the BIA does not replace the Party Wall process.
  - **Damage classification**: Classify the predicted damage to neighbouring properties using the Burland damage classification (Categories 0-5, or negligible/very slight/slight/moderate/severe/very severe).
  - **Risk assessment**: Present a risk assessment for each neighbouring property, considering the sensitivity of the structure and the predicted ground movement.

### 9. Impact on Trees (300-600 words)
- Assess the impact of the proposed basement on trees:
  - Identify all trees within and adjacent to the site (cross-reference the arboricultural survey if available, or flag "[ARBORICULTURAL SURVEY TO BE CROSS-REFERENCED]").
  - Describe the Root Protection Areas (RPAs) per BS 5837:2012.
  - Assess whether the proposed basement encroaches on the RPAs of any trees:
    - Trees on the site: may require removal (assess impact on amenity and any TPO protection).
    - Trees on neighbouring land: roots may extend onto the site. Assess whether basement construction will sever roots.
  - Assess the impact of dewatering on trees: lowering the water table during construction may affect water availability for trees, particularly in drought-prone conditions.
  - Assess the impact of the permanent basement on tree root access to water and nutrients.
  - Propose mitigation measures: root protection barriers, no-dig zones, alternative construction methods to minimise root disturbance, compensatory planting.
  - Cross-reference the Arboricultural Impact Assessment (if available).

### 10. Impact on Drainage and Flooding (400-700 words)
- Assess the impact of the proposed basement on surface water drainage and flood risk:
  - **Change in impermeable area**: Assess whether the basement increases the impermeable area of the site (basement lightwells, loss of permeable garden area).
  - **Change in infiltration**: Assess whether the basement reduces the capacity for rainwater infiltration on the site.
  - **Groundwater flooding**: Assess whether the basement is at risk of groundwater flooding (basement floor level below known or predicted groundwater levels). Reference the EA groundwater flooding susceptibility mapping.
  - **Surface water flooding**: Assess whether the basement is at risk of surface water flooding (overland flow, sewer surcharge). Reference the EA surface water flood map.
  - **Displaced groundwater**: Assess whether the basement will displace groundwater, causing or exacerbating flooding on neighbouring properties or in the wider area.
  - **SuDS**: Propose sustainable drainage measures to mitigate any increase in surface water runoff (green roofs over basement, rain gardens, permeable paving, attenuation).
  - **Basement drainage**: Describe the basement drainage strategy (pumped drainage with non-return valves, battery backup, alarm systems).
  - **Compliance with NPPF**: Confirm that the development does not increase flood risk elsewhere (NPPF Paragraph 167).
  - Cross-reference the Flood Risk Assessment (if available).

### 11. Structural Monitoring (300-600 words)
- Propose a structural monitoring programme for the construction period:
  - **Pre-construction condition survey**: Detailed photographic and written survey of all neighbouring properties within the zone of influence, to establish baseline condition.
  - **Settlement monitoring**: Precise level monitoring of neighbouring properties (settlement pins, precise levelling). Frequency: weekly during excavation, fortnightly thereafter.
  - **Retaining wall monitoring**: Inclinometer readings to monitor lateral wall movement. Frequency: after each excavation stage and weekly.
  - **Groundwater monitoring**: Water level monitoring in piezometers (standpipe or vibrating wire). Frequency: daily during dewatering, weekly otherwise.
  - **Vibration monitoring**: Continuous or triggered vibration monitoring at nearest sensitive receptors. PPV trigger levels and action levels.
  - **Crack monitoring**: Monitoring of existing cracks in neighbouring properties (tell-tales, crack gauges, or photographic monitoring).
  - **Trigger levels and action plan**: Define trigger levels for each monitoring parameter:
    - Green (normal): Continue works.
    - Amber (alert): Review methodology, increase monitoring frequency.
    - Red (action): Stop works, investigate, implement contingency measures.
  - **Reporting**: Monitoring reports to be submitted to the LPA and/or Party Wall surveyor at agreed intervals.
  - **Post-construction monitoring**: Continue monitoring for a period after completion (typically 6-12 months) to confirm long-term stability.

### 12. Conclusion (300-500 words)
- Summarise the proposed basement development: size, depth, construction methodology.
- Summarise the ground conditions and groundwater regime.
- Summarise the assessed impacts:
  - Groundwater: any significant diversion or obstruction of flow.
  - Neighbouring properties: predicted settlement, vibration, and damage classification.
  - Trees: any impact on RPAs or water availability.
  - Drainage and flooding: any change in flood risk.
- Summarise the proposed mitigation measures and monitoring programme.
- Confirm compliance with the local plan basement policy (cite the specific policy number).
- Confirm compliance with NPPF flood risk requirements.
- Confirm that the assessment demonstrates the basement can be constructed safely and without unacceptable harm to neighbouring properties, trees, or the wider environment.
- Note any outstanding items (ground investigation, detailed design, arboricultural input).
- Confirm that detailed structural design and construction methodology will be subject to Building Regulations approval.
- Note the requirement for Party Wall notices under the Party Wall etc. Act 1996.

## Quality Standards

- Include the AI-generated disclaimer prominently in the document frontispiece and introduction, stating that the report requires review and endorsement by a chartered geotechnical or structural engineer.
- Reference the specific local plan basement policy by name and number.
- Reference NPPF paragraphs (159, 167, 169) for flood risk and drainage.
- Reference BS 8004 (foundations), BS 8102 (waterproofing), BS EN 1997 (geotechnical design).
- Reference BS 5228 and BS 7385 for construction vibration assessment.
- Reference BS 5837 for tree root protection.
- Reference the Party Wall etc. Act 1996 with specific section numbers.
- Present ground investigation data or clearly flag where data is not available.
- Provide quantitative settlement predictions using recognised methods.
- Provide vibration predictions using recognised methods and assess against damage criteria.
- Present a Burland damage classification for predicted ground movement.
- Describe the construction methodology in sufficient detail to assess impacts.
- Propose a comprehensive structural monitoring programme with trigger levels.
- Address groundwater impact quantitatively where required by local policy.
- Address cumulative basement impact where relevant.
- Use correct geotechnical and structural engineering terminology: retaining wall, formation level, overburden, underpinning, propping, dewatering, hydrostatic pressure, consolidation, heave, PPV, inclinometer, piezometer.
- Where ground investigation data is not available, clearly flag and recommend investigation.
- Professional engineering language throughout, technically accurate but accessible to planning officers.`;

export const BIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, local plan policy requirement, site identification, proposed basement, and scope.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the purpose and specific local plan basement policy. Provide commission details. Identify the site. Summarise proposed basement (levels, area, depth, use). State scope and geographical extent. State engineer qualifications. Reference ground investigation report.',
  },
  {
    name: 'Policy Framework',
    description: 'Local plan basement policy, NPPF flood risk paragraphs, Party Wall Act, and Building Regulations.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Cite the specific local plan basement policy. Set out NPPF Paragraphs 159, 167, 169. Reference any SPD on basements. Reference the Party Wall Act. Reference BS 8004, BS 8102, BS EN 1997. Reference other relevant local plan policies.',
  },
  {
    name: 'Site Description and Geology',
    description: 'Site location, topography, existing and neighbouring buildings, published geology, and site history.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe site location, topography, ground levels, existing and neighbouring buildings (type, storeys, basements, proximity). Describe published geology (BGS) and superficial deposits. Describe site history and previous uses.',
  },
  {
    name: 'Existing Ground Conditions',
    description: 'Ground investigation results: soil profile, groundwater, strength parameters, and chemical testing.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present borehole/trial pit data (locations, depths, findings). Describe soil profile by stratum. Present groundwater levels (struck, equilibrium, seasonal variation). Present strength and stiffness parameters. Present chemical testing results. Assess excavation characteristics and dewatering needs. Flag where ground investigation data is not available.',
  },
  {
    name: 'Proposed Basement Design',
    description: 'Plan extent, depth, structure type, waterproofing grade, and drainage strategy.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe plan extent and distance from boundaries. State depth and formation level. Describe retaining wall type. Describe slab type. State waterproofing grade (BS 8102) and system type. Describe drainage strategy. Present structural design parameters or flag for completion.',
  },
  {
    name: 'Groundwater Assessment',
    description: 'Impact on groundwater flow regime, upstream mounding, downstream lowering, and cumulative impact.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe existing groundwater flow direction and gradient. Assess obstruction/diversion of flow. Provide quantitative assessment where required. Assess cumulative impact of multiple basements. Assess impact on neighbouring properties from water level changes. Assess dewatering construction impact.',
  },
  {
    name: 'Construction Methodology',
    description: 'Enabling works, wall installation, excavation sequence, propping, dewatering, and underpinning.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe enabling works. Describe retaining wall installation methodology and plant. Describe excavation sequence (top-down or bottom-up). Describe temporary propping. Describe dewatering methodology and discharge. Describe underpinning if applicable. Describe programme and working hours.',
  },
  {
    name: 'Impact on Neighbouring Properties',
    description: 'Settlement, heave, vibration, party wall effects, damage classification, and risk assessment.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Predict settlement from wall movement, stress relief, and dewatering using recognised methods. Predict vibration (PPV) from piling and construction. Assess party wall effects. Classify predicted damage using Burland scale. Present risk assessment for each neighbour. Confirm Party Wall Act applicability.',
  },
  {
    name: 'Impact on Trees',
    description: 'Root protection areas, root encroachment, dewatering impact, and mitigation measures.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Identify trees on and adjacent to site. Describe RPAs per BS 5837. Assess basement encroachment on RPAs. Assess dewatering impact on water availability. Assess permanent impact on root access. Propose mitigation (root barriers, no-dig zones, alternative methods, compensatory planting). Cross-reference arboricultural assessment.',
  },
  {
    name: 'Impact on Drainage and Flooding',
    description: 'Impermeable area change, infiltration, groundwater flooding, surface water flooding, and SuDS.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Assess change in impermeable area and infiltration. Assess groundwater flooding risk (EA mapping). Assess surface water flooding risk. Assess displaced groundwater causing flooding. Propose SuDS measures. Describe basement drainage strategy. Confirm NPPF Paragraph 167 compliance. Cross-reference FRA.',
  },
  {
    name: 'Structural Monitoring',
    description: 'Pre-construction survey, settlement, wall, groundwater, vibration, and crack monitoring with trigger levels.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Propose pre-construction condition survey. Describe settlement, retaining wall, groundwater, vibration, and crack monitoring methodology and frequency. Define green/amber/red trigger levels and action plan. Describe reporting regime. Propose post-construction monitoring period.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of basement, impacts, mitigation, monitoring, policy compliance, and outstanding items.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise the basement proposal. Summarise assessed impacts (groundwater, neighbours, trees, drainage). Summarise mitigation and monitoring. Confirm compliance with local plan basement policy and NPPF. Note outstanding items (ground investigation, detailed design). Note Party Wall Act requirements.',
  },
];

export const BIA_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Site Description and Geology',
    'Existing Ground Conditions',
    'Proposed Basement Design',
    'Groundwater Assessment',
    'Construction Methodology',
    'Impact on Neighbouring Properties',
    'Impact on Trees',
    'Impact on Drainage and Flooding',
    'Structural Monitoring',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const BIA_TEMPLATE = {
  assessment_type: 'Basement Impact Assessment',
  short_name: 'BIA',
  version: 1,
  sections: BIA_SECTIONS,
  quality_criteria: BIA_QUALITY,
};
