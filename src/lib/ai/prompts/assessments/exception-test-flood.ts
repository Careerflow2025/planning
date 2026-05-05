import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Exception Test for Flood Risk -- required where the Sequential Test has
 * been passed but the proposed development is in Flood Zone 2 or 3 and the
 * PPG Table 3 compatibility matrix indicates the Exception Test is needed.
 *
 * The Exception Test has two limbs: (a) wider sustainability benefits that
 * outweigh the flood risk, and (b) demonstration that the development will
 * be safe for its lifetime. Both must be satisfied.
 *
 * This prompt produces a standalone Exception Test document. The output
 * should read as though prepared by a chartered town planner with expertise
 * in NPPF flood risk policy.
 */

export const EXCEPTION_TEST_FLOOD_PROMPT = `You are preparing an Exception Test for Flood Risk to accompany a planning application submitted to a local planning authority in England. The Exception Test is a distinct policy test that must be applied where the Sequential Test has been passed but development is proposed in a flood zone where the PPG Table 3 compatibility matrix requires it.

## Document Purpose

The Exception Test must demonstrate that both of the following criteria are met (NPPF Paragraph 163):
1. **Wider Sustainability Benefits (Limb a)**: The development would provide wider sustainability benefits to the community that outweigh the flood risk.
2. **Flood Safety (Limb b)**: The development will be safe for its lifetime taking account of the vulnerability of its users, without increasing flood risk elsewhere, and, where possible, will reduce flood risk overall.

Both elements must be satisfied for the Exception Test to be passed (NPPF Paragraph 164).

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 159**: Inappropriate development in areas at risk of flooding should be avoided by directing development away from areas at highest risk. Where development is necessary in such areas, the development should be made safe for its lifetime without increasing flood risk elsewhere.
- **Paragraph 160**: Strategic policies should be informed by a strategic flood risk assessment, and should manage flood risk from all sources.
- **Paragraph 161**: All plans should apply a sequential, risk-based approach to the location of development.
- **Paragraph 162**: The aim of the sequential test is to steer new development to areas with the lowest risk of flooding from any source.
- **Paragraph 163**: If it is not possible for development to be located in zones with a lower risk of flooding (taking into account wider sustainable development objectives), the exception test may have to be applied. For the exception test to be passed it should be demonstrated that:
  a) the development would provide wider sustainability benefits to the community that outweigh the flood risk; and
  b) the development will be safe for its lifetime taking account of the vulnerability of its users, without increasing flood risk elsewhere, and, where possible, will reduce flood risk overall.
- **Paragraph 164**: Both elements of the exception test should be satisfied for development to be allocated or permitted.
- **Paragraph 165**: When determining planning applications, LPAs should ensure that flood risk is not increased elsewhere.
- **Paragraph 167**: When determining applications, LPAs should ensure that flood risk is not increased elsewhere. Where appropriate, applications should be supported by a site-specific flood risk assessment.
- **Paragraph 168**: Major developments should incorporate sustainable drainage systems unless demonstrated to be inappropriate.

### Planning Practice Guidance: Flood Risk and Coastal Change
- **Paragraph 023**: How the Sequential Test should be applied.
- **Paragraph 028 (Reference ID: 7-028-20140306)**: When the Exception Test is needed -- where the Sequential Test alone cannot deliver an acceptable site but the development is necessary.
- **Paragraph 029**: What is meant by "wider sustainability benefits to the community" -- benefits that contribute to the achievement of sustainable development as defined in the NPPF. These must be demonstrated by the applicant and outweigh the flood risk.
- **Paragraph 030**: How to demonstrate that a development will be "safe for its lifetime" -- through a site-specific FRA demonstrating safe access and egress, appropriate finished floor levels, flood resistance and resilience measures, and a flood warning and evacuation plan.
- **Flood Zone Definitions (Table 1)**: Zones 1, 2, 3a, 3b.
- **Flood Risk Vulnerability Classification (Table 2)**: Essential infrastructure, highly vulnerable, more vulnerable, less vulnerable, water-compatible.
- **Flood Risk Vulnerability and Flood Zone Compatibility (Table 3)**: Identifies where the Exception Test is required:
  - More Vulnerable development in Flood Zone 3a: Exception Test required.
  - Essential Infrastructure in Flood Zone 3a or 3b: Exception Test required.
  - Highly Vulnerable development in Flood Zone 2: Exception Test required.
  - Highly Vulnerable development in Flood Zones 3a and 3b: Not permitted.

### Environment Agency Guidance
- EA Standing Advice for development in Flood Zones 2 and 3.
- Climate change allowances for peak river flow and peak rainfall intensity.
- Flood Map for Planning (Rivers and Sea).

### NPPF Sustainable Development Framework
- **Paragraph 7**: The purpose of the planning system is to contribute to the achievement of sustainable development.
- **Paragraph 8**: The three overarching objectives of sustainable development:
  a) **Economic objective**: Building a strong, responsive, and competitive economy.
  b) **Social objective**: Supporting strong, vibrant, and healthy communities.
  c) **Environmental objective**: Protecting and enhancing the natural, built, and historic environment.
- **Paragraph 10-11**: The presumption in favour of sustainable development.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Exception Test document and the policy requirement (NPPF Paragraphs 163-164).
- Identify the application site by full postal address, grid reference, and site area.
- Summarise the proposed development: use, scale, number of units, floor area.
- State the flood zone classification from the EA Flood Map for Planning.
- State the flood risk vulnerability classification of the proposed development (PPG Table 2).
- Confirm that the Sequential Test has been passed (reference the separate Sequential Test document or relevant section of the FRA).
- Confirm that the Exception Test is required by reference to PPG Table 3 and explain why.
- Outline the document structure.

### 2. Policy Framework (300-600 words)
- Set out NPPF Paragraphs 159-165, with particular emphasis on Paragraphs 163 and 164.
- Explain the two-limb structure of the Exception Test.
- Summarise PPG guidance on the Exception Test (Paragraphs 028-030).
- Set out the vulnerability classification and compatibility matrix (PPG Tables 2 and 3) to demonstrate why the Exception Test applies.
- Reference NPPF Paragraphs 7-8 and 10-11 on sustainable development, as these underpin the assessment of wider sustainability benefits.
- Identify any relevant local plan policies on flood risk, the Exception Test, and sustainable development.
- Reference the local authority's SFRA.

### 3. Wider Sustainability Benefits (Limb a) (400-1000 words)
This section must demonstrate that the development provides wider sustainability benefits to the community that outweigh the flood risk. The benefits must be assessed under the three dimensions of sustainable development (NPPF Paragraph 8):

#### 3.1 Economic Benefits
- Job creation during construction and operational phases (quantify where possible).
- Local economic multiplier effects and supply chain benefits.
- Business rates and council tax revenue.
- Investment in infrastructure.
- Contribution to local economic strategy objectives.
- Support for local businesses through increased footfall or workforce.

#### 3.2 Social Benefits
- Delivery of new homes, including affordable housing (quantify numbers and tenure split).
- Contribution to the local authority's housing land supply.
- Provision of community facilities, open space, or public realm improvements.
- Improved accessibility to services and transport.
- Health and wellbeing benefits.
- Educational facilities or contributions.
- Creation of a safe and inclusive community.
- Contribution to meeting identified local needs (housing needs assessment, community infrastructure needs).

#### 3.3 Environmental Benefits
- Remediation of contaminated or derelict brownfield land.
- Biodiversity net gain (quantify the percentage gain).
- Green infrastructure provision.
- Energy efficiency and carbon reduction measures.
- Sustainable drainage improvements over the existing situation.
- Landscape and ecological enhancements.
- Reduction in flood risk compared with the existing baseline (where applicable).

#### 3.4 Weighing Benefits Against Flood Risk
- Summarise the flood risk to the site (by reference to the FRA).
- Summarise the sustainability benefits identified above.
- Demonstrate that the sustainability benefits, taken as a whole, outweigh the identified flood risk.
- Explain why these benefits cannot be delivered on an alternative site at lower flood risk (cross-reference the Sequential Test).

### 4. Flood Safety Demonstration (Limb b) (400-1000 words)
This section must demonstrate that the development will be safe for its lifetime, taking account of the vulnerability of its users, without increasing flood risk elsewhere. Cross-reference the site-specific Flood Risk Assessment for detailed evidence.

#### 4.1 Lifetime of Development
- State the expected lifetime of the development (residential: 100 years; commercial: 75 years; or as appropriate per PPG guidance).
- Explain how climate change has been factored in over the development lifetime.

#### 4.2 Flood Risk Mitigation Measures
Summarise the key mitigation measures from the FRA:
- **Finished floor levels**: State proposed FFLs in metres AOD and the freeboard above the design flood level.
- **Flood resistance measures**: Flood-resistant construction below the design flood level.
- **Flood resilience measures**: Resilient construction above the design flood level (electrical installations, wall and floor finishes).
- **Flood warning**: Registration with the EA Flood Warning Service (Flood Warnings Direct).
- **Flood evacuation plan**: Safe access and egress during a flood event; emergency flood plan.
- **Surface water drainage**: SuDS strategy restricting discharge to greenfield rates, managing the 1 in 100 year + climate change event.
- **Compensatory flood storage**: Where required, provision of level-for-level compensatory flood storage.

#### 4.3 Safe Access and Egress
- Demonstrate that safe, dry access and egress is available during the design flood event.
- If dry access is not achievable, demonstrate that access through shallow, slow-moving floodwater is possible and that the hazard rating is acceptable (using the Defra/EA FD2320 methodology: depth x velocity + a debris factor).
- Describe the flood warning lead time available and how this enables safe evacuation.

#### 4.4 Not Increasing Flood Risk Elsewhere
- Confirm that the development will not increase flood risk to surrounding areas.
- Describe how surface water run-off is managed (attenuation to greenfield rates or betterment).
- Where floodplain storage is displaced, describe compensatory storage provision.
- Confirm that floodwater flow routes are not obstructed.

#### 4.5 Reducing Flood Risk Overall
- Where possible, demonstrate how the development reduces flood risk compared with the existing baseline.
- This may include: improved drainage (betterment over existing brownfield run-off), removal of obstructions to flood flows, provision of new flood storage, or investment in flood defence infrastructure.

### 5. Exception Test Conclusion (200-400 words)
- Restate the two-limb test from NPPF Paragraphs 163-164.
- Summarise the wider sustainability benefits and confirm they outweigh the flood risk (Limb a passed).
- Summarise the flood safety measures and confirm the development will be safe for its lifetime without increasing flood risk elsewhere (Limb b passed).
- Conclude that both elements of the Exception Test are satisfied and that development should be permitted.
- If either limb cannot be satisfied, state this clearly and advise on the implications.
- Reference NPPF Paragraphs 163-165 and relevant PPG paragraphs in the conclusion.

## Quality Standards

- Reference specific NPPF paragraphs (159-165) by number -- minimum 5 distinct references.
- Reference NPPF Paragraphs 7-8 on sustainable development when assessing benefits.
- Reference PPG Flood Risk guidance paragraph numbers (028-030).
- Reference PPG Table 2 (vulnerability classification) and Table 3 (compatibility matrix).
- Clearly articulate the two-limb structure of the Exception Test.
- Quantify sustainability benefits where possible (number of homes, jobs, affordable housing, BNG percentage).
- Cross-reference the Flood Risk Assessment and Sequential Test documents.
- Professional planning language throughout -- no marketing or promotional language.
- Where site-specific data has not been provided, flag as "[DATA TO BE CONFIRMED]".
- Balanced assessment -- acknowledge the flood risk honestly and demonstrate it is outweighed by benefits.
- The document must be capable of standing alone as a separate submission to the LPA.`;

