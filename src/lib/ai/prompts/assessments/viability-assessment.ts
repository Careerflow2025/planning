import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Viability Assessment (VA) -- required where the applicant contends that
 * the full policy-compliant level of affordable housing and/or planning
 * obligations (Section 106) cannot be provided because the development
 * would not be viable. The assessment uses a residual appraisal methodology
 * to test whether the scheme can support the policy requirements.
 *
 * The assessment follows the RICS Financial Viability in Planning: Conduct
 * and Reporting guidance (2021) and the methodology set out in the NPPG
 * on Viability.
 *
 * AI Difficulty: Hard -- requires review by a chartered surveyor/valuer.
 */

export const VA_PROMPT = `You are preparing a Viability Assessment (also referred to as a Financial Viability Assessment or Development Viability Appraisal) to accompany a planning application submitted to a local planning authority in England. The assessment tests whether the proposed development can viably support the policy-compliant level of affordable housing and/or other planning obligations (Section 106 / Community Infrastructure Levy), using a residual appraisal methodology.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft only. It MUST be reviewed, verified, and endorsed by a suitably qualified chartered surveyor or valuer (MRICS or FRICS, with demonstrable experience in development viability assessment) before submission to the local planning authority. The AI-generated content does not constitute professional valuation or viability advice and should not be relied upon without professional validation. All land valuations, development values, construction cost estimates, and appraisal inputs must be verified by market evidence, cost consultant advice, and professional judgement. Viability assessments submitted to support reduced affordable housing or planning obligations are subject to independent scrutiny, and inaccurate inputs can result in rejection or challenge.

## Document Purpose

A Viability Assessment must:
- Establish the Benchmark Land Value (BLV) for the site using the Existing Use Value Plus (EUV+) methodology as required by NPPG.
- Establish the Gross Development Value (GDV) of the completed scheme based on market evidence.
- Establish the total development costs: construction costs, professional fees, finance costs, marketing and disposal costs, contingency, and planning obligations (including CIL).
- Apply an appropriate developer's return (profit margin) as a percentage of GDV or cost.
- Undertake a residual appraisal to determine whether the scheme generates a residual land value above the Benchmark Land Value when providing the full policy-compliant level of affordable housing and planning obligations.
- If the scheme is not viable at full policy compliance, test alternative scenarios to identify the maximum level of affordable housing and/or planning obligations the scheme can support.
- Undertake sensitivity analysis to test the robustness of the appraisal to changes in key variables.
- Demonstrate compliance with NPPF Paragraphs 57-58 and the NPPG on Viability.
- Follow the RICS Financial Viability in Planning: Conduct and Reporting (2021) guidance.

## Key Policy and Legislation References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 34**: Plans should set out the contributions expected from development, including levels of affordable housing. Such policies should not undermine the deliverability of the plan.
- **Paragraph 57**: Where up-to-date policies have set out the contributions expected from development, planning applications that comply with them should be assumed to be viable. It is up to the applicant to demonstrate whether particular circumstances justify the need for a viability assessment at the application stage. The weight to be given to a viability assessment is a matter for the decision maker.
- **Paragraph 58**: Where the viability assessment is used at the decision-making stage, it should reflect the recommended approach in national planning guidance, including standardised inputs.

### National Planning Practice Guidance (NPPG) -- Viability
The NPPG on Viability (updated July 2019) sets out the government's approach:
- **Standardised inputs**: The NPPG encourages the use of standardised inputs to improve transparency and consistency. Key standardised inputs include:
  - Benchmark Land Value: based on Existing Use Value Plus (EUV+) premium, not market value.
  - Developer's return: typically 15-20% of GDV for private housing; 6% of GDV for affordable housing.
  - Construction costs: based on BCIS data or cost consultant estimates.
  - Professional fees: typically 8-12% of construction costs.
  - Finance costs: based on current market rates.
- **Benchmark Land Value (BLV)**: Should be based on the Existing Use Value (EUV) of the site, plus a premium to incentivise the landowner to sell (the "plus"). The premium should reflect the minimum return at which it is considered a reasonable landowner would be willing to sell the site for development. The BLV should not be based on the price paid for the site or on aspirational values.
- **Existing Use Value (EUV)**: The value of the site in its current use, assuming it continues in that use. Valued on the basis of market evidence.
- **Alternative Use Value (AUV)**: May be relevant where the site has an extant planning permission for an alternative use that would deliver a higher value. The NPPG recognises AUV in limited circumstances.
- **Gross Development Value (GDV)**: The total value of the completed development. Based on market evidence (comparable sales, achieved prices, asking prices).
- **Viability of affordable housing**: The assessment should test the policy-compliant level of affordable housing first, then test reduced levels if the scheme is not viable at policy compliance.
- **Transparency**: Viability assessments should be made publicly available (subject to limited redactions of genuinely commercially sensitive information).

### RICS Financial Viability in Planning: Conduct and Reporting (2021)
The RICS guidance provides the professional framework for preparing viability assessments:
- **Conduct requirements**: The assessor must act with integrity, be independent, and declare any conflicts of interest. The assessment must be prepared in accordance with the RICS Valuation -- Global Standards (Red Book).
- **Reporting requirements**: The assessment must include a clear statement of the basis of assessment, key assumptions, inputs with supporting evidence, appraisal outputs, sensitivity analysis, and a signed declaration.
- **Benchmark Land Value**: The RICS guidance requires the use of EUV+ methodology, consistent with the NPPG. The "plus" premium should be justified with market evidence and should reflect local market conditions.
- **Developer's return**: The RICS guidance notes typical profit levels of 15-20% of GDV for private housing and 6% of GDV for affordable housing, but acknowledges these may vary depending on risk.
- **Engagement with the LPA**: The assessor is encouraged to agree key inputs with the LPA (or its viability advisor) before submission, to streamline the review process.

### London Plan (2021) -- Viability Tested Route (London only)
For developments in London that do not meet the Fast Track Route threshold for affordable housing:
- **Policy H5**: Affordable housing threshold approach. Schemes meeting or exceeding the threshold level (typically 35% affordable housing, or 50% on public land or where grant is used) follow the Fast Track Route (no viability assessment required). Schemes below the threshold must follow the Viability Tested Route.
- **Viability Tested Route**: Requires a detailed viability assessment to be submitted, which is subject to independent review by the GLA or the borough's viability advisor.
- **Late Stage Review Mechanism**: Schemes following the Viability Tested Route are subject to a late stage review mechanism (review of actual sales values vs. estimated values at a defined trigger point), with any surplus shared with the LPA in the form of additional affordable housing or a financial contribution.
- **Early Stage Review Mechanism**: Triggers if the development is not substantially commenced within two years of planning permission.
- **GLA Affordable Housing Viability SPG (2017)**: Detailed guidance on the viability approach, inputs, and review mechanisms.

### Community Infrastructure Levy (CIL)
- **CIL Regulations 2010 (as amended)**: CIL is a non-negotiable charge levied by the LPA on new development to fund infrastructure. CIL should be included as a development cost in the viability appraisal.
- **Regulation 40**: Relief from CIL for social housing (affordable housing exempt from CIL).
- **Regulation 49A**: Affordable housing may qualify for exemption or relief.
- **Mayoral CIL (MCIL2)**: In London, a Mayoral CIL applies in addition to borough CIL (charged at a flat rate per square metre of net additional floorspace).
- The viability assessment should test viability including the full CIL liability.

### Section 106 Agreements
- **Town and Country Planning Act 1990, Section 106**: Planning obligations may be entered into by agreement or undertaking. Obligations must meet the statutory tests (Regulation 122 of the CIL Regulations):
  - Necessary to make the development acceptable in planning terms.
  - Directly related to the development.
  - Fairly and reasonably related in scale and kind to the development.
- Common Section 106 obligations: affordable housing (number, tenure, size mix), education contributions, healthcare contributions, transport contributions, public realm improvements, employment and training, open space, play space, carbon offset payments.
- The viability assessment should include the full Section 106 package as a cost.

### Other Key References
- **BCIS (Building Cost Information Service)**: The industry-standard source of construction cost data in England. The NPPG recommends using BCIS data for construction cost estimation in viability assessments.
- **Savills / Knight Frank / JLL / CBRE market reports**: Sources of market evidence for GDV.
- **Land Registry Price Paid Data**: Transaction data for residential sales.
- **EPC data**: Energy Performance Certificate data providing information on property characteristics.
- **VOA (Valuation Office Agency)**: Data on rateable values and property characteristics.
- **Local plan viability evidence base**: Many local plans are accompanied by a viability evidence base study that sets the viability benchmarks for the area. This is an important reference point for the assessment.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the viability assessment: to test whether the proposed development can viably provide the full policy-compliant level of affordable housing and planning obligations.
- Provide commission details: client (applicant/developer), viability assessor (chartered surveyor), site address, planning application reference.
- Identify the site: address, site area (hectares), existing use, current planning status.
- Summarise the proposed development: number of units (private and affordable), unit mix (1-bed, 2-bed, 3-bed, 4-bed), floor areas, non-residential floorspace, parking, amenity space.
- State the policy-compliant affordable housing requirement (percentage, tenure split, and unit mix per the local plan and/or London Plan).
- State whether the applicant is proposing a reduced level of affordable housing and the reason (viability).
- State the qualifications and RICS membership of the assessor (or flag "[TO BE REVIEWED AND ENDORSED BY CHARTERED SURVEYOR (MRICS/FRICS)]").
- Confirm compliance with RICS Financial Viability in Planning (2021) and NPPG Viability.
- Declare any conflicts of interest.
- Outline the document structure.

### 2. Policy Framework (400-800 words)
- Set out NPPF Paragraphs 34, 57-58 on viability.
- Set out the NPPG on Viability (standardised inputs, EUV+ methodology, developer's return, transparency).
- Set out the relevant local plan affordable housing policy: percentage requirement, tenure split (social rent, affordable rent, London Living Rent, shared ownership, First Homes), unit mix, design standards.
- For London: set out London Plan Policy H5 (threshold approach) and whether the scheme is following the Fast Track Route or Viability Tested Route.
- Set out the CIL charging schedule (borough CIL rates by zone and use, Mayoral CIL rate for London).
- Set out the Section 106 requirements identified in pre-application discussions or the LPA's standard requirements.
- Set out the local plan viability evidence base findings (if published) and the viability benchmarks used in the plan examination.
- Reference RICS Financial Viability in Planning (2021) as the professional framework.

### 3. Methodology (400-700 words)
- Describe the residual appraisal methodology:
  - **Residual land value (RLV) calculation**: RLV = GDV - Total Development Costs - Developer's Return. The resulting residual land value is compared to the Benchmark Land Value (BLV). If RLV > BLV, the scheme is viable. If RLV < BLV, the scheme is not viable at the tested level of affordable housing/obligations.
  - **Appraisal software**: State the software used (e.g., Argus Developer, HCA/Homes England DAT, bespoke Excel model).
  - **Appraisal structure**: Describe how the appraisal is structured (phases, build programme, sales programme, affordable housing transfer timing).
  - **Inputs derivation**: State the approach to deriving each input (market evidence, cost consultant, BCIS, professional judgement).
  - **Sensitivity analysis**: Describe the sensitivity testing approach (varying GDV, construction costs, profit margin, affordable housing percentage, tenure mix, BLV premium).
  - **Scenarios tested**: List the scenarios to be tested:
    - Scenario 1: Policy-compliant (full affordable housing and planning obligations).
    - Scenario 2: Applicant's proposed level of affordable housing.
    - Scenario 3-N: Alternative scenarios testing intermediate levels.
- Reference RICS (2021) and NPPG methodology throughout.

### 4. Site Value (Benchmark Land Value) (500-1000 words)
- Establish the Benchmark Land Value (BLV) using the EUV+ methodology:
  - **Existing Use Value (EUV)**:
    - Describe the current use of the site (e.g., vacant, commercial, industrial, car park, garden land, agricultural).
    - Value the site in its existing use based on market evidence:
      - For commercial/industrial sites: comparable investment or capital transactions, rental evidence, and yield evidence. Apply appropriate valuation methodology (investment method, comparison method).
      - For residential sites (e.g., garden land): comparable land sales.
      - For agricultural land: comparable agricultural land transactions.
      - For vacant/derelict land: EUV of the last established use, or nominal value for genuinely derelict land with no viable existing use.
    - State the EUV with supporting evidence and methodology.
  - **Premium (the "Plus")**:
    - The premium should reflect the minimum return at which a reasonable landowner would be willing to sell the site for development.
    - State the percentage premium applied to the EUV and justify it with reference to:
      - Local market conditions and land supply.
      - The type of landowner (developer, investor, public body, individual).
      - Comparable land transactions (where available).
      - The viability evidence base premium adopted in the local plan examination.
    - The NPPG and RICS guidance note that the premium should not be based on the price paid for the site.
    - State the resulting Benchmark Land Value (EUV + premium).
  - **Cross-check against market evidence**: Where available, cross-check the BLV against comparable development land transactions (recognising that market transactions may include hope value and overpayment, which should not inflate the BLV).
  - **Alternative Use Value (AUV)**: If the site has an implementable planning permission for an alternative use that would deliver a higher value, consider whether AUV is relevant. If AUV is adopted, justify this with reference to NPPG and state the permission relied upon.

### 5. Gross Development Value (800-1500 words)
- Establish the Gross Development Value (GDV) of the completed development:
  - **Private residential values**:
    - Research comparable sales evidence: achieved prices (Land Registry), asking prices, agent quotations. Present comparables in a table with address, date, floor area, price, and price per square foot/metre.
    - Adjust comparables for time (market movement), location, specification, floor level, aspect, and other relevant factors.
    - Derive values per square foot/metre for each unit type (1-bed, 2-bed, 3-bed, 4-bed) and for different floor levels (ground, upper, penthouse).
    - Apply the derived values to the proposed unit schedule (number of units, floor areas) to calculate the total private residential GDV.
    - Present the unit schedule with values in tabular form.
    - Address ground rent income and service charge considerations (where relevant to the capitalised value).
  - **Affordable housing values**:
    - State the affordable housing tenure mix assumed (social rent, affordable rent, London Living Rent, shared ownership, First Homes, other intermediate).
    - For each affordable tenure:
      - **Social rented**: Value based on capitalised rental income. Rents set at social rent levels (formula rents). Transfer value typically expressed as a percentage of market value (often 40-60%) or per unit/per square foot. Reference Registered Provider (RP) offer letters or market norms.
      - **Affordable rent**: Rents at up to 80% of market rent (or LHA cap). Transfer value typically higher than social rent. Reference RP offers or market norms.
      - **Shared ownership**: Initial equity share (typically 25-40%), rent on retained equity (typically 2.75% of unsold equity). Transfer value based on capitalised rental income plus equity share. Reference RP offers.
      - **First Homes**: Discounted market sale at minimum 30% discount (or higher local discount). Value = market value less the discount.
      - **London Living Rent**: Rents set at one-third of median household income by borough. Transfer value based on capitalised rental income.
    - Present the total affordable housing GDV.
  - **Commercial/non-residential values** (if applicable):
    - Value any non-residential elements (retail, office, community space) using the investment method (rent x yield) or comparison method.
    - Present evidence for rents, yields, and capital values.
    - Present the total commercial GDV.
  - **Car parking and other income** (if applicable):
    - Value separately if sold or let independently.
  - **Total GDV**: Sum of private residential, affordable housing, commercial, and other income.

### 6. Construction Costs (600-1200 words)
- Establish the total construction costs:
  - **Building costs**:
    - Source: BCIS (state the BCIS data date, location factor, and cost category) or cost consultant estimate (reference the cost plan/QS report).
    - Present the BCIS median cost per square metre for the building type (e.g., new build flats 6+ storeys, new build houses 2 storeys).
    - Apply the BCIS location factor for the relevant LPA area.
    - Calculate the total building cost (cost per sqm x gross internal area).
    - For cost consultant estimates, summarise the cost plan and reference the full document.
  - **Abnormal costs**:
    - Demolition of existing structures.
    - Remediation of contaminated land.
    - Abnormal foundations (piling, underpinning, dewatering).
    - Flood mitigation works.
    - Retaining structures.
    - Service diversions and connections.
    - Section 278 highway works.
    - Archaeological mitigation.
    - Ecology mitigation (bat roosts, newt ponds, BNG).
    - Other site-specific abnormal costs.
    - Present each abnormal cost with supporting evidence (cost consultant estimate, specialist quotation, or benchmark data).
  - **External works and infrastructure**:
    - Site-wide infrastructure: roads, paths, drainage, landscaping, lighting, utilities.
    - Typically expressed as a percentage of building costs (10-15%) or as a lump sum based on the cost plan.
  - **Contingency**:
    - Construction contingency: typically 3-5% of construction costs for new build, 5-10% for conversion/refurbishment.
    - State the contingency percentage and amount.
  - **Total construction costs**: Sum of building costs, abnormal costs, external works, and contingency.

### 7. Professional Fees and Finance (400-700 words)
- **Professional fees**:
  - Architect, structural engineer, M&E engineer, planning consultant, project manager, and other professional fees.
  - Typically expressed as a percentage of construction costs: 8-12% for new build, 10-15% for complex schemes.
  - State the percentage adopted and the total amount.
  - Reference NPPG and RICS guidance on typical fee levels.
- **Finance costs**:
  - Debt finance: interest rate on development debt (senior debt). State the assumed interest rate (typically base rate + margin, or a blended rate). State the assumed loan-to-cost ratio.
  - Calculate the total interest cost based on the cashflow profile (or use an average balance method).
  - For complex schemes, present a detailed cashflow model.
  - State the finance arrangement fee (typically 1-2% of facility).
  - State whether mezzanine or equity finance is assumed (less common in viability assessments).
- **Marketing and disposal costs**:
  - Estate agent fees: typically 1-1.5% of private GDV.
  - Legal fees on sales: typically 0.5% of GDV or a per-unit fixed fee.
  - Marketing costs: show home, brochures, advertising, online portals. Typically 1-2% of private GDV.
  - Total marketing and disposal costs.
- **Purchaser's costs on site acquisition** (if applicable):
  - Stamp Duty Land Tax (SDLT): calculated at appropriate rate on the land value.
  - Legal fees and agent fees on acquisition: typically 1-2% of land value.

### 8. Planning Obligations and CIL (400-700 words)
- **Community Infrastructure Levy (CIL)**:
  - State the applicable CIL charging rate(s): borough CIL (by zone and use), Mayoral CIL (flat rate).
  - Calculate the CIL liability based on net additional floorspace (GIA) and applicable rate.
  - State any exemptions or relief claimed (social housing relief, self-build, charitable relief).
  - Present the total CIL liability.
- **Section 106 obligations**:
  - List all Section 106 obligations assumed in the appraisal:
    - Affordable housing: number of units, tenure, transfer values (counted in the GDV rather than as a cost, or presented as a cost if shown as a commuted sum in lieu).
    - Education contributions: per-unit or per-child-place formula.
    - Healthcare contributions: per-unit formula.
    - Transport contributions: public transport, cycling, highways.
    - Open space and play space: on-site provision costs or commuted sum.
    - Carbon offset payment: per tonne of CO2 shortfall.
    - Employment and training: local labour agreements, construction training.
    - Public realm: improvements to surrounding area.
    - Other: biodiversity net gain offset, heritage, community facilities.
  - Present the total Section 106 financial contributions.
  - Present the total planning obligation costs (CIL + Section 106 financial contributions + on-site Section 106 cost items).

### 9. Developer's Return (300-600 words)
- State the assumed developer's return (profit margin):
  - **Private housing**: Typically 15-20% of private residential GDV. The NPPG and RICS guidance suggest 15-20%. State the percentage adopted and justify the level:
    - Risk profile of the scheme (location, market conditions, construction complexity, planning risk, timescale).
    - Project scale and duration.
    - Comparison with viability evidence base assumptions and inspector findings.
  - **Affordable housing**: Typically 6% of affordable housing transfer value (lower risk as forward-funded or pre-sold to an RP).
  - **Commercial elements**: Typically 15-20% of commercial GDV (similar to private residential, or higher for speculative commercial).
  - **Blended return**: Calculate the blended return across all tenures as a percentage of total GDV and as a percentage of total cost.
- Present the total developer's return as an absolute amount and as a percentage of GDV and cost.
- Cross-check the return against industry benchmarks and recent viability assessment decisions.

### 10. Appraisal Results (500-1000 words)
- Present the results of the residual appraisal for each scenario tested:
  - **Scenario 1: Policy-compliant scheme**:
    - GDV, total costs (construction, fees, finance, marketing, planning obligations, CIL), developer's return.
    - Residual Land Value (RLV) = GDV - Total Costs - Developer's Return.
    - Comparison of RLV against BLV.
    - Viability conclusion: viable (RLV > BLV) or not viable (RLV < BLV). If not viable, state the deficit.
  - **Scenario 2: Applicant's proposed scheme** (reduced affordable housing):
    - As above. Demonstrate that the scheme is viable at the proposed level of affordable housing.
  - **Scenario 3-N: Alternative scenarios**:
    - Test intermediate levels of affordable housing (e.g., 10%, 15%, 20%, 25%, 30%).
    - Test alternative tenure mixes.
    - Test alternative Section 106 packages.
    - Identify the maximum viable level of affordable housing.
- Present the appraisal results in a summary table for all scenarios.
- Present a detailed appraisal output for the policy-compliant and proposed scenarios (or reference the full Argus Developer output in an appendix).

### 11. Sensitivity Analysis (500-1000 words)
- Test the robustness of the appraisal to changes in key variables:
  - **GDV sensitivity**: Test +/- 5% and +/- 10% change in private residential values. Present the resulting RLV for each.
  - **Construction cost sensitivity**: Test +/- 5% and +/- 10% change in construction costs.
  - **Combined sensitivity**: Test pessimistic (lower GDV + higher costs) and optimistic (higher GDV + lower costs) scenarios.
  - **Profit margin sensitivity**: Test at 15%, 17.5%, and 20% of GDV.
  - **Affordable housing tenure sensitivity**: Test alternative tenure splits (e.g., higher proportion of shared ownership vs. social rent).
  - **BLV sensitivity**: Test +/- 10% change in Benchmark Land Value.
  - **Build programme sensitivity**: Test extended build programme (increased finance costs).
  - **CIL and Section 106 sensitivity**: Test changes in planning obligation costs.
- Present the sensitivity results in tabular form (matrix showing RLV for each variable combination).
- Identify which variables have the greatest impact on viability ("key drivers").
- State the break-even point for each key variable (the value at which the scheme becomes viable/unviable).
- Assess the overall robustness of the appraisal conclusions.

### 12. Conclusion (400-800 words)
- Summarise the appraisal methodology and compliance with NPPG and RICS (2021).
- Summarise the key inputs: BLV, GDV, construction costs, fees, finance, planning obligations, CIL, developer's return.
- Summarise the appraisal results:
  - Whether the policy-compliant scheme is viable.
  - The maximum viable level of affordable housing.
  - The proposed affordable housing offer and its justification.
- Summarise the sensitivity analysis findings and the robustness of the conclusions.
- For London: note the late stage review mechanism requirement (if Viability Tested Route).
- Confirm that the assessment has been prepared in accordance with NPPF, NPPG, and RICS (2021).
- Confirm that the assessment is suitable for independent review by the LPA's viability advisor.
- State that the appraisal is based on current market conditions and costs as at the date of the assessment. If market conditions change materially, the appraisal should be updated.
- Note any agreed inputs with the LPA or outstanding matters.
- Provide a signed declaration confirming compliance with RICS standards.

## Quality Standards

- Include the AI-generated disclaimer prominently in the document frontispiece and introduction, stating that the report requires review and endorsement by a chartered surveyor (MRICS/FRICS).
- Reference specific NPPF paragraphs (34, 57-58) by number.
- Reference the NPPG on Viability (standardised inputs, EUV+ methodology).
- Reference RICS Financial Viability in Planning: Conduct and Reporting (2021).
- For London: reference London Plan Policy H5 and the GLA Affordable Housing Viability SPG.
- Reference the specific local plan affordable housing policy by number.
- Reference the CIL charging schedule with rates.
- Use the EUV+ methodology for Benchmark Land Value with market evidence.
- Present comparable evidence for GDV with adjustments.
- Use BCIS data or cost consultant estimates for construction costs with source and date.
- State and justify the developer's return with reference to NPPG/RICS ranges.
- Present a complete residual appraisal for each scenario tested.
- Present sensitivity analysis in tabular form testing all key variables.
- Include a signed RICS declaration (or flag for inclusion).
- Address affordable housing tenure, unit mix, and transfer values for each affordable product.
- Present all monetary figures consistently and clearly.
- Use correct viability terminology: residual land value, benchmark land value, existing use value, premium, gross development value, abnormal costs, contingency, developer's return, blended return, sensitivity analysis, break-even.
- Where market evidence or cost data is not available, clearly flag (e.g., "[COMPARABLE EVIDENCE TO BE INSERTED]", "[COST PLAN TO BE APPENDED]").
- Professional viability and valuation language throughout, technically accurate but accessible to planning officers and viability reviewers.`;

