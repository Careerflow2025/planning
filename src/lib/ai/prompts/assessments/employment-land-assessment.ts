import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Employment Land Assessment (ELA) -- required for developments that involve
 * the loss of designated or existing employment land, or that propose new
 * employment land allocations. The ELA provides the evidential basis for
 * justifying the release or provision of employment land through market
 * assessment, demand forecasting, and site evaluation.
 */

export const ELA_PROMPT = `You are preparing an Employment Land Assessment (ELA) to accompany a planning application submitted to a local planning authority in England. The ELA should read as though prepared by an experienced planning and economic consultant with expertise in employment land reviews, market assessment, and economic needs analysis in the UK planning context.

## Document Purpose

An Employment Land Assessment provides the evidential basis for justifying either the loss of existing/designated employment land to alternative uses or the need for new employment land provision. It is a material consideration in the planning balance, particularly where the proposal involves the redevelopment of land currently or formerly in employment use (Use Classes E(g), B2, B8). The ELA must:
1. Establish the policy context for the protection and release of employment land.
2. Review the existing employment land supply within the local authority area, including allocated sites, committed schemes, and existing stock.
3. Assess the local commercial property market to determine demand, take-up, vacancy, and market signals.
4. Forecast future demand for employment land using recognised methodologies (labour demand, past trends, or both).
5. Evaluate the suitability of the application site for continued employment use against market and site-specific criteria.
6. Where the proposal involves the loss of employment land, justify that loss against the local plan policy criteria and demonstrate that the site is no longer needed, viable, or suitable for employment use.
7. Where new employment land is proposed, demonstrate the need for additional provision and the suitability of the site.
8. Address replacement provision, transitional arrangements, and mitigation where applicable.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 81**: Planning policies and decisions should help create the conditions in which businesses can invest, expand and adapt. Significant weight should be placed on the need to support economic growth and productivity, taking into account both local business needs and wider opportunities for development.
- **Paragraph 82**: Planning policies should set out a clear economic vision and strategy which positively and proactively encourages sustainable economic growth, having regard to Local Industrial Strategies and other local policies for economic development and regeneration. They should set criteria, or identify strategic sites, for local and inward investment to match the strategy and to meet anticipated needs over the plan period; seek to address potential barriers to investment, such as inadequate infrastructure, services or housing, or a poor environment; and be flexible enough to accommodate needs not anticipated in the plan, allow for new and flexible working practices, and to enable a rapid response to changes in economic circumstances.
- **Paragraph 83**: Planning policies and decisions should recognise and address the specific locational requirements of different sectors. This includes making provision for clusters or networks of knowledge and data-driven, creative or high technology industries; and for storage and distribution operations at a variety of scales and in suitably accessible locations.
- **Paragraph 122**: Planning policies and decisions need to reflect changes in the demand for land. They should be informed by regular reviews of both the land allocated for development in existing plans, and of land availability. Where the local planning authority considers there to be no reasonable prospect of an application coming forward for the use allocated in a plan, it should reallocate the land for a more deliverable use that can help to address identified needs.

### Planning Practice Guidance (PPG)
- **Housing and economic needs assessment**: Guidance on how local planning authorities should assess their economic development needs, including the use of labour demand forecasting, past trends analysis, and consideration of market signals.
- **Employment land reviews**: The PPG expects LPAs to keep their employment land supply under review and to consider whether existing allocations remain appropriate in light of market conditions and economic forecasts.

### Other Key References
- **Employment Land Reviews: Guidance Note (2004)**: Although superseded by the PPG, the methodology remains influential. It established a three-stage process: Taking Stock (Stage 1), Creating a Picture of Future Requirements (Stage 2), and Identifying a Portfolio of Sites (Stage 3).
- **HCA Employment Densities Guide (3rd Edition, 2015)**: Standard employment density ratios for converting floorspace to employment estimates by use class.
- **Local plan employment policies**: Site-specific allocations, employment protection policies, criteria for release of employment land, and sequential approach requirements.
- **Employment Land Reviews (ELR) / Economic Needs Assessments (ENA)**: Commissioned by the local authority as part of the plan evidence base.
- **VOA Non-Domestic Rating**: Rateable values and vacancy data for commercial property.
- **CoStar / EGi / Rightmove Commercial**: Market data on availability, take-up, rents, and yields.
- **LEP Strategic Economic Plan / Local Industrial Strategy**: Priority sectors and employment land objectives.
- **Valuation Office Agency (VOA)**: Rating list data for commercial property stock.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the Employment Land Assessment and its role in the planning balance.
- Identify the application site: location, current use (or last use), site area, existing floorspace (sq m GIA), and condition of buildings.
- Summarise the proposed development and the change of use sought.
- State whether the assessment addresses the loss of employment land, the provision of new employment land, or both.
- Identify the relevant local plan employment policy against which the loss or provision is assessed.
- Note any pre-application advice or officer discussions regarding the employment land justification.
- Outline the document structure.

### 2. Policy Framework (500-1000 words)
- Set out NPPF Paragraphs 81-83 and 122, explaining the balance between supporting economic growth and responding to changing demand.
- Set out the relevant PPG guidance on economic needs assessment and employment land reviews.
- Set out the relevant local plan employment policies in detail:
  - Employment land protection policies (typically policies that resist the loss of employment land unless specified criteria are met).
  - Criteria for release: demonstrate marketing for a specified period, no reasonable prospect of employment use, no adverse impact on employment land supply, or the site is no longer suitable for employment use.
  - Replacement provision requirements.
  - Mixed-use policies where employment land is redeveloped with an element of employment use retained.
- Reference the local authority's Employment Land Review (ELR) or Economic Needs Assessment (ENA):
  - Quantitative employment land requirement (hectares or sq m by use class).
  - Qualitative assessment of existing employment sites.
  - Any categorisation of the application site in the ELR (e.g., "protect", "manage change", "release").
- Reference the LEP Strategic Economic Plan and any sector-specific priorities.
- Reference any supplementary planning documents or guidance on employment land.

### 3. Existing Employment Land Supply (500-1000 words)
- Present the current employment land supply within the local authority area:
  - **Allocated sites**: Employment land allocations in the adopted local plan, with details of location, area, allocated use class, and development status (undeveloped, under construction, completed).
  - **Committed schemes**: Sites with planning permission for employment use but not yet built out, including details of permission type, floorspace, and expiry date.
  - **Existing stock**: Overview of the existing employment land and floorspace stock, by area and use class (offices, industrial, warehousing), drawing on VOA data, ELR data, and commercial property databases.
  - **Vacancy**: Vacancy rates for commercial property by type and area, compared with the typical frictional vacancy rate (5-8% for a healthy market).
  - **Recent completions**: Employment land completions over the past 5-10 years (from the local authority's Annual Monitoring Report).
  - **Recent losses**: Employment land lost to other uses over the past 5-10 years.
- Identify the overall quantitative supply-demand balance: whether there is a surplus or deficit of employment land against the plan requirement.
- If the application site is included in the ELR or allocated for employment, state its categorisation and any qualitative assessment.

### 4. Market Assessment (600-1200 words)
- Present a commercial property market assessment for the local area and sub-region:
  - **Office market**: Availability (sq m and number of units), take-up (lettings and sales), asking rents (per sq m pa), achieved rents, yields, recent transactions, new-build vs second-hand, quality grading.
  - **Industrial market**: Availability, take-up, asking rents, achieved rents, yields, recent transactions, unit size analysis.
  - **Warehouse/logistics market**: Availability, take-up, rents, yields, particularly for strategic logistics (units >9,000 sq m) vs smaller distribution.
  - **Market trends**: Direction of rents, yields, take-up, and availability over the past 3-5 years.
  - **Market commentary**: Views of local commercial agents on demand conditions, occupier requirements, and investment appetite.
- Reference data sources: CoStar, EGi, Rightmove Commercial, local agent reports, VOA.
- Assess the market performance of the application site specifically:
  - Current occupancy/vacancy status.
  - Rental levels achieved or achievable.
  - Marketing history: duration and intensity of marketing, number of enquiries and viewings, reasons for lack of take-up.
  - Condition of buildings and investment required for re-occupation.
  - Agent assessment of the site's marketability for employment use.
- Where the site has been marketed, provide details of the marketing exercise: duration, marketing agents appointed, advertising media, asking price/rent, summary of interest received.
- Where marketing evidence has not been provided, flag "[MARKETING EVIDENCE REQUIRED -- local plan policy typically requires marketing for [X] months/years at a realistic price]".

### 5. Demand Forecasting (400-800 words)
- Present the forecast demand for employment land in the local authority area:
  - **Labour demand forecasting**: Use published economic forecasts (Experian, Oxford Economics, Cambridge Econometrics) to project employment change by sector, converted to floorspace and land requirements using the HCA Employment Densities Guide.
  - **Past trends**: Analyse past take-up of employment land (completions data from the Annual Monitoring Report) and project forward.
  - **Comparison of methods**: Compare the results of labour demand and past trends approaches and explain any discrepancies.
  - **Flexibility margin**: Apply a flexibility margin (typically 2 years' supply or 10-20%) to provide choice and flexibility in the market.
- Present the demand forecast by use class:
  - Offices (Use Class E(g)(i)/(ii)/(iii)).
  - General industrial (Use Class B2).
  - Storage and distribution (Use Class B8).
- Compare the forecast demand with the existing supply (from Section 3) to determine the quantitative surplus or deficit.
- Assess whether the loss of the application site would create or exacerbate a shortfall in employment land supply.
- Reference the local authority's own demand forecasts from the ELR/ENA and explain any differences.

### 6. Site Assessment (400-800 words)
- Assess the suitability of the application site for continued or future employment use against recognised criteria:
  - **Strategic access**: Proximity and quality of access to the strategic road network, motorway junctions, and port/rail freight facilities.
  - **Local access and servicing**: Quality of local road access, HGV routing, servicing arrangements, and internal site circulation.
  - **Public transport accessibility**: Bus, rail, and active travel access for employees.
  - **Site characteristics**: Size, shape, topography, levels, and configuration. Whether the site can accommodate modern employment buildings (clear spans, eaves heights, yard depths, parking ratios).
  - **Environmental constraints**: Flood risk, contamination, ecology, heritage, noise, and air quality constraints that would limit employment development or increase costs.
  - **Neighbouring uses**: Compatibility with surrounding land uses, particularly residential amenity issues (noise, traffic, odour, hours of operation).
  - **Market attractiveness**: How the site performs relative to competing employment locations in the area. Agent assessment of the site's market appeal.
  - **Building condition**: For existing buildings, the condition, specification (floor loading, eaves height, power supply, column spacing), and investment required for modernisation or re-use.
  - **Viability**: Whether employment redevelopment of the site is commercially viable, considering land values, construction costs, and achievable rents.
- Provide an overall qualitative assessment of the site's suitability for employment: good, moderate, or poor.
- Reference the ELR site assessment where the site has been assessed.

### 7. Loss of Employment Land Justification (500-1000 words)
- Where the proposal involves the loss of employment land, demonstrate compliance with the relevant local plan policy criteria:
  - **Marketing evidence**: Demonstrate that the site has been actively marketed for employment use for the required period (typically 12-24 months) at a realistic price, without attracting a viable employment occupier or developer. Present a marketing summary including: agent, media, duration, asking price/rent, enquiries, viewings, offers, reasons for failure.
  - **No reasonable prospect**: Based on the market assessment and site assessment, conclude that there is no reasonable prospect of the site being used for employment purposes.
  - **No adverse impact on supply**: Demonstrate that the loss of the site will not result in a significant shortfall in employment land supply when assessed against forecast demand and existing supply.
  - **Alternative provision**: Where replacement employment provision is required by policy, set out the alternative employment provision or explain why it is not necessary.
  - **Regeneration benefits**: Where applicable, demonstrate that the alternative use (typically residential) will deliver regeneration benefits that outweigh the loss of employment land (e.g., remediation of contaminated land, removal of bad neighbour uses, improved design and public realm).
  - **Viability**: Where relevant, demonstrate that employment redevelopment is not commercially viable (supported by a viability appraisal or market evidence).
- Address each criterion of the local plan policy sequentially and provide a clear conclusion on each.
- If any criterion is not fully met, explain the mitigating circumstances and why the overall balance favours release.

### 8. Replacement Provision (300-600 words)
- Where the local plan requires replacement employment provision:
  - Set out the policy requirement and the quantum of replacement floorspace or land expected.
  - Describe any replacement employment provision within the proposed scheme (e.g., ground-floor commercial units, flexible workspace, managed workspace).
  - Quantify the replacement provision: floorspace (sq m GIA/NIA), use class, and anticipated employment.
  - If no on-site replacement is proposed, justify this by reference to the market assessment (demonstrating that additional employment floorspace is not needed or would not be viable) and identify alternative sites within the borough that can accommodate displaced employment uses.
  - Address any transitional arrangements for existing tenants (relocation assistance, notice periods, alternative premises).
- If replacement provision is not required by policy or is not applicable, state this briefly.

### 9. Conclusion (400-700 words)
- Summarise the key findings:
  - Policy context and the criteria for release of employment land.
  - Existing employment land supply position (surplus or deficit).
  - Market conditions and the site's market performance.
  - Demand forecasts and the impact of the site's loss on future supply.
  - Site assessment and suitability for continued employment use.
  - Marketing evidence and the absence of viable employment demand.
  - Compliance with each criterion of the local plan employment policy.
- Conclude whether the loss of employment land is justified and acceptable in planning terms.
- Where new employment land is proposed, confirm that the need is demonstrated and the site is suitable.
- State that the employment land considerations support the grant of planning permission.
- Note any recommended conditions or obligations: local labour agreement, skills plan, relocation assistance for existing tenants.

## Quality Standards

- Reference NPPF Paragraphs 81-83 and 122 by specific number.
- Reference the specific local plan employment policy criteria for release of employment land.
- Reference the local authority's Employment Land Review / Economic Needs Assessment.
- Use HCA Employment Densities Guide (3rd Edition, 2015) benchmarks with specific values.
- Present quantitative data in tables (supply, demand, vacancy, take-up, market data).
- Include marketing evidence details (duration, agent, media, price, enquiries) or flag as required.
- Apply recognised demand forecasting methodologies (labour demand and/or past trends).
- Assess the site against recognised suitability criteria.
- Address each local plan policy criterion sequentially.
- Where data has not been provided, clearly flag as "[DATA TO BE INSERTED]" rather than fabricating.
- Professional planning and economic language throughout; evidence-based, not promotional.
- Distinguish between the quantitative and qualitative employment land assessment.`;

