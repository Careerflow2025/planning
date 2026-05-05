import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Geotechnical Assessment (GTA) -- required where development proposals
 * involve foundation design, earthworks, retaining structures, or ground
 * improvement, and the local planning authority or Building Control Body
 * requires evidence that the ground conditions have been adequately
 * investigated and that the proposed foundation design is appropriate.
 *
 * The assessment presents the results of ground investigation, characterises
 * ground conditions, provides geotechnical design parameters, recommends
 * foundation types, and assesses geotechnical risks. It follows BS EN 1997
 * (Eurocode 7) and BS 5930 methodology.
 *
 * AI Difficulty: Hard -- requires review by a chartered geotechnical engineer.
 */

export const GTA_PROMPT = `You are preparing a Geotechnical Assessment (also referred to as a Geotechnical Desk Study, Ground Investigation Report, or Geotechnical Design Report) to accompany a planning application or Building Regulations submission in England. The assessment presents the results of geotechnical investigation, characterises the ground conditions of the application site, provides geotechnical design parameters, recommends appropriate foundation types and design parameters, and assesses geotechnical risks.

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft only. It MUST be reviewed, verified, and endorsed by a chartered geotechnical engineer (CEng MICE, CEng FGS, or equivalent) before submission to the local planning authority or Building Control Body. The AI-generated content does not constitute professional geotechnical engineering advice and should not be relied upon without professional validation. All ground condition characterisations, geotechnical design parameters, foundation recommendations, slope stability analyses, and risk assessments must be verified through site-specific ground investigation data and engineering analysis by a suitably qualified professional. Incorrect foundation design can have serious structural safety consequences.

## Document Purpose

A Geotechnical Assessment must:
- Present the results of a desk study and/or ground investigation undertaken on the application site.
- Characterise the ground conditions: soil and rock types, stratigraphy, groundwater conditions, and geotechnical properties.
- Provide geotechnical design parameters for foundation and earthworks design in accordance with BS EN 1997 (Eurocode 7).
- Recommend appropriate foundation types and depths for the proposed development.
- Assess slope stability where the site involves slopes, embankments, or cuttings.
- Assess ground gas risk where relevant (brownfield sites, sites near landfills, natural ground gas sources).
- Present a Geotechnical Risk Register identifying key geotechnical risks and proposed mitigation measures.
- Demonstrate compliance with Building Regulations Part A (Structure) and the relevant geotechnical standards.

## Key Policy and Legislation References

### Building Regulations 2010 -- Part A (Structure)
- **Requirement A1**: Loading. The building shall be constructed so that the combined dead, imposed, and wind loads are sustained and transmitted to the ground safely.
- **Requirement A2**: Ground movement. The building shall be constructed so that ground movement caused by swelling, shrinkage, or freezing of the subsoil, or by landslip or subsidence, will not impair the stability of any part of the building.
- **Approved Document A**: Provides guidance on meeting Requirements A1-A2, including reference to foundation design standards.

### BS EN 1997 (Eurocode 7): Geotechnical Design
The primary geotechnical design standard in the UK:
- **BS EN 1997-1:2004+A1:2013 (Eurocode 7 Part 1)**: General rules for geotechnical design. Defines:
  - Geotechnical categories (GC1, GC2, GC3) based on complexity and risk.
  - Ultimate Limit State (ULS) and Serviceability Limit State (SLS) design approaches.
  - Design Approach 1 (DA1), the approach adopted in the UK National Annex.
  - Requirements for ground investigation, ground characterisation, and design parameters.
  - Design of spread foundations, pile foundations, retaining structures, embankments, and slopes.
- **BS EN 1997-2:2007 (Eurocode 7 Part 2)**: Ground investigation and testing. Defines standards for field and laboratory testing.
- **UK National Annex to BS EN 1997-1**: Nationally determined parameters, including the adoption of DA1 (Combination 1 and Combination 2).
- **PD 6694-1:2011+A1:2020**: Recommendations for the design of structures using BS EN 1997-1.

### BS 5930:2015+A1:2020 Code of Practice for Ground Investigation
- Provides guidance on planning, executing, and reporting ground investigation.
- Covers desk study, site reconnaissance, ground investigation techniques (boreholes, trial pits, in situ testing, sampling), laboratory testing, and reporting.
- Defines soil and rock description terminology (in accordance with BS EN ISO 14688 and BS EN ISO 14689).

### NHBC Standards
- **Chapter 4.1**: Land quality -- managing ground conditions. Requires ground investigation for new dwellings and provides guidance on foundation depth and type.
- **Chapter 4.2**: Building near trees. Provides guidance on foundation depths for buildings on shrinkable clay near trees (modified NHBC method).
- **Chapter 4.3**: Strip and trench fill foundations.
- **Chapter 4.4**: Raft, pile, and pier foundations.
- **Chapter 4.5**: Steel reinforced cement ground floors.
- **Chapter 4.6**: Vibratory ground improvement techniques.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment by (inter alia) preventing new and existing development from contributing to, being put at unacceptable risk from, or being adversely affected by, unacceptable levels of soil, air, water or noise pollution or land instability.
- **Paragraph 183**: Planning policies and decisions should ensure that a site is suitable for its proposed use taking account of ground conditions and any risks arising from land instability and contamination.
- **Paragraph 184**: Where a site is affected by contamination or land stability issues, responsibility for securing a safe development rests with the developer and/or landowner.

### CIRIA Guidance
- **CIRIA C681**: Unexploded ordnance (UXO) -- a guide for the construction industry.
- **CIRIA C665**: Assessing risks posed by hazardous ground gases to buildings.
- **CIRIA C552**: Contaminated land risk assessment -- a guide to good practice.
- **CIRIA C758**: Brownfield sites: ground-related risks for buildings.
- **CIRIA C750**: Groundwater control -- design and practice (2nd edition).

### BRE Guidance
- **BRE Digest 240/241**: Low-rise buildings on shrinkable clay soils (Parts 1 and 2).
- **BRE Digest 412**: Desiccation in clay soils.
- **BRE Report BR211 (2015)**: Radon: guidance on protective measures for new dwellings.
- **BRE Special Digest 1 (SD1)**: Concrete in aggressive ground (sulphate and acid conditions).
- **BRE Report 414**: Protective measures for housing on gas-contaminated land.

### Other Key References
- **BS 8004:2015**: Code of Practice for Foundations.
- **BS EN 14475**: Execution of special geotechnical works -- reinforced fill.
- **BS EN 1536/1538**: Execution of piling works.
- **DMRB (Design Manual for Roads and Bridges)**: For highway-related geotechnical design.
- **BGS GeoSure data**: Geological hazards mapping (shrink-swell, landslides, dissolution, running sand, compressible ground, collapsible deposits).
- **Coal Authority**: Mining reports for sites in coalfield areas.
- **British Geological Survey (BGS)**: Geological mapping, borehole records, GeoIndex.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the geotechnical assessment and the circumstances (planning application, Building Regulations, pre-purchase, or development feasibility).
- Provide commission details: client, geotechnical consultant, site address, planning application reference.
- Identify the site: address, National Grid Reference, site area.
- Summarise the proposed development: building type, number of storeys, basement (if proposed), foundation loads (if available), retaining structures, earthworks.
- State the scope of the assessment: desk study, ground investigation, geotechnical design recommendations.
- State the geotechnical category per Eurocode 7 (GC1, GC2, or GC3) and justify the categorisation.
- State the qualifications and experience of the geotechnical engineer (or flag "[TO BE REVIEWED AND ENDORSED BY CHARTERED GEOTECHNICAL ENGINEER]").
- State the dates of fieldwork (ground investigation).
- Outline the document structure.

### 2. Site Description (300-500 words)
- Describe the site:
  - Location and access.
  - Current land use and ground cover.
  - Topography: ground levels (AOD), gradient, aspect, relationship to surrounding land levels.
  - Existing buildings and structures on site (if any).
  - Adjacent land uses and structures (particularly those sensitive to ground movement).
  - Watercourses, ponds, or drainage features.
  - Vegetation: trees (species, approximate size, proximity to proposed foundations).
  - Services: known underground services on or crossing the site.
- Present a site location plan and site plan (or reference figure numbers).

### 3. Desk Study (500-1000 words)
- Present the findings of the desk-based research:
  - **Published geological mapping (BGS)**: Bedrock geology (formation, lithology, age) and superficial deposits (type, thickness). Reference the relevant BGS sheet and memoir.
  - **BGS borehole records**: Summarise nearby BGS borehole records (borehole ID, location, depth, key strata encountered).
  - **BGS GeoSure hazards**: Shrink-swell potential, landslide susceptibility, dissolution (soluble rocks), compressible ground, running sand, collapsible deposits. State the hazard rating for each.
  - **Hydrogeology**: Aquifer designation (principal, secondary A/B, unproductive). Source Protection Zones (SPZ). EA groundwater vulnerability classification.
  - **Mining**: Coal Authority report (for coalfield areas): past, present, and future mining, mine entries, mine gas, coal outcrops, former opencast workings. Non-coal mining: metalliferous mining, chalk mining, brine extraction, stone quarrying.
  - **Radon**: UK Radon Atlas and PHE radon data. Radon Affected Area status and level of basic radon protection required.
  - **Historical land use**: Review of historical mapping (tithe, 1st-4th edition OS, post-war) for evidence of previous structures, quarries, ponds, watercourses, landfill, made ground, or contamination sources.
  - **Flood risk**: EA flood mapping (fluvial, surface water, groundwater flooding susceptibility).
  - **UXO (Unexploded Ordnance)**: UXO risk assessment based on wartime bombing records (for sites in urban areas or former military land).
  - **Previous ground investigations**: Any previous investigation data for the site or nearby sites.
- Present a preliminary ground model (Conceptual Site Model) based on the desk study.

### 4. Ground Investigation (500-1000 words)
- Describe the site-specific ground investigation undertaken:
  - **Investigation design**: Rationale for the investigation (objectives, standards compliance, Eurocode 7 requirements for the geotechnical category). Reference BS 5930 and BS EN 1997-2.
  - **Investigation locations**: Number and positions of exploratory holes (boreholes, trial pits, window samples). Present on a plan. Justify the spacing and depth of investigation.
  - **Investigation techniques**:
    - Boreholes: drilling method (cable percussion, rotary, rotary/percussive), diameter, depth, sampling (SPT, undisturbed U100/U76, bulk disturbed), in situ testing (SPT at standard intervals).
    - Trial pits: excavation method (machine excavated), dimensions, logging, sampling, photographs.
    - Window samples: technique (Windowless Sampler, WS), diameter, depth, sampling.
    - In situ testing: Standard Penetration Tests (SPT), Cone Penetration Tests (CPT/CPTu), vane shear tests, pressuremeter tests, plate load tests (as applicable).
  - **Groundwater monitoring**: Installation of standpipe piezometers or vibrating wire piezometers. Monitoring duration and frequency. Water strikes during drilling.
  - **Ground gas monitoring**: Installation of gas monitoring wells. Monitoring visits (minimum 6 visits over 3 months per BS 8576). Parameters: methane, carbon dioxide, oxygen, flow rate, atmospheric pressure.
  - **Laboratory testing**: Tests undertaken on soil samples: moisture content, Atterberg limits (liquid limit, plastic limit), particle size distribution, undrained triaxial, oedometer (consolidation), direct shear, chemical suite (pH, sulphate, water-soluble sulphate, organic matter, BRE SD1 suite).
- Present the investigation methodology in tabular form.
- State any deviations from the planned investigation and the reasons.

### 5. Ground Conditions (600-1200 words)
- Present the ground conditions encountered, based on the investigation results:
  - **Stratigraphy**: Describe each stratum from ground surface to the maximum depth investigated:
    - Made ground: thickness, composition, condition (loose, compact, with debris, contaminated). Distribution across the site.
    - Topsoil: thickness.
    - Superficial deposits: type (alluvium, river terrace gravels, glacial till, head deposits, etc.), thickness, description per BS EN ISO 14688.
    - Bedrock: formation, lithology, weathering grade, description per BS EN ISO 14689. Rock Quality Designation (RQD) and fracture state (if cored).
  - **Geotechnical properties**: For each stratum, present:
    - Moisture content, Atterberg limits, and plasticity index.
    - Particle size distribution.
    - Undrained shear strength (from SPT, triaxial, vane shear): range, mean, characteristic value.
    - Effective strength parameters (from triaxial or direct shear).
    - Stiffness and compressibility (from oedometer, pressuremeter).
    - SPT N-values: profile with depth, corrected values where applicable.
  - **Groundwater conditions**:
    - Groundwater levels recorded during investigation and monitoring (date, reading, borehole).
    - Seasonal variation (inferred from monitoring period or regional data).
    - Perched water tables, artesian conditions.
    - Chemical quality (if tested).
  - **Ground gas conditions**:
    - Gas monitoring results (methane, CO2, O2, flow rate) for each visit.
    - Gas Screening Value (GSV) per CIRIA C665 or BS 8576.
    - Characteristic situation classification (CS1, CS2, CS3, CS4) per BS 8576 or CIRIA C665.
    - Gas protection measures required (if applicable).
  - **Aggressive ground conditions**: BRE SD1 assessment -- Design Sulphate Class (DS) and Aggressive Chemical Environment for Concrete (ACEC) class. Concrete specification requirements.
- Present a geological cross-section through the site (or flag "[GEOLOGICAL CROSS-SECTION TO BE PREPARED]").

### 6. Geotechnical Design Parameters (400-800 words)
- Present the characteristic and design geotechnical parameters for each stratum, following Eurocode 7 methodology:
  - **Characteristic values**: Derived from test results using a cautious estimate of the mean or other appropriate statistical method (BS EN 1997-1 Clause 2.4.5.2). State the basis for selection.
  - Present parameters in a table:
    - Bulk unit weight.
    - Undrained shear strength (cu).
    - Effective cohesion (c') and angle of shearing resistance (phi').
    - Coefficient of volume compressibility (mv) or Young's modulus (E').
    - Coefficient of consolidation (cv).
    - Bearing capacity (allowable bearing pressure for SLS design).
    - Design values for ULS (applying partial factors per DA1 Combination 1 and Combination 2).
  - **Earth pressure coefficients**: Ko (at rest), Ka (active), Kp (passive) for retaining structure design.
  - **Pile design parameters**: Where piled foundations are recommended -- shaft friction and end bearing values for each stratum.
- State the Eurocode 7 Design Approach used (DA1 with UK NA) and the partial factors applied.

### 7. Foundation Recommendations (500-1000 words)
- Recommend the appropriate foundation type and depth for the proposed development:
  - **Strip/trench fill foundations**: Where suitable for low-rise buildings. Recommended width, depth, and bearing stratum. Consider tree proximity and shrinkable clay (NHBC Chapter 4.2 modified depths).
  - **Pad foundations**: For framed buildings. Recommended size, depth, and bearing stratum.
  - **Raft foundations**: Where ground conditions are variable or where differential settlement is a concern. Type (edge beam raft, flat raft, cellular raft).
  - **Piled foundations**: Where shallow foundations are not feasible (deep made ground, soft soils, heavily loaded structures, proximity to trees on clay). Pile type recommendation (CFA, driven, mini-pile, bored), pile length, bearing stratum, estimated pile capacity, settlement assessment.
  - **Basement retaining walls**: Foundation and retaining wall design parameters (if basement proposed).
- Assess the bearing capacity of the recommended foundation bearing stratum using Eurocode 7 methods.
- Assess the estimated settlement under the proposed loading:
  - Immediate (undrained) settlement.
  - Consolidation settlement.
  - Total settlement and differential settlement.
  - Compare against serviceability limits (typically L/500 for framed structures, L/300 for masonry).
- Address specific ground conditions:
  - **Shrinkable clay**: Foundation depths for clay shrinkage, particularly in relation to trees. Apply NHBC Chapter 4.2 or equivalent methodology.
  - **Made ground**: Removal, treatment, or bridging of made ground. Avoid founding on made ground unless adequately characterised and assessed.
  - **Soft ground**: Ground improvement options (vibro-compaction, vibro-replacement, dynamic compaction, surcharging) if applicable.
- Provide a foundation layout recommendation (or note that the structural engineer will finalise based on the structural design).
- Note that the foundation design must be verified by detailed structural calculations prepared by a chartered structural engineer.

### 8. Slope Stability (if applicable) (300-700 words)
- Where the site involves existing or proposed slopes, embankments, or cuttings:
  - Describe the slope geometry: height, angle, material, drainage condition.
  - Assess the stability of existing slopes using limit equilibrium methods (Bishop, Fellenius, Morgenstern-Price, or similar). State the Factor of Safety (FoS) obtained and the target FoS (typically FoS >= 1.3 for permanent slopes per Eurocode 7).
  - Assess the stability of proposed slopes (new cuttings, embankments, regraded slopes).
  - Assess the effect of the proposed development on existing slope stability (additional loads, changes to drainage, removal of toe support).
  - Assess slope stability under worst-case conditions: elevated groundwater, seismic loading (if applicable), rapid drawdown.
  - If the slope is unstable or marginally stable, recommend stabilisation measures: re-grading, drainage, retaining walls, soil nails, ground anchors, reinforced soil.
  - Reference BGS GeoSure landslide susceptibility data.
  - Reference any previous landslide records or evidence of ground movement.
- If slope stability is not applicable, state this and explain why.

### 9. Ground Gas Assessment (300-600 words)
- Assess the ground gas risk:
  - **Sources**: Identify potential sources of ground gas (natural geology, peat, alluvium, made ground, former landfill, former industrial land, coal measures, radon).
  - **Monitoring results**: Summarise ground gas monitoring data (methane, CO2, O2, flow rate) by visit. Present maximum concentrations and flow rates.
  - **Gas Screening Value (GSV)**: Calculate GSV for methane and CO2 using borehole steady state flow rates per CIRIA C665 or BS 8576.
  - **Characteristic Situation classification**: Classify as CS1, CS2, CS3, or CS4 per BS 8576 or CIRIA C665.
  - **Gas protection measures**: Recommend appropriate protection measures based on the Characteristic Situation:
    - CS1: No protection required.
    - CS2: Basic gas membrane and ventilated void or passive ventilation.
    - CS3: Enhanced gas membrane, ventilated void, and gas alarm.
    - CS4: Full gas-proof barrier, positive ventilation, and gas monitoring.
  - **Radon**: State the radon Affected Area status. Recommend radon protection measures per BRE Report BR211 (basic radon barrier, full radon barrier, radon sump with facility for fan).
  - Reference CIRIA C665 and BS 8576 methodology.

### 10. Geotechnical Risk Register (400-700 words)
- Present a Geotechnical Risk Register identifying key geotechnical risks, their likelihood, potential consequence, and proposed mitigation. Risks to consider include:
  - **Ground conditions differing from investigation**: Unforeseen ground conditions, variable made ground, buried obstructions, unrecorded services.
  - **Foundation failure**: Bearing capacity failure, excessive settlement, differential settlement.
  - **Slope instability**: Existing or proposed slope failure.
  - **Groundwater**: High groundwater levels, flooding, groundwater ingress during construction, dewatering effects on neighbours.
  - **Ground gas**: Methane or CO2 accumulation, radon exposure.
  - **Contamination**: Unexpected contamination affecting workers or end users.
  - **Shrinkable clay**: Foundation heave or subsidence due to tree-related clay shrinkage.
  - **Mining**: Collapse of mine workings, mine gas, mine drainage.
  - **Unexploded Ordnance (UXO)**: Risk from wartime bombing (where applicable).
  - **Sulphate attack**: Degradation of concrete in aggressive ground.
  - **Construction-phase risks**: Excavation collapse, crane platform bearing capacity, temporary works failure.
- For each risk, state:
  - Risk description.
  - Likelihood (low, medium, high).
  - Consequence (low, medium, high).
  - Risk rating (product of likelihood and consequence).
  - Proposed mitigation or management measures.
  - Residual risk after mitigation.
- Present the risk register in tabular form.

### 11. Conclusion (300-600 words)
- Summarise the ground conditions: key strata, groundwater, ground gas, and aggressive ground.
- Summarise the recommended foundation type, depth, and bearing stratum.
- Summarise the estimated bearing capacity and settlement.
- Summarise the slope stability assessment (if applicable).
- Summarise the ground gas risk and recommended protection measures.
- Summarise the key geotechnical risks and proposed mitigation.
- Confirm compliance with Building Regulations Part A (Requirements A1 and A2).
- Confirm that the geotechnical assessment has been prepared in accordance with BS EN 1997 and BS 5930.
- Note any outstanding items: additional investigation required, detailed foundation design calculations, specialist testing, ongoing monitoring.
- State that the foundation design must be verified by detailed structural calculations and submitted for Building Regulations approval.
- Recommend that the geotechnical engineer is consulted during construction to verify ground conditions and foundation formation levels.
- State the limitations of the assessment and the need for professional endorsement.

## Quality Standards

- Include the AI-generated disclaimer prominently in the document frontispiece and introduction, stating that the report requires review and endorsement by a chartered geotechnical engineer.
- Reference Building Regulations 2010 Part A (Requirements A1, A2) with specific requirement numbers.
- Reference BS EN 1997-1 and BS EN 1997-2 (Eurocode 7) with specific clause numbers for design approach, characteristic values, and partial factors.
- Reference BS 5930 for ground investigation methodology.
- Reference NHBC Standards (Chapters 4.1-4.6) for residential development.
- Reference BRE SD1 for aggressive ground assessment.
- Reference CIRIA C665 or BS 8576 for ground gas assessment.
- Reference BRE BR211 for radon assessment.
- Present ground investigation data systematically: borehole/trial pit logs, in situ test results, laboratory test results.
- Present geotechnical design parameters in tabular form with clear derivation methodology.
- Present a geological cross-section through the site.
- Provide bearing capacity and settlement estimates with Eurocode 7 methodology.
- For shrinkable clay, address tree-related foundation depth requirements with NHBC methodology.
- Present a geotechnical risk register in tabular form.
- Use correct geotechnical terminology: stratum, lithology, SPT, undrained shear strength, effective stress parameters, characteristic value, design value, partial factor, bearing capacity, settlement, consolidation, permeability, aquifer, piezometer, gas screening value, characteristic situation.
- Where ground investigation data is not available, clearly flag and recommend investigation.
- Professional geotechnical engineering language throughout, technically accurate but accessible to planning officers and building control.`;

