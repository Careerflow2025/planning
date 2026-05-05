import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Land Contamination Phase 1 Desk Study -- required where there is reason
 * to suspect that contamination may be present on or near the application
 * site, or where the proposed use is particularly sensitive (e.g., residential,
 * schools, allotments).
 *
 * The Phase 1 Desk Study provides a qualitative assessment of the potential
 * for land contamination based on desk-based research, a site walkover, and
 * the development of a Conceptual Site Model (CSM). It follows the
 * methodology set out in BS 10175:2011+A2:2017 and the Environment Agency's
 * Land Contamination Risk Management (LCRM) framework.
 */

export const LC1_PROMPT = `You are preparing a Phase 1 Land Contamination Desk Study (also referred to as a Preliminary Risk Assessment) to accompany a planning application submitted to a local planning authority in England. The Phase 1 Desk Study assesses the potential for land contamination to be present on or affecting the application site, based on desk-based research and a site reconnaissance, and provides a preliminary risk assessment to determine whether further intrusive investigation is required.

## Document Purpose

The Phase 1 Desk Study must:
- Establish the environmental setting of the site: geology, hydrogeology, hydrology, and sensitivity of the surrounding environment.
- Investigate the historical land use of the site and surrounding area to identify potential sources of contamination.
- Review regulatory databases to identify known contamination, pollution incidents, waste sites, and environmental permits.
- Develop a Conceptual Site Model (CSM) that identifies potential contaminant sources, pathways, and receptors (the source-pathway-receptor linkages).
- Provide a preliminary qualitative risk assessment based on the CSM.
- Recommend whether further investigation (Phase 2 site investigation) is required, and if so, provide a scope of works.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 183**: Planning policies and decisions should ensure that a site is suitable for its proposed use taking account of ground conditions and any risks arising from land instability and contamination. This includes risks arising from natural hazards or former activities such as mining, and any proposals for mitigation including land remediation (as well as potential impacts on the natural environment arising from that remediation).
- **Paragraph 184**: Where a site is affected by contamination or land stability issues, responsibility for securing a safe development rests with the developer and/or landowner. At least an adequate site investigation and assessment should be prepared by a competent person.
- **Paragraph 185**: Planning decisions should ensure that new development is appropriate for its location taking into account the likely effects (including cumulative effects) of pollution on health, living conditions, and the natural environment.

### Land Contamination Risk Management (LCRM) -- Environment Agency (2020, updated 2023)
The LCRM guidance (which replaced CLR11 Model Procedures for the Management of Land Contamination) sets out a three-stage risk management framework:
1. **Stage 1: Risk Assessment**
   - Preliminary Risk Assessment (PRA) / Phase 1 Desk Study: Desk-based review and development of the Conceptual Site Model.
   - Generic Quantitative Risk Assessment (GQRA): Comparison of site investigation data against Generic Assessment Criteria.
   - Detailed Quantitative Risk Assessment (DQRA): Site-specific risk assessment using detailed modelling.
2. **Stage 2: Options Appraisal**: Evaluation of remediation options.
3. **Stage 3: Remediation and Verification**: Implementation and verification of remediation.

### BS 10175:2011+A2:2017 Investigation of Potentially Contaminated Sites -- Code of Practice
- Provides the methodology for desk studies, site reconnaissance, and investigation design.
- Key requirements for Phase 1 Desk Studies:
  - Review of published geological, hydrogeological, and environmental data.
  - Review of historical maps and other historical records.
  - Review of regulatory information and environmental data.
  - Site reconnaissance (walkover survey).
  - Development of a Conceptual Site Model.
  - Preliminary risk assessment.
  - Recommendations for further work.

### Other Key References
- **Part 2A of the Environmental Protection Act 1990**: The contaminated land regime. Defines "contaminated land" as land that appears to be in such a condition, by reason of substances in, on, or under it, that significant harm is being caused or there is a significant possibility of significant harm, or significant pollution of controlled waters is being caused or is likely.
- **DEFRA Statutory Guidance on Part 2A (2012)**: Guidance on the operation of the contaminated land regime.
- **BS 5930:2015+A1:2020**: Code of practice for ground investigations.
- **CIRIA C665 (2007)**: Assessing risks posed by hazardous ground gases to buildings.
- **NHBC/Environment Agency/CIEH guidance R&D66 (2008)**: Guidance for the safe development of housing on land affected by contamination.
- **CL:AIRE Definition of Waste: Development Industry Code of Practice (2011)**: For sustainable management of contaminated soils.
- **Environment Agency Groundwater Protection Position Statements**: Source Protection Zone constraints.
- **DEFRA Category 4 Screening Levels (C4SLs)**: Generic screening criteria for certain contaminants.
- **LQM/CIEH Suitable 4 Use Levels (S4ULs)**: Generic Assessment Criteria for soil.
- **Water Supply (Water Quality) Regulations 2016**: Drinking water standards (relevant for controlled waters assessment).
- **Environmental Permitting Regulations 2016**: For waste management and remediation activities.
- **Envirocheck / Groundsure / Landmark reports**: Commercial environmental database searches.

## Section-by-Section Guidance

### 1. Introduction (300-500 words)
- State the purpose of the Phase 1 Desk Study and the policy context (NPPF Paragraphs 183-184).
- Identify the site: postal address, National Grid Reference (NGR), site area.
- Describe the proposed development and proposed end use (residential, commercial, mixed-use, school, etc.) -- this determines the sensitivity of the receptors and the applicable assessment criteria.
- State the objectives of the assessment:
  - Determine the environmental setting of the site.
  - Investigate the history of the site and surrounding area.
  - Identify potential sources, pathways, and receptors for contamination.
  - Develop a Conceptual Site Model.
  - Provide a preliminary risk assessment.
  - Recommend further investigation if required.
- State the qualifications of the author and the competent person requirement (NPPF Paragraph 184). Note "[PREPARED BY A SUITABLY QUALIFIED CONTAMINATED LAND PROFESSIONAL]" for AI-generated drafts.
- Outline the document structure.

### 2. Methodology (300-500 words)
- Describe the methodology in accordance with BS 10175 and the LCRM framework.
- List the data sources reviewed:
  - **Environmental database report**: Envirocheck / Groundsure / Landmark report (specify provider and report date, or "[ENVIRONMENTAL DATA REPORT TO BE OBTAINED]").
  - **British Geological Survey (BGS)**: Geological mapping, borehole records.
  - **Historical Ordnance Survey maps**: List editions reviewed (specify provider: Envirocheck historical maps, Landmark Promap, NLS, etc.).
  - **Environment Agency data**: Flood maps, groundwater vulnerability, Source Protection Zones, pollution incidents, waste sites, environmental permits, abstraction licences.
  - **Local authority records**: Contaminated land register, Environmental Health records (if obtained).
  - **Aerial photographs**: Google Earth / Historic England Archive (specify dates).
  - **Published sources**: Geological memoirs, soil surveys, mining records.
- Describe the site reconnaissance methodology (or note "[SITE RECONNAISSANCE TO BE UNDERTAKEN]").
- Describe the risk assessment framework: source-pathway-receptor linkage model, qualitative risk classification.
- State any limitations (e.g., environmental data not yet obtained, site not yet visited, data gaps).

### 3. Site Description (400-700 words)
- **Current site condition**: Describe the site as observed during the site reconnaissance (or from aerial photography if not yet visited):
  - Current land use and activities.
  - Buildings and structures present: type, condition, age.
  - Ground surface: hardstanding, vegetation, bare soil, made ground.
  - Evidence of contamination: staining, odours, discolouration, fly-tipping, waste materials, drums, tanks.
  - Evidence of underground storage tanks (USTs): fill points, vent pipes, dispensers.
  - Evidence of asbestos-containing materials (ACMs): roofing, cladding, insulation.
  - Services: overhead cables, underground utilities, drains, manholes.
- **Surrounding land uses**: Describe surrounding land within approximately 250m:
  - North, east, south, west (compass directions).
  - Identify any potentially contaminative land uses: petrol stations, industrial works, landfills, garages, dry cleaners, railways, etc.
  - Identify sensitive land uses: residential, schools, hospitals, allotments, watercourses, nature reserves.

### 4. Environmental Setting (500-800 words)
#### 4.1 Geology
- **Made ground**: Known or suspected made ground (from BGS, borehole records, or site history).
- **Superficial (drift) deposits**: Type, thickness, characteristics (e.g., alluvium, river terrace deposits, glacial till, sand and gravel).
- **Bedrock geology**: Formation name, lithology, age, characteristics (e.g., mudstone, sandstone, chalk, limestone).
- Reference BGS 1:50,000 geological mapping and relevant BGS borehole logs within the study area.
- Assess the geological implications for contaminant migration:
  - Permeable strata may allow contaminant transport.
  - Clay-rich deposits may act as low-permeability barriers.
  - Made ground may contain anthropogenic contaminants.

#### 4.2 Hydrogeology
- **Aquifer classification** (from EA data):
  - Bedrock: Principal Aquifer, Secondary A, Secondary B, Secondary Undifferentiated, or Unproductive Strata.
  - Superficial: Principal Aquifer, Secondary A, Secondary B, Secondary Undifferentiated, or Unproductive Strata.
- **Groundwater vulnerability**: High, Medium, or Low (from EA groundwater vulnerability mapping).
- **Source Protection Zones (SPZ)**: Is the site within an SPZ (Inner Zone 1, Outer Zone 2, Total Catchment Zone 3)? Implications for groundwater protection.
- **Groundwater abstractions**: Any licensed abstractions within 1km (from EA data / environmental database report).
- **Groundwater levels**: Estimated or known depth to groundwater (from BGS borehole records or nearby investigations).
- **Groundwater flow direction**: Estimated from topography and geology.

#### 4.3 Hydrology
- **Surface water features**: Rivers, streams, canals, ponds, lakes within 500m. Distance and direction from the site.
- **Surface water quality**: Classification (from EA Catchment Data Explorer).
- **Flood risk**: Flood Zone (from EA Flood Map for Planning). Surface water flood risk.

#### 4.4 Sensitive Environmental Receptors
- Identify designated ecological sites within 1km: SSSIs, SACs, SPAs, Ramsar sites, Local Nature Reserves, Ancient Woodland.
- Identify any designated heritage assets that could be affected by contamination or remediation.
- Radon Affected Area designation (from UKHSA / BGS data): percentage of dwellings above the Action Level.

### 5. Historical Land Use (600-1200 words)
Present a chronological review of the site and surrounding area based on historical maps and other records. This section is focused on identifying potentially contaminative uses.

For each map edition reviewed, describe:
- The use of the site: agricultural, residential, industrial, commercial, undeveloped, etc.
- Any buildings present: type, form, potential contaminative use.
- Potentially contaminative features: factories, gasworks, railways, sewage works, landfill, mining, quarrying, tanneries, brickworks, metalworks, petrol stations, chemical works, laundries/dry cleaners.
- Changes between map editions.

Typical map editions to review:
- Pre-development (typically 1840s-1870s county series or tithe maps).
- First Edition Ordnance Survey (typically 1870s-1890s at 1:2,500 or 6-inch).
- Second Edition Ordnance Survey (typically 1890s-1910s).
- Inter-war editions (1920s-1930s).
- Post-war editions (1940s-1960s).
- Modern mapping (1970s-present).

Summarise the site history and identify all potentially contaminative uses, noting:
- Dates of operation.
- Type of activity and likely contaminants associated with it (e.g., gasworks = PAHs, heavy metals, cyanide; petrol station = TPH, BTEX; engineering works = heavy metals, oils, solvents).
- Whether the use was on the site or on adjacent/nearby land.

Reference specific map editions by date and scale.

### 6. Regulatory Database Review (400-700 words)
Summarise the findings of the environmental database report (Envirocheck / Groundsure / Landmark), or note "[ENVIRONMENTAL DATABASE REPORT TO BE OBTAINED]" and describe what will be reviewed:

- **Contaminated land register entries**: Any Part 2A determined contaminated land within 500m.
- **Historical land use data**: Potentially contaminative industrial land uses identified from historical mapping databases.
- **Waste sites**: Licensed waste management facilities, historical landfill sites, waste transfer stations within 500m-1km.
- **Pollution incidents**: EA recorded pollution incidents to controlled waters within 500m.
- **Environmental permits**: Current and historical environmental permits (waste, industrial emissions, discharge consents) within 500m.
- **Hazardous substance consents / COMAH sites**: Within 1km.
- **Radon**: Radon Affected Area designation (from UKHSA / BGS data). Percentage of dwellings above the Action Level.
- **Mining**: Coal Authority data (for coalfield areas): past, present, and future coal mining, mine entries, coal outcrops, reported shallow mining. Non-coal mining records.
- **Unexploded ordnance (UXO)**: Bomb risk assessment (from Zetica or equivalent).
- **Japanese Knotweed / invasive species**: Any records within the environmental database search.

For each identified issue, assess the relevance to the site and the proposed development.

### 7. Conceptual Site Model (500-1000 words)
Develop the Conceptual Site Model (CSM), which is the central element of the Phase 1 Desk Study. The CSM identifies:

#### 7.1 Potential Contaminant Sources
List all potential sources of contamination identified from the site history, site reconnaissance, and database review:
- On-site sources (e.g., former industrial use, underground storage tanks, made ground, asbestos).
- Off-site sources (e.g., adjacent landfill, nearby industrial works, contaminated groundwater plume migration).
- Natural sources (e.g., naturally elevated arsenic, radon).

For each source, identify the likely contaminants of concern:
- Heavy metals (lead, arsenic, cadmium, chromium, mercury, nickel, zinc).
- Polycyclic aromatic hydrocarbons (PAHs).
- Total petroleum hydrocarbons (TPH) and BTEX (benzene, toluene, ethylbenzene, xylenes).
- Volatile organic compounds (VOCs) and semi-volatile organic compounds (SVOCs).
- Asbestos fibres and asbestos-containing materials.
- Ground gases: methane, carbon dioxide, hydrogen sulphide, carbon monoxide, VOC vapours.
- Solvents: chlorinated solvents (TCE, PCE, DCM).
- Pesticides and herbicides (for agricultural sites).
- Inorganic compounds: cyanide, sulphate, pH.

#### 7.2 Potential Pathways
Identify the pathways by which contaminants could reach receptors:
- **Human health pathways**: Direct soil ingestion, dermal contact, inhalation of dust, inhalation of vapours and ground gases, consumption of homegrown produce.
- **Controlled waters pathways**: Leaching from soil to groundwater, migration through permeable strata, surface water run-off, preferential pathways (e.g., service trenches, permeable made ground).
- **Building/infrastructure pathways**: Ground gas migration into buildings, chemical attack on building materials (concrete, water pipes).
- **Ecological pathways**: Contaminant uptake by plants, soil fauna exposure.

#### 7.3 Potential Receptors
Identify the receptors relevant to the proposed end use:
- **Human health**: Future site users (residents, workers, visitors, children playing), construction workers, neighbours.
- **Controlled waters**: Groundwater in underlying aquifers, nearby surface water bodies.
- **Property**: Buildings (risk from ground gases and aggressive ground conditions), services (water supply pipes, drainage).
- **Ecological**: Protected habitats, trees, vegetation.

#### 7.4 Source-Pathway-Receptor Linkages
Present the CSM as a table or diagram showing:
- Each potential contaminant linkage (source -> pathway -> receptor).
- Whether each linkage is potentially complete, partially complete, or absent.
- A qualitative risk rating for each linkage: very low, low, moderate, moderate/high, high.

### 8. Preliminary Risk Assessment (400-700 words)
Based on the CSM, provide a qualitative risk assessment:

- For each identified source-pathway-receptor linkage, assess the risk as:
  - **Very low risk**: No linkage or linkage is clearly incomplete. No further investigation required for this linkage.
  - **Low risk**: Linkage is possible but unlikely. Further investigation may not be required, but keep under review.
  - **Moderate risk**: Linkage is plausible and further investigation is required to quantify the risk.
  - **Moderate/High risk**: Linkage is likely and further investigation and probable remediation are required.
  - **High risk**: Linkage is almost certainly present and significant. Urgent further investigation and likely remediation required.

- Present the risk assessment in a summary table.
- Provide a narrative assessment discussing:
  - The key risks identified and their basis.
  - The confidence level in the assessment (high, moderate, low) based on data availability.
  - Any data gaps that reduce confidence.
  - Whether the risks are primarily to human health, controlled waters, or both.

### 9. Conclusion and Recommendations (400-700 words)
- Summarise the site history and the potential for contamination.
- Summarise the environmental setting and the sensitivity of the receiving environment.
- Summarise the key findings of the Conceptual Site Model.
- Summarise the preliminary risk assessment conclusions.
- Provide clear recommendations:
  - If all risks are very low/low: No further investigation is required. The site is considered suitable for the proposed use without remediation (subject to any unexpected contamination being reported during construction).
  - If moderate or higher risks are identified: A Phase 2 site investigation (intrusive investigation) is recommended. Provide a preliminary scope:
    - Number and type of investigation points (trial pits, boreholes, window samples).
    - Depths of investigation.
    - Soil sampling strategy and contaminants to be tested.
    - Groundwater monitoring (installation of monitoring wells, groundwater sampling).
    - Ground gas monitoring (installation of standpipes, minimum 6 rounds of monitoring over 3 months per CIRIA C665 / BS 8576).
    - Asbestos screening of soils.
    - Geotechnical testing (if combined with contamination investigation).
    - Laboratory analysis suite (appropriate to the identified contaminants of concern).
  - Note any requirement for remediation or a Remediation Strategy to be submitted as part of the planning process.
- Confirm compliance with NPPF Paragraphs 183-184.
- Confirm that the assessment has been prepared in accordance with BS 10175 and the LCRM framework.

## Quality Standards

- Reference NPPF Paragraphs 183-184 by specific number.
- Reference BS 10175:2011+A2:2017 and the LCRM framework by name.
- Reference Part 2A of the Environmental Protection Act 1990 where relevant.
- Develop a Conceptual Site Model with explicit source-pathway-receptor linkages.
- Use a structured risk classification framework (very low to high).
- Present the CSM and risk assessment in tabular format.
- Reference specific geological formations and aquifer designations from BGS/EA data.
- Reference specific historical map editions by date and scale.
- Identify specific contaminants of concern associated with identified potential sources.
- Where environmental database data has not been obtained, clearly flag and recommend it be commissioned.
- Where a site visit has not been conducted, clearly flag and recommend it be undertaken.
- Professional contaminated land consultancy language; use correct technical terminology (CSM, S-P-R linkages, GAC, GQRA, DQRA, LCRM).
- Clearly distinguish between the Phase 1 desk study (qualitative) and the Phase 2 investigation (quantitative).`;

