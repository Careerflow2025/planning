import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Archaeological Field Evaluation (AFE) -- required where desk-based
 * assessment has identified a site with archaeological potential that
 * requires further characterisation through intrusive investigation
 * (geophysical survey and/or trial trenching) before a planning
 * decision can be made.
 *
 * The evaluation presents the results of fieldwork undertaken in
 * accordance with a Written Scheme of Investigation (WSI) approved
 * by the local planning authority's archaeological adviser, following
 * CIfA Standards and Guidance for Archaeological Field Evaluation.
 *
 * AI Difficulty: Hard -- requires review by a qualified archaeologist.
 */

export const AFE_PROMPT = `You are preparing an Archaeological Field Evaluation report to accompany a planning application submitted to a local planning authority in England. The report presents the results of archaeological evaluation fieldwork (geophysical survey and/or trial trenching) undertaken to characterise the nature, extent, date, condition, and significance of archaeological remains within the application site.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft only. It MUST be reviewed, verified, and endorsed by a suitably qualified and experienced archaeologist (a Member or Fellow of the Chartered Institute for Archaeologists, or equivalent) before submission to the local planning authority. The AI-generated content does not constitute professional archaeological advice and should not be relied upon without professional validation. All site-specific data, finds descriptions, stratigraphic interpretations, and significance assessments must be verified against actual fieldwork records.

## Document Purpose

An Archaeological Field Evaluation report must:
- Present the results of geophysical survey (magnetometry, resistivity, ground-penetrating radar, or other techniques as appropriate) and/or trial trenching undertaken on the application site.
- Describe the archaeological remains encountered: their nature, extent, depth, date, condition, and stratigraphic relationships.
- Assess the significance of the archaeological remains in accordance with NPPF criteria and Historic England guidance.
- Assess the impact of the proposed development on the archaeological resource.
- Propose proportionate mitigation measures (preservation in situ, archaeological recording, watching brief, or further excavation).
- Demonstrate compliance with NPPF Paragraphs 194-208 regarding heritage assets.
- Be prepared in accordance with CIfA Standard and Guidance for Archaeological Field Evaluation.
- Be prepared in accordance with an approved Written Scheme of Investigation (WSI).

## Key Policy and Legislation References

### Ancient Monuments and Archaeological Areas Act 1979
- Provides for the legal protection of scheduled monuments.
- It is a criminal offence to carry out works affecting a scheduled monument without Scheduled Monument Consent from the Secretary of State (via Historic England).
- Any evaluation on or near a scheduled monument requires Scheduled Monument Consent in addition to landowner permission.

### Planning (Listed Buildings and Conservation Areas) Act 1990
- Section 66(1): Duty to have special regard to the desirability of preserving listed buildings and their settings.
- Section 72(1): Duty to pay special attention to preserving or enhancing the character or appearance of Conservation Areas.
- Relevant where evaluation takes place on or near a listed building or within a Conservation Area.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 194**: In determining applications, local planning authorities should require an applicant to describe the significance of any heritage assets affected, including any contribution made by their setting. The level of detail should be proportionate to the assets' importance and no more than is sufficient to understand the potential impact of the proposal on their significance. As a minimum the relevant historic environment record should have been consulted and the heritage assets assessed using appropriate expertise where necessary.
- **Paragraph 195**: Local planning authorities should identify and assess the particular significance of any heritage asset that may be affected by a proposal, taking account of the available evidence and any necessary expertise.
- **Paragraph 196**: Where there is evidence of deliberate neglect of, or damage to, a heritage asset, the deteriorated state of the heritage asset should not be taken into account in any decision.
- **Paragraph 197**: In determining applications, local planning authorities should take account of the desirability of sustaining and enhancing the significance of heritage assets and putting them to viable uses consistent with their conservation, the positive contribution that conservation of heritage assets can make to sustainable communities, and the desirability of new development making a positive contribution to local character and distinctiveness.
- **Paragraph 199**: When considering the impact of a proposed development on the significance of a designated heritage asset, great weight should be given to the asset's conservation (and the more important the asset, the greater the weight should be).
- **Paragraph 200**: Any harm to, or loss of, the significance of a designated heritage asset (from its alteration or destruction, or from development within its setting) should require clear and convincing justification.
- **Paragraph 201**: Where a proposed development will lead to substantial harm to (or total loss of significance of) a designated heritage asset, local planning authorities should refuse consent, unless it can be demonstrated that the substantial harm or total loss is necessary to achieve substantial public benefits that outweigh that harm or loss.
- **Paragraph 202**: Where a development proposal will lead to less than substantial harm to the significance of a designated heritage asset, this harm should be weighed against the public benefits of the proposal.
- **Paragraph 203**: The effect of an application on the significance of a non-designated heritage asset should be taken into account. A balanced judgement will be required having regard to the scale of any harm or loss and the significance of the heritage asset.
- **Paragraph 205**: Local planning authorities should require developers to record and advance understanding of the significance of any heritage assets to be lost (wholly or in part) in a manner proportionate to their importance and the impact, and to make this evidence (and any archive generated) publicly accessible.
- **Paragraph 208**: Local planning authorities should assess whether the benefits of a proposal for enabling development, which would otherwise conflict with planning policies but which would secure the future conservation of a heritage asset, outweigh the disbenefits of departing from those policies.

### Chartered Institute for Archaeologists (CIfA) Standards and Guidance
- **Standard and Guidance for Archaeological Field Evaluation (2014, revised 2020)**: Sets the professional standard for evaluation methodology, including geophysical survey, trial trenching, recording, finds processing, environmental sampling, reporting, and archiving.
- **Standard and Guidance for Archaeological Geophysical Survey (2014, revised 2020)**: Sets standards for geophysical survey methodology, processing, and interpretation.
- **Standard and Guidance for the Collection, Documentation, Conservation and Research of Archaeological Materials (2014, revised 2020)**: Finds processing and conservation standards.
- **Code of Conduct**: Professional and ethical standards for archaeological practice.
- **Standard and Guidance for the Creation, Compilation, Transfer and Deposition of Archaeological Archives (2014, revised 2020)**: Archive standards.

### Historic England Guidance
- **Conservation Principles, Policies and Guidance (2008)**: Framework for assessing heritage significance (evidential, historical, aesthetic, communal values).
- **Statements of Heritage Significance (Advice Note 12, 2019)**: How to describe heritage significance.
- **Managing Significance in Decision-Taking in the Historic Environment (GPA 2, 2015)**: Decision-taking for heritage applications.
- **Preserving Archaeological Remains: Decision-Taking for Sites under Development (2016)**: Guidance on in situ preservation and evaluating the survival of archaeological deposits.
- **Geophysical Survey in Archaeological Field Evaluation (2008)**: Guidance on selecting and interpreting geophysical survey methods.
- **Archaeological Investigation (2015)**: Advice on planning and commissioning archaeological investigations.
- **Environmental Archaeology: A Guide to the Theory and Practice of Methods, from Sampling and Recovery to Post-Excavation (2011)**: Standards for environmental sampling and assessment.

### Other Key References
- The Historic Environment Record (HER): Primary source of information on the known archaeological resource.
- The National Heritage List for England (NHLE): Statutory designations.
- British Geological Survey (BGS) mapping: Geology and ground conditions.
- Written Scheme of Investigation (WSI): The approved project design for the evaluation.
- Local plan heritage and archaeology policies.
- Regional archaeological research frameworks (Historic England).
- Museum collection policies for archive deposition.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the evaluation report and the circumstances of the evaluation (pre-determination or condition).
- Provide commission details: client, archaeological contractor, site, planning application reference (if known), condition reference (if applicable).
- Identify the site: postal address, National Grid Reference (NGR), site area in hectares.
- Summarise the proposed development.
- State the reason for the evaluation: LPA archaeological adviser requirement based on the desk-based assessment findings and/or the archaeological potential of the site.
- Reference the Written Scheme of Investigation (WSI) under which the evaluation was undertaken (including date and version, and by whom it was approved).
- State the qualifications and experience of the project director and site supervisor (or flag "[TO BE COMPLETED BY QUALIFIED ARCHAEOLOGIST]" for AI-generated drafts).
- State the dates of the fieldwork.
- Outline the document structure.

### 2. Policy Framework (400-800 words)
- Set out the Ancient Monuments and Archaeological Areas Act 1979 (where scheduled monuments are involved).
- Set out the Planning (Listed Buildings and Conservation Areas) Act 1990 Sections 66 and 72 (where relevant).
- Set out NPPF Paragraphs 194-205 and 208, summarising each key paragraph.
- Set out relevant local plan heritage and archaeology policies.
- Note any local authority requirements (archaeological priority areas, local list, supplementary planning guidance on archaeology).
- Reference CIfA Standard and Guidance for Archaeological Field Evaluation as the professional framework.
- Reference Historic England guidance as applicable.

### 3. Desk-Based Assessment Summary (400-800 words)
- Summarise the findings of the desk-based assessment (DBA) that preceded the evaluation.
- Briefly describe the geological and topographical background.
- Summarise the known archaeological and historical background by period, citing key HER entries and NHLE designations.
- Summarise the archaeological potential identified in the DBA by period.
- Identify the key research questions the evaluation was designed to address.
- Reference the DBA report (author, date, report number) and note that the full DBA should be read alongside this evaluation report.

### 4. Methodology (600-1200 words)
- Reference the approved WSI and confirm that the evaluation was carried out in accordance with it.
- Describe the geophysical survey methodology (if undertaken):
  - Technique(s) used (magnetometry, resistivity, GPR, etc.) and justification for selection.
  - Survey instrument (make and model), settings, traverse spacing, and sample interval.
  - Survey grid layout, tie-in to Ordnance Survey National Grid (OSGB36), and accuracy.
  - Data processing methodology: software used, filters applied, data presentation.
  - Reference CIfA Standard and Guidance for Archaeological Geophysical Survey.
- Describe the trial trenching methodology:
  - Number of trenches, dimensions (length, width), locations, and sample percentage of the site area.
  - Trench location strategy: targeting geophysical anomalies, blank areas, and representative coverage.
  - Excavation methodology: machine excavation of overburden under archaeological supervision, hand excavation of archaeological deposits.
  - Recording methodology: context recording system, section drawing, photography (digital and scale), planning.
  - Finds collection and processing policy.
  - Environmental sampling strategy: bulk samples, column samples, monoliths, size and recovery methodology.
  - Temporary Bench Mark (TBM) or GPS levels, tied to Ordnance Datum (AOD).
  - Health and safety procedures.
  - Reinstatement methodology.
- Describe the finds processing methodology: washing, marking, quantification, identification, specialist assessment.
- Describe the environmental processing methodology: flotation, residue sorting, assessment.
- Describe any constraints or departures from the WSI and the reasons for them.
- State the museum or repository for archive deposition and the accession number (or flag "[ACCESSION NUMBER TO BE OBTAINED]").
- State compliance with CIfA Standards and Guidance.

### 5. Geophysical Survey Results (500-1500 words)
- Present the results of the geophysical survey:
  - Overview of the survey area, coverage, and data quality.
  - Description of identified anomalies, categorised by interpretation:
    - **Archaeology (definite)**: Clear responses indicative of archaeological features (ditches, pits, walls, hearths, kilns).
    - **Archaeology (probable)**: Responses likely to be archaeological but less certain.
    - **Archaeology (possible)**: Weak or ambiguous responses that may have archaeological origin.
    - **Agricultural features**: Ridge and furrow, field drains, plough marks.
    - **Modern/recent disturbance**: Services, demolition, made ground.
    - **Geological/natural**: Variations attributable to natural geology.
    - **Ferrous/magnetic disturbance**: Point anomalies from ferrous objects.
  - For each group of anomalies, describe: location, orientation, dimensions, magnetic/resistivity response, and suggested interpretation.
  - Describe any patterns in the anomaly distribution (enclosures, boundaries, settlement clusters).
  - Assess the reliability of the survey results in the context of the site geology and ground conditions.
  - Reference the geophysical survey figures (greyscale plots, interpretation plots, XY trace plots).
  - If no geophysical survey was undertaken, state this and explain why (e.g., site already built upon, geology unsuitable for geophysics, small site area, or geophysics undertaken by others).

### 6. Trial Trenching Results (1500-4000 words)
- This is the core results section. Present the results trench by trench:
- For each trench:
  - **Trench location**: Reference to the trench location plan (figure number).
  - **Trench dimensions**: Length, width, depth of overburden, maximum excavated depth (in metres AOD).
  - **Stratigraphic sequence**: Describe the deposits encountered from topsoil to natural, providing context numbers, descriptions, depths, and relationships.
  - **Archaeological features**: For each feature encountered, describe:
    - Context number(s) (cut and fill).
    - Feature type: ditch, gully, pit, posthole, wall, surface, layer, etc.
    - Dimensions: length (within trench), width, depth.
    - Fill description: colour, texture, composition, inclusions.
    - Finds: quantity and type of artefacts recovered (pottery, flint, bone, CBM, metal).
    - Date: based on artefactual evidence.
    - Interpretation: function, date, and relationship to other features.
    - Relationship to geophysical anomalies (where applicable).
  - **Section drawings**: Reference to section drawing figure numbers.
  - **Photographs**: Reference to plate numbers.
  - If no archaeological features were encountered, describe the deposit sequence and confirm that the natural geology was reached.
- Present a summary of trench results in tabular form.
- Correlate trial trench results with geophysical survey results where both are available.
- Note "[TRENCH RESULTS TO BE COMPLETED FROM SITE RECORDS]" where actual data is not available for an AI-generated draft.

### 7. Finds Assessment (400-1000 words)
- Present the results of the finds assessment by material type:
  - **Pottery**: Quantification (sherd count and weight), fabric types, forms, date range, significance. Reference specialist report (or flag "[POTTERY SPECIALIST REPORT TO BE APPENDED]").
  - **Flint/lithics**: Quantification, raw material, technology, types, date range, significance.
  - **Animal bone**: Quantification (fragment count and weight), species, elements, condition, butchery marks, significance. Reference specialist report.
  - **Ceramic building material (CBM)**: Quantification, types (brick, tile, daub), date range.
  - **Metal objects**: Description, date, significance. Reference specialist report.
  - **Other finds**: Glass, stone, shell, clay tobacco pipe, industrial residues, etc.
- For each material category, provide a brief assessment of significance and research potential.
- Summarise the overall date range and character of the artefactual assemblage.
- Note any finds requiring conservation assessment.
- State the intended deposition of the finds archive.

### 8. Environmental Assessment (400-800 words)
- Present the results of the environmental sampling and processing:
  - **Charred plant remains**: Species identified, abundance, significance for understanding crop husbandry, diet, and land use. Reference specialist report (or flag "[ENVIRONMENTAL SPECIALIST REPORT TO BE APPENDED]").
  - **Charcoal**: Species, quantity, significance for woodland management and fuel use.
  - **Waterlogged plant remains**: Species, preservation conditions, significance (if wet-preserved deposits encountered).
  - **Faunal remains from samples**: Small mammals, fish, birds, molluscs.
  - **Soil micromorphology**: If thin sections were taken, describe the results.
  - **Radiocarbon dating**: If samples were submitted, present the results (or recommend dating as further work).
  - **Other scientific analyses**: Archaeomagnetic dating, OSL dating, isotope analysis, residue analysis.
- Assess the potential for further environmental analysis if full excavation were to be undertaken.
- Summarise the environmental evidence and its contribution to understanding the archaeological resource.

### 9. Significance Assessment (500-1000 words)
- Assess the significance of the archaeological remains encountered during the evaluation, using the framework in NPPF and Historic England Conservation Principles:
  - **Evidential value**: The potential of the physical remains to yield evidence about past human activity (primary archaeological interest).
  - **Historical value**: The ways in which past people, events, and aspects of life can be connected through the remains (illustrative and associative).
  - **Aesthetic value**: The ways in which people draw sensory and intellectual stimulation from the remains.
  - **Communal value**: The meanings the remains hold for the people who relate to them (commemorative, social, spiritual).
- Assess significance against DCMS criteria for scheduling (period, rarity, documentation, group value, survival/condition, fragility, diversity, potential):
  - Apply each criterion as relevant to the remains identified.
- Consider the significance of the remains at local, regional, or national level.
- Relate significance to the regional research framework and research agenda priorities.
- Distinguish between designated heritage assets (scheduled monuments) and non-designated heritage assets.
- Where remains have been identified as nationally important, state this clearly and note the implications for NPPF Paragraphs 199-201.

### 10. Impact Assessment (400-800 words)
- Describe the proposed development and its below-ground impact:
  - Foundation type and depth (strip foundations, pad foundations, piled foundations).
  - Basement or below-ground construction.
  - Service trenches and drainage runs.
  - Ground reduction, grading, and landscaping.
  - Attenuation tanks, soakaways, and other below-ground infrastructure.
  - Access roads and hard surfaces.
- For each area of identified archaeological remains, assess:
  - The depth of the archaeological remains below existing ground level.
  - The depth and extent of the proposed below-ground impact.
  - Whether the development will wholly or partially destroy the archaeological remains.
  - The magnitude of impact: total loss, major, moderate, minor, negligible.
- Assess the harm to the significance of the heritage asset:
  - For designated heritage assets (or remains of equivalent significance): substantial harm or less than substantial harm (NPPF Paragraphs 199-202).
  - For non-designated heritage assets: scale of harm (NPPF Paragraph 203).
- Apply the NPPF tests as appropriate and present the harm assessment clearly.

### 11. Mitigation Strategy (500-1000 words)
- Propose a proportionate and justified mitigation strategy, which may include one or a combination of the following:
  - **Preservation in situ**: Modification of the development design to avoid impact on the most significant remains. Describe specific design changes (re-siting foundations, bridging deposits, use of piled foundations to avoid wide-area disturbance). Cross-reference Historic England Preserving Archaeological Remains (2016) guidance.
  - **Archaeological excavation (strip, map and record)**: Open-area excavation of areas where significant remains will be destroyed by the development. Describe the proposed area, methodology, and research objectives.
  - **Detailed archaeological recording**: Targeted excavation of specific features or areas of interest.
  - **Archaeological watching brief**: Monitoring of ground works in areas of lower potential or where remains are less significant. Describe the scope, level of monitoring (continuous or intermittent), and circumstances requiring escalation to full excavation.
  - **Post-excavation assessment and analysis**: Programme of specialist analysis, radiocarbon dating, and publication of results.
  - **Publication and dissemination**: Commitment to publish results in an appropriate journal or monograph, and to deposit the archive with the receiving museum.
  - **Community engagement**: Public open days, interpretation boards, educational outreach during excavation.
- Recommend appropriate planning conditions, referencing standard archaeological conditions used by the LPA.
- Provide an outline post-excavation and publication programme, including estimated timescales.
- Confirm that the proposed mitigation is proportionate to the significance of the remains and the scale of the impact.

### 12. Conclusion (300-600 words)
- Summarise the key findings of the evaluation: the nature, date, extent, condition, and significance of the archaeological remains.
- Summarise the correlation between the geophysical survey results and the trial trenching results.
- Summarise the impact of the proposed development on the archaeological resource.
- Restate the proposed mitigation strategy.
- Confirm compliance with NPPF Paragraphs 194-205 and 208.
- Confirm that the evaluation was carried out in accordance with the approved WSI and CIfA Standards and Guidance.
- Recommend any additional work required prior to or during development (further evaluation, excavation, watching brief).
- Note that the evaluation archive will be deposited with the receiving museum under accession number "[ACCESSION NUMBER]".
- State that the report should be submitted to the HER for inclusion in the archaeological record.

## Quality Standards

- Include the AI-generated disclaimer prominently in the document frontispiece and introduction, stating that the report requires review and endorsement by a suitably qualified archaeologist.
- Reference specific NPPF paragraphs (194-208) by number throughout.
- Reference the Ancient Monuments and Archaeological Areas Act 1979 where scheduled monuments are present or nearby.
- Reference CIfA Standard and Guidance for Archaeological Field Evaluation.
- Reference CIfA Standard and Guidance for Archaeological Geophysical Survey (where geophysics is included).
- Reference Historic England guidance on evaluation, significance, and preservation of remains.
- Cite specific HER entry numbers for known sites and finds (or flag "[HER REF]").
- Cite NHLE list entry numbers for designated heritage assets (or flag "[NHLE REF]").
- Present trench results systematically with context numbers, dimensions, descriptions, and interpretations.
- Present finds quantification tables by context and material type.
- Describe environmental samples and results by context.
- Assess significance using Historic England Conservation Principles (evidential, historical, aesthetic, communal) and DCMS scheduling criteria.
- Propose proportionate mitigation based on assessed significance and impact.
- Distinguish between designated heritage assets and non-designated heritage assets.
- Use correct archaeological terminology: context, cut, fill, deposit, feature, stratigraphy, assemblage, residual, intrusive.
- Where data has not been obtained or fieldwork has not been undertaken, clearly flag (e.g., "[TRENCH RESULTS TO BE COMPLETED FROM SITE RECORDS]", "[SPECIALIST REPORT TO BE APPENDED]").
- Professional archaeological language throughout, technically accurate but accessible to planning officers.`;

