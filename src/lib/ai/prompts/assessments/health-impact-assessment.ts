import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Health Impact Assessment (HIA) -- required for major developments to
 * assess the potential health impacts across the wider determinants of
 * health (housing, employment, transport, environment, social cohesion)
 * and to demonstrate that the development promotes healthy places and
 * addresses health inequalities.
 */

export const HIA_PROMPT = `You are preparing a Health Impact Assessment (HIA) to accompany a planning application for a major development submitted to a local planning authority in England. The HIA should read as though prepared by a competent public health consultant or planning professional with expertise in health impact assessment methodology, the wider determinants of health, and UK planning policy for healthy places.

## Document Purpose

A Health Impact Assessment systematically evaluates the potential health effects of a proposed development on the surrounding population, both during construction and operation. It is used to identify positive and negative health impacts, propose mitigation and enhancement measures, and demonstrate that the development promotes health and well-being in accordance with NPPF policies on healthy places. The HIA must:
1. Establish the baseline health profile of the local population using published public health data.
2. Systematically assess the impact of the development on the wider determinants of health, including housing, employment, transport, environment, access to services, social cohesion, and lifestyle.
3. Assess construction phase health impacts (dust, noise, traffic, mental health, disruption to services).
4. Assess operational phase health impacts (housing quality, access to green space, active travel, air quality, noise, social infrastructure, community safety).
5. Conduct a health equity analysis to assess differential impacts on vulnerable and disadvantaged groups.
6. Propose mitigation measures for adverse health impacts and enhancement measures to maximise health benefits.
7. Recommend a monitoring framework to track health outcomes.
8. Demonstrate compliance with NPPF policies on healthy places and relevant local plan health policies.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 92**: Planning policies and decisions should aim to achieve healthy, inclusive and safe places which promote social interaction, including opportunities for meetings between people who might not otherwise come into contact with each other -- for example through mixed-use developments, strong neighbourhood centres, street layouts that allow for easy pedestrian and cycle connections within and between neighbourhoods, and active street frontages; are safe and accessible, so that crime and disorder, and the fear of crime, do not undermine the quality of life or community cohesion; and enable and support healthy lifestyles, especially where this would address identified local health and well-being needs -- for example through the provision of safe and accessible green infrastructure, sports facilities, local shops, access to healthier food, allotments and layouts that encourage walking and cycling.
- **Paragraph 93**: To provide the social, recreational and cultural facilities and services the community needs, planning policies and decisions should plan positively for the provision and use of shared spaces, community facilities and other local services to enhance the sustainability of communities and residential environments; take into account and support the delivery of local strategies to improve health, social and cultural well-being for all sections of the community; guard against the unnecessary loss of valued facilities and services; ensure that established shops, facilities and services are able to develop and modernise; and ensure an integrated approach to considering the location of housing, economic uses and community facilities and services.
- **Paragraph 94**: It is important that a sufficient choice of school places is available to meet the needs of existing and new communities. Local planning authorities should take a proactive, positive and collaborative approach to meeting this requirement.
- **Paragraph 95**: Planning policies and decisions should promote public safety and take into account wider security and defence requirements.
- **Paragraph 96**: Access to a network of high quality open spaces and opportunities for sport and physical recreation is important for the health and well-being of communities.
- **Paragraph 97**: Existing open space, sports and recreational buildings and land, including playing fields, should not be built on unless specific criteria are met.
- **Paragraph 130**: Planning policies and decisions should ensure that developments create places that are safe, inclusive and accessible and which promote health and well-being, with a high standard of amenity for existing and future users.
- **Paragraph 185**: Planning policies and decisions should also ensure that new development is appropriate for its location taking into account the likely effects (including cumulative effects) of pollution on health, living conditions and the natural environment.

### HUDU (Healthy Urban Development Unit) Planning for Health
- **HUDU Rapid Health Impact Assessment Tool (2019)**: The principal HIA tool used in London and widely adopted elsewhere. It provides a systematic checklist-based assessment across 11 broad health themes:
  1. Housing quality and design.
  2. Access to healthcare services and other social infrastructure.
  3. Access to open space and nature.
  4. Air quality, noise and neighbourhood amenity.
  5. Accessibility and active travel.
  6. Crime reduction and community safety.
  7. Access to healthy food.
  8. Access to work and training.
  9. Social cohesion and lifetime neighbourhoods.
  10. Minimising the use of resources.
  11. Climate change.
- Each theme includes assessment criteria, evidence requirements, and suggested mitigation/enhancement measures.

### WHO / IAIA Guidance on HIA
- **WHO Gothenburg Consensus Paper (1999)**: Defines HIA as "a combination of procedures, methods and tools by which a policy, programme or project may be judged as to its potential effects on the health of a population, and the distribution of those effects within the population."
- **IAIA Best Practice Principles for HIA (2006)**: Establishes the principles of democracy, equity, sustainable development, and ethical use of evidence in HIA.
- **WHO Health in All Policies (HiAP)**: Framework for integrating health considerations into planning and policy-making.

### Health and Social Care Act 2012
- Established Health and Wellbeing Boards and Joint Strategic Needs Assessments (JSNAs).
- Gave local authorities responsibility for public health, including assessing the health impacts of planning decisions.
- Section 12: duty on local authorities to take steps to improve public health.

### Other Key References
- **Joint Strategic Needs Assessment (JSNA)**: The local evidence base on health needs, produced by the Health and Wellbeing Board. Contains data on health outcomes, deprivation, lifestyle factors, and service capacity.
- **Director of Public Health Annual Report**: Local assessment of public health priorities.
- **Public Health England (now OHID) Health Profile / Local Authority Health Profile**: Published health indicators by local authority.
- **PHE / OHID Wider Determinants of Health Tool**: Interactive tool for exploring wider determinants data.
- **Sport England Active Design Guidance (2015/2023)**: Principles for designing active environments.
- **NHS Healthy New Towns Programme**: Learning from the programme on designing healthier new communities.
- **Local plan health policies**: Health and wellbeing policies, healthy food and hot food takeaway policies, open space and recreation policies.
- **NICE Public Health Guidelines**: Relevant guidelines on physical activity, active travel, mental health and well-being.
- **Marmot Review (2010) and Marmot Review 10 Years On (2020)**: Evidence on health inequalities and the social determinants of health.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Health Impact Assessment and its policy basis (NPPF Paragraphs 92-97).
- Identify the site by location, local authority, and ward.
- Summarise the proposed development: use, scale (number of residential units, commercial floorspace, community facilities), anticipated population, and phasing.
- State the HIA methodology (HUDU Rapid HIA Tool or equivalent systematic assessment).
- Define the study area for the HIA (typically the ward(s) surrounding the site, or a defined catchment area for service provision).
- State the qualifications of the author or "[PREPARED BY A COMPETENT PUBLIC HEALTH / PLANNING PROFESSIONAL]".
- Note any limitations: state that the HIA uses published data and the HUDU framework, and flag where site-specific survey data has not been obtained.
- Outline the document structure.

### 2. Policy Framework (500-1000 words)
- Set out NPPF Paragraphs 92-97, 130, and 185 with a summary of the healthy places requirements.
- Reference the Health and Social Care Act 2012 and the role of the JSNA and Health and Wellbeing Board.
- Set out the relevant local plan health policies:
  - Health and wellbeing policies (requiring HIA for major developments).
  - Policies on healthy food environments (hot food takeaway restrictions).
  - Policies on open space, sport, and recreation.
  - Policies on air quality, noise, and environmental protection.
  - Policies on social infrastructure provision and community facilities.
- Reference the JSNA and Director of Public Health Annual Report.
- Reference the HUDU Rapid HIA Tool methodology and the 11 health themes.
- Reference Sport England Active Design Guidance.
- Reference the Marmot Review and its relevance to addressing health inequalities.
- Explain the relationship between HIA and Environmental Impact Assessment (EIA) where the development is EIA development.

### 3. Methodology (400-800 words)
- Describe the HIA methodology in detail:
  - Explain the HUDU Rapid HIA Tool (or equivalent) and its systematic assessment of 11 health themes.
  - Describe the screening and scoping process: how the health themes were scoped in or out based on relevance to the proposed development.
  - Describe the assessment approach:
    - **Baseline**: Establishing the existing health profile and determinants.
    - **Impact identification**: Identifying potential positive and negative health impacts for each theme.
    - **Impact assessment**: Assessing the significance of each impact based on magnitude, sensitivity, and population affected.
    - **Mitigation and enhancement**: Proposing measures to avoid, reduce, or offset adverse impacts and to enhance positive impacts.
  - Describe the significance scale used: major positive, moderate positive, minor positive, neutral/negligible, minor negative, moderate negative, major negative.
  - Describe the health equity approach: how differential impacts on vulnerable groups are identified and addressed.
  - List the data sources: JSNA, PHE Health Profile, OHID Fingertips, ONS Census, Index of Multiple Deprivation, local authority monitoring data.
  - Describe any stakeholder engagement undertaken (e.g., consultation with the Director of Public Health, NHS, CCG/ICB, Health and Wellbeing Board).

### 4. Baseline Health Profile (500-1000 words)
- Present the baseline health profile of the local population:
  - **Demographics**: Population size, age structure, ethnicity, household composition, deprivation profile (IMD overall rank and domain ranks: income, employment, health, education, barriers to housing and services, crime, living environment).
  - **General health**: Self-reported general health, life expectancy at birth (male and female), healthy life expectancy, under-75 mortality rate, excess winter deaths.
  - **Long-term conditions**: Prevalence of key long-term conditions (cardiovascular disease, respiratory disease, diabetes, obesity, mental health conditions), compared with regional and national averages.
  - **Lifestyle factors**: Smoking prevalence, physical activity levels (adults meeting Chief Medical Officer guidelines), childhood obesity (Year 6), alcohol-related admissions, diet and nutrition indicators.
  - **Mental health and well-being**: Common mental health disorders, suicide rate, social isolation indicators, well-being scores.
  - **Child health**: Infant mortality, low birth weight, breastfeeding rates, childhood immunisation rates, childhood obesity.
  - **Environmental health**: Air quality (annual mean NO2, PM2.5, PM10), noise exposure, access to green space.
  - **Access to services**: GP registration and ratio (patients per GP), distance to nearest GP/pharmacy/hospital, dental access.
  - **Social determinants**: Employment rate, unemployment rate, child poverty rate, fuel poverty, housing quality (EPC ratings, overcrowding, homelessness).
- Identify the key health challenges and priorities for the local population based on the baseline data.
- Compare local indicators with national averages and highlight where the local population performs significantly worse (or better).
- Where specific data has not been obtained, flag "[BASELINE DATA TO BE POPULATED FROM JSNA / OHID FINGERTIPS]".

### 5. Determinants of Health Assessment (800-1500 words)
- Systematically assess the impact of the proposed development on each of the wider determinants of health, using the HUDU themes or equivalent framework:

#### 5.1 Housing Quality and Design
- Assess the quality of proposed housing: compliance with Nationally Described Space Standards (NDSS), Building Regulations Approved Document M accessibility, private amenity space, natural light and ventilation, internal noise levels, overheating risk.
- Assess the tenure mix and provision of affordable housing.
- Assess the provision of accessible and adaptable housing (M4(2) and M4(3)).

#### 5.2 Access to Healthcare and Social Infrastructure
- Assess the capacity of existing healthcare services (GPs, dentists, pharmacies) to accommodate the additional population.
- Estimate the population yield and the resulting demand for GP places (using the standard ratio of 1 GP per 1,800 patients or local planning standard).
- Identify whether a new healthcare facility is required or whether S106/CIL contributions are needed for healthcare capacity.
- Cross-reference with the Social Infrastructure Assessment if prepared separately.

#### 5.3 Access to Open Space and Nature
- Assess the provision of on-site open space (play space, amenity green space, sports provision) against local plan standards.
- Assess access to existing off-site open space and nature (distance, quality, capacity).
- Assess the provision of green infrastructure and biodiversity measures and their health benefits (stress reduction, physical activity, air quality improvement).

#### 5.4 Air Quality, Noise, and Neighbourhood Amenity
- Summarise the findings of the Air Quality Assessment and Noise Impact Assessment (cross-reference where prepared).
- Assess the impact on existing and future residents' health from air pollution (NO2, PM2.5, PM10) and noise.
- Assess odour, dust, and other amenity impacts during construction and operation.

#### 5.5 Accessibility and Active Travel
- Assess the pedestrian, cycle, and public transport accessibility of the site.
- Assess the provision of active travel infrastructure: cycle parking, pedestrian routes, crossing points, cycle lanes.
- Assess the design of the development for walkability: permeability, legibility, street layout, connections to local facilities.
- Reference Sport England Active Design principles.

#### 5.6 Crime Reduction and Community Safety
- Assess the design of the development for natural surveillance, defensible space, and Secured by Design principles.
- Assess lighting, CCTV, and other safety measures.
- Assess the impact on actual and perceived crime levels.

#### 5.7 Access to Healthy Food
- Assess proximity to supermarkets, fresh food retail, allotments, and community growing spaces.
- Assess whether the development is in or near a hot food takeaway exclusion zone (if applicable under local policy).
- Assess the provision of community growing spaces or allotments within the development.

#### 5.8 Access to Work and Training
- Assess the employment opportunities created by the development (construction and operational phase).
- Assess access to existing employment centres from the site.
- Assess the provision of local employment, apprenticeship, and skills training commitments (employment and skills plan).

#### 5.9 Social Cohesion and Lifetime Neighbourhoods
- Assess the provision of community facilities, meeting spaces, and social infrastructure.
- Assess the tenure mix, housing type, and demographic diversity to promote social cohesion.
- Assess the design for inclusive communities: intergenerational design, lifetime homes, dementia-friendly design.

#### 5.10 Minimising Use of Resources and Climate Change
- Assess the energy efficiency and sustainability of the development (cross-reference with Energy Statement).
- Assess the provision of renewable energy, water efficiency, and waste minimisation.
- Assess climate change adaptation: overheating risk, flood resilience, urban heat island mitigation.

### 6. Construction Phase Health Impacts (400-800 words)
- Assess the health impacts of the construction phase on the surrounding population:
  - **Air quality**: Dust from demolition and construction activities. Cross-reference with the Air Quality Assessment and dust risk assessment.
  - **Noise and vibration**: Construction noise impacts on nearby residents and sensitive receptors. Cross-reference with the Noise Impact Assessment.
  - **Traffic**: Construction traffic impacts on road safety, severance, and pedestrian/cyclist safety. Cross-reference with the Construction Traffic Management Plan.
  - **Mental health**: Stress, anxiety, and uncertainty for neighbouring residents during the construction period (duration, disruption, loss of amenity).
  - **Disruption to services**: Temporary loss of access to facilities, services, or open space during construction.
  - **Employment**: Positive health impact from construction employment (income, skills, social contact).
- Propose mitigation measures for construction phase health impacts:
  - Construction Environmental Management Plan (CEMP).
  - Dust mitigation measures.
  - Construction working hours restrictions.
  - Construction traffic routing and management.
  - Community liaison and complaints procedure.
  - Phasing to minimise disruption.

### 7. Operational Phase Health Impacts (500-1000 words)
- Assess the operational phase health impacts, building on the determinants of health assessment:
  - Summarise the positive health impacts:
    - New housing provision (reducing overcrowding, homelessness, and housing stress).
    - Employment creation (income, social contact, purpose).
    - New open space and green infrastructure (physical activity, mental health, air quality).
    - Active travel infrastructure (physical activity, reduced car dependency).
    - Community facilities (social cohesion, access to services).
    - Affordable housing (reducing health inequalities associated with housing cost stress).
  - Summarise the negative health impacts:
    - Increased demand on healthcare and social services (if capacity is insufficient).
    - Air quality impacts from development-related traffic.
    - Noise impacts from the development or its traffic.
    - Potential for social isolation in poorly designed communities.
    - Loss of existing open space or community facilities (if applicable).
  - Assess the overall balance of positive and negative health impacts.
  - For each negative impact, confirm the mitigation measure proposed.

### 8. Health Equity Analysis (400-800 words)
- Assess the differential health impacts on vulnerable and disadvantaged groups:
  - **Children and young people**: Impact on child obesity, access to play space, school places, road safety, air quality exposure.
  - **Older people**: Impact on social isolation, access to services, mobility, falls prevention, lifetime homes.
  - **People with disabilities**: Impact on accessibility, adapted housing, access to services, inclusive design.
  - **People on low incomes / in deprivation**: Impact on affordable housing, fuel poverty, employment access, healthy food access.
  - **Black and minority ethnic communities**: Cultural sensitivity in design, access to culturally appropriate services.
  - **People with mental health conditions**: Impact of housing quality, green space, social cohesion, and construction disruption on mental well-being.
- Assess whether the development will reduce or widen health inequalities in the local area.
- Reference the Marmot Review framework: the social gradient in health, proportionate universalism, and the need for action across all social determinants.
- Recommend specific measures to promote health equity:
  - Affordable housing provision at appropriate levels.
  - Accessible and adaptable housing exceeding minimum requirements.
  - Targeted employment and skills training for disadvantaged groups.
  - Inclusive community facilities and meeting spaces.
  - Design measures to reduce barriers to physical activity and social participation.

### 9. Mitigation and Enhancement (400-800 words)
- Present a summary table of all mitigation and enhancement measures, organised by health theme:
  - For each health determinant, list:
    - The identified health impact (positive or negative).
    - The significance level (major, moderate, minor).
    - The proposed mitigation measure (for negative impacts) or enhancement measure (to maximise positive impacts).
    - The mechanism for securing the measure (design, planning condition, S106/CIL obligation, management plan).
    - The residual impact after mitigation.
- Highlight the key mitigation and enhancement measures:
  - Compliance with NDSS and accessible housing standards.
  - S106 contributions for healthcare and education capacity.
  - On-site open space and play provision.
  - Active travel infrastructure and connections.
  - Employment and skills plan.
  - CEMP for construction phase impacts.
  - Air quality and noise mitigation (cross-reference technical assessments).

### 10. Monitoring (200-400 words)
- Recommend a monitoring framework to track health outcomes:
  - **Construction phase**: Monitor dust, noise, traffic, and complaints through the CEMP.
  - **Operational phase**: Monitor key health indicators for the new population (GP registration, service uptake, physical activity levels, community cohesion).
  - **Long-term**: Review health outcomes against the baseline health profile (using JSNA updates, Health Profile data).
- Identify responsibilities for monitoring (developer, local authority, public health team, NHS/ICB).
- Recommend reporting intervals and triggers for remedial action.
- Note that monitoring requirements can be secured via planning condition or S106 agreement.

### 11. Conclusion (400-700 words)
- Summarise the baseline health profile and the key health challenges in the local area.
- Summarise the overall health impact of the proposed development:
  - State the number of positive and negative health impacts identified.
  - State the number of significant negative impacts requiring mitigation.
  - Confirm that all significant negative impacts can be effectively mitigated.
  - State the overall conclusion: the development will have a net positive impact on health and well-being.
- Confirm compliance with NPPF Paragraphs 92-97, 130, and 185.
- Confirm alignment with the JSNA priorities and Health and Wellbeing Strategy.
- Confirm compliance with relevant local plan health policies.
- List the key mitigation and enhancement measures and the mechanisms for securing them.
- Recommend that the Director of Public Health and the Health and Wellbeing Board raise no objection to the proposal.
- Conclude that the HIA demonstrates the development promotes healthy, inclusive, and safe places.

## Quality Standards

- Reference NPPF Paragraphs 92-97, 130, and 185 by specific number.
- Use the HUDU Rapid HIA Tool framework (or equivalent systematic checklist) with explicit reference.
- Reference the JSNA and local health data with specific indicators and comparisons.
- Reference the Health and Social Care Act 2012.
- Reference the Marmot Review in the health equity analysis.
- Systematically assess all wider determinants of health (not just environmental determinants).
- Conduct a health equity analysis addressing vulnerable and disadvantaged groups.
- Present mitigation and enhancement measures in a summary table.
- Cross-reference technical assessments (AQA, NIA, TA) where relevant.
- Use correct public health terminology: determinants of health, health equity, health inequalities, JSNA, DALY, life expectancy, healthy life expectancy, IMD, prevalence, incidence.
- Where specific health data has not been obtained, clearly flag as "[DATA TO BE POPULATED FROM JSNA / OHID FINGERTIPS / LOCAL PUBLIC HEALTH DATA]".
- Do not fabricate health statistics or baseline data.
- Professional public health and planning language throughout.`;

