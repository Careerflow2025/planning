import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Townscape and Visual Impact Assessment (TVIA) -- required for
 * developments in urban and suburban settings that have the potential to
 * result in significant effects on townscape character and visual amenity.
 * The TVIA follows the methodology set out in the Guidelines for Landscape
 * and Visual Impact Assessment, Third Edition (GLVIA3), adapted for the
 * urban context (townscape rather than landscape).
 *
 * This is distinct from a Landscape and Visual Impact Assessment (LVIA),
 * which focuses on landscape character in rural or semi-rural settings.
 * The TVIA addresses townscape character areas, streetscapes, urban form,
 * and visual effects on receptors within the built environment.
 */

export const TVIA_PROMPT = `You are preparing a Townscape and Visual Impact Assessment (TVIA) to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A Townscape and Visual Impact Assessment is required to demonstrate that:
1. The effects of the proposed development on townscape character have been systematically assessed.
2. The visual effects of the proposed development on identified visual receptors have been assessed.
3. The assessment follows the established GLVIA3 methodology, adapted for the townscape (urban) context.
4. Cumulative effects in combination with other existing and proposed developments have been considered.
5. Mitigation and enhancement measures have been identified.
6. A professional judgement on the significance of townscape and visual effects has been provided.

The TVIA should be prepared by a suitably qualified professional (typically a chartered landscape architect or urban designer with experience in townscape assessment).

## Key Policy and Guidance References

### Guidelines for Landscape and Visual Impact Assessment, Third Edition (GLVIA3, 2013)
- Published by the Landscape Institute and the Institute of Environmental Management and Assessment (IEMA).
- The established methodology for assessing landscape/townscape and visual effects in the UK.
- Defines the approach for:
  - **Townscape effects**: changes to the physical elements, character, and quality of the townscape.
  - **Visual effects**: changes to specific views and the visual amenity of identified receptors.
- Assessment of significance combines:
  - **Sensitivity of the receptor**: value and susceptibility to change.
  - **Magnitude of effect**: size/scale, geographical extent, duration, and reversibility.
  - **Significance**: the overall judgement combining sensitivity and magnitude (typically on a scale from negligible to major, beneficial or adverse).
- Distinguishes between landscape/townscape effects (on the resource itself) and visual effects (on people's views).
- Requires professional judgement throughout, supported by reasoned narrative.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 126**: The creation of high quality, beautiful and sustainable buildings and places is fundamental to what the planning and development process should achieve. Good design is a key aspect of sustainable development.
- **Paragraph 130**: Planning policies and decisions should ensure that developments will function well and add to the overall quality of the area; are visually attractive as a result of good architecture, layout and appropriate and effective landscaping; are sympathetic to local character and history, including the surrounding built environment and landscape setting; establish or maintain a strong sense of place.
- **Paragraph 131**: Trees make an important contribution to the character and quality of urban environments, and can also help mitigate and adapt to climate change.
- **Paragraph 132**: Design quality should be considered throughout the evolution and assessment of individual proposals.
- **Paragraph 134**: Development that is not well designed should be refused, especially where it fails to reflect local design policies and government guidance on design.
- **Paragraph 135**: Planning policies and decisions should ensure that developments are visually attractive as a result of good architecture, are sympathetic to local character, and establish a strong sense of place.
- **Paragraph 136**: Local planning authorities should seek to ensure that the quality of approved development is not materially diminished between permission and completion.
- **Paragraph 199-208**: Section on heritage assets, relevant where the townscape includes or affects the setting of designated heritage assets.

### Historic England Guidance
- **The Setting of Heritage Assets (Historic Environment Good Practice Advice in Planning Note 3, 2nd Edition, 2017)**: Provides guidance on assessing the impact of development on the setting of heritage assets. Relevant where the proposed development is visible from or affects the setting of listed buildings, conservation areas, registered parks and gardens, or scheduled monuments.
- **Tall Buildings (Historic England Advice Note 4, 2022)**: Guidance on assessing the impact of tall buildings on the historic environment, including townscape effects.

### London Views Management Framework (LVMF) -- for developments in London
- Supplementary Planning Guidance to the London Plan.
- Identifies strategically important views across London.
- Defines viewing corridors and assessment points.
- Relevant for developments that may be visible within or affect designated London views.
- Includes assessment methodology for impacts on these views.

### Local Plan Policies
- Reference the relevant local plan design, character, and townscape policies.
- Many local plans define character areas with specific design guidance.
- Conservation area appraisals and management plans provide baseline townscape character information.
- Tall buildings policies may be relevant for developments that exceed the prevailing height.
- Reference any local design codes, village design statements, or neighbourhood plan design policies.

### Other Key References
- Landscape Institute Technical Guidance Note 06/19: Visual Representation of Development Proposals.
- Landscape Institute Technical Guidance Note 02/21: Assessing landscape value outside national designations.
- Urban Design Compendium (English Partnerships / Homes England).
- Manual for Streets (DfT, 2007) and Manual for Streets 2 (CIHT, 2010).
- National Design Guide (MHCLG, 2021).
- National Model Design Code (MHCLG, 2021).

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the TVIA and the policy basis for its preparation.
- Identify the application site by address, National Grid reference, and local planning authority.
- Summarise the proposed development: building type(s), height(s), number of storeys, massing, footprint, and architectural approach.
- Define the scope of the assessment: townscape effects and visual effects within a defined study area.
- State the study area and its extent (typically a radius from the site boundary, justified by the scale and height of the proposed development and the zone of theoretical visibility).
- Confirm the methodology: GLVIA3, adapted for the townscape context.
- State the qualifications and experience of the assessor (or note "[PREPARED BY A SUITABLY QUALIFIED PROFESSIONAL]" if for review).
- Note any consultations with the local planning authority, Historic England, or other stakeholders on the scope and methodology.
- Outline the document structure.
- Note the relationship with any supporting documents: Accurate Visual Representations (AVRs), verified views, heritage assessment.

### 2. Policy Framework (400-700 words)
- Set out the national planning policy context: NPPF Chapter 12 (paragraphs 126-136) on achieving well-designed and beautiful places.
- Reference NPPF heritage policies (paragraphs 199-208) where relevant.
- Reference GLVIA3 as the assessment methodology.
- For London developments: reference the London Views Management Framework (LVMF) and relevant London Plan policies on design and tall buildings.
- Reference Historic England guidance on the setting of heritage assets and tall buildings where relevant.
- Set out relevant local plan policies:
  - Design and character policies.
  - Tall buildings policies (height thresholds, designated locations, assessment criteria).
  - Conservation area policies and appraisals.
  - Strategic views or local views identified in the local plan or SPDs.
  - Heritage asset protection policies.
- Reference the National Design Guide and any local design codes.
- Explain how the TVIA addresses these policy requirements.

### 3. Methodology (500-900 words)
- Describe the GLVIA3 methodology as applied to the townscape context:

#### 3.1 Townscape Assessment Methodology
- Define townscape character: the distinct, recognisable, and consistent pattern of elements that makes one urban area different from another.
- Explain the approach to defining townscape character areas (TCAs) within the study area.
- Explain the assessment of sensitivity:
  - **Value**: recognised quality (conservation area designation, positive townscape qualities, historic interest, contribution to sense of place).
  - **Susceptibility to change**: the ability of the townscape to accommodate the specific type of development proposed without undue negative effects.
  - **Sensitivity**: combining value and susceptibility (low, medium, high).
- Explain the assessment of magnitude of effect:
  - **Size/scale**: how much of the townscape character would be changed and the degree of contrast or integration with existing elements.
  - **Geographical extent**: the area over which the effect would be felt.
  - **Duration and reversibility**: temporary or permanent, reversible or irreversible.
  - **Magnitude**: combining size, extent, duration (negligible, low, medium, high).
- Explain the assessment of significance: combining sensitivity and magnitude using a significance matrix (negligible, minor, moderate, major; beneficial or adverse).

#### 3.2 Visual Assessment Methodology
- Define visual receptors: people who would be affected by changes in views and visual amenity.
- Explain the approach to identifying visual receptors and representative viewpoints.
- Explain receptor sensitivity:
  - **Value of the view**: designated views, recognised viewpoints, cultural associations.
  - **Susceptibility of the receptor**: residential occupiers (high), users of public rights of way and open spaces (high/medium), road users (low/medium), workers (low).
  - **Sensitivity**: combining value and susceptibility.
- Explain the assessment of magnitude of visual effect:
  - **Size/scale**: degree of change in the view, proportion of the view affected, contrast with existing elements.
  - **Geographical extent**: angle of view occupied, distance from the development.
  - **Duration and reversibility**.
  - **Magnitude**: negligible, low, medium, high.
- Explain the significance assessment for visual effects.

#### 3.3 Cumulative Assessment Methodology
- Describe the approach to cumulative assessment: in-combination effects with other committed or proposed developments.
- Define the cumulative schemes considered (consented schemes, applications pending determination, allocations).
- State the source of cumulative scheme data (local planning authority records, planning portals).

### 4. Baseline Townscape Character (600-1200 words)
- Describe the existing townscape character within the study area:
  - Identify and describe the townscape character areas (TCAs): their defining characteristics, urban form, building typologies, heights, materials, architectural styles, streetscape qualities, open spaces, trees and vegetation, landmarks and focal points, historical development patterns.
  - Assess the value of each TCA: designated areas (conservation areas, heritage assets), positive contributions to sense of place, condition and intactness.
  - Assess the susceptibility of each TCA to the type of development proposed.
  - Determine the overall sensitivity of each TCA.
- Describe relevant designations within the study area:
  - Conservation areas (reference character appraisals).
  - Listed buildings and their settings.
  - Registered parks and gardens.
  - Scheduled monuments.
  - Locally listed buildings.
  - Strategic or local views.
- Describe the site-specific townscape context:
  - The character of the site itself: current use, built form (or vacancy), contribution to the streetscape.
  - The immediate context: adjacent buildings, streets, and spaces.
  - The wider context: prevailing heights, densities, and character within the study area.

### 5. Visual Baseline (400-800 words)
- Identify the visual receptors and representative viewpoints:
  - List each viewpoint with its location (grid reference), direction of view, distance from the site, and receptor type.
  - Justify the selection of viewpoints: they should represent the range of receptors and distances from which the development would be visible.
  - Include viewpoints agreed with the local planning authority and/or Historic England.
- Describe the existing view from each viewpoint:
  - Key elements in the view: buildings, vegetation, skyline, landmarks, streetscape.
  - Quality and character of the view.
  - Any existing detracting elements.
- Assess the sensitivity of each viewpoint/receptor:
  - Value of the view: designated views, recognised viewpoints, cultural significance.
  - Susceptibility of the receptor type.
  - Overall sensitivity: low, medium, high.
- Reference the existing view photographs or Accurate Visual Representations (AVRs) if provided.
- Note the Zone of Theoretical Visibility (ZTV) analysis if undertaken.

### 6. Proposed Development (300-600 words)
- Describe the proposed development as it relates to townscape and visual assessment:
  - Building heights and massing: maximum height, shoulder height, floor-to-ceiling heights.
  - Architectural approach: form, silhouette, facade articulation, materials, colours.
  - Scale and proportion relative to the surrounding context.
  - Relationship to the street: setbacks, ground-floor uses, entrances, active frontages.
  - Landscaping: proposed trees, planting, public realm improvements.
  - Lighting: proposed external lighting strategy.
- Describe any design features that respond to the townscape context:
  - Height stepping, shoulder lines, material references to local character.
  - Views corridors maintained, landmarks respected, skyline contribution.
- Reference the Design and Access Statement for the full design rationale.

### 7. Townscape Effects Assessment (600-1200 words)
- For each townscape character area within the study area, assess the effect of the proposed development:
  - **Sensitivity** (established in the baseline).
  - **Magnitude of effect**: describe how the proposed development would affect the character area -- would it change the defining characteristics, introduce new elements, contrast with or complement existing character?
  - **Significance**: combine sensitivity and magnitude to determine significance.
  - **Nature**: beneficial or adverse? Could the development enhance townscape character through replacing a negative element, improving public realm, or introducing high-quality architecture?
- For the site itself: assess the effect of removing the existing condition and introducing the proposed development.
- For adjacent character areas: assess the effect of the proposed development as experienced from within those areas.
- For conservation areas: assess the effect on the character and appearance of the conservation area, referencing the character appraisal.
- For heritage assets: assess the effect on the setting of listed buildings, scheduled monuments, and registered parks and gardens, referencing Historic England guidance.
- Summarise the townscape effects in a table: TCA, sensitivity, magnitude, significance, nature.

### 8. Visual Effects Assessment (600-1200 words)
- For each representative viewpoint, assess the visual effect of the proposed development:
  - **Receptor sensitivity** (established in the baseline).
  - **Magnitude of visual effect**: describe how the proposed development would appear in the view -- would it be a dominant, prominent, noticeable, or barely perceptible addition? What proportion of the view would be affected? How would it relate to existing elements?
  - **Significance**: combine sensitivity and magnitude.
  - **Nature**: beneficial or adverse? Could the development improve the view through replacing a detracting element, adding visual interest, or creating a new landmark?
- Reference the Accurate Visual Representations (AVRs) or verified views for each viewpoint.
- Discuss the visual effects at different distances:
  - Close-range views: how does the development relate to the immediate streetscape?
  - Medium-range views: how does it sit within the wider urban context?
  - Long-range views: is it visible on the skyline? Does it affect strategic views?
- Summarise the visual effects in a table: viewpoint, receptor type, sensitivity, magnitude, significance, nature.

### 9. Cumulative Effects (300-600 words)
- Assess the cumulative townscape and visual effects of the proposed development in combination with other committed or proposed developments:
  - List the cumulative schemes considered (name, location, status, height/scale).
  - Assess how the proposed development, together with cumulative schemes, would affect townscape character and visual amenity.
  - Would the combined effect be greater than the effect of the proposed development alone?
  - Are there beneficial cumulative effects (e.g., comprehensive regeneration)?
- Present the cumulative assessment conclusions: significant beneficial, significant adverse, or not significant.

### 10. Mitigation (300-500 words)
- Describe the mitigation measures embedded in the design (primary mitigation):
  - Design quality: architectural merit, material selection, facade articulation.
  - Height and massing: stepping, setbacks, graduated heights in response to context.
  - Landscape and public realm: tree planting, landscape buffers, public realm enhancements.
  - Lighting: sensitive external lighting design to minimise light pollution and complement the townscape.
- Describe any additional mitigation measures proposed (secondary mitigation):
  - Detailed design conditions: materials, architectural detailing, boundary treatments.
  - Landscape management: long-term maintenance of planting and public realm.
  - Phasing: temporary landscaping or screening during construction.
- Describe enhancement measures:
  - Improvements to public realm, pedestrian connectivity, active frontages.
  - Removal of existing detracting elements (poor quality buildings, surface car parks).
  - New public spaces, green infrastructure, public art.
- Assess the residual effects (significance of effects after mitigation and enhancement).

### 11. Conclusion (300-600 words)
- Summarise the townscape effects assessment findings:
  - How many townscape character areas experience significant effects?
  - What is the overall nature of townscape effects (beneficial, adverse, mixed)?
  - Are there significant effects on conservation areas or heritage settings?
- Summarise the visual effects assessment findings:
  - How many viewpoints experience significant visual effects?
  - What is the overall nature of visual effects?
  - Do any designated views experience significant effects?
- Summarise the cumulative effects.
- Provide an overall professional judgement:
  - On balance, is the proposed development acceptable in terms of its townscape and visual effects?
  - Does the design quality contribute positively to the townscape?
  - Is the development consistent with NPPF Chapter 12 design objectives?
  - Does the development preserve or enhance the character and appearance of conservation areas (Section 72 of the Planning (Listed Buildings and Conservation Areas) Act 1990)?
  - Does the development preserve the setting of listed buildings (Section 66 of the 1990 Act)?
- State any recommended conditions relating to design quality, materials, landscaping, and lighting.
- Note the relationship with the Heritage Statement (if applicable) and Design and Access Statement.

## Quality Standards

- Reference GLVIA3 correctly as the assessment methodology.
- Use the correct GLVIA3 terminology: sensitivity (value + susceptibility), magnitude (size + extent + duration), significance, beneficial/adverse.
- Present a clear significance matrix and apply it consistently.
- Reference specific NPPF paragraphs (126-136, 199-208) by number.
- For London, reference the LVMF and relevant London Plan policies.
- Reference Historic England guidance where heritage assets are within the study area.
- Reference local plan design, character, and heritage policies.
- Present results in clear summary tables for townscape and visual effects.
- Distinguish between townscape effects (on the resource) and visual effects (on people).
- Where AVRs or verified views are not provided, recommend they are prepared by a specialist.
- Use correct terminology: townscape character area (TCA), visual receptor, zone of theoretical visibility (ZTV), accurate visual representation (AVR), conservation area, setting.
- Provide professional narrative justifying all significance judgements -- do not simply apply numbers.`;