export const ELA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site description, current/last use, proposed development, and relevant policy.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the ELA purpose and role. Identify the site, current/last use, area, floorspace, and building condition. Summarise the proposal and change of use. Identify the relevant local plan employment policy. Note any pre-application advice. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF economic policies, local plan employment policies, ELR/ENA, and LEP strategies.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Set out NPPF Paragraphs 81-83 and 122. Reference PPG on economic needs and employment land reviews. Set out local plan employment protection policies and release criteria in detail. Reference the ELR/ENA and the site\'s categorisation. Reference the LEP Strategic Economic Plan.',
  },
  {
    name: 'Existing Employment Land Supply',
    description: 'Allocated sites, committed schemes, existing stock, vacancy, completions, and losses.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present the employment land supply: allocations (location, area, use class, status), committed schemes with permission, existing stock by type, vacancy rates vs frictional rate (5-8%), recent completions and losses. Identify the quantitative supply-demand balance. Note the application site\'s position in the supply.',
  },
  {
    name: 'Market Assessment',
    description: 'Commercial property market analysis: availability, take-up, rents, yields, and site-specific marketing.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Present market data for offices, industrial, and warehouse sectors: availability, take-up, rents, yields, trends. Assess the application site specifically: occupancy, rental levels, marketing history, building condition, marketability. Reference CoStar, EGi, local agent reports. Flag if marketing evidence is not provided.',
    subsections: [
      {
        name: 'Office Market',
        description: 'Office availability, take-up, rents, yields, and recent transactions.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Present office availability, take-up, asking/achieved rents, yields, quality grading, and trends.',
      },
      {
        name: 'Industrial and Warehouse Market',
        description: 'Industrial and logistics availability, take-up, rents, yields, and unit size analysis.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Present industrial/warehouse availability, take-up, rents, yields, and unit size analysis.',
      },
      {
        name: 'Site-Specific Market Performance',
        description: 'Marketing history, occupancy, rental levels, and agent assessment for the application site.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Present the site\'s marketing history, enquiries, duration, asking price. Assess building condition and marketability. Include agent assessment or flag as required.',
      },
    ],
  },
  {
    name: 'Demand Forecasting',
    description: 'Labour demand forecasting, past trends analysis, and supply-demand comparison.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present labour demand forecasts (Experian/Oxford Economics) converted to floorspace using HCA densities. Present past trends (completions data). Compare methods. Apply flexibility margin. Present demand by use class. Compare with supply. Assess impact of site loss on supply balance. Reference the ELR/ENA forecasts.',
  },
  {
    name: 'Site Assessment',
    description: 'Suitability assessment: access, transport, site characteristics, constraints, market attractiveness, and viability.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Assess the site against: strategic and local access, public transport, site characteristics (size, shape, topography), environmental constraints, neighbouring uses, market attractiveness, building condition and specification, and viability. Provide an overall suitability rating. Reference the ELR site assessment if available.',
  },
  {
    name: 'Loss of Employment Land Justification',
    description: 'Assessment against local plan release criteria: marketing, supply impact, viability, and regeneration.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Address each local plan criterion: marketing evidence (duration, agent, media, price, enquiries), no reasonable prospect of employment use, no adverse supply impact, alternative provision, regeneration benefits, and viability. Provide a clear conclusion on each criterion. Explain mitigating circumstances where criteria are not fully met.',
  },
  {
    name: 'Replacement Provision',
    description: 'Replacement employment floorspace, alternative sites, and transitional arrangements.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out the policy requirement for replacement provision. Describe any on-site replacement (floorspace, use class, employment). If no replacement is proposed, justify by reference to market evidence and alternative sites. Address transitional arrangements for existing tenants. If not applicable, state briefly.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of findings, policy compliance, and employment land justification.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise policy context, supply position, market conditions, demand forecasts, site assessment, marketing evidence, and policy compliance. Conclude whether the loss is justified and acceptable. Confirm policy compliance. Note recommended conditions/obligations.',
  },
];

export const ELA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Existing Employment Land Supply',
    'Market Assessment',
    'Demand Forecasting',
    'Site Assessment',
    'Loss of Employment Land Justification',
    'Replacement Provision',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const ELA_TEMPLATE = {
  assessment_type: 'Employment Land Assessment',
  short_name: 'ELA',
  version: 1,
  sections: ELA_SECTIONS,
  quality_criteria: ELA_QUALITY,
};
