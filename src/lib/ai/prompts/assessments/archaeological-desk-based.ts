import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Archaeological Desk-Based Assessment (DBA) -- required where development
 * proposals affect sites with known or potential archaeological interest.
 *
 * The DBA provides a systematic assessment of the archaeological potential
 * of a site based on desk-based research, including historic maps, the
 * Historic Environment Record, and published sources. It follows the
 * methodology set out in the Chartered Institute for Archaeologists (CIfA)
 * Standard and Guidance for Historic Environment Desk-Based Assessment.
 */

export const ADBA_PROMPT = `You are preparing an Archaeological Desk-Based Assessment (DBA) to accompany a planning application submitted to a local planning authority in England. The DBA assesses the known and potential archaeological resource within and around the application site, evaluates the significance of that resource, and considers the impact of the proposed development upon it.

## Document Purpose

An Archaeological Desk-Based Assessment must:
- Identify the known archaeological and historical resource within and around the site, typically within a defined study area (commonly 1km radius, but proportionate to the scale and nature of the development).
- Assess the potential for previously unrecorded archaeological remains to survive on the site.
- Evaluate the significance of the known and potential archaeological resource.
- Assess the likely impact of the proposed development on that resource.
- Propose appropriate mitigation measures where impacts are identified.
- Demonstrate compliance with NPPF Paragraphs 189-199 (and beyond) regarding the requirement to describe the significance of heritage assets affected by a development proposal.

## Key Policy and Legislation References

### Ancient Monuments and Archaeological Areas Act 1979
- Provides for the legal protection of scheduled monuments.
- It is a criminal offence to carry out works affecting a scheduled monument without Scheduled Monument Consent from the Secretary of State (via Historic England).
- Development that would affect a scheduled monument requires Scheduled Monument Consent in addition to planning permission.

### Planning (Listed Buildings and Conservation Areas) Act 1990
- Section 66(1): Duty to have special regard to the desirability of preserving listed buildings and their settings.
- Section 72(1): Duty to pay special attention to preserving or enhancing the character or appearance of Conservation Areas.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 189**: Heritage assets are an irreplaceable resource and should be conserved in a manner appropriate to their significance, so that they can be enjoyed for their contribution to the quality of life of existing and future generations.
- **Paragraph 194**: In determining applications, local planning authorities should require an applicant to describe the significance of any heritage assets affected, including any contribution made by their setting. The level of detail should be proportionate to the assets' importance and no more than is sufficient to understand the potential impact of the proposal on their significance. As a minimum the relevant historic environment record should have been consulted and the heritage assets assessed using appropriate expertise where necessary.
- **Paragraph 195**: Local planning authorities should identify and assess the particular significance of any heritage asset that may be affected by a proposal (including by development affecting the setting of a heritage asset) taking account of the available evidence and any necessary expertise.
- **Paragraph 199**: When considering the impact of a proposed development on the significance of a designated heritage asset, great weight should be given to the asset's conservation.
- **Paragraph 200**: Any harm to, or loss of, the significance of a designated heritage asset should require clear and convincing justification.
- **Paragraph 201**: Where a development will lead to substantial harm to or total loss of significance of a designated heritage asset, consent should be refused unless it can be demonstrated that the substantial harm or total loss is necessary to achieve substantial public benefits.
- **Paragraph 202**: Where less than substantial harm, this should be weighed against the public benefits of the proposal.
- **Paragraph 203**: The effect of an application on the significance of a non-designated heritage asset should be taken into account in determining the application. In weighing applications that directly or indirectly affect non-designated heritage assets, a balanced judgement will be required having regard to the scale of any harm or loss and the significance of the heritage asset.
- **Paragraph 205**: Local planning authorities should require developers to record and advance understanding of the significance of any heritage assets to be lost (wholly or in part) in a manner proportionate to their importance and the impact, and to make this evidence (and any archive generated) publicly accessible.

### Chartered Institute for Archaeologists (CIfA) Standards
- **Standard and Guidance for Historic Environment Desk-Based Assessment (2014, revised 2020)**: Sets the professional standard for DBA methodology, including data sources, study area definition, assessment criteria, and reporting.
- **Code of Conduct**: Professional and ethical standards for archaeological practice.
- **Standard and Guidance for Archaeological Field Evaluation**: Referenced where field evaluation may be recommended as mitigation.
- **Standard and Guidance for Archaeological Excavation**: Referenced where excavation may be recommended.

### Historic England Guidance
- Conservation Principles, Policies and Guidance (2008): Framework for assessing heritage significance.
- Statements of Heritage Significance (Advice Note 12, 2019).
- Managing Significance in Decision-Taking in the Historic Environment (GPA 2, 2015).
- Preserving Archaeological Remains: Decision-Taking for Sites under Development (2016).

### Other Key References
- The Historic Environment Record (HER): The primary source of information on the known archaeological and historical resource.
- The National Heritage List for England (NHLE): Statutory designations (scheduled monuments, listed buildings, registered parks and gardens, registered battlefields, World Heritage Sites).
- The National Record of the Historic Environment (NRHE) / PastScape: Historic England's national database.
- British Geological Survey (BGS) mapping: Geology and ground conditions relevant to archaeological survival.
- Historic Ordnance Survey mapping: Available from local record offices, the National Library of Scotland, and commercial providers.
- Published archaeological research frameworks: Regional Research Frameworks (Historic England).
- Portable Antiquities Scheme (PAS) data.
- LiDAR and aerial photograph data (where available from Historic England Archive).

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the DBA and the NPPF Paragraph 194 requirement.
- Commission details: client, site, planning application reference (if known).
- Identify the site: postal address, National Grid Reference (NGR), site area.
- Summarise the proposed development.
- Define the study area and justify its extent (typically 1km radius for the HER search, wider for designated assets and larger developments).
- State the qualifications and experience of the author (or "[PREPARED BY A SUITABLY QUALIFIED ARCHAEOLOGIST]" for AI-generated drafts).
- Outline the document structure.

### 2. Methodology (400-700 words)
- Describe the desk-based research methodology in accordance with CIfA Standard and Guidance.
- List the sources consulted:
  - Historic Environment Record (HER) -- specify the county/unitary authority and HER reference numbers.
  - National Heritage List for England (NHLE).
  - National Record of the Historic Environment (NRHE).
  - Portable Antiquities Scheme (PAS).
  - British Geological Survey (BGS) mapping.
  - Historic Ordnance Survey maps (list editions consulted).
  - Published histories, archaeological reports, and journals.
  - Aerial photographs and LiDAR data (specify source).
  - Previous archaeological investigations within the study area.
  - Online resources: Heritage Gateway, MAGIC, local authority online mapping.
- Describe the assessment criteria used for evaluating archaeological potential and significance.
- State any limitations of the assessment (e.g., areas not accessible, data gaps, HER coverage).

### 3. Planning Policy and Legislation (400-700 words)
- Set out the Ancient Monuments and Archaeological Areas Act 1979 (for scheduled monuments).
- Set out the Planning (Listed Buildings and Conservation Areas) Act 1990 Sections 66 and 72.
- Set out NPPF Paragraphs 189-205, summarising each key paragraph.
- Set out relevant local plan heritage and archaeology policies.
- Note any local authority requirements for archaeological assessment (e.g., archaeological priority areas, local list).
- Reference CIfA standards as the professional framework for the assessment.

### 4. Geological and Topographical Background (300-600 words)
- Describe the underlying bedrock geology (from BGS mapping): formation, type, age.
- Describe the superficial (drift) deposits: type, depth, archaeological implications.
- Describe the soils (from Cranfield University / Soilscapes data).
- Describe the topography: elevation (AOD), gradient, aspect, landform.
- Describe the hydrological context: proximity to rivers, streams, springs, wetlands.
- Assess the implications of the geology, soils, and topography for:
  - Past human activity and settlement patterns.
  - The survival and preservation of archaeological deposits.
  - The potential for waterlogged/anaerobic conditions preserving organic remains.
  - The potential for alluvial or colluvial deposits masking earlier archaeology.

### 5. Historical and Archaeological Background (1500-4000 words)
This is the core research section. Present the known archaeological and historical evidence within the study area chronologically:

#### 5.1 Prehistoric (Palaeolithic to Iron Age)
- **Palaeolithic and Mesolithic** (c.500,000 BC -- c.4,000 BC): Evidence for early human activity, flint scatters, riverside/lakeside sites, cave sites.
- **Neolithic** (c.4,000 BC -- c.2,500 BC): Monuments (causewayed enclosures, long barrows, cursus monuments), early farming, pottery, polished stone axes.
- **Bronze Age** (c.2,500 BC -- c.800 BC): Round barrows, ring ditches, field systems, metalwork, settlements, burnt mounds.
- **Iron Age** (c.800 BC -- AD 43): Hillforts, enclosures, roundhouses, field systems, coin finds, oppida.

#### 5.2 Romano-British (AD 43 -- AD 410)
- Roman roads, villas, towns, forts, field systems, pottery, coins, industrial activity, religious sites, cemeteries.
- Assess the site's relationship to known Roman roads and settlements.

#### 5.3 Early Medieval (AD 410 -- AD 1066)
- Saxon settlement, burial sites, churches, field systems, estates, Domesday Book entries.
- Place-name evidence for early medieval origins.

#### 5.4 Medieval (AD 1066 -- AD 1540)
- Medieval settlement patterns: nucleated villages, dispersed farmsteads, market towns.
- Churches, manors, moated sites, fishponds, ridge and furrow, field systems, industrial sites.
- Documentary sources: manorial records, charters, tax records.
- Evidence from the Domesday Survey (1086).

#### 5.5 Post-Medieval (AD 1540 -- AD 1900)
- Enclosure, agricultural improvement, industrial development, transport infrastructure.
- Historic buildings, parks and gardens, agricultural buildings, industrial sites.
- Evidence from historic maps (tithe maps, enclosure maps, early OS maps).

#### 5.6 Modern (AD 1900 -- present)
- 20th-century land use: military installations, industrial development, housing, infrastructure.
- Any recorded wartime features (e.g., WWII defences, bomb damage).
- Recent ground disturbance that may have affected archaeological survival.

For each period, reference specific HER entries (by number), NHLE designations, PAS finds, and published archaeological work. Use "[HER REF]" where specific numbers are not available.

### 6. Map Regression (300-600 words)
- Systematically describe the site as shown on each historic map consulted, from earliest to most recent.
- Typical maps to reference:
  - Tithe map and apportionment (typically 1840s).
  - Enclosure map (where applicable).
  - First Edition Ordnance Survey (typically 1870s/1880s at 1:2,500 or 6-inch).
  - Second Edition Ordnance Survey (typically 1890s/1900s).
  - Third Edition and later Ordnance Survey editions.
  - Post-war editions showing 20th-century changes.
- For each map, describe:
  - Land use of the site (arable, pasture, orchard, buildings, industrial, etc.).
  - Buildings present and their form.
  - Field boundaries and landscape features.
  - Changes between editions.
- Assess the implications of the map evidence for archaeological survival (e.g., areas of previous disturbance, areas of long-term stability).

### 7. Site Visit Results (200-500 words)
- Describe the results of a walkover survey of the site (or note "[SITE VISIT TO BE UNDERTAKEN]" for AI-generated drafts).
- Describe the current condition of the site: land use, ground cover, visible features, standing structures, ground disturbance.
- Note any features of potential archaeological interest visible on the surface.
- Note any evidence of previous ground disturbance (demolition, services, made ground, contamination).
- Assess the implications for archaeological survival.
- Reference photographs taken during the site visit (or "[PHOTOGRAPHS TO BE APPENDED]").

### 8. Assessment of Archaeological Potential (500-1000 words)
For each archaeological period, assess the potential for previously unrecorded remains to survive on the site. Use a structured assessment framework:

- **High potential**: Strong evidence for activity of this period in the area and conditions favourable for survival.
- **Moderate potential**: Some evidence for activity or conditions partially favourable.
- **Low potential**: Limited evidence for activity and/or conditions unfavourable.
- **Negligible potential**: No evidence and conditions clearly unfavourable (e.g., complete truncation).

For each period, justify the assessment based on:
- The known archaeological record within the study area.
- The geology, topography, and hydrology of the site.
- The land use history and degree of previous disturbance.
- The results of the site visit.

Summarise the overall archaeological potential of the site.

### 9. Impact Assessment (400-800 words)
- Describe the proposed development and its below-ground impact:
  - Foundation type and depth.
  - Basement or below-ground construction.
  - Service trenches and drainage runs.
  - Ground reduction, landscaping, and site preparation.
  - Piling (and its implications for archaeological deposits).
- Assess the impact of the development on the archaeological resource:
  - **Direct physical impact**: Destruction or disturbance of archaeological deposits through ground works.
  - **Impact on setting**: Where designated heritage assets (scheduled monuments) may be affected.
- For each period with identified potential, assess:
  - The likely depth and extent of impact.
  - The proportion of any archaeological resource that may be affected.
  - The magnitude of impact: major, moderate, minor, negligible.
- State the significance of effect (combining heritage significance with magnitude of impact).

### 10. Mitigation (300-600 words)
- Propose proportionate mitigation measures, which may include:
  - **Preservation in situ**: Design modification to avoid or minimise impact on significant remains (preferred where feasible).
  - **Archaeological evaluation (trial trenching)**: To further characterise the nature, extent, date, and significance of any remains prior to determination or as a pre-commencement condition.
  - **Strip, map and record**: Open-area excavation for sites of moderate significance under condition.
  - **Archaeological watching brief**: Monitoring of ground works where potential is low to moderate.
  - **Archaeological excavation**: Full excavation of significant remains where preservation in situ is not feasible.
  - **Historic building recording**: Where historic structures are to be demolished or altered.
  - **Publication and archiving**: Dissemination of results and deposition of archive with an appropriate museum.
- Recommend appropriate planning conditions (referencing the model conditions in the local authority's standard condition library).
- Confirm that the proposed mitigation is proportionate to the significance of the resource.

### 11. Conclusion (300-500 words)
- Summarise the archaeological potential of the site by period.
- Summarise the significance of the known and potential archaeological resource.
- Summarise the likely impact of the proposed development.
- Restate the proposed mitigation measures.
- Confirm compliance with NPPF Paragraphs 189-205.
- Confirm that the DBA has been prepared in accordance with CIfA Standard and Guidance.
- Recommend any further work required (evaluation, geophysical survey, geoarchaeological assessment).

## Quality Standards

- Reference specific NPPF paragraphs (189-205) by number.
- Reference the Ancient Monuments and Archaeological Areas Act 1979 where scheduled monuments are present.
- Reference CIfA Standard and Guidance for Historic Environment Desk-Based Assessment.
- Cite specific HER entry numbers for known sites and finds (or flag "[HER DATA TO BE INSERTED]").
- Cite NHLE list entry numbers for designated heritage assets.
- Present the archaeological background chronologically by period.
- Use a structured potential assessment framework (high/moderate/low/negligible) with clear justification.
- Distinguish between designated heritage assets (scheduled monuments, listed buildings) and non-designated heritage assets.
- Propose proportionate mitigation based on the assessed significance and impact.
- Professional archaeological language throughout: use correct period terminology, avoid speculation beyond evidence.
- Include map regression analysis with specific map references and dates.
- Where data has not been obtained, clearly flag (e.g., "[HER SEARCH TO BE OBTAINED]", "[SITE VISIT TO BE UNDERTAKEN]").`;

