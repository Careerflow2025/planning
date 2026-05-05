import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Drainage Strategy / SuDS Assessment -- required for major developments
 * (10+ dwellings or 1,000+ sqm) and recommended for smaller schemes where
 * flood risk or drainage capacity is a concern.
 *
 * This document sets out the surface water and foul water drainage strategy
 * for the development, demonstrating compliance with NPPF, Building
 * Regulations Part H, CIRIA C753 SuDS Manual, and Defra non-statutory
 * technical standards. The output should read as though prepared by a
 * chartered civil or drainage engineer experienced in SuDS design.
 */

export const DRAINAGE_STRATEGY_PROMPT = `You are preparing a Drainage Strategy (also known as a SuDS Assessment or Surface Water Management Strategy) to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

The Drainage Strategy must:
- Set out the existing drainage conditions on the site and the surrounding area.
- Propose a sustainable surface water drainage strategy using the SuDS hierarchy.
- Demonstrate that surface water run-off from the development will be managed on site and restricted to greenfield run-off rates (or an agreed betterment for brownfield sites).
- Demonstrate that the development can manage the 1 in 100 year storm event plus an appropriate climate change allowance without flooding to buildings.
- Propose a foul water drainage strategy with evidence of capacity or planned connections.
- Set out the long-term maintenance and management arrangements for all drainage infrastructure.
- Demonstrate compliance with NPPF, CIRIA C753, Defra non-statutory technical standards, Building Regulations Approved Document H, and relevant local policies.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 167**: When determining applications, LPAs should ensure that flood risk is not increased elsewhere. Where appropriate, applications should be supported by a site-specific flood risk assessment.
- **Paragraph 168**: Major developments should incorporate sustainable drainage systems unless there is clear evidence that this would be inappropriate. The systems used should:
  a) take account of advice from the lead local flood authority;
  b) have appropriate proposed minimum operational standards;
  c) have maintenance arrangements in place to ensure an acceptable standard of operation for the lifetime of the development; and
  d) where possible, provide multifunctional benefits.
- **Paragraph 169**: All developments should use opportunities to reduce the overall level of flood risk in the area and beyond through the layout and form of the development, and the appropriate application of sustainable drainage systems.

### CIRIA C753 -- The SuDS Manual (2015)
- The principal technical guidance for the design, construction, and maintenance of SuDS in the UK.
- **Four pillars of SuDS design**: Water quantity, water quality, amenity, and biodiversity.
- **SuDS management train**: Source control, site control, regional control.
- **Interception storage**: The first 5mm of rainfall should be managed at source through infiltration, evapotranspiration, or rainwater harvesting.
- **Attenuation storage**: Sufficient storage to attenuate flows to the agreed discharge rate for all events up to the 1 in 100 year + climate change event.
- **Exceedance flows**: Design for events exceeding the drainage system capacity, ensuring safe conveyance without risk to people or property.
- **Treatment stages**: The number of treatment stages required depends on the pollution hazard level of the contributing area (roof, road, parking, industrial).
- **Long-term storage**: Where infiltration is not feasible, long-term storage for the 1 in 100 year event may be required.

### Defra Non-Statutory Technical Standards for SuDS (March 2015)
- **Standard S1**: Surface water run-off destined for the drainage system should be managed as close to its source as possible.
- **Standard S2**: For greenfield sites, the peak run-off rate should not exceed the existing greenfield rate for the corresponding rainfall event.
- **Standard S3**: For previously developed (brownfield) sites, the peak run-off rate should as far as reasonably practicable be the greenfield rate. Where this is not achievable, a minimum 50% betterment on the existing rate should be provided.
- **Standard S4**: Where reasonably practicable, for greenfield developments, the run-off volume should not exceed the greenfield volume for the same event.
- **Standard S5**: Where a drainage system discharges to a surface water body, the system should be designed to prevent negative impacts.
- **Standard S6**: Drainage systems should be designed to ensure no flooding from the system in rainfall events up to the 1 in 30 year event, and to ensure flooding does not occur to any property in events up to the 1 in 100 year + climate change event.
- **Standard S7**: Exceedance flows should be managed by appropriate flood routing.

### Building Regulations Approved Document H (2015)
- **Part H3**: Sets out the hierarchy for surface water disposal:
  1. Infiltration to the ground (soakaways, permeable paving, swales).
  2. Discharge to a watercourse.
  3. Discharge to a surface water sewer.
  4. Discharge to a combined sewer (as a last resort).
- **Part H1**: Foul water drainage design standards, including minimum pipe sizes and gradients.

### Other Key References
- BS 8582:2013 -- Code of practice for surface water management for development sites.
- CIRIA C768 -- Guidance on the construction of SuDS.
- CIRIA C790 -- Guidance on flood-resistant construction.
- Environment Agency climate change allowances for peak rainfall intensity.
- Lead Local Flood Authority (LLFA) local SuDS guidance and adoption requirements.
- Water company (sewerage undertaker) connection and capacity requirements.
- Sewers for Adoption 8th Edition / Design and Construction Guidance (DCG) for adoptable sewers.
- Local plan policies on sustainable drainage and flood risk.

## Section-by-Section Guidance

### 1. Introduction (200-500 words)
- State the purpose of the Drainage Strategy and the policy basis (NPPF Paragraphs 167-169).
- Identify the application site by full postal address, grid reference, and site area.
- Summarise the proposed development: use, scale, number of units or floor area, total site area, and proposed impermeable area.
- State the flood zone classification from the EA Flood Map for Planning.
- State whether the site is greenfield or previously developed (brownfield) and the implications for discharge rate requirements.
- Note any consultation with the Lead Local Flood Authority (LLFA), Environment Agency, or sewerage undertaker.
- Outline the document structure.

### 2. Policy and Standards Framework (400-800 words)
- Set out NPPF Paragraphs 167-169 with summaries.
- Summarise the CIRIA C753 SuDS Manual design philosophy and four pillars.
- Set out the Defra non-statutory technical standards (S1-S7).
- Set out the Building Regulations Part H hierarchy for surface water disposal.
- Identify the relevant LLFA guidance and local plan drainage policies.
- Reference the EA climate change allowances for peak rainfall intensity applicable to the site's river basin district.
- Note the Sewers for Adoption / DCG requirements for adoptable drainage.
- Reference any relevant SPDs or supplementary guidance on drainage.

### 3. Existing Drainage and Site Conditions (500-1000 words)
#### 3.1 Site Topography and Levels
- Describe the site topography, existing ground levels (AOD), and natural fall direction.
- Reference the topographic survey.

#### 3.2 Geology and Ground Conditions
- Describe the underlying geology: bedrock and superficial deposits (reference BGS mapping).
- Describe the soil type and its implications for infiltration (reference Soil Survey data or site-specific infiltration testing).
- If infiltration testing has been carried out, state the results (infiltration rate in m/s and the BRE365 soakaway design methodology).
- If testing has not been carried out, note "[SITE-SPECIFIC INFILTRATION TESTING REQUIRED]" and recommend BRE365 testing.

#### 3.3 Groundwater
- Describe the groundwater conditions: depth to groundwater, seasonal variations.
- Reference EA groundwater vulnerability mapping.
- Note any Source Protection Zones (SPZs) and their implications for infiltration.

#### 3.4 Existing Surface Water Drainage
- Describe the existing surface water drainage arrangements on and adjacent to the site.
- Identify any existing sewers, watercourses, ditches, or overland flow paths.
- Reference Thames Water / relevant water company asset maps.
- Calculate the existing impermeable area and estimated existing run-off rates.

#### 3.5 Existing Foul Water Drainage
- Describe the existing foul water drainage arrangements.
- Identify available foul sewer connections and their capacity.
- Reference pre-development enquiry results from the sewerage undertaker (or flag as required).

#### 3.6 Greenfield Run-Off Rates
- Calculate the greenfield run-off rates for the site using the IH124 or FEH methodology (or appropriate alternative).
- State the greenfield QBAR and the rates for the 1 in 1, 1 in 30, and 1 in 100 year events.
- For brownfield sites, also calculate the existing brownfield run-off rate for comparison.

### 4. Surface Water Drainage Strategy (1000-3000 words)
This is the core section of the Drainage Strategy.

#### 4.1 Design Philosophy and SuDS Hierarchy
- Set out the design philosophy following CIRIA C753: manage water close to source, provide multifunctional benefits (water quantity, water quality, amenity, biodiversity).
- Apply the SuDS hierarchy in order of preference:
  1. **Rainwater harvesting and reuse** (water butts, rainwater harvesting tanks).
  2. **Infiltration** (soakaways, permeable paving, infiltration trenches, rain gardens).
  3. **Attenuation and controlled discharge** (attenuation tanks, ponds, basins, swales with restricted outfall).
  4. **Discharge to watercourse** (with attenuation and water quality treatment).
  5. **Discharge to surface water sewer** (with attenuation, as a last resort before combined sewer).
- Justify the selected approach and explain why higher-priority options are or are not feasible.

#### 4.2 Proposed SuDS Components
Describe each proposed SuDS component in detail:
- **Source control**: Permeable paving, green roofs, rain gardens, water butts, tree pits.
- **Conveyance**: Swales, filter drains, channels.
- **Storage**: Attenuation tanks (geocellular or concrete), attenuation basins, ponds, underground storage.
- **Treatment**: Filter strips, bioretention areas, proprietary treatment devices (where necessary).
- For each component, state:
  - Location within the site layout.
  - Approximate dimensions and storage volume.
  - Design parameters (permeability, void ratio, infiltration rate).
  - How the component contributes to the four pillars (water quantity, quality, amenity, biodiversity).

#### 4.3 Design Parameters and Calculations
- State the design rainfall parameters used (FSR/FEH rainfall data, storm duration, return periods).
- State the climate change allowance applied to peak rainfall intensity (EA guidance: typically +40% for the upper end allowance for 2070-2115 epoch, or as specified by the LLFA).
- State the agreed discharge rate:
  - For greenfield sites: restrict to greenfield QBAR (or 2 l/s minimum where QBAR is very low).
  - For brownfield sites: restrict to greenfield rate, or minimum 50% betterment on existing rate.
- Present the attenuation storage calculations:
  - Method used (Modified Rational Method, Micro Drainage / Causeway Flow, or equivalent).
  - Storage volume required for the 1 in 100 year + climate change event.
  - Storage volume provided by the proposed SuDS features.
  - Confirm that sufficient attenuation is provided.
- Demonstrate compliance with Defra Standards S2/S3 (peak run-off rate) and S6 (no flooding up to 1 in 30 year, no property flooding up to 1 in 100 year + CC).

#### 4.4 Interception Storage
- Demonstrate that the first 5mm of rainfall is managed at source through infiltration, evapotranspiration, or harvesting (CIRIA C753 interception requirement).
- If full interception cannot be achieved, explain why and describe the mitigation measures.

#### 4.5 Exceedance and Overland Flow Routing
- Describe the exceedance flow routes for events exceeding the design capacity of the drainage system.
- Demonstrate that exceedance flows are safely conveyed away from buildings without risk to people or property.
- Reference Defra Standard S7.
- Show exceedance routes on a plan where possible (or flag as "[EXCEEDANCE ROUTE PLAN TO BE PROVIDED]").

#### 4.6 Water Quality Treatment
- Assess the pollution hazard level of each contributing area (roof, driveway, road, parking, commercial).
- Determine the required number of treatment stages (per CIRIA C753 Simple Index Approach or equivalent).
- Describe the proposed treatment train and demonstrate it provides adequate treatment.
- For developments near sensitive receptors (watercourses, groundwater SPZs), describe additional treatment provisions.

### 5. Foul Water Drainage Strategy (300-600 words)
- Describe the proposed foul water drainage strategy.
- Identify the point of connection to the public foul sewer network (reference water company asset maps).
- State the estimated foul water flows from the development (using standard flow rates per dwelling or per fixture unit).
- If connecting to a public sewer, reference any capacity confirmation from the sewerage undertaker or note "[PRE-DEVELOPMENT ENQUIRY REQUIRED WITH [WATER COMPANY]]".
- If a public sewer connection is not available, describe the alternative: package treatment plant or septic tank (with Environmental Permit requirements).
- Describe any on-site pumping requirements and the implications for adoption.
- Confirm compliance with Building Regulations Part H1.

### 6. Flood Risk Mitigation (300-600 words)
- Summarise how the drainage strategy contributes to flood risk mitigation.
- Confirm that the development does not increase flood risk elsewhere (Defra Standards S2/S3).
- Describe finished floor levels in relation to flood levels (where relevant).
- Describe how the development layout avoids areas at risk of surface water flooding (reference EA surface water flood risk mapping).
- Describe any compensatory flood storage provisions (where the site is in Flood Zone 2 or 3).
- Cross-reference the Flood Risk Assessment where submitted.

### 7. Maintenance and Management Plan (400-800 words)
- Set out the long-term maintenance requirements for each SuDS component.
- Present a maintenance schedule: frequency of inspections, routine maintenance tasks, and specialist maintenance requirements.
- Structure as a table where possible:
  | SuDS Feature | Routine Maintenance | Frequency | Specialist Maintenance | Frequency |
- Identify the responsible party for maintenance:
  - **Adopted by water company**: Features designed to adoptable standards (Sewers for Adoption 8th Edition / DCG).
  - **Adopted by highway authority**: Highway drainage features.
  - **Private management company**: Features maintained through a management company funded by service charge.
  - **Individual householders**: Features within private curtilages (e.g., permeable driveways, water butts).
- Describe the funding mechanism for long-term maintenance (service charge, commuted sum, etc.).
- Reference NPPF Paragraph 168(c) requirement for maintenance arrangements for the lifetime of the development.
- Reference the LLFA's requirements for maintenance plans.
- Include provision for access by the maintaining body to all SuDS features.

### 8. Conclusion (300-500 words)
- Summarise the surface water drainage strategy: SuDS components, design standard, discharge rate, and attenuation volume.
- Summarise the foul water drainage strategy: connection point and capacity.
- Confirm compliance with:
  - NPPF Paragraphs 167-169.
  - CIRIA C753 SuDS Manual (four pillars).
  - Defra non-statutory technical standards (S1-S7).
  - Building Regulations Part H hierarchy.
  - EA climate change allowances.
  - Relevant local plan drainage policies and LLFA guidance.
- Confirm that the development will not increase flood risk elsewhere.
- Confirm that appropriate maintenance arrangements are in place for the lifetime of the development.
- List any conditions or further information required (detailed design, infiltration testing, water company confirmation).

## Quality Standards

- Reference specific NPPF paragraphs (167-169) by number.
- Reference CIRIA C753 by name and explain the four pillars of SuDS design.
- Reference specific Defra non-statutory technical standards (S1-S7) by number.
- Reference Building Regulations Part H hierarchy.
- Apply the SuDS hierarchy and justify the selected approach.
- State specific design parameters: discharge rates (l/s), storage volumes (m3), climate change allowances (%).
- Use correct technical terminology throughout: QBAR, AEP, SuDS, LLFA, FEH, IH124, BRE365, AOD.
- Where detailed calculations have not been provided, state the methodology to be used and flag as "[DETAILED CALCULATIONS TO BE PROVIDED AT DETAILED DESIGN STAGE]".
- Where infiltration testing has not been provided, flag as "[BRE365 INFILTRATION TESTING REQUIRED]".
- Professional drainage engineering language -- no marketing or promotional language.`;

