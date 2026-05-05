import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Green Infrastructure Plan (GIP) -- sets out how the proposed
 * development integrates green infrastructure elements such as
 * trees, green roofs, rain gardens, wildlife corridors, and open
 * space to deliver biodiversity, climate adaptation, health, and
 * wellbeing benefits.
 *
 * Increasingly required by local planning authorities as part of
 * sustainability and environmental strategies, particularly for
 * major developments.
 *
 * AI Difficulty: Easy | Typical length: 10-20 pages
 */

export const GIP_PROMPT = `You are preparing a Green Infrastructure Plan to accompany a planning application in England. The Green Infrastructure Plan demonstrates how the proposed development integrates a network of green and blue infrastructure elements to deliver multiple environmental, social, and economic benefits, including biodiversity enhancement, climate adaptation, amenity, health, and wellbeing.

## Document Purpose

The Green Infrastructure Plan must:
- Describe the existing green infrastructure context of the site and surrounding area.
- Set out a comprehensive strategy for green infrastructure provision within the development.
- Demonstrate how the green infrastructure strategy delivers biodiversity enhancement (complementing any Biodiversity Net Gain assessment).
- Explain how green infrastructure contributes to climate change adaptation, including urban cooling, flood risk management, and air quality improvement.
- Describe the community and health benefits of the proposed green infrastructure.
- Set out a long-term management and maintenance plan to ensure the green infrastructure remains functional and beneficial.
- Demonstrate compliance with national and local planning policies on green infrastructure and the natural environment.

## Key Policy and Legislation References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 8**: Achieving sustainable development includes an environmental objective to protect and enhance the natural, built, and historic environment.
- **Paragraph 96**: Planning policies and decisions should aim to achieve healthy, inclusive, and safe places. Access to a network of high-quality open spaces and opportunities for sport and physical activity is important for the health and wellbeing of communities.
- **Paragraph 98**: Access to a network of high-quality open spaces and opportunities for recreation can make an important contribution to the health and wellbeing of communities.
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment by:
  - Protecting and enhancing valued landscapes, geological conservation interests, and soils.
  - Recognising the intrinsic character and beauty of the countryside.
  - Minimising impacts on and providing net gains for biodiversity.
  - Preventing new and existing development from contributing to, or being put at unacceptable risk from, or being adversely affected by, unacceptable levels of water, air, noise, or land pollution.
- **Paragraph 175**: Plans should distinguish between the hierarchy of international, national, and locally designated sites; allocate land with the least environmental or amenity value; take a strategic approach to maintaining and enhancing networks of habitats and green infrastructure; and plan for the enhancement of natural capital.
- **Paragraph 179**: To protect and enhance biodiversity and geodiversity, plans should identify, map, and safeguard components of local wildlife-rich habitats and wider ecological networks, including the hierarchy of internationally, nationally, and locally designated sites of importance for biodiversity; wildlife corridors and stepping stones that connect them; and areas identified by national and local partnerships for habitat management, enhancement, restoration, or creation.
- **Paragraph 180**: When determining planning applications, local planning authorities should apply principles to protect and enhance biodiversity, including securing measurable net gains for biodiversity.
- **Paragraph 182**: The presumption in favour of sustainable development does not apply where a project is likely to have a significant effect on a habitats site, unless an appropriate assessment has concluded that the project will not adversely affect the integrity of the habitats site.

### Environment Act 2021
- Introduces mandatory Biodiversity Net Gain (BNG) of at least 10% for most developments (from November 2023 for major developments, April 2024 for minor).
- Establishes Local Nature Recovery Strategies (LNRS) to map priorities for nature recovery.
- Creates a duty on public authorities to conserve and enhance biodiversity.
- Green infrastructure plans should demonstrate how they contribute to BNG delivery and align with LNRS priorities.

### 25 Year Environment Plan (2018)
- Sets out the Government's environmental improvement plan, including:
  - Creating or restoring 500,000 hectares of wildlife-rich habitat outside protected sites.
  - Developing a Nature Recovery Network connecting existing wildlife sites.
  - Planting 11 million trees by 2022 (extended under subsequent commitments).
  - Embedding an 'environmental net gain' principle for development.
- Green infrastructure plans should demonstrate alignment with 25 Year Environment Plan objectives.

### Building with Nature Standards
- Provides a framework for assessing the quality and performance of green infrastructure in development.
- Standards cover: core themes (wellbeing, water, wildlife), and additional themes (climate, character, connectivity).
- Achieving Building with Nature accreditation demonstrates high-quality green infrastructure provision.
- The Green Infrastructure Plan should reference Building with Nature standards where the development aspires to accreditation.

### Natural England Green Infrastructure Framework (2023)
- Provides national Green Infrastructure Standards for quantity, quality, and accessibility.
- Sets out Green Infrastructure Principles for planning and development.
- Includes the Green Infrastructure Mapping tool (GI Mapping) to assess existing provision and identify deficits.
- The WSA should reference Natural England's GI Standards and demonstrate compliance.

### Local Plan Policies
- Many local plans contain specific policies on green infrastructure, open space, urban greening, trees, and biodiversity.
- Some local authorities have adopted Urban Greening Factor (UGF) targets (following the London Plan approach).
- Reference the specific local plan policies applicable to the development site, including open space standards, tree planting requirements, and green infrastructure strategies.

### Other Key References
- London Plan Policy G5: Urban Greening (London only) — requires major developments to contribute to urban greening through the Urban Greening Factor.
- London Plan Policy G1: Green Infrastructure (London only).
- CIRIA SuDS Manual (C753) — green infrastructure as part of sustainable drainage.
- Trees in the Townscape (Trees and Design Action Group) guidance.
- Right Trees, Right Places (Forestry Commission) guidance.
- Green Infrastructure Planning and Design Guide (Town and Country Planning Association).
- Fields in Trust Guidance on outdoor space provision.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Green Infrastructure Plan and why it has been prepared.
- Identify the application site: address, site area, and existing land use.
- Describe the proposed development: type, scale, and key characteristics relevant to green infrastructure provision.
- Define "green infrastructure" in the context of this plan (the interconnected network of natural and semi-natural features, green spaces, rivers, and water bodies that together provide a wide range of ecosystem services).
- State any green infrastructure or sustainability certifications being targeted (Building with Nature, BREEAM).
- Outline the document structure and the key green infrastructure themes addressed.

### 2. Policy Framework (300-500 words)
- Set out the national policy context, referencing the NPPF paragraphs listed above (174-182 in particular).
- Reference the Environment Act 2021 and the mandatory BNG requirement.
- Reference the 25 Year Environment Plan and Nature Recovery Network objectives.
- Reference Natural England's Green Infrastructure Framework and Standards.
- Reference Building with Nature Standards where applicable.
- Reference applicable local plan policies on green infrastructure, open space, urban greening, trees, and biodiversity.
- For London: reference London Plan Policies G1 and G5 (Urban Greening Factor).
- Reference any local green infrastructure strategies or supplementary planning documents.

### 3. Existing Green Infrastructure (400-700 words)
- Describe the existing green infrastructure on the site and in the surrounding area:
  - Trees: species, age, quality, and any Tree Preservation Orders (TPOs) or conservation area protections. Cross-reference the arboricultural survey.
  - Hedgerows and boundary vegetation.
  - Open space: amenity grassland, gardens, play areas, sports pitches.
  - Water features: streams, ponds, ditches, sustainable drainage features.
  - Biodiversity: habitat types present (cross-reference the ecological survey). Designated sites (SSSIs, Local Wildlife Sites, Local Nature Reserves) in the vicinity.
  - Connectivity: how the site connects to the wider green infrastructure network (wildlife corridors, green links, public rights of way).
- Describe the condition and quality of existing green infrastructure using Natural England's GI Standards or equivalent assessment.
- Identify any green infrastructure deficits in the area (e.g., below Fields in Trust open space standards, low canopy cover).
- Describe any green infrastructure that will be lost to the development and how this loss will be compensated and enhanced.

### 4. Proposed Green Infrastructure Strategy (500-800 words)
- Set out the overall green infrastructure strategy for the development:
  - **Design principles**: How green infrastructure has been integrated into the masterplan or site layout from the outset (not an afterthought).
  - **Green infrastructure typologies** proposed:
    - Street trees and avenue planting.
    - Green roofs (extensive, intensive, biosolar).
    - Green walls and facade greening.
    - Rain gardens and bioretention areas.
    - Swales and wetland features.
    - Communal gardens and amenity space.
    - Private gardens, terraces, and balcony planting.
    - Play areas and recreational green space.
    - Productive landscapes (allotments, community growing).
    - Wildlife habitat areas (wildflower meadows, log piles, invertebrate hotels).
  - **Quantity**: Total area of green infrastructure provision (m2 and as a percentage of site area).
  - **Urban Greening Factor**: Calculate the UGF for the development (if required by local policy or London Plan). Present the UGF calculation table showing each surface type, area, and factor.
  - **Connectivity**: How the green infrastructure connects internally and to the wider green network, creating corridors for wildlife movement and pedestrian/cycling links.
- Provide a green infrastructure plan drawing or describe how it would be illustrated (showing the location of each green infrastructure element).

### 5. Biodiversity Enhancement (400-600 words)
- Describe how the green infrastructure strategy delivers biodiversity enhancement:
  - Habitat creation: new habitats provided (species-rich grassland, native planting, wetland, woodland edge).
  - Species considerations: planting for pollinators, bird nesting provision (swift bricks, bat boxes), hedgehog highways.
  - Native and wildlife-friendly planting: commitment to a minimum percentage of native species in planting schemes.
  - Ecological connectivity: how green infrastructure creates wildlife corridors and stepping stones.
- Cross-reference the Biodiversity Net Gain assessment (if a separate BNG report is prepared) and demonstrate how the green infrastructure plan contributes to achieving the 10% BNG requirement.
- Reference the Local Nature Recovery Strategy (LNRS) where available and demonstrate alignment with local biodiversity priorities.
- Address invasive species management and biosecurity in planting and soil sourcing.
- Describe lighting design to minimise impacts on nocturnal wildlife (dark corridors, warm-spectrum lighting).

### 6. Climate Adaptation (300-500 words)
- Describe how the green infrastructure contributes to climate change adaptation:
  - **Urban cooling**: Tree canopy shade, green roofs, and vegetated surfaces reducing the urban heat island effect. Quantify where possible (e.g., temperature reduction from canopy cover).
  - **Flood risk management**: Green infrastructure as part of the sustainable drainage strategy (rain gardens, permeable surfaces, swales, green roofs providing attenuation). Cross-reference the drainage strategy or Flood Risk Assessment.
  - **Air quality improvement**: Tree planting and vegetation contributing to particulate matter interception and air quality improvement. Species selection for air quality benefits.
  - **Carbon sequestration**: Tree planting and green spaces contributing to carbon sequestration over the development's lifetime. Quantify estimated carbon sequestration where possible.
  - **Wind mitigation**: Strategic planting to reduce wind tunnel effects in built-up areas.
- Reference the projected climate change impacts for the local area (Met Office UK Climate Projections UKCP18) and demonstrate how the green infrastructure strategy responds to these projections.

### 7. Community Benefits (300-500 words)
- Describe the social and community benefits of the proposed green infrastructure:
  - **Health and wellbeing**: Access to green space for physical activity, mental health, and stress reduction. Reference evidence on the health benefits of green space (e.g., Public Health England guidance).
  - **Recreation and play**: Play areas, sports facilities, walking and cycling routes within the green infrastructure network.
  - **Social interaction**: Communal gardens, seating areas, and gathering spaces within green infrastructure.
  - **Food growing**: Allotments, community growing spaces, or productive landscapes.
  - **Education**: Opportunities for nature education, interpretation, and community engagement with green infrastructure.
  - **Amenity and character**: How green infrastructure contributes to the character and attractiveness of the development, including views, visual screening, and sense of place.
- Demonstrate compliance with open space quantity and accessibility standards (Fields in Trust, local plan standards).
- Address equitable access to green infrastructure for all residents, including disabled people and families with children.

### 8. Management and Maintenance (300-500 words)
- Set out the long-term management and maintenance plan for the green infrastructure:
  - Management responsibilities: who will be responsible for maintaining the green infrastructure (management company, local authority adoption, resident-led management, or a combination).
  - Funding mechanism: how long-term maintenance will be funded (service charges, commuted sums for adopted areas, endowment funding).
  - Management plan: commitment to preparing a detailed Landscape and Ecological Management Plan (LEMP) or Green Infrastructure Management Plan, typically secured by planning condition.
  - Maintenance regime: outline of the maintenance activities for each green infrastructure typology (tree care, green roof maintenance, rain garden maintenance, meadow management, habitat management).
  - Monitoring: ongoing monitoring of green infrastructure condition, performance, and biodiversity value (e.g., BNG monitoring for 30 years as required by the Environment Act 2021).
  - Replacement and renewal: commitment to replacing failed planting and maintaining green infrastructure quality.
- State the management plan duration (minimum 30 years for BNG, longer-term commitments where possible).
- Reference any planning conditions or obligations anticipated for management and maintenance.

### 9. Conclusion (200-400 words)
- Summarise the green infrastructure strategy and its key components.
- State the quantified green infrastructure provision: total area (m2), percentage of site, number of trees, UGF score (if applicable).
- Summarise the multi-functional benefits delivered: biodiversity, climate adaptation, community, health, amenity.
- Confirm compliance with national and local planning policies on green infrastructure and the natural environment.
- Confirm the commitment to long-term management and maintenance.
- Note any recommended planning conditions relating to green infrastructure (e.g., LEMP condition, UGF compliance condition).
- State any outstanding actions or further assessments required (detailed planting plans, LEMP preparation).

## Quality Standards

- Reference the NPPF and specific paragraphs on the natural environment (174-182).
- Reference the Environment Act 2021 and BNG requirements.
- Reference the 25 Year Environment Plan.
- Reference Natural England's Green Infrastructure Framework and Standards.
- Reference Building with Nature Standards where applicable.
- Include quantified green infrastructure provision (area, percentage, number of trees, UGF score).
- Address all key green infrastructure typologies relevant to the development.
- Demonstrate multi-functional benefits: biodiversity, climate adaptation, flood management, health, amenity.
- Address ecological connectivity and alignment with the wider green infrastructure network.
- Set out a credible long-term management and maintenance plan with funding mechanism.
- Cross-reference other assessments where relevant (BNG, drainage, arboricultural survey, ecological assessment).
- Use correct green infrastructure terminology: ecosystem services, urban greening factor, bioretention, shearing layers, ecological connectivity.
- Professional language appropriate for planning officers and landscape/ecology consultees.`;

