import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Water Supply Assessment (WSA) -- demonstrates that adequate potable
 * water supply capacity exists (or can be provided) to serve the proposed
 * development, and sets out the strategy for connecting to the public
 * water network.
 *
 * Typically required where the local planning authority, water company,
 * or local plan policy requires confirmation of water supply adequacy,
 * particularly for major developments, sites in areas of water stress,
 * or developments relying on private water supplies.
 *
 * AI Difficulty: Easy | Typical length: 5-15 pages
 */

export const WSA_PROMPT = `You are preparing a Water Supply Assessment to accompany a planning application in England. The Water Supply Assessment demonstrates that the proposed development can be served by an adequate, reliable, and sustainable potable water supply, and sets out the arrangements for connection to the public water supply network (or private supply where applicable).

## Document Purpose

The Water Supply Assessment must:
- Confirm that adequate water supply infrastructure exists or can be provided to serve the proposed development.
- Set out the estimated water demand for the development, calculated using recognised industry methodologies.
- Describe the proposed connection strategy, including any reinforcement or upgrades required to the existing water network.
- Demonstrate engagement with the relevant water company (or private supply arrangements where applicable).
- Address water efficiency and sustainability measures incorporated into the development design.
- Provide confidence to the local planning authority that water supply will not be a constraint on the development.

## Key Policy and Legislation References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 20**: Strategic policies should set out an overall strategy for the pattern, scale and design quality of places, and make sufficient provision for infrastructure for water supply.
- **Paragraph 34**: Plans should set out the contributions expected from development, including infrastructure such as water supply.
- **Paragraph 86**: Planning policies and decisions should ensure that social, recreational and cultural facilities and services the community needs are planned positively, including adequate infrastructure.
- **Paragraph 159**: New development should be planned for in ways that avoid increased vulnerability to the range of impacts arising from climate change, including water supply stress.
- **Paragraph 180**: Planning policies and decisions should contribute to and enhance the natural and local environment by, among other things, preventing new development from contributing to or being put at unacceptable risk from water pollution.

### Water Industry Act 1991
- **Section 37**: General duty of water undertaker to develop and maintain an efficient and economical system of water supply within its area.
- **Section 41**: Duty to provide a water main (requisition by developers).
- **Section 42**: Financial conditions of requisition.
- **Section 45**: Duty to make connections with water mains.
- **Section 55**: Duty of water undertaker to supply water for non-domestic purposes.
- **Section 65**: Provision for water supply by agreement.
- The Act establishes the legal framework for water supply connections for new developments and the duties and powers of water undertakers.

### Water Resources Management Plans (WRMPs)
- Each water company produces a statutory WRMP setting out how it intends to maintain the balance between water supply and demand over a minimum 25-year planning period.
- The WRMP identifies whether the company's supply area (or specific water resource zones) is in surplus or deficit, and the planned interventions to maintain security of supply.
- The WSA should reference the relevant water company's current WRMP to demonstrate that the development is consistent with the company's long-term water resource planning.

### Water Resources Act 1991
- Regulates the abstraction and impounding of water.
- Relevant where the development proposes a private water supply or borehole abstraction.

### Private Water Supplies (England) Regulations 2016
- Where a development is served by a private water supply (not connected to the public network), the supply must meet quality standards and be adequate in quantity.
- The local authority has duties to monitor private water supplies.

### Local Plan Policies
- Many local plans contain specific policies requiring adequate water supply infrastructure to be demonstrated before planning permission is granted.
- Some local authorities in water-stressed areas require specific water efficiency standards (e.g., 110 litres per person per day optional Building Regulations standard).
- Reference the specific local plan policies applicable to the development site.

### Building Regulations Approved Document G: Sanitation, Hot Water Safety and Water Efficiency
- **Regulation 36**: Limits the calculated whole-building water consumption to no more than 125 litres per person per day (the mandatory national standard).
- **Optional standard**: 110 litres per person per day, which may be applied through local plan policies in water-stressed areas.
- The WSA should reference the applicable water efficiency standard.

### Other Key References
- Environment Agency Water Stressed Areas Classification.
- Ofwat: Water company performance and investment plans.
- CIRIA guidance on water efficiency in new developments.
- BREEAM water efficiency credits (where applicable).
- Water company pre-development enquiry responses and capacity assessments.

## Section-by-Section Guidance

### 1. Introduction (150-300 words)
- State the purpose of the Water Supply Assessment and why it has been prepared.
- Identify the application site: address, site area, and brief description.
- Describe the proposed development: type, number of units (residential) or floor area (commercial/mixed-use), and anticipated occupancy.
- State the relevant water company serving the site.
- Confirm that a pre-development enquiry has been submitted to the water company (or note that one should be submitted before finalising the document).
- Outline the structure of the document.

### 2. Policy Framework (300-500 words)
- Set out the relevant national policy context, referencing the NPPF paragraphs listed above.
- Reference the Water Industry Act 1991 and the statutory framework for water supply connections.
- Reference the relevant water company's Water Resources Management Plan (WRMP) and identify the water resource zone in which the site is located.
- State whether the site is in an area classified as water-stressed by the Environment Agency.
- Reference the applicable local plan policies on water supply, infrastructure, and water efficiency.
- Reference Building Regulations Approved Document G and the applicable water efficiency standard (125 or 110 litres/person/day).
- Note any additional guidance or standards applied (e.g., BREEAM, Home Quality Mark).

### 3. Existing Water Supply Infrastructure (300-600 words)
- Describe the existing public water supply infrastructure in the vicinity of the site:
  - Location, size (diameter), and material of existing water mains.
  - Pressure and flow data (from the water company or pre-development enquiry response).
  - Any known constraints, such as low-pressure areas, trunk main restrictions, or areas where existing capacity is limited.
- Describe the source of existing water supply (e.g., surface water treatment works, groundwater abstraction) if relevant to supply reliability.
- Reference the water company's asset plans or pre-development enquiry response.
- If the site is currently developed, describe the existing water supply connections and current demand.
- If the development proposes a private water supply, describe the existing source (borehole, spring, etc.), abstraction licence status, yield data, and water quality test results.

### 4. Proposed Development Water Demand (400-700 words)
- Calculate the estimated water demand for the proposed development using one or more of the following methods:
  - **Residential demand**: Based on occupancy assumptions and the applicable per capita consumption standard (125 or 110 litres/person/day). State the number of units, assumed occupancy per unit type, and resulting daily demand.
  - **Non-residential demand**: Based on floor area, use type, and benchmark consumption rates (e.g., from BREEAM, CIRIA, or water company guidance).
  - **Mixed-use developments**: Itemise each use and aggregate the total demand.
- Present the demand calculation in a clear table format:
  - Use type | Number of units/floor area | Occupancy/usage factor | Daily demand (litres) | Annual demand (m3).
- State the peak demand (peak hourly and peak daily flow rates) as well as average demand, as the water network must accommodate peak flows.
- Compare the proposed demand with the existing demand from the site (net additional demand).
- For phased developments, set out the demand by development phase.

### 5. Connection Strategy (400-700 words)
- Describe the proposed connection to the public water supply network:
  - Point(s) of connection to the existing water main.
  - Size and route of the proposed on-site water distribution network.
  - On-site storage requirements (if any), such as break tanks, boosted systems, or roof tanks.
  - Metering arrangements: individual meters per unit (standard for new connections).
- Describe any reinforcement or upgrades to the existing network that may be required:
  - New water main extensions or upsizing of existing mains.
  - Booster pumping stations.
  - Service reservoir capacity.
  - State whether the water company has confirmed the need for reinforcement and any timescales or costs identified.
- Describe the process and timescales for connection:
  - Water company application process (Section 41/45 requisition under the Water Industry Act 1991).
  - Anticipated timescales for infrastructure delivery.
  - Any conditions or agreements required with the water company.
- For private water supplies: describe the abstraction licence, treatment system, storage, and distribution arrangements. Confirm compliance with the Private Water Supplies (England) Regulations 2016.

### 6. Sustainability Measures (300-500 words)
- Describe the water efficiency measures incorporated into the development design:
  - Low-flow fittings (taps, showers, WCs) to meet the applicable water efficiency standard.
  - Water-efficient appliances (dishwashers, washing machines) where specified.
  - Dual-flush WCs, aerated taps, flow-restricted showers.
- Describe any rainwater harvesting or greywater recycling systems proposed:
  - System type, capacity, and intended use of recycled water (e.g., WC flushing, irrigation).
  - Contribution to reducing potable water demand.
- Address landscaping water demand:
  - Use of drought-tolerant planting to reduce irrigation requirements.
  - Rainwater collection for landscape irrigation.
- Address leak detection and management:
  - Individual metering for awareness and leak identification.
  - Smart metering (where adopted by the water company).
- State the target water consumption rate (litres/person/day) and demonstrate compliance with the applicable standard.
- Reference climate change resilience: how the development contributes to reducing pressure on water resources in the context of increasing water stress.

### 7. Conclusion (200-400 words)
- Summarise the key findings of the Water Supply Assessment:
  - The development can be served by an adequate and reliable water supply.
  - The water company has confirmed (or is expected to confirm) capacity and connection arrangements.
  - Any reinforcement works required and their delivery timescales.
  - Water efficiency measures will reduce potable water demand.
- Confirm compliance with national and local planning policies on water supply and infrastructure.
- Confirm compliance with the applicable water efficiency standard.
- State any recommended planning conditions relating to water supply (e.g., condition requiring confirmation of water company agreement before commencement).
- Note any outstanding actions (e.g., formal pre-development enquiry, Section 41 requisition).

## Quality Standards

- Reference the NPPF and specific relevant paragraphs on infrastructure and water supply.
- Reference the Water Industry Act 1991 and relevant sections.
- Reference the relevant water company's WRMP and water resource zone.
- Include quantified water demand calculations presented in tabular format.
- State the applicable water efficiency standard (125 or 110 litres/person/day) and demonstrate compliance.
- Reference the water company pre-development enquiry response (or flag that this is required).
- Distinguish between public water supply connections and any private supply arrangements.
- Address both potable water supply and water efficiency/sustainability measures.
- Use correct water industry terminology: water resource zone, supply-demand balance, peak demand, per capita consumption, requisition, self-lay.
- Professional language appropriate for planning officers and water company consultees.`;

