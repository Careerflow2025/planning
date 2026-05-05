import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Planning Statement -- the foundational document for most planning applications.
 *
 * This prompt and template produce a comprehensive Planning Statement that
 * demonstrates policy compliance and addresses material planning considerations.
 * The output should read as though prepared by an experienced RTPI-chartered
 * planning consultant.
 */

export const PLANNING_STATEMENT_PROMPT = `You are preparing a Planning Statement to accompany a planning application submitted to a local planning authority in England. A Planning Statement is the primary document that demonstrates how a proposed development accords with national and local planning policy and addresses all relevant material planning considerations.

## Document Purpose

The Planning Statement must:
- Introduce the application site, the applicant, and the nature of the proposed development.
- Set out the relevant planning policy framework at national (NPPF), regional (where applicable), and local levels.
- Demonstrate compliance with each relevant policy through a systematic assessment.
- Address all material planning considerations including residential amenity, highways, design, ecology, flooding, heritage, and any other site-specific matters.
- Provide a clear and balanced planning conclusion that weighs benefits against any identified harm.

## Section-by-Section Guidance

### 1. Introduction (200-500 words)
- State the document type and its purpose.
- Identify the applicant (or note "[APPLICANT NAME]" if not provided).
- Identify the application site by full postal address.
- State the nature of the planning application (full, outline, reserved matters, householder, listed building consent, etc.).
- Briefly summarise the proposed development in one or two sentences.
- Provide a brief overview of the document structure.

### 2. Site Description and Context (400-800 words)
- Describe the application site: its location, size, topography, and current condition.
- Describe the existing use of the site and any buildings present.
- Set out the surrounding context: neighbouring land uses, building character, density, and scale.
- Describe access to the site (vehicular and pedestrian) and the local highway network.
- Identify the site's position relative to town/village centres, transport links, schools, shops, and other services.
- Note any physical features of importance: trees, hedgerows, watercourses, levels changes.
- If the site falls within any planning designations (Conservation Area, Green Belt, AONB/National Landscape, flood zone, SSSI, etc.), state this clearly.
- Reference the site location plan where appropriate ("as shown on Drawing No. [REF]").

### 3. Planning History (200-600 words)
- List any previous planning applications on the site with reference numbers, descriptions, and decisions.
- Summarise the outcome of each application and note any relevant conditions or reasons for refusal.
- Where appeal decisions exist, summarise the Inspector's key findings.
- If the site has no relevant planning history, state this explicitly.
- Note any pre-application advice received from the local planning authority.
- If relevant, reference planning history on adjacent or nearby sites that establishes a precedent.

### 4. Development Proposal (500-1200 words)
- Provide a detailed description of the proposed development.
- For residential schemes: state the number of dwellings, mix of unit types and sizes, number of bedrooms per unit, affordable housing provision, and density.
- For extensions or alterations: describe the form, dimensions, materials, and relationship to the existing building.
- For changes of use: state the existing and proposed Use Class, describe any physical works, and set out the operational details.
- Describe the proposed layout and site arrangement, including building footprints, garden/amenity areas, and separation distances.
- Set out the proposed materials and external appearance.
- Describe the access arrangements: vehicular access point(s), internal road layout, pedestrian and cycle connections.
- Set out the proposed parking provision (cars, cycles, disabled spaces, EV charging) and how this complies with local parking standards.
- Describe any proposed landscaping or open space.
- Reference the relevant application drawings by number.
- If applicable, note any phasing of the development.

### 5. Planning Policy Framework (800-1500 words)
- Begin with the statutory framework: Section 38(6) of the Planning and Compulsory Purchase Act 2004, which requires applications to be determined in accordance with the development plan unless material considerations indicate otherwise.
- Set out the relevant NPPF policies. At minimum, reference:
  - Paragraph 7-12 (achieving sustainable development and the presumption in favour).
  - Paragraph 60-77 (delivering a sufficient supply of homes) -- for residential proposals.
  - Paragraph 96-101 (promoting healthy and safe communities) -- where relevant.
  - Paragraph 104-113 (promoting sustainable transport) -- where relevant.
  - Paragraph 114-118 (making effective use of land).
  - Paragraph 123-134 (achieving well-designed and beautiful places).
  - Paragraph 135-140 (requiring good design).
  - Paragraph 159-169 (meeting the challenge of climate change, flooding, and coastal change) -- where flood risk is relevant.
  - Paragraph 189-208 (conserving and enhancing the historic environment) -- where heritage assets are relevant.
  - Any other NPPF paragraphs relevant to the specific proposal.
- Identify the adopted Local Plan and relevant Supplementary Planning Documents (SPDs).
- List and briefly summarise each relevant local plan policy, grouped thematically (e.g., housing, design, transport, environment).
- Note any emerging local plan or neighbourhood plan that carries weight.
- Where the local authority cannot demonstrate a five-year housing land supply, explain the implications under NPPF Paragraph 11(d) (the tilted balance).

### 6. Assessment Against Policy (1500-3000 words)
This is the core of the Planning Statement. For each relevant policy area, provide:
- A statement of the relevant policy requirement.
- An analysis of how the proposal complies with that requirement.
- Where the proposal cannot fully comply, an explanation of why and what mitigation is proposed.

Address the following topics as sub-sections (where relevant to the proposal):

#### 6.1 Principle of Development
- Is the site allocated for development in the local plan? If not, what is the policy position on windfall sites?
- Does the proposal accord with the spatial strategy and settlement hierarchy?
- For housing proposals: housing land supply position and whether the tilted balance applies.

#### 6.2 Design and Character
- NPPF Paragraphs 123-140 and relevant local design policies.
- Demonstrate that the proposal is of appropriate scale, form, height, massing, and materials for the local context.
- Reference any design codes, pattern books, or design guides adopted by the LPA.
- Reference the National Design Guide where appropriate.

#### 6.3 Residential Amenity
- Impact on neighbouring occupiers: overlooking, loss of privacy, overshadowing, loss of daylight/sunlight, overbearing impact, noise, odour, disturbance.
- Amenity for future occupiers: internal space standards (NDSS where adopted), private outdoor amenity, outlook.
- BRE guidelines on daylight and sunlight where relevant.
- Separation distances and how they compare with local standards.

#### 6.4 Highways and Transport
- NPPF Paragraphs 104-113 and local transport policies.
- Site accessibility: proximity to public transport, pedestrian and cycle connections.
- Vehicular access: visibility splays, junction capacity, safety record.
- Parking: compliance with local parking standards, EV charging provision, cycle parking.
- Trip generation and any traffic impact (reference Transport Statement or Transport Assessment where submitted).
- Travel Plan measures where applicable.

#### 6.5 Ecology and Biodiversity
- NPPF Paragraphs 180-188 and local ecology policies.
- Biodiversity Net Gain (BNG) requirement under the Environment Act 2021: demonstrate a minimum 10% net gain.
- Any protected species surveys and their findings.
- Impact on habitats, hedgerows, trees, and watercourses.
- Proposed mitigation, compensation, and enhancement measures.
- Reference any submitted Preliminary Ecological Appraisal (PEA) or Ecological Impact Assessment (EcIA).

#### 6.6 Flood Risk and Drainage
- NPPF Paragraphs 159-169 and local flood risk policies.
- Site flood zone classification (Environment Agency Flood Map for Planning).
- Sequential Test and Exception Test where applicable.
- Surface water drainage strategy: use of SuDS, attenuation, greenfield run-off rates.
- Foul drainage arrangements.
- Reference any submitted Flood Risk Assessment or Drainage Strategy.

#### 6.7 Heritage
- NPPF Paragraphs 189-208 and local heritage policies.
- Identification of any heritage assets and their significance.
- Assessment of impact on significance and setting.
- Public benefits that outweigh any harm (if harm is identified).
- Reference the duty under Section 66(1) or 72(1) of the Planning (Listed Buildings and Conservation Areas) Act 1990.

#### 6.8 Trees and Landscaping
- Any TPOs or significant trees on or adjacent to the site.
- Impact of the development on trees and proposed protection measures.
- Proposed landscape scheme and how it relates to the local character.
- Reference any submitted Arboricultural Impact Assessment.

#### 6.9 Other Material Considerations
Address any additional site-specific considerations:
- Contaminated land and remediation.
- Air quality and emissions (where relevant in AQMAs).
- Noise impact and mitigation.
- Utilities and infrastructure capacity.
- Loss of agricultural land.
- Affordable housing provision and viability (for major schemes).
- S106 / CIL contributions.

### 7. Planning Balance and Conclusions (400-800 words)
- Summarise the key findings of the assessment.
- Identify the benefits of the scheme (economic, social, environmental).
- Identify any harm, however limited, and any proposed mitigation.
- Weigh benefits against harm using the appropriate NPPF test:
  - For plan-compliant schemes: Paragraph 11(c) -- approve without delay.
  - For non-plan-compliant schemes with housing land supply deficit: Paragraph 11(d) -- the tilted balance.
  - For heritage harm: Paragraph 200 (less than substantial harm) or Paragraph 201 (substantial harm).
- Conclude by stating that the proposed development accords with the development plan and that there are no material considerations that indicate planning permission should be refused.
- Request that the application be approved.

## Quality Standards

- Minimum 5 distinct NPPF paragraph references, more for complex schemes.
- At least 3 local plan policy references (or flag "[LOCAL POLICY REFERENCES TO BE INSERTED]" if not provided).
- Every factual claim must be traceable to site information provided by the user or flagged as "[TO BE CONFIRMED]".
- Professional planning language throughout; no marketing, promotional, or subjective language.
- Balanced assessment: acknowledge potential concerns and explain how they are addressed.`;

