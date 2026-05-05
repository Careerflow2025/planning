import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Equalities Impact Assessment (EqIA) -- required for developments
 * where the local planning authority requires demonstration that the
 * planning decision-making process has had due regard to the Public
 * Sector Equality Duty under Section 149 of the Equality Act 2010.
 * Commonly required for major developments, public-sector-led schemes,
 * and developments with the potential to affect communities with
 * protected characteristics.
 *
 * AI Difficulty: Easy
 * Typical pages: 10-20
 *
 * This AI-generated assessment produces a desk-based equalities impact
 * assessment. Demographic data and community engagement findings should
 * be verified by the applicant or their planning/equalities consultant.
 * The output provides the legal framework, impact analysis by protected
 * characteristic, and mitigation strategy suitable as a first draft
 * for professional review.
 */

export const EqIA_PROMPT = `You are preparing an Equalities Impact Assessment (EqIA) to accompany a planning application submitted to a local planning authority in England. The assessment should read as though prepared by a planning consultant, equalities specialist, or public policy professional with expertise in equalities legislation and the Public Sector Equality Duty. Where specific local demographic data, community engagement findings, or equalities monitoring data has not been provided by the user, clearly state that local evidence should be obtained and flag data gaps as "[LOCAL DEMOGRAPHIC DATA REQUIRED]" or "[COMMUNITY ENGAGEMENT DATA REQUIRED]".

## Document Purpose

An Equalities Impact Assessment provides a systematic analysis of the potential impacts of a proposed development on people with protected characteristics as defined by the Equality Act 2010. The EqIA must:
1. Demonstrate that the decision-maker has had due regard to the Public Sector Equality Duty (PSED) under Section 149 of the Equality Act 2010.
2. Identify and assess the potential positive and negative impacts of the proposed development on each protected characteristic.
3. Consider the three limbs of the PSED: eliminating discrimination, advancing equality of opportunity, and fostering good relations between persons who share a relevant protected characteristic and persons who do not share it.
4. Set out a robust baseline analysis using demographic data, deprivation indices, and local community profiles.
5. Propose proportionate mitigation measures to address any identified negative impacts.
6. Establish a monitoring and review framework to track the effectiveness of mitigation measures.
7. Demonstrate that the development promotes inclusive design and accessible environments.

## Key Legislation and Policy References

### Equality Act 2010
- **Section 4 -- Protected Characteristics**: The nine protected characteristics are:
  (a) Age.
  (b) Disability.
  (c) Gender reassignment.
  (d) Marriage and civil partnership.
  (e) Pregnancy and maternity.
  (f) Race.
  (g) Religion or belief.
  (h) Sex.
  (i) Sexual orientation.
- **Section 6 -- Disability**: A person has a disability if they have a physical or mental impairment that has a substantial and long-term adverse effect on their ability to carry out normal day-to-day activities. This includes physical disabilities, sensory impairments, mental health conditions, learning disabilities, and long-term health conditions.
- **Section 13 -- Direct Discrimination**: A person (A) discriminates against another (B) if, because of a protected characteristic, A treats B less favourably than A treats or would treat others.
- **Section 19 -- Indirect Discrimination**: A provision, criterion, or practice that puts persons sharing a protected characteristic at a particular disadvantage compared with persons who do not share it, unless it is a proportionate means of achieving a legitimate aim.
- **Section 20 -- Duty to Make Reasonable Adjustments**: Where a provision, criterion, or practice puts a disabled person at a substantial disadvantage, there is a duty to take reasonable steps to avoid the disadvantage.
- **Section 149 -- Public Sector Equality Duty (PSED)**: A public authority must, in the exercise of its functions, have due regard to the need to:
  (a) Eliminate discrimination, harassment, victimisation, and any other conduct that is prohibited by or under the Act.
  (b) Advance equality of opportunity between persons who share a relevant protected characteristic and persons who do not share it. This involves:
    (i) Removing or minimising disadvantages suffered by persons who share a relevant protected characteristic that are connected to that characteristic.
    (ii) Taking steps to meet the needs of persons who share a relevant protected characteristic that are different from the needs of persons who do not share it.
    (iii) Encouraging persons who share a relevant protected characteristic to participate in public life or in any other activity in which participation by such persons is disproportionately low.
  (c) Foster good relations between persons who share a relevant protected characteristic and persons who do not share it. This involves having due regard to the need to:
    (i) Tackle prejudice.
    (ii) Promote understanding.
- **Section 150**: The duty applies to local planning authorities when making planning decisions. Case law has established that planning authorities must have regard to the PSED when determining planning applications (R (Bracking) v Secretary of State for Work and Pensions [2013] EWCA Civ 1345; R (Cushnie) v Secretary of State for Communities and Local Government [2019] EWHC 218 (Admin)).

### Human Rights Act 1998
- **Article 8 (Right to respect for private and family life)**: The right to respect for one's home and private life. Relevant where development affects residential amenity or displaces residents.
- **Article 14 (Prohibition of discrimination)**: The enjoyment of rights and freedoms shall be secured without discrimination on any ground. Relevant alongside the Equality Act 2010.
- **Article 1 of Protocol 1 (Protection of property)**: Every natural or legal person is entitled to the peaceful enjoyment of their possessions. Relevant where development affects property rights.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 8**: Achieving sustainable development means the planning system has three overarching objectives: economic, social, and environmental. The social objective includes fostering well-designed, beautiful and safe places, with accessible services and open spaces that reflect current and future needs and support communities' health, social and cultural well-being.
- **Paragraph 92**: Planning policies and decisions should aim to achieve healthy, inclusive, and safe places which promote social interaction, are safe and accessible, and enable and support healthy lifestyles.
- **Paragraph 130**: Planning policies and decisions should ensure that developments function well and add to the overall quality of the area, are accessible and inclusive, and create places that are safe, inclusive and accessible.
- **Paragraph 127**: Planning policies and decisions should ensure that developments create places that are safe, inclusive and accessible and which promote health and well-being, with a high standard of amenity for existing and future users.

### Planning Practice Guidance (PPG)
- **Design: process and tools**: Guidance on achieving well-designed places including consideration of inclusive design.
- **Health and wellbeing**: Guidance on how planning can promote health and wellbeing, including consideration of health inequalities and the needs of different population groups.

### London-Specific Policy (For London Boroughs)
- **London Plan (2021) Policy GG1 (Building Strong and Inclusive Communities)**: Good growth is inclusive growth. The Mayor and all planning authorities should promote equal opportunity for all Londoners.
- **London Plan Policy D5 (Inclusive Design)**: Development proposals should achieve the highest standards of accessible and inclusive design. They should be designed to enable dignified, independent access and use by all.
- **Accessible London SPG (2014)**: Detailed guidance on implementing inclusive design policies in London, including wheelchair-accessible housing (London Plan Policy D7).
- **London Plan Policy D7 (Accessible Housing)**: At least 10% of new build dwellings should meet M4(3) wheelchair user dwellings requirements. All other new build dwellings should meet M4(2) accessible and adaptable dwellings requirements.

### Building Regulations
- **Part M (Access to and use of buildings)**: Sets minimum accessibility standards for buildings.
  - **M4(1)**: Visitable dwellings (minimum standard).
  - **M4(2)**: Accessible and adaptable dwellings (can be applied by planning condition).
  - **M4(3)**: Wheelchair user dwellings (can be applied by planning condition in areas of identified need).
- **Part K (Protection from falling, collision and impact)**: Relevant to inclusive design of external spaces.

### Other Key Guidance
- **Equality and Human Rights Commission (EHRC)**: Technical guidance on the Public Sector Equality Duty (2014). Provides detailed guidance on compliance with the PSED.
- **Government Equalities Office**: Guidance on the Equality Act 2010 and the PSED.
- **Inclusive Design Standards (BS 8300:2018)**: Design of an accessible and inclusive built environment.
- **National Design Guide (2021)**: Sets out characteristics of well-designed places, including inclusivity and accessibility.
- **Index of Multiple Deprivation (IMD 2019)**: Provides deprivation data at Lower Super Output Area (LSOA) level, useful for baseline analysis.
- **Census 2021 Data**: Source of demographic data by protected characteristic at neighbourhood level.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Equalities Impact Assessment and the legal basis (Equality Act 2010, Section 149 PSED).
- Explain why an EqIA has been prepared: to assist the local planning authority in discharging its duty under Section 149 of the Equality Act 2010 when determining the planning application.
- Identify the site by full postal address and site area in hectares.
- Summarise the proposed development: number and type of dwellings (or other land use), including affordable housing, wheelchair-accessible housing, and community facilities where relevant.
- Explain the structure of the assessment and the methodology applied.
- State the author's qualifications and experience, or flag as "[PREPARED FOR REVIEW BY A QUALIFIED EQUALITIES OR PLANNING CONSULTANT]".
- Note any limitations of the assessment (e.g., reliance on published demographic data, limited community engagement data).

### 2. Legal Framework (400-700 words)
- Set out the full legal and policy framework:
  - **Equality Act 2010**: Explain the nine protected characteristics (Section 4) and the PSED (Section 149), including the three limbs: eliminating discrimination, advancing equality of opportunity, and fostering good relations. Explain the concepts of direct discrimination (Section 13), indirect discrimination (Section 19), and the duty to make reasonable adjustments (Section 20).
  - **Human Rights Act 1998**: Summarise relevant Articles (Article 8, Article 14, Article 1 of Protocol 1).
  - **Case law**: Reference key case law establishing the duty on planning authorities:
    - R (Bracking) v Secretary of State for Work and Pensions [2013] EWCA Civ 1345: The duty is a continuing one, must be exercised with rigour, and is non-delegable.
    - R (Brown) v Secretary of State for Work and Pensions [2008] EWHC 3158 (Admin): The "Brown principles" -- the duty must be exercised in substance, with rigour, and with an open mind; it is not a duty to achieve a result but to have due regard.
    - Cushnie v Secretary of State for Communities and Local Government [2019] EWHC 218 (Admin): Planning decisions must demonstrate regard to the PSED.
  - **NPPF**: Reference relevant paragraphs on inclusive design, health, and well-being (Paragraphs 8, 92, 127, 130).
  - **Local plan policies**: Reference any local plan equalities or inclusive design policies.
  - **London Plan** (if applicable): Reference Policies GG1, D5, D7 and the Accessible London SPG.
  - **Building Regulations Part M**: Reference M4(1), M4(2), M4(3) accessibility standards.
  - **EHRC Technical Guidance**: Reference the EHRC guidance on PSED compliance.

### 3. Methodology (300-500 words)
- Describe the methodology used to conduct the EqIA:
  - **Screening**: Explain how the assessment was screened to identify which protected characteristics are potentially affected by the proposed development.
  - **Data sources**: List the data sources used for the baseline analysis:
    - Census 2021 data at ward, LSOA, and borough/district level.
    - Index of Multiple Deprivation (IMD 2019).
    - Local authority Joint Strategic Needs Assessment (JSNA).
    - Local authority Housing Needs Assessment.
    - Local authority equalities monitoring data (if available).
    - Community engagement findings (if available).
    - Health profile data (Public Health England local health profiles).
  - **Impact assessment framework**: Describe the framework used to assess impacts:
    - Nature of impact: positive, negative, neutral.
    - Significance of impact: major, moderate, minor, negligible.
    - Duration: temporary (construction phase) or permanent (operational phase).
    - Likelihood: certain, likely, possible, unlikely.
    - Differential impact: whether persons with the protected characteristic are disproportionately affected compared to those without.
  - **Proportionality**: Note that the depth of analysis is proportionate to the scale and nature of the proposed development and the potential for differential impacts.
  - **Consultation**: Describe any community engagement or consultation undertaken as part of the EqIA process, or flag as "[COMMUNITY ENGAGEMENT DATA TO BE INCORPORATED]".

### 4. Baseline Analysis (500-900 words)
- Present the demographic and socio-economic baseline for the area surrounding the site:
  - **Age profile**: Age distribution of the local population compared to the borough/district and national averages. Identify concentrations of older people, children, and young people. Reference Census 2021 data.
  - **Disability**: Prevalence of disability and long-term health conditions. Reference Census 2021 data on disability and long-term health problems. Reference any local authority data on wheelchair users and people with mobility impairments. Note the IMD health and disability domain scores for the local area.
  - **Race and ethnicity**: Ethnic composition of the local population compared to borough/district averages. Identify any ethnic minority communities with specific needs. Reference Census 2021 ethnicity data.
  - **Religion and belief**: Religious composition of the local population. Identify any religious communities with specific needs (e.g., proximity to places of worship). Reference Census 2021 religion data.
  - **Sex**: Gender composition and any gender-specific considerations (e.g., women's safety, single-parent households).
  - **Gender reassignment**: Note the limited data availability for this characteristic. Reference any available data from the Census 2021 gender identity question.
  - **Sexual orientation**: Note the limited data availability. Reference any available data from the Census 2021 sexual orientation question.
  - **Marriage and civil partnership**: Household composition data. Reference Census 2021 data on household type.
  - **Pregnancy and maternity**: Birth rates and proportion of families with young children. Reference local health data.
  - **Deprivation**: IMD 2019 scores for the local area at LSOA level. Identify the most deprived domains (income, employment, education, health, crime, housing, living environment). Describe the socio-economic context.
- Present key demographic data in tables where possible.
- Where local data is not available, flag as "[LOCAL DEMOGRAPHIC DATA REQUIRED -- Census 2021 data to be obtained at LSOA/ward level]".

### 5. Impact Assessment by Protected Characteristic (800-1500 words)
For each of the nine protected characteristics, assess the potential impacts of the proposed development during both the construction and operational phases.

#### 5.1 Age
- **Older people**: Assess impacts on older residents including: noise and disturbance during construction, access disruption, accessibility of the completed development (level access, lifts, M4(2)/M4(3) compliance), proximity to services and public transport, social isolation, and provision of appropriate housing types (bungalows, sheltered housing, extra care).
- **Children and young people**: Assess impacts including: play space provision (cross-reference Play Space Assessment if prepared), school capacity, pedestrian safety, child-friendly design, and access to open space.
- **Working age adults**: Assess employment impacts during construction and operation.
- State whether the impact is positive, negative, or neutral for each age group. Rate significance and propose mitigation where impacts are negative.

#### 5.2 Disability
- Assess the impact on people with physical disabilities, sensory impairments, learning disabilities, mental health conditions, and long-term health conditions.
- Key considerations:
  - Accessibility of the public realm: step-free access, dropped kerbs, tactile paving, accessible pedestrian crossings, level surfaces.
  - Wheelchair-accessible housing: proportion of M4(3) dwellings, location within the development, proximity to accessible parking and services.
  - Accessible and adaptable housing: proportion of M4(2) dwellings.
  - Accessibility of community facilities, open spaces, and play areas.
  - Blue Badge parking provision.
  - Wayfinding and signage: clear, legible, and accessible signage (including tactile and Braille where appropriate).
  - Noise, vibration, and air quality impacts during construction on people with respiratory conditions or sensory sensitivities.
  - Impact on existing health and care facilities.
- Reference BS 8300:2018 (Design of an accessible and inclusive built environment).
- Reference Building Regulations Part M (M4(1), M4(2), M4(3)).
- Rate significance and propose mitigation.

#### 5.3 Gender Reassignment
- Assess whether the development creates any differential impact on transgender and non-binary persons.
- Key considerations: safety and personal security in the public realm, access to gender-neutral facilities, inclusive design of community spaces.
- Note the limited data availability for this characteristic.
- Rate significance.

#### 5.4 Marriage and Civil Partnership
- The PSED applies to marriage and civil partnership only in respect of eliminating discrimination (Section 149(1)(a)), not advancing equality or fostering good relations.
- Assess whether the development creates any differential impact based on marital or civil partnership status (e.g., housing allocation policies, family housing provision).
- Rate significance.

#### 5.5 Pregnancy and Maternity
- Assess impacts on pregnant women and new parents.
- Key considerations: accessibility during construction (safe pedestrian routes, clear wayfinding), pram-friendly environments (wide pavements, dropped kerbs, accessible entrances), proximity to healthcare facilities (GP surgeries, hospitals), and provision of family housing.
- Rate significance and propose mitigation.

#### 5.6 Race
- Assess whether the development creates any differential impact on people from different racial or ethnic backgrounds.
- Key considerations: displacement of existing communities, impact on ethnic minority businesses, provision of culturally appropriate community spaces, impact on places of worship or cultural facilities, construction phase impacts on areas with high ethnic minority populations, and community cohesion.
- Rate significance and propose mitigation.

#### 5.7 Religion or Belief
- Assess impacts on people of different religions or beliefs.
- Key considerations: impact on places of worship (proximity, access, noise), provision of multi-faith community spaces, impact on burial grounds or sacred sites, and cultural sensitivity in design.
- Rate significance and propose mitigation.

#### 5.8 Sex
- Assess differential impacts by sex/gender.
- Key considerations: safety and personal security in the public realm (lighting, natural surveillance, CCTV), impact on lone parents (predominantly women), childcare facility provision, and employment opportunities.
- Reference Women in Planning guidance on gender-sensitive design.
- Rate significance and propose mitigation.

#### 5.9 Sexual Orientation
- Assess whether the development creates any differential impact based on sexual orientation.
- Key considerations: safety and personal security, inclusive community spaces, and community cohesion.
- Note the limited data availability for this characteristic.
- Rate significance.

Present the impact assessment in a summary matrix table showing: protected characteristic, nature of impact (positive/negative/neutral), significance (major/moderate/minor/negligible), phase (construction/operational), and mitigation proposed.

### 6. Mitigation Measures (400-700 words)
- Set out the proposed mitigation measures to address any identified negative impacts:
  - **Design-based mitigation**: Inclusive design of buildings and public realm, M4(2) and M4(3) housing provision, accessible open spaces and play areas, wheelchair-accessible routes, dropped kerbs, tactile paving, appropriate lighting, and natural surveillance.
  - **Construction phase mitigation**: Construction management plan measures to mitigate noise, dust, vibration, and access disruption for vulnerable groups. Considerate Constructors Scheme membership. Community liaison officer. Specific mitigation for nearby care homes, schools, places of worship, and health facilities.
  - **Community engagement**: Ongoing engagement with local communities, including targeted engagement with groups representing protected characteristics. Consultation on detailed design of public spaces, play areas, and community facilities.
  - **Employment and training**: Local employment and training commitments during construction, with targeted opportunities for underrepresented groups.
  - **Community facilities**: Provision of community spaces, healthcare facilities, or educational facilities to serve the needs of the local community.
  - **Safety and security**: Secured by Design principles, well-lit pedestrian routes, CCTV where appropriate, and active frontages to create safe environments for all users.
  - **Housing allocation**: Working with registered providers to ensure accessible housing is allocated to those with identified needs.
- For each mitigation measure, identify the responsible party, timing, and mechanism for delivery (planning condition, Section 106 obligation, or voluntary commitment).
- Demonstrate that the mitigation measures are proportionate to the impacts identified.

### 7. Monitoring and Review (300-500 words)
- Set out the proposed monitoring and review framework:
  - **Monitoring objectives**: What will be monitored, when, and by whom.
  - **Construction phase monitoring**: Monitoring of construction impacts on communities with protected characteristics (noise, dust, access disruption). Role of the community liaison officer. Complaints handling process.
  - **Operational phase monitoring**: Monitoring of the effectiveness of design-based mitigation measures. Post-occupancy review of accessibility features. Monitoring of community facility usage by protected characteristic groups.
  - **Equalities monitoring data**: Collection of equalities monitoring data from residents, service users, and community facility users (with appropriate consent and data protection compliance).
  - **Review schedule**: Set out the schedule for reviewing and updating the EqIA, particularly at key milestones (reserved matters applications, discharge of conditions, post-completion).
  - **Responsibility**: Identify who is responsible for monitoring (applicant, management company, local authority).
  - **Reporting**: Describe how monitoring findings will be reported and to whom.
- Reference the EHRC guidance on monitoring the PSED.

### 8. Conclusion (300-500 words)
- Summarise the key findings of the EqIA:
  - The demographic baseline of the area.
  - The potential impacts identified for each protected characteristic.
  - The mitigation measures proposed to address negative impacts.
  - The monitoring and review framework.
- Provide an overall assessment of the impact of the development on equality:
  - Confirm that no significant adverse impacts have been identified that cannot be adequately mitigated (or, if significant impacts remain, acknowledge them and explain the justification).
  - Identify the positive impacts of the development on equality (e.g., provision of affordable and accessible housing, community facilities, inclusive public realm, employment opportunities).
- Confirm that the EqIA demonstrates that the local planning authority can discharge its duty under Section 149 of the Equality Act 2010 in determining the application, having had due regard to:
  (a) The need to eliminate discrimination, harassment, and victimisation.
  (b) The need to advance equality of opportunity.
  (c) The need to foster good relations.
- Confirm compliance with:
  - The Equality Act 2010 and the PSED (Section 149).
  - The Human Rights Act 1998.
  - NPPF Paragraphs 8, 92, 127, and 130.
  - Relevant local plan equalities and inclusive design policies.
  - London Plan Policies GG1, D5, and D7 (if applicable).
  - Building Regulations Part M requirements (M4(1), M4(2), M4(3)).
- Recommend planning conditions or Section 106 obligations to secure the mitigation and monitoring measures.
- Note that the EqIA is a living document that should be updated at key project milestones.

## Quality Standards

- Reference the Equality Act 2010 by section number (Sections 4, 6, 13, 19, 20, 149, 150).
- Reference all nine protected characteristics and assess each one individually.
- Reference the three limbs of the PSED: eliminate discrimination, advance equality of opportunity, foster good relations.
- Reference key case law: Bracking, Brown principles, Cushnie.
- Reference the Human Rights Act 1998 (Articles 8, 14, Article 1 of Protocol 1).
- Reference specific NPPF paragraphs (8, 92, 127, 130) by number.
- Reference Building Regulations Part M (M4(1), M4(2), M4(3)) where housing is proposed.
- Reference BS 8300:2018 for inclusive design of the built environment.
- Reference the EHRC Technical Guidance on the PSED.
- Use Census 2021 and IMD 2019 data for the baseline analysis where available.
- Present impact assessment findings in a structured matrix format.
- Distinguish between construction phase and operational phase impacts.
- Distinguish between positive, negative, and neutral impacts and rate significance.
- Where local demographic data has not been provided, clearly flag "[LOCAL DEMOGRAPHIC DATA REQUIRED]" and indicate the data source to be obtained.
- Do not fabricate demographic statistics. Use published Census and IMD data or clearly state assumptions.
- Address all nine protected characteristics -- do not omit any, even where data is limited.
- Ensure mitigation measures are specific, proportionate, and deliverable.
- Use correct legal terminology: due regard, protected characteristic, direct discrimination, indirect discrimination, reasonable adjustments.
- The EqIA must assist the decision-maker, not advocate -- present an objective analysis.`;

