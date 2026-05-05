import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Lighting Assessment (LA) -- required for developments that propose
 * external lighting, or where existing lighting conditions may be affected.
 * The assessment demonstrates that the lighting scheme will not cause
 * obtrusive light, light pollution, or harm to ecology (particularly bats)
 * or residential amenity.
 */

export const LA_PROMPT = `You are preparing a Lighting Assessment (LA) to accompany a planning application submitted to a local planning authority in England. The LA should read as though prepared by a competent lighting designer or consultant (Member of the Institution of Lighting Professionals or equivalent) with experience of planning-related lighting assessments and ecological lighting considerations.

## Document Purpose

A Lighting Assessment is required to evaluate the potential impact of proposed external lighting on the surrounding environment and to demonstrate that:
1. The proposed lighting scheme is appropriate for the environmental zone in which the site is located.
2. Obtrusive light (light spill, glare, sky glow, and source intensity) is controlled within the limits set out in the Institution of Lighting Professionals (ILP) Guidance Note GN01.
3. The lighting will not cause harm to the amenity of neighbouring residential and other sensitive properties.
4. The lighting will not cause harm to ecological receptors, particularly bats and other nocturnal wildlife, in accordance with Bat Conservation Trust (BCT) guidance.
5. The lighting scheme complies with relevant British and European standards for the intended application.
6. The development accords with national and local planning policies on amenity, ecology, and light pollution.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 130**: Planning policies and decisions should ensure that developments are sympathetic to local character and history, including the surrounding built environment and landscape setting, while not preventing or discouraging appropriate innovation or change. Developments should create places with a high standard of amenity for existing and future users.
- **Paragraph 174(e)**: Planning policies and decisions should contribute to and enhance the natural and local environment by preventing new and existing development from contributing to, being put at unacceptable risk from, or being adversely affected by, unacceptable levels of noise pollution or land instability. (Note: this principle extends to light pollution as a form of environmental pollution.)
- **Paragraph 180(c)**: When determining planning applications, local planning authorities should apply the following principles: development resulting in the loss or deterioration of irreplaceable habitats should be refused, unless there are wholly exceptional reasons. Development whose primary objective is to conserve or enhance biodiversity should be supported; while opportunities to improve biodiversity in and around developments should be integrated as part of their design, especially where this can secure measurable net gains for biodiversity.
- **Paragraph 185**: Planning policies and decisions should also ensure that new development is appropriate for its location taking into account the likely effects (including cumulative effects) of pollution on health, living conditions and the natural environment, as well as the potential sensitivity of the site or the wider area to impacts that could arise from the development.

### Institution of Lighting Professionals (ILP) Guidance
- **GN01: Guidance Notes for the Reduction of Obtrusive Light (2021)**: The principal guidance document for assessing and controlling obtrusive light in the planning context. Sets out:
  - **Environmental Zones**: E0 (intrinsically dark, UNESCO Starlight Reserves), E1 (naturally dark, National Parks, AONBs), E2 (low district brightness, rural areas), E3 (medium district brightness, suburban areas), E4 (high district brightness, urban areas).
  - **Obtrusive light parameters and limits** by environmental zone:
    - **Light intrusion into windows (Ev)**: Maximum vertical illuminance at the facade of the nearest habitable room window (lux), measured at the centre of the window. Pre-curfew and post-curfew limits.
    - **Source intensity (I)**: Maximum intensity of each luminaire in the direction of any potential observer (candelas). Pre-curfew and post-curfew limits.
    - **Building luminance (Lb)**: Maximum average luminance of the building facade (cd/m2). Pre-curfew and post-curfew limits.
    - **Upward light ratio (ULR)**: Maximum proportion of luminaire flux emitted above the horizontal (%).
  - **Curfew**: The time after which stricter lighting limits apply, typically 23:00 or as determined by the local authority.
  - **Sky glow**: Contribution to sky glow from upward light.
- **GN08: Bats and Artificial Lighting in the UK (2018, updated 2023)**: Joint ILP/BCT guidance on lighting design to minimise impacts on bats:
  - Lighting in or adjacent to bat habitats should be avoided where possible.
  - Where lighting is necessary, use warm white LED luminaires (CCT 2700K or lower, ideally below 3000K) to minimise the blue spectral component.
  - Use luminaires with no UV element.
  - Maintain light levels below 0.5 lux on identified bat commuting corridors, foraging areas, and roost access/egress points.
  - Use shields, cowls, louvres, or hoods to direct light downward and prevent spill onto sensitive features.
  - Use column heights as low as practicable to reduce horizontal light spread.
  - Consider dimming or part-night lighting to reduce the duration of illumination.
  - Avoid illumination of watercourses, hedgerows, tree lines, and woodland edges.
- **PLG04: Guidance on Undertaking Environmental Lighting Impact Assessments (2013)**: Provides a methodology for comprehensive lighting impact assessments.

### British and European Standards
- **BS EN 12464-2:2014 Light and lighting -- Lighting of work places -- Part 2: Outdoor work places**: Sets out minimum maintained illuminance, uniformity, and glare requirements for outdoor work areas (car parks, pedestrian areas, loading bays, service yards).
- **BS 5489-1:2020 Design of road lighting -- Part 1: Lighting of roads and public amenity areas**: Requirements for road and public area lighting, including lighting classes (M, C, P, and S classes), maintained illuminance, uniformity, and glare rating.
- **BS EN 13201 series: Road lighting**: Performance requirements for road lighting installations.
- **CIBSE Lighting Guide LG6: The Outdoor Environment (2016)**: Guidance on exterior lighting design for a range of applications.
- **CIBSE Society of Light and Lighting (SLL) Lighting Handbook**: General lighting design principles.

### Bat Conservation Trust (BCT) Guidelines
- **Bat Surveys for Professional Ecologists: Good Practice Guidelines (2023)**: Survey standards for bat assessments.
- **Bats and Artificial Lighting in the UK (BCT/ILP, 2018/2023)**: Detailed guidance on mitigation measures (referenced above under GN08).
- Core principles: avoid lighting bat habitats, maintain dark corridors, use low CCT luminaires, shield and direct light downward, monitor post-completion.

### Other Key References
- **Dark Sky Discovery Sites / CPRE Night Blight data**: Information on existing light pollution levels.
- **Local plan policies**: Amenity protection, ecology/biodiversity, light pollution, dark skies, and design policies.
- **Supplementary planning documents**: Lighting design guides, ecology SPDs.
- **Town and Country Planning (Environmental Impact Assessment) Regulations 2017**: Where the project is EIA development, light may be a relevant environmental effect.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Lighting Assessment and its policy basis.
- Identify the site by full postal address, grid reference, and local authority.
- Summarise the proposed development and the requirement for external lighting (e.g., car park lighting, security lighting, sports lighting, commercial signage, amenity lighting, highway lighting).
- Describe the site context: urban/suburban/rural setting, proximity to residential receptors, proximity to ecological receptors (bat habitats, hedgerows, watercourses, woodland).
- State the ILP Environmental Zone classification for the site (E0-E4) and the basis for that classification.
- State the qualifications of the author or "[PREPARED BY A COMPETENT LIGHTING DESIGNER (MILP OR EQUIVALENT)]".
- Outline the document structure.

### 2. Policy Framework (300-600 words)
- Set out the relevant NPPF paragraphs (130, 174(e), 180(c), 185) with a summary of each.
- Set out the ILP GN01 Environmental Zone system and the applicable zone for the site.
- Set out the ILP GN01 obtrusive light limits for the applicable zone (Ev, I, ULR, Lb) in tabular form with pre-curfew and post-curfew values.
- Reference the ILP/BCT GN08 guidance on bats and artificial lighting.
- Set out the relevant BS EN 12464-2 and BS 5489-1 requirements for the application (car park, road, pedestrian area).
- Set out the relevant local plan policies:
  - Amenity protection policies (preventing unacceptable harm to neighbouring occupiers from light disturbance).
  - Ecology/biodiversity policies (protecting bats and nocturnal wildlife from artificial light).
  - Light pollution / dark skies policies (where applicable, particularly in rural areas, AONBs, or near Dark Sky Discovery Sites).
  - Design policies (requiring well-designed lighting that contributes to safety and security without causing harm).
- Reference any supplementary planning guidance on lighting or ecology.

### 3. Existing Lighting Conditions (300-600 words)
- Describe the existing lighting conditions on and around the site:
  - Existing artificial lighting on the site (type, quantity, condition, and operation hours).
  - Existing artificial lighting in the surrounding area (street lighting, neighbouring properties, commercial premises).
  - Ambient light levels: describe the general darkness/brightness of the area, referencing the ILP Environmental Zone classification.
  - Sky glow: describe the existing sky glow conditions (visible from the site, contribution from nearby urban areas).
- If a baseline lighting survey has been conducted, present the measured illuminance levels at key locations around the site boundary and at the nearest sensitive receptors (residential windows, ecological features).
- If a baseline survey has not been provided, flag "[BASELINE LIGHTING SURVEY DATA MAY BE REQUIRED -- measurement of existing illuminance levels at receptor locations]".
- Identify all light-sensitive receptors:
  - **Residential receptors**: Nearest habitable room windows, with approximate distances from the site boundary and orientation.
  - **Ecological receptors**: Bat roosts, commuting corridors, foraging areas (referenced from the ecological survey); hedgerows, tree lines, watercourses, and woodland edges.
  - **Other sensitive receptors**: Astronomical observatories, heritage features, landscape designations (AONB, National Park).

### 4. Proposed Lighting Scheme (400-800 words)
- Describe the proposed lighting scheme in detail:
  - **Purpose**: Functional lighting (car park, access road, pedestrian paths, loading/service areas), security lighting, amenity/architectural lighting, sports lighting, signage illumination.
  - **Luminaire specification**: For each luminaire type: manufacturer, model, wattage, luminous flux (lumens), correlated colour temperature (CCT in Kelvin), colour rendering index (CRI), upward light output ratio (ULOR), IP rating, and IK rating.
  - **Mounting**: Column heights, mounting arrangements (post-top, side-entry, wall-mounted, bollard), tilt angle.
  - **Layout**: Number and position of luminaires (referenced to a lighting layout plan).
  - **Control system**: Lighting control strategy: dusk-to-dawn photocell, timer-based switching, part-night dimming, motion-activated sensors, central management system (CMS).
  - **Curfew arrangements**: Describe the post-curfew lighting regime (reduced illumination levels, switched-off areas, dimmed output).
  - **Design standards**: Confirm compliance with BS EN 12464-2, BS 5489-1, or other applicable standards. State the maintained illuminance, uniformity ratio, and glare rating achieved.
- Present the lighting design calculations:
  - Maintained illuminance levels on the target areas (car park, roads, paths) shown on isolux contour plans.
  - Vertical illuminance at the nearest residential window facades.
  - Horizontal illuminance at the site boundary and beyond.
  - Confirm compliance with the functional lighting standard requirements.
- Present key design drawings:
  - Lighting layout plan showing luminaire positions, types, and column heights.
  - Isolux contour plan showing illuminance levels across and beyond the site.
  - Light spill diagram showing illuminance at the site boundary and receptor locations.

### 5. Light Spill Assessment (400-800 words)
- Assess the obtrusive light parameters against the ILP GN01 limits for the applicable Environmental Zone:
  - **Light intrusion (Ev)**: Calculate the vertical illuminance at the facade of the nearest habitable room windows. Compare with the GN01 pre-curfew and post-curfew limits. Present results in a table for each receptor location.
  - **Source intensity (I)**: Calculate the intensity of each luminaire in the direction of the nearest potential observer. Compare with the GN01 limits.
  - **Upward light ratio (ULR)**: State the ULOR for each luminaire type. Calculate the installation ULR. Compare with the GN01 maximum.
  - **Building luminance (Lb)**: Where external facades are illuminated, calculate the average luminance. Compare with GN01 limits.
  - **Sky glow**: Assess the contribution of the scheme to sky glow, considering the ULR and the total upward lumens.
- Present the assessment results in a summary compliance table showing each parameter, the calculated value, the GN01 limit, and the compliance status (pass/fail).
- Where any parameter exceeds the limit, describe the additional mitigation required.

### 6. Impact on Ecology (400-800 words)
- Assess the impact of the proposed lighting on ecological receptors, with particular reference to bats:
  - Reference the ecological survey findings: confirmed or potential bat roosts, commuting corridors, foraging areas, and other nocturnal wildlife within or adjacent to the site.
  - Assess the predicted illuminance levels on identified bat commuting corridors, foraging areas, roost access/egress points, hedgerows, tree lines, watercourses, and woodland edges.
  - Compare with the BCT/ILP GN08 threshold of 0.5 lux maximum on sensitive bat features.
  - Present the predicted lux levels at each ecological receptor in a table or on the isolux contour plan.
  - Assess the colour temperature of the proposed luminaires: confirm CCT of 2700K or lower where adjacent to bat habitats. Confirm no UV component.
  - Assess the temporal aspects: lighting duration, part-night dimming, and seasonal considerations (bat active season April-October).
  - Assess the impact on other nocturnal wildlife: invertebrates (attraction to light sources), hedgehogs, birds, and other species identified in the ecological survey.
  - Determine the overall significance of the lighting impact on ecology: negligible, minor adverse, moderate adverse, or significant adverse.
- Where impacts are identified, describe the design measures already incorporated to avoid or reduce impacts (dark corridors maintained, shields, low CCT luminaires, part-night operation).

### 7. Impact on Amenity (300-600 words)
- Assess the impact of the proposed lighting on residential amenity:
  - Quantify the light intrusion at the nearest residential windows (Ev values from Section 5).
  - Assess whether the light intrusion is within the GN01 limits for the Environmental Zone.
  - Assess glare from luminaires as perceived by residents: source intensity in the direction of residential windows, and whether luminaires are visible from bedrooms.
  - Assess the impact on sleep disturbance: light intrusion during post-curfew hours compared with the stricter post-curfew limits.
  - Assess the overall change in the lighting environment as experienced by residents: is the scheme introducing lighting into a previously dark area, or replacing/upgrading existing lighting.
  - Consider cumulative effects: lighting from the proposed development in combination with existing lighting from other sources.
- Assess the impact on other amenity uses:
  - Users of public rights of way, open spaces, and recreation areas.
  - Drivers and pedestrians (glare from luminaires, disability glare, veiling luminance).
  - Heritage and landscape receptors where relevant.
- Conclude on the impact on residential and wider amenity: acceptable, requiring mitigation, or unacceptable.

### 8. Mitigation Measures (300-600 words)
- Describe the mitigation measures incorporated into the lighting design (good practice, not afterthoughts):
  - **Luminaire selection**: Full cut-off / zero upward light luminaires (ULOR 0%) to prevent sky glow. Flat glass design. Appropriate CCT (warm white, 2700K-3000K for ecological sensitivity; up to 4000K for general areas away from ecology).
  - **Optical control**: Shields, cowls, louvres, baffles, or barn doors on luminaires adjacent to sensitive receptors or ecological features to control light spill direction.
  - **Column height optimisation**: Use the minimum column height necessary to achieve the required illuminance and uniformity, reducing horizontal light spread.
  - **Setback and orientation**: Position luminaires to maximise distance from sensitive receptors. Orient luminaires away from residential windows and ecological features.
  - **Dimming and switching**: Part-night dimming (e.g., reduce to 50% output after curfew, switch off non-essential lighting). Motion-activated security lighting instead of continuous operation.
  - **Dark corridors**: Maintain identified ecological dark corridors with zero or near-zero illuminance (<0.5 lux).
  - **Post-completion monitoring**: Recommend a post-installation lighting survey to verify compliance with the assessment predictions and GN01 limits. Recommend ecological monitoring of bat activity along dark corridors.
- Recommend planning conditions to secure the mitigation measures:
  - Condition requiring the lighting scheme to be installed and maintained in accordance with the approved details.
  - Condition restricting hours of illumination or requiring a curfew.
  - Condition preventing additional external lighting without prior approval.
  - Condition requiring a post-installation lighting verification survey.

### 9. Conclusion (200-400 words)
- Summarise the existing lighting conditions and Environmental Zone classification.
- Summarise the proposed lighting scheme and its compliance with the functional design standard (BS EN 12464-2 / BS 5489-1).
- Confirm compliance with ILP GN01 obtrusive light limits for the applicable Environmental Zone (present the summary compliance table reference).
- Confirm that the lighting will not cause unacceptable harm to residential amenity.
- Confirm that the lighting scheme has been designed in accordance with ILP/BCT GN08 guidance to minimise impacts on bats and nocturnal ecology, maintaining illuminance below 0.5 lux on identified sensitive features.
- Confirm compliance with NPPF Paragraphs 130, 174(e), 180(c), 185 and relevant local plan policies.
- List recommended planning conditions.
- Conclude that the lighting scheme is acceptable and should not give rise to objection from the local planning authority or statutory consultees.

## Quality Standards

- Reference specific NPPF paragraphs (130, 174(e), 180(c), 185) by number.
- Reference ILP GN01 (2021) and present the Environmental Zone classification and obtrusive light limits.
- Reference ILP/BCT GN08 (2018/2023) and the 0.5 lux threshold for bat features.
- Reference the applicable BS EN 12464-2 / BS 5489-1 lighting standard with specific requirements.
- Present obtrusive light parameters (Ev, I, ULR, Lb) in a compliance table.
- Present predicted illuminance at ecological receptors and compare with the 0.5 lux threshold.
- Specify luminaire CCT, ULOR, and control measures.
- Use correct lighting terminology: illuminance (lux), luminance (cd/m2), intensity (candelas), luminous flux (lumens), CCT (Kelvin), CRI, ULOR, maintained illuminance, uniformity ratio.
- Where lighting design data has not been provided, clearly flag as "[LIGHTING DESIGN CALCULATIONS REQUIRED]".
- Do not fabricate illuminance or light spill data.
- Professional lighting design language throughout.`;

