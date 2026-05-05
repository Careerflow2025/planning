import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Statement of Community Involvement (SCI) -- accompanies planning
 * applications where pre-application community engagement has been
 * undertaken (often required for major developments) or where the
 * applicant wishes to demonstrate the extent of public consultation
 * and how the scheme has evolved in response to feedback.
 *
 * Not to be confused with the local authority's own SCI (which sets
 * out how the LPA will involve the community in planning decisions).
 * This is the applicant's Statement of Community Involvement, sometimes
 * also referred to as a Community Consultation Statement or Report of
 * Community Engagement.
 *
 * This prompt produces a professional SCI suitable for submission with
 * a planning application. The output should read as though prepared by
 * a planning consultant or community engagement specialist experienced
 * in UK pre-application consultation practice.
 */

export const SCI_PROMPT = `You are preparing a Statement of Community Involvement (SCI), also known as a Community Consultation Statement, to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

The Statement of Community Involvement documents the pre-application community engagement undertaken by the applicant or their agent. It must:
- Describe the consultation strategy and methodology.
- Summarise any pre-application advice received from the local planning authority.
- Describe the community engagement activities undertaken, including public exhibitions, meetings, online consultations, and written correspondence.
- Present a summary of the feedback received from the community, elected members, and other stakeholders.
- Explain how the proposed development has evolved in response to the feedback received.
- Demonstrate that the applicant has had regard to the community's views and has sought to address concerns where possible.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 39**: Early engagement has significant potential to improve the efficiency and effectiveness of the planning application system for all parties. Good quality pre-application discussion enables better coordination between public and private resources and improved outcomes for the community.
- **Paragraph 40**: LPAs should encourage any applicants who are not already required to do so by law to engage with the local community and, where relevant, with statutory and non-statutory consultees, before submitting their applications.
- **Paragraph 41**: The more issues that can be resolved at pre-application stage, including the need to deliver improvements in infrastructure and affordable housing, the greater the benefits.
- **Paragraph 42**: The participation of other consenting bodies in pre-application discussions should be actively encouraged to coordinate requirements.
- **Paragraph 43**: The right of applicants to make applications without prior engagement should be recognised, and the outcome of pre-application discussions should not be used to prevent applications being considered.
- **Paragraph 44**: LPAs should publish a list of their information requirements for applications and keep them under review. Applicants are encouraged to set out how they have been addressed.
- **Paragraph 45**: LPAs should consider the use of Planning Performance Agreements where this will assist the delivery of development.
- **Paragraph 46**: LPAs should give appropriate weight to any positive engagement in determining planning applications.

### Localism Act 2011
- **Section 122**: Introduces the duty to consult for certain types of development before a planning application is submitted. This applies to development that is of a description specified in a development order (currently limited to developments requiring Environmental Impact Assessment and developments involving onshore wind turbines).
- Where the duty applies, the developer must publicise the proposed application, consult people living near the land, and have regard to any responses received.

### Local Authority SCI
- Each local authority publishes its own Statement of Community Involvement setting out how it expects developers to engage with the community.
- The applicant's consultation approach should be consistent with the local authority's SCI requirements.
- Reference the relevant local authority's SCI by title and date.

### Other Key References
- **National Planning Practice Guidance: Before Submitting an Application**: Guidance on pre-application engagement and community involvement.
- **RTPI Best Practice Guidance on Public Engagement**: Professional guidance on effective community consultation methods.
- **Planning Advisory Service (PAS) Good Practice for Community Engagement**: Guidance for engaging hard-to-reach groups.
- **TCPA Guide to Effective Community Engagement in Planning**: Comprehensive guidance on community involvement techniques.
- **Gunning Principles** (from R v Brent London Borough Council, ex parte Gunning [1985]): The four requirements for lawful consultation:
  1. Consultation must be at a time when proposals are still at a formative stage.
  2. Sufficient reasons must be given for any proposal to permit intelligent consideration.
  3. Adequate time must be given for consideration and response.
  4. The product of consultation must be conscientiously taken into account.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the Statement of Community Involvement and its role in the planning application.
- Identify the application site by full postal address.
- Summarise the proposed development: use, scale, number of units or floor area.
- Explain the applicant's commitment to meaningful community engagement.
- Reference NPPF Paragraphs 39-46 and the importance of early engagement.
- Reference the local authority's SCI and confirm that the consultation approach has been consistent with its requirements.
- State the period over which consultation was undertaken.
- Outline the document structure.

### 2. Consultation Strategy (300-600 words)
- Describe the overall consultation strategy and objectives:
  - To inform the local community about the proposed development.
  - To provide opportunities for meaningful feedback before the planning application is submitted.
  - To enable the scheme to evolve in response to legitimate concerns.
  - To build relationships with the local community and stakeholders.
- Describe the target audience:
  - Immediate neighbours (properties within a defined radius of the site).
  - The wider local community.
  - Local ward councillors and parish/town council.
  - Statutory consultees (where pre-application engagement was appropriate).
  - Community groups, residents' associations, and amenity societies.
  - Local businesses.
  - Hard-to-reach groups and those with protected characteristics.
- Describe the methods of engagement chosen and justify why they were appropriate:
  - Written notifications (letters, leaflets).
  - Public exhibitions or drop-in events.
  - Online consultation (dedicated website, virtual exhibition, online feedback forms).
  - Community meetings.
  - One-to-one meetings with key stakeholders.
  - Social media engagement.
- Describe the timescale for consultation and how adequate time was allowed for responses (Gunning Principle 3).
- Describe how the consultation was undertaken at a formative stage when the design could still be influenced (Gunning Principle 1).

### 3. Pre-Application Advice (300-600 words)
- Describe any formal pre-application engagement with the local planning authority.
  - Date of pre-application submission and reference number.
  - Summary of the scheme presented at pre-application stage.
  - Summary of the LPA's pre-application advice: key issues raised, officer concerns, and guidance provided.
  - Describe how the scheme has responded to the LPA's pre-application advice.
- Describe any engagement with statutory consultees:
  - Environment Agency (flood risk, contamination).
  - Historic England (heritage assets).
  - Natural England (ecology, protected species, landscape).
  - Highways England / National Highways (strategic road network).
  - Lead Local Flood Authority.
  - Other relevant statutory consultees.
- Describe any engagement with elected representatives:
  - Ward councillors: meetings, briefings, correspondence.
  - Parish or town council: presentations, formal consultation.
  - MP (where applicable for significant schemes).
- Summarise the key themes arising from statutory and officer engagement and how they have been addressed.

### 4. Community Engagement Activities (500-1200 words)
Describe each engagement activity in detail.

#### 4.1 Notification and Publicity
- Describe the notification methodology:
  - Number and extent of letters/leaflets distributed (e.g., "1,200 leaflets distributed to all addresses within 200m of the site boundary").
  - Content of the notification: site address, description of proposals, consultation dates, how to respond.
  - Date of distribution.
  - Any newspaper advertisements or press releases.
  - Social media posts and reach.

#### 4.2 Public Exhibition / Drop-In Events
For each event:
  - Date, time, and venue.
  - Publicity: how the event was advertised (letters, leaflets, posters, social media, press).
  - Materials displayed: exhibition boards (describe content), physical or digital models, plans, visualisations, information sheets.
  - Staffing: who attended from the applicant's team (planning consultant, architect, landscape architect, transport consultant, etc.).
  - Attendance: number of attendees.
  - How feedback was collected: feedback forms, comment cards, verbal comments recorded.
  - Accessibility: was the venue accessible? Were materials available in alternative formats? Were interpreters available?

#### 4.3 Online Consultation
  - Website address and dates of availability.
  - Content provided online: project description, plans, visualisations, interactive elements.
  - Online feedback mechanism: forms, surveys, email address.
  - Number of unique visitors and responses received.
  - How the consultation was publicised.

#### 4.4 Meetings and Briefings
  - Meetings with community groups, residents' associations, amenity societies: dates, attendees, topics discussed, feedback received.
  - Meetings with adjacent landowners or businesses: dates, topics discussed, outcomes.
  - Any presentations to parish council, neighbourhood forum, or other community bodies.

#### 4.5 Other Engagement Activities
  - Any site visits offered to interested parties.
  - Any design workshops or charrettes.
  - Any youth engagement or engagement with hard-to-reach groups.
  - School or community group presentations.

### 5. Feedback Summary (500-1200 words)
#### 5.1 Quantitative Summary
- Total number of responses received (broken down by method: feedback forms, emails, online, verbal).
- Key statistics: number in support, number raising concerns, number objecting, number neutral.
- Present as a summary table or chart where appropriate.

#### 5.2 Key Themes
For each key theme raised by the community, present:
- **Theme description**: What was the concern or comment?
- **Frequency**: How many respondents raised this theme?
- **Representative comments**: Quote or paraphrase representative comments (anonymised).

Typical themes for development proposals include:
- Scale, height, and design of the proposed buildings.
- Density and number of units.
- Traffic impact and parking.
- Impact on residential amenity (overlooking, overshadowing, noise).
- Impact on local services and infrastructure (schools, GPs, sewage).
- Loss of green space or trees.
- Construction impacts (noise, dust, traffic).
- Affordable housing provision.
- Ecology and biodiversity.
- Heritage and character impacts.
- Flood risk and drainage.

#### 5.3 Positive Feedback
- Summarise any positive comments received.
- Note any aspects of the scheme that were welcomed by the community.
- Do not overstate positive feedback -- be honest and balanced.

#### 5.4 Objections and Concerns
- Summarise the principal objections and concerns raised.
- Present these honestly and without minimisation.
- Group by theme for clarity.

### 6. Design Evolution (500-1000 words)
This is a critical section demonstrating that the consultation was meaningful and that feedback was genuinely considered.

For each key theme or concern raised:
- **Community feedback**: What was the concern?
- **Applicant's response**: How was the concern addressed (or why was it not possible to address)?
- **Design change**: What specific change was made to the scheme in response?

Present in tabular format where possible:
| Feedback Theme | Community Concern | Applicant Response | Design Change Made |

Describe the evolution of the scheme from the initial concept to the final planning application, highlighting the changes made in response to:
- LPA pre-application advice.
- Statutory consultee advice.
- Community feedback.

Where concerns could not be addressed (for example, because they conflict with planning policy or site viability), explain clearly and honestly why not.

Where the scheme was improved as a result of community feedback, clearly attribute the improvement to the engagement process.

### 7. Conclusion (200-400 words)
- Summarise the consultation undertaken: methodology, activities, timescale, and reach.
- State the total number of people engaged and responses received.
- Summarise the key themes and how they were addressed.
- Confirm that the consultation was undertaken at a formative stage when the design could still be influenced (Gunning Principle 1).
- Confirm that sufficient information was provided to enable informed responses (Gunning Principle 2).
- Confirm that adequate time was allowed for responses (Gunning Principle 3).
- Confirm that all responses were conscientiously considered and taken into account (Gunning Principle 4).
- Confirm that the consultation approach was consistent with the local authority's SCI.
- Confirm compliance with NPPF Paragraphs 39-46.
- State that the applicant remains committed to ongoing engagement through the planning application process and during construction.

## Quality Standards

- Reference specific NPPF paragraphs (39-46) by number -- minimum 4 distinct references.
- Reference the Localism Act 2011 Section 122 where the duty to consult applies.
- Reference the local authority's own SCI.
- Reference the Gunning Principles (all four) in the conclusion.
- Provide specific details of each engagement activity: dates, venues, attendance numbers, methods.
- Present feedback data honestly -- do not minimise objections or overstate support.
- Demonstrate genuine design evolution in response to feedback, with specific examples of changes made.
- Present the design evolution in a clear tabular format (feedback / response / change).
- Professional planning language throughout -- balanced, objective, and honest.
- Where engagement details have not been provided, flag as "[CONSULTATION DETAILS TO BE PROVIDED BY APPLICANT]".
- The document should demonstrate that the applicant has genuinely engaged with the community, not simply gone through the motions.`;