export const GIP_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose of the plan, site and development description, green infrastructure definition.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the purpose of the GIP. Identify the site and proposed development. Define green infrastructure. State any certifications targeted. Outline document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF, Environment Act, 25 Year Plan, Natural England GI Framework, and local policies.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Reference NPPF paragraphs 174-182. Reference Environment Act 2021 and BNG. Reference 25 Year Environment Plan. Reference Natural England GI Framework. Reference Building with Nature Standards. Reference local plan policies and UGF requirements.',
  },
  {
    name: 'Existing Green Infrastructure',
    description: 'Trees, hedgerows, open space, water features, biodiversity, and connectivity on and around the site.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe existing trees, hedgerows, open space, water features, habitats. Assess condition and quality. Identify green infrastructure deficits. Describe green infrastructure to be lost and compensation. Cross-reference ecological and arboricultural surveys.',
  },
  {
    name: 'Proposed Green Infrastructure Strategy',
    description: 'Design principles, typologies, quantities, UGF, and connectivity.',
    required: true,
    min_words: 500,
    max_words: 800,
    guidance:
      'Set out overall strategy and design principles. List all green infrastructure typologies proposed. Quantify provision (m2, percentage of site). Calculate UGF if required. Describe internal and external connectivity. Reference illustrative plan.',
  },
  {
    name: 'Biodiversity Enhancement',
    description: 'Habitat creation, species provision, ecological connectivity, and BNG contribution.',
    required: true,
    min_words: 400,
    max_words: 600,
    guidance:
      'Describe habitat creation and species-specific measures. State native planting commitment. Describe ecological corridors. Cross-reference BNG assessment. Reference LNRS alignment. Address invasive species and lighting impacts.',
  },
  {
    name: 'Climate Adaptation',
    description: 'Urban cooling, flood management, air quality, carbon sequestration, and wind mitigation.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe urban cooling benefits. Describe flood management contribution (cross-reference drainage strategy). Address air quality improvement. Quantify carbon sequestration. Address wind mitigation. Reference UKCP18 climate projections.',
  },
  {
    name: 'Community Benefits',
    description: 'Health and wellbeing, recreation, social interaction, food growing, and equitable access.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe health and wellbeing benefits. Address recreation and play provision. Describe communal and productive landscapes. Demonstrate compliance with open space standards. Address equitable access for all residents.',
  },
  {
    name: 'Management and Maintenance',
    description: 'Responsibilities, funding, management plan, maintenance regime, and monitoring.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Set out management responsibilities and funding mechanism. Commit to LEMP preparation. Outline maintenance regime for each typology. Describe monitoring framework (including BNG 30-year monitoring). Address replacement and renewal. State anticipated conditions.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of strategy, quantified provision, multi-functional benefits, and policy compliance.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise strategy and key components. State quantified provision and UGF score. Summarise benefits delivered. Confirm policy compliance. Confirm management commitment. Note recommended conditions.',
  },
];

export const GIP_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Existing Green Infrastructure',
    'Proposed Green Infrastructure Strategy',
    'Biodiversity Enhancement',
    'Climate Adaptation',
    'Community Benefits',
    'Management and Maintenance',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const GIP_TEMPLATE = {
  assessment_type: 'Green Infrastructure Plan',
  short_name: 'GIP',
  version: 1,
  sections: GIP_SECTIONS,
  quality_criteria: GIP_QUALITY,
};
