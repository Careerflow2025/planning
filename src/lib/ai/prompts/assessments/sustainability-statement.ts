import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Sustainability Statement -- increasingly required by local planning
 * authorities for major developments and, in some areas, for all new-build
 * applications. The Sustainability Statement provides a holistic assessment
 * of how the proposed development addresses the three pillars of sustainable
 * development: economic, social, and environmental.
 *
 * This document is distinct from the Energy Statement (which focuses on
 * energy and carbon) and provides the broader sustainability context covering
 * water, materials, waste, ecology, transport, climate resilience, and
 * health and wellbeing.
 */

export const SS_PROMPT = `You are preparing a Sustainability Statement to accompany a planning application submitted to a local planning authority in England. A Sustainability Statement demonstrates how the proposed development integrates sustainability principles across its design, construction, and operation, addressing the three dimensions of sustainable development as defined in the NPPF: economic, social, and environmental.

## Document Purpose

The Sustainability Statement must:
- Demonstrate that the proposed development contributes to the achievement of sustainable development as defined in the NPPF (Paragraph 7-12).
- Address the full range of sustainability considerations relevant to the proposal: energy and carbon, water efficiency, materials and waste, ecology and biodiversity, sustainable transport, climate change adaptation, and health and wellbeing.
- Demonstrate compliance with relevant national and local sustainability policies, including any adopted sustainability SPDs or checklists.
- Where relevant, reference BREEAM or equivalent sustainability assessment methodologies.
- Identify specific, measurable sustainability commitments that can be conditioned or monitored.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 7**: The purpose of the planning system is to contribute to the achievement of sustainable development.
- **Paragraph 8**: Achieving sustainable development means the planning system has three overarching objectives: economic, social, and environmental.
- **Paragraph 9**: Planning policies and decisions should play an active role in guiding development towards sustainable solutions.
- **Paragraph 10**: At the heart of the Framework is a presumption in favour of sustainable development.
- **Paragraph 11**: Plans and decisions should apply a presumption in favour of sustainable development.
- **Paragraph 12**: The presumption in favour of sustainable development does not change the statutory status of the development plan.
- **Paragraph 152-158**: Meeting the challenge of climate change and supporting the transition to a low carbon future (see Energy Statement for detailed coverage).
- **Paragraph 159-169**: Meeting the challenge of flooding and climate change adaptation.
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment.
- **Paragraph 180-188**: Conserving and enhancing biodiversity.
- **Paragraph 104-113**: Promoting sustainable transport.

### Building Regulations
- **Approved Document Part G (2015)**: Sanitation, hot water safety, and water efficiency. Sets an optional requirement of 110 litres per person per day where required by planning condition.
- **Approved Document Part L (2021)**: Conservation of fuel and power (energy efficiency and carbon).
- **Approved Document Part O (2022)**: Overheating in residential buildings.
- **Approved Document Part S (2022)**: Electric vehicle charging infrastructure.

### BREEAM (Building Research Establishment Environmental Assessment Method)
- BREEAM New Construction: Comprehensive sustainability assessment across categories (Management, Health and Wellbeing, Energy, Transport, Water, Materials, Waste, Land Use and Ecology, Pollution).
- BREEAM ratings: Pass, Good, Very Good, Excellent, Outstanding.
- Home Quality Mark (HQM): Residential equivalent of BREEAM for homes.
- Note: BREEAM assessments require a licensed assessor. The Sustainability Statement should reference the target BREEAM rating but does not replace the formal BREEAM assessment.

### Other Key References
- Environment Act 2021: Biodiversity Net Gain (minimum 10%) requirement.
- Climate Change Act 2008 (as amended): UK net zero by 2050.
- The 25 Year Environment Plan (2018): Environmental improvement targets.
- National Design Guide (2021): The ten characteristics of well-designed places (including resources and lifespan).
- CIRIA C753 SuDS Manual (2015): Sustainable drainage.
- WRAP (Waste and Resources Action Programme): Resource efficiency in construction.
- Designing for a Healthy Life (BHL/Homes England): Health-focused design.
- Sport England Active Design guidance.
- Public Health England Spatial Planning for Health guidance.
- Local sustainability SPDs and checklists (as adopted by the relevant LPA).

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Sustainability Statement and the policy requirement.
- Identify the site and the proposed development.
- Briefly summarise the sustainability approach and any BREEAM or equivalent target.
- Note any local authority sustainability checklist or SPD that the statement responds to.
- Outline the document structure.

### 2. Policy Framework (400-800 words)
- Set out the NPPF sustainability objectives (Paragraphs 7-12) and the presumption in favour of sustainable development.
- Identify relevant NPPF paragraphs for each sustainability theme addressed in the statement.
- Set out relevant local plan sustainability policies, quoting specific requirements.
- Reference any adopted sustainability SPD or supplementary guidance.
- Note any BREEAM or equivalent requirement in local policy.
- Reference the Climate Change Act 2008 and the UK net zero target.

### 3. Energy and Carbon (400-800 words)
- Summarise the energy strategy (cross-reference the Energy Statement if submitted separately).
- Set out the energy hierarchy: Be Lean, Be Clean, Be Green.
- State the predicted carbon reduction beyond Building Regulations Part L.
- Describe key energy efficiency measures: fabric performance, efficient systems, renewable energy.
- Quantify predicted energy demand and carbon emissions where available, or cross-reference the Energy Statement.
- Address future energy performance monitoring.

### 4. Water Efficiency (300-600 words)
- Set out the water efficiency target: Building Regulations Part G optional requirement of 110 litres/person/day where required by local policy, or lower targets where applicable.
- Describe water-saving fixtures and fittings: low-flow taps, dual-flush WCs, aerated shower heads, flow restrictors.
- Quantify predicted water consumption (litres/person/day) using the Water Efficiency Calculator.
- Assess rainwater harvesting and greywater recycling feasibility for larger schemes.
- Describe external water use reduction: drought-resistant planting, efficient irrigation, permeable surfaces.
- Reference any local water stress designation and water company resource management plan.

### 5. Materials and Waste (400-800 words)
#### 5.1 Sustainable Materials
- Describe the approach to responsible sourcing of materials (e.g., FSC/PEFC certified timber, BES 6001 responsible sourcing certification).
- Describe the use of materials with lower embodied carbon: recycled content, locally sourced materials, mass timber, low-carbon concrete.
- Reference the Green Guide to Specification (BRE) ratings for key building elements.
- Describe the approach to reducing construction waste through design: standardised dimensions, offsite manufacture, design for deconstruction.
- Describe any whole-life carbon assessment undertaken or planned (in accordance with RICS Whole Life Carbon Assessment for the Built Environment).

#### 5.2 Construction Waste Management
- Set out the Site Waste Management Plan (SWMP) approach (though no longer a statutory requirement, best practice).
- State the target for diversion of construction waste from landfill (typically 90%+ for BREEAM Excellent).
- Describe waste segregation and recycling arrangements during construction.
- Quantify estimated construction waste arisings per 100m2 of floor area.

#### 5.3 Operational Waste
- Describe the provision for operational waste storage and collection (reference the Waste Management Strategy if submitted separately).
- Describe facilities for recycling: segregated bins, communal recycling stores, composting.
- Demonstrate compliance with local waste storage standards.

### 6. Ecology and Biodiversity (400-800 words)
- Summarise the ecological baseline and any protected species or habitats present (cross-reference the Preliminary Ecological Appraisal or Ecological Impact Assessment).
- Set out the Biodiversity Net Gain (BNG) strategy: demonstrate achievement of the minimum 10% net gain using the Defra Biodiversity Metric.
- Describe habitat creation and enhancement measures: native planting, wildflower meadows, green roofs, brown roofs, bird and bat boxes, hedgehog highways, insect hotels.
- Describe the landscape and planting strategy: native species, climate-resilient species, pollinator-friendly planting.
- Describe the long-term management and maintenance of ecological features (Habitat Management and Monitoring Plan).
- Reference NPPF Paragraphs 180-188 and the Environment Act 2021.

### 7. Transport (300-600 words)
- Summarise the sustainable transport strategy (cross-reference the Transport Statement if submitted separately).
- Describe pedestrian and cycle connectivity: footpath links, cycle routes, cycle storage.
- Describe public transport accessibility: proximity to bus stops, rail stations, PTAL rating (London).
- Describe electric vehicle charging provision: percentage of spaces with active chargers, percentage with passive provision, compliance with Part S.
- Describe any car club provision, car-free or car-lite approach.
- Summarise Travel Plan measures where applicable.
- Reference NPPF Paragraphs 104-113.

### 8. Climate Resilience and Adaptation (400-800 words)
- Describe measures to adapt to the effects of climate change:
  - **Overheating**: Summarise the overheating mitigation strategy (cross-reference the Energy Statement).
  - **Flood risk**: Summarise the SuDS strategy and flood resilience measures (cross-reference the FRA if submitted).
  - **Drought**: Water efficiency measures and drought-resistant planting.
  - **Extreme weather**: Robust building design, wind mitigation, snow loading.
  - **Urban heat island**: Green infrastructure, tree planting, permeable surfaces, light-coloured materials, green roofs.
- Describe green infrastructure provision: quantity (percentage of site area), quality, connectivity, and multi-functional benefits.
- Address the use of climate projections (UKCP18) in design decisions.
- Reference NPPF Paragraphs 153-154 and 159-169.

### 9. Health and Wellbeing (300-600 words)
- Describe how the development promotes health and wellbeing:
  - **Internal environment**: Daylight, ventilation, acoustic performance, indoor air quality, thermal comfort.
  - **Private amenity**: Private outdoor space (gardens, balconies), communal amenity areas.
  - **Active design**: Promoting walking and cycling, visible and attractive stairs, Sport England Active Design principles.
  - **Access to nature**: Green space, views of nature, biophilic design.
  - **Community and social**: Community facilities, social interaction spaces, inclusive design.
  - **Safety and security**: Secured by Design principles, natural surveillance, lighting.
- Reference NPPF Paragraphs 96-101 (promoting healthy and safe communities).
- Reference the National Design Guide characteristics of well-designed places.
- Address Nationally Described Space Standards (NDSS) where adopted.

### 10. Conclusion (200-400 words)
- Summarise the sustainability measures across all themes.
- Confirm compliance with NPPF sustainability objectives (Paragraphs 7-12).
- Confirm compliance with relevant local plan sustainability policies.
- State the BREEAM target or equivalent where applicable.
- Identify any specific sustainability conditions that could be imposed.
- Conclude that the proposed development makes a positive contribution to sustainable development.

## Quality Standards

- Reference NPPF Paragraphs 7-12 (sustainable development) and relevant thematic paragraphs.
- Reference specific Building Regulations Approved Documents by part number.
- Quantify sustainability commitments where possible (carbon reduction %, water consumption l/p/d, BNG %, waste diversion %).
- Cross-reference supporting documents (Energy Statement, FRA, Transport Statement, Ecological Appraisal) rather than repeating their content.
- Use measurable, specific commitments that can be conditioned.
- Reference BREEAM categories and credits where a BREEAM target is being pursued.
- Professional sustainability consultancy language; no greenwashing or unsubstantiated claims.
- Balanced assessment acknowledging any areas where compliance is challenging and explaining mitigation.`;