export const SCI_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, development summary, and consultation period.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the SCI purpose. Identify the site. Summarise the proposal. Reference NPPF Paragraphs 39-46. Reference the LPA SCI. State the consultation period. Describe the applicant commitment to engagement. Outline the document structure.',
  },
  {
    name: 'Consultation Strategy',
    description: 'Objectives, target audience, methods, timescale, and Gunning Principles compliance.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe objectives (inform, consult, respond). Describe target audience (neighbours, community, councillors, statutory consultees, hard-to-reach groups). Describe methods (letters, exhibitions, online, meetings) and justify. Describe timescale and formative-stage compliance (Gunning Principles 1 and 3).',
  },
  {
    name: 'Pre-Application Advice',
    description: 'LPA pre-application engagement, statutory consultee liaison, and elected member briefings.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe LPA pre-application submission, advice received, and scheme response. Describe engagement with EA, Historic England, Natural England, and other statutory consultees. Describe councillor and parish council engagement. Summarise key themes and responses.',
  },
  {
    name: 'Community Engagement Activities',
    description: 'Detailed description of each notification, exhibition, online consultation, and meeting.',
    required: true,
    min_words: 500,
    max_words: 1200,
    guidance:
      'Describe notification methodology (number of letters, content, dates). For each public exhibition: date, venue, materials, staffing, attendance, feedback collection, accessibility. Describe online consultation: website, content, responses. Describe community meetings and stakeholder briefings. Describe any additional engagement activities.',
    subsections: [
      {
        name: 'Notification and Publicity',
        description: 'Letters, leaflets, advertisements, and social media.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'State number of notifications, distribution area, content, dates, and publicity methods.',
      },
      {
        name: 'Public Exhibition / Drop-In Events',
        description: 'Event details, materials, attendance, and feedback collection.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'For each event: date, venue, publicity, materials, staffing, attendance, feedback method, accessibility.',
      },
      {
        name: 'Online Consultation',
        description: 'Website, content, feedback mechanism, and visitor numbers.',
        required: false,
        min_words: 75,
        max_words: 250,
        guidance: 'Describe website, content, feedback mechanism, visitors, and responses.',
      },
      {
        name: 'Meetings and Briefings',
        description: 'Stakeholder meetings, community group presentations, and briefings.',
        required: false,
        min_words: 75,
        max_words: 250,
        guidance: 'Describe meetings with community groups, residents associations, parish councils, and key stakeholders.',
      },
    ],
  },
  {
    name: 'Feedback Summary',
    description: 'Quantitative summary, key themes, positive feedback, and objections.',
    required: true,
    min_words: 500,
    max_words: 1200,
    guidance:
      'Present total responses and breakdown by method. Present key themes with frequency and representative comments. Present positive feedback honestly. Present objections and concerns without minimisation. Group by theme. Be balanced and objective.',
    subsections: [
      {
        name: 'Quantitative Summary',
        description: 'Total responses, breakdown by method, and support/objection split.',
        required: true,
        min_words: 75,
        max_words: 250,
        guidance: 'State total responses. Break down by method. Present support/concern/objection numbers.',
      },
      {
        name: 'Key Themes',
        description: 'Principal themes raised with frequency and representative comments.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'For each theme: description, frequency, and anonymised representative comments.',
      },
      {
        name: 'Positive Feedback',
        description: 'Aspects of the scheme welcomed by the community.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Summarise positive comments honestly without overstatement.',
      },
      {
        name: 'Objections and Concerns',
        description: 'Principal objections presented honestly.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Summarise key objections without minimisation. Group by theme.',
      },
    ],
  },
  {
    name: 'Design Evolution',
    description: 'How the scheme evolved in response to feedback, with specific design changes.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'For each key theme: state the feedback, the applicant response, and the specific design change made. Present in tabular format (Feedback / Response / Change). Describe the overall evolution from initial concept to final application. Where concerns could not be addressed, explain why honestly. Attribute improvements to the engagement process.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of consultation, Gunning Principles compliance, and ongoing commitment.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise consultation methodology, activities, reach, and responses. Confirm compliance with all four Gunning Principles. Confirm consistency with the LPA SCI. Confirm compliance with NPPF Paragraphs 39-46. State ongoing engagement commitment through planning process and construction.',
  },
];

export const SCI_QUALITY: QualityCriteria = {
  min_policy_refs: 4,
  required_sections: [
    'Introduction',
    'Consultation Strategy',
    'Pre-Application Advice',
    'Community Engagement Activities',
    'Feedback Summary',
    'Design Evolution',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const SCI_TEMPLATE = {
  assessment_type: 'Statement of Community Involvement',
  short_name: 'SCI',
  version: 1,
  sections: SCI_SECTIONS,
  quality_criteria: SCI_QUALITY,
};