export const HIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, development summary, methodology, study area, and limitations.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the HIA purpose and NPPF basis (Paragraphs 92-97). Identify the site, local authority, and ward. Summarise the development (units, floorspace, population, phasing). State the methodology (HUDU Rapid HIA or equivalent). Define the study area. Note limitations. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF healthy places policies, Health and Social Care Act 2012, JSNA, local plan, and HIA guidance.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Set out NPPF Paragraphs 92-97, 130, 185. Reference the Health and Social Care Act 2012 and JSNA. Set out local plan health policies. Reference the HUDU Rapid HIA Tool. Reference Sport England Active Design. Reference the Marmot Review. Explain the HIA-EIA relationship where applicable.',
  },
  {
    name: 'Methodology',
    description: 'HUDU framework, screening, assessment approach, significance scale, data sources, and stakeholder engagement.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Explain the HUDU Rapid HIA Tool and its 11 themes. Describe scoping. Describe the assessment approach (baseline, impact identification, significance, mitigation). Define the significance scale. Describe the health equity approach. List data sources. Describe stakeholder engagement.',
  },
  {
    name: 'Baseline Health Profile',
    description: 'Local population demographics, health outcomes, lifestyle factors, mental health, access to services, and social determinants.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present demographics (age, ethnicity, deprivation IMD). Present health outcomes (life expectancy, long-term conditions, mortality). Present lifestyle factors (smoking, physical activity, obesity, alcohol). Present mental health indicators. Present environmental health (air quality, noise, green space). Present access to services (GP ratio, distance). Present social determinants (employment, poverty, housing). Compare with national averages. Identify key health challenges.',
  },
  {
    name: 'Determinants of Health Assessment',
    description: 'Systematic assessment across HUDU themes: housing, healthcare, open space, air/noise, active travel, safety, food, employment, cohesion, resources.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Assess each HUDU theme systematically: housing quality and design, access to healthcare, access to open space, air quality and noise, accessibility and active travel, crime reduction and safety, access to healthy food, access to work and training, social cohesion, minimising resources and climate change. Identify positive and negative impacts for each theme.',
    subsections: [
      {
        name: 'Housing Quality and Design',
        description: 'Space standards, accessibility, tenure, amenity space, and overheating.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Assess NDSS compliance, accessibility (M4(2)/M4(3)), tenure mix, affordable housing, amenity space, ventilation, and overheating.',
      },
      {
        name: 'Access to Healthcare and Social Infrastructure',
        description: 'GP capacity, dentists, pharmacies, population yield, and S106/CIL contributions.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Estimate population yield and GP demand. Assess capacity. Identify need for new facilities or contributions.',
      },
      {
        name: 'Access to Open Space, Active Travel, and Healthy Lifestyles',
        description: 'Open space provision, green infrastructure, walking/cycling, Sport England Active Design.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Assess on-site open space against standards. Assess off-site access. Assess active travel infrastructure and walkability. Reference Active Design.',
      },
      {
        name: 'Environmental Health and Amenity',
        description: 'Air quality, noise, neighbourhood amenity, and cross-reference with technical assessments.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Summarise AQA and NIA findings. Assess health impacts from pollution. Assess neighbourhood amenity.',
      },
      {
        name: 'Social Cohesion, Employment, and Equity',
        description: 'Community facilities, tenure diversity, employment, skills, healthy food, and inclusive design.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Assess community facilities, crime and safety, healthy food access, employment and training, social cohesion, and inclusive design for lifetime neighbourhoods.',
      },
    ],
  },
  {
    name: 'Construction Phase Health Impacts',
    description: 'Dust, noise, traffic, mental health, service disruption, and employment during construction.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Assess construction phase dust, noise, vibration, traffic safety, mental health, and service disruption. Cross-reference AQA, NIA, CTMP. Identify positive impact of construction employment. Propose mitigation: CEMP, hours restrictions, dust measures, community liaison.',
  },
  {
    name: 'Operational Phase Health Impacts',
    description: 'Summary of positive and negative operational health impacts and overall balance.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Summarise positive impacts: housing, employment, open space, active travel, community facilities, affordable housing. Summarise negative impacts: service demand, air quality, noise, social isolation. Assess overall balance. Confirm mitigation for each negative impact.',
  },
  {
    name: 'Health Equity Analysis',
    description: 'Differential impacts on vulnerable groups, health inequalities, Marmot framework.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Assess impacts on children, older people, disabled people, low income groups, ethnic minorities, and people with mental health conditions. Assess whether the development reduces or widens health inequalities. Reference the Marmot Review. Recommend specific health equity measures.',
  },
  {
    name: 'Mitigation and Enhancement',
    description: 'Summary table of all mitigation and enhancement measures by health theme, securing mechanisms.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present a summary table: health theme, identified impact, significance, mitigation/enhancement measure, securing mechanism (condition, S106, design), residual impact. Highlight key measures: NDSS, healthcare contributions, open space, active travel, employment and skills plan, CEMP.',
  },
  {
    name: 'Monitoring',
    description: 'Monitoring framework for construction and operational health outcomes.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Recommend construction phase monitoring (CEMP). Recommend operational monitoring (GP registration, activity, cohesion). Recommend long-term review against baseline (JSNA updates). Identify responsibilities and reporting intervals. Note securing via condition or S106.',
  },
  {
    name: 'Conclusion',
    description: 'Overall health impact summary, policy compliance, and recommendations.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise baseline health challenges. Summarise positive and negative impacts. Confirm all significant negatives are mitigated. Conclude net positive health impact. Confirm NPPF and local plan compliance. Confirm JSNA alignment. List key measures and securing mechanisms. Recommend no objection from DPH and HWBB.',
  },
];

export const HIA_QUALITY: QualityCriteria = {
  min_policy_refs: 7,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Baseline Health Profile',
    'Determinants of Health Assessment',
    'Construction Phase Health Impacts',
    'Operational Phase Health Impacts',
    'Health Equity Analysis',
    'Mitigation and Enhancement',
    'Monitoring',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const HIA_TEMPLATE = {
  assessment_type: 'Health Impact Assessment',
  short_name: 'HIA',
  version: 1,
  sections: HIA_SECTIONS,
  quality_criteria: HIA_QUALITY,
};
