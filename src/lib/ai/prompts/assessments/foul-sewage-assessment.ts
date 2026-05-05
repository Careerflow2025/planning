import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Foul Sewage Assessment (FSA) -- required where a planning application
 * involves the erection of new buildings or a material change of use that
 * would increase foul water discharges. The assessment demonstrates that
 * adequate foul drainage capacity exists or can be provided to serve the
 * proposed development, either via connection to the public sewer network
 * or through an appropriate private system.
 *
 * This document addresses the requirements of NPPF paragraph 185,
 * Building Regulations Approved Document H, the Water Industry Act 1991,
 * and the Design and Construction Guidance (Sewers for Adoption successor).
 */

export const FSA_PROMPT = `You are preparing a Foul Sewage Assessment (FSA) to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A Foul Sewage Assessment is required to demonstrate that:
1. The proposed development can be served by adequate foul drainage infrastructure.
2. The proposed foul water flows can be accommodated by the existing public sewer network, or that suitable alternative arrangements (such as new infrastructure or private treatment) are proposed.
3. The development will not result in sewer flooding or pollution to the environment.
4. The proposed foul drainage arrangements comply with national planning policy, Building Regulations, and the requirements of the relevant sewerage undertaker.

The assessment must provide foul water flow calculations, describe the proposed connection strategy, and demonstrate that the sewerage undertaker has been consulted (or that a pre-development enquiry has been made or is recommended).

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 185**: Planning policies and decisions should contribute to and enhance the natural and local environment by, amongst other things, preventing new and existing development from contributing to, being put at unacceptable risk from, or being adversely affected by, unacceptable levels of water pollution. Development should, wherever possible, help to improve local environmental conditions such as water quality.
- **Paragraph 186**: Planning policies and decisions should ensure that new development is appropriate for its location taking into account the likely effects (including cumulative effects) of pollution on health, living conditions and the natural environment, as well as the potential sensitivity of the site or the wider area to impacts that could arise from the development.
- **Paragraph 168**: Major developments should incorporate sustainable drainage systems unless there is clear evidence that this would be inappropriate.
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment, including by preventing new development from contributing to unacceptable levels of water pollution.

### Building Regulations Approved Document H (2015 edition with amendments)
- **Section H1**: Foul water drainage -- adequate provision must be made for the drainage of foul water from buildings.
- **Hierarchy of foul drainage**: (1) Connection to a public sewer (where reasonably available), (2) package sewage treatment plant discharging to a watercourse, (3) septic tank with drainage field.
- **Capacity requirements**: Foul drains must be designed to carry the expected flow without surcharging.
- **Minimum pipe sizes and gradients**: 100mm diameter for single dwellings, 150mm for shared drains, with minimum self-cleansing gradients.

### Design and Construction Guidance (Sewers for Adoption Successor)
- Published by Water UK, this guidance sets out the design and construction standards for sewers and lateral drains that are to be adopted by sewerage undertakers.
- Design flow calculations: dry weather flow (DWF) and peak flow calculations.
- Minimum pipe sizes: 150mm for adopted sewers.
- Hydraulic design: Manning's equation or Colebrook-White equation.
- Surcharge and flooding return periods.
- Pumping station design and adoption requirements.

### Water Industry Act 1991 (as amended by the Water Act 2014)
- **Section 106**: Right to connect to the public sewer -- a developer has a right to connect to the public sewer subject to compliance with conditions imposed by the sewerage undertaker.
- **Section 104**: Adoption of sewers -- sewerage undertakers can enter into agreements for the adoption of new sewers constructed to adoptable standards.
- **Section 98**: Requisition of public sewer -- where no public sewer is available within a reasonable distance, the developer may requisition the sewerage undertaker to provide one.

### Sewerage Sector Guidance (SSG)
- Provides guidance on pre-development enquiries, sewer capacity assessments, and developer services applications.
- Explains the process for Section 104 adoption agreements and Section 106 connection applications.

### Environment Agency and Water Quality
- Environmental Permitting (England and Wales) Regulations 2016 -- for private discharges to controlled waters.
- General binding rules for small sewage discharges (under 2 cubic metres per day to ground, under 5 cubic metres per day to surface water).
- Permits required for larger private discharges.

### Local Plan Policies
- Reference the relevant local plan drainage and water quality policies for the specific local planning authority area.
- Many local plans include specific policies requiring demonstration of adequate foul drainage capacity.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Foul Sewage Assessment and the policy basis for its preparation.
- Identify the application site by full postal address, National Grid reference, and local planning authority area.
- Summarise the proposed development: number and type of dwellings or gross internal area of non-residential floorspace.
- State the current foul drainage arrangements on the site (if any).
- Note any consultations undertaken with the sewerage undertaker (name the relevant water company).
- Confirm the document structure and note whether a pre-development enquiry has been submitted or is pending.
- If the assessment is AI-generated for professional review, include a note to that effect.

### 2. Policy Framework (300-600 words)
- Set out the national planning policy context for foul drainage, referencing NPPF paragraphs 185, 186, 168, and 174.
- Describe the Building Regulations Approved Document H hierarchy of foul drainage: public sewer connection preferred, private treatment systems only where no public sewer is reasonably available.
- Reference the Water Industry Act 1991 Sections 104, 106, and 98 as appropriate.
- Reference the Design and Construction Guidance (Sewers for Adoption successor) design standards.
- Set out relevant local plan policies relating to foul drainage, water quality, and infrastructure capacity.
- Explain how the assessment demonstrates compliance with these policies.

### 3. Existing Foul Drainage Infrastructure (400-800 words)
- Describe the existing foul drainage network in the vicinity of the site.
- Identify the nearest public foul sewer and its location, diameter, invert level (where available), and direction of flow.
- Identify the nearest public combined sewer (if applicable) and note the preference for separate systems.
- Identify the relevant wastewater treatment works (WwTW) and its general capacity status (if publicly available information exists).
- Note any known capacity constraints, sewer flooding incidents, or pollution events in the area (reference sewerage undertaker data, EA pollution incident records).
- Describe any existing private drainage on the site: septic tanks, cesspools, package treatment plants.
- Note any watercourses, ditches, or drains that receive or could receive foul drainage discharges.
- Include reference to sewerage undertaker asset maps and records (or note that these should be obtained).
- State the existing foul water generation from the site (if any) in litres per day.

### 4. Proposed Development Foul Water Flows (400-800 words)
- Describe the proposed development in sufficient detail to calculate foul water flows: number and type of dwellings (houses, flats, bedrooms), non-residential uses and their nature.
- Calculate the predicted foul water flow using appropriate methods:
  - **Residential**: Use an occupancy rate (typically 2.4 persons per dwelling or as specified by the sewerage undertaker), a per capita consumption rate (typically 150 litres per person per day, or current Ofwat/water company planning figure), and apply infiltration and peaking factors.
  - **Non-residential**: Use appropriate flow rates for the specific use (BS EN 12056-2 or sewerage undertaker guidance).
- Present the calculation clearly:
  - Number of dwellings x occupancy x per capita flow = dry weather flow (DWF) in litres per day.
  - Apply a peaking factor (typically 6x for small developments, 4x for larger developments or as per Design and Construction Guidance) to determine peak foul flow in litres per second.
  - State infiltration allowance if applicable.
- Compare the proposed flow to the existing flow (if any) to determine the net increase.
- Present flows in both litres per day and litres per second for clarity.
- Where non-residential uses are proposed, calculate trade effluent flows separately and note any consent requirements.

### 5. Connection Strategy (300-600 words)
- State the preferred point of connection to the public sewer network.
- Justify the connection point: proximity, sewer capacity, direction of flow, ground levels, and practical constructability.
- If connecting to a public foul sewer: confirm the sewer type (foul or combined), diameter, and that a Section 106 connection application will be made to the sewerage undertaker.
- If connecting to a combined sewer: explain why no separate foul sewer is available and note that the sewerage undertaker may require surface water to be separated.
- Describe the on-site foul drainage layout: pipe sizes (minimum 100mm for single building connections, 150mm for shared drains or adopted sewers), gradients (minimum self-cleansing gradients per Building Regulations Part H), manholes and inspection chambers.
- If the site is remote from the public sewer: evaluate whether a Section 98 sewer requisition, a pumped connection, or a private treatment system is appropriate.
- If a private system is proposed: justify why a public sewer connection is not reasonably available, describe the proposed system (package treatment plant or septic tank with drainage field), and note the need for an environmental permit or compliance with general binding rules.
- Describe the proposed adoption arrangements: Section 104 agreement for sewers to be adopted, or private management.

### 6. Capacity Assessment (300-600 words)
- Summarise the outcome of any pre-development enquiry submitted to the sewerage undertaker.
- If a pre-development enquiry response has been received: state the sewerage undertaker's position on capacity, any required upgrades, and any conditions.
- If a pre-development enquiry has not yet been submitted: recommend that one is submitted before determination of the planning application and set out the expected scope.
- Assess whether the existing public sewer has capacity for the additional foul flows: compare the calculated peak flow to the typical capacity of the receiving sewer (based on pipe diameter and gradient using Manning's or Colebrook-White equation, where data is available).
- If capacity is constrained: describe the proposed mitigation, which may include on-site attenuation of foul flows (in exceptional cases), phased connection, or off-site sewer reinforcement.
- Note any infrastructure upgrades that the sewerage undertaker may need to deliver under its statutory obligations (e.g., asset management period investment).
- Where the development is phased, describe how foul drainage capacity will be provided for each phase.

### 7. Pumping Station Requirements (200-500 words)
- State whether a foul water pumping station is required to serve the development.
- If not required (gravity drainage is achievable): state this and explain why.
- If required: describe the proposed pumping station location, design capacity (peak flow plus an appropriate factor of safety), pump type (submersible, wet well), rising main route, diameter, and discharge point.
- Address emergency storage provision in the event of pump failure (minimum 24 hours storage is typically required for adopted stations).
- Describe alarm and telemetry systems for pump failure detection.
- Set out the adoption arrangements: whether the pumping station is to be offered for adoption by the sewerage undertaker under a Section 104 agreement.
- If adoption is proposed: confirm compliance with Design and Construction Guidance requirements for adoptable pumping stations (access, easements, standby power considerations).
- If the pumping station is to remain private: set out the long-term management and maintenance arrangements, including the responsible management entity and funding mechanism.
- Address any amenity concerns: noise from pumps, odour management, visual impact of the station compound, and appropriate screening or landscaping.

### 8. Conclusion (200-400 words)
- Summarise the proposed development and the predicted foul water flows.
- Confirm the proposed foul drainage connection strategy and the point of connection.
- Summarise the capacity assessment findings and confirm that adequate capacity exists or can be provided.
- State whether a pumping station is required and, if so, confirm the adoption arrangements.
- Confirm compliance with NPPF paragraph 185, Building Regulations Approved Document H, the Water Industry Act 1991, and relevant local plan policies.
- List any recommended planning conditions (e.g., details of foul drainage to be submitted and approved prior to commencement, no occupation until connection to the public sewer is confirmed).
- List any further actions required: pre-development enquiry submission, Section 106 connection application, Section 104 adoption agreement, environmental permit application.
- State that the proposed development will not result in sewer flooding or pollution to the water environment.

## Quality Standards

- Reference specific NPPF paragraphs (185, 186, 168, 174) by number.
- Reference Building Regulations Approved Document H and the foul drainage hierarchy.
- Reference the Water Industry Act 1991 Sections 104, 106, and 98 correctly.
- Include specific foul water flow calculations with stated assumptions (occupancy, per capita consumption, peaking factors).
- Name the relevant sewerage undertaker (water company).
- Reference the Design and Construction Guidance (successor to Sewers for Adoption) for adoptable standards.
- Use correct technical terminology: DWF (dry weather flow), peaking factor, infiltration allowance, rising main, pumping station, Section 104, Section 106, Section 98.
- Where data has not been provided (e.g., sewer records, pre-development enquiry response), clearly flag this as "[DATA REQUIRED FROM SEWERAGE UNDERTAKER]" or "[PRE-DEVELOPMENT ENQUIRY RECOMMENDED]".
- Distinguish between foul sewers, combined sewers, and surface water sewers.
- Where a private treatment system is proposed, reference the Environmental Permitting Regulations 2016 or general binding rules.`;

