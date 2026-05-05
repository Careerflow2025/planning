import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Sequential Test for Retail / Town Centre Uses -- required for all planning
 * applications for main town centre uses that are not in an existing centre
 * and are not in accordance with an up-to-date development plan.
 *
 * The Sequential Test must demonstrate that there are no suitable, available,
 * and viable sites in sequentially preferable locations (town centre first,
 * then edge-of-centre, before out-of-centre sites are considered).
 */

export const STR_PROMPT = `You are preparing a Sequential Test Assessment to accompany a planning application for a main town centre use (retail, leisure, office, or other town centre use) that is proposed in an out-of-centre or edge-of-centre location in England. The Sequential Test demonstrates that there are no suitable, available, and viable alternative sites in sequentially preferable locations.

## Document Purpose

The Sequential Test is required by NPPF Paragraph 87 for planning applications for main town centre uses which are neither in an existing centre nor in accordance with an up-to-date plan. The Sequential Test must:
- Define the site requirements of the proposed development, demonstrating appropriate flexibility.
- Define the sequential search area (typically the catchment area of the proposed development).
- Identify and assess all potentially sequentially preferable sites (town centre and edge-of-centre sites).
- Demonstrate that no suitable and available alternative sites exist in sequentially preferable locations, having applied flexibility on format and scale.
- Address the potential for disaggregation of the proposal across multiple smaller town centre sites.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 87**: Local planning authorities should apply a sequential test to planning applications for main town centre uses which are neither in an existing centre nor in accordance with an up-to-date plan. Main town centre uses should be located in town centres, then in edge of centre locations; and only if suitable sites are not available (or expected to become available within a reasonable period) should out of centre sites be considered.
- **Paragraph 88**: When considering edge of centre and out of centre proposals, preference should be given to accessible sites which are well connected to the town centre. Applicants and local planning authorities should demonstrate flexibility on issues such as format and scale, so that opportunities to utilise suitable town centre or edge of centre sites are fully explored.
- **Paragraph 89**: This sequential approach should not be applied to applications for small scale rural offices or other small scale rural development.

### Planning Practice Guidance: Town Centres and Retail
- The sequential test should be proportionate and appropriate to the nature and scale of the proposal.
- The area for the sequential assessment should be defined having regard to the nature of the proposal and the catchment area.
- The sequential test should consider whether there are sites in existing centres that are suitable, available, and viable.
- **Suitability**: Whether the site is suitable for the proposed use, having regard to the requirements of the proposed development. Applicants should demonstrate flexibility and not rule out sites that could accommodate a modified proposal.
- **Availability**: Whether the site is available now or within a reasonable period. Sites with existing uses that are not expected to become available should be excluded.
- **Viability**: Whether the site is a viable option for the proposed development.
- Flexibility: The sequential test requires applicants to demonstrate flexibility on format and scale. This does not mean that the development must be changed to an extent that it would no longer achieve its commercial objectives, but rigid application of a business model should not be used to reject potentially suitable town centre sites.

### Key Case Law
- **Tesco Stores Ltd v Dundee City Council [2012] UKSC 13**: The Supreme Court held that the sequential test requires assessment of whether the alternative site is suitable for the proposed development, not whether the proposed development could be altered to fit the site. However, the applicant must demonstrate flexibility.
- **Mansfield District Council v Secretary of State [2014] EWHC 1575**: Flexibility must be genuine and demonstrated.
- **Aldergate Properties Ltd v Mansfield District Council [2016] EWHC 1670**: The sequential test requires the applicant to consider whether the type of development proposed could be accommodated on sequentially preferable sites, with appropriate flexibility on format and scale.

### Other Key References
- Town and Country Planning (Use Classes) Order 1987 (as amended): Class E (Commercial, Business and Service).
- Local plan retail hierarchy and defined centre boundaries.
- LPA's retail evidence base and site availability assessments.
- GOAD plans showing existing town centre uses and vacancies.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Sequential Test and the NPPF Paragraph 87 requirement.
- Identify the site and the proposed development (use, floor area, format).
- State the location of the site relative to defined centres (out-of-centre or edge-of-centre, and distance to the nearest defined centre boundary).
- Confirm that the Sequential Test is required (the development is a main town centre use, not in an existing centre, and not in accordance with an up-to-date plan).
- If the LPA has confirmed any specific requirements for the Sequential Test in pre-application advice, reference these.
- Outline the document structure.

### 2. Policy Framework (300-600 words)
- Set out NPPF Paragraphs 87-89.
- Set out the PPG guidance on the sequential test, suitability, availability, viability, and flexibility.
- Reference relevant case law (Tesco v Dundee, Mansfield, Aldergate) and summarise the key principles.
- Set out relevant local plan sequential test policies.
- Identify the retail hierarchy and defined centre boundaries from the local plan.
- State the primary shopping areas and any defined centre boundaries relevant to the search.

### 3. Site Requirements (300-600 words)
- Define the operational requirements of the proposed development, demonstrating that these are genuine requirements rather than inflexible specifications:
  - **Floor area**: State the minimum net sales area / gross floor area required and explain why (operational requirements, stock range, customer experience, viability threshold).
  - **Format**: Describe the format required (single-storey, ground-floor, open-plan, servicing requirements, customer-facing, etc.) and explain why.
  - **Accessibility**: Parking requirements, servicing access, public transport accessibility, pedestrian footfall.
  - **Visibility and frontage**: Any requirement for prominent positioning or display frontage.
  - **Site configuration**: Shape, dimensions, level access, servicing arrangements.
  - **Adjacencies**: Any requirement to be co-located with complementary uses.
- State the flexibility that has been applied:
  - A reduced floor area that the operator could accept (typically 20-30% smaller, depending on the type of use).
  - Flexibility on format (e.g., multi-level operation, reduced car parking).
  - Flexibility on site configuration.
- Explain the commercial rationale for the requirements without being inflexible.

### 4. Search Area (200-400 words)
- Define the sequential search area and justify its extent.
- The search area should typically reflect the catchment area of the proposed development.
- Identify the defined centres within the search area (in order of sequential preference):
  - Town centres (primary shopping areas).
  - Edge-of-centre locations (within 300m of the primary shopping area boundary for retail, or 300m of the town centre boundary for other main town centre uses).
  - Out-of-centre locations with good public transport accessibility (as a lesser preference).
- List the centres to be assessed with their position in the retail hierarchy.
- Present a plan showing the search area and the locations of defined centres.

### 5. Alternative Sites Assessment (500-1500 words)
For each potentially suitable alternative site identified within the defined centres and edge-of-centre locations, provide a systematic assessment:

For each site:
- **Site identification**: Address, centre location, current use, floor area.
- **Suitability**:
  - Does the site meet the operational requirements (with flexibility applied)?
  - Is the floor area sufficient (applying the flexible minimum)?
  - Is the format suitable (ground floor, servicing, configuration)?
  - Are there any physical constraints (listed buildings, topography, access)?
  - Would the site deliver the same commercial function?
- **Availability**:
  - Is the site currently available (vacant, for sale/let)?
  - If currently occupied, is the existing use expected to cease within a reasonable period?
  - Are there any ownership constraints or multiple ownerships that would prevent assembly?
  - Has the site been marketed? For how long? At what terms?
  - Is planning permission likely to be achievable?
- **Viability**:
  - Would development of the alternative site be economically viable?
  - Are there any exceptional costs (demolition, remediation, infrastructure)?
  - Is the rental level achievable on the alternative site?
- **Conclusion on each site**: State whether the site is suitable, available, and viable. If any criterion is not met, the site is not sequentially preferable.

Where no potentially suitable sites are identified within a centre, state this and explain the basis for the conclusion (e.g., no vacant units of sufficient size, no development sites, centre is fully occupied).

### 6. Flexibility and Disaggregation (200-500 words)
- Confirm the flexibility that has been applied to format, scale, and other requirements.
- Address whether the proposal could reasonably be disaggregated (split) across multiple smaller town centre sites.
- If disaggregation is not appropriate, explain why:
  - Operational requirements of the use.
  - Customer experience and commercial viability.
  - The nature of the goods or service provided.
  - Whether splitting the development would undermine its commercial purpose.
- Note that the PPG does not require applicants to disaggregate their proposal where this would not meet the objectives of the development.
- Confirm that the flexibility demonstrated is genuine and proportionate, consistent with the principles in Tesco v Dundee and subsequent case law.

### 7. Sequential Test Conclusion (300-500 words)
- Summarise the assessment of each alternative site.
- Confirm that no suitable, available, and viable sites exist in sequentially preferable locations.
- Confirm that the applicant has demonstrated genuine flexibility on format and scale as required by NPPF Paragraph 88.
- State that disaggregation is not appropriate (if applicable) and explain why.
- Conclude that the Sequential Test is passed in accordance with NPPF Paragraphs 87-88.
- Note any positive factors: the site's accessibility, connectivity to town centres, or public transport links that support the out-of-centre location (NPPF Paragraph 88: preference to accessible sites well connected to the town centre).

## Quality Standards

- Reference NPPF Paragraphs 87-89 by specific number.
- Reference the PPG guidance on suitability, availability, and viability.
- Reference relevant case law (Tesco v Dundee as minimum).
- Assess each alternative site against all three criteria: suitability, availability, viability.
- Demonstrate genuine flexibility: state the flexible minimum floor area and format adaptations.
- Address disaggregation explicitly.
- Identify alternative sites by specific address and current use, not generically.
- Reference GOAD plans, agents' particulars, and market evidence where available (or flag "[MARKET EVIDENCE TO BE OBTAINED]").
- Professional retail planning language; no advocacy for the proposed development.
- Where site inspections have not been carried out, flag as "[SITE VISITS TO BE UNDERTAKEN]".`;

