import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Landscape Strategy (LS) -- required for most major developments and
 * recommended for smaller schemes where landscape design is a material
 * consideration. The strategy presents a comprehensive landscape design
 * for the development including hard and soft landscaping, planting
 * schedules, boundary treatments, and long-term management and maintenance
 * arrangements.
 *
 * The document should read as though prepared by a chartered landscape
 * architect, presenting a clear vision for the landscape and public realm
 * that responds to the site context and achieves policy objectives.
 */

export const LS_PROMPT = `You are preparing a Landscape Strategy to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A Landscape Strategy is required to demonstrate that:
1. A comprehensive landscape design has been developed for the proposed development, covering both hard and soft landscape elements.
2. The landscape design responds to the site context, local character, and the surrounding landscape or townscape.
3. The proposed landscape provides high-quality amenity space, enhances biodiversity, and contributes to sustainable drainage where appropriate.
4. The planting strategy uses appropriate species for the site conditions, local character, and climate resilience.
5. Boundary treatments are appropriate to the context and provide adequate privacy, security, and visual amenity.
6. A long-term management and maintenance plan ensures the landscape is established and sustained.
7. The landscape design achieves relevant policy objectives, including Urban Greening Factor targets (for London), biodiversity net gain, and local design policies.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 126**: The creation of high quality, beautiful and sustainable buildings and places is fundamental to what the planning and development process should achieve.
- **Paragraph 130**: Planning policies and decisions should ensure that developments function well, are visually attractive as a result of good architecture, layout and appropriate and effective landscaping, are sympathetic to local character, and establish a strong sense of place.
- **Paragraph 131**: Trees make an important contribution to the character and quality of urban environments, and can also help mitigate and adapt to climate change. Planning policies and decisions should ensure that new streets are tree-lined, and that opportunities are taken to incorporate trees elsewhere in developments.
- **Paragraph 132**: Design quality should be considered throughout the evolution and assessment of individual proposals.
- **Paragraph 135**: Developments should be visually attractive, sympathetic to local character, and create a strong sense of place using landscaping, building types, and materials.
- **Paragraph 136**: The quality of approved development should not be materially diminished between permission and completion, as a result of changes being made to the permitted scheme.
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment by protecting and enhancing valued landscapes, recognising the intrinsic character and beauty of the countryside, and minimising impacts on and providing net gains for biodiversity.
- **Paragraph 180**: When determining planning applications, local planning authorities should apply the following principles: if significant harm to biodiversity resulting from a development cannot be avoided, adequately mitigated, or as a last resort compensated for, then planning permission should be refused.

### London Plan (2021) -- for developments in London
- **Policy G5 (Urban greening)**: Requires major development proposals to contribute to urban greening, including the provision of new green infrastructure, and expects new developments to achieve an Urban Greening Factor (UGF) of 0.4 for residential and 0.3 for commercial.
- **Policy G1 (Green infrastructure)**: London's network of parks, open spaces, and green and blue features should be protected, planned, designed, and managed as integrated features of green infrastructure.
- **Policy G6 (Biodiversity and access to nature)**: Developments should manage impacts on biodiversity and aim to secure net biodiversity gains.
- **Policy G7 (Trees and woodlands)**: Development proposals should ensure that wherever possible existing trees of value are retained and adequate provision is made for new tree planting.

### British Standards
- **BS 8545:2014 -- Trees: from nursery to independence in the landscape**: Provides guidance on tree planting, including specification, planting, establishment, and aftercare. The primary standard for tree planting in development schemes.
- **BS 4428:1989 -- Code of practice for general landscape operations**: Covers landscape operations including ground preparation, planting, seeding, and turfing.
- **BS 3882:2015 -- Specification for topsoil**: Provides guidance on topsoil quality and suitability for landscape use.
- **BS 3936 (Parts 1-5) -- Nursery stock**: Specifications for plant sizes and quality.
- **BS 7370 (Parts 1-5) -- Grounds maintenance**: Recommendations for grounds maintenance operations.

### Urban Greening Factor (UGF) -- London
- The UGF is a tool for evaluating the quantity and quality of green infrastructure proposed in a development.
- Factor values are assigned to different surface cover types: intensive green roof (0.8), semi-natural vegetation (1.0), sealed surfaces (0.0), permeable paving (0.1), rain gardens and bioswales (1.0), etc.
- Target UGF: 0.4 for predominantly residential developments, 0.3 for predominantly commercial developments.

### Biodiversity Net Gain
- **Environment Act 2021**: Requires a minimum 10% biodiversity net gain for most developments (mandatory from February 2024 for major developments, from April 2024 for minor developments).
- The landscape strategy should contribute to achieving biodiversity net gain through habitat creation and enhancement.
- Reference the Biodiversity Metric (currently version 4.0) for quantifying habitat value.

### Other Key References
- CIRIA C753 (SuDS Manual, 2015): Landscape can contribute to sustainable drainage through rain gardens, swales, permeable surfaces, and attenuation features.
- Right Trees, Right Places (Forestry Commission, 2010): Guidance on selecting appropriate tree species.
- Trees in the Townscape (Trees and Design Action Group, 2012): Guidance on integrating trees in urban developments.
- NHBC Standards (Chapter 4.2): Guidance on landscaping for new housing developments.
- Secured by Design: Crime prevention through environmental design, including landscape considerations.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Landscape Strategy and the policy basis for its preparation.
- Identify the application site by address and local planning authority.
- Summarise the proposed development: building type(s), number of dwellings or floorspace, site area, and proportion of open space.
- Describe the landscape design vision: what is the overarching concept or narrative for the landscape?
- State the key objectives of the landscape strategy: amenity, biodiversity, sustainable drainage, visual quality, community use, climate resilience.
- Confirm the qualifications of the landscape designer (or note for professional review).
- Outline the document structure.
- Reference the relationship with other application documents: Design and Access Statement, Arboricultural Impact Assessment, Biodiversity Net Gain assessment, Drainage Strategy.

### 2. Policy Framework (300-600 words)
- Set out the national planning policy context: NPPF paragraphs 126, 130, 131, 135, 174, and 180.
- For London developments: detail London Plan Policies G1, G5, G6, and G7.
- Reference relevant local plan policies on landscape, design, open space, trees, and biodiversity.
- Reference any supplementary planning documents or design guides that address landscape design.
- Reference the British Standards (BS 8545, BS 4428) as the basis for landscape specification and implementation.
- Reference the Urban Greening Factor (for London) and state the target UGF score.
- Reference the Environment Act 2021 biodiversity net gain requirement and how the landscape contributes.
- Explain how the landscape strategy addresses these policy requirements.

### 3. Site Context and Character (400-700 words)
- Describe the existing site landscape and its context:
  - Topography: levels, slopes, landform.
  - Existing vegetation: trees (referencing the Arboricultural Impact Assessment), hedgerows, shrubs, grassland, habitats.
  - Existing hard landscape: surfaces, boundaries, structures.
  - Soil conditions: soil type, depth, quality (reference soil survey data or BS 3882).
  - Drainage: existing surface water drainage and any landscape-related drainage features.
  - Microclimate: sun paths, prevailing wind, sheltered areas, shade patterns.
- Describe the surrounding landscape or townscape character:
  - Predominant landscape types: formal gardens, informal planting, naturalistic landscapes, urban streetscapes.
  - Local planting character: native species, ornamental planting, street tree species.
  - Boundary treatments in the area: walls, fences, hedges, railings.
  - Public open spaces and parks nearby.
  - Local materials palette: stone, brick, timber, metal.
- Identify opportunities and constraints for the landscape design:
  - Trees to be retained and their root protection areas.
  - Views to be framed, screened, or enhanced.
  - Connections to the wider green infrastructure network.
  - Constraints: services, access routes, underground structures.

### 4. Design Principles (300-500 words)
- Set out the landscape design principles that guide the strategy:
  - **Contextual response**: how the landscape design responds to the site character and local context.
  - **Amenity and wellbeing**: creating high-quality outdoor spaces that support physical and mental health.
  - **Biodiversity and ecology**: designing for biodiversity through habitat creation, native planting, and ecological connectivity.
  - **Sustainability**: selecting materials and plants that are sustainable, locally sourced where possible, and resilient to climate change.
  - **Water management**: integrating SuDS features into the landscape design (rain gardens, swales, permeable paving).
  - **Safety and security**: designing for natural surveillance, way-finding, and Secured by Design principles.
  - **Inclusivity and accessibility**: designing for all users, including those with disabilities, in accordance with BS 8300 and the Equality Act 2010.
  - **Seasonal interest**: providing year-round visual interest through a mix of evergreen and deciduous planting, flowering seasons, and autumn colour.
  - **Climate resilience**: selecting species that are tolerant of drought, heat stress, and changing rainfall patterns.
- Describe the landscape concept or design narrative: what is the story or theme that unifies the landscape design?
- Reference any design precedents or inspirations.

### 5. Hard Landscape Strategy (400-700 words)
- Describe the proposed hard landscape elements:

#### 5.1 Paving and Surfaces
- Primary surfaces: materials, colours, finishes, laying patterns.
- Vehicular surfaces: carriageways, parking courts, turning areas (specify material and construction).
- Pedestrian surfaces: footpaths, shared surfaces, ramps, steps.
- Communal amenity surfaces: terraces, seating areas, play areas.
- Permeable paving: locations, type (block paving, resin-bound, gravel), contribution to SuDS.
- Reference material specifications and standards.

#### 5.2 Street Furniture and Features
- Seating: type, material, locations, accessibility.
- Lighting: type, height, spacing, light levels, colour temperature (reference BS 5489 and Secured by Design).
- Bins, bollards, cycle stands, signage.
- Play equipment: type, age group, safety surfacing (reference BS EN 1176 and BS EN 1177).
- Public art: if proposed, describe the approach.
- Water features: if proposed, describe design and maintenance.

#### 5.3 Levels, Steps, and Ramps
- Proposed levels and gradients.
- Retaining structures: walls, gabions, crib walls, reinforced earth.
- Accessible routes: compliance with BS 8300 and Part M of Building Regulations.

#### 5.4 Drainage Features in the Landscape
- Rain gardens: location, size, planting, inflow and outflow arrangements.
- Swales: profile, planting, conveyance capacity.
- Permeable surfaces: contributing to SuDS strategy.
- Attenuation features: basins, ponds, underground storage beneath landscape areas.
- Reference CIRIA C753 for SuDS design.

### 6. Soft Landscape Strategy (400-700 words)
- Describe the proposed soft landscape elements:

#### 6.1 Tree Planting
- Proposed tree species: list species with common and botanical names, size at planting (girth, height, clear stem), form (standard, multi-stem, feathered).
- Tree planting locations: street trees, avenue planting, specimen trees, woodland/copse planting, orchard trees.
- Tree pit design: in soft landscape (open ground), in hard landscape (tree pit with root barriers, soil cells, underground guying, irrigation).
- Reference BS 8545 for tree planting and establishment.
- Justify species selection: suitability for soil type, climate, urban environment, pest/disease resistance, mature size, root characteristics, CAVAT or other canopy cover contribution.

#### 6.2 Shrub and Herbaceous Planting
- Proposed shrub species: list species with common and botanical names, size at planting, density.
- Herbaceous perennial planting: species, density, planting style (naturalistic, formal, meadow).
- Ground cover planting: species, density, coverage expectations.
- Climbing plants: species for walls, fences, and pergolas.
- Planting style: formal, informal, naturalistic, wildlife-friendly.

#### 6.3 Lawn, Meadow, and Green Infrastructure
- Amenity lawn areas: turf or seed mix specification.
- Wildflower meadow: seed mix specification, management regime.
- Green roofs: type (extensive, semi-intensive, intensive), substrate depth, species/seed mix.
- Green walls: if proposed, type and species.
- Living walls: species, irrigation, structural support.

### 7. Planting Strategy (400-700 words)
- Present the overall planting strategy and plant palette:
  - Native species proportion: aim for a high proportion of native or near-native species for biodiversity value.
  - Climate-resilient species: include species tolerant of drought, heat, and waterlogging as climate adaptation.
  - Pollinator-friendly planting: include species that provide nectar and pollen for bees and butterflies throughout the flowering season.
  - Structural planting: evergreen framework planting for year-round structure and screening.
  - Seasonal interest: spring flowering, summer colour, autumn foliage, winter bark and form.
  - Edible planting: community orchards, herb gardens, or productive planting (if appropriate to the scheme).
- Present a planting schedule or species list:
  - Species name (botanical and common).
  - Size at planting.
  - Planting density (centres for ground cover and hedging).
  - Quantity (or note "to be confirmed at detailed design").
- Note any species to be avoided: invasive non-native species (Schedule 9 of the Wildlife and Countryside Act 1981), species with known pest/disease susceptibility (e.g., Fraxinus excelsior due to ash dieback).
- Address biosecurity: sourcing from reputable nurseries, compliance with plant health regulations.
- Relate the planting strategy to the Urban Greening Factor calculation (for London developments):
  - Assign UGF factor values to each surface type.
  - Calculate the overall UGF score and confirm compliance with the target.

### 8. Boundary Treatments (300-500 words)
- Describe the proposed boundary treatments:
  - **Site perimeter**: treatment to the site boundary with the public realm and neighbouring properties.
  - **Internal boundaries**: between individual plots, between private and communal space, between different use areas.
  - **Types**: walls (brick, stone, rendered block), fences (close-boarded, hit-and-miss, post-and-rail), railings (metal, painted, powder-coated), hedges (species, height at planting, target height), mixed boundaries (wall with railing or hedge above).
  - **Heights**: appropriate to context and function (privacy, security, visual permeability).
  - **Defensive planting**: thorny species for security boundaries where appropriate.
- Justify the boundary treatment selection:
  - Consistency with local character and prevailing boundary types in the area.
  - Privacy for residential properties: adequate screening without overbearing impact.
  - Security: compliance with Secured by Design principles.
  - Ecology: hedges preferred over fences for biodiversity value; hedgehog gaps in fences (13cm x 13cm openings).
- Reference local plan boundary and design policies.
- Present a boundary treatment plan (or reference the drawing).

### 9. Management and Maintenance (400-700 words)
- Present the long-term landscape management and maintenance strategy:

#### 9.1 Establishment Period (Years 1-5)
- Describe the establishment maintenance regime:
  - Watering: frequency, method, duration (especially for new tree planting).
  - Weeding: frequency, method (manual, mulching).
  - Pruning: formative pruning of trees and shrubs, timing.
  - Replacement: defects liability period (typically 12 months minimum), replacement of failed planting.
  - Lawn and meadow: mowing frequency, cutting regime for wildflower meadow (annual cut and collect).
  - Pest and disease monitoring.

#### 9.2 Ongoing Maintenance (Year 5 onwards)
- Describe the long-term maintenance regime:
  - Tree management: cyclical inspection (every 3-5 years), crown management, replacement planting.
  - Shrub and herbaceous maintenance: annual pruning, division, mulching.
  - Meadow management: annual hay cut, removal of arisings, over-seeding.
  - Green roof maintenance: annual inspection, weed removal, substrate top-up.
  - Hard landscape maintenance: cleaning, repair, re-pointing, surface dressing.
  - SuDS features: inspection, sediment removal, planting maintenance (reference CIRIA C753 maintenance schedules).

#### 9.3 Management Responsibilities
- State who is responsible for landscape management:
  - Communal areas: management company, residents' management company, local authority (if adopted), registered provider.
  - Private gardens: individual householders (with guidance in a home information pack).
  - Public realm: local authority (if adopted) or management company.
  - SuDS features: management company, local authority, or water company (depending on adoption).
- State the funding mechanism: service charge, commuted sum for adopted areas, management company fees.
- Reference BS 7370 for grounds maintenance standards.

#### 9.4 Landscape and Ecology Management Plan (LEMP)
- Note that a detailed LEMP may be required by planning condition.
- State the scope of the LEMP: landscape management, habitat management, monitoring, and review.
- Confirm the duration of the LEMP: typically a minimum of 30 years for biodiversity net gain.

### 10. Conclusion (200-400 words)
- Summarise the landscape strategy and its key elements.
- Confirm that the landscape design responds to the site context and local character.
- Confirm compliance with NPPF paragraphs 126, 130, 131, 135, 174, and 180.
- For London: confirm the Urban Greening Factor score and compliance with London Plan Policy G5.
- Confirm that the landscape strategy contributes to biodiversity net gain objectives.
- Summarise the hard and soft landscape elements and the planting strategy.
- Confirm the boundary treatment approach.
- Confirm that a long-term management and maintenance strategy is in place.
- Note any recommended planning conditions (e.g., detailed landscape scheme, LEMP, tree planting details).
- State that the landscape strategy will be developed at detailed design stage with full planting plans, material specifications, and construction details.

## Quality Standards

- Reference specific NPPF paragraphs (126, 130, 131, 135, 174, 180) by number.
- For London, reference London Plan Policies G1, G5, G6, and G7 and calculate the Urban Greening Factor.
- Reference British Standards: BS 8545 (trees), BS 4428 (landscape operations), BS 3882 (topsoil).
- Include a plant species list with botanical names, common names, planting sizes, and densities.
- Reference the Environment Act 2021 and biodiversity net gain requirements.
- Reference CIRIA C753 where SuDS features are integrated into the landscape.
- Distinguish between hard landscape and soft landscape elements clearly.
- Address long-term management and maintenance with a clear responsibility structure.
- Where detailed planting plans are not yet available, state this and note that they will be provided at detailed design stage or as a condition submission.
- Use correct horticultural and landscape terminology throughout.
- Ensure species selections are appropriate for UK climate, soil conditions, and urban environments.`;