export const FSA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, development summary, and document scope.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the FSA purpose and the policy basis for its preparation. Identify the site by address and grid reference. Summarise the proposed development. Note any consultations with the sewerage undertaker. Confirm the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local planning policy context for foul drainage.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF paragraphs 185, 186, 168, and 174. Describe the Building Regulations Part H foul drainage hierarchy. Reference the Water Industry Act 1991 Sections 104, 106, and 98. Set out relevant local plan policies. Reference the Design and Construction Guidance.',
  },
  {
    name: 'Existing Foul Drainage Infrastructure',
    description: 'Existing sewer network, capacity status, and current site drainage.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe existing foul drainage in the vicinity. Identify the nearest public foul and combined sewers with diameter, invert levels, and flow direction. Identify the relevant wastewater treatment works. Note any known capacity constraints or flooding incidents. Describe any existing private drainage on site. State existing foul water generation.',
  },
  {
    name: 'Proposed Development Foul Water Flows',
    description: 'Foul water flow calculations for the proposed development.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe the development in sufficient detail for flow calculation. Calculate residential flows using occupancy rate, per capita consumption, and peaking factors. Calculate non-residential flows where applicable. Present dry weather flow and peak foul flow. Compare proposed flows to existing flows to determine net increase.',
  },
  {
    name: 'Connection Strategy',
    description: 'Proposed point of connection and on-site foul drainage layout.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the preferred connection point and justify the selection. Confirm the sewer type and describe the Section 106 connection application. Describe the on-site foul drainage layout including pipe sizes and gradients. If a private system is proposed, justify and describe it. Set out adoption arrangements.',
  },
  {
    name: 'Capacity Assessment',
    description: 'Assessment of existing sewer capacity and sewerage undertaker consultation.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise any pre-development enquiry outcome. Assess whether the receiving sewer has capacity for additional flows. If capacity is constrained, describe mitigation. Note any infrastructure upgrades required. Describe phased provision if applicable.',
  },
  {
    name: 'Pumping Station Requirements',
    description: 'Whether a pumping station is needed and, if so, its design and adoption.',
    required: false,
    min_words: 200,
    max_words: 500,
    guidance:
      'State whether a pumping station is required. If so, describe its location, capacity, emergency storage, alarm systems, and adoption arrangements. Address amenity considerations. If not required, confirm gravity drainage is achievable.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of findings, compliance confirmation, and recommended conditions.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise predicted foul water flows and connection strategy. Confirm adequate capacity exists or can be provided. Confirm compliance with NPPF paragraph 185, Building Regulations Part H, and the Water Industry Act 1991. List recommended conditions and further actions.',
  },
];

export const FSA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Existing Foul Drainage Infrastructure',
    'Proposed Development Foul Water Flows',
    'Connection Strategy',
    'Capacity Assessment',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const FSA_TEMPLATE = {
  assessment_type: 'Foul Sewage Assessment',
  short_name: 'FSA',
  version: 1,
  sections: FSA_SECTIONS,
  quality_criteria: FSA_QUALITY,
};
