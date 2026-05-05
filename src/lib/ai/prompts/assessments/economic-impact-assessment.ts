import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Economic Impact Assessment (EcIA) -- required for developments where the
 * economic benefits of the proposal are a material consideration, typically
 * major residential, commercial, mixed-use, or infrastructure schemes that
 * generate significant employment, GVA, and fiscal revenues.
 *
 * The EcIA quantifies construction and operational phase economic impacts
 * using recognised methodologies including the HCA Additionality Guide,
 * economic multipliers, and input-output analysis.
 */

export const EcIA_PROMPT = `You are preparing an Economic Impact Assessment (EcIA) to accompany a planning application submitted to a local planning authority in England. The EcIA should read as though prepared by an experienced planning economist or economic development consultant with expertise in quantifying the economic benefits and impacts of development proposals in the context of UK planning policy.

## Document Purpose

An Economic Impact Assessment quantifies the economic effects of a proposed development during both the construction and operational phases. It is used to demonstrate the economic benefits of the proposal as a material consideration in the planning balance, in accordance with NPPF Chapter 6 (Building a strong, competitive economy). The EcIA must:
1. Establish the baseline economic conditions in the local area and wider functional economic area.
2. Quantify the direct, indirect, and induced economic impacts of the construction phase (temporary jobs, construction spend, supply chain effects).
3. Quantify the direct, indirect, and induced economic impacts of the operational phase (permanent jobs, GVA contribution, business rates, Council Tax, New Homes Bonus where applicable).
4. Assess additionality -- the extent to which impacts represent genuinely new economic activity rather than displacement or substitution.
5. Identify wider economic benefits such as skills development, inward investment, regeneration effects, and contributions to strategic economic objectives.
6. Present sensitivity analysis to demonstrate the robustness of the economic modelling assumptions.
7. Demonstrate that the proposal accords with national and local economic development policies.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 81**: Planning policies and decisions should help create the conditions in which businesses can invest, expand and adapt. Significant weight should be placed on the need to support economic growth and productivity, taking into account both local business needs and wider opportunities for development.
- **Paragraph 82**: Planning policies should set out a clear economic vision and strategy which positively and proactively encourages sustainable economic growth, having regard to Local Industrial Strategies and other local policies for economic development and regeneration.
- **Paragraph 83**: Planning policies and decisions should recognise and address the specific locational requirements of different sectors. This includes making provision for clusters or networks of knowledge and data-driven, creative or high technology industries; and for storage and distribution operations at a variety of scales and in suitably accessible locations.
- **Paragraph 84**: Planning policies and decisions should enable the sustainable growth and expansion of all types of business in rural areas, both through conversion of existing buildings and well-designed new buildings; the development and diversification of agricultural and other land-based rural businesses; sustainable rural tourism and leisure developments which respect the character of the countryside; and the retention and development of accessible local services and community facilities.
- **Paragraph 85**: Planning policies and decisions should recognise that sites to meet local business and community needs in rural areas may have to be found adjacent to or beyond existing settlements, and in locations that are not well served by public transport. In these circumstances it will be important to ensure that development is sensitive to its surroundings, does not have an unacceptable impact on local roads and exploits any opportunities to make a location more sustainable.

### Planning Practice Guidance (PPG)
- **Housing and economic needs assessment**: Guidance on assessing economic development needs, labour demand, and employment land requirements.
- **Planning obligations**: Guidance on the use of planning obligations to secure economic benefits and local labour agreements.

### HCA (now Homes England) Additionality Guide (4th Edition, 2014)
The principal methodology for assessing additionality in economic impact assessments. The guide sets out a systematic framework for adjusting gross impacts to net additional impacts by accounting for:
- **Leakage**: The proportion of outputs that benefit those outside the target area.
- **Displacement**: The proportion of outputs accounted for by reduced outputs elsewhere in the target area.
- **Substitution**: Where a firm substitutes one activity for a similar one to take advantage of public sector support.
- **Multiplier effects**: Further economic activity (indirect and induced effects) associated with additional income and supplier purchases.
- **Deadweight**: What would have happened without the intervention (the reference case or counterfactual).

### ONS and Other Data Sources
- **ONS Annual Population Survey / Labour Force Survey**: Local employment and unemployment data.
- **ONS Business Register and Employment Survey (BRES)**: Employment by sector at local authority level.
- **ONS Annual Survey of Hours and Earnings (ASHE)**: Earnings data by occupation and area.
- **ONS Regional Gross Value Added**: GVA data by local authority.
- **NOMIS Labour Market Statistics**: Comprehensive labour market data portal.
- **Inter-Departmental Business Register (IDBR)**: Business counts and demographics.
- **Experian / Oxford Economics / Cambridge Econometrics**: Economic forecasting data.

### Local Plan and LEP References
- Local plan economic development policies (employment land, economic growth, town centre vitality).
- Local Enterprise Partnership (LEP) Strategic Economic Plan / Local Industrial Strategy.
- Economic Development Strategy / Economic Growth Strategy.
- Skills Strategy / Labour Market Assessment.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Economic Impact Assessment and its role in the planning balance.
- Identify the site by location, local authority area, and relevant spatial context (e.g., enterprise zone, regeneration area, LEP area).
- Summarise the proposed development: use class, quantum of development (residential units, commercial floorspace in sq m GIA/NIA), phasing, and anticipated construction period.
- State the assessment methodology (HCA Additionality Guide framework) and the study areas used (local authority, travel-to-work area, regional/national).
- Note any limitations: state that the assessment uses published data and recognised economic multipliers, and flag where assumptions have been made in the absence of site-specific data.
- State the professional context: "[PREPARED BY AN EXPERIENCED PLANNING ECONOMIST OR ECONOMIC DEVELOPMENT CONSULTANT]" or equivalent.
- Outline the document structure.

### 2. Policy Framework (500-1000 words)
- Set out NPPF Chapter 6 (Paragraphs 81-85) and explain the significant weight to be given to economic growth and productivity.
- Set out relevant PPG guidance on economic needs assessment.
- Set out the relevant local plan economic development policies, including:
  - Employment land allocations and economic growth targets.
  - Policies supporting inward investment, skills development, and economic regeneration.
  - Town centre and retail policies where relevant.
- Summarise the LEP Strategic Economic Plan / Local Industrial Strategy, including priority sectors and growth targets.
- Reference the local authority's Economic Development Strategy and any relevant regeneration frameworks.
- Explain how the proposed development aligns with these strategic economic objectives.

### 3. Methodology (400-800 words)
- Describe the economic impact assessment methodology in detail:
  - Explain the HCA Additionality Guide framework and the sequential adjustments from gross to net additional impacts.
  - Define the study areas: the target area (local authority district), the wider area (county/sub-region/travel-to-work area), and national level.
  - Explain the distinction between construction phase (temporary) and operational phase (permanent) impacts.
  - Set out the categories of impact assessed:
    - **Direct impacts**: Jobs and GVA created directly by the development.
    - **Indirect impacts**: Supply chain effects (Type I multiplier).
    - **Induced impacts**: Household spending effects from wages earned (Type II multiplier).
  - State the multiplier values used and their source (ONS Input-Output tables, Scottish Government Input-Output tables, or published sector-specific multipliers).
  - Explain the approach to estimating fiscal impacts (Council Tax, business rates, New Homes Bonus).
  - State any key assumptions and data sources.

### 4. Baseline Economic Conditions (500-1000 words)
- Present the baseline economic profile of the local area and wider functional economic area using published ONS and NOMIS data:
  - **Population**: Current population and recent growth trends.
  - **Economic activity and employment**: Economically active population, employment rate, unemployment rate, claimant count (compared with regional and national averages).
  - **Employment by sector**: Sectoral composition of employment (BRES data), identifying key sectors and any over- or under-representation relative to national averages.
  - **GVA and productivity**: GVA per head and per worker, productivity trends compared with national average.
  - **Earnings**: Median earnings (resident-based and workplace-based from ASHE), earnings gap with national average.
  - **Business base**: Number of businesses by size and sector, business formation and survival rates.
  - **Deprivation**: Index of Multiple Deprivation (IMD) ranking, including the employment and income domains.
  - **Skills**: Qualification levels of the working-age population (NVQ equivalents), skills gaps and shortages identified in local skills assessments.
- Identify any economic challenges or opportunities that the proposed development could address (e.g., unemployment, low GVA, sectoral decline, regeneration needs).
- Where specific data has not been sourced, flag "[LOCAL ECONOMIC DATA TO BE INSERTED FROM ONS/NOMIS]" and provide the methodology for populating.

### 5. Construction Phase Impacts (600-1200 words)
- Estimate the total construction cost of the proposed development (or use published benchmarks such as BCIS data or industry estimates per unit/per sq m).
- Calculate the gross direct construction employment:
  - Use the recognised methodology: total construction spend divided by average annual output per construction worker (typically sourced from ONS construction output data).
  - Express in person-years of employment and FTE jobs per annum over the construction period.
- Apply the HCA additionality adjustments:
  - **Leakage**: Estimate the proportion of construction workers who will reside outside the target area (typically 10-30% depending on local labour supply and project scale).
  - **Displacement**: Estimate the extent to which the construction activity displaces other construction projects (typically low for major schemes where there is capacity in the construction sector).
  - **Substitution**: Typically zero for private development projects.
  - **Deadweight**: Assess what construction activity would occur on the site without the proposed development (typically the counterfactual is no development or a lower-value scheme).
- Calculate the net additional direct construction employment.
- Apply multipliers to estimate indirect and induced employment:
  - **Type I multiplier** (supply chain effects): typically 1.4-1.8 for construction.
  - **Type II multiplier** (supply chain plus household spending): typically 2.0-2.8 for construction.
  - State the multiplier source.
- Calculate the gross and net additional total construction employment (direct + indirect + induced).
- Estimate the GVA contribution from construction phase employment (using sector-average GVA per worker from ONS data).
- Describe qualitative construction benefits: apprenticeship opportunities, local procurement, skills development.
- Flag any local labour agreement or employment and skills plan that could be secured via planning condition or Section 106.

### 6. Operational Phase Impacts (600-1200 words)
- Estimate the gross direct operational employment:
  - For commercial/employment uses: apply employment density benchmarks (HCA Employment Densities Guide, 3rd Edition, 2015) to the proposed net internal area (NIA) by use class:
    - Offices (Use Class E(g)(i)): typically 1 FTE per 8-13 sq m NIA.
    - Industrial (Use Class B2): typically 1 FTE per 36 sq m NIA.
    - Warehousing (Use Class B8): typically 1 FTE per 70-95 sq m NIA.
    - Retail (Use Class E(a)): typically 1 FTE per 15-20 sq m NIA.
    - Food and beverage (Use Class E(b)): typically 1 FTE per 15-20 sq m NIA.
    - Other use classes as appropriate.
  - For residential uses: estimate population yield (using local authority or published household size data), economically active population, and the resulting demand for local services employment.
  - State the employment density source and the assumed NIA (or flag "[FLOORSPACE DATA TO BE CONFIRMED]").
- Apply the HCA additionality adjustments:
  - **Leakage**: Proportion of employees residing outside the target area (typically 15-40% depending on travel-to-work patterns).
  - **Displacement**: Proportion of jobs that displace employment from competing businesses in the target area (varies by sector: typically 10-40%).
  - **Substitution**: Typically zero for new development.
  - **Deadweight**: What would have happened on the site without the proposal.
- Calculate the net additional direct operational employment.
- Apply multipliers:
  - State sector-appropriate Type I and Type II multipliers from ONS Input-Output tables.
  - Calculate indirect and induced employment.
- Calculate total net additional operational employment (direct + indirect + induced).
- Estimate the GVA contribution from operational employment (sector-average GVA per worker).
- Where applicable, estimate the resident spending power associated with new households (average household expenditure from ONS Family Spending Survey).

### 7. Fiscal Impacts (400-800 words)
- Estimate the fiscal revenues generated by the development:
  - **Council Tax**: Number of residential units multiplied by the average Council Tax per dwelling (by band, using the local authority's Council Tax schedule). State the annual Council Tax revenue.
  - **Business Rates (NNDR)**: Estimate the rateable value of commercial floorspace (using VOA published rateable values for comparable properties or standardised rates per sq m). Calculate the annual business rates yield using the applicable multiplier. Note that the local authority retains a proportion (currently 50% under the business rates retention scheme, or more under pilot arrangements).
  - **New Homes Bonus**: Where applicable, estimate the New Homes Bonus payments generated by the residential units (note the scheme's current status and any time-limited nature).
  - **Community Infrastructure Levy (CIL)**: If the LPA has an adopted CIL charging schedule, estimate the CIL contribution (chargeable floor area multiplied by the applicable rate, indexed).
  - **Section 106 contributions**: Summarise anticipated Section 106 obligations (affordable housing, education, healthcare, transport, open space) and their value.
  - **Other fiscal benefits**: Stamp Duty Land Tax from sales, income tax and National Insurance from new employment (where relevant to demonstrate national fiscal impact).
- Present fiscal impacts in a summary table showing annual and cumulative (e.g., 10-year) revenues.
- Note that fiscal impacts represent a benefit to the public purse that should be weighed in the planning balance.

### 8. Wider Economic Benefits (400-800 words)
- Describe the wider economic benefits of the development that are not fully captured in the quantitative analysis:
  - **Regeneration effects**: Catalytic effects on the surrounding area, improved perceptions, increased land values, and stimulation of further investment.
  - **Supply chain development**: Opportunities for local businesses to supply goods and services during construction and operation.
  - **Skills and training**: Apprenticeship places, training programmes, employment and skills plans (secured via S106 or planning condition).
  - **Inward investment**: The development's role in attracting further business investment to the area.
  - **Housing delivery**: Contribution to the local housing land supply and meeting housing need (where applicable).
  - **Town centre vitality**: Where relevant, the contribution of the development's population or commercial activity to supporting nearby town centres.
  - **Social value**: Community benefits, improved local facilities, enhanced public realm.
  - **Strategic alignment**: Contribution to LEP priorities, Local Industrial Strategy objectives, and levelling up goals.
- Where possible, provide evidence from comparable developments to support claims of wider benefits.

### 9. Sensitivity Analysis (300-600 words)
- Present a sensitivity analysis testing the robustness of the key assumptions:
  - **Low scenario**: Apply more conservative assumptions (higher leakage, higher displacement, lower multipliers, lower employment densities) to produce a lower-bound estimate.
  - **Central scenario**: The main assessment using best-estimate assumptions.
  - **High scenario**: Apply more optimistic assumptions (lower leakage, lower displacement, higher multipliers) to produce an upper-bound estimate.
- Present the sensitivity analysis results in a summary table comparing the three scenarios for:
  - Construction phase employment (gross and net additional).
  - Operational phase employment (gross and net additional).
  - GVA contribution.
  - Fiscal revenues.
- Discuss the key variables to which the results are most sensitive (typically displacement and leakage rates).
- Confirm that even under the low scenario, the development generates significant net additional economic benefits.

### 10. Conclusion (400-700 words)
- Summarise the baseline economic context and the economic challenges/opportunities addressed by the proposal.
- Summarise the headline economic impact figures:
  - Construction phase: total investment, direct FTE jobs (person-years), net additional total employment, GVA.
  - Operational phase: direct FTE jobs, net additional total employment, annual GVA contribution.
  - Fiscal: annual Council Tax, business rates, CIL/S106, and other fiscal revenues.
- State that the economic benefits represent a significant material consideration in the planning balance, attracting significant weight under NPPF Paragraph 81.
- Confirm alignment with the local plan's economic development policies and LEP/Local Industrial Strategy objectives.
- Conclude that the proposed development will deliver substantial and sustained economic benefits to the local area and wider economy.
- Note any recommended conditions or obligations: local employment and skills plan, local procurement strategy.

## Quality Standards

- Reference NPPF Paragraphs 81-85 by specific number.
- Apply the HCA Additionality Guide methodology (leakage, displacement, substitution, multiplier, deadweight) explicitly.
- Use recognised employment density benchmarks (HCA Employment Densities Guide, 3rd Edition, 2015) with specific values per use class.
- Use recognised economic multipliers with stated sources (ONS Input-Output tables or equivalent).
- Present data in tables where appropriate (baseline statistics, construction employment, operational employment, fiscal impacts, sensitivity analysis).
- Distinguish clearly between gross and net additional impacts.
- Distinguish clearly between direct, indirect, and induced impacts.
- Express employment in FTE jobs and person-years as appropriate.
- Reference ONS, NOMIS, and other official data sources.
- Where specific data has not been provided, clearly flag as "[DATA TO BE INSERTED]" rather than fabricating figures.
- Professional economic assessment language throughout; avoid promotional or marketing tone.
- Present sensitivity analysis to demonstrate robustness.`;

