import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Affordable Housing Statement (AHS) -- required for residential developments
 * that meet or exceed the threshold for affordable housing contributions as set
 * out in national policy (NPPF Paragraphs 63-66) and the adopted local plan.
 *
 * The AHS demonstrates that the proposed affordable housing provision accords
 * with policy requirements, addresses identified local housing need, and
 * delivers an appropriate tenure mix. Where viability considerations affect the
 * level of provision, the statement sets out the justification.
 */

export const AHS_PROMPT = `You are preparing an Affordable Housing Statement to accompany a planning application for a residential development submitted to a local planning authority in England. The statement must read as though prepared by an experienced RTPI-chartered planning consultant with specialist knowledge of affordable housing policy and delivery.

## Document Purpose

An Affordable Housing Statement is required to demonstrate that a residential development proposal makes adequate provision for affordable housing in accordance with national and local planning policy. The document must:
- Set out the policy requirement for affordable housing applicable to the proposed development.
- Demonstrate how the proposal meets the identified need for affordable housing in the local authority area.
- Describe the proposed affordable housing provision including the number of units, tenure mix, unit sizes, and distribution across the site.
- Address affordability and eligibility criteria for the proposed affordable units.
- Where full policy compliance is not proposed, provide a robust viability justification.
- Explain the management, allocation, and long-term stewardship arrangements for the affordable units.

## Key Policy and Legislation References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 60**: To support the Government's objective of significantly boosting the supply of homes, it is important that a sufficient amount and variety of land can come forward where it is needed, that the needs of groups with specific housing requirements are addressed, and that land with permission is developed without unnecessary delay.
- **Paragraph 63**: Where a need for affordable housing is identified, planning policies should specify the type of affordable housing required, and expect it to be met on-site unless off-site provision or an appropriate financial contribution in lieu can be robustly justified, and the agreed approach contributes to the objective of creating mixed and balanced communities.
- **Paragraph 64**: Provision of affordable housing should not be sought for residential developments that are not major developments, other than in designated rural areas (where policies may set out a lower threshold of 5 units or fewer).
- **Paragraph 65**: Where major development involving the provision of housing is proposed, planning policies and decisions should expect at least 10% of the total number of homes to be available for affordable home ownership, unless this would exceed the level of affordable housing required in the area, or significantly prejudice the ability to meet the identified affordable housing needs of specific groups, or the site is specified in the paragraph's exemptions.
- **Paragraph 66**: Where a need for affordable housing is identified and developments of an appropriate size come forward, planning policies should expect affordable housing to be provided on-site, integrated within the development.

### NPPF Annex 2: Glossary -- Affordable Housing Definition
Affordable housing includes:
- **Affordable housing for rent**: Meets all of the following conditions: (a) the rent is set in accordance with the Government's rent policy for Social Rent or Affordable Rent, or is at least 20% below local market rents (including service charges where applicable); (b) the landlord is a registered provider, except where it is included as part of a Build to Rent scheme; (c) it includes provisions to remain at an affordable price for future eligible households, or for the subsidy to be recycled for alternative affordable housing provision.
- **Starter homes**: As specified in Sections 2 and 3 of the Housing and Planning Act 2016 and any secondary legislation.
- **Discounted market sales housing**: Sold at a discount of at least 20% below local market value, with provisions to remain at a discount for future eligible households.
- **First Homes**: Discounted market sale housing with a minimum discount of 30% against market value, with a price cap of 250,000 pounds (or 420,000 pounds in Greater London) after the discount, sold to first-time buyers.
- **Other affordable routes to home ownership**: Shared ownership, relevant equity loans, other low-cost homes for sale and rent to buy, provided to eligible households whose needs are not met by the market.

### Planning Practice Guidance: Housing Supply and Delivery
- Viability assessment methodology.
- Affordable housing definitions and tenure types.
- Guidance on off-site contributions and commuted sums.

### Planning Practice Guidance: Viability
- Standardised inputs for viability assessment.
- Benchmark land value approach.
- Existing Use Value plus premium methodology.

### Other Key References
- Housing and Planning Act 2016.
- First Homes Policy Statement (May 2021): Minimum 25% of all affordable housing to be First Homes.
- Ministerial Statement on First Homes (24 May 2021).
- Local Housing Needs Assessment (LHNA) or Strategic Housing Market Assessment (SHMA) for the local authority area.
- Local plan affordable housing policy (specifying percentage requirement, tenure split, and thresholds).
- Affordable Housing SPD (where adopted by the LPA).
- Section 106 of the Town and Country Planning Act 1990 (planning obligations).
- Community Infrastructure Levy Regulations 2010 (as amended).

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Affordable Housing Statement.
- Identify the application site by full postal address and the applicant (or "[APPLICANT NAME]").
- Summarise the proposed development: total number of dwellings, site area, and density.
- State the applicable affordable housing policy requirement (percentage and tenure split).
- Note whether the proposal provides policy-compliant affordable housing or whether a viability case is advanced.
- Outline the document structure.

### 2. Policy Framework (400-800 words)
- Set out Section 38(6) of the Planning and Compulsory Purchase Act 2004 as the statutory starting point.
- Summarise the relevant NPPF paragraphs (60, 63-66) and the NPPF Annex 2 affordable housing definition.
- Identify the adopted local plan and the specific affordable housing policy, quoting the percentage requirement, tenure split, and applicable thresholds.
- Reference the First Homes policy requirement (minimum 25% of affordable units as First Homes, unless an exemption applies).
- Reference any adopted Affordable Housing SPD or housing strategy.
- Reference the most recent Local Housing Needs Assessment (LHNA), Strategic Housing Market Assessment (SHMA), or Housing and Economic Development Needs Assessment (HEDNA).
- Note any relevant ministerial statements or written ministerial statements on affordable housing tenure.
- Where the local authority has a housing delivery test result below 95%, note the implications for housing supply.

### 3. Housing Need and Local Context (400-800 words)
- Summarise the identified need for affordable housing in the local authority area, drawing on the LHNA/SHMA.
- State the current housing register figures (number of households on the waiting list) if available, or flag as "[DATA TO BE OBTAINED FROM THE LOCAL AUTHORITY]".
- Describe the local tenure profile: owner-occupied, private rented, social rented, and affordable rented.
- Set out local house prices and affordability ratios (median house price to median earnings).
- Describe the gap between market housing costs and what is affordable to those in housing need.
- Identify the most needed unit sizes (1-bed, 2-bed, 3-bed, 4-bed) by tenure, drawing on the LHNA/SHMA or local plan policy.
- Describe any specific local housing needs: elderly accommodation, supported housing, family housing, key worker housing.
- Conclude by demonstrating that there is an identified need for affordable housing in the area which the proposed development will help address.

### 4. Affordable Housing Provision (600-1200 words)
This is the core section of the Affordable Housing Statement. Provide detailed information on the proposed affordable housing offer.

#### 4.1 Number and Percentage of Affordable Units
- State the total number of dwellings proposed.
- State the number and percentage of affordable dwellings proposed.
- Compare this with the local plan policy requirement and confirm compliance (or explain any shortfall).
- If on-site provision is not proposed or a commuted sum is offered instead, provide robust justification in accordance with NPPF Paragraph 63.

#### 4.2 Tenure Mix
- Set out the proposed tenure split. As a minimum, address the following affordable tenures:
  - First Homes (minimum 25% of affordable units per the Written Ministerial Statement, May 2021).
  - Social Rent.
  - Affordable Rent (capped at 80% of market rent or Local Housing Allowance rate, whichever is lower).
  - Shared Ownership.
  - Any other intermediate tenures proposed.
- Compare the proposed tenure mix with the local plan policy requirement and the LHNA/SHMA recommended tenure split.
- Explain the rationale for the proposed tenure mix, referencing local need and demand.

#### 4.3 Unit Mix and Size
- Set out the proposed affordable unit mix by number of bedrooms and unit type (flat, house, bungalow).
- State the gross internal floor areas and confirm compliance with the Nationally Described Space Standard (NDSS) where adopted by the LPA.
- Compare the unit mix with the LHNA/SHMA recommended mix and local plan policy requirements.
- Demonstrate that the unit mix responds to identified local need.

#### 4.4 Distribution and Integration
- Describe the location of affordable units within the site layout.
- Demonstrate that affordable units are distributed across the site in clusters of no more than [X] units (per local policy or SPD guidance) to promote mixed and balanced communities.
- Confirm that affordable units are not visually distinguishable from market units in terms of external appearance, materials, and design quality ("tenure-blind" or "pepper-potting" approach).
- Reference the site layout plan showing the distribution of affordable units.

#### 4.5 Affordability
- For affordable rented units: state the expected rent levels and compare with Local Housing Allowance (LHA) rates for the Broad Rental Market Area (BRMA).
- For social rented units: confirm rents will be set in accordance with the Government's rent policy (formula rent).
- For First Homes: state the market value, discount percentage (minimum 30%), discounted price, and confirm compliance with the price cap.
- For shared ownership: state the initial equity share, expected rental on the retained equity, and total monthly housing cost.
- Demonstrate that the proposed affordable units are genuinely affordable to households in housing need in the local area.

### 5. Viability Considerations (300-800 words)
- If the proposal delivers policy-compliant affordable housing, state this clearly and keep this section brief.
- If the proposal does not deliver full policy-compliant affordable housing, this section is critical:
  - Explain the reasons for the shortfall (e.g., abnormal site costs, contamination remediation, infrastructure requirements, flood mitigation, heritage constraints).
  - Summarise the findings of any Financial Viability Assessment (FVA) prepared in accordance with the NPPF and PPG.
  - State the benchmark land value used and the methodology (Existing Use Value plus premium, per PPG).
  - State the developer's profit margin assumed (typically 15-20% of GDV for market housing, 6% for affordable housing).
  - State the residual land value and how it compares with the benchmark.
  - If a viability deficit is demonstrated, state the maximum affordable housing provision that the scheme can viably deliver.
  - Note that the LPA may require independent review of the viability assessment.
  - Where a review mechanism is proposed (early-stage or late-stage review), describe the triggers and methodology.
- Reference the NPPF paragraph 58 requirement that planning obligations should not undermine the deliverability of the plan.
- Reference the PPG Viability chapter.

### 6. Management and Delivery (300-600 words)
#### 6.1 Registered Provider
- Identify the Registered Provider (RP) who will take on the affordable units, or state that an RP is to be selected and will be secured by S106 obligation.
- Describe the transfer arrangements: when the affordable units will be transferred and at what price (typically a percentage of open market value or a fixed transfer price agreed with the RP).

#### 6.2 Allocation and Eligibility
- Describe the allocation arrangements: nominations agreement with the local authority (typically 100% initial lettings and 75% subsequent lettings).
- Set out any local connection criteria (where the local plan or S106 specifies cascade arrangements: parish, then district, then wider area).
- For First Homes: describe the eligibility criteria (first-time buyers, household income cap, local connection priority period).
- For shared ownership: describe eligibility criteria (household income cap, inability to purchase outright).

#### 6.3 Section 106 Obligations
- Summarise the key heads of terms for the affordable housing S106 obligation:
  - Number and percentage of affordable units.
  - Tenure split.
  - Trigger points for delivery (e.g., no more than X% of market units to be occupied before Y% of affordable units are completed and transferred).
  - Mortgage protection clause (mortgagee-in-possession).
  - Cascade mechanism if an RP cannot be secured within a specified timescale.
  - Off-site contribution or commuted sum as fallback (if applicable).
  - Review mechanism (if viability case is advanced).

### 7. Conclusion (200-400 words)
- Summarise the affordable housing provision: number, percentage, tenure, unit mix.
- Confirm that the proposal accords with the adopted local plan affordable housing policy and NPPF Paragraphs 63-66.
- If a viability case has been made, summarise the maximum viable provision and the proposed review mechanism.
- State that the affordable housing will be secured by a Section 106 agreement.
- Confirm that the provision contributes to the creation of mixed and balanced communities.
- Confirm that the proposal helps meet the identified need for affordable housing in the area.
- Request that the local planning authority and housing officers raise no objection.

## Quality Standards

- Reference specific NPPF paragraphs (60, 63-66) by number.
- Reference the NPPF Annex 2 affordable housing definitions accurately.
- Reference the First Homes Written Ministerial Statement (May 2021).
- Cite the specific local plan affordable housing policy by name and number, or flag as "[LOCAL PLAN POLICY [X] TO BE INSERTED]".
- Quantify affordable housing provision: number, percentage, tenure split, unit mix.
- Where viability is raised, reference the PPG Viability methodology and standardised inputs.
- Use professional planning and housing terminology throughout: RP, nominations, S106, LHA, BRMA, GDV, BLV, EUV.
- Every factual claim must be traceable to information provided by the user or flagged as "[TO BE CONFIRMED]".
- Balanced assessment: acknowledge any constraints and explain how they are addressed.
- Do not use marketing or promotional language.`;

