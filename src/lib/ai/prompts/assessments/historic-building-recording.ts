import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Historic Building Recording (HBR) -- required where development proposals
 * involve the alteration, extension, change of use, or demolition of a
 * historic building (listed building, building within a Conservation Area,
 * or building of local heritage interest) and a record of the building is
 * required prior to or during works.
 *
 * The recording follows Historic England's Understanding Historic Buildings:
 * A Guide to Good Recording Practice (2016) and CIfA Standard and Guidance
 * for the Archaeological Investigation and Recording of Standing Buildings
 * or Structures.
 *
 * AI Difficulty: Hard -- requires review by a heritage specialist.
 */

export const HBR_PROMPT = `You are preparing a Historic Building Recording report to accompany or support a planning application (including listed building consent applications) submitted to a local planning authority in England. The report presents a systematic record of a historic building at an appropriate level of detail, together with an analysis of its development, phasing, and significance, to inform the decision-making process and to create a permanent record before alteration or demolition.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft only. It MUST be reviewed, verified, and endorsed by a suitably qualified heritage specialist (a building archaeologist, architectural historian, or heritage consultant with demonstrable experience in historic building recording) before submission to the local planning authority. The AI-generated content does not constitute professional heritage advice and should not be relied upon without professional validation. All building descriptions, phasing analysis, photographic records, and statements of significance must be verified through on-site inspection and primary source research.

## Document Purpose

A Historic Building Recording report must:
- Provide a systematic record of the building at the appropriate level (Level 1 to Level 4 per Historic England guidance) before alteration or demolition.
- Describe the building's form, fabric, construction, fittings, and condition.
- Analyse the building's development and phasing (constructional history).
- Assess the significance of the building, its individual elements, and its setting.
- Assess the impact of the proposed development on the building's significance.
- Propose mitigation measures where harm to significance is identified.
- Demonstrate compliance with NPPF Paragraphs 194-208 and the Planning (Listed Buildings and Conservation Areas) Act 1990.
- Be prepared in accordance with Historic England Understanding Historic Buildings (2016) and CIfA Standards.

## Key Policy and Legislation References

### Planning (Listed Buildings and Conservation Areas) Act 1990
- **Section 1**: Lists of buildings of special architectural or historic interest compiled by the Secretary of State.
- **Section 7**: Restriction on works affecting listed buildings -- it is an offence to execute works for the demolition of a listed building, or for its alteration or extension in any manner which would affect its character as a building of special architectural or historic interest, unless the works are authorised (listed building consent).
- **Section 8**: Authorisation of works: listed building consent.
- **Section 16(2)**: In considering whether to grant listed building consent, the authority shall have special regard to the desirability of preserving the building or its setting or any features of special architectural or historic interest which it possesses.
- **Section 66(1)**: In considering whether to grant planning permission for development which affects a listed building or its setting, the authority shall have special regard to the desirability of preserving the building or its setting or any features of special architectural or historic interest which it possesses.
- **Section 72(1)**: In the exercise of planning functions with respect to any buildings or other land in a Conservation Area, special attention shall be paid to the desirability of preserving or enhancing the character or appearance of that area.
- **Section 74**: Control of demolition in Conservation Areas.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 194**: Applicants must describe the significance of heritage assets affected, including contribution made by setting. Level of detail should be proportionate. As a minimum, the HER should be consulted and assets assessed using appropriate expertise.
- **Paragraph 195**: LPAs should identify and assess the particular significance of any heritage asset that may be affected.
- **Paragraph 197**: LPAs should take account of the desirability of sustaining and enhancing significance, the positive contribution conservation makes, and the desirability of new development making a positive contribution to local character.
- **Paragraph 199**: Great weight should be given to the conservation of designated heritage assets. The more important the asset, the greater the weight.
- **Paragraph 200**: Any harm to or loss of significance should require clear and convincing justification.
- **Paragraph 201**: Substantial harm or total loss should be refused unless necessary for substantial public benefits.
- **Paragraph 202**: Less than substantial harm should be weighed against public benefits.
- **Paragraph 203**: Non-designated heritage assets -- a balanced judgement having regard to scale of harm and significance.
- **Paragraph 205**: Developers should record and advance understanding of heritage assets to be lost, proportionate to importance and impact, and make evidence publicly accessible.
- **Paragraph 208**: Enabling development -- benefits of securing future conservation weighed against disbenefits.

### Historic England Guidance
- **Understanding Historic Buildings: A Guide to Good Recording Practice (2016)**: The primary guidance for historic building recording in England. Defines four levels of recording:
  - **Level 1**: A basic visual record (descriptive record, photographs). Appropriate for buildings of minor interest or where rapid recording is needed.
  - **Level 2**: A descriptive record (external and internal description, photographs, annotated plan). Appropriate for buildings where a fuller record is needed but detailed analysis is not required.
  - **Level 3**: An analytical record (detailed description, measured drawings, full photographic survey, historical research, phasing analysis). Appropriate for listed buildings and buildings of significant interest.
  - **Level 4**: A comprehensive analytical record (as Level 3 plus detailed historical research, full measured survey, specialist analysis). Appropriate for buildings of the highest significance or complex constructional history.
- **Conservation Principles, Policies and Guidance (2008)**: Framework for assessing heritage significance.
- **Statements of Heritage Significance (Advice Note 12, 2019)**: How to describe significance.
- **Managing Significance in Decision-Taking in the Historic Environment (GPA 2, 2015)**: Decision-taking guidance.
- **The Setting of Heritage Assets (GPA 3, 2017)**: Assessing the contribution of setting to significance.
- **Listed Buildings and Curtilage (Advice Note 10, 2018)**: Defining curtilage and curtilage listing.

### Chartered Institute for Archaeologists (CIfA) Standards
- **Standard and Guidance for the Archaeological Investigation and Recording of Standing Buildings or Structures (2014, revised 2019)**: Professional standard for building recording methodology, reporting, and archiving.
- **Code of Conduct**: Professional and ethical standards.
- **Standard and Guidance for the Creation, Compilation, Transfer and Deposition of Archaeological Archives (2014, revised 2020)**: Archive standards.

### Other Key References
- The National Heritage List for England (NHLE): Statutory list descriptions.
- The Historic Environment Record (HER): Local records of historic buildings and structures.
- Historic England Archive: Architectural drawings, photographs, and records.
- Pevsner Architectural Guides (The Buildings of England series).
- Victoria County History (VCH).
- Historic Ordnance Survey mapping.
- Local authority Conservation Area appraisals and management plans.
- Local authority Local Heritage List (where one exists).
- Local plan heritage policies.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the building recording and the circumstances (pre-determination, planning condition, listed building consent condition).
- Provide commission details: client, heritage consultant/building archaeologist, building address, planning application and/or LBC reference.
- Identify the building: postal address, National Grid Reference, statutory listing status (Grade I, II*, or II, with NHLE list entry number) or non-designated status.
- State the recording level undertaken (Level 1-4) and the basis for selecting that level (as agreed with the LPA conservation officer or heritage adviser, or as specified in a condition).
- Summarise the proposed works affecting the building.
- Reference the Written Scheme of Investigation or project brief (if applicable).
- State the qualifications and experience of the recorder (or flag "[TO BE COMPLETED BY HERITAGE SPECIALIST]" for AI-generated drafts).
- State the dates of the recording fieldwork.
- Outline the document structure.

### 2. Policy Framework (400-700 words)
- Set out the Planning (Listed Buildings and Conservation Areas) Act 1990, including Sections 7, 16(2), 66(1), and 72(1).
- Set out NPPF Paragraphs 194-205 and 208.
- Set out relevant local plan heritage policies.
- Reference Historic England Understanding Historic Buildings (2016) and the recording level definition.
- Reference CIfA Standard and Guidance for the Archaeological Investigation and Recording of Standing Buildings or Structures.
- Note the Conservation Area status (if applicable) and reference the Conservation Area appraisal.
- Reference the statutory list description from the NHLE.

### 3. Methodology (400-700 words)
- Describe the recording methodology in accordance with Historic England (2016) and CIfA standards:
  - **Written record**: Systematic description of the building interior and exterior, room by room, elevation by elevation. Recording of construction details, materials, fittings, fixtures, and decorative features.
  - **Photographic record**: General and detailed photographs (digital, high resolution). External elevations, internal rooms, structural details, fittings, decorative features, setting. Photographs taken with photographic scales and north arrows where appropriate. Record of photograph locations on annotated plans.
  - **Drawn record**: Measured floor plans, cross-sections, and elevations (or annotated architect's drawings). For Level 3-4, detailed measured survey. Method of survey (hand measurement, total station, photogrammetry, laser scanning).
  - **Historical research**: Sources consulted (NHLE list description, HER, Historic England Archive, published histories, Pevsner, VCH, tithe and census records, trade directories, estate records, historic maps).
- State any constraints on access or recording (areas not accessible, time limitations, safety issues).
- State the intended archive repository and accession number.

### 4. Historical Background (500-1000 words)
- Present the historical development of the building and the site, drawing on documentary and cartographic research:
  - Original construction: date, builder/architect (if known), purpose, style, client/patron.
  - Subsequent phases of alteration, extension, rebuilding, or change of use, with approximate dates.
  - Ownership history (from title deeds, census returns, trade directories, estate records).
  - Historical context: the building's relationship to the wider settlement, estate, or landscape.
  - Any published historical accounts or references to the building.
- Present the map regression evidence:
  - Tithe map and apportionment (typically 1840s): building footprint, land use, ownership.
  - First Edition Ordnance Survey (typically 1870s-1880s): building form, surroundings.
  - Subsequent OS editions: changes and extensions.
- Cross-reference the documentary and cartographic evidence to inform the phasing analysis.

### 5. Building Description (1000-2500 words)
- This is the core descriptive section. Provide a systematic description of the building:

#### 5.1 External Description
- **Plan form**: Overall shape, number of ranges, wings, extensions, outbuildings.
- **Storeys**: Number of storeys, including basement and attic.
- **Roof**: Form (gable, hipped, mansard, flat), covering (slate, tile, lead, thatch), ridge details, chimneys, dormers, rainwater goods.
- **Walls**: Construction material (brick, stone, render, timber frame, flint, etc.), bond pattern, pointing style, colour, decorative details (mouldings, quoins, string courses, date stones).
- **Elevation descriptions**: Describe each elevation systematically (principal, rear, side elevations): window openings (number, size, type, glazing, surrounds), door openings (type, surround, canopy, fanlight), other features.
- **Setting**: Relationship to adjacent buildings, boundary walls, gardens, curtilage structures.

#### 5.2 Internal Description
- Describe each room or space systematically, typically working from ground floor upward:
  - **Room identification**: Room name/number, floor level, location within the plan.
  - **Walls**: Construction, finish, panelling, dado rails, picture rails, cornices, decorative plasterwork.
  - **Floors**: Construction and finish (timber boards, flagstone, tiles, carpet over).
  - **Ceilings**: Construction, finish, mouldings, beams, joists (exposed or concealed).
  - **Doors**: Type (panelled, ledged, glazed), furniture (handles, hinges, locks), architraves.
  - **Windows**: Type (sash, casement, fixed), glazing (crown glass, cylinder glass, plate glass), shutters, window seats.
  - **Fireplaces**: Type, surround material and style, grate, chimney breast.
  - **Staircases**: Type (dog-leg, open-well, spiral), balusters, handrail, newel posts.
  - **Fixtures and fittings**: Built-in cupboards, shelving, bell pulls, service fixtures, bathroom/kitchen fittings (where historic).
  - **Services**: Historic and modern service installations visible.
- Note any features of particular interest or significance.
- Note the condition of fabric and fittings.

### 6. Photographic Survey (200-400 words)
- Describe the photographic record produced:
  - Number of photographs taken and format (digital, resolution).
  - General views of the building in its setting.
  - External elevations (each elevation).
  - Internal rooms (general views and details).
  - Details of features of interest: mouldings, joinery, ironwork, decoration, inscriptions, date stones, structural details.
  - Roof structure: trusses, purlins, common rafters, wind braces, boarding.
  - Basement or undercroft (if present).
  - Outbuildings and curtilage structures.
- Reference the photographic register and location plans.
- Note "[PHOTOGRAPHIC SURVEY TO BE COMPLETED ON SITE]" where photographs have not yet been taken for an AI-generated draft.

### 7. Analysis and Phasing (500-1000 words)
- Present the analytical interpretation of the building's development:
  - Identify distinct constructional phases based on the physical evidence (fabric changes, construction techniques, blocked openings, scars, differential weathering, brick bonds, mortar types, timber species and carpentry techniques).
  - For each phase, describe:
    - The approximate date (based on documentary evidence, architectural style, construction technique, and/or scientific dating).
    - The extent of the work (additions, alterations, demolitions).
    - The materials and construction techniques used.
    - The purpose or function of the changes.
  - Present a phased plan or annotated drawing showing the development of the building (or flag "[PHASED PLAN TO BE PREPARED]").
  - Discuss the architectural style and its dating implications.
  - Discuss the building type and its typological context (e.g., vernacular building traditions, polite architecture, industrial architecture).
  - Note any uncertainties in the phasing and the evidence on which the interpretation rests.

### 8. Statement of Significance (500-1000 words)
- Assess the significance of the building using the framework in NPPF and Historic England Conservation Principles:
  - **Evidential value**: The physical fabric as a source of evidence about past construction techniques, use, and inhabitation. The potential for the building to yield further evidence through investigation.
  - **Historical value**: The building's association with notable persons, events, or social and economic history (associative historical value). The building's ability to illustrate past ways of life (illustrative historical value).
  - **Aesthetic value**: The building's architectural and design quality, craftsmanship, and contribution to the streetscape or landscape. The visual and sensory experience of the building.
  - **Communal value**: The building's significance to the local community, its commemorative, social, or spiritual associations.
- Assess the contribution of the building's setting to its significance (following Historic England GPA 3, 2017).
- Identify the specific features and elements of the building that contribute most to its significance (and conversely, those that are neutral or detract from significance).
- Assess significance at local, regional, or national level.
- For listed buildings, relate the assessment to the statutory list description and the reasons for listing.

### 9. Impact of Proposals (400-800 words)
- Describe the proposed works affecting the building:
  - Demolition (whole or partial).
  - Alterations to the exterior (changes to openings, materials, roof, additions).
  - Alterations to the interior (removal of walls or features, insertion of new elements, changes to layout).
  - Change of use (and associated physical works).
  - Works to the setting (new buildings, landscape changes, access changes).
- Assess the impact of each element of the proposals on the significance of the building:
  - Impact on evidential value: loss of historic fabric.
  - Impact on historical value: loss of associations or illustrative capacity.
  - Impact on aesthetic value: change to architectural character, proportions, materials, detailing.
  - Impact on communal value: change to public experience or community connection.
  - Impact on setting: change to the context in which the building is experienced.
- Classify the level of harm:
  - For listed buildings: substantial harm or less than substantial harm (with sub-gradation where appropriate).
  - For non-designated heritage assets: balanced judgement on scale of harm.
- Apply the relevant NPPF test (Paragraphs 199-203).
- Identify any benefits of the proposals that may offset harm (e.g., securing the building's long-term future, bringing a building back into use).

### 10. Mitigation (300-600 words)
- Propose mitigation measures to reduce harm to significance:
  - **Design mitigation**: Modifications to the proposed works to reduce impact (retention of key features, use of sympathetic materials, reversible interventions, reduced extent of demolition).
  - **Recording**: The building recording report itself serves as mitigation (creating a permanent record before loss). Confirm the level of recording undertaken is proportionate to significance and impact.
  - **Salvage and reuse**: Proposal to salvage and reuse historic materials, fittings, or features (e.g., fireplaces, joinery, structural timbers).
  - **Interpretation**: Public interpretation of the building's history (information boards, publication, digital record).
  - **Archive deposition**: Deposition of the recording archive with the HER and an appropriate museum or repository.
- Confirm that the recording has been undertaken at the appropriate level as recommended by Historic England (2016).
- Recommend any additional recording needed during works (e.g., recording of features exposed during strip-out, monitoring during demolition).

### 11. Conclusion (300-500 words)
- Summarise the history and development of the building (key phases).
- Summarise the significance of the building and its key elements.
- Summarise the impact of the proposed works on significance.
- Confirm that the building recording has been completed at the appropriate level.
- Confirm compliance with NPPF Paragraph 205 (recording and advancing understanding).
- Confirm compliance with the Planning (Listed Buildings and Conservation Areas) Act 1990.
- Confirm compliance with Historic England (2016) and CIfA standards.
- Note the intended deposition of the archive.
- Recommend any further recording or monitoring during works.

## Quality Standards

- Include the AI-generated disclaimer prominently in the document frontispiece and introduction, stating that the report requires review and endorsement by a suitably qualified heritage specialist.
- Reference the Planning (Listed Buildings and Conservation Areas) Act 1990 with specific section numbers.
- Reference specific NPPF paragraphs (194-208) by number throughout.
- Reference Historic England Understanding Historic Buildings (2016) and the specific recording level (1-4).
- Reference CIfA Standard and Guidance for Standing Buildings.
- Cite the NHLE list entry number and list description for listed buildings.
- Describe the building systematically: exterior then interior, elevation by elevation, room by room.
- Identify constructional phases with clear evidence for dating.
- Assess significance using all four Conservation Principles values (evidential, historical, aesthetic, communal).
- Assess the contribution of setting to significance.
- Clearly identify which features contribute to significance and which are neutral or detracting.
- Classify harm as substantial or less than substantial for designated heritage assets.
- Distinguish between designated and non-designated heritage assets.
- Use correct architectural and building history terminology: vernacular, polite, bay, mullion, transom, quoin, ashlar, coursed rubble, king post, queen post, purlin, common rafter, crown post, collar, etc.
- Where site inspection has not been undertaken, clearly flag (e.g., "[BUILDING DESCRIPTION TO BE COMPLETED FROM ON-SITE INSPECTION]", "[PHOTOGRAPHIC SURVEY TO BE COMPLETED ON SITE]").
- Professional heritage language throughout, technically accurate but accessible to planning officers.`;