export const TVIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site details, development summary, study area, and methodology.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the TVIA purpose and policy basis. Identify the site. Summarise the development. Define the study area. Confirm the GLVIA3 methodology. Note stakeholder consultations. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National, regional, and local planning policy context for townscape and visual assessment.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Set out NPPF Chapter 12 design paragraphs and heritage paragraphs. Reference GLVIA3. For London, reference LVMF. Reference Historic England guidance. Set out local plan design, character, and heritage policies.',
  },
  {
    name: 'Methodology',
    description: 'GLVIA3 assessment methodology for townscape and visual effects, including cumulative.',
    required: true,
    min_words: 500,
    max_words: 900,
    guidance:
      'Describe the townscape assessment methodology: sensitivity (value + susceptibility), magnitude, significance. Describe the visual assessment methodology: receptor identification, sensitivity, magnitude, significance. Describe the cumulative assessment methodology.',
    subsections: [
      {
        name: 'Townscape Assessment Methodology',
        description: 'Approach to assessing sensitivity, magnitude, and significance of townscape effects.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Define townscape character. Explain sensitivity (value + susceptibility), magnitude (size + extent + duration), and significance assessment.',
      },
      {
        name: 'Visual Assessment Methodology',
        description: 'Approach to assessing visual receptor sensitivity, magnitude, and significance.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Define visual receptors. Explain receptor sensitivity, magnitude of visual effect, and significance assessment.',
      },
      {
        name: 'Cumulative Assessment Methodology',
        description: 'Approach to assessing in-combination effects with other developments.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe cumulative scheme identification, data sources, and assessment approach.',
      },
    ],
  },
  {
    name: 'Baseline Townscape Character',
    description: 'Existing townscape character areas, designations, and site context.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Identify and describe townscape character areas: urban form, building types, heights, materials, styles, streetscape, open spaces. Assess value and susceptibility. Describe designations: conservation areas, listed buildings, registered parks. Describe the site-specific townscape context.',
  },
  {
    name: 'Visual Baseline',
    description: 'Identified visual receptors, representative viewpoints, and existing view descriptions.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'List viewpoints with location, direction, distance, and receptor type. Justify selection. Describe existing views. Assess receptor sensitivity. Reference existing view photographs or AVRs. Note ZTV if undertaken.',
  },
  {
    name: 'Proposed Development',
    description: 'Description of the proposed development relevant to townscape and visual assessment.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe heights, massing, architecture, materials, relationship to street, landscaping. Describe design features responding to townscape context. Reference the Design and Access Statement.',
  },
  {
    name: 'Townscape Effects Assessment',
    description: 'Assessment of effects on townscape character areas, conservation areas, and heritage settings.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'For each TCA: state sensitivity, describe magnitude, determine significance and nature. Assess effects on the site, adjacent areas, conservation areas, and heritage settings. Present summary table.',
  },
  {
    name: 'Visual Effects Assessment',
    description: 'Assessment of visual effects on identified receptors at representative viewpoints.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'For each viewpoint: state receptor sensitivity, describe magnitude, determine significance and nature. Reference AVRs. Discuss effects at different distances. Present summary table.',
  },
  {
    name: 'Cumulative Effects',
    description: 'Assessment of cumulative townscape and visual effects with other developments.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'List cumulative schemes. Assess combined townscape and visual effects. Identify whether cumulative effects are greater than individual effects. Note beneficial cumulative effects.',
  },
  {
    name: 'Mitigation',
    description: 'Primary design mitigation, secondary mitigation, and enhancement measures.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe embedded design mitigation. Describe additional mitigation measures and conditions. Describe enhancement measures. Assess residual effects after mitigation.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of townscape and visual effects, professional judgement, and policy compliance.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise townscape and visual effects. Provide overall professional judgement on acceptability. Confirm consistency with NPPF design policies. Note preservation of conservation area character and listed building settings. Recommend conditions.',
  },
];

export const TVIA_QUALITY: QualityCriteria = {
  min_policy_refs: 7,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Baseline Townscape Character',
    'Visual Baseline',
    'Proposed Development',
    'Townscape Effects Assessment',
    'Visual Effects Assessment',
    'Cumulative Effects',
    'Mitigation',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const TVIA_TEMPLATE = {
  assessment_type: 'Townscape and Visual Impact Assessment',
  short_name: 'TVIA',
  version: 1,
  sections: TVIA_SECTIONS,
  quality_criteria: TVIA_QUALITY,
};
