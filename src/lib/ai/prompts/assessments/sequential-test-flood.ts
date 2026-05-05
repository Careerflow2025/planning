import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Sequential Test for Flood Risk -- required where a planning application
 * proposes development in Flood Zones 2 or 3, or where there are other
 * identified flood risk sources. The Sequential Test demonstrates that
 * there are no reasonably available sites at a lower risk of flooding
 * that could accommodate the proposed development.
 *
 * This prompt produces a standalone Sequential Test document suitable for
 * submission alongside a Flood Risk Assessment. The output should read
 * as though prepared by a chartered town planner or flood risk consultant
 * experienced in NPPF flood risk policy.
 */

export const SEQUENTIAL_TEST_FLOOD_PROMPT = `You are preparing a Sequential Test for Flood Risk to accompany a planning application submitted to a local planning authority in England. The Sequential Test is a distinct policy test required by national planning policy to demonstrate that a proposed development cannot reasonably be directed to an area with a lower probability of flooding.

## Document Purpose

The Sequential Test must:
- Demonstrate that the applicant has applied the sequential approach required by NPPF Paragraph 162.
- Define an appropriate and justified search area for alternative sites.
- Identify all reasonably available alternative sites within the search area.
- Assess whether any of those alternative sites are at a lower risk of flooding and are suitable and available for the proposed development.
- Conclude whether the Sequential Test is passed, meaning there are no sequentially preferable sites that are reasonably available.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 159**: Inappropriate development in areas at risk of flooding should be avoided by directing development away from areas at highest risk (whether existing or future). Where development is necessary in such areas, the development should be made safe for its lifetime without increasing flood risk elsewhere.
- **Paragraph 160**: Strategic policies should be informed by a strategic flood risk assessment, and should manage flood risk from all sources.
- **Paragraph 161**: All plans should apply a sequential, risk-based approach to the location of development -- taking into account all sources of flood risk and the current and future impacts of climate change -- so as to avoid, where possible, flood risk to people and property.
- **Paragraph 162**: The aim of the sequential test is to steer new development to areas with the lowest risk of flooding from any source. Development should not be allocated or permitted if there are reasonably available sites appropriate for the proposed development in areas with a lower risk of flooding. The strategic flood risk assessment will provide the basis for applying this test. The sequential approach should be used in areas known to be at risk now or in the future from any form of flooding.
- **Paragraph 163**: If it is not possible for development to be located in zones with a lower risk of flooding (taking into account wider sustainable development objectives), the exception test may have to be applied. For the exception test to be passed it should be demonstrated that: a) the development would provide wider sustainability benefits to the community that outweigh the flood risk; and b) the development will be safe for its lifetime taking account of the vulnerability of its users, without increasing flood risk elsewhere, and, where possible, will reduce flood risk overall.
- **Paragraph 164**: Both elements of the exception test should be satisfied for development to be allocated or permitted.
- **Paragraph 165**: When determining any planning applications, local planning authorities should ensure that flood risk is not increased elsewhere. Where appropriate, applications should be supported by a site-specific flood risk assessment.

### Planning Practice Guidance: Flood Risk and Coastal Change
- **Paragraph 023 (Reference ID: 7-023-20220825)**: How the sequential test should be applied. The Sequential Test ensures that a sequential, risk-based approach is followed to steer new development to areas with the lowest risk of flooding.
- **Paragraph 024**: The area of search for the sequential test should be defined and agreed with the LPA. For plan-making, this will be the plan area. For individual planning applications, the area should be appropriate to the nature of the development.
- **Paragraph 025**: What constitutes a "reasonably available" site -- a site is considered reasonably available if it is suitable, available, and achievable for the proposed development.
- **Paragraph 026**: The sequential test does not need to be applied for individual applications where the site has been allocated in the development plan through the sequential test, or for minor development, or for changes of use (except to a more vulnerable use).
- **Paragraph 027**: When applying the sequential test, a pragmatic approach should be taken on the area of search for alternative sites.
- **Flood Zone Definitions (Table 1)**:
  - Zone 1: Low probability -- land assessed as having a less than 1 in 1,000 annual probability of river or sea flooding.
  - Zone 2: Medium probability -- land assessed as having between a 1 in 100 and 1 in 1,000 annual probability of river flooding, or between a 1 in 200 and 1 in 1,000 annual probability of sea flooding.
  - Zone 3a: High probability -- land assessed as having a 1 in 100 or greater annual probability of river flooding, or a 1 in 200 or greater annual probability of sea flooding.
  - Zone 3b: Functional floodplain -- land where water has to flow or be stored in times of flood, or land purposely designed to be flooded in an extreme flood event.
- **Flood Risk Vulnerability Classification (Table 2)**: Essential infrastructure, highly vulnerable, more vulnerable, less vulnerable, water-compatible development.
- **Flood Risk Vulnerability and Flood Zone Compatibility (Table 3)**: Matrix showing which vulnerability classifications are appropriate in each flood zone, and where the Exception Test is required.

### Strategic Flood Risk Assessment (SFRA)
- The local authority's Level 1 (and Level 2 where available) SFRA should be referenced for flood risk mapping, climate change projections, and local flood risk evidence.

## Section-by-Section Guidance

### 1. Introduction (200-500 words)
- State the purpose of the Sequential Test document and the policy requirement (NPPF Paragraph 162).
- Identify the application site by full postal address, grid reference, and site area.
- Summarise the proposed development: use, scale, number of units, floor area.
- State the flood zone classification of the application site from the EA Flood Map for Planning.
- State the flood risk vulnerability classification of the proposed development (per PPG Table 2).
- Confirm whether the Sequential Test is required by reference to PPG Table 3 (flood zone vs vulnerability compatibility).
- If the site has been allocated in the development plan, state whether the Sequential Test was applied at the plan-making stage (which may mean it does not need to be repeated).
- Outline the document structure.

### 2. Policy Framework (300-600 words)
- Set out the statutory framework: Section 38(6) of the Planning and Compulsory Purchase Act 2004.
- Set out NPPF Paragraphs 159-165 with a summary of each, emphasising Paragraph 162 as the key test.
- Summarise the relevant PPG guidance on the Sequential Test (Paragraphs 023-027).
- Set out the flood zone definitions and vulnerability classifications from PPG Tables 1, 2, and 3.
- Identify any relevant local plan policies on flood risk and the sequential approach.
- Reference the local authority's SFRA and any supplementary flood risk guidance.
- Note any pre-application discussion with the LPA or Environment Agency regarding the Sequential Test approach.

### 3. Site and Search Area Definition (300-600 words)
- Describe the application site's flood zone classification with evidence from the EA Flood Map for Planning.
- Note any additional flood risk sources identified: surface water, groundwater, sewer, reservoir.
- Define the area of search for alternative sites. Justify the search area by reference to:
  - The nature and type of development proposed (housing, commercial, community, etc.).
  - The catchment area or market area for the proposed use.
  - Any site-specific functional requirements that constrain the search area.
  - For housing: the relevant local authority area is generally the appropriate search area unless there are justified reasons for a smaller area.
  - For commercial/employment: the relevant market or catchment area.
  - For community/educational: the catchment or service area of the facility.
- If a reduced search area is proposed, provide clear justification (e.g., regeneration site, town centre location, specific locational need).
- State whether the search area has been agreed with the local planning authority.

### 4. Alternative Sites Assessment (600-1500 words)
This is the core of the Sequential Test document.

- Set out the methodology for identifying alternative sites. Sources should include:
  - The local authority's Strategic Housing Land Availability Assessment (SHLAA) or Housing and Economic Land Availability Assessment (HELAA).
  - The local authority's brownfield register.
  - Allocated sites in the adopted and emerging local plans.
  - Sites currently being marketed by commercial property agents.
  - The local authority's own list of available sites.
  - Any other relevant site databases.

- For each alternative site identified, assess:
  1. **Site identification**: Name, address, and location.
  2. **Flood zone**: What flood zone is the site in? (Reference EA Flood Map for Planning.)
  3. **Availability**: Is the site genuinely available for development? Consider ownership, existing uses, and legal constraints.
  4. **Suitability**: Is the site suitable for the type and scale of development proposed? Consider:
     - Planning policy (is the site allocated or would development be contrary to policy?).
     - Site size and configuration.
     - Access arrangements.
     - Surrounding land uses and compatibility.
     - Infrastructure capacity.
     - Environmental constraints (ecology, heritage, landscape, etc.).
  5. **Achievability**: Is it achievable to deliver the development on this site within a reasonable timescale?
  6. **Conclusion**: Is this site sequentially preferable, reasonably available, and appropriate for the proposed development?

- Present the assessment in a clear, tabular format where possible, supplemented by narrative analysis.
- Be objective and balanced in the assessment -- do not dismiss alternative sites without clear, evidence-based reasoning.
- Where sites are dismissed, provide a clear explanation with specific reasons.
- Where no alternative sites are identified in Flood Zone 1 or a lower-risk zone, explain this clearly.

### 5. Sequential Test Conclusion (200-400 words)
- Summarise the search area and methodology.
- State the total number of alternative sites assessed.
- Summarise the reasons why each alternative site (if any) is not sequentially preferable and reasonably available.
- If no reasonably available sites at a lower risk of flooding have been identified, conclude that the Sequential Test is passed.
- If the Sequential Test is passed and the development falls within a category requiring the Exception Test (per PPG Table 3), state that the Exception Test must also be applied.
- If the Sequential Test cannot be passed, state this clearly and advise on the implications.
- Reference NPPF Paragraph 162 and PPG Paragraphs 023-027 in the conclusion.

## Quality Standards

- Reference specific NPPF paragraphs (159-165) by number -- minimum 5 distinct references.
- Reference PPG Flood Risk guidance paragraph numbers (023-027).
- Reference the EA Flood Map for Planning and flood zone classification.
- Reference PPG Table 2 (vulnerability classification) and Table 3 (compatibility matrix).
- Clearly define and justify the area of search.
- Provide a systematic, evidence-based assessment of each alternative site.
- Use a consistent assessment framework for all alternative sites (flood zone, availability, suitability, achievability).
- Do not dismiss alternative sites without clear, specific justification.
- Professional planning language throughout -- no marketing or promotional language.
- Where site-specific data has not been provided, flag as "[DATA TO BE CONFIRMED]" or "[ALTERNATIVE SITES TO BE IDENTIFIED BY APPLICANT]".
- The document must be capable of standing alone as a separate submission to the LPA, distinct from the Flood Risk Assessment.`;