export const LC1_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, proposed use, objectives, and competent person.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State the purpose and NPPF Paragraphs 183-184 requirement. Identify the site (address, NGR, area). Describe the proposed development and end use. State assessment objectives. Note the competent person requirement.',
  },
  {
    name: 'Methodology',
    description: 'BS 10175 and LCRM methodology, data sources, and limitations.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe the methodology per BS 10175 and LCRM. List data sources: environmental database, BGS, historical maps, EA data, local authority, aerial photos. Describe risk assessment framework. State limitations.',
  },
  {
    name: 'Site Description',
    description: 'Current site condition from reconnaissance and surrounding land uses.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Describe current use, buildings, ground surface, evidence of contamination (staining, tanks, asbestos). Describe surrounding land uses (compass directions) identifying contaminative and sensitive uses.',
  },
  {
    name: 'Environmental Setting',
    description: 'Geology, hydrogeology, hydrology, and sensitive environmental receptors.',
    required: true,
    min_words: 500,
    max_words: 800,
    guidance:
      'Describe made ground, superficial, and bedrock geology. Classify aquifers and groundwater vulnerability. Identify SPZs and abstractions. Describe surface water features and quality. Identify ecological designations. Note radon status.',
    subsections: [
      {
        name: 'Geology',
        description: 'Made ground, superficial deposits, and bedrock from BGS data.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe made ground, drift, and bedrock. Reference BGS mapping and borehole logs. Assess implications for contaminant migration.',
      },
      {
        name: 'Hydrogeology',
        description: 'Aquifer classification, groundwater vulnerability, SPZs, and abstractions.',
        required: true,
        min_words: 150,
        max_words: 250,
        guidance: 'Classify bedrock and superficial aquifers. State groundwater vulnerability. Identify SPZs and licenced abstractions. Estimate groundwater levels and flow direction.',
      },
      {
        name: 'Hydrology and Sensitive Receptors',
        description: 'Surface water features, flood risk, ecological designations, and radon.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Identify surface water within 500m. State water quality classification. Identify ecological designations within 1km. Note radon Affected Area status.',
      },
    ],
  },
  {
    name: 'Historical Land Use',
    description: 'Map regression identifying historical land uses and potential contamination sources.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Review historical maps chronologically from pre-development to present. For each edition: describe site use, buildings, potentially contaminative features. Identify all potentially contaminative uses with dates, activity type, and likely contaminants. Reference specific map dates and scales.',
  },
  {
    name: 'Regulatory Database Review',
    description: 'Environmental database findings: contaminated land, waste sites, permits, radon, mining, UXO.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise environmental database findings: Part 2A entries, historical industrial uses, landfills, pollution incidents, permits, COMAH, radon, mining, UXO, invasive species. Assess relevance of each issue. Flag if database not yet obtained.',
  },
  {
    name: 'Conceptual Site Model',
    description: 'Contaminant sources, pathways, receptors, and source-pathway-receptor linkages.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'List potential sources with associated contaminants. Identify pathways (human health, controlled waters, property, ecological). Identify receptors. Present S-P-R linkages in tabular form with qualitative risk rating.',
    subsections: [
      {
        name: 'Potential Contaminant Sources',
        description: 'On-site, off-site, and natural sources with associated contaminants.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'List all potential sources. For each, identify likely contaminants of concern (metals, PAHs, TPH, VOCs, asbestos, ground gases, etc.).',
      },
      {
        name: 'Pathways and Receptors',
        description: 'Migration pathways and sensitive receptors for the proposed end use.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Identify human health, controlled waters, property, and ecological pathways and receptors relevant to the proposed end use.',
      },
      {
        name: 'Source-Pathway-Receptor Linkages',
        description: 'Tabulated linkages with completeness and qualitative risk rating.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Present each linkage with completeness assessment (complete, potentially complete, absent) and risk rating (very low to high).',
      },
    ],
  },
  {
    name: 'Preliminary Risk Assessment',
    description: 'Qualitative risk assessment, summary table, confidence level, and data gaps.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Assess risk for each S-P-R linkage (very low to high). Present summary table. Discuss key risks and their basis. State confidence level. Identify data gaps. Discuss ground gas, asbestos, and UXO risk where relevant.',
  },
  {
    name: 'Conclusion and Recommendations',
    description: 'Summary of findings, risk conclusions, and Phase 2 investigation scope if required.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Summarise site history, environmental setting, CSM, and risk assessment. Recommend no further action or Phase 2 investigation (specify scope: trial pits, boreholes, soil/water/gas sampling, lab analysis suite). Confirm NPPF and BS 10175/LCRM compliance.',
  },
];

export const LC1_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Methodology',
    'Site Description',
    'Environmental Setting',
    'Historical Land Use',
    'Regulatory Database Review',
    'Conceptual Site Model',
    'Preliminary Risk Assessment',
    'Conclusion and Recommendations',
  ],
  max_quality_score: 100,
};

export const LC1_TEMPLATE = {
  assessment_type: 'Land Contamination Phase 1 Desk Study',
  short_name: 'LC1',
  version: 1,
  sections: LC1_SECTIONS,
  quality_criteria: LC1_QUALITY,
};