export const HBR_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, commission details, building identification, listing status, recording level, and document structure.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the purpose and circumstances. Provide commission details. Identify the building by address, NGR, listing status, and NHLE number. State the recording level and basis for selection. Summarise proposed works. Reference WSI or brief. State recorder qualifications and fieldwork dates.',
  },
  {
    name: 'Policy Framework',
    description: 'Listed Buildings Act 1990, NPPF heritage policies, local plan policies, and professional standards.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Set out the 1990 Act Sections 7, 16(2), 66(1), 72(1). Summarise NPPF Paragraphs 194-208. List local plan heritage policies. Reference Historic England (2016) recording levels. Reference CIfA standards. Note Conservation Area status. Cite NHLE list description.',
  },
  {
    name: 'Methodology',
    description: 'Recording methodology: written, photographic, and drawn records; historical research; and archive.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe written recording methodology (systematic description). Describe photographic methodology (format, coverage, registers). Describe drawn record methodology (measured plans, sections, elevations, survey method). Describe historical research sources. Note access constraints. State archive repository.',
  },
  {
    name: 'Historical Background',
    description: 'Documentary and cartographic history of the building: construction, alterations, ownership, and context.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present original construction details (date, builder, purpose, style). Describe subsequent phases of alteration. Present ownership history. Describe historical context. Present map regression evidence (tithe, OS editions). Cross-reference documentary and cartographic evidence.',
  },
  {
    name: 'Building Description',
    description: 'Systematic external and internal description: plan, structure, materials, fittings, and condition.',
    required: true,
    min_words: 1000,
    max_words: 2500,
    guidance:
      'Describe plan form, storeys, roof, walls, and each external elevation systematically. Describe each internal room: walls, floors, ceilings, doors, windows, fireplaces, staircases, fixtures, and condition. Note features of particular interest.',
    subsections: [
      {
        name: 'External Description',
        description: 'Plan form, roof, walls, elevations, openings, decorative details, and setting.',
        required: true,
        min_words: 400,
        max_words: 1000,
        guidance: 'Describe plan, storeys, roof form and materials, wall materials and details, each elevation with openings and features, and setting.',
      },
      {
        name: 'Internal Description',
        description: 'Room-by-room description: walls, floors, ceilings, doors, windows, fireplaces, stairs, and fittings.',
        required: true,
        min_words: 500,
        max_words: 1500,
        guidance: 'Describe each room systematically: all surfaces, openings, features, fittings, services, and condition. Note features of interest.',
      },
    ],
  },
  {
    name: 'Photographic Survey',
    description: 'Description of the photographic record: coverage, format, and cross-reference to registers.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Describe the photographic record: number, format, coverage (setting, elevations, rooms, details, roof structure, outbuildings). Reference photographic register and location plans. Flag where photographs are pending.',
  },
  {
    name: 'Analysis and Phasing',
    description: 'Analytical interpretation of constructional phases, dating evidence, and building typology.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Identify distinct constructional phases from physical evidence. For each phase describe date, extent, materials, techniques, and purpose. Present or reference phased plan. Discuss architectural style and building type. Note uncertainties and supporting evidence.',
  },
  {
    name: 'Statement of Significance',
    description: 'Assessment of heritage significance: evidential, historical, aesthetic, and communal values.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Assess significance using Conservation Principles (evidential, historical, aesthetic, communal values). Assess contribution of setting (GPA 3). Identify features contributing to, neutral to, and detracting from significance. Assess at local/regional/national level. Relate to list description for listed buildings.',
  },
  {
    name: 'Impact of Proposals',
    description: 'Assessment of impact of proposed works on significance, harm classification, and NPPF tests.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe proposed works (demolition, alteration, change of use, setting changes). Assess impact on each value (evidential, historical, aesthetic, communal, setting). Classify harm (substantial or less than substantial for listed buildings). Apply NPPF tests. Identify offsetting benefits.',
  },
  {
    name: 'Mitigation',
    description: 'Mitigation measures: design changes, recording, salvage, interpretation, and archive.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Propose design mitigation (retention, sympathetic materials, reversibility). Confirm recording level is proportionate. Propose salvage and reuse. Propose interpretation and publication. Confirm archive deposition. Recommend additional recording during works.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of history, significance, impact, recording, and compliance.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise key phases of development. Summarise significance and key elements. Summarise impact of proposals. Confirm recording level and completion. Confirm NPPF Paragraph 205 compliance. Confirm 1990 Act and CIfA compliance. Note archive deposition. Recommend further recording.',
  },
];

export const HBR_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Historical Background',
    'Building Description',
    'Photographic Survey',
    'Analysis and Phasing',
    'Statement of Significance',
    'Impact of Proposals',
    'Mitigation',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const HBR_TEMPLATE = {
  assessment_type: 'Historic Building Recording',
  short_name: 'HBR',
  version: 1,
  sections: HBR_SECTIONS,
  quality_criteria: HBR_QUALITY,
};