export const SEQUENTIAL_TEST_FLOOD_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, flood zone, vulnerability classification, and document scope.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'State the Sequential Test purpose and NPPF Paragraph 162 requirement. Identify the site by address, grid reference, and area. Summarise the proposal. State the flood zone and vulnerability classification. Confirm the Sequential Test is required per PPG Table 3. Note any plan-level Sequential Test already applied. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local flood risk policy context for the Sequential Test.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out Section 38(6). Summarise NPPF Paragraphs 159-165, emphasising Paragraph 162. Summarise PPG guidance on the Sequential Test (Paragraphs 023-027). Set out flood zone definitions (PPG Table 1), vulnerability classifications (Table 2), and compatibility matrix (Table 3). Identify relevant local plan flood risk policies. Reference the SFRA.',
  },
  {
    name: 'Site and Search Area Definition',
    description: 'Application site flood risk context and justified definition of the alternative sites search area.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe the site flood zone with EA evidence. Note additional flood risk sources. Define the area of search and justify it by reference to the nature of the development, catchment area, functional requirements, and PPG Paragraph 027 pragmatic approach. State whether the search area has been agreed with the LPA.',
  },
  {
    name: 'Alternative Sites Assessment',
    description: 'Systematic assessment of all reasonably available alternative sites at lower flood risk.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Set out the methodology and sources for identifying alternative sites (SHLAA/HELAA, brownfield register, allocated sites, marketed sites). For each site assess: flood zone, availability, suitability (policy, size, access, constraints), and achievability. Present in tabular format with narrative. Provide clear, evidence-based reasoning for dismissing sites. Be objective and balanced.',
  },
  {
    name: 'Sequential Test Conclusion',
    description: 'Summary of findings and conclusion on whether the Sequential Test is passed.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise the search area, methodology, and number of sites assessed. Explain why no reasonably available lower-risk sites exist (or identify any that do). Conclude whether the Sequential Test is passed per NPPF Paragraph 162. If passed, state whether the Exception Test is also required (per PPG Table 3). Reference NPPF Paragraph 162 and PPG Paragraphs 023-027.',
  },
];

export const SEQUENTIAL_TEST_FLOOD_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Site and Search Area Definition',
    'Alternative Sites Assessment',
    'Sequential Test Conclusion',
  ],
  max_quality_score: 100,
};

export const SEQUENTIAL_TEST_FLOOD_TEMPLATE = {
  assessment_type: 'Sequential Test (Flood Risk)',
  short_name: 'STF',
  version: 1,
  sections: SEQUENTIAL_TEST_FLOOD_SECTIONS,
  quality_criteria: SEQUENTIAL_TEST_FLOOD_QUALITY,
};
