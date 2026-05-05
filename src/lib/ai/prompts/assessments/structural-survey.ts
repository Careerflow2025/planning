import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Structural Survey / Report (SSR) -- required where development proposals
 * involve works to an existing building that affect its structural integrity,
 * or where the structural condition of an existing building needs to be
 * assessed to support a planning application (e.g., change of use, additional
 * storeys, removal of loadbearing elements, basement construction, conversion
 * of agricultural buildings, or justification for demolition).
 *
 * The report presents an assessment of the existing structural condition,
 * identifies defects, evaluates structural capacity for proposed changes,
 * and recommends remedial works. It follows relevant Eurocodes and
 * IStructE guidance.
 *
 * AI Difficulty: Hard -- requires review by a chartered structural engineer.
 */

export const SSR_PROMPT = `You are preparing a Structural Survey / Report to accompany a planning application submitted to a local planning authority in England. The report provides a professional assessment of the existing structural condition of a building or structure, identifies defects and their causes, evaluates the structural capacity for proposed changes (such as change of use, additional storeys, removal of loadbearing elements, or conversion), and recommends remedial works or structural interventions.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft only. It MUST be reviewed, verified, and endorsed by a chartered structural engineer (CEng MIStructE or equivalent) before submission to the local planning authority or Building Control Body. The AI-generated content does not constitute professional structural engineering advice and should not be relied upon without professional validation. All structural assessments, defect diagnoses, capacity calculations, and remedial recommendations must be verified through on-site inspection, structural analysis, and engineering judgement by a suitably qualified professional. Structural assessments involve considerations of life safety, and reliance on unverified AI-generated content could have serious consequences.

## Document Purpose

A Structural Survey / Report must:
- Describe the existing structural system of the building or structure: the load paths, structural form, materials, and construction methods.
- Present the findings of a condition survey: identifying structural defects, deterioration, damage, or distress, and diagnosing their probable causes.
- Assess the structural capacity of the existing building for the proposed changes (new loads, changes to load paths, removal of elements, additional storeys).
- Recommend remedial works to address identified defects.
- Recommend structural interventions to facilitate the proposed development (new beams, columns, foundations, underpinning, strengthening).
- Demonstrate that the proposed development is structurally feasible and can be safely constructed.
- Comply with the structural design requirements of the Building Regulations 2010 Part A (Structure) and the relevant Eurocodes.

## Key Policy and Legislation References

### Building Regulations 2010 -- Part A (Structure)
- **Requirement A1**: Loading. The building shall be constructed so that the combined dead, imposed, and wind loads are sustained and transmitted by it to the ground safely, and so that the building remains stable under foreseeable loading conditions.
- **Requirement A2**: Ground movement. The building shall be constructed so that ground movement caused by swelling, shrinkage, or freezing of the subsoil, or by landslip or subsidence (other than subsidence arising from shrinkage), will not impair the stability of any part of the building.
- **Requirement A3**: Disproportionate collapse. The building shall be constructed so that in the event of an accident the building will not suffer collapse to an extent disproportionate to the cause. This applies particularly to buildings of five or more storeys.
- **Approved Document A**: Provides guidance on meeting Requirements A1-A3, including reference to British Standards and Eurocodes.

### Eurocodes (BS EN 1990-1999)
The Eurocodes are the primary structural design standards in the UK:
- **BS EN 1990 (Eurocode 0)**: Basis of structural design. Defines limit states, combinations of actions, and reliability requirements.
- **BS EN 1991 (Eurocode 1)**: Actions on structures. Defines dead loads, imposed loads, wind loads, snow loads, and accidental actions.
  - BS EN 1991-1-1: Densities, self-weight, and imposed loads for buildings.
  - BS EN 1991-1-3: Snow loads.
  - BS EN 1991-1-4: Wind actions.
  - BS EN 1991-1-7: Accidental actions (robustness and disproportionate collapse).
- **BS EN 1992 (Eurocode 2)**: Design of concrete structures.
- **BS EN 1993 (Eurocode 3)**: Design of steel structures.
- **BS EN 1994 (Eurocode 4)**: Design of composite steel and concrete structures.
- **BS EN 1995 (Eurocode 5)**: Design of timber structures.
- **BS EN 1996 (Eurocode 6)**: Design of masonry structures.
- **BS EN 1997 (Eurocode 7)**: Geotechnical design (see also Geotechnical Assessment).
- **BS EN 1998 (Eurocode 8)**: Design of structures for earthquake resistance (limited applicability in UK).
- **BS EN 1999 (Eurocode 9)**: Design of aluminium structures.
- Each Eurocode is used with the relevant UK National Annex (NA) which provides nationally determined parameters.

### IStructE Guidance
- **Appraisal of Existing Structures (2010)**: Guidance on assessing existing structures, including methodology for condition surveys, structural appraisals, and fitness for purpose assessments.
- **Structural Use of Unreinforced Masonry (various)**: Guidance on masonry assessment.
- **Manual for the Design of Building Structures to Eurocode 1 and Basis of Structural Design**: Practical guidance on Eurocode application.
- **Temporary Works guidance**: For construction-phase structural requirements.

### Construction (Design and Management) Regulations 2015 (CDM 2015)
- The structural survey and any subsequent structural works must comply with CDM 2015.
- The designer has duties to eliminate, reduce, and control health and safety risks in the design.
- Particular risks include: working at height, temporary instability during structural alterations, asbestos, and structural collapse.
- A CDM Principal Designer should be appointed for projects with more than one contractor.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 130**: Planning policies and decisions should ensure developments are sympathetic to local character and history, including the surrounding built environment, while not preventing or discouraging appropriate innovation or change. They should establish or maintain a strong sense of place.
- **Paragraph 197**: LPAs should take account of the desirability of sustaining and enhancing the significance of heritage assets (relevant where the building is listed or in a Conservation Area).
- **Paragraph 200**: Any harm to significance of a designated heritage asset should require clear and convincing justification (relevant where structural works affect listed buildings).

### Other Key References
- **NHBC Standards (Chapter 4.1-4.6)**: Foundation and structural requirements for new dwellings.
- **BRE Digests**: Various digests on structural defects (subsidence, heave, settlement, cracking, damp, timber decay, concrete deterioration).
- **BS 5628 / BS EN 1996**: Masonry design (BS 5628 now superseded but may be relevant for assessing older structures designed to this code).
- **BS 8110 / BS EN 1992**: Concrete design (BS 8110 now superseded).
- **BS 449 / BS EN 1993**: Steel design (BS 449 now superseded).
- **BS 6399 / BS EN 1991**: Loading (BS 6399 now superseded).
- **Party Wall etc. Act 1996**: Relevant where works affect shared walls or are within prescribed distances of adjoining owners' structures.

## Section-by-Section Guidance

### 1. Introduction (200-500 words)
- State the purpose of the structural survey and the circumstances (planning application support, Building Regulations pre-application, due diligence, defect investigation).
- Provide commission details: client, structural engineer, building address, planning application reference (if applicable).
- Identify the building: address, approximate age, use, number of storeys, approximate gross floor area.
- Summarise the proposed development or changes that prompted the structural assessment (e.g., change of use from commercial to residential, loft conversion, additional storey, removal of loadbearing wall, basement excavation, conversion of barn).
- State the scope of the assessment: which parts of the building were inspected, any areas not accessible, and any limitations.
- State the qualifications and professional indemnity insurance of the structural engineer (or flag "[TO BE REVIEWED AND ENDORSED BY CHARTERED STRUCTURAL ENGINEER (CEng MIStructE)]").
- State the date(s) of the inspection.
- Outline the document structure.

### 2. Methodology (300-600 words)
- Describe the inspection methodology:
  - **Visual inspection**: Systematic visual assessment of all accessible structural elements (foundations where visible, walls, floors, roof structure, lintels, beams, columns).
  - **Non-destructive testing** (where undertaken): crack monitoring, plumb/level surveys, moisture readings, cover meter surveys (for reinforced concrete), ultrasonic testing, Schmidt hammer testing.
  - **Opening-up works** (where undertaken): trial pits to expose foundations, removal of plaster to inspect timber frame or masonry, exposure of steelwork.
  - **Desk study**: Review of available information (original drawings, previous structural reports, Building Control records, geological data, mining records).
  - **Monitoring**: Any ongoing structural monitoring (crack gauges, level surveys, tilt meters) and the period of monitoring.
- Describe the assessment methodology:
  - Reference IStructE Appraisal of Existing Structures (2010) as the methodological framework.
  - State the design codes used for any structural assessment (Eurocodes with UK National Annexes, or historic codes where assessing existing structures designed to superseded standards).
  - State the basis of load assessment (BS EN 1991-1-1 imposed loads for current and proposed use).
- State the limitations of the assessment: areas not inspected, concealed elements, absence of original drawings, seasonal factors.

### 3. Building Description (400-800 words)
- Provide a detailed description of the building and its structural system:
  - **Age and construction period**: Approximate date of original construction and any subsequent extensions or alterations, based on architectural style, construction techniques, map evidence, and available records.
  - **Building form**: Plan shape, number of storeys (including basement and attic), roof form, extensions, and outbuildings.
  - **Foundation system**: Type (strip, pad, raft, piled, or unknown/not exposed), depth (if known), material (concrete, brick, stone). If foundations have not been inspected, state this.
  - **Walls**: Construction type (solid masonry, cavity masonry, timber frame, steel frame, concrete frame, load-bearing masonry infill). Wall thickness, material (brick, stone, block, render), bond pattern, condition.
  - **Floors**: Construction type (suspended timber, solid concrete, beam-and-block, reinforced concrete slab, composite). Span direction, support arrangements.
  - **Roof structure**: Type (cut timber roof, trussed rafter, steel truss, concrete), covering, span, support arrangements.
  - **Structural alterations**: Evidence of previous structural alterations (removed walls, inserted steelwork, underpinning, extensions with junctions, infilled openings).
  - **Services**: Location of structural elements relative to services (drainage, heating, water supply) that may affect structural works.

### 4. Structural System Assessment (400-800 words)
- Describe the load path through the building:
  - How roof loads are transferred to the walls or frame.
  - How floor loads are transferred to the walls or frame.
  - How wall loads (self-weight, imposed, wind) are transferred to the foundations.
  - How foundation loads are transferred to the ground.
- Identify the primary structural elements: loadbearing walls, columns, beams, lintels, floor joists/slabs, roof trusses/rafters, foundations.
- Identify any secondary structural elements: non-loadbearing partitions contributing to lateral stability, tie rods, buttresses.
- Assess the lateral stability of the building: how it resists wind loads and other lateral forces (return walls, diaphragm action of floors and roof, frame action, bracing).
- Identify any structural modifications that have affected the original load paths (removed walls without adequate support, overloaded floors, altered roof structure).
- For proposed works, identify which structural elements will be affected and the implications for the load path.

### 5. Condition Survey (500-1000 words)
- Present the findings of the condition survey systematically. For each part of the building:

#### 5.1 Foundations
- Evidence of foundation movement: settlement (uniform or differential), subsidence, heave, lateral movement.
- Cracking patterns associated with foundation movement.
- Proximity to trees (clay shrinkage risk) and previous tree removal (heave risk).
- Drainage condition and proximity.
- Mining subsidence risk (where applicable).

#### 5.2 Walls
- Cracking: location, pattern (vertical, horizontal, diagonal, stepped), width, depth (structural or superficial), age (historic or progressive), monitoring results.
- Bulging, bowing, or leaning: extent, severity, rate of movement.
- Dampness: rising damp, penetrating damp, condensation. Implications for structural integrity (timber decay, frost damage, sulphate attack).
- Mortar condition: pointing loss, friable mortar, sulphate attack, lime mortar vs. cement mortar compatibility.
- Material condition: spalling brick, eroding stone, render cracking and debonding.
- Cavity wall ties: corrosion (particularly in buildings c.1920-1980 with iron or early galvanised ties).

#### 5.3 Floors
- Deflection, springiness, or unevenness: extent and probable cause.
- Timber floors: condition of joists (decay, beetle infestation, bearing failure, notching/drilling for services), condition of floorboards, bearing onto walls.
- Concrete floors: cracking, settlement, heave (particularly ground-bearing slabs on shrinkable clay).

#### 5.4 Roof Structure
- Condition of principal structural members: trusses, purlins, rafters, ridge boards.
- Timber decay: wet rot, dry rot (Serpula lacrymans), insect infestation (woodworm, death watch beetle).
- Spread: evidence of outward thrust of the roof pushing walls outward (particularly in buildings without collar ties or ceiling ties).
- Sagging: deflection of ridge, purlins, or rafters.
- Bearing condition: adequacy of bearing onto walls, wall plate condition.
- Alterations: evidence of cuts, notches, removed members, or added loads (water tanks, solar panels).

#### 5.5 Lintels and Beams
- Condition of lintels over openings: material (timber, stone, brick arch, steel, concrete), adequacy, signs of distress (cracking, deflection, corrosion).
- Condition of beams and columns: corrosion of steelwork, concrete deterioration, timber decay.

### 6. Defects Identification (400-800 words)
- Present a summary of all structural defects identified, categorised by severity:
  - **Critical defects**: Requiring immediate attention due to risk of structural failure or life safety concern.
  - **Significant defects**: Requiring remedial work within a defined timescale to prevent further deterioration.
  - **Minor defects**: Not posing an immediate structural risk but requiring monitoring or repair to prevent deterioration.
  - **Cosmetic defects**: Not structurally significant but noted for completeness.
- For each defect, provide:
  - Location (referenced to building plan and photographs).
  - Description of the defect.
  - Probable cause (diagnosis).
  - Severity classification.
  - Recommended action and priority.
- Present defects on annotated plans or elevations where appropriate (or flag "[DEFECT PLANS TO BE PREPARED]").
- Note any defects requiring further investigation (e.g., opening up, specialist testing, monitoring).

### 7. Structural Capacity Assessment (400-800 words)
- Assess the structural capacity of the existing building for the proposed changes:
  - **Loading assessment**: Calculate or estimate the change in loading resulting from the proposed development:
    - Change of imposed load due to change of use (e.g., office to residential, warehouse to retail). Reference BS EN 1991-1-1 imposed load categories.
    - Additional dead load from new construction (additional storeys, new partitions, new finishes).
    - Additional imposed load from new use.
    - Wind load implications of increased height or changed geometry.
  - **Capacity of existing elements**: Assess whether existing structural elements can sustain the proposed loads:
    - Loadbearing walls: capacity for additional storeys or concentrated loads.
    - Floors: capacity for changed imposed loads.
    - Foundations: capacity for increased loading (may require geotechnical input).
    - Lintels and beams: capacity for changed load distribution.
  - **Structural interventions required**: Where existing elements are inadequate, identify the structural interventions needed:
    - New steel beams or columns to support removed loadbearing walls.
    - Strengthening of existing floors (additional joists, steel flitch plates, carbon fibre reinforcement).
    - Underpinning or foundation strengthening.
    - New lintels for altered openings.
    - Roof strengthening for loft conversion loads.
    - New foundations for extensions.
  - Provide outline structural calculations or state "[DETAILED STRUCTURAL CALCULATIONS TO BE PROVIDED]" for the AI-generated draft. Note that full structural calculations would be submitted for Building Regulations approval.
- Assess the implications of the proposed works for disproportionate collapse (Building Regulations Requirement A3), particularly for buildings of five or more storeys or where key elements are removed.
- Address CDM 2015 considerations: temporary stability during construction, sequencing of works, temporary propping and shoring.

### 8. Recommendations (400-800 words)
- Present detailed recommendations, categorised as:

#### 8.1 Remedial Works (for existing defects)
- For each identified defect, provide a specific recommendation:
  - Foundation remediation: underpinning, root barrier, drainage repair, ground stabilisation.
  - Wall repairs: crack stitching, repointing, cavity wall tie replacement, damp proof course installation, render repair.
  - Floor repairs: joist replacement, supplementary support, slab repair.
  - Roof repairs: timber treatment, member replacement, tie installation, re-covering.
  - Lintel/beam replacement or strengthening.
- State the priority and indicative timescale for each remedial work.

#### 8.2 Structural Interventions (for proposed development)
- For each structural intervention needed to facilitate the development:
  - Description of the intervention (e.g., new 305x165 UB to support wall removal, new piled foundations for extension).
  - Outline specification (materials, sizes, connections -- subject to detailed design).
  - Construction methodology and sequencing (temporary support, propping, needling).
  - CDM 2015 risk considerations and designer risk assessment.
- Note that all structural interventions require detailed structural design calculations, to be prepared by a chartered structural engineer and submitted for Building Regulations approval.

#### 8.3 Further Investigation
- Recommend any further investigation required:
  - Trial pit excavation to inspect foundations.
  - Opening-up works to inspect concealed structure.
  - Specialist testing (concrete testing, steel testing, timber testing, cavity wall tie survey).
  - Ongoing monitoring (crack gauges, level surveys).
  - Geotechnical investigation (if foundation capacity is in question).
  - Asbestos survey (if asbestos-containing materials are suspected in the structure).

### 9. Conclusion (200-500 words)
- Summarise the structural condition of the building: overall assessment of structural adequacy.
- Summarise the key defects identified and their severity.
- Confirm whether the building is structurally suitable for the proposed development (with the identified interventions and remedial works).
- Summarise the key structural interventions required.
- Confirm compliance with Building Regulations Part A (or state that compliance will be demonstrated through detailed structural calculations at Building Regulations stage).
- State that the report should be read in conjunction with the architectural drawings and any geotechnical report.
- Note any outstanding items requiring further investigation.
- Confirm that the structural works must be designed and supervised by a chartered structural engineer.
- Confirm CDM 2015 compliance considerations.
- State the limitations of the assessment and the need for professional endorsement.

## Quality Standards

- Include the AI-generated disclaimer prominently in the document frontispiece and introduction, stating that the report requires review and endorsement by a chartered structural engineer.
- Reference Building Regulations 2010 Part A (Requirements A1, A2, A3) with specific requirement numbers.
- Reference relevant Eurocodes (BS EN 1990-1999) with specific standard numbers.
- Reference IStructE Appraisal of Existing Structures (2010) as the methodological framework.
- Reference CDM 2015 and designer duties.
- Describe the structural system clearly: load paths, primary elements, materials, construction methods.
- Present defects systematically with location, description, cause, severity, and recommended action.
- Categorise defects by severity: critical, significant, minor, cosmetic.
- Assess structural capacity changes resulting from proposed development.
- State loading changes with reference to BS EN 1991-1-1 categories.
- Where structural calculations are not provided, state this clearly and note that detailed calculations will be prepared for Building Regulations.
- Address disproportionate collapse for buildings of five or more storeys.
- Address CDM 2015 construction-phase risks.
- Use correct structural engineering terminology: loadbearing, non-loadbearing, shear, bending moment, deflection, bearing capacity, settlement, subsidence, heave, underpinning, propping, needling, flitch beam, universal beam, restraint, bracing, diaphragm.
- Where areas have not been inspected or foundations not exposed, clearly flag limitations.
- Professional structural engineering language throughout, technically accurate but accessible to planning officers and building control.`;