export const AHS_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, proposal summary, affordable housing policy requirement, and document structure.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the purpose of the Affordable Housing Statement. Identify the site by full address. Summarise the proposed development (total dwellings, site area, density). State the applicable affordable housing policy percentage and tenure split. Note whether the proposal is policy-compliant or advances a viability case. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local planning policy context for affordable housing provision.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Begin with Section 38(6). Summarise NPPF Paragraphs 60, 63-66 and the Annex 2 definition of affordable housing. Set out the local plan affordable housing policy (percentage, tenure, threshold). Reference the First Homes policy (25% minimum). Reference any adopted Affordable Housing SPD. Reference the LHNA/SHMA. Note the housing delivery test result where relevant.',
  },
  {
    name: 'Housing Need and Local Context',
    description: 'Assessment of affordable housing need in the local authority area and the local housing market.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise the identified need for affordable housing from the LHNA/SHMA. State housing register figures or flag as required. Describe the local tenure profile. Set out house prices and affordability ratios. Identify the most needed unit sizes by tenure. Describe any specific local needs (elderly, key worker, family). Conclude that there is an identified need which the development helps address.',
  },
  {
    name: 'Affordable Housing Provision',
    description: 'Detailed description of the proposed affordable housing offer: numbers, tenure, unit mix, distribution, and affordability.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'State the number and percentage of affordable units and compare with policy. Set out the tenure mix including First Homes, social rent, affordable rent, shared ownership. Describe the unit mix by bedroom count and type with NDSS compliance. Describe distribution across the site (pepper-potting, tenure-blind). Set out affordability: rent levels vs LHA, First Homes pricing, shared ownership costs.',
    subsections: [
      {
        name: 'Number and Percentage of Affordable Units',
        description: 'Quantum of affordable housing and comparison with policy.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'State total dwellings and affordable dwellings. Calculate percentage. Compare with local plan requirement.',
      },
      {
        name: 'Tenure Mix',
        description: 'Proposed tenure split across affordable housing categories.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Set out First Homes (minimum 25%), social rent, affordable rent, shared ownership, and any other intermediate tenures. Compare with policy and LHNA.',
      },
      {
        name: 'Unit Mix and Size',
        description: 'Bedroom mix and floor areas for affordable units.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'State unit mix by bedroom count and type. Confirm NDSS compliance where applicable. Compare with LHNA recommended mix.',
      },
      {
        name: 'Distribution and Integration',
        description: 'Location and integration of affordable units within the development.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe distribution across the site. Confirm tenure-blind design. Reference the site layout plan.',
      },
      {
        name: 'Affordability',
        description: 'Demonstration that proposed units are genuinely affordable.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'State rent levels and compare with LHA. Confirm formula rent for social rent. State First Homes pricing. Describe shared ownership costs.',
      },
    ],
  },
  {
    name: 'Viability Considerations',
    description: 'Viability justification where full policy-compliant provision is not proposed.',
    required: true,
    min_words: 300,
    max_words: 800,
    guidance:
      'If policy-compliant, state this briefly. If not, explain the reasons for shortfall. Summarise the FVA findings: benchmark land value (EUV plus premium), developer profit, residual land value, viability deficit. State the maximum viable provision. Note LPA review rights. Describe any review mechanism (early/late stage). Reference NPPF Paragraph 58 and PPG Viability.',
  },
  {
    name: 'Management and Delivery',
    description: 'Registered provider arrangements, allocation, eligibility, and S106 obligations.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Identify the Registered Provider or state one will be secured by S106. Describe transfer arrangements. Set out allocation: nominations agreement, local connection criteria, cascade. Describe eligibility for each tenure. Summarise S106 heads of terms: numbers, tenure, triggers, mortgagee clause, cascade, review mechanism.',
    subsections: [
      {
        name: 'Registered Provider',
        description: 'RP identification and transfer arrangements.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Identify the RP or confirm selection via S106. Describe transfer timing and pricing.',
      },
      {
        name: 'Allocation and Eligibility',
        description: 'Nominations, local connection, and eligibility criteria.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe nominations agreement. Set out local connection criteria and cascade. Describe tenure-specific eligibility.',
      },
      {
        name: 'Section 106 Obligations',
        description: 'Key heads of terms for the affordable housing planning obligation.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Summarise S106 heads of terms: numbers, tenure, triggers, mortgagee clause, cascade mechanism, review mechanism.',
      },
    ],
  },
  {
    name: 'Conclusion',
    description: 'Summary of affordable housing provision and confirmation of policy compliance.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise the affordable housing offer: number, percentage, tenure, unit mix. Confirm compliance with NPPF Paragraphs 63-66 and the local plan policy. If viability case made, summarise maximum viable provision and review mechanism. Confirm the provision is secured by S106. Confirm contribution to mixed and balanced communities and meeting identified need.',
  },
];

export const AHS_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Housing Need and Local Context',
    'Affordable Housing Provision',
    'Viability Considerations',
    'Management and Delivery',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const AHS_TEMPLATE = {
  assessment_type: 'Affordable Housing Statement',
  short_name: 'AHS',
  version: 1,
  sections: AHS_SECTIONS,
  quality_criteria: AHS_QUALITY,
};