export const WSA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose of the assessment, site and development description, water company identification.',
    required: true,
    min_words: 150,
    max_words: 300,
    guidance:
      'State the purpose of the WSA. Identify the site and proposed development. State the water company. Confirm pre-development enquiry status. Outline document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local planning policy, Water Industry Act, WRMP, and water efficiency standards.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Reference NPPF paragraphs on infrastructure (20, 34, 86, 159, 180). Reference Water Industry Act 1991. Reference relevant WRMP and water resource zone. State water stress classification. Reference local plan policies and Building Regulations Approved Document G.',
  },
  {
    name: 'Existing Water Supply Infrastructure',
    description: 'Current water mains, pressure/flow data, and known constraints.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe existing water mains (location, size, material). Provide pressure and flow data from pre-development enquiry. Identify any constraints. Reference water company asset plans. Describe existing site connections if applicable.',
  },
  {
    name: 'Proposed Development Water Demand',
    description: 'Demand calculations by use type, peak demand, and net additional demand.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Calculate residential demand using per capita consumption. Calculate non-residential demand using benchmark rates. Present in tabular format. State peak hourly and daily demand. Calculate net additional demand over existing. Phase demand for phased developments.',
  },
  {
    name: 'Connection Strategy',
    description: 'Connection points, on-site distribution, reinforcement, and delivery timescales.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe connection points and on-site distribution. Address storage and boosting requirements. Describe any network reinforcement needed. Set out the connection application process (Section 41/45). State timescales for delivery. For private supplies, address abstraction and treatment.',
  },
  {
    name: 'Sustainability Measures',
    description: 'Water efficiency fittings, rainwater harvesting, greywater recycling, and consumption targets.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe water-efficient fittings and appliances. Address rainwater harvesting or greywater recycling. Address landscaping water demand. State target consumption rate and demonstrate compliance. Address climate resilience contribution.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of findings, policy compliance, and recommended conditions.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise that adequate water supply can be provided. Confirm water company engagement and capacity confirmation. State any reinforcement works and timescales. Confirm policy compliance. State recommended planning conditions.',
  },
];

export const WSA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Existing Water Supply Infrastructure',
    'Proposed Development Water Demand',
    'Connection Strategy',
    'Sustainability Measures',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const WSA_TEMPLATE = {
  assessment_type: 'Water Supply Assessment',
  short_name: 'WSA',
  version: 1,
  sections: WSA_SECTIONS,
  quality_criteria: WSA_QUALITY,
};
