import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Utilities Assessment (UA) -- confirms that adequate utility
 * infrastructure (electricity, gas, water, drainage, and
 * telecommunications) exists or can be provided to serve the
 * proposed development, and identifies any diversions or
 * reinforcements required.
 *
 * Required by many local planning authorities for major
 * developments to demonstrate that utility capacity is not a
 * constraint on development delivery.
 *
 * AI Difficulty: Easy | Typical length: 5-15 pages
 */

export const UA_PROMPT = `You are preparing a Utilities Assessment to accompany a planning application in England. The Utilities Assessment confirms that adequate utility infrastructure capacity exists (or can be provided) to serve the proposed development across all key utility services — electricity, gas, water, foul and surface water drainage, and telecommunications — and identifies any diversions, reinforcements, or new connections required.

## Document Purpose

The Utilities Assessment must:
- Identify all existing utility infrastructure on and around the development site.
- Assess the utility demand of the proposed development across all key services.
- Confirm that existing utility networks have adequate capacity or identify where reinforcement is needed.
- Describe the proposed connection strategy for each utility service.
- Identify any existing utility apparatus that requires diversion or protection during construction.
- Set out the phasing and programming of utility connections to align with the development programme.
- Provide confidence to the local planning authority that utility provision will not be a constraint on the development.

## Key Policy and Legislation References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 20**: Strategic policies should set out an overall strategy for the pattern, scale, and design quality of places, and make sufficient provision for infrastructure including transport, telecommunications, water supply, wastewater, energy, and community facilities.
- **Paragraph 28**: Non-strategic policies should be used by local planning authorities and communities to set out more detailed policies for specific areas, including infrastructure and community facilities.
- **Paragraph 34**: Plans should set out the contributions expected from development, including any infrastructure required.
- **Paragraph 86**: Planning policies and decisions should ensure that sufficient provision is made for infrastructure.
- **Paragraph 114**: Advanced, high-quality and reliable communications infrastructure is essential for economic growth and social wellbeing. Planning policies and decisions should support the expansion of electronic communications networks, including next-generation mobile technology and full fibre broadband connections.
- **Paragraph 115**: The number of radio and electronic communications masts, and the sites for such installations, should be kept to a minimum consistent with the needs of consumers, the efficient operation of the network, and providing reasonable capacity for future demand.

### Utilities Act 2000
- Established the Gas and Electricity Markets Authority (Ofgem) and reformed the regulation of gas and electricity markets.
- Relevant to the regulatory framework for electricity and gas connections.
- Section 9: General duties of gas transporters and electricity distributors regarding the development of their networks.

### Electricity Act 1989
- **Section 16**: Duty of a licensed distributor to make a connection to premises on request.
- **Section 16A**: Power to require security from connection applicants.
- **Section 19**: Power of licence holder to install electric lines.
- Establishes the legal framework for electricity connections and the duty of distributors to connect.

### Gas Act 1986
- **Section 10**: Duty of a public gas transporter to connect premises on request.
- Establishes the legal framework for gas connections.
- Connection requirements, timescales, and cost recovery.

### Water Industry Act 1991
- **Section 41**: Duty to provide a water main (requisition).
- **Section 45**: Duty to make connections with water mains.
- **Section 98**: Duty to provide public sewers (requisition).
- **Section 104**: Adoption of sewers by the sewerage undertaker.
- **Section 106**: Right to connect to public sewers.
- Establishes the legal framework for water and sewer connections.

### Electronic Communications Code (Schedule 3A of the Communications Act 2003)
- Provides rights for electronic communications operators to install and maintain apparatus on, under, or over land.
- Relevant to telecommunications infrastructure provision.
- Planning policies should support telecommunications infrastructure.

### Building Regulations
- **Approved Document H**: Drainage and waste disposal — requirements for foul and surface water drainage connections.
- **Approved Document P**: Electrical safety — requirements for electrical installations.
- **Approved Document J**: Combustion appliances and fuel storage systems — requirements for gas installations.
- While Building Regulations compliance is not a planning matter, the Utilities Assessment should demonstrate that the proposed utility arrangements are consistent with achieving Building Regulations compliance.

### Local Plan Policies
- Many local plans contain policies on infrastructure provision, requiring developments to demonstrate adequate utility capacity.
- Some local authorities have specific infrastructure delivery plans (IDPs) identifying utility constraints.
- Reference the specific local plan policies applicable to the development site.

### Other Key References
- National Grid asset protection guidance (for developments near gas transmission or electricity transmission infrastructure).
- Distribution Network Operator (DNO) connection guidance and budget estimates.
- Gas Distribution Network (GDN) connection guidance.
- Water company pre-development enquiry guidance.
- Sewerage company pre-development enquiry guidance.
- Openreach (or alternative provider) fibre broadband connection guidance.
- NJUG (National Joint Utilities Group) Guidelines on the Positioning and Colour Coding of Underground Utilities' Apparatus.
- New Roads and Street Works Act 1991 (coordination of street works for utility installations).

## Section-by-Section Guidance

### 1. Introduction (150-300 words)
- State the purpose of the Utilities Assessment and why it has been prepared.
- Identify the application site: address, site area, existing use, and any existing utility connections.
- Describe the proposed development: type, scale (number of units, floor area), phasing, and anticipated programme.
- State the utility services assessed: electricity, gas, water supply, foul drainage, surface water drainage, and telecommunications.
- Confirm that enquiries have been made to the relevant utility providers (or note that enquiries should be made before finalising the document).
- Outline the document structure.

### 2. Policy Framework (250-400 words)
- Set out the relevant national policy context, referencing the NPPF paragraphs listed above (20, 28, 34, 86, 114-115).
- Reference the Utilities Act 2000 and the regulatory framework for gas and electricity.
- Reference the Electricity Act 1989 and Gas Act 1986 (duty to connect).
- Reference the Water Industry Act 1991 (duty to connect and adopt).
- Reference the Electronic Communications Code and the Communications Act 2003.
- Reference Building Regulations Approved Documents H, P, and J as relevant context.
- Reference applicable local plan policies on infrastructure provision and utility capacity.
- Reference any Infrastructure Delivery Plan (IDP) or Supplementary Planning Document on infrastructure.

### 3. Existing Utilities Infrastructure (400-700 words)
- Describe the existing utility infrastructure on and adjacent to the site, based on utility searches and provider records:
  - **Electricity**: Location and capacity of existing cables (low voltage, high voltage, extra high voltage), substations (distribution or primary), overhead lines. Identify the Distribution Network Operator (DNO).
  - **Gas**: Location and pressure of existing gas mains (low pressure, medium pressure, intermediate pressure). Identify the Gas Distribution Network (GDN). Note any gas transmission (National Grid) assets in the vicinity.
  - **Water**: Location, size, and material of existing water mains. Pressure and flow data. Identify the water company.
  - **Foul drainage**: Location, size, and depth of existing foul sewers. Combined or separate system. Identify the sewerage undertaker.
  - **Surface water drainage**: Location, size, and depth of existing surface water sewers or drainage features (ditches, watercourses). Identify any adopted highway drains.
  - **Telecommunications**: Location of existing telecom ducts, cables (copper, fibre), and cabinets. Identify providers (Openreach, Virgin Media, CityFibre, or alternative networks).
  - **Other**: District heating networks, cable TV, any other utilities identified.
- Present a summary table of existing utilities and reference the utility search drawings/plans.
- Identify any existing utility apparatus that crosses the site and may require diversion or protection.
- Identify any known constraints (e.g., electricity substations at capacity, low water pressure, sewer capacity constraints).

### 4. Proposed Development Utility Demand (400-700 words)
- Estimate the utility demand for the proposed development:
  - **Electricity**: Total maximum demand (kVA) based on the number and type of units, commercial floor area, communal facilities, electric vehicle charging, and any all-electric heating strategy. Provide demand calculation or estimate from the project's M&E engineer. Note whether the development is all-electric (no gas) in line with Future Homes Standard trajectory.
  - **Gas**: Total demand (kWh or kW) if gas supply is proposed. Note whether gas is proposed for heating, hot water, cooking, or commercial use. Note that developments designed to Future Homes Standard / Future Buildings Standard may not require gas connections.
  - **Water**: Total daily demand (litres/day) and peak demand. Cross-reference the Water Supply Assessment if a separate WSA is prepared.
  - **Foul drainage**: Estimated foul water flow (litres/second) based on occupancy and Building Regulations Approved Document H methodology. Peak flow calculation.
  - **Surface water drainage**: Estimated surface water run-off rates (litres/second) for the 1 in 1, 1 in 30, and 1 in 100 year events. Cross-reference the Drainage Strategy or Flood Risk Assessment if separate documents are prepared.
  - **Telecommunications**: Broadband and mobile connectivity requirements. Full fibre provision to each unit (in accordance with Building Regulations Part R for new dwellings).
- Present a demand summary table for each utility service.
- Compare proposed demand with existing site demand (net additional demand).
- For phased developments, set out the demand by phase.

### 5. Electricity Supply (300-500 words)
- Describe the proposed electricity connection strategy:
  - Point of connection to the existing network (LV or HV).
  - New substation provision: if the development requires a new substation, describe the proposed location, access, and ownership (DNO-owned or private).
  - On-site distribution: LV network layout, metering arrangements (individual meters per unit).
  - Electric vehicle charging infrastructure: capacity allowance for EV charging (complying with Building Regulations Approved Document S or local plan requirements).
  - Renewable energy generation: if on-site generation is proposed (solar PV, etc.), describe the connection to the distribution network and any export arrangements.
- Describe any reinforcement required to the existing electricity network:
  - Reinforcement works identified by the DNO.
  - Estimated cost and timescale for reinforcement.
  - Any constraints or dependencies (e.g., reinforcement required before a certain phase can be connected).
- Confirm engagement with the DNO: state whether a budget estimate or connection offer has been obtained, and summarise the key terms.

### 6. Gas Supply (200-400 words)
- Describe the proposed gas connection strategy (if gas supply is proposed):
  - Point of connection to the existing gas network.
  - On-site gas distribution: service pipes to individual units or commercial spaces.
  - Gas pressure requirements and any on-site pressure reduction.
- If gas supply is NOT proposed (all-electric development):
  - Confirm that the development is designed as all-electric and does not require a gas connection.
  - State the rationale (Future Homes Standard compliance, net zero carbon strategy, energy strategy requirements).
  - This section may be brief, confirming no gas connection is required.
- If gas supply is proposed, describe any reinforcement required:
  - Reinforcement works identified by the GDN.
  - Estimated cost and timescale.
- Confirm engagement with the GDN (if applicable): state whether a connection estimate has been obtained.
- Address any proximity to National Grid gas transmission assets (high-pressure pipelines) and any asset protection requirements.

### 7. Water and Drainage (300-500 words)
- **Water supply**: Summarise the water supply connection strategy. Cross-reference the Water Supply Assessment if a separate WSA is prepared. If no separate WSA exists, describe the proposed connection, any reinforcement, and water company engagement.
- **Foul drainage**: Describe the proposed foul drainage strategy:
  - Connection to the public foul sewer (or combined sewer).
  - Route of the proposed foul drainage network on site.
  - Any on-site pumping stations or rising mains required.
  - Any adoption of on-site sewers by the sewerage undertaker under Section 104 of the Water Industry Act 1991.
  - Any reinforcement or capacity improvements required to the public sewer network.
  - Confirm engagement with the sewerage undertaker.
- **Surface water drainage**: Summarise the surface water drainage strategy. Cross-reference the Drainage Strategy or FRA if separate documents are prepared. If no separate drainage strategy exists, describe the proposed approach (SuDS, attenuation, discharge to watercourse or sewer).
- Confirm that water and drainage connections can be delivered within the development programme.

### 8. Telecommunications (200-400 words)
- Describe the proposed telecommunications infrastructure:
  - Full fibre (FTTP — Fibre to the Premises) provision to each unit, in accordance with Building Regulations Approved Document R (requirement R1: new dwellings must have gigabit-capable infrastructure).
  - Provider: Openreach, CityFibre, Virgin Media, or alternative network provider.
  - Duct and chamber infrastructure on site to facilitate fibre connection.
  - Mobile connectivity: any on-site mobile signal enhancement (distributed antenna system, small cells) where required.
- Confirm engagement with the telecommunications provider(s).
- State whether the site is within an area served by full fibre broadband or identify any connectivity constraints.
- For large developments: describe any coordination with providers for early infrastructure installation.
- Reference the NPPF requirement to support high-quality communications infrastructure (paragraphs 114-115).

### 9. Diversions and Reinforcements (300-500 words)
- Identify all existing utility apparatus that requires diversion as a result of the proposed development:
  - For each diversion: identify the apparatus (type, size, owner), the reason for diversion (clashes with proposed buildings, roads, or landscaping), and the proposed diversion route.
  - Note estimated costs and programme implications for each diversion.
  - State whether formal diversion quotations have been obtained from the utility company.
- Identify all reinforcement works required across all utility services:
  - Electricity network reinforcement.
  - Gas network reinforcement.
  - Water main reinforcement or extension.
  - Sewer reinforcement or upsizing.
  - Present a summary table of all diversions and reinforcements with estimated timescales.
- Describe the coordination strategy for utility works:
  - Sequence of diversion and connection works relative to the construction programme.
  - Coordination with highway works (Section 278/38 agreements) and utility installations under the New Roads and Street Works Act 1991.
  - Any advance works required before construction commences.
  - Lead times for utility connections (some connections, particularly electricity substation provision, have long lead times — 12 to 24 months).
- Confirm that the development programme accounts for utility lead times.

### 10. Conclusion (200-400 words)
- Summarise the key findings of the Utilities Assessment:
  - Adequate utility capacity exists or can be provided for each service.
  - Connection strategies have been identified for electricity, gas (if applicable), water, drainage, and telecommunications.
  - Any reinforcement or diversion works required and their estimated timescales and costs.
  - Engagement with utility providers has been initiated (or should be initiated).
- Confirm that utility provision will not be a constraint on the development.
- Confirm compliance with national and local planning policies on infrastructure provision.
- State any recommended planning conditions relating to utilities (e.g., condition requiring confirmation of utility capacity and connection agreements before commencement of the relevant phase).
- Note any outstanding actions (e.g., formal connection applications, diversion quotations, reinforcement works agreements).
- Note that detailed utility design and installation will be progressed during the technical design and construction phases.

## Quality Standards

- Reference the NPPF and specific paragraphs on infrastructure provision (20, 28, 34, 86, 114-115).
- Reference the key utility legislation (Utilities Act 2000, Electricity Act 1989, Gas Act 1986, Water Industry Act 1991, Communications Act 2003).
- Cover all key utility services: electricity, gas, water, foul drainage, surface water drainage, and telecommunications.
- Include demand calculations or estimates for each utility service, presented in tabular format.
- Describe the connection strategy for each utility service with sufficient technical detail.
- Identify all diversions and reinforcements required, with estimated timescales.
- Demonstrate engagement with utility providers (or flag where enquiries are outstanding).
- Cross-reference other assessments where relevant (WSA, drainage strategy, FRA, energy statement).
- Address phasing and programming of utility connections.
- Address the Future Homes Standard / all-electric trajectory where relevant to gas supply.
- Use correct utility infrastructure terminology: DNO, GDN, LV/HV/EHV, substation, requisition, Section 104 adoption, FTTP.
- Professional language appropriate for planning officers and utility company consultees.`;

