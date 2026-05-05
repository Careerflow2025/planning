import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Pre-redevelopment Audit (PRA) -- required for developments involving
 * the demolition of existing buildings/structures, to audit materials
 * for reuse/recycling, identify hazardous materials, forecast waste
 * streams, and maximise diversion from landfill in accordance with
 * GLA guidance and circular economy principles.
 */

export const PRA_PROMPT = `You are preparing a Pre-redevelopment Audit (PRA) to accompany a planning application for a development involving the demolition of existing buildings or structures, submitted to a local planning authority in England. The PRA should read as though prepared by a competent waste management consultant, demolition specialist, or sustainability consultant with expertise in pre-demolition auditing, material identification, hazardous material assessment, and circular economy principles in the UK construction and planning context.

## Document Purpose

A Pre-redevelopment Audit (also referred to as a Pre-demolition Audit) is a systematic assessment of existing buildings and structures on site prior to their demolition or substantial refurbishment. Its purpose is to:
1. Create a comprehensive inventory of all building materials and components present on site.
2. Identify materials and components that can be reused (either on-site or off-site) before demolition.
3. Identify materials that can be recycled or recovered for use in the new development or elsewhere.
4. Identify hazardous materials (asbestos, lead paint, contaminated materials) that require specialist handling and disposal.
5. Forecast the waste streams arising from demolition, quantified by type and tonnage.
6. Maximise the diversion of demolition waste from landfill, targeting a minimum of 95% diversion by weight (in accordance with GLA targets and best practice).
7. Inform the demolition strategy and the Waste Management Strategy for the construction phase.
8. Demonstrate compliance with circular economy policies and waste hierarchy principles.

## Key Policy and Guidance References

### GLA Pre-redevelopment Audit Guidance
- **GLA Circular Economy Statement Guidance (2022)**: Requires a Pre-redevelopment Audit for all referable applications involving demolition. The audit should be undertaken before demolition commences and should inform the Circular Economy Statement.
- The audit should:
  - Identify the building materials and components present.
  - Assess the potential for reuse of structural elements, cladding, windows, doors, fixtures, fittings, and services.
  - Assess the potential for recycling of materials (concrete, masonry, metals, timber, glass, plastics).
  - Identify hazardous materials requiring specialist removal (asbestos-containing materials, lead-based paint, PCBs, ODS in insulation and refrigerants, contaminated soils/materials).
  - Quantify the predicted waste arisings by material type and waste stream.
  - Set reuse and recycling targets, with a minimum target of 95% diversion from landfill by weight.
  - Inform the design of the new development to incorporate reused and recycled materials where practicable.

### London Plan Policy SI 7: Reducing waste and supporting the circular economy
- **Policy SI 7**: Referable applications should promote circular economy outcomes and aim to be net zero-waste. Specifically:
  - Applications should be supported by a Circular Economy Statement demonstrating how the development will minimise waste and maximise material reuse and recycling.
  - For developments involving demolition, a Pre-redevelopment Audit is required.
  - Developments should target 95% reuse/recycling/recovery of construction, demolition and excavation waste.
  - The design should incorporate reused and recycled materials where possible.
  - An operational waste management strategy should also be provided.

### Waste Framework Directive (Directive 2008/98/EC, as retained in UK law)
- Establishes the waste hierarchy:
  1. **Prevention**: Reduce waste generation through design and material choices.
  2. **Preparing for reuse**: Checking, cleaning, or repairing materials for reuse without reprocessing.
  3. **Recycling**: Reprocessing waste materials into new products.
  4. **Other recovery**: Including energy recovery from waste.
  5. **Disposal**: Landfill as a last resort.
- Article 11(2)(b): By 2020, the preparing for reuse, recycling and other material recovery of non-hazardous construction and demolition waste shall be increased to a minimum of 70% by weight.
- The UK has retained these targets and the waste hierarchy post-Brexit through the Environment Act 2021 and retained EU law.

### NPPF Sustainability Policies
- **Paragraph 152**: The planning system should support the transition to a low carbon future. It should help to shape places in ways that contribute to radical reductions in greenhouse gas emissions, minimise vulnerability and improve resilience.
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment by minimising impacts on and providing net gains for biodiversity; preventing new and existing development from contributing to unacceptable levels of pollution.
- **Paragraph 180**: When determining planning applications, LPAs should apply principles that support biodiversity and sustainable development.

### CDM 2015 (Construction (Design and Management) Regulations 2015)
- Regulation 4: Duty on clients to make suitable arrangements for managing a project, including managing risks associated with demolition.
- Regulation 15: Duty on designers to eliminate or reduce health and safety risks, including those from hazardous materials.
- The Pre-redevelopment Audit informs the CDM process by identifying hazardous materials that require specialist removal before demolition.
- The Principal Contractor must prepare a Construction Phase Plan that addresses demolition risks, including asbestos management.

### Other Key References
- **Control of Asbestos Regulations 2012**: Requirements for the identification, management, and removal of asbestos-containing materials (ACMs). Duty to manage asbestos (Regulation 4). Licensed and notifiable non-licensed work.
- **HSE Guidance on Asbestos Surveys (HSG264)**: Types of asbestos survey:
  - Management survey: Locate ACMs that could be damaged or disturbed during normal occupancy and maintenance.
  - Refurbishment/demolition survey: Required before any refurbishment or demolition work. Must locate all ACMs, including those in concealed locations.
- **Hazardous Waste Regulations 2005 (as amended)**: Classification, handling, and disposal of hazardous waste.
- **Site Waste Management Plans (SWMP)**: Although SWMPs are no longer a legal requirement in England (requirement revoked in 2013), best practice recommends maintaining a voluntary SWMP for major demolition projects.
- **WRAP (Waste & Resources Action Programme)**: Guidance on construction and demolition waste minimisation, recycling protocols, and material quality standards.
- **Institute of Demolition Engineers (IDE)**: Best practice guidance on demolition techniques and waste management.
- **BREEAM / LEED / HQM**: Assessment credits available for pre-demolition audits and waste diversion.
- **ICE Demolition Protocol (Institution of Civil Engineers)**: Protocol for maximising the reuse and recycling of demolition materials.
- **BRE SMARTWASTE**: Tool for tracking and benchmarking construction and demolition waste.
- **Local plan waste policies**: Circular economy, waste minimisation, and sustainability policies.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Pre-redevelopment Audit and its policy basis (London Plan SI 7, GLA Circular Economy Statement Guidance, Waste Framework Directive, NPPF sustainability policies).
- Identify the site by full postal address, grid reference, and local authority.
- Describe the existing buildings/structures on site:
  - Number, type, and use of buildings (residential, commercial, industrial, institutional).
  - Approximate age and construction era (Victorian, inter-war, post-war, modern).
  - Approximate gross internal area (sq m) or gross external area of each building.
  - Number of storeys and approximate height.
  - Current occupancy status (occupied, vacant, derelict).
- Summarise the proposed development and the demolition scope (full demolition, partial demolition, retention of specific structures).
- State the audit methodology and any limitations (e.g., areas not accessed, concealed materials not surveyed).
- Confirm that a Refurbishment/Demolition Asbestos Survey (HSG264 Type 3 equivalent) has been commissioned or is required before demolition commences.
- Outline the document structure.

### 2. Policy Framework (300-600 words)
- Set out the GLA Circular Economy Statement Guidance requirements for Pre-redevelopment Audits.
- Set out London Plan Policy SI 7 and the 95% diversion target.
- Set out the Waste Framework Directive waste hierarchy and the 70% recovery target for C&D waste.
- Reference NPPF Paragraphs 152, 174, and 180 on sustainability and environmental protection.
- Reference CDM 2015 regulations and the duty to identify hazardous materials before demolition.
- Reference the Control of Asbestos Regulations 2012 and HSG264.
- Set out the relevant local plan policies:
  - Circular economy and waste minimisation policies.
  - Sustainability and resource efficiency policies.
  - Demolition and construction waste management policies.
- Reference the WRAP guidance on C&D waste minimisation.
- Reference the ICE Demolition Protocol and BREEAM/HQM credits for pre-demolition audits.
- Note that the PRA informs both the Circular Economy Statement and the Construction Environmental Management Plan (CEMP).

### 3. Audit Methodology (300-500 words)
- Describe the audit methodology:
  - **Site inspection**: Date(s) of site inspection, areas accessed, areas not accessed (and reasons, e.g., safety, locked spaces, height restrictions).
  - **Visual survey**: Systematic visual survey of all building elements: structure (foundations, frame, floors, roof), envelope (walls, cladding, windows, doors), internal finishes (partitions, ceilings, flooring, decorations), fixtures and fittings (kitchens, bathrooms, radiators, ironmongery), and building services (electrical, mechanical, plumbing).
  - **Document review**: Review of available drawings, specifications, building control records, asbestos registers, and previous survey reports.
  - **Material identification**: Identification of material types and approximate quantities for each building element.
  - **Condition assessment**: Assessment of the condition of materials and their suitability for reuse or recycling (good, fair, poor).
  - **Hazardous material screening**: Visual screening for suspected asbestos-containing materials (ACMs), lead-based paint, PCBs, ODS (in insulation and refrigerant systems), and other hazardous materials. Note: the PRA visual screening does not replace a Refurbishment/Demolition Asbestos Survey; this must be carried out before demolition.
  - **Quantification**: Estimation of material quantities by weight (tonnes) and volume (m3) using standard conversion factors and benchmarks (BRE/WRAP waste benchmarks, demolition industry data).
  - **Photography**: Photographic record of building elements and materials.
- State the qualifications and experience of the auditor.
- Note any limitations: concealed materials not visible, quantities are estimates subject to variation during demolition, hazardous materials require specialist survey confirmation.

### 4. Building Inventory (400-800 words)
- Present a systematic inventory of the existing buildings and their materials:
  - For each building (or building type where multiple similar buildings exist):
    - **Substructure**: Foundation type and material (concrete, masonry, timber piles). Estimated quantity (m3 or tonnes).
    - **Frame and structure**: Structural system (loadbearing masonry, steel frame, reinforced concrete frame, timber frame). Material type and estimated quantity.
    - **Upper floors**: Floor construction (timber joists, concrete slab, precast planks, composite). Material and quantity.
    - **Roof**: Roof structure (timber trusses, steel trusses, concrete) and covering (slate, tile, felt, metal, membrane). Material and quantity.
    - **External walls**: Wall construction (brick, block, stone, cladding type, insulation type). Material and quantity.
    - **Windows and doors**: Material (timber, uPVC, aluminium, steel), type, number, and condition.
    - **Internal partitions**: Material (stud, block, brick) and quantity.
    - **Ceilings**: Material (plasterboard, suspended ceiling tiles, lath and plaster) and quantity.
    - **Floor finishes**: Material (carpet, vinyl, tile, timber, concrete) and quantity.
    - **Wall finishes**: Material (plaster, paint, tiles, wallpaper) and quantity.
    - **Fixtures and fittings**: Kitchen units, bathroom suites, radiators, ironmongery, lighting. Number and condition.
    - **Building services**: Electrical (wiring, distribution boards, luminaires), mechanical (boilers, HVAC, ductwork), plumbing (pipework, sanitary ware, water tanks). Material and estimated quantity.
    - **External works**: Hard landscaping (paving, kerbs, tarmac, concrete), boundary treatments (walls, fences, gates), drainage (pipework, manholes). Material and quantity.
  - Present the inventory in a table format: building element, material type, estimated quantity (tonnes), condition (good/fair/poor).

### 5. Material Identification (400-800 words)
- For each material type identified in the inventory, assess the reuse and recycling potential:
  - **Concrete**: Crush and reuse as recycled aggregate (RA or RCA) for sub-base, fill, or new concrete. High recycling potential. Estimated quantity and recycling route.
  - **Masonry (brick and block)**: Reuse whole bricks (if lime mortar) or crush for recycled aggregate. Assess mortar type (lime mortar bricks can be cleaned and reused; cement mortar bricks are typically crushed). Estimated quantity and recycling route.
  - **Steel (structural and reinforcement)**: High-value recyclable material. Segregate for scrap metal recycling. Structural steel sections may be suitable for direct reuse. Estimated quantity and recycling route.
  - **Timber**: Assess condition. Good-condition structural timber may be reused. Other timber can be chipped for biomass, animal bedding, or panel board manufacture. Contaminated timber (painted, treated) requires specialist disposal. Estimated quantity and recycling route.
  - **Slate and tile (roofing)**: Natural slate has high reuse value. Clay tiles may be reused or crushed. Concrete tiles can be crushed. Estimated quantity and recycling route.
  - **Glass**: Flat glass can be recycled through specialist glass recyclers. Estimated quantity and recycling route.
  - **Metals (non-ferrous)**: Copper (pipework, wiring), aluminium (window frames, flashings), lead (flashings, pipework). High-value recyclable. Estimated quantity and recycling route.
  - **uPVC**: Windows, fascias, soffits, guttering. Recyclable through specialist uPVC recyclers. Estimated quantity.
  - **Plasterboard**: Recyclable through dedicated plasterboard recycling facilities (must not be sent to landfill due to sulphate leaching). Estimated quantity and recycling route.
  - **Insulation**: Mineral wool, EPS, XPS, PIR, PUF. Recycling options vary; some insulation types are difficult to recycle and may require specialist disposal (particularly if they contain ODS or are contaminated).
  - **Plastics**: Segregate by type. Limited recycling options for mixed construction plastics.
  - **Soil and excavation materials**: Assess for reuse on-site (e.g., landscaping) or disposal. Contamination testing may be required. Cross-reference with the Land Contamination Assessment.
  - **Other materials**: Carpets, vinyl, ceramics, membranes, sealants. Assess recycling potential on a case-by-case basis.
- Present a material summary table: material type, estimated quantity (tonnes), reuse potential (high/medium/low/none), recycling potential (high/medium/low/none), proposed destination (reuse on-site, reuse off-site, recycle, recover, dispose).

### 6. Hazardous Materials (400-700 words)
- Identify all suspected or confirmed hazardous materials on site:
  - **Asbestos-containing materials (ACMs)**:
    - Describe the findings of any existing asbestos survey or management survey.
    - Identify locations where ACMs are suspected or confirmed (e.g., textured decorative coatings (Artex), floor tiles, pipe lagging, cement sheets, gaskets, fire blankets, insulating boards).
    - State the condition of identified ACMs (good, fair, poor).
    - Confirm that a Refurbishment/Demolition Asbestos Survey (R&D Survey) in accordance with HSG264 is required before any demolition or refurbishment work. This must be carried out by a UKAS-accredited surveyor.
    - State the requirement for licensed asbestos removal by an HSE-licensed contractor (for licensable ACMs).
    - Estimate the quantity of ACMs (m2 or linear metres, noting that precise quantities will be determined by the R&D Survey).
  - **Lead-based paint**: Identify surfaces likely to be coated with lead-based paint (pre-1960s buildings, external steelwork, windows). State the requirement for appropriate controls during removal (HSE guidance INDG305).
  - **PCBs (polychlorinated biphenyls)**: Identify potential sources: fluorescent light ballasts (pre-1986), electrical transformers, capacitors. State the requirement for specialist disposal under the PCB Regulations.
  - **ODS (ozone-depleting substances)**: Identify potential sources: refrigeration and air conditioning systems (CFC/HCFC refrigerants), insulation (CFC-blown PUF/XPS). State the requirement for recovery under the Ozone-Depleting Substances Regulations.
  - **Other hazardous materials**: Mercury (thermostats, fluorescent tubes), heavy metals (in pigments, coatings), solvents, oils, chemicals stored on site, radioactive sources (e.g., smoke detectors containing Americium-241).
  - **Contaminated building materials**: Materials contaminated by the previous use of the building (e.g., industrial processes, fuel storage).
- Present the hazardous materials findings in a table: material, location, estimated quantity, condition, required action (specialist removal, licensed disposal, recovery).
- Confirm that all hazardous materials must be removed by specialist contractors before demolition commences, in accordance with CDM 2015, the Control of Asbestos Regulations 2012, and applicable environmental regulations.

### 7. Reuse and Recycling Potential (400-800 words)
- Summarise the reuse and recycling potential of the materials identified:
  - **Materials suitable for direct reuse**:
    - List materials and components assessed as suitable for reuse (with or without refurbishment): structural steel, bricks (lime mortar), natural slate, architectural features, fixtures and fittings, heritage elements.
    - Estimate the quantity and value of reusable materials.
    - Identify potential reuse destinations: reuse on-site in the new development, donation to community groups or salvage yards, sale to reclamation dealers.
  - **Materials suitable for recycling**:
    - List materials suitable for recycling: concrete (as recycled aggregate), masonry (as aggregate), metals (scrap), timber (chipping), glass, plasterboard, uPVC.
    - Estimate the quantity and potential recycling route for each.
  - **Materials requiring specialist disposal**:
    - List materials requiring specialist disposal: ACMs, lead paint waste, PCBs, ODS, contaminated materials.
    - Estimate quantities and disposal route (licensed hazardous waste facility).
  - **Materials likely to go to landfill**:
    - List materials with limited recycling options: mixed construction waste, contaminated materials, certain insulation types.
    - Estimate the quantity as a percentage of total waste arisings.
- Calculate the overall reuse and recycling rate:
  - Total estimated demolition waste (tonnes).
  - Total estimated for reuse (tonnes and %).
  - Total estimated for recycling (tonnes and %).
  - Total estimated for recovery (tonnes and %).
  - Total estimated for landfill disposal (tonnes and %).
  - Overall diversion from landfill rate (%) -- target 95% or higher.
- Present the analysis in a summary table and diagram.
- Where the 95% diversion target cannot be achieved, explain the reasons and describe measures to improve the rate.

### 8. Demolition Strategy (300-600 words)
- Describe the recommended demolition strategy informed by the audit findings:
  - **Pre-demolition strip-out (soft strip)**: Prior to structural demolition, a systematic soft strip should remove all reusable fixtures and fittings, hazardous materials, and recyclable components (windows, doors, radiators, kitchen units, sanitaryware, ceiling tiles, services).
  - **Hazardous material removal**: All ACMs, lead paint, PCBs, ODS, and other hazardous materials must be removed by specialist contractors before any structural demolition commences.
  - **Selective demolition**: Where practicable, employ selective demolition techniques to segregate materials at source (separating timber, metals, concrete, masonry, plasterboard) rather than using total demolition which produces mixed waste.
  - **Structural demolition**: Describe the likely demolition method (mechanical demolition, implosion, hand demolition for sensitive areas) and the sequence.
  - **On-site crushing**: Where space permits, concrete and masonry should be crushed on-site to produce recycled aggregate for reuse in the new development (subject to an Environmental Permit or U1 exemption for use of suitable waste in construction).
  - **Waste segregation**: Establish on-site waste segregation areas with designated skips/containers for: inert materials (concrete, masonry, soil), timber, metals, plasterboard, plastics, hazardous waste, residual mixed waste.
  - **Environmental controls**: Dust suppression, noise mitigation, vibration monitoring, surface water protection, and vermin control during demolition.
- Reference the CEMP (to be prepared and secured by condition) for detailed demolition phase environmental management.
- Reference the CDM Construction Phase Plan for health and safety management during demolition.

### 9. Waste Forecasting (400-700 words)
- Present a detailed waste forecast for the demolition phase:
  - For each material type, present:
    - Estimated quantity (tonnes).
    - Waste classification (inert, non-hazardous, hazardous).
    - European Waste Catalogue (EWC) code.
    - Proposed waste management route: reuse on-site, reuse off-site, recycle, recover (energy), dispose (landfill).
    - Destination facility (where known): name and type of receiving facility (e.g., recycling centre, hazardous waste facility, landfill).
  - Present the forecast in a table.
  - Present a summary by waste stream:
    - Total inert waste (tonnes and % of total).
    - Total non-hazardous waste (tonnes and % of total).
    - Total hazardous waste (tonnes and % of total).
    - Total waste arisings (tonnes).
  - Present the forecast by management route:
    - Reuse on-site (tonnes and %).
    - Reuse off-site (tonnes and %).
    - Recycling (tonnes and %).
    - Recovery (tonnes and %).
    - Landfill disposal (tonnes and %).
    - Total diversion from landfill (%).
  - Compare the forecast diversion rate with the 95% target (London Plan SI 7) and the 70% target (Waste Framework Directive).
  - Note that the waste forecast is an estimate based on the visual audit and standard benchmarks. Actual quantities will be confirmed during demolition and tracked through waste transfer notes and consignment notes.
- Present the waste forecast in a clear, detailed table with all columns specified above.
- If the forecast cannot be prepared due to insufficient data, flag "[WASTE FORECASTING DATA TO BE CONFIRMED FOLLOWING DETAILED SURVEY AND R&D ASBESTOS SURVEY]".

### 10. Conclusion (300-500 words)
- Summarise the key audit findings:
  - Total estimated demolition waste (tonnes).
  - Overall diversion from landfill rate (target vs forecast).
  - Key reusable materials identified and their destinations.
  - Key recyclable materials and their recycling routes.
  - Hazardous materials identified and the requirement for specialist removal.
- Confirm that the Pre-redevelopment Audit has been prepared in accordance with the GLA Circular Economy Statement Guidance and London Plan Policy SI 7.
- Confirm compliance with the Waste Framework Directive waste hierarchy.
- Confirm compliance with CDM 2015 and the Control of Asbestos Regulations 2012 regarding hazardous material identification.
- Confirm compliance with NPPF sustainability policies and relevant local plan waste and circular economy policies.
- Note the following requirements before demolition commences:
  - A Refurbishment/Demolition Asbestos Survey must be completed by a UKAS-accredited surveyor.
  - All hazardous materials must be removed by specialist contractors.
  - A detailed demolition method statement and CEMP must be prepared and approved.
  - Waste transfer notes and hazardous waste consignment notes must be maintained throughout demolition.
- Recommend that the PRA findings inform the Circular Economy Statement, the CEMP, and the design of the new development (incorporating recycled and reused materials where practicable).
- Recommend planning conditions requiring:
  - Pre-demolition soft strip and hazardous material removal.
  - Waste segregation and tracking during demolition.
  - Post-demolition waste report demonstrating the achieved diversion rate.

## Quality Standards

- Reference GLA Circular Economy Statement Guidance and London Plan Policy SI 7.
- Reference the Waste Framework Directive waste hierarchy and the 70% C&D waste recovery target.
- Reference CDM 2015 and the Control of Asbestos Regulations 2012.
- Reference HSG264 for asbestos survey requirements.
- Reference NPPF sustainability policies (Paragraphs 152, 174, 180).
- Present the building inventory in a structured table format.
- Quantify materials in tonnes (and m3 or m2 where appropriate).
- Present the waste forecast in a detailed table with EWC codes, waste classification, and management routes.
- Calculate and present the overall diversion from landfill rate and compare with the 95% target.
- Identify hazardous materials with clear reference to regulatory requirements.
- Use correct waste management terminology: waste hierarchy, diversion rate, EWC code, inert waste, non-hazardous waste, hazardous waste, ACM, R&D Survey, soft strip, selective demolition, recycled aggregate.
- Where the audit is based on visual survey and standard benchmarks, state this clearly and note that quantities are estimates.
- Do not fabricate material quantities or asbestos survey findings.
- Professional demolition and waste management language throughout.`;