export const PLANNING_STATEMENT_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Brief overview of the application, applicant, site, proposal, and document structure.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'Introduce the site by full postal address. State the applicant name. Describe the application type (full, outline, householder, etc.). Summarise the proposal in one or two sentences. Outline the document structure. Reference the application drawings submitted.',
  },
  {
    name: 'Site Description and Context',
    description: 'Detailed description of the site, its surroundings, access, and any relevant designations.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe the site location, size, topography, existing buildings, and current use. Set out the surrounding character including neighbouring uses, building heights, materials, and density. Describe vehicular and pedestrian access. Note proximity to local services and transport links. Identify any planning designations (Conservation Area, Green Belt, AONB, flood zone, SSSI, TPO, etc.). Reference the site location plan.',
  },
  {
    name: 'Planning History',
    description: 'Summary of relevant planning applications and decisions on the site and, where relevant, nearby sites.',
    required: true,
    min_words: 200,
    max_words: 600,
    guidance:
      'List previous applications with reference numbers, descriptions, dates, and outcomes. Summarise relevant appeal decisions. Note pre-application advice. If no history exists, state this clearly. Reference any nearby decisions that set a precedent.',
  },
  {
    name: 'Development Proposal',
    description: 'Full description of what is proposed, including layout, scale, appearance, access, and landscaping.',
    required: true,
    min_words: 500,
    max_words: 1200,
    guidance:
      'Describe the development in detail: number of units, floor areas, heights, materials, access arrangements, parking provision, landscaping. For residential proposals include unit mix and density. Reference application drawings by number. Note phasing if applicable.',
  },
  {
    name: 'Planning Policy Framework',
    description: 'The national and local planning policy context against which the application falls to be assessed.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Begin with Section 38(6) of the Planning and Compulsory Purchase Act 2004. Set out relevant NPPF paragraphs with their chapter context. Identify the adopted Local Plan and list relevant policies grouped thematically. Note any SPDs, neighbourhood plans, or emerging plans. Where a five-year housing land supply deficit exists, explain the NPPF Paragraph 11(d) tilted balance.',
  },
  {
    name: 'Assessment Against Policy',
    description: 'Systematic assessment of the proposal against each relevant policy area.',
    required: true,
    min_words: 1500,
    max_words: 3000,
    guidance:
      'Address each topic as a sub-section: Principle of Development, Design and Character, Residential Amenity, Highways and Transport, Ecology and Biodiversity, Flood Risk and Drainage, Heritage (if relevant), Trees and Landscaping, and any other material considerations. For each topic, state the policy, analyse compliance, and address any shortfall with mitigation. Cite specific NPPF paragraph numbers and local policy references.',
    subsections: [
      {
        name: 'Principle of Development',
        description: 'Whether the development is acceptable in principle at this location.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Assess site allocation status, spatial strategy, settlement hierarchy, housing land supply position.',
      },
      {
        name: 'Design and Character',
        description: 'Assessment of scale, form, massing, materials, and relationship to local context.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Reference NPPF Paragraphs 123-140, National Design Guide, local design policies and codes.',
      },
      {
        name: 'Residential Amenity',
        description: 'Impact on neighbours and amenity for future occupiers.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Assess overlooking, overshadowing, overbearing impact, noise, internal space standards, private amenity space.',
      },
      {
        name: 'Highways and Transport',
        description: 'Access, parking, trip generation, and sustainable transport.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance: 'Reference NPPF Paragraphs 104-113 and local parking/transport policies. Assess accessibility, parking compliance, EV charging.',
      },
      {
        name: 'Ecology and Biodiversity',
        description: 'Impact on ecology and biodiversity net gain.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Reference NPPF Paragraphs 180-188, Environment Act 2021 BNG requirement (10% net gain). Summarise ecological survey findings if available.',
      },
      {
        name: 'Flood Risk and Drainage',
        description: 'Flood zone, drainage strategy, and SuDS.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Reference NPPF Paragraphs 159-169. State flood zone. Describe drainage strategy and SuDS approach.',
      },
      {
        name: 'Heritage',
        description: 'Impact on heritage assets and their significance.',
        required: false,
        min_words: 150,
        max_words: 500,
        guidance: 'Reference NPPF Paragraphs 189-208 and S66/S72 duties. Assess significance and impact. Only include if heritage assets are affected.',
      },
      {
        name: 'Trees and Landscaping',
        description: 'Tree impact, protection, and landscape proposals.',
        required: false,
        min_words: 100,
        max_words: 300,
        guidance: 'Assess impact on TPO trees and significant vegetation. Describe landscape scheme and character integration.',
      },
      {
        name: 'Other Material Considerations',
        description: 'Any additional site-specific considerations.',
        required: false,
        min_words: 100,
        max_words: 500,
        guidance: 'Address contamination, air quality, noise, utilities, agricultural land, affordable housing, S106/CIL as relevant to the site.',
      },
    ],
  },
  {
    name: 'Planning Balance and Conclusions',
    description: 'Weighing benefits against harm and reaching a clear recommendation.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise key findings. Identify economic, social, and environmental benefits. Acknowledge any identified harm and its weight. Apply the correct NPPF test: Paragraph 11(c) for plan-compliant schemes, Paragraph 11(d) tilted balance where relevant, Paragraph 200/201 for heritage harm. Conclude that the proposal accords with the development plan and request approval.',
  },
];

export const PLANNING_STATEMENT_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Site Description and Context',
    'Planning History',
    'Development Proposal',
    'Planning Policy Framework',
    'Assessment Against Policy',
    'Planning Balance and Conclusions',
  ],
  max_quality_score: 100,
};

export const PLANNING_STATEMENT_TEMPLATE = {
  assessment_type: 'Planning Statement',
  short_name: 'PS',
  version: 1,
  sections: PLANNING_STATEMENT_SECTIONS,
  quality_criteria: PLANNING_STATEMENT_QUALITY,
};