export const UA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site and development description, utility services assessed, and provider engagement.',
    required: true,
    min_words: 150,
    max_words: 300,
    guidance:
      'State the purpose of the UA. Identify the site and proposed development. List utility services assessed. Confirm provider enquiry status. Outline document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF infrastructure policies, utility legislation, and local plan requirements.',
    required: true,
    min_words: 250,
    max_words: 400,
    guidance:
      'Reference NPPF paragraphs 20, 28, 34, 86, 114-115. Reference Utilities Act 2000, Electricity Act 1989, Gas Act 1986, Water Industry Act 1991, Communications Act 2003. Reference Building Regulations. Reference local plan policies and IDP.',
  },
  {
    name: 'Existing Utilities Infrastructure',
    description: 'Existing electricity, gas, water, drainage, and telecoms infrastructure with providers and constraints.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe existing infrastructure for each utility (location, capacity, provider). Present summary table. Reference utility search drawings. Identify apparatus crossing the site. Identify known constraints.',
  },
  {
    name: 'Proposed Development Utility Demand',
    description: 'Demand estimates for all utility services with calculation methodology.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Estimate demand for electricity (kVA), gas (kW), water (litres/day), foul drainage (l/s), surface water (l/s), and telecoms. Present demand summary table. Calculate net additional demand. Phase demand for phased developments.',
  },
  {
    name: 'Electricity Supply',
    description: 'Connection point, substation, on-site distribution, EV charging, renewables, and reinforcement.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe connection strategy and point of connection. Address new substation if required. Describe on-site distribution and metering. Address EV charging and renewables. Describe any reinforcement. State DNO engagement status.',
  },
  {
    name: 'Gas Supply',
    description: 'Gas connection strategy or confirmation of all-electric approach.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Describe gas connection if proposed. If all-electric, confirm and state rationale. Address any reinforcement. Confirm GDN engagement. Address proximity to National Grid assets.',
  },
  {
    name: 'Water and Drainage',
    description: 'Water supply, foul drainage connection, surface water drainage, and adoption arrangements.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise water supply (cross-reference WSA). Describe foul drainage connection and adoption. Summarise surface water strategy (cross-reference drainage strategy). Address pumping stations and reinforcement. Confirm provider engagement.',
  },
  {
    name: 'Telecommunications',
    description: 'Full fibre provision, mobile connectivity, and provider engagement.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Describe FTTP provision per AD R. State provider. Describe on-site duct infrastructure. Address mobile connectivity. Confirm provider engagement. Reference NPPF paragraphs 114-115.',
  },
  {
    name: 'Diversions and Reinforcements',
    description: 'Utility diversions, reinforcement works, costs, programme, and coordination.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'List all diversions with apparatus details and proposed routes. List all reinforcements across utilities. Present summary table with timescales. Describe coordination strategy and sequencing. Address lead times and advance works. Confirm programme accounts for utility timescales.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of capacity, connections, reinforcements, policy compliance, and recommended conditions.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Confirm adequate capacity for all services. Summarise connection strategies. State reinforcement and diversion requirements. Confirm policy compliance. State recommended conditions. Note outstanding actions.',
  },
];

export const UA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Existing Utilities Infrastructure',
    'Proposed Development Utility Demand',
    'Electricity Supply',
    'Gas Supply',
    'Water and Drainage',
    'Telecommunications',
    'Diversions and Reinforcements',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const UA_TEMPLATE = {
  assessment_type: 'Utilities Assessment',
  short_name: 'UA',
  version: 1,
  sections: UA_SECTIONS,
  quality_criteria: UA_QUALITY,
};