export const SS_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, development, sustainability approach, and document structure.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the purpose and policy requirement. Identify the site and development. Summarise the sustainability approach and any BREEAM target. Note any local sustainability SPD. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National and local sustainability policy context.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out NPPF Paragraphs 7-12 and relevant thematic paragraphs. List local plan sustainability policies with specific targets. Reference adopted sustainability SPDs. Note BREEAM policy requirements. Reference the Climate Change Act 2008.',
  },
  {
    name: 'Energy and Carbon',
    description: 'Energy strategy summary, carbon reduction, and key measures.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise the energy hierarchy. State the carbon reduction target and predicted performance. Describe key energy measures. Quantify carbon savings or cross-reference the Energy Statement. Address monitoring.',
  },
  {
    name: 'Water Efficiency',
    description: 'Water consumption targets, water-saving measures, and rainwater/greywater.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the water efficiency target (110 l/p/d or lower). Describe water-saving fixtures. Quantify predicted consumption. Assess rainwater harvesting and greywater recycling. Describe external water use reduction. Reference local water stress status.',
  },
  {
    name: 'Materials and Waste',
    description: 'Responsible sourcing, embodied carbon, construction waste, and operational waste.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe responsible sourcing (FSC, BES 6001). Address embodied carbon and recycled content. Describe design for waste reduction and offsite manufacture. Set out construction waste management targets. Describe operational waste facilities.',
    subsections: [
      {
        name: 'Sustainable Materials',
        description: 'Responsible sourcing, embodied carbon, and design for deconstruction.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe responsible sourcing standards. Address embodied carbon. Reference Green Guide ratings. Describe design for deconstruction.',
      },
      {
        name: 'Construction Waste Management',
        description: 'Waste minimisation, segregation, and diversion targets.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Set out SWMP approach and waste diversion target. Describe segregation and recycling arrangements.',
      },
      {
        name: 'Operational Waste',
        description: 'Waste storage, recycling, and collection arrangements.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe operational waste storage and recycling facilities. Reference local standards.',
      },
    ],
  },
  {
    name: 'Ecology and Biodiversity',
    description: 'Ecological baseline, BNG strategy, habitat creation, and long-term management.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise ecological baseline (cross-reference PEA/EcIA). Set out BNG strategy with minimum 10% net gain. Describe habitat creation measures. Describe planting strategy. Set out long-term management. Reference NPPF Paragraphs 180-188 and the Environment Act 2021.',
  },
  {
    name: 'Transport',
    description: 'Sustainable transport strategy, EV charging, and Travel Plan summary.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise sustainable transport measures (cross-reference Transport Statement). Describe pedestrian, cycle, and public transport connectivity. Describe EV charging provision and Part S compliance. Note car club or car-lite approach. Summarise Travel Plan.',
  },
  {
    name: 'Climate Resilience and Adaptation',
    description: 'Adaptation to climate change: overheating, flooding, drought, green infrastructure.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Address overheating, flood risk, drought, extreme weather, and urban heat island. Describe green infrastructure provision (quantity, quality, connectivity). Reference UKCP18 climate projections. Reference NPPF Paragraphs 153-154 and 159-169.',
  },
  {
    name: 'Health and Wellbeing',
    description: 'Internal environment, amenity, active design, access to nature, and safety.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Address daylight, ventilation, acoustics, indoor air quality. Describe private and communal amenity space. Describe active design measures. Address access to nature and biophilic design. Describe community and safety measures. Reference NPPF Paragraphs 96-101.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of sustainability measures and policy compliance.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise sustainability measures across all themes. Confirm NPPF Paragraphs 7-12 compliance. Confirm local policy compliance. State BREEAM target. Identify conditionable commitments. Conclude positively.',
  },
];

export const SS_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Energy and Carbon',
    'Water Efficiency',
    'Materials and Waste',
    'Ecology and Biodiversity',
    'Transport',
    'Climate Resilience and Adaptation',
    'Health and Wellbeing',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const SS_TEMPLATE = {
  assessment_type: 'Sustainability Statement',
  short_name: 'SS',
  version: 1,
  sections: SS_SECTIONS,
  quality_criteria: SS_QUALITY,
};