export const STR_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, development, location, and confirmation Sequential Test is required.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the Sequential Test purpose and NPPF Paragraph 87 requirement. Identify the site and development (use, floor area, format). State the location relative to defined centres. Confirm the test is required.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF sequential test policy, PPG guidance, case law, and local policies.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF Paragraphs 87-89. Summarise PPG guidance on suitability, availability, viability, and flexibility. Reference key case law (Tesco v Dundee). Set out local plan sequential test policies and retail hierarchy.',
  },
  {
    name: 'Site Requirements',
    description: 'Operational requirements with demonstrated flexibility on format and scale.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Define floor area, format, accessibility, visibility, and configuration requirements. State the flexible minimum (typically 20-30% reduction). Explain the commercial rationale. Demonstrate genuine flexibility per case law.',
  },
  {
    name: 'Search Area',
    description: 'Defined search area, centres within it, and sequential preference order.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Define and justify the search area (based on catchment). List centres in sequential preference order (town centre, edge-of-centre). Present a search area plan.',
  },
  {
    name: 'Alternative Sites Assessment',
    description: 'Systematic assessment of each alternative site for suitability, availability, and viability.',
    required: true,
    min_words: 500,
    max_words: 1500,
    guidance:
      'For each alternative site: identify by address, assess suitability (floor area, format, constraints), availability (vacant, marketed, ownership), and viability (costs, rental). Conclude on each site. Where no sites exist in a centre, explain why.',
  },
  {
    name: 'Flexibility and Disaggregation',
    description: 'Demonstration of flexibility applied and assessment of disaggregation.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'Confirm flexibility applied. Address disaggregation and explain why it is or is not appropriate. Reference case law principles. Confirm flexibility is genuine and proportionate.',
  },
  {
    name: 'Sequential Test Conclusion',
    description: 'Summary of site assessments, flexibility, and conclusion that the test is passed.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise each alternative site assessment. Confirm no suitable, available, viable sites in sequentially preferable locations. Confirm genuine flexibility demonstrated. Address disaggregation. Conclude the Sequential Test is passed per NPPF Paragraphs 87-88.',
  },
];

export const STR_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Site Requirements',
    'Search Area',
    'Alternative Sites Assessment',
    'Flexibility and Disaggregation',
    'Sequential Test Conclusion',
  ],
  max_quality_score: 100,
};

export const STR_TEMPLATE = {
  assessment_type: 'Sequential Test (Retail)',
  short_name: 'STR',
  version: 1,
  sections: STR_SECTIONS,
  quality_criteria: STR_QUALITY,
};