export const VA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, commission details, site identification, proposed development, policy requirement, and RICS compliance.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the purpose (testing viability of affordable housing and obligations). Provide commission details. Identify the site. Summarise the development (units, mix, affordable requirement). State policy-compliant requirement. State RICS qualifications and conflict declaration. Confirm RICS and NPPG compliance.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF viability paragraphs, NPPG methodology, local plan affordable housing policy, London Plan (if applicable), CIL, and Section 106.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out NPPF Paragraphs 34, 57-58. Set out NPPG on Viability (EUV+, standardised inputs). Set out local plan affordable housing policy. For London, set out Policy H5 and viability tested route. Reference CIL charging schedule. Reference Section 106 requirements. Reference RICS (2021). Reference local plan viability evidence base.',
  },
  {
    name: 'Methodology',
    description: 'Residual appraisal methodology, software, inputs derivation, sensitivity approach, and scenarios tested.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe residual appraisal methodology (RLV = GDV - Costs - Return vs BLV). State appraisal software. Describe inputs derivation approach. Describe sensitivity analysis methodology. List scenarios to be tested (policy-compliant, proposed, alternatives). Reference RICS and NPPG methodology.',
  },
  {
    name: 'Site Value (Benchmark Land Value)',
    description: 'Existing Use Value assessment, premium justification, resulting BLV, and market evidence cross-check.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe current use. Value EUV based on market evidence (comparables, methodology). State and justify premium percentage (market conditions, landowner type, viability evidence base). Present BLV (EUV + premium). Cross-check against land transactions. Consider AUV if relevant. Do NOT use price paid.',
  },
  {
    name: 'Gross Development Value',
    description: 'Private residential values, affordable housing values, commercial values, and total GDV with market evidence.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Present private residential comparable evidence (address, date, area, price, psf). Derive values per unit type. Apply to unit schedule. Present affordable housing values by tenure (social rent, affordable rent, shared ownership, First Homes). Present commercial values if applicable. Present total GDV.',
  },
  {
    name: 'Construction Costs',
    description: 'Building costs (BCIS or cost consultant), abnormal costs, external works, contingency, and total construction costs.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Present BCIS or cost consultant building costs (source, date, location factor, rate per sqm). List and evidence abnormal costs. State external works. State contingency percentage. Present total construction costs. Reference NPPG standardised inputs.',
  },
  {
    name: 'Professional Fees and Finance',
    description: 'Professional fees, debt finance costs, marketing and disposal costs, and purchaser costs.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'State professional fee percentage and total. State finance rate, loan-to-cost ratio, and total interest cost. State agent fees, legal fees, and marketing costs. State SDLT and acquisition costs on land. Reference NPPG ranges.',
  },
  {
    name: 'Planning Obligations and CIL',
    description: 'CIL calculation, Section 106 obligations, and total planning obligation costs.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Calculate CIL liability (borough and Mayoral rates, net additional floorspace, exemptions). List all Section 106 obligations (education, healthcare, transport, open space, carbon offset, employment). Present total CIL and Section 106 costs.',
  },
  {
    name: "Developer's Return",
    description: 'Assumed profit margin for private, affordable, and commercial elements, with justification.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State private housing profit (15-20% GDV). State affordable housing profit (6% GDV). State commercial profit. Justify levels with reference to risk, NPPG, RICS, and comparable decisions. Calculate blended return. Present total developer return.',
  },
  {
    name: 'Appraisal Results',
    description: 'Residual appraisal outputs for each scenario: GDV, costs, RLV vs BLV, and viability conclusion.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present full appraisal for policy-compliant scenario (GDV, costs, return, RLV, comparison to BLV). Present applicant proposed scenario. Present alternative scenarios at different affordable housing levels. Identify maximum viable affordable housing level. Present summary table of all scenarios.',
  },
  {
    name: 'Sensitivity Analysis',
    description: 'Testing GDV, costs, profit, tenure, BLV, and programme sensitivity with results matrix.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Test GDV sensitivity (+/-5%, +/-10%). Test construction cost sensitivity. Test combined scenarios. Test profit margin sensitivity. Test tenure mix sensitivity. Test BLV sensitivity. Present results in matrix/tabular form. Identify key drivers and break-even points. Assess overall robustness.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of inputs, results, maximum viable affordable housing, sensitivity, compliance, and RICS declaration.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise methodology and key inputs. Summarise viability results (is policy-compliant scheme viable, maximum viable affordable housing). Summarise sensitivity findings. For London, note late stage review mechanism. Confirm NPPF, NPPG, and RICS compliance. Note suitability for independent review. State appraisal date and currency. Provide or flag RICS declaration.',
  },
];

export const VA_QUALITY: QualityCriteria = {
  min_policy_refs: 10,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Site Value (Benchmark Land Value)',
    'Gross Development Value',
    'Construction Costs',
    'Professional Fees and Finance',
    'Planning Obligations and CIL',
    "Developer's Return",
    'Appraisal Results',
    'Sensitivity Analysis',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const VA_TEMPLATE = {
  assessment_type: 'Viability Assessment',
  short_name: 'VA',
  version: 1,
  sections: VA_SECTIONS,
  quality_criteria: VA_QUALITY,
};