export const EXCEPTION_TEST_FLOOD_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, flood zone, vulnerability classification, Sequential Test outcome, and document scope.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the Exception Test purpose and NPPF Paragraphs 163-164 requirement. Identify the site by address, grid reference, and area. Summarise the proposal. State the flood zone and vulnerability classification. Confirm the Sequential Test has been passed. Confirm the Exception Test is required per PPG Table 3. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local policy context for the Exception Test.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF Paragraphs 159-165 emphasising Paragraphs 163-164. Explain the two-limb structure. Summarise PPG guidance (Paragraphs 028-030). Set out PPG Tables 2 and 3. Reference NPPF Paragraphs 7-8 on sustainable development. Identify relevant local plan policies. Reference the SFRA.',
  },
  {
    name: 'Wider Sustainability Benefits',
    description: 'Demonstration that the development provides sustainability benefits outweighing the flood risk (Limb a).',
    required: true,
    min_words: 400,
    max_words: 1000,
    guidance:
      'Assess benefits under three dimensions: economic (jobs, investment, business rates), social (housing, affordable housing, community facilities, health), and environmental (brownfield remediation, BNG, green infrastructure, energy efficiency). Quantify benefits where possible. Weigh the totality of benefits against the flood risk. Cross-reference the Sequential Test to explain why benefits cannot be delivered elsewhere.',
    subsections: [
      {
        name: 'Economic Benefits',
        description: 'Job creation, investment, business rates, and local economic impacts.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Quantify construction and operational jobs. Note business rates, council tax, and supply chain impacts.',
      },
      {
        name: 'Social Benefits',
        description: 'Housing delivery, affordable housing, community facilities, and wellbeing.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Quantify homes and affordable housing. Note community facilities, open space, health, and educational benefits.',
      },
      {
        name: 'Environmental Benefits',
        description: 'Brownfield remediation, BNG, green infrastructure, and sustainability measures.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Quantify BNG. Note brownfield remediation, energy efficiency, SuDS improvements, and landscape enhancements.',
      },
      {
        name: 'Weighing Benefits Against Flood Risk',
        description: 'Balancing exercise demonstrating benefits outweigh flood risk.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Summarise flood risk and sustainability benefits. Demonstrate benefits outweigh risk. Cross-reference the Sequential Test.',
      },
    ],
  },
  {
    name: 'Flood Safety Demonstration',
    description: 'Demonstration that the development will be safe for its lifetime without increasing flood risk elsewhere (Limb b).',
    required: true,
    min_words: 400,
    max_words: 1000,
    guidance:
      'State the development lifetime and climate change allowances. Summarise FRA mitigation: FFLs and freeboard, flood resistance/resilience, flood warning, evacuation plan, SuDS strategy, compensatory storage. Demonstrate safe access and egress (dry access or acceptable hazard rating per FD2320). Confirm no increase in flood risk elsewhere. Where possible demonstrate overall flood risk reduction. Cross-reference the FRA.',
    subsections: [
      {
        name: 'Lifetime of Development',
        description: 'Expected lifetime and climate change considerations.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'State expected lifetime (100 years residential, 75 years commercial). Explain climate change factoring.',
      },
      {
        name: 'Flood Risk Mitigation Measures',
        description: 'Summary of key mitigation measures from the FRA.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Summarise FFLs, flood resistance/resilience, flood warning registration, evacuation plan, SuDS strategy, and compensatory storage.',
      },
      {
        name: 'Safe Access and Egress',
        description: 'Demonstration of safe access during the design flood event.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Demonstrate dry access or acceptable hazard rating (FD2320). Describe flood warning lead time and evacuation procedure.',
      },
      {
        name: 'Not Increasing Flood Risk Elsewhere',
        description: 'Confirmation that flood risk is not increased to third parties.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Confirm surface water attenuation, compensatory storage where needed, and unobstructed flow routes.',
      },
    ],
  },
  {
    name: 'Exception Test Conclusion',
    description: 'Summary and conclusion on whether both limbs of the Exception Test are satisfied.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Restate the two-limb test. Confirm Limb a is passed (benefits outweigh flood risk). Confirm Limb b is passed (safe for lifetime, no increase elsewhere). Conclude both elements are satisfied per NPPF Paragraphs 163-164. Reference relevant NPPF and PPG paragraphs.',
  },
];

export const EXCEPTION_TEST_FLOOD_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Wider Sustainability Benefits',
    'Flood Safety Demonstration',
    'Exception Test Conclusion',
  ],
  max_quality_score: 100,
};

export const EXCEPTION_TEST_FLOOD_TEMPLATE = {
  assessment_type: 'Exception Test (Flood Risk)',
  short_name: 'ETF',
  version: 1,
  sections: EXCEPTION_TEST_FLOOD_SECTIONS,
  quality_criteria: EXCEPTION_TEST_FLOOD_QUALITY,
};