export const EqIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, legal basis, site identification, development description, and methodology overview.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the purpose of the EqIA and the legal basis (Equality Act 2010, Section 149 PSED). Explain why an EqIA has been prepared. Identify the site and summarise the proposed development. Describe the structure of the assessment and state any limitations.',
  },
  {
    name: 'Legal Framework',
    description: 'Equality Act 2010, PSED, Human Rights Act, NPPF, and local policy framework.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Set out the Equality Act 2010 (Section 4 protected characteristics, Section 149 PSED with three limbs). Reference key case law (Bracking, Brown, Cushnie). Reference the Human Rights Act 1998. Reference NPPF paragraphs on inclusive design. Reference local plan equalities policies. Reference London Plan Policies GG1, D5, D7 if applicable. Reference Building Regulations Part M.',
    subsections: [
      {
        name: 'Equality Act 2010 and Public Sector Equality Duty',
        description: 'Protected characteristics and the three limbs of the PSED.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Explain Section 4 (protected characteristics), Section 149 (PSED), and the three limbs. Reference key case law.',
      },
      {
        name: 'Planning Policy Framework',
        description: 'NPPF, local plan, and London Plan policies on equality and inclusive design.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Reference NPPF Paragraphs 8, 92, 127, 130. Reference local plan equalities policies. Reference London Plan D5/D7 if applicable.',
      },
    ],
  },
  {
    name: 'Methodology',
    description: 'Screening process, data sources, impact assessment framework, and proportionality.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe the screening process. List data sources (Census 2021, IMD 2019, JSNA, community engagement). Describe the impact assessment framework: nature (positive/negative/neutral), significance (major/moderate/minor/negligible), duration, likelihood, and differential impact. Note proportionality.',
  },
  {
    name: 'Baseline Analysis',
    description: 'Demographic and socio-economic profile of the local area by protected characteristic.',
    required: true,
    min_words: 500,
    max_words: 900,
    guidance:
      'Present demographic data for each protected characteristic using Census 2021 and IMD 2019. Cover age profile, disability prevalence, race and ethnicity, religion, sex, gender identity, sexual orientation, household composition, pregnancy/maternity, and deprivation. Compare to borough/district and national averages. Present data in tables where possible.',
    subsections: [
      {
        name: 'Population Demographics',
        description: 'Age, sex, ethnicity, religion, and household composition.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'Present Census 2021 data on age distribution, sex, ethnicity, religion, and household type for the local area.',
      },
      {
        name: 'Deprivation and Health',
        description: 'IMD scores, disability prevalence, and health indicators.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Present IMD 2019 data at LSOA level. Describe disability and long-term health condition prevalence from Census 2021.',
      },
    ],
  },
  {
    name: 'Impact Assessment by Protected Characteristic',
    description: 'Systematic assessment of impacts on each of the nine protected characteristics.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Assess each of the nine protected characteristics individually. For each, consider construction and operational phase impacts. Assess nature (positive/negative/neutral), significance, duration, and differential impact. Address age (older people and children), disability (physical, sensory, mental health), gender reassignment, marriage/civil partnership, pregnancy/maternity, race, religion/belief, sex, and sexual orientation. Present findings in a summary impact matrix table.',
    subsections: [
      {
        name: 'Age',
        description: 'Impact on older people, children, young people, and working age adults.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Assess impacts on older residents (accessibility, housing), children (play, schools, safety), and working age adults (employment).',
      },
      {
        name: 'Disability',
        description: 'Impact on people with physical, sensory, cognitive, and mental health disabilities.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Assess accessibility of public realm, M4(2)/M4(3) housing, open spaces, parking, wayfinding, and construction impacts.',
      },
      {
        name: 'Gender Reassignment',
        description: 'Impact on transgender and non-binary persons.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Assess safety, personal security, and inclusive design of community spaces. Note data limitations.',
      },
      {
        name: 'Marriage and Civil Partnership',
        description: 'Impact based on marital or civil partnership status.',
        required: true,
        min_words: 50,
        max_words: 100,
        guidance: 'Note that PSED applies only to eliminating discrimination for this characteristic. Assess housing and family provision.',
      },
      {
        name: 'Pregnancy and Maternity',
        description: 'Impact on pregnant women and new parents.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Assess accessibility during construction, pram-friendly design, proximity to healthcare, and family housing.',
      },
      {
        name: 'Race',
        description: 'Impact on people from different racial and ethnic backgrounds.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Assess displacement, ethnic minority businesses, culturally appropriate spaces, places of worship, and community cohesion.',
      },
      {
        name: 'Religion or Belief',
        description: 'Impact on people of different religions or beliefs.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Assess impacts on places of worship, multi-faith spaces, burial grounds, and cultural sensitivity.',
      },
      {
        name: 'Sex',
        description: 'Differential impacts by sex/gender.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Assess safety and personal security, lone parents, childcare, and employment opportunities.',
      },
      {
        name: 'Sexual Orientation',
        description: 'Impact on people of different sexual orientations.',
        required: true,
        min_words: 50,
        max_words: 100,
        guidance: 'Assess safety, inclusive community spaces, and community cohesion. Note data limitations.',
      },
    ],
  },
  {
    name: 'Mitigation Measures',
    description: 'Measures to address identified negative impacts by category.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Set out design-based mitigation (inclusive design, M4(2)/M4(3), accessible public realm). Describe construction phase mitigation (CMP, community liaison, considerate constructors). Address community engagement, employment and training, community facilities, safety and security, and housing allocation. Identify responsible party, timing, and delivery mechanism for each measure.',
    subsections: [
      {
        name: 'Design-Based Mitigation',
        description: 'Inclusive design, accessibility, and built environment measures.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe M4(2)/M4(3) housing, accessible public realm, play areas, wayfinding, lighting, and natural surveillance.',
      },
      {
        name: 'Construction and Operational Mitigation',
        description: 'Construction management and operational phase measures.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe CMP measures for vulnerable groups, community liaison, employment/training commitments, and community facility provision.',
      },
    ],
  },
  {
    name: 'Monitoring and Review',
    description: 'Framework for monitoring the effectiveness of mitigation measures.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Set out monitoring objectives and schedule. Describe construction phase monitoring (community liaison, complaints). Describe operational monitoring (post-occupancy, accessibility review, community facility usage). Address equalities data collection with GDPR compliance. Identify responsible parties and reporting mechanisms. Set out the review schedule aligned with project milestones.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of findings, overall equality assessment, and policy compliance confirmation.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise demographic baseline, impacts by protected characteristic, mitigation measures, and monitoring framework. Provide overall assessment. Confirm that no significant unmitigated adverse impacts remain. Identify positive equality impacts. Confirm the LPA can discharge its PSED duty. Confirm compliance with Equality Act 2010, Human Rights Act 1998, NPPF, and local policies. Recommend planning conditions or Section 106 obligations.',
  },
];

export const EqIA_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Legal Framework',
    'Methodology',
    'Baseline Analysis',
    'Impact Assessment by Protected Characteristic',
    'Mitigation Measures',
    'Monitoring and Review',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const EqIA_TEMPLATE = {
  assessment_type: 'Equalities Impact Assessment',
  short_name: 'EqIA',
  version: 1,
  sections: EqIA_SECTIONS,
  quality_criteria: EqIA_QUALITY,
};