export const LS_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site details, development summary, design vision, and document scope.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the strategy purpose and policy basis. Identify the site. Summarise the development. Describe the landscape design vision and key objectives. Reference related documents.',
  },
  {
    name: 'Policy Framework',
    description: 'National, regional, and local planning policy context for landscape design.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF paragraphs 126, 130, 131, 135, 174, 180. For London, detail Policies G1, G5, G6, G7 and UGF target. Reference British Standards and biodiversity net gain. Set out local plan landscape policies.',
  },
  {
    name: 'Site Context and Character',
    description: 'Existing site conditions, surrounding character, and opportunities/constraints.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe site topography, existing vegetation, soil, drainage, and microclimate. Describe surrounding landscape character, local planting, boundary treatments, and materials. Identify opportunities and constraints.',
  },
  {
    name: 'Design Principles',
    description: 'Overarching landscape design principles guiding the strategy.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Set out design principles: contextual response, amenity, biodiversity, sustainability, water management, safety, inclusivity, seasonal interest, climate resilience. Describe the landscape concept or narrative.',
  },
  {
    name: 'Hard Landscape Strategy',
    description: 'Proposed hard landscape elements: paving, furniture, features, levels, and drainage.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe paving and surfaces including permeable paving. Describe street furniture, play equipment, and features. Address levels and accessibility. Describe SuDS features in the landscape.',
    subsections: [
      {
        name: 'Paving and Surfaces',
        description: 'Materials, finishes, and specifications for all hard surfaces.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe primary, vehicular, pedestrian, and amenity surfaces. Include permeable paving locations.',
      },
      {
        name: 'Street Furniture and Features',
        description: 'Seating, lighting, play equipment, and other landscape features.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe seating, lighting, bins, cycle stands, play equipment, and any public art or water features.',
      },
      {
        name: 'Drainage Features in the Landscape',
        description: 'Rain gardens, swales, and SuDS features integrated into the landscape.',
        required: false,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe rain gardens, swales, permeable surfaces, and attenuation features. Reference CIRIA C753.',
      },
    ],
  },
  {
    name: 'Soft Landscape Strategy',
    description: 'Proposed soft landscape elements: trees, shrubs, herbaceous planting, lawn, and meadow.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe proposed tree planting with species and sizes. Describe shrub, herbaceous, and ground cover planting. Describe lawn, meadow, green roofs, and green walls. Reference BS 8545.',
    subsections: [
      {
        name: 'Tree Planting',
        description: 'Proposed tree species, sizes, locations, and pit design.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'List tree species with botanical names, sizes at planting, and locations. Describe tree pit design. Reference BS 8545.',
      },
      {
        name: 'Shrub, Herbaceous, and Ground Cover',
        description: 'Proposed planting species, densities, and styles.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe shrub, herbaceous, ground cover, and climbing plant proposals. Include species, densities, and planting style.',
      },
      {
        name: 'Lawn, Meadow, and Green Infrastructure',
        description: 'Lawn, wildflower meadow, green roofs, and green walls.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe lawn, wildflower meadow, green roof, and green wall proposals with specifications.',
      },
    ],
  },
  {
    name: 'Planting Strategy',
    description: 'Overall plant palette, species selection rationale, and UGF calculation.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Present the overall plant palette: native species, climate resilience, pollinator-friendly, seasonal interest. Present a planting schedule. Note species to avoid. Address biosecurity. Calculate UGF if applicable.',
  },
  {
    name: 'Boundary Treatments',
    description: 'Proposed boundary treatments: walls, fences, hedges, and railings.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe site perimeter and internal boundary treatments. Specify types, materials, and heights. Justify selection for context, privacy, security, and ecology. Note hedgehog gaps. Reference Secured by Design.',
  },
  {
    name: 'Management and Maintenance',
    description: 'Establishment period maintenance, ongoing management, responsibilities, and LEMP.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe establishment maintenance (years 1-5): watering, weeding, pruning, replacement. Describe ongoing maintenance. State management responsibilities and funding mechanism. Reference LEMP requirements.',
    subsections: [
      {
        name: 'Establishment Period (Years 1-5)',
        description: 'Maintenance regime during the planting establishment period.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe watering, weeding, pruning, and replacement obligations during establishment.',
      },
      {
        name: 'Ongoing Management and Responsibilities',
        description: 'Long-term maintenance, management entity, and funding.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Describe long-term maintenance for all landscape elements. State management responsibilities and funding mechanism. Note LEMP requirements.',
      },
    ],
  },
  {
    name: 'Conclusion',
    description: 'Summary of key elements, policy compliance, and recommended conditions.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise the landscape strategy. Confirm policy compliance with NPPF and local plan. For London, confirm UGF score. Confirm biodiversity net gain contribution. Note recommended conditions.',
  },
];

export const LS_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Site Context and Character',
    'Design Principles',
    'Hard Landscape Strategy',
    'Soft Landscape Strategy',
    'Planting Strategy',
    'Boundary Treatments',
    'Management and Maintenance',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const LS_TEMPLATE = {
  assessment_type: 'Landscape Strategy',
  short_name: 'LS',
  version: 1,
  sections: LS_SECTIONS,
  quality_criteria: LS_QUALITY,
};
