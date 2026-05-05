import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Landscape and Visual Impact Assessment (LVIA) -- required for developments
 * that have the potential to result in significant landscape or visual effects,
 * particularly in designated landscapes (AONB/National Landscapes, National Parks)
 * or valued landscapes, or for larger-scale developments in the open countryside.
 *
 * The LVIA follows the methodology set out in the Guidelines for Landscape and
 * Visual Impact Assessment, Third Edition (GLVIA3), published by the Landscape
 * Institute and IEMA (2013).
 */

export const LVIA_PROMPT = `You are preparing a Landscape and Visual Impact Assessment (LVIA) to accompany a planning application submitted to a local planning authority in England. The LVIA provides a systematic assessment of the effects of the proposed development on the landscape and on visual amenity, following the established methodology in the Guidelines for Landscape and Visual Impact Assessment, Third Edition (GLVIA3).

## Document Purpose

The LVIA must:
- Describe the existing landscape baseline: landscape character, landscape features, landscape designations, and landscape condition.
- Describe the existing visual baseline: visual receptors, views, and visual amenity.
- Assess the effects of the proposed development on landscape character and landscape features (landscape effects).
- Assess the effects of the proposed development on the views and visual amenity of identified receptors (visual effects).
- Assess cumulative landscape and visual effects in combination with other existing and proposed developments.
- Propose mitigation and enhancement measures and assess residual effects.
- Provide a professional judgement on the significance of landscape and visual effects.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment by (inter alia) protecting and enhancing valued landscapes and recognising the intrinsic character and beauty of the countryside.
- **Paragraph 176**: Great weight should be given to conserving and enhancing landscape and scenic beauty in National Parks, the Broads, and Areas of Outstanding Natural Beauty (now designated as National Landscapes), which have the highest status of protection in relation to these issues.
- **Paragraph 177**: When considering applications for development within National Parks, the Broads, and Areas of Outstanding Natural Beauty, permission should be refused for major development other than in exceptional circumstances, and where it can be demonstrated that the development is in the public interest (the major development test).
- **Paragraph 178**: Development within the setting of National Parks and AONBs should be sensitively located and designed to avoid or minimise adverse impacts on the designated areas.
- **Paragraph 180**: Planning policies and decisions should contribute to and enhance the natural and local environment.

### European Landscape Convention (2000, ratified by UK 2006)
- Defines landscape as "an area, as perceived by people, whose character is the result of the action and interaction of natural and/or human factors."
- Applies to all landscapes, not just designated or outstanding landscapes.
- Requires landscape protection, management, and planning.

### GLVIA3: Guidelines for Landscape and Visual Impact Assessment (3rd Edition, 2013)
The definitive methodology for LVIA in the UK. Key principles:
- Landscape and visual effects are assessed separately but related.
- **Landscape effects**: Effects on landscape as a resource (character, features, quality).
- **Visual effects**: Effects on views and visual amenity of people (receptors).
- Assessment involves professional judgement, not a mechanistic process.
- Significance is determined by combining sensitivity of the receptor/resource with the magnitude of change.
- Clear distinction between landscape effects and visual effects.
- Clear distinction between objective assessment and subjective value judgements.

### Landscape Institute Technical Guidance Notes
- Technical Guidance Note 06/19: Visual Representation of Development Proposals (Type 1-4 visualisations).
- Technical Guidance Note 02/21: Assessing landscape value outside national designations.
- Technical Guidance Note 02/17: Visual representation of development proposals (photography and photomontage).

### Other Key References
- Natural England National Character Area (NCA) profiles.
- County or district-level Landscape Character Assessments (LCAs).
- Local Landscape Designations: Special Landscape Areas (SLAs), Areas of Great Landscape Value (AGLVs), Local Landscape Areas.
- AONB/National Landscape Management Plans.
- National Park Management Plans and Local Plans.
- Historic Landscape Characterisation (HLC) data.
- Natural England and Historic England guidance on landscape.
- An Approach to Landscape Character Assessment (Natural England, 2014).

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the LVIA and the policy context.
- Identify the site, the proposed development, and the applicant.
- Define the study area for landscape assessment (typically 2-5km depending on development scale and landscape sensitivity; larger for wind turbines or tall structures).
- Define the study area for visual assessment (the Zone of Theoretical Visibility / ZTV where applicable).
- State the qualifications and experience of the assessor (or "[PREPARED BY A CHARTERED LANDSCAPE ARCHITECT]").
- State any agreed scope with the LPA or statutory consultees (e.g., agreed viewpoint locations).
- Outline the document structure.

### 2. Methodology (800-1500 words)
Set out the GLVIA3 methodology in detail:

#### 2.1 Overview of Approach
- Confirm that the assessment follows GLVIA3.
- Explain the distinction between landscape effects and visual effects.
- State that the assessment involves professional judgement.

#### 2.2 Landscape Assessment Methodology
- **Landscape sensitivity**: Determined by combining landscape value and landscape susceptibility to the type of development proposed.
  - **Landscape value**: Designated landscapes (national, local), landscape condition, scenic quality, rarity, representativeness, conservation interest, recreational value, perceptual qualities (wildness, tranquillity), associations.
  - **Landscape susceptibility**: The ability of the landscape to accommodate the specific type of development proposed without undue consequences for the maintenance of the baseline situation or the achievement of landscape planning policies and strategies.
- **Magnitude of landscape change**: Determined by the size or scale of the change, the geographical extent over which the change occurs, and the duration and reversibility of the change.
- **Significance of landscape effect**: Determined by combining landscape sensitivity with magnitude of change using a matrix or professional judgement. State the threshold for significance.

#### 2.3 Visual Assessment Methodology
- **Visual receptor sensitivity**: Determined by combining the value attached to particular views and the susceptibility of the viewer to change.
  - **Value of views**: Recognised viewpoints (e.g., in guidebooks, local plans), planning designations, heritage assets where setting contributes to experience.
  - **Susceptibility of viewers**: Residents (high), users of public rights of way and open spaces (high), travellers on scenic routes (medium-high), workers and travellers on major roads (low-medium).
- **Magnitude of visual change**: Determined by the size or scale of the change in the view, the geographical extent of the change (angle of view, distance), and the duration and reversibility of the change.
- **Significance of visual effect**: Determined by combining visual receptor sensitivity with magnitude of change.

#### 2.4 Assessment Scales
Present the scales used (typically five-point):
- Sensitivity: Very High, High, Medium, Low, Very Low.
- Magnitude: Large, Medium, Small, Negligible, No Change.
- Significance: Major, Moderate, Minor, Negligible.
- Nature of effect: Adverse, Neutral, Beneficial.
- State which combinations are considered "significant" in EIA terms (typically Major and Moderate).

#### 2.5 Cumulative Assessment Methodology
- Define cumulative landscape and visual effects.
- Identify the sources of cumulative schemes (planning register, allocated sites).
- Describe the approach to cumulative assessment (in-combination and in-succession).

#### 2.6 Limitations
- State any limitations: access constraints, seasonal factors, weather conditions, data gaps.

### 3. Policy Framework (400-800 words)
- Set out NPPF Paragraphs 174, 176-178, 180.
- Set out relevant local plan landscape policies.
- Describe any national landscape designations: AONB/National Landscape, National Park, Heritage Coast.
- Describe any local landscape designations: SLA, AGLV, Green Belt visual amenity, etc.
- Reference the AONB/National Landscape Management Plan or National Park policies where applicable.
- Reference Natural England NCA profiles for the study area.
- Reference county/district Landscape Character Assessments.

### 4. Baseline Landscape Assessment (800-1500 words)
#### 4.1 National Landscape Character
- Describe the National Character Area(s) (NCA) within which the site falls.
- Summarise key characteristics, key issues, and Statements of Environmental Opportunity.

#### 4.2 County/District Landscape Character
- Describe the relevant Landscape Character Type (LCT) and Landscape Character Area (LCA) from the published county/district LCA.
- Summarise key characteristics, condition, and sensitivity as identified in the published assessment.

#### 4.3 Site and Immediate Landscape Character
- Describe the site itself: land use, landform, vegetation, boundaries, water features, built form.
- Describe the immediate landscape context: field patterns, settlement form, road network, public rights of way, land cover.
- Describe the landscape condition: well-maintained, declining, degraded.
- Describe perceptual qualities: tranquillity, remoteness, visual diversity, openness.

#### 4.4 Landscape Value
- Assess the landscape value of the site and surroundings, considering:
  - Designated landscape status (national, local, or undesignated).
  - Landscape condition and scenic quality.
  - Rarity, representativeness, and conservation interest.
  - Recreational value and public access.
  - Perceptual qualities (wildness, tranquillity).
  - Associations (artistic, literary, historical).
- Reference LI TGN 02/21 criteria for assessing value outside national designations.

### 5. Visual Baseline (600-1200 words)
#### 5.1 Zone of Theoretical Visibility (ZTV)
- Describe the ZTV methodology (bare earth or screened) and present results.
- Identify the areas from which the development will be theoretically visible.
- Note limitations of the ZTV (typically bare-earth models overestimate visibility).

#### 5.2 Viewpoint Selection
- List the representative, illustrative, and specific viewpoints selected.
- Justify viewpoint selection: agreed with LPA, representing key receptor groups and distances.
- Present a viewpoint location plan.
- For each viewpoint, provide:
  - Viewpoint number and name.
  - Grid reference and elevation (AOD).
  - Direction of view toward the site.
  - Distance from the site.
  - Receptor type and sensitivity.
  - Description of existing view.

#### 5.3 Visual Receptors
- Identify and categorise visual receptors:
  - Residential properties (individual and groups).
  - Users of public rights of way (PRoW), bridleways, national trails.
  - Users of public open spaces, parks, and recreation areas.
  - Road users (classified by road type).
  - Rail passengers.
  - Workers in surrounding premises.
  - Visitors to heritage assets, tourist destinations.
- Assign sensitivity to each receptor group.

### 6. Landscape Effects Assessment (800-1500 words)
- For each landscape receptor (LCT, LCA, site landscape, individual features):
  - State the sensitivity (combining value and susceptibility).
  - Describe the nature and magnitude of change during construction and operation.
  - Assess the significance of the landscape effect.
  - State whether the effect is adverse, neutral, or beneficial.
- Address effects on:
  - Overall landscape character.
  - Individual landscape features (trees, hedgerows, watercourses, field patterns).
  - Perceptual qualities (tranquillity, openness, visual diversity).
  - Landscape designations (where applicable).
- Present results in a summary table.

### 7. Visual Effects Assessment (800-1500 words)
- For each representative viewpoint:
  - State the receptor type and sensitivity.
  - Describe the existing view (composition, focus, depth, quality).
  - Describe the predicted change to the view during construction and at completion (Year 1).
  - Describe the predicted change at maturity (Year 15) after mitigation planting has established.
  - State the magnitude of change (construction, Year 1, Year 15).
  - State the significance of visual effect (construction, Year 1, Year 15).
  - State whether the effect is adverse, neutral, or beneficial.
- For each receptor group (where not covered by representative viewpoints):
  - Summarise the range of visual effects experienced.
- Present results in a summary table.
- Reference photomontages or visualisations where prepared (or "[VISUALISATIONS TO BE PREPARED]").

### 8. Cumulative Effects (400-800 words)
- List the cumulative schemes considered (with planning reference, description, and status).
- Assess cumulative landscape effects: the combined effect of the proposed development and the cumulative schemes on landscape character and features.
- Assess cumulative visual effects: the combined effect on views from key viewpoints and for key receptor groups.
- Distinguish between in-combination effects (seen together) and in-succession effects (seen in sequence).
- Conclude on the significance of cumulative effects.

### 9. Mitigation and Enhancement (400-800 words)
- Describe embedded mitigation: design measures incorporated into the development to avoid or reduce landscape and visual effects (siting, scale, materials, colour, layout, retention of existing features).
- Describe additional mitigation: proposed planting, screening, earthworks, lighting controls.
- Describe enhancement measures: new landscape features, habitat creation, improved public access, removal of detracting elements.
- Provide a landscape and planting strategy summary (species, sizes, densities, management).
- Describe the establishment and long-term management of mitigation planting (typically 15-25 year management plan).

### 10. Residual Effects (400-800 words)
- Assess the residual landscape effects at Year 15 (after mitigation planting establishment).
- Assess the residual visual effects at Year 15 for each representative viewpoint.
- Present a summary table of residual effects.
- Identify any significant residual effects that remain after mitigation.
- State whether any significant adverse residual effects are outweighed by the benefits of the development.

### 11. Conclusion (400-800 words)
- Summarise the key landscape and visual effects of the proposed development.
- Identify any significant effects and their nature (adverse/beneficial).
- Summarise the mitigation and enhancement strategy.
- Summarise residual effects.
- Confirm compliance with NPPF Paragraphs 174 and 176-178 (where designated landscapes are involved).
- Confirm compliance with relevant local plan landscape policies.
- State the overall conclusion on the acceptability of the landscape and visual effects.

## Quality Standards

- Reference GLVIA3 as the methodology throughout.
- Reference specific NPPF paragraphs (174, 176-178, 180) by number.
- Clearly distinguish between landscape effects and visual effects.
- Use a structured and consistent assessment framework (sensitivity x magnitude = significance).
- Present assessment scales and define the threshold for significance.
- Provide viewpoint descriptions with grid references, distances, and receptor types.
- Present summary tables for landscape effects, visual effects, and residual effects.
- Reference published Landscape Character Assessments (NCA and county/district level).
- Use professional landscape architecture terminology throughout: landscape character, visual amenity, receptor, sensitivity, magnitude, significance.
- Where visualisations have not been prepared, state this and recommend they be commissioned.
- Address both construction phase and operational phase effects.
- Address effects at Year 1 and Year 15 (maturity of mitigation planting).`;