export const DRAINAGE_STRATEGY_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, development summary, and document scope.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'State the Drainage Strategy purpose and NPPF Paragraphs 167-169 requirement. Identify the site by address, grid reference, and area. Summarise the proposal including impermeable area. State the flood zone. State greenfield/brownfield status. Note LLFA/EA/water company consultations. Outline the document structure.',
  },
  {
    name: 'Policy and Standards Framework',
    description: 'National policy, SuDS guidance, Defra standards, Building Regulations, and local policy.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out NPPF Paragraphs 167-169. Summarise CIRIA C753 design philosophy and four pillars. Set out Defra Standards S1-S7. Set out Building Regs Part H hierarchy. Reference LLFA guidance and local plan policies. State applicable EA climate change allowances. Reference Sewers for Adoption / DCG.',
  },
  {
    name: 'Existing Drainage and Site Conditions',
    description: 'Topography, geology, groundwater, existing drainage, and greenfield run-off rates.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe topography and levels. Describe geology and soil type from BGS mapping. Describe infiltration potential and testing results (or flag as required). Describe groundwater conditions and SPZs. Describe existing surface and foul drainage. Calculate existing impermeable area and greenfield run-off rates (QBAR, 1:1, 1:30, 1:100).',
    subsections: [
      {
        name: 'Site Topography and Levels',
        description: 'Ground levels, natural fall, and topographic survey reference.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Describe topography, existing ground levels (AOD), and natural fall direction.',
      },
      {
        name: 'Geology and Ground Conditions',
        description: 'Bedrock, superficial deposits, soil type, and infiltration potential.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe geology from BGS mapping. State soil type and infiltration testing results (BRE365) or flag as required.',
      },
      {
        name: 'Groundwater',
        description: 'Groundwater depth, vulnerability, and Source Protection Zones.',
        required: true,
        min_words: 75,
        max_words: 150,
        guidance: 'Describe groundwater conditions. Reference EA vulnerability mapping and SPZs.',
      },
      {
        name: 'Existing Surface Water Drainage',
        description: 'Current surface water drainage, sewers, watercourses, and impermeable area.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Describe existing drainage routes. Reference water company asset maps. Calculate existing impermeable area.',
      },
      {
        name: 'Existing Foul Water Drainage',
        description: 'Current foul drainage connections and capacity.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Describe existing foul drainage. Reference pre-development enquiry or flag as required.',
      },
      {
        name: 'Greenfield Run-Off Rates',
        description: 'Calculated greenfield QBAR and design event rates.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Calculate greenfield rates using IH124/FEH. State QBAR and rates for 1:1, 1:30, 1:100 events.',
      },
    ],
  },
  {
    name: 'Surface Water Drainage Strategy',
    description: 'SuDS hierarchy application, proposed components, design calculations, and water quality treatment.',
    required: true,
    min_words: 1000,
    max_words: 3000,
    guidance:
      'Apply the SuDS hierarchy and justify approach. Describe each SuDS component with location, dimensions, volumes, and contribution to four pillars. Present design parameters: rainfall data, climate change allowance, discharge rate, attenuation volume. Demonstrate compliance with Defra S2/S3 and S6. Address interception storage (5mm). Describe exceedance flow routes (Defra S7). Assess water quality treatment stages per CIRIA C753 Simple Index Approach.',
    subsections: [
      {
        name: 'Design Philosophy and SuDS Hierarchy',
        description: 'Design approach and justification for selected SuDS hierarchy level.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Set out CIRIA C753 design philosophy. Apply the SuDS hierarchy. Justify the selected approach.',
      },
      {
        name: 'Proposed SuDS Components',
        description: 'Detailed description of each SuDS feature with design parameters.',
        required: true,
        min_words: 200,
        max_words: 600,
        guidance: 'Describe each SuDS component: location, dimensions, volume, design parameters. Note contribution to four pillars.',
      },
      {
        name: 'Design Parameters and Calculations',
        description: 'Rainfall data, climate change, discharge rates, and attenuation storage.',
        required: true,
        min_words: 200,
        max_words: 600,
        guidance: 'State rainfall parameters, climate change allowance, agreed discharge rate, and attenuation storage calculations. Demonstrate compliance with Defra S2/S3 and S6.',
      },
      {
        name: 'Interception Storage',
        description: 'Management of the first 5mm of rainfall at source.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Demonstrate interception of first 5mm through infiltration, evapotranspiration, or harvesting.',
      },
      {
        name: 'Exceedance and Overland Flow Routing',
        description: 'Safe management of flows exceeding system capacity.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe exceedance routes for events beyond design capacity. Demonstrate safety per Defra S7.',
      },
      {
        name: 'Water Quality Treatment',
        description: 'Pollution hazard assessment and treatment train design.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Assess pollution hazard levels. Determine required treatment stages. Describe the treatment train per CIRIA C753.',
      },
    ],
  },
  {
    name: 'Foul Water Drainage Strategy',
    description: 'Foul water connection, flows, capacity, and compliance.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe foul drainage strategy and connection point. State estimated foul flows. Reference sewerage undertaker capacity confirmation or flag as required. Describe alternatives if public sewer unavailable. Note pumping requirements. Confirm Building Regs Part H1 compliance.',
  },
  {
    name: 'Flood Risk Mitigation',
    description: 'How the drainage strategy contributes to managing flood risk on and off site.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Confirm no increase in flood risk elsewhere. Describe FFLs in relation to flood levels. Describe layout response to surface water flood risk mapping. Describe compensatory storage if in Flood Zone 2/3. Cross-reference the FRA.',
  },
  {
    name: 'Maintenance and Management Plan',
    description: 'Long-term maintenance schedule, responsibilities, and funding.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out maintenance requirements for each SuDS feature in tabular format. Identify responsible parties: water company adoption, highway authority, management company, householders. Describe funding mechanism. Reference NPPF Paragraph 168(c) lifetime maintenance requirement. Reference LLFA maintenance requirements.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of strategy and confirmation of policy compliance.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Summarise surface and foul water strategies. Confirm compliance with NPPF 167-169, CIRIA C753, Defra S1-S7, Building Regs Part H, EA climate change allowances, and local policies. Confirm no increase in flood risk. Confirm maintenance arrangements. List conditions or further information needed.',
  },
];

export const DRAINAGE_STRATEGY_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Policy and Standards Framework',
    'Existing Drainage and Site Conditions',
    'Surface Water Drainage Strategy',
    'Foul Water Drainage Strategy',
    'Flood Risk Mitigation',
    'Maintenance and Management Plan',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const DRAINAGE_STRATEGY_TEMPLATE = {
  assessment_type: 'Drainage Strategy',
  short_name: 'DS',
  version: 1,
  sections: DRAINAGE_STRATEGY_SECTIONS,
  quality_criteria: DRAINAGE_STRATEGY_QUALITY,
};