export const EcIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site context, development summary, methodology overview, and limitations.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the EcIA purpose and role in the planning balance. Identify the site and local authority area. Summarise the proposed development (use class, quantum, phasing). State the methodology (HCA Additionality Guide) and study areas. Note limitations and professional context. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF Chapter 6, local plan economic policies, LEP strategies, and economic development objectives.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Set out NPPF Paragraphs 81-85 and the significant weight given to economic growth. Reference PPG on economic needs assessment. Set out local plan economic development policies (employment land, growth targets, regeneration). Summarise the LEP Strategic Economic Plan / Local Industrial Strategy. Explain the proposal\'s alignment with strategic economic objectives.',
  },
  {
    name: 'Methodology',
    description: 'HCA Additionality Guide framework, study areas, multipliers, and data sources.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe the HCA Additionality Guide framework (leakage, displacement, substitution, multiplier, deadweight). Define study areas (local authority, TTWA, regional). Explain direct, indirect, and induced impacts. State multiplier values and sources. Explain the fiscal impact methodology. State key assumptions.',
  },
  {
    name: 'Baseline Economic Conditions',
    description: 'Local economic profile including population, employment, GVA, earnings, deprivation, and skills.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present baseline economic data from ONS/NOMIS: population, employment/unemployment rates, sectoral employment (BRES), GVA per head, median earnings (ASHE), business base, IMD ranking, qualification levels. Compare with regional and national averages. Identify economic challenges and opportunities the development addresses.',
  },
  {
    name: 'Construction Phase Impacts',
    description: 'Construction spend, direct employment, additionality adjustments, multiplier effects, and GVA.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Estimate total construction cost. Calculate gross direct construction employment (person-years and annual FTE). Apply HCA additionality adjustments (leakage, displacement, substitution, deadweight). Calculate net additional direct employment. Apply Type I and Type II multipliers. Calculate total net additional employment and GVA. Describe qualitative benefits (apprenticeships, local procurement).',
  },
  {
    name: 'Operational Phase Impacts',
    description: 'Permanent employment, additionality adjustments, multiplier effects, GVA, and resident spending.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Estimate gross direct operational employment using HCA Employment Densities Guide benchmarks by use class. Apply HCA additionality adjustments. Calculate net additional direct employment. Apply sector-appropriate multipliers. Calculate total net additional employment and GVA. Estimate resident spending power where applicable.',
  },
  {
    name: 'Fiscal Impacts',
    description: 'Council Tax, business rates, New Homes Bonus, CIL, S106 contributions, and other fiscal revenues.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Estimate annual Council Tax revenue by band. Estimate annual business rates yield from commercial floorspace. Estimate New Homes Bonus where applicable. Estimate CIL contributions. Summarise anticipated S106 obligations. Present fiscal impacts in a summary table (annual and cumulative).',
  },
  {
    name: 'Wider Economic Benefits',
    description: 'Regeneration effects, supply chain, skills, inward investment, housing delivery, and strategic alignment.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe regeneration and catalytic effects. Identify supply chain opportunities. Describe skills and training commitments. Assess inward investment potential. Note housing delivery contribution where applicable. Explain alignment with LEP priorities and levelling up goals. Provide evidence from comparable developments where possible.',
  },
  {
    name: 'Sensitivity Analysis',
    description: 'Low, central, and high scenarios testing key assumptions on employment, GVA, and fiscal impacts.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Present low, central, and high scenarios varying leakage, displacement, and multiplier assumptions. Present results in a summary table comparing construction employment, operational employment, GVA, and fiscal revenues across scenarios. Identify key sensitivities. Confirm that even the low scenario demonstrates significant economic benefits.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of headline economic impacts, policy compliance, and planning balance weight.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise baseline context and economic challenges addressed. Present headline figures: construction employment, operational employment, GVA, fiscal revenues. State that economic benefits attract significant weight under NPPF Paragraph 81. Confirm local plan and LEP alignment. Conclude the development delivers substantial economic benefits. Note recommended conditions/obligations.',
  },
];

export const EcIA_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Baseline Economic Conditions',
    'Construction Phase Impacts',
    'Operational Phase Impacts',
    'Fiscal Impacts',
    'Wider Economic Benefits',
    'Sensitivity Analysis',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const EcIA_TEMPLATE = {
  assessment_type: 'Economic Impact Assessment',
  short_name: 'EcIA',
  version: 1,
  sections: EcIA_SECTIONS,
  quality_criteria: EcIA_QUALITY,
};