export const LA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site context, lighting requirement, Environmental Zone, and qualifications.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the LA purpose and policy basis. Identify the site and local authority. Summarise the development and lighting requirement. Describe the site context (urban/rural, proximity to receptors). State the ILP Environmental Zone. State qualifications. Outline document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF, ILP GN01 limits, ILP/BCT GN08, BS EN 12464-2, and local plan policies.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF Paragraphs 130, 174(e), 180(c), 185. Present ILP GN01 Environmental Zone system and limits in tabular form. Reference ILP/BCT GN08. Reference BS EN 12464-2 and BS 5489-1. Set out local plan amenity, ecology, and light pollution policies.',
  },
  {
    name: 'Existing Lighting Conditions',
    description: 'Current lighting on site and surroundings, baseline measurements, and sensitive receptor identification.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe existing lighting on and around the site. State ambient light levels and sky glow. Present baseline survey data or flag as required. Identify all sensitive receptors: residential windows (distances, orientation), ecological features (bat habitats, hedgerows, watercourses), and other receptors.',
  },
  {
    name: 'Proposed Lighting Scheme',
    description: 'Luminaire specifications, layout, control strategy, design standards compliance, and calculations.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe each luminaire type: manufacturer, model, wattage, lumens, CCT, CRI, ULOR. Describe mounting (heights, tilt). Describe the layout and number of luminaires. Describe the control system and curfew arrangements. Confirm design standard compliance. Present illuminance calculations, isolux plans, and vertical illuminance at receptors.',
  },
  {
    name: 'Light Spill Assessment',
    description: 'Assessment against ILP GN01 limits: light intrusion, source intensity, ULR, building luminance, and sky glow.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Calculate Ev at nearest residential windows (pre- and post-curfew). Calculate source intensity I toward observers. State installation ULR. Calculate Lb where applicable. Assess sky glow contribution. Present a compliance table: parameter, calculated value, GN01 limit, compliance status. Describe additional mitigation where limits are exceeded.',
  },
  {
    name: 'Impact on Ecology',
    description: 'Assessment of lighting impact on bats and nocturnal wildlife, BCT/ILP GN08 compliance.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Reference ecological survey findings (bat roosts, corridors, foraging). Predict illuminance on bat features and compare with 0.5 lux threshold. Assess CCT (confirm 2700K or lower near bat habitats). Assess temporal aspects (part-night, seasonal). Assess impacts on other nocturnal wildlife. Determine overall significance. Describe incorporated design measures.',
  },
  {
    name: 'Impact on Amenity',
    description: 'Residential light intrusion, glare, sleep disturbance, and wider amenity impacts.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Quantify light intrusion at residential windows and compare with GN01 limits. Assess glare from luminaires. Assess post-curfew sleep disturbance. Assess the overall change in lighting environment. Consider cumulative effects. Assess impacts on public rights of way and other receptors. Conclude on amenity acceptability.',
  },
  {
    name: 'Mitigation Measures',
    description: 'Design mitigation: luminaire selection, optical control, dimming, dark corridors, and recommended conditions.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe luminaire selection (full cut-off, ULOR 0%, appropriate CCT). Describe optical control (shields, cowls, louvres). Describe column height optimisation and setback. Describe dimming and switching strategy. Describe dark corridor maintenance. Recommend post-installation verification. Recommend planning conditions.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of compliance with GN01, GN08, functional standards, and planning policy.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise existing conditions and Environmental Zone. Confirm functional standard compliance. Confirm GN01 obtrusive light compliance. Confirm GN08 bat ecology compliance (0.5 lux threshold). Confirm NPPF and local plan compliance. List recommended conditions. Conclude the scheme is acceptable.',
  },
];

export const LA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Existing Lighting Conditions',
    'Proposed Lighting Scheme',
    'Light Spill Assessment',
    'Impact on Ecology',
    'Impact on Amenity',
    'Mitigation Measures',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const LA_TEMPLATE = {
  assessment_type: 'Lighting Assessment',
  short_name: 'LA',
  version: 1,
  sections: LA_SECTIONS,
  quality_criteria: LA_QUALITY,
};
