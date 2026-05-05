import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Circular Economy Statement (CES) -- demonstrates how the proposed
 * development applies circular economy principles throughout its
 * lifecycle, from design and material selection through construction,
 * operation, and eventual end-of-life.
 *
 * Required by London Plan Policy SI 7 for referable applications in
 * London. Increasingly required or encouraged by local planning
 * authorities outside London as part of sustainability strategies.
 *
 * AI Difficulty: Easy | Typical length: 10-20 pages
 */

export const CES_PROMPT = `You are preparing a Circular Economy Statement to accompany a planning application in England. The Circular Economy Statement demonstrates how the proposed development has been designed to incorporate circular economy principles, minimising waste and maximising the reuse and recycling of materials and resources throughout the building's lifecycle.

## Document Purpose

The Circular Economy Statement must:
- Demonstrate that circular economy principles have been considered from the earliest design stages.
- Set out the approach to designing for longevity, adaptability, and disassembly.
- Describe the material selection strategy, prioritising reuse, recycled content, and responsibly sourced materials.
- Quantify construction waste and set targets for diversion from landfill.
- Address operational waste management and how the development facilitates recycling and reuse by occupants.
- Set out an end-of-life strategy demonstrating how the building or its components can be reused, recycled, or repurposed.
- Provide a monitoring and reporting framework to track circular economy performance.

## Key Policy and Legislation References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 8**: The three dimensions of sustainable development include an environmental objective — to protect and enhance the natural, built, and historic environment, including making effective use of land, minimising waste and pollution.
- **Paragraph 157**: Plans should take a proactive approach to mitigating and adapting to climate change, taking into account the long-term implications for resource use and waste.
- **Paragraph 159**: New development should be planned for in ways that avoid increased vulnerability to climate change impacts and can help to reduce greenhouse gas emissions, such as through the effective use of resources.

### London Plan (2021) — Policy SI 7: Reducing Waste and Supporting the Circular Economy
- Requires referable planning applications in London to be supported by a Circular Economy Statement demonstrating:
  - How all materials arising from demolition and remediation works will be re-used and/or recycled.
  - How the proposal's design and construction will reduce material demands and enable building materials, components, and products to be disassembled and re-used at the end of their useful life.
  - Opportunities for managing as much waste as possible on site.
  - Adequate and easily accessible storage space and collections systems to support recycling and re-use.
  - How much waste the proposal is expected to generate, and how and where the waste will be managed in accordance with the waste hierarchy.
- Applies to all referable applications in London (typically major developments).

### GLA Circular Economy Statement Guidance (2022)
- Provides detailed guidance on preparing Circular Economy Statements for London applications.
- Sets out a standardised reporting template with six key sections.
- Requires two submissions: a pre-commencement Circular Economy Statement and a post-completion report.
- Establishes benchmarks for construction waste (maximum 95% diversion from landfill) and demolition waste (minimum 95% reuse/recycling).

### Waste Framework Directive (2008/98/EC, retained in UK law)
- Establishes the waste hierarchy: prevention > preparation for re-use > recycling > other recovery > disposal.
- Requires that waste management is carried out without endangering human health and the environment.
- Article 4 sets out the waste hierarchy that must be applied as a priority order.

### Waste (England and Wales) Regulations 2011
- Transpose the Waste Framework Directive into English law.
- Require duty holders to apply the waste hierarchy when transferring waste.
- Require a waste management plan for construction and demolition projects.

### Environment Act 2021
- Establishes new targets for resource efficiency and waste reduction.
- Introduces extended producer responsibility and deposit return schemes.
- Sets a legal target to reduce residual waste (excluding major mineral wastes) kg per capita by 50% by 2042 from 2019 levels.

### Resources and Waste Strategy (Defra, 2018)
- Sets out the Government's ambition to move towards a more circular economy.
- Targets include eliminating avoidable waste by 2050 and doubling resource productivity by 2050.
- Emphasises designing out waste, keeping products and materials in use, and regenerating natural systems.

### Local Plan Policies
- Many local plans contain policies on sustainable design, resource efficiency, and waste minimisation in construction.
- Some local authorities outside London are beginning to require or encourage Circular Economy Statements.
- Reference the specific local plan policies applicable to the development site.

### Other Key References
- BS 8001:2017 Framework for Implementing the Principles of the Circular Economy in Organizations.
- WRAP (Waste and Resources Action Programme) guidance on circular economy in construction.
- BRE / BREEAM circular economy credits (Mat 06 Material Efficiency).
- RICS Whole Life Carbon Assessment guidance (relates to embodied carbon in materials).
- Ellen MacArthur Foundation circular economy framework.
- UK Green Building Council Circular Economy guidance.
- ICE (Institution of Civil Engineers) Demolition Protocol.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Circular Economy Statement.
- Identify the application site: address, site area, and existing use (including any buildings to be demolished).
- Describe the proposed development: type, scale, number of units or floor area, and key building characteristics.
- For London applications: confirm compliance with London Plan Policy SI 7 and the GLA Circular Economy Statement Guidance.
- For non-London applications: reference the relevant local plan policies and national policy drivers.
- State any sustainability certifications being targeted (BREEAM, Home Quality Mark) that include circular economy requirements.
- Outline the document structure and the key circular economy principles addressed.

### 2. Policy Framework (300-500 words)
- Set out the national policy context, referencing the NPPF paragraphs listed above.
- Reference the Waste Framework Directive and waste hierarchy.
- Reference the Waste (England and Wales) Regulations 2011.
- Reference the Environment Act 2021 resource efficiency targets.
- Reference the Resources and Waste Strategy 2018.
- For London: reference London Plan Policy SI 7 in detail, including the specific requirements for Circular Economy Statements.
- For London: reference the GLA Circular Economy Statement Guidance (2022) and the reporting template.
- Reference applicable local plan policies on waste, resources, and circular economy.
- Reference BS 8001:2017 as the framework standard.

### 3. Design for Longevity and Adaptability (400-700 words)
- Describe how the building has been designed for a long lifespan:
  - Durable materials and robust construction methods.
  - Design life of key building elements (structure, envelope, services, fit-out).
  - Shearing layers approach: designing for independent replacement of different building layers.
- Describe how the building has been designed for adaptability:
  - Flexible internal layouts that can accommodate changing uses over time (e.g., open-plan floors, removable partitions).
  - Oversized structural grids and floor-to-ceiling heights to allow future change of use.
  - Adaptable servicing strategies (accessible risers, spare capacity in distribution systems).
  - Accessibility provisions that support future adaptation.
- Describe how the building has been designed for disassembly:
  - Mechanical fixings over chemical bonds (bolted connections, screwed panels, clip-on cladding).
  - Modular construction elements that can be removed and reused.
  - Standardised components and connections.
  - Material passports or building logbooks to record materials and connections for future disassembly.
- Quantify the design decisions: percentage of structure designed for disassembly, percentage of facade designed for reuse.

### 4. Material Selection (400-700 words)
- Describe the material selection strategy with circular economy priorities:
  - **Reused materials**: Identify opportunities to reuse materials from any demolition on site (structural steel, bricks, timber, architectural features). Quantify volumes where possible.
  - **Recycled content**: Specify target recycled content percentages for key materials (concrete, steel, glass, insulation). Reference industry benchmarks and supplier capabilities.
  - **Responsibly sourced materials**: Timber from FSC/PEFC certified sources, BES 6001 certified concrete, responsible steel.
  - **Low-carbon materials**: Materials with lower embodied carbon, supporting whole life carbon reduction (cross-reference with any Whole Life Carbon Assessment).
  - **Locally sourced materials**: Preference for local suppliers to reduce transport impacts.
  - **Avoidance of hazardous materials**: No materials containing substances of very high concern (SVHCs) that would prevent future recycling.
- Present a material selection matrix or table showing key materials, source, recycled content, and circular economy attributes.
- Describe the pre-demolition audit process (if demolition is involved) to identify reusable materials before demolition begins, following the ICE Demolition Protocol.

### 5. Construction Waste Minimisation (400-700 words)
- Set out the construction waste minimisation strategy:
  - Design measures to reduce waste generation: standardised dimensions, modular design, off-site manufacture, pre-fabrication.
  - Target waste generation rate (tonnes per 100m2 of floor area) benchmarked against WRAP guidance.
  - Waste streams anticipated: concrete, brick, timber, metal, plasterboard, packaging, plastic, mixed waste.
- Set targets for waste diversion from landfill:
  - Overall diversion target (e.g., minimum 95% by weight).
  - Material-specific recycling rates.
- Describe on-site waste management arrangements:
  - Segregation strategy: number and type of waste streams to be separated.
  - On-site consolidation or processing (e.g., concrete crushing for reuse as aggregate).
  - Waste contractor arrangements and destinations for each waste stream.
- Present a construction waste management table:
  - Waste stream | Estimated quantity (tonnes) | Reuse % | Recycling % | Recovery % | Landfill % | Destination.
- Reference the Site Waste Management Plan (if a separate SWMP is prepared) and demonstrate consistency.

### 6. Operational Waste (300-500 words)
- Describe how the development has been designed to support waste reduction, reuse, and recycling during its operational life:
  - Adequate internal storage for separated waste and recyclables within each unit or tenancy.
  - Communal waste and recycling storage areas sized in accordance with local authority requirements.
  - Collection arrangements compatible with the local authority waste collection service.
  - Food waste collection provision (where the local authority provides food waste collection or where this is anticipated).
  - Bulky waste storage and collection arrangements.
- Describe any on-site waste management facilities:
  - Composting areas for residential developments with gardens.
  - Community repair/reuse facilities or sharing platforms.
  - Cycle of materials (e.g., communal tool libraries, furniture reuse schemes).
- State the estimated operational waste generation rate (kg per unit per year or kg per m2 per year) and the target recycling rate.
- Describe how the waste storage design supports the waste hierarchy (prevention > reuse > recycling > recovery > disposal).

### 7. End of Life Strategy (300-500 words)
- Set out the end-of-life strategy for the building and its components:
  - How the design for disassembly principles (described in Section 3) will enable future deconstruction rather than demolition.
  - Estimated percentage of the building (by weight or value) that could be reused or recycled at end of life.
  - Material passport or building logbook: commitment to creating and maintaining a record of materials, components, connections, and specifications to support future reuse and recycling.
  - Residual value assessment: estimated value of materials recoverable at end of life.
- Describe the planned lifespan assumptions for different building elements:
  - Structure: 60-120 years.
  - Facade/envelope: 30-60 years.
  - Services: 15-25 years.
  - Fit-out: 5-15 years.
- Explain how the layered design approach (structure > envelope > services > fit-out) enables staged replacement and refurbishment without wholesale demolition.
- Reference the building's potential for adaptive reuse (change of use without demolition).

### 8. Monitoring and Reporting (200-400 words)
- Describe the monitoring and reporting framework for circular economy performance:
  - Pre-commencement: finalised Circular Economy Statement with detailed targets and commitments (for London applications, submitted to the GLA).
  - During construction: regular monitoring of waste generation, diversion rates, and material sourcing against targets.
  - Post-completion: Circular Economy Statement post-completion report setting out actual performance against targets (required for London referable applications).
- Describe the roles and responsibilities for circular economy monitoring during construction.
- Describe how information will be collected and reported (waste transfer notes, delivery records, material specifications).
- For London applications: confirm compliance with the GLA's reporting requirements (pre-commencement and post-completion submissions).
- State any planning conditions anticipated relating to circular economy monitoring.

### 9. Conclusion (200-400 words)
- Summarise the key circular economy commitments made in the statement:
  - Design for longevity, adaptability, and disassembly.
  - Responsible material selection with reuse and recycled content.
  - Construction waste minimisation and diversion targets.
  - Operational waste management provisions.
  - End-of-life strategy and material passport commitment.
- Confirm compliance with the applicable policy framework (London Plan Policy SI 7, NPPF, local plan policies).
- State the key quantified targets (construction waste diversion rate, recycled content target, design life).
- Confirm commitment to monitoring and post-completion reporting.
- Note any recommended planning conditions relating to circular economy.

## Quality Standards

- Reference the NPPF and specific sustainability/waste paragraphs.
- For London: reference London Plan Policy SI 7 and GLA Circular Economy Statement Guidance (2022) in detail.
- Reference the waste hierarchy and Waste Framework Directive.
- Reference BS 8001:2017 as the circular economy framework standard.
- Include quantified targets: waste diversion rates, recycled content percentages, design life.
- Present construction waste data in tabular format with waste streams, quantities, and destinations.
- Address all lifecycle stages: design, materials, construction, operation, and end of life.
- Describe specific design measures (not generic statements) for longevity, adaptability, and disassembly.
- Reference pre-demolition audits and material reuse opportunities where demolition is involved.
- Address both embodied and operational resource efficiency.
- Use correct waste and circular economy terminology: waste hierarchy, diversion rate, material passport, design for disassembly, shearing layers.
- Professional language appropriate for planning officers and sustainability consultees.`;