export const GTA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, commission details, site identification, proposed development, geotechnical category, and scope.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the purpose and circumstances. Provide commission details. Identify the site (address, NGR, area). Summarise proposed development (type, storeys, basement, loads). State scope. Classify geotechnical category per Eurocode 7. State qualifications and fieldwork dates.',
  },
  {
    name: 'Site Description',
    description: 'Location, current use, topography, existing structures, vegetation, services, and site plan.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe location, access, current land use, topography, existing buildings, adjacent land uses, watercourses, trees (species, size, proximity), and underground services. Reference site location plan.',
  },
  {
    name: 'Desk Study',
    description: 'Published geology, BGS records, geological hazards, hydrogeology, mining, radon, historical land use, flood risk, and UXO.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present BGS geology and borehole records. Present GeoSure hazards. Describe hydrogeology and SPZs. Present mining assessment. Present radon data. Review historical mapping. Present flood risk data. Assess UXO risk. Present preliminary ground model.',
  },
  {
    name: 'Ground Investigation',
    description: 'Investigation design, techniques, locations, sampling, in situ testing, groundwater and gas monitoring, and laboratory testing.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe investigation design (objectives, standards, Eurocode 7 requirements). Describe locations and techniques (boreholes, trial pits, window samples). Describe in situ testing (SPT, CPT). Describe groundwater and gas monitoring installations. Describe laboratory testing programme. Note deviations.',
  },
  {
    name: 'Ground Conditions',
    description: 'Stratigraphy, geotechnical properties, groundwater, ground gas, and aggressive ground assessment.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Describe each stratum (made ground, superficial, bedrock) with properties. Present geotechnical parameters (moisture content, Atterberg limits, strength, stiffness, SPT). Present groundwater levels and variation. Present ground gas monitoring results and classification. Present BRE SD1 aggressive ground assessment. Present geological cross-section.',
  },
  {
    name: 'Geotechnical Design Parameters',
    description: 'Characteristic and design parameters per Eurocode 7: strength, stiffness, bearing capacity, earth pressures.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Present characteristic values derived from test data. Present design parameters in tabular form (unit weight, cu, c\', phi\', E\', mv, cv, bearing capacity). Present earth pressure coefficients. Present pile design parameters if applicable. State Eurocode 7 design approach and partial factors.',
  },
  {
    name: 'Foundation Recommendations',
    description: 'Recommended foundation type, depth, bearing stratum, capacity, settlement, and tree/clay considerations.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Recommend foundation type (strip, pad, raft, piled, basement). Specify depth and bearing stratum. Assess bearing capacity (Eurocode 7). Estimate settlement (immediate and consolidation). Address shrinkable clay and tree proximity (NHBC 4.2). Address made ground treatment. Note detailed design requirement.',
  },
  {
    name: 'Slope Stability',
    description: 'Slope geometry, stability analysis, factors of safety, and stabilisation recommendations.',
    required: false,
    min_words: 300,
    max_words: 700,
    guidance:
      'Describe slope geometry. Analyse stability using limit equilibrium methods (state method and FoS). Assess effect of development on stability. Assess worst-case conditions. Recommend stabilisation if required. Reference BGS landslide data. State if not applicable.',
  },
  {
    name: 'Ground Gas Assessment',
    description: 'Gas sources, monitoring results, Gas Screening Values, Characteristic Situation, and protection measures.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Identify gas sources. Summarise monitoring data (methane, CO2, O2, flow rate). Calculate GSV. Classify Characteristic Situation (CS1-CS4). Recommend gas protection measures. Assess radon risk and recommend protection per BRE BR211. Reference CIRIA C665/BS 8576.',
  },
  {
    name: 'Geotechnical Risk Register',
    description: 'Tabular risk register: ground conditions, foundations, slopes, groundwater, gas, contamination, mining, and construction risks.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Present risk register in tabular form. For each risk: description, likelihood, consequence, risk rating, mitigation, residual risk. Address unforeseen ground conditions, foundation failure, slope instability, groundwater, gas, contamination, clay shrinkage, mining, UXO, sulphate attack, and construction-phase risks.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of ground conditions, foundation recommendation, risks, compliance, and outstanding items.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise ground conditions. Summarise foundation recommendation, bearing capacity, and settlement. Summarise slope stability (if applicable). Summarise gas risk and protection. Summarise key risks. Confirm Building Regulations Part A and Eurocode 7 compliance. Note outstanding items and detailed design requirement. Recommend geotechnical supervision during construction.',
  },
];

export const GTA_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Site Description',
    'Desk Study',
    'Ground Investigation',
    'Ground Conditions',
    'Geotechnical Design Parameters',
    'Foundation Recommendations',
    'Ground Gas Assessment',
    'Geotechnical Risk Register',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const GTA_TEMPLATE = {
  assessment_type: 'Geotechnical Assessment',
  short_name: 'GTA',
  version: 1,
  sections: GTA_SECTIONS,
  quality_criteria: GTA_QUALITY,
};