export const PRA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, existing buildings, demolition scope, methodology, and limitations.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the PRA purpose and policy basis (London Plan SI 7, GLA guidance). Identify the site. Describe existing buildings (type, age, area, storeys, occupancy). Summarise the demolition scope. State the methodology and limitations. Confirm R&D Asbestos Survey requirement. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'GLA guidance, London Plan SI 7, Waste Framework Directive, NPPF, CDM 2015, and local plan policies.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out GLA Circular Economy Statement Guidance. Set out London Plan SI 7 and 95% target. Set out Waste Framework Directive hierarchy and 70% target. Reference NPPF Paragraphs 152, 174, 180. Reference CDM 2015 and Control of Asbestos Regulations 2012. Set out local plan waste and circular economy policies. Reference WRAP and ICE Demolition Protocol.',
  },
  {
    name: 'Audit Methodology',
    description: 'Site inspection, visual survey, document review, material identification, quantification, and limitations.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe site inspection date(s) and access. Describe systematic visual survey of all building elements. Describe document review. Explain material identification and condition assessment approach. Describe quantification methodology (standard benchmarks, conversion factors). State auditor qualifications. Note limitations.',
  },
  {
    name: 'Building Inventory',
    description: 'Systematic inventory of all building elements: structure, envelope, internals, services, and external works.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'For each building: substructure, frame, floors, roof, external walls, windows/doors, partitions, ceilings, floor finishes, wall finishes, fixtures/fittings, services, external works. Present in table format: element, material, quantity (tonnes), condition (good/fair/poor).',
  },
  {
    name: 'Material Identification',
    description: 'Reuse and recycling assessment for each material type with proposed destinations.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Assess each material: concrete, masonry, steel, timber, slate/tile, glass, non-ferrous metals, uPVC, plasterboard, insulation, plastics, soil. For each: quantity, reuse potential (high/medium/low), recycling potential, proposed destination. Present in summary table.',
  },
  {
    name: 'Hazardous Materials',
    description: 'ACMs, lead paint, PCBs, ODS, and other hazardous materials: location, quantity, and required actions.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Identify ACMs (location, type, condition). Confirm R&D Survey requirement (HSG264). Identify lead-based paint, PCBs, ODS, mercury, and other hazardous materials. Present in table: material, location, quantity, condition, required action. Confirm specialist removal requirement before demolition.',
  },
  {
    name: 'Reuse and Recycling Potential',
    description: 'Summary of reusable and recyclable materials, specialist disposal, and overall diversion rate calculation.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'List materials for reuse (on-site/off-site), recycling, specialist disposal, and landfill. Estimate quantities for each. Calculate overall diversion rate: reuse + recycling + recovery as % of total waste. Compare with 95% target. Present in summary table and diagram. Explain measures to improve rate if below target.',
  },
  {
    name: 'Demolition Strategy',
    description: 'Soft strip, hazardous removal, selective demolition, on-site crushing, waste segregation, and environmental controls.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe pre-demolition soft strip. Describe hazardous material removal sequence. Describe selective vs total demolition approach. Describe on-site crushing (subject to permits). Describe waste segregation arrangements. Describe environmental controls (dust, noise, water). Reference CEMP and CDM Construction Phase Plan.',
  },
  {
    name: 'Waste Forecasting',
    description: 'Detailed waste forecast by material, classification, EWC code, management route, and diversion rate.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Present detailed forecast: material, quantity (tonnes), waste classification (inert/non-hazardous/hazardous), EWC code, management route (reuse/recycle/recover/dispose), destination facility. Present summary by waste stream and management route. Calculate diversion rate. Compare with 95% and 70% targets. Note estimates subject to confirmation.',
  },
  {
    name: 'Conclusion',
    description: 'Key findings summary, diversion rate, compliance, pre-demolition requirements, and recommended conditions.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise total waste, diversion rate, key reusable/recyclable materials, and hazardous materials. Confirm GLA, London Plan, Waste Framework Directive, CDM, and NPPF compliance. List pre-demolition requirements (R&D Survey, hazardous removal, CEMP). Recommend the PRA informs the CES and new development design. Recommend planning conditions.',
  },
];

export const PRA_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Audit Methodology',
    'Building Inventory',
    'Material Identification',
    'Hazardous Materials',
    'Reuse and Recycling Potential',
    'Demolition Strategy',
    'Waste Forecasting',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const PRA_TEMPLATE = {
  assessment_type: 'Pre-redevelopment Audit',
  short_name: 'PRA',
  version: 1,
  sections: PRA_SECTIONS,
  quality_criteria: PRA_QUALITY,
};