export const CES_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose of the statement, site and development description, policy compliance context.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the purpose of the CES. Identify the site and proposed development. For London, confirm Policy SI 7 compliance. Reference any sustainability certifications. Outline document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local planning policy, waste hierarchy, London Plan, and standards.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Reference NPPF paragraphs 8, 157, 159. Reference Waste Framework Directive and waste hierarchy. Reference Waste (England and Wales) Regulations 2011. Reference Environment Act 2021. For London, reference Policy SI 7 and GLA Guidance. Reference BS 8001:2017. Reference local plan policies.',
  },
  {
    name: 'Design for Longevity and Adaptability',
    description: 'Design life, flexible layouts, adaptable servicing, and design for disassembly.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe design for long lifespan and durable materials. Describe flexible internal layouts and adaptable servicing. Describe design for disassembly (mechanical fixings, modular elements). Reference shearing layers approach. Quantify design decisions.',
  },
  {
    name: 'Material Selection',
    description: 'Reused materials, recycled content, responsible sourcing, and pre-demolition audit.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe material reuse from demolition. Specify recycled content targets for key materials. Address responsible sourcing (FSC, BES 6001). Address low-carbon and locally sourced materials. Present material selection matrix. Describe pre-demolition audit process.',
  },
  {
    name: 'Construction Waste Minimisation',
    description: 'Waste generation targets, segregation strategy, and diversion rates.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Set out design measures to reduce waste. State waste generation rate target. List waste streams. Set diversion target (minimum 95%). Describe segregation and on-site processing. Present construction waste table with quantities and destinations.',
  },
  {
    name: 'Operational Waste',
    description: 'Waste storage, collection arrangements, and recycling provision during building operation.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe internal and communal waste storage. Address collection compatibility with local authority. Address food waste and bulky waste. Describe any on-site reuse facilities. State estimated waste generation and recycling rates.',
  },
  {
    name: 'End of Life Strategy',
    description: 'Deconstruction approach, material passport, and residual value assessment.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe how design for disassembly enables deconstruction. Estimate reusable/recyclable percentage at end of life. Commit to material passport/building logbook. State planned lifespans for building layers. Address adaptive reuse potential.',
  },
  {
    name: 'Monitoring and Reporting',
    description: 'Pre-commencement, construction, and post-completion monitoring framework.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Describe monitoring framework stages. State roles and responsibilities. Describe data collection methods. For London, confirm GLA reporting requirements. State anticipated planning conditions.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of circular economy commitments, targets, and policy compliance.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise key circular economy commitments across all lifecycle stages. Confirm policy compliance. State key quantified targets. Confirm monitoring commitment. Note recommended conditions.',
  },
];

export const CES_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Design for Longevity and Adaptability',
    'Material Selection',
    'Construction Waste Minimisation',
    'Operational Waste',
    'End of Life Strategy',
    'Monitoring and Reporting',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const CES_TEMPLATE = {
  assessment_type: 'Circular Economy Statement',
  short_name: 'CES',
  version: 1,
  sections: CES_SECTIONS,
  quality_criteria: CES_QUALITY,
};
