import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Retail Impact Assessment (RIA) -- required for retail and leisure
 * development proposals outside of existing town centres that exceed
 * the relevant locally set floorspace threshold, or the default 2,500 sq m
 * threshold set out in the NPPF, to assess the impact on existing,
 * committed, and planned town centre investment.
 */

export const RIA_PROMPT = `You are preparing a Retail Impact Assessment (RIA) to accompany a planning application for retail or leisure development submitted to a local planning authority in England. The RIA assesses the impact of the proposed development on existing, committed, and planned public and private investment in town centres, and on the vitality and viability of town centres within the catchment area of the proposal.

## Document Purpose

A Retail Impact Assessment is required by NPPF Paragraph 90 for retail and leisure development outside town centres that is not in accordance with an up-to-date plan and exceeds the proportionate, locally set floorspace threshold (or the default 2,500 sq m threshold where no local threshold is set). The RIA must:
- Define the catchment area of the proposed development and the town centres within it.
- Assess the current health and vitality of relevant town centres.
- Estimate the trade draw of the proposed development and from where that trade will be drawn.
- Assess the trade diversion impact on existing town centre stores and facilities.
- Assess the impact on planned and committed town centre investment.
- Assess whether the proposal would result in a significant adverse impact on town centre vitality and viability.
- Address cumulative impact taking account of other committed and planned developments.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 86**: Planning policies should define a network and hierarchy of town centres and promote their long-term vitality and viability -- by allowing them to grow and diversify in a way that can respond to rapid changes in the retail and leisure industries.
- **Paragraph 87**: Local planning authorities should apply a sequential test to planning applications for main town centre uses which are neither in an existing centre nor in accordance with an up-to-date plan. Main town centre uses should be located in town centres, then in edge of centre locations; and only if suitable sites are not available (or expected to become available within a reasonable period) should out of centre sites be considered.
- **Paragraph 88**: When considering edge of centre and out of centre proposals, preference should be given to accessible sites which are well connected to the town centre. Applicants and LPAs should demonstrate flexibility on issues such as format and scale.
- **Paragraph 89**: The sequential test should not be required for applications for small scale rural offices or other small scale rural development.
- **Paragraph 90**: When assessing applications for retail and leisure development outside town centres, which are not in accordance with an up-to-date plan, local planning authorities should require an impact assessment if the development is over a proportionate, locally set floorspace threshold (or the default threshold of 2,500 sq m). This should include assessment of:
  (a) the impact of the proposal on existing, committed and planned public and private investment in a centre or centres in the catchment area of the proposal; and
  (b) the impact of the proposal on town centre vitality and viability, including local consumer choice and trade in the town centre and the wider retail catchment (as applicable to the scale and nature of the scheme).
- **Paragraph 91**: Where an application fails to satisfy the sequential test or is likely to have significant adverse impact on one or more of the considerations in Paragraph 90, it should be refused.

### Planning Practice Guidance (PPG): Town Centres and Retail
- Definition of main town centre uses.
- Guidance on applying the sequential test.
- Guidance on the impact test and what constitutes "significant adverse impact."
- Town centre health check indicators: diversity of uses, vacancy rates, commercial yields, pedestrian flows, accessibility, customer/resident perception, environmental quality, retailer representation, commercial rents, intention to invest, state of town centre environmental quality.
- Guidance on defining catchment areas and trade draw.

### Other Key References
- Use Classes Order (as amended): Class E (Commercial, Business and Service), Sui Generis uses.
- Retail studies and town centre evidence base documents commissioned by the LPA.
- Retail floorspace capacity studies.
- Experian / Oxford Economics / Pitney Bowes expenditure data and population projections.
- GOAD plans and town centre mapping.
- Verdict / GlobalData / Mintel retail market reports.
- Town centre health check data published by the LPA.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the RIA and the NPPF Paragraph 90 requirement.
- Identify the site, the proposed development (use, gross floor area, net sales area, type of goods/services).
- State whether the development is in-centre, edge-of-centre, or out-of-centre.
- Note the locally set impact threshold (if any) and confirm the RIA is required.
- State the assessment year(s) (typically the anticipated year of opening and a design year 5-10 years hence).
- Note any relevant pre-application advice or retail evidence base documents.
- Outline the document structure.

### 2. Policy Framework (400-800 words)
- Set out NPPF Paragraphs 86-91 in full.
- Set out the PPG guidance on the impact test and town centre health check indicators.
- Set out relevant local plan retail policies, including:
  - Retail hierarchy and defined centres.
  - Primary shopping areas and primary/secondary frontages.
  - Locally set impact threshold (if different from 2,500 sq m).
  - Policies on out-of-centre retail development.
- Reference the local authority's retail evidence base: retail capacity study, town centre strategy, retail needs assessment.
- Explain the relationship between the sequential test and the impact test (the RIA addresses the impact test; the sequential test is usually addressed separately or within the Planning Statement).

### 3. Catchment Area Definition (300-600 words)
- Define the primary and secondary catchment areas of the proposed development.
- Justify the catchment area boundaries by reference to:
  - Drive-time isochrones (typically 10, 15, 20 minutes).
  - Physical barriers (rivers, motorways, topography).
  - Competing retail destinations and their influence.
  - Population distribution and settlement patterns.
  - The nature of the proposed retail offer (convenience vs comparison goods; the former typically has a smaller catchment).
- Quantify the catchment population (current and projected to the assessment year) using ONS / Experian population data.
- Identify the town centres and retail parks within the catchment area.
- Present a catchment area plan.

### 4. Retail Market Analysis (600-1200 words)
#### 4.1 Expenditure Analysis
- Set out the available retail expenditure within the catchment area, split by:
  - Convenience goods expenditure per capita and total.
  - Comparison goods expenditure per capita and total (sub-divided by category where appropriate: clothing, bulky goods, electrical, etc.).
  - Leisure expenditure where relevant (food and beverage, cinema, gym).
- Apply growth rates to project expenditure to the assessment year(s).
- Identify Special Forms of Trading (SFT) / online retail deductions.
- Reference the data source (Experian, Oxford Economics, Pitney Bowes).

#### 4.2 Town Centre Health Checks
For each town centre within the catchment area, assess the following health check indicators (per PPG):
- **Diversity of uses**: Mix of retail, leisure, service, and office uses.
- **Vacancy rates**: Number and percentage of vacant units compared with national average.
- **Retailer representation**: Presence of national multiples, independent retailers, market.
- **Pedestrian flows**: Observed footfall levels (where data is available).
- **Environmental quality**: Maintenance, public realm, cleanliness, safety.
- **Accessibility**: Public transport, parking, pedestrian/cycle access.
- **Commercial performance**: Rental levels, yields, demand from operators.
- **Customer and resident perception**: Survey data where available.
- Provide an overall assessment of vitality and viability for each centre: healthy, reasonably healthy, showing signs of stress, or unhealthy.

#### 4.3 Existing Retail Provision
- Describe the existing retail floorspace within the catchment, by centre and by type (convenience, comparison, service).
- Identify committed retail developments (schemes with planning permission but not yet built).
- Identify planned retail developments (allocated sites and emerging proposals).
- Reference GOAD plans, VOA data, and local authority monitoring where available.

### 5. Trade Draw Assessment (500-1000 words)
- Estimate the turnover of the proposed development at the assessment year.
- State the turnover assumptions: sales density (turnover per sq m of net sales area) based on company average or published benchmarks.
- Estimate the trade draw pattern: the percentage of the proposed development's turnover that will be drawn from each zone within the catchment area and from beyond the catchment.
- Estimate the sources of trade: what proportion will be drawn from:
  - Existing town centre stores (trade diversion).
  - Existing out-of-centre/retail park stores.
  - Expenditure currently leaking from the catchment (claw-back).
  - Expenditure growth (new spending not currently being captured).
  - Passing trade / inflow from beyond the catchment.
- Justify the trade draw assumptions by reference to the nature of the proposed retail offer, competing destinations, accessibility, and catchment demographics.
- Present the trade draw analysis in a tabular format.

### 6. Impact on Town Centres (800-1500 words)
#### 6.1 Impact on Existing Investment
- Quantify the trade diversion from each affected town centre (absolute and percentage of estimated town centre turnover).
- Assess whether the level of trade diversion would affect the trading performance of key anchor stores or facilities.
- Assess whether the trade diversion would result in increased vacancy or reduced investment confidence.
- Consider the resilience of each centre: a healthy centre can absorb more impact than a centre already under stress.

#### 6.2 Impact on Planned and Committed Investment (NPPF Paragraph 90(a))
- Identify any planned or committed public or private investment in each affected centre.
- Assess whether the proposed development would undermine that investment by reducing its viability or attractiveness.
- Where specific town centre investment projects are identified, assess the impact on their business case.

#### 6.3 Impact on Vitality and Viability (NPPF Paragraph 90(b))
- Assess the overall impact on each town centre's vitality and viability, considering:
  - Trade diversion levels (quantitative analysis).
  - Town centre health (qualitative assessment).
  - Vulnerability of specific sectors or occupiers.
  - Consumer choice and competition effects (beneficial impacts).
  - Retention of expenditure within the catchment (beneficial impacts).
- Conclude whether the impact would be "significant adverse" within the meaning of NPPF Paragraph 91.
- Where the impact is considered less than significant adverse, explain why the centres can absorb the diversion.

### 7. Cumulative Impact (400-800 words)
- Identify other committed and proposed out-of-centre retail developments within the catchment area.
- Assess the cumulative trade diversion from the proposed development in combination with these schemes.
- Assess whether the cumulative impact would result in a significant adverse impact on any town centre.
- Where cumulative impact is identified, consider whether conditions could mitigate the impact (e.g., restrictions on range of goods, floorspace caps).

### 8. Conclusion (400-700 words)
- Summarise the catchment area and retail market context.
- Summarise the trade draw and impact on each affected town centre.
- State the conclusion on NPPF Paragraph 90(a): impact on existing, committed, and planned investment.
- State the conclusion on NPPF Paragraph 90(b): impact on town centre vitality and viability.
- State whether the proposal would result in a significant adverse impact (the NPPF Paragraph 91 test).
- Note any positive impacts: consumer choice, expenditure retention, competition, employment.
- Conclude that the impact test is passed and the proposal is acceptable in retail impact terms.

## Quality Standards

- Reference NPPF Paragraphs 86-91 by specific number.
- Reference the PPG town centre health check indicators.
- Quantify trade draw and impact in monetary terms (or clearly flag "[DATA TO BE INSERTED]").
- Use recognised expenditure data sources (Experian, Oxford Economics, Pitney Bowes).
- Present the analysis in tabular format where appropriate (expenditure, trade draw, impact).
- Apply the "significant adverse impact" test correctly (NPPF Paragraph 91).
- Distinguish between convenience and comparison goods impacts.
- Address both existing investment and planned/committed investment impacts.
- Address cumulative impact from other committed retail schemes.
- Professional retail planning language throughout; no marketing of the proposed development.
- Where quantitative data has not been obtained, clearly flag and state that a full retail impact assessment requires commissioned expenditure and turnover data.`;

