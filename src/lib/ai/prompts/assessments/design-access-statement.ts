import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Design and Access Statement (DAS) -- required for most planning applications
 * except householder and change-of-use applications (with exceptions).
 *
 * A DAS explains the design thinking behind a proposal and demonstrates how
 * the scheme provides appropriate access for all users. It must address the
 * five aspects of design: amount, layout, scale, landscaping, and appearance.
 */

export const DAS_PROMPT = `You are preparing a Design and Access Statement (DAS) to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A Design and Access Statement is required under Article 9 of the Town and Country Planning (Development Management Procedure) (England) Order 2015 (DMPO). It must explain the design principles and concepts that have been applied to the development, and how issues relating to access to the development have been addressed.

Where the application site is within a Conservation Area or affects a listed building, the DAS must also explain how the design takes account of the desirability of preserving or enhancing the character or appearance of the Conservation Area, or preserving the listed building, its setting, or any features of special architectural or historic interest.

## Key Policy References

- NPPF Chapter 12: Achieving well-designed and beautiful places (Paragraphs 123-140).
- NPPF Paragraph 135: Planning decisions should ensure developments are visually attractive, sympathetic to local character, establish a strong sense of place, optimise site potential, and create safe and inclusive places.
- NPPF Paragraph 136: Trees and street planting contribute to quality and character.
- NPPF Paragraph 137: Applications that demonstrate early engagement with the community should be looked on more favourably.
- National Design Guide (2021): The ten characteristics of well-designed places.
- National Model Design Code (2021): Guidance on design coding.
- Building for a Healthy Life (BHL): 12-question assessment for residential developments.
- Manual for Streets (2007) and Manual for Streets 2 (2010): Street design guidance.
- BS 8300:2018 Design of an accessible and inclusive built environment.
- Approved Document M of the Building Regulations: Access to and use of buildings.
- Where in a Conservation Area: Section 72 of the Planning (Listed Buildings and Conservation Areas) Act 1990.
- Where affecting a listed building: Section 66 of the Planning (Listed Buildings and Conservation Areas) Act 1990.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the DAS and the legislative requirement.
- Identify the site, the applicant, and the nature of the proposed development.
- Describe the scope and structure of the document.
- Note the design team and any design review or consultation undertaken.

### 2. Assessment -- Site Analysis (500-1000 words)
This section provides the evidence base for the design response. It must cover:

#### 2.1 Site Location and Context
- The wider context: the settlement pattern, urban grain, and landscape setting.
- Immediate context: neighbouring buildings, their use, height, scale, and materials.
- Views into and out of the site and any important vistas.
- Microclimate: sun paths, prevailing wind, noise sources.

#### 2.2 Site Constraints and Opportunities
- Physical constraints: topography, levels, existing buildings and structures, trees, services, rights of way.
- Planning designations: Conservation Area, listed buildings, flood zone, ecology designations.
- Opportunities: frontage, orientation, views, connections, regeneration potential.

#### 2.3 Character Analysis
- Building typologies prevalent in the area: detached, semi-detached, terraced, flatted.
- Building heights, roof forms, and plot widths.
- Materials palette: brick types, render, stone, tile, slate.
- Boundary treatments: walls, hedges, railings, fences.
- Streetscape: building lines, setbacks, verge widths, on-street parking.
- Any locally distinctive features or design details.

### 3. Design Principles and Concepts (800-1500 words)
Address the five aspects of design mandated by the DMPO:

#### 3.1 Amount
- The quantum of development: number of units, floor area, site coverage, density.
- How the amount relates to the site capacity study and policy requirements.
- Comparison with prevailing density in the area.

#### 3.2 Layout
- The arrangement of buildings, streets, spaces, and landscape on the site.
- Movement hierarchy: primary, secondary, and tertiary routes.
- Public, communal, and private space distribution.
- Orientation of dwellings for solar gain and natural surveillance.
- How the layout creates a legible and permeable development.
- Building for a Healthy Life assessment (for residential schemes of 10+ units).

#### 3.3 Scale
- Building heights (in storeys and metres) and how they relate to surrounding development.
- Massing and how it responds to the street and any sensitive boundaries.
- Roof forms and how they complement the local roofscape.
- How the scale creates an appropriate relationship with neighbouring properties.

#### 3.4 Landscaping
- Hard landscape: surface materials, boundary treatments, street furniture.
- Soft landscape: planting strategy, tree species, biodiversity enhancements.
- Play space and public open space provision (for major residential schemes).
- SuDS integration within the landscape scheme.
- Landscape management and maintenance strategy.

#### 3.5 Appearance
- Architectural language and how it responds to local character.
- Materials selection and rationale: walls, roofs, windows, doors, rainwater goods.
- Colour palette and texture.
- Detailing: window reveals, eaves, verge, cills, lintels, chimneys.
- How the appearance creates visual interest and variety while maintaining coherence.

### 4. Access (500-1000 words)
#### 4.1 Vehicular Access
- Location and design of vehicular access points.
- Visibility splays and their compliance with Manual for Streets.
- Internal road layout: adoptable standard, shared surfaces, home zones.
- Refuse and emergency vehicle tracking.
- Servicing and delivery arrangements.

#### 4.2 Pedestrian and Cycle Access
- Pedestrian routes within the site and connections to surrounding footpath network.
- Cycle routes and connections to the local cycle network.
- Cycle storage provision: location, quantum, design (compliance with local standards).

#### 4.3 Inclusive Access
- Compliance with Approved Document M: Category M4(1) as minimum; M4(2) and M4(3) where required by local policy.
- Level or gently graded access to all dwellings.
- Wheelchair accessible parking spaces.
- Tactile paving, dropped kerbs, and wayfinding.
- Accessible public open spaces and play areas.

#### 4.4 Parking
- Car parking provision and compliance with local standards.
- Parking typology: on-plot, courtyard, undercroft, on-street.
- Electric vehicle charging provision.
- Disabled parking provision.
- Visitor parking.

### 5. Environmental Sustainability (300-600 words)
- Energy strategy: fabric-first approach, renewable energy, Part L compliance.
- Water efficiency: water consumption targets, grey water recycling, rainwater harvesting.
- Materials: sustainable sourcing, recycled content, lifecycle considerations.
- Waste reduction: construction waste management, household waste and recycling storage.
- Climate resilience: overheating risk, green infrastructure, permeable surfaces.
- Biodiversity net gain: habitat creation, wildlife corridors, bird and bat boxes.

### 6. Conclusion (200-400 words)
- Summarise how the design has been informed by a thorough assessment of the site and its context.
- Confirm that the five aspects of design (amount, layout, scale, landscaping, appearance) have been addressed.
- Confirm that access for all users has been considered and appropriate provision made.
- State that the design responds positively to local character, creates a high-quality development, and accords with NPPF Chapter 12 and relevant local design policies.

## Quality Standards

- Reference the NPPF by specific paragraph number (minimum 5 references).
- Reference the National Design Guide and/or National Model Design Code.
- Reference relevant local design policies and any adopted design codes.
- Address all five aspects of design (amount, layout, scale, landscaping, appearance).
- Address inclusive access with reference to Approved Document M.
- Use professional design and planning language throughout.
- Include clear descriptions that could be read alongside submitted drawings.
- Where the site is in a Conservation Area, address Section 72 duty.
- Where a listed building is affected, address Section 66 duty.`;