export const SSR_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, commission details, building identification, proposed works, scope, and limitations.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'State the purpose and circumstances. Provide commission details. Identify the building (address, age, use, storeys, area). Summarise proposed development. State scope and areas inspected. State engineer qualifications and inspection date.',
  },
  {
    name: 'Methodology',
    description: 'Inspection methodology, non-destructive testing, desk study, assessment codes, and limitations.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe visual inspection methodology. Describe any non-destructive testing or opening-up works. Describe desk study (drawings, previous reports, geological data). Reference IStructE Appraisal methodology. State design codes used. State limitations.',
  },
  {
    name: 'Building Description',
    description: 'Age, form, structural system, foundations, walls, floors, roof, and previous alterations.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe age and construction period. Describe building form and storeys. Describe foundation system (type, depth, material). Describe wall construction. Describe floor construction. Describe roof structure. Note previous structural alterations. Note services affecting structure.',
  },
  {
    name: 'Structural System Assessment',
    description: 'Load paths, primary and secondary structural elements, lateral stability, and modified load paths.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Describe load paths (roof to walls to foundations to ground). Identify primary and secondary structural elements. Assess lateral stability. Identify structural modifications affecting load paths. Identify elements affected by proposed works.',
  },
  {
    name: 'Condition Survey',
    description: 'Systematic condition assessment: foundations, walls, floors, roof structure, and lintels/beams.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present findings for foundations (movement, cracking, trees), walls (cracking, bulging, damp, mortar, ties), floors (deflection, timber decay), roof (decay, spread, sagging, alterations), and lintels/beams (distress, corrosion, deflection).',
    subsections: [
      {
        name: 'Foundations and Substructure',
        description: 'Foundation movement evidence, settlement, subsidence, heave, trees, and drainage.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe foundation movement evidence, cracking patterns, tree proximity, drainage condition, mining risk.',
      },
      {
        name: 'Walls',
        description: 'Cracking, bulging, dampness, mortar condition, material condition, and cavity wall ties.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe cracking (pattern, width, progression), bulging/leaning, dampness, mortar condition, material deterioration, cavity wall tie condition.',
      },
      {
        name: 'Floors and Roof Structure',
        description: 'Floor deflection, timber condition, roof member condition, spread, and sagging.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe floor condition (deflection, timber decay, bearing). Describe roof structure condition (decay, spread, sagging, bearing, alterations).',
      },
    ],
  },
  {
    name: 'Defects Identification',
    description: 'Summary of defects categorised by severity: critical, significant, minor, and cosmetic.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise all defects categorised by severity. For each defect provide location, description, probable cause, severity, and recommended action. Reference annotated plans. Note defects requiring further investigation.',
  },
  {
    name: 'Structural Capacity Assessment',
    description: 'Loading changes, capacity of existing elements, interventions required, and disproportionate collapse.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Assess loading changes from proposed development (BS EN 1991-1-1 categories). Assess capacity of existing walls, floors, foundations, lintels. Identify structural interventions required. Address disproportionate collapse (Requirement A3). Note CDM 2015 temporary stability considerations.',
  },
  {
    name: 'Recommendations',
    description: 'Remedial works for defects, structural interventions for development, and further investigation.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Recommend specific remedial works for each defect with priority. Recommend structural interventions for the development (outline specification, methodology, sequencing). Address CDM risks. Recommend further investigation (trial pits, testing, monitoring, geotechnical, asbestos). Note that detailed design requires Building Regulations submission.',
  },
  {
    name: 'Conclusion',
    description: 'Overall condition assessment, development feasibility, key interventions, compliance, and limitations.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'Summarise structural condition. Summarise key defects. Confirm development feasibility with identified interventions. Summarise key interventions. Confirm Building Regulations Part A compliance pathway. Note outstanding investigation. Confirm need for chartered structural engineer supervision and CDM compliance.',
  },
];

export const SSR_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Methodology',
    'Building Description',
    'Structural System Assessment',
    'Condition Survey',
    'Defects Identification',
    'Structural Capacity Assessment',
    'Recommendations',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const SSR_TEMPLATE = {
  assessment_type: 'Structural Survey / Report',
  short_name: 'SSR',
  version: 1,
  sections: SSR_SECTIONS,
  quality_criteria: SSR_QUALITY,
};