export const RIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, development, floor areas, location classification, and assessment year.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the RIA purpose and NPPF Paragraph 90 requirement. Identify the site and development (use, GIA, net sales area). Classify as in-centre, edge-of-centre, or out-of-centre. State the locally set threshold. State the assessment year(s).',
  },
  {
    name: 'Policy Framework',
    description: 'National and local retail planning policy, hierarchy, and evidence base.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out NPPF Paragraphs 86-91. Set out PPG impact test guidance. List local plan retail policies, hierarchy, and defined centres. Reference the local retail evidence base. Explain the sequential test and impact test relationship.',
  },
  {
    name: 'Catchment Area Definition',
    description: 'Primary and secondary catchment area, population, and competing centres.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Define and justify the catchment area (drive-time isochrones, barriers, competition). Quantify catchment population. Identify town centres and retail parks. Present a catchment plan.',
  },
  {
    name: 'Retail Market Analysis',
    description: 'Expenditure analysis, town centre health checks, and existing retail provision.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Set out retail expenditure (convenience, comparison, leisure). Project to assessment year. Conduct health checks for each town centre using PPG indicators. Describe existing floorspace, committed, and planned developments.',
    subsections: [
      {
        name: 'Expenditure Analysis',
        description: 'Available retail expenditure within the catchment by category.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Set out expenditure per capita and total, by goods type. Apply growth rates. Deduct SFT/online. Reference data source.',
      },
      {
        name: 'Town Centre Health Checks',
        description: 'Assessment of each town centre using PPG health check indicators.',
        required: true,
        min_words: 250,
        max_words: 600,
        guidance: 'For each centre: diversity, vacancy, retailer representation, footfall, environment, accessibility, commercial performance. Overall assessment.',
      },
      {
        name: 'Existing Retail Provision',
        description: 'Floorspace by centre and type, committed and planned schemes.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe existing floorspace. Identify committed and planned retail developments.',
      },
    ],
  },
  {
    name: 'Trade Draw Assessment',
    description: 'Estimated turnover, trade draw pattern, and sources of trade.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Estimate proposed development turnover (sales density basis). Estimate trade draw by zone. Identify trade sources: town centre diversion, out-of-centre diversion, claw-back, growth, inflow. Justify assumptions. Present in tabular format.',
  },
  {
    name: 'Impact on Town Centres',
    description: 'Quantified impact on existing investment, planned investment, and vitality/viability.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Quantify trade diversion from each centre. Assess impact on anchor stores and vacancies. Assess impact on planned/committed investment (Paragraph 90(a)). Assess overall vitality and viability impact (Paragraph 90(b)). Conclude on significant adverse impact (Paragraph 91).',
    subsections: [
      {
        name: 'Impact on Existing Investment',
        description: 'Trade diversion and effects on existing town centre performance.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'Quantify trade diversion (absolute and percentage). Assess effects on anchors, vacancy, and investment confidence.',
      },
      {
        name: 'Impact on Planned and Committed Investment',
        description: 'Assessment of impact on identified public and private investment projects.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Identify planned/committed investment. Assess whether the proposal would undermine viability or attractiveness.',
      },
      {
        name: 'Impact on Vitality and Viability',
        description: 'Overall assessment against NPPF Paragraph 90(b) criteria.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'Assess overall impact considering quantitative diversion, health, vulnerability, consumer choice, and expenditure retention. Conclude on significant adverse impact.',
      },
    ],
  },
  {
    name: 'Cumulative Impact',
    description: 'Combined impact with other committed and proposed out-of-centre schemes.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Identify cumulative schemes. Assess cumulative trade diversion. Assess cumulative impact on each centre. Consider mitigation conditions (goods restrictions, floorspace caps).',
  },
  {
    name: 'Conclusion',
    description: 'Summary of impact, application of NPPF tests, and overall retail acceptability.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise catchment and market context. Summarise trade draw and impact on each centre. Conclude on Paragraph 90(a) and 90(b). State whether significant adverse impact arises (Paragraph 91). Note positive impacts. Conclude the impact test is passed.',
  },
];

export const RIA_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Catchment Area Definition',
    'Retail Market Analysis',
    'Trade Draw Assessment',
    'Impact on Town Centres',
    'Cumulative Impact',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const RIA_TEMPLATE = {
  assessment_type: 'Retail Impact Assessment',
  short_name: 'RIA',
  version: 1,
  sections: RIA_SECTIONS,
  quality_criteria: RIA_QUALITY,
};