export const AFE_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, commission details, site identification, WSI reference, fieldwork dates, and document structure.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the purpose and circumstances of the evaluation. Provide commission details. Identify the site by address, NGR, and area. Summarise the development. Reference the approved WSI. State qualifications and fieldwork dates. Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'Statutory framework, NPPF heritage policies (194-208), local archaeology policies, and CIfA standards.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out the 1979 Act and 1990 Act. Summarise NPPF Paragraphs 194-208. List relevant local plan heritage and archaeology policies. Reference CIfA Standard and Guidance for Archaeological Field Evaluation. Reference Historic England guidance.',
  },
  {
    name: 'Desk-Based Assessment Summary',
    description: 'Summary of prior DBA findings, archaeological potential by period, and key research questions.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise DBA geological and topographical background. Summarise known archaeological record by period with key HER and NHLE references. Summarise archaeological potential. Identify research questions for the evaluation. Reference the DBA report.',
  },
  {
    name: 'Methodology',
    description: 'Geophysical survey and trial trenching methodology, recording, sampling, and finds processing.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Reference the approved WSI. Describe geophysical methodology (technique, instrument, settings, data processing). Describe trial trenching methodology (trench number, dimensions, sample percentage, excavation, recording, sampling). Describe finds and environmental processing. Note any departures from the WSI. State archive deposition and accession number.',
    subsections: [
      {
        name: 'Geophysical Survey Methodology',
        description: 'Technique, instrument, settings, coverage, data processing, and interpretation methodology.',
        required: false,
        min_words: 200,
        max_words: 500,
        guidance: 'Describe the geophysical technique(s), instrument, survey parameters, data processing software, and interpretation categories. Reference CIfA geophysical survey standards.',
      },
      {
        name: 'Trial Trenching Methodology',
        description: 'Trench design, excavation, recording, sampling, finds processing, and reinstatement.',
        required: true,
        min_words: 300,
        max_words: 700,
        guidance: 'Describe trench number, dimensions, location strategy, excavation method, recording system, sampling strategy, finds processing, and reinstatement. State health and safety procedures.',
      },
    ],
  },
  {
    name: 'Geophysical Survey Results',
    description: 'Survey results, anomaly descriptions and interpretations, and data quality assessment.',
    required: false,
    min_words: 500,
    max_words: 1500,
    guidance:
      'Present survey overview, coverage, and data quality. Describe anomalies categorised as definite/probable/possible archaeology, agricultural, modern, geological, and ferrous. For each anomaly group describe location, response, dimensions, and interpretation. Assess reliability. Reference figures. If no geophysics, state reason.',
  },
  {
    name: 'Trial Trenching Results',
    description: 'Trench-by-trench results: stratigraphic sequences, archaeological features, finds, and interpretations.',
    required: true,
    min_words: 1500,
    max_words: 4000,
    guidance:
      'Present results trench by trench. For each trench describe location, dimensions, stratigraphic sequence, archaeological features (context numbers, type, dimensions, fills, finds, date, interpretation), and correlation with geophysical anomalies. Present summary table. Reference section drawings and photographs. Flag where actual data is needed.',
  },
  {
    name: 'Finds Assessment',
    description: 'Assessment of artefactual material by type: pottery, flint, bone, CBM, metal, and other finds.',
    required: true,
    min_words: 400,
    max_words: 1000,
    guidance:
      'Present finds by material type with quantification, fabric/type descriptions, date range, and significance. Summarise assemblage character and date range. Note conservation needs. State archive deposition. Reference specialist reports.',
  },
  {
    name: 'Environmental Assessment',
    description: 'Environmental sampling results: charred plant remains, charcoal, waterlogged remains, and dating.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present results of environmental processing by sample. Describe charred plant remains, charcoal, waterlogged remains, faunal remains, and any dating results. Assess potential for further analysis. Summarise environmental contribution. Reference specialist reports.',
  },
  {
    name: 'Significance Assessment',
    description: 'Assessment of heritage significance using NPPF criteria, Conservation Principles, and DCMS scheduling criteria.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Assess significance using Conservation Principles (evidential, historical, aesthetic, communal values). Apply DCMS scheduling criteria (period, rarity, documentation, group value, survival, fragility, diversity, potential). Assess at local, regional, or national level. Relate to regional research frameworks. Distinguish designated and non-designated assets.',
  },
  {
    name: 'Impact Assessment',
    description: 'Assessment of development impact on archaeological remains, magnitude of impact, and harm assessment.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe proposed ground works (foundations, basements, services, grading, infrastructure). Assess depth and extent of impact on identified remains. State magnitude of impact. Assess harm to significance (substantial harm or less than substantial harm for designated assets; scale of harm for non-designated). Apply NPPF tests.',
  },
  {
    name: 'Mitigation Strategy',
    description: 'Proposed mitigation: preservation in situ, excavation, watching brief, post-excavation, and publication.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Propose proportionate mitigation: preservation in situ (design changes), excavation (open-area or targeted), watching brief, post-excavation assessment and analysis, publication and dissemination, community engagement. Recommend planning conditions. Provide outline post-excavation programme. Confirm proportionality.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of findings, significance, impact, mitigation, and compliance with NPPF and CIfA standards.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise key findings (nature, date, extent, condition, significance). Summarise geophysical/trenching correlation. Summarise impact and mitigation. Confirm NPPF and CIfA compliance. Recommend further work. Note archive deposition and HER submission.',
  },
];

export const AFE_QUALITY: QualityCriteria = {
  min_policy_refs: 10,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Desk-Based Assessment Summary',
    'Methodology',
    'Trial Trenching Results',
    'Finds Assessment',
    'Environmental Assessment',
    'Significance Assessment',
    'Impact Assessment',
    'Mitigation Strategy',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const AFE_TEMPLATE = {
  assessment_type: 'Archaeological Field Evaluation',
  short_name: 'AFE',
  version: 1,
  sections: AFE_SECTIONS,
  quality_criteria: AFE_QUALITY,
};