export const LVIA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, development, study area, assessor qualifications, and document structure.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the purpose and policy context. Identify the site and development. Define the landscape and visual study areas. State assessor qualifications. Note any agreed scope with LPA. Outline the document structure.',
  },
  {
    name: 'Methodology',
    description: 'GLVIA3 methodology for landscape and visual assessment, scales, cumulative approach, and limitations.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Set out the GLVIA3 methodology. Explain landscape sensitivity (value + susceptibility) and magnitude of change. Explain visual receptor sensitivity and magnitude of visual change. Present assessment scales. Define significance thresholds. Describe cumulative methodology. State limitations.',
    subsections: [
      {
        name: 'Landscape Assessment Methodology',
        description: 'Sensitivity, magnitude, and significance framework for landscape effects.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'Define landscape value, susceptibility, sensitivity. Define magnitude of landscape change. Define significance determination.',
      },
      {
        name: 'Visual Assessment Methodology',
        description: 'Sensitivity, magnitude, and significance framework for visual effects.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'Define view value, viewer susceptibility, receptor sensitivity. Define magnitude of visual change. Define significance determination.',
      },
      {
        name: 'Assessment Scales and Cumulative Approach',
        description: 'Five-point scales, significance thresholds, and cumulative methodology.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Present sensitivity, magnitude, and significance scales. State significance threshold. Describe cumulative assessment approach.',
      },
    ],
  },
  {
    name: 'Policy Framework',
    description: 'National and local landscape policy, designations, and published character assessments.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out NPPF Paragraphs 174, 176-178, 180. List local plan landscape policies. Describe national and local landscape designations. Reference AONB/NP management plans. Reference NCA profiles and published LCAs.',
  },
  {
    name: 'Baseline Landscape Assessment',
    description: 'National, county/district, and site-level landscape character, condition, and value.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'Describe the NCA. Describe the LCT/LCA from published assessments. Describe site and immediate landscape character, condition, and perceptual qualities. Assess landscape value using LI TGN 02/21 criteria.',
    subsections: [
      {
        name: 'National and Regional Landscape Character',
        description: 'NCA and county/district LCT/LCA description.',
        required: true,
        min_words: 300,
        max_words: 600,
        guidance: 'Describe the NCA and published LCT/LCA key characteristics.',
      },
      {
        name: 'Site and Local Landscape Character',
        description: 'Detailed description of site and immediate surroundings.',
        required: true,
        min_words: 300,
        max_words: 600,
        guidance: 'Describe site land use, landform, vegetation, boundaries. Describe condition and perceptual qualities.',
      },
      {
        name: 'Landscape Value Assessment',
        description: 'Assessment of landscape value using established criteria.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Assess value against designation, condition, scenic quality, rarity, recreation, perceptual qualities, associations.',
      },
    ],
  },
  {
    name: 'Visual Baseline',
    description: 'Zone of Theoretical Visibility, viewpoint selection, and visual receptor identification.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Describe ZTV methodology and results. List viewpoints with grid references, distances, directions, and receptor types. Describe existing views. Identify and categorise visual receptor groups with sensitivity.',
    subsections: [
      {
        name: 'Zone of Theoretical Visibility',
        description: 'ZTV methodology and extent of theoretical visibility.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe ZTV methodology (bare earth or screened). Summarise visibility extent and limitations.',
      },
      {
        name: 'Viewpoint Selection and Description',
        description: 'Selected viewpoints with locations, receptors, and existing view descriptions.',
        required: true,
        min_words: 300,
        max_words: 600,
        guidance: 'List viewpoints with number, name, NGR, elevation, distance, direction, receptor type, and existing view description.',
      },
      {
        name: 'Visual Receptors',
        description: 'Identification and sensitivity of receptor groups.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Identify receptor groups: residents, PRoW users, road users, workers, visitors. Assign sensitivity.',
      },
    ],
  },
  {
    name: 'Landscape Effects Assessment',
    description: 'Assessment of effects on landscape character, features, and perceptual qualities.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'For each landscape receptor: state sensitivity, describe nature and magnitude of change, assess significance. Address character, features, perceptual qualities, and designations. Present summary table.',
  },
  {
    name: 'Visual Effects Assessment',
    description: 'Assessment of effects on views from representative viewpoints and receptor groups.',
    required: true,
    min_words: 800,
    max_words: 1500,
    guidance:
      'For each viewpoint: state receptor sensitivity, describe existing view, describe predicted change, state magnitude and significance at construction, Year 1, and Year 15. Present summary table. Reference visualisations.',
  },
  {
    name: 'Cumulative Effects',
    description: 'Combined landscape and visual effects with other developments.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'List cumulative schemes. Assess cumulative landscape and visual effects. Distinguish in-combination and in-succession. Conclude on significance.',
  },
  {
    name: 'Mitigation and Enhancement',
    description: 'Embedded design mitigation, additional planting, and enhancement measures.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe embedded mitigation (siting, scale, materials, retention of features). Describe additional mitigation (planting, screening, earthworks, lighting). Describe enhancements. Summarise planting strategy and long-term management.',
  },
  {
    name: 'Residual Effects',
    description: 'Landscape and visual effects remaining at Year 15 after mitigation.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Assess residual landscape effects at Year 15. Assess residual visual effects for each viewpoint at Year 15. Present summary table. Identify any remaining significant effects.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of effects, mitigation, residual effects, and policy compliance.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise key landscape and visual effects. Identify significant effects. Summarise mitigation. Summarise residual effects. Confirm NPPF and local policy compliance. State overall conclusion on acceptability.',
  },
];

export const LVIA_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Methodology',
    'Policy Framework',
    'Baseline Landscape Assessment',
    'Visual Baseline',
    'Landscape Effects Assessment',
    'Visual Effects Assessment',
    'Cumulative Effects',
    'Mitigation and Enhancement',
    'Residual Effects',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const LVIA_TEMPLATE = {
  assessment_type: 'Landscape and Visual Impact Assessment',
  short_name: 'LVIA',
  version: 1,
  sections: LVIA_SECTIONS,
  quality_criteria: LVIA_QUALITY,
};