export const DAS_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose of the DAS, legislative context, site identification, and document structure.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the purpose and legislative basis (Article 9 DMPO 2015). Identify the site, applicant, and proposal. Note the design team. Outline the document structure.',
  },
  {
    name: 'Assessment -- Site Analysis',
    description: 'Evidence base including site location, context, constraints, opportunities, and character analysis.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Cover site location and wider context, immediate surroundings (uses, heights, materials), views and microclimate, physical constraints and planning designations, site opportunities, and a detailed character analysis of building typologies, materials, boundary treatments, and streetscape features.',
    subsections: [
      {
        name: 'Site Location and Context',
        description: 'Wider settlement pattern, immediate context, views, and microclimate.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe the settlement, urban grain, neighbouring buildings, views into and out of the site, sun path, and noise sources.',
      },
      {
        name: 'Site Constraints and Opportunities',
        description: 'Physical, planning, and development constraints alongside opportunities.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Identify topography, existing structures, trees, services, designations, and development opportunities.',
      },
      {
        name: 'Character Analysis',
        description: 'Analysis of local building types, materials, streetscape, and distinctive features.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe prevalent typologies, heights, roof forms, materials palette, boundary treatments, and building lines.',
      },
    ],
  },
  {
    name: 'Design Principles and Concepts',
    description: 'The five aspects of design: amount, layout, scale, landscaping, and appearance.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Address each of the five aspects of design required by the DMPO. For each, explain the design rationale, how it responds to the site analysis, and how it creates a high-quality development. Reference the National Design Guide characteristics where applicable.',
    subsections: [
      {
        name: 'Amount',
        description: 'Quantum of development: units, floor area, site coverage, density.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'State the quantum and demonstrate how it relates to site capacity and local density.',
      },
      {
        name: 'Layout',
        description: 'Arrangement of buildings, streets, and spaces.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Explain the movement hierarchy, public/private space distribution, orientation for solar gain and surveillance, permeability, and legibility.',
      },
      {
        name: 'Scale',
        description: 'Building heights, massing, roof forms, and relationship to context.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'State heights in storeys and metres. Explain how massing responds to the street and neighbouring properties.',
      },
      {
        name: 'Landscaping',
        description: 'Hard and soft landscape, open space, SuDS, and management.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe surface materials, planting strategy, play space, SuDS integration, and maintenance arrangements.',
      },
      {
        name: 'Appearance',
        description: 'Architectural language, materials, colour, and detailing.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Explain the architectural response to local character: materials, colour palette, window proportions, eaves details, and how variety and coherence are balanced.',
      },
    ],
  },
  {
    name: 'Access',
    description: 'Vehicular, pedestrian, cycle, inclusive access, and parking provision.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Address vehicular access design and visibility splays, internal roads, refuse/emergency tracking, pedestrian and cycle routes and storage, inclusive access (Approved Document M categories), and parking provision (cars, cycles, EV, disabled, visitors).',
    subsections: [
      {
        name: 'Vehicular Access',
        description: 'Access points, visibility, internal roads, servicing.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe access point locations, visibility splays, road design standards, and refuse/emergency tracking.',
      },
      {
        name: 'Pedestrian and Cycle Access',
        description: 'Walking and cycling routes and cycle storage.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe pedestrian routes, cycle connections, and cycle storage provision.',
      },
      {
        name: 'Inclusive Access',
        description: 'Accessible design for all users.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Reference Approved Document M categories. Describe level access, wheelchair spaces, tactile paving, and wayfinding.',
      },
      {
        name: 'Parking',
        description: 'Car and cycle parking provision.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'State parking numbers, typology, EV charging, disabled spaces, and compliance with local standards.',
      },
    ],
  },
  {
    name: 'Environmental Sustainability',
    description: 'Energy, water, materials, waste, climate resilience, and biodiversity.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe the energy strategy (fabric-first, renewables), water efficiency measures, sustainable materials, waste management, climate resilience measures, and biodiversity net gain. Reference Building Regulations Part L and any local sustainability policies.',
  },
  {
    name: 'Conclusion',
    description: 'Summary confirming design quality, access provision, and policy compliance.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise the design response. Confirm the five aspects of design are addressed. Confirm access for all users. State compliance with NPPF Chapter 12 and local design policies. For Conservation Area sites, confirm the design preserves or enhances character.',
  },
];

export const DAS_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Assessment -- Site Analysis',
    'Design Principles and Concepts',
    'Access',
    'Environmental Sustainability',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const DAS_TEMPLATE = {
  assessment_type: 'Design and Access Statement',
  short_name: 'DAS',
  version: 1,
  sections: DAS_SECTIONS,
  quality_criteria: DAS_QUALITY,
};