export const ADBA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, commission details, site identification, study area, and document structure.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the DBA purpose and NPPF Paragraph 194 requirement. Provide commission details. Identify the site by address, NGR, and area. Summarise the development. Define and justify the study area. State author qualifications.',
  },
  {
    name: 'Methodology',
    description: 'Research methodology, data sources consulted, assessment criteria, and limitations.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe the CIfA-compliant methodology. List all sources: HER, NHLE, NRHE, PAS, BGS, historic maps, published works, aerial photos, LiDAR. Describe assessment criteria. State limitations.',
  },
  {
    name: 'Planning Policy and Legislation',
    description: 'Statutory framework, NPPF heritage policies, and local archaeology policies.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Set out the 1979 Act. Set out the 1990 Act Sections 66 and 72. Summarise NPPF Paragraphs 189-205. List relevant local plan heritage and archaeology policies. Note archaeological priority areas. Reference CIfA standards.',
  },
  {
    name: 'Geological and Topographical Background',
    description: 'Bedrock, superficial geology, soils, topography, and hydrology.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe bedrock and superficial geology from BGS. Describe soils. Describe topography (elevation, gradient, aspect). Describe hydrology. Assess implications for past human activity and archaeological survival.',
  },
  {
    name: 'Historical and Archaeological Background',
    description: 'Chronological review of known archaeological and historical evidence by period.',
    required: true,
    min_words: 1500,
    max_words: 4000,
    guidance:
      'Present evidence chronologically: Prehistoric (Palaeolithic-Iron Age), Romano-British, Early Medieval, Medieval, Post-Medieval, Modern. Cite HER entries and NHLE designations. Reference published archaeological work. Assess each period with reference to the study area.',
    subsections: [
      {
        name: 'Prehistoric',
        description: 'Palaeolithic, Mesolithic, Neolithic, Bronze Age, and Iron Age evidence.',
        required: true,
        min_words: 200,
        max_words: 800,
        guidance: 'Describe evidence for each sub-period with HER references. Assess relevance to the site.',
      },
      {
        name: 'Romano-British',
        description: 'Roman period evidence: roads, settlements, finds, and features.',
        required: true,
        min_words: 150,
        max_words: 600,
        guidance: 'Describe Roman evidence. Assess relationship to known roads and settlements.',
      },
      {
        name: 'Early Medieval',
        description: 'Saxon period evidence: settlement, burial, churches, and place-names.',
        required: true,
        min_words: 150,
        max_words: 500,
        guidance: 'Describe Saxon evidence including Domesday Book and place-name analysis.',
      },
      {
        name: 'Medieval',
        description: 'Medieval evidence: settlement, agriculture, industry, and documentary sources.',
        required: true,
        min_words: 200,
        max_words: 700,
        guidance: 'Describe medieval settlement, churches, field systems, and documentary evidence.',
      },
      {
        name: 'Post-Medieval and Modern',
        description: 'Post-medieval through modern evidence: enclosure, industry, military, and recent disturbance.',
        required: true,
        min_words: 200,
        max_words: 600,
        guidance: 'Describe post-medieval land use change. Note modern disturbance affecting archaeological survival.',
      },
    ],
  },
  {
    name: 'Map Regression',
    description: 'Systematic analysis of historic maps from earliest to most recent.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe the site on each historic map: tithe, enclosure, 1st-4th Edition OS, post-war editions. For each, describe land use, buildings, boundaries, and changes. Assess implications for archaeological survival.',
  },
  {
    name: 'Site Visit Results',
    description: 'Walkover survey findings, current condition, and visible features.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'Describe current site condition, land use, ground cover, visible features, previous disturbance. Note features of archaeological interest. Assess implications for survival. Reference photographs.',
  },
  {
    name: 'Assessment of Archaeological Potential',
    description: 'Structured assessment of potential by period using high/moderate/low/negligible framework.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'For each period, assess potential (high/moderate/low/negligible) with justification based on the known record, geology, land use history, and site visit. Summarise overall potential.',
  },
  {
    name: 'Impact Assessment',
    description: 'Development ground works, impact on archaeological resource, and significance of effect.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe proposed ground works (foundations, basements, services, piling). Assess direct physical impact and setting impact. For each period with potential, assess magnitude of impact. State significance of effect.',
  },
  {
    name: 'Mitigation',
    description: 'Proportionate mitigation measures: preservation, evaluation, excavation, recording.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Propose proportionate mitigation: preservation in situ, evaluation, strip-map-record, watching brief, excavation, building recording, publication. Recommend planning conditions. Confirm proportionality.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of potential, significance, impact, mitigation, and policy compliance.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise potential by period. Summarise significance. Summarise impact. Restate mitigation. Confirm NPPF and CIfA compliance. Recommend further work if needed.',
  },
];

export const ADBA_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Methodology',
    'Planning Policy and Legislation',
    'Geological and Topographical Background',
    'Historical and Archaeological Background',
    'Map Regression',
    'Site Visit Results',
    'Assessment of Archaeological Potential',
    'Impact Assessment',
    'Mitigation',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const ADBA_TEMPLATE = {
  assessment_type: 'Archaeological Desk-Based Assessment',
  short_name: 'ADBA',
  version: 1,
  sections: ADBA_SECTIONS,
  quality_criteria: ADBA_QUALITY,
};
