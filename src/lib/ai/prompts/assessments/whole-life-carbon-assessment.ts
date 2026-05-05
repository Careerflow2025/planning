import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Whole Life Carbon Assessment (WLCA) -- increasingly required for major
 * developments, particularly in London (London Plan Policy SI 2) and by
 * local planning authorities with sustainability-focused policies.
 *
 * The WLCA calculates embodied and operational carbon emissions across
 * all lifecycle stages (Modules A-D) using the RICS Whole Life Carbon
 * Assessment methodology and BS EN 15978 framework, comparing results
 * against recognised benchmarks.
 */

export const WLCA_PROMPT = `You are preparing a Whole Life Carbon Assessment (WLCA) to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A Whole Life Carbon Assessment is required to demonstrate that:
1. The whole life carbon emissions of the proposed development have been calculated across all lifecycle stages (Modules A to D) in accordance with recognised methodology.
2. The development has been designed to minimise embodied carbon and operational carbon emissions.
3. The whole life carbon performance has been compared against appropriate benchmarks and targets.
4. A carbon reduction strategy has been developed identifying opportunities to further reduce whole life carbon emissions through design, material selection, construction, operation, and end-of-life considerations.
5. The assessment supports the transition to a net zero carbon built environment.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 157**: The planning system should support the transition to a low carbon future in a changing climate, taking full account of flood risk and coastal change. It should help to shape places in ways that contribute to radical reductions in greenhouse gas emissions.
- **Paragraph 158**: Plans should take a proactive approach to mitigating and adapting to climate change, taking into account the long-term implications for flood risk, coastal change, water supply, biodiversity and landscapes, and the risk of overheating from rising temperatures.
- **Paragraph 159**: New development should be planned for in ways that avoid increased vulnerability to the range of impacts arising from climate change and can help to reduce greenhouse gas emissions.

### London Plan (2021) -- for developments in London
- **Policy SI 2 (Minimising greenhouse gas emissions)**: Requires major developments to calculate and minimise whole life-cycle carbon emissions through a Whole Life Carbon Assessment. The policy requires developments to demonstrate actions taken to reduce lifecycle carbon emissions.
- **Policy SI 2(F)**: Development proposals referable to the Mayor should calculate whole life-cycle carbon emissions through a nationally recognised Whole Life-Cycle Carbon Assessment and demonstrate actions taken to reduce lifecycle carbon emissions.
- **Policy D3**: Requires consideration of embodied energy and lifecycle costs in design quality.

### GLA Whole Life-Cycle Carbon Assessments Guidance (2022, updated 2024)
- Provides the methodology for WLCAs submitted to the GLA.
- Specifies the GLA benchmarks for embodied carbon (Module A1-A5):
  - Residential: less than 850 kgCO2e/m2 (GIA) aspirational target; less than 500 kgCO2e/m2 (GIA) GLA benchmark.
  - Office: less than 950 kgCO2e/m2 (GIA) aspirational target; less than 600 kgCO2e/m2 (GIA) GLA benchmark.
- Specifies reporting requirements for Modules A1-A5, B1-B7, C1-C4, and Module D.
- Requires post-construction reporting to verify embodied carbon performance.

### RICS Whole Life Carbon Assessment for the Built Environment (2nd Edition, 2023)
- Establishes the professional standard for WLCAs.
- Defines the system boundary, lifecycle modules, building elements to include, data quality requirements, and reporting format.
- Aligns with BS EN 15978 and BS EN 15804.
- Requires assessment of substructure, superstructure, finishes, fixed furniture, fittings and equipment, and building services (MEP).

### BS EN 15978:2011 -- Sustainability of construction works
- Assessment of environmental performance of buildings -- Calculation method.
- Defines the modular framework: Modules A1-A3 (product stage), A4-A5 (construction process stage), B1-B7 (use stage), C1-C4 (end of life stage), D (benefits and loads beyond the system boundary).

### BS EN 15804:2012+A2:2019 -- Sustainability of construction works
- Environmental product declarations (EPDs) -- Core rules for the product category of construction products.
- Provides the basis for product-level carbon data used in WLCAs.

### LETI Embodied Carbon Primer (2020)
- Provides embodied carbon targets for different building types.
- Residential target: less than 500 kgCO2e/m2 (upfront embodied carbon, Modules A1-A5).
- Office target: less than 600 kgCO2e/m2 (upfront embodied carbon, Modules A1-A5).
- 2030 targets: less than 350 kgCO2e/m2 for residential.

### RIBA 2030 Climate Challenge
- Sets targets for embodied carbon and operational energy by building type and year.
- 2025 targets: less than 800 kgCO2e/m2 residential, less than 900 kgCO2e/m2 commercial.
- 2030 targets: less than 625 kgCO2e/m2 residential, less than 750 kgCO2e/m2 commercial.

### Other References
- UK Net Zero Carbon Buildings Standard (emerging).
- Institution of Structural Engineers (IStructE) guidance on embodied carbon.
- CIBSE TM65: Embodied carbon in building services.
- Concrete and steel industry EPDs and decarbonisation roadmaps.

## Section-by-Section Guidance

### 1. Introduction (200-500 words)
- State the purpose of the Whole Life Carbon Assessment and the policy basis for its preparation.
- Identify the application site by address and local planning authority.
- Summarise the proposed development: building type(s), gross internal area (GIA in m2), number of storeys, primary structural system.
- State which policies require or encourage a WLCA (London Plan SI 2 for London, or relevant local plan policies).
- Note the assessment stage (planning stage / RIBA Stage 2 or 3).
- Confirm the methodology used (RICS 2nd Edition and/or GLA Guidance).
- State any limitations (e.g., early design stage, use of benchmark data where specific product data is not yet available).
- Outline the document structure.

### 2. Policy Framework (300-600 words)
- Set out the national planning policy context: NPPF paragraphs 157-159 on climate change mitigation.
- For London developments: detail London Plan Policy SI 2, Policy SI 2(F), and Policy D3 requirements.
- For non-London developments: reference relevant local plan policies on embodied carbon, sustainability, or climate change.
- Reference the GLA Whole Life-Cycle Carbon Assessments Guidance (2022/2024) if applicable.
- Reference the RICS Whole Life Carbon Assessment methodology (2nd Edition).
- Reference LETI targets, RIBA 2030 Climate Challenge targets, or other relevant benchmarks.
- Explain the policy rationale: whole life carbon assessment is essential to understanding the full climate impact of development and driving design improvements.

### 3. Methodology (400-700 words)
- State the assessment methodology: RICS Whole Life Carbon Assessment for the Built Environment (2nd Edition, 2023).
- Confirm the reference standard: BS EN 15978:2011.
- Define the system boundary: which lifecycle modules are included (A1-A5, B1-B7, C1-C4, D).
- Define the building elements assessed: substructure, superstructure (frame, upper floors, roof, stairs, external walls, windows, internal walls), finishes, fixed furniture/fittings/equipment, building services (MEP).
- State the reference study period: typically 60 years for residential buildings, or as required by the assessment methodology.
- Describe the data sources: Environmental Product Declarations (EPDs), RICS database, ICE Database, Inventory of Carbon and Energy, one-click LCA or other assessment tools.
- State the data quality approach: product-specific EPDs preferred, generic data from recognised databases where specific data is not available.
- State the gross internal area (GIA in m2) used as the functional unit for benchmarking.
- State the carbon factor for grid electricity (current and projected decarbonisation trajectory).
- Identify the assessment tool used (e.g., One Click LCA, eTool, Hbert, or manual calculation).

### 4. Baseline and Benchmarks (300-500 words)
- State the relevant benchmarks against which the development will be compared:
  - GLA benchmarks (for London): Module A1-A5 benchmarks by building type.
  - LETI targets: upfront embodied carbon targets by building type.
  - RIBA 2030 Climate Challenge targets.
  - Any local plan or planning policy targets.
- Present the benchmarks in kgCO2e/m2 (GIA) for each lifecycle module.
- Establish a baseline scenario: what would a conventional or code-compliant design achieve?
- Note the aspirational targets the design team is aiming to achieve.
- Explain how the benchmarks will be used to evaluate the development's performance.

### 5. Module A -- Product and Construction Stage (500-1000 words)
#### 5.1 Module A1-A3: Product Stage (Cradle to Gate)
- Present the embodied carbon of materials by building element:
  - Substructure (foundations, basement, ground floor slab).
  - Superstructure frame (concrete frame, steel frame, timber frame, hybrid).
  - Upper floors, roof structure.
  - External walls (masonry, curtain wall, cladding, insulation).
  - Internal walls and partitions.
  - Windows and external doors.
  - Finishes (floor, wall, ceiling).
  - Building services (MEP).
- Present results in kgCO2e and kgCO2e/m2 (GIA) for each element.
- Identify the largest contributors to embodied carbon (typically concrete, steel, aluminium).
- Compare against the GLA or LETI A1-A3 benchmarks.

#### 5.2 Module A4: Transport to Site
- Estimate transport emissions based on material quantities, transport distances, and vehicle types.
- State assumptions for transport distances (local, national, international sourcing).

#### 5.3 Module A5: Construction Process
- Estimate construction site emissions: site energy use, temporary works, material wastage.
- State assumptions for construction wastage rates (reference WRAP benchmarks).
- Include site welfare, plant fuel, and temporary works.

### 6. Module B -- In-Use Stage (400-800 words)
#### 6.1 Module B1-B3: Use, Maintenance, and Repair
- Estimate replacement cycles for building components over the reference study period.
- Include planned maintenance and repair activities.
- State assumptions for component lifespans (reference BCIS or manufacturer data).

#### 6.2 Module B4-B5: Replacement and Refurbishment
- Estimate the carbon impact of component replacements over the reference study period.
- Major elements: roof covering, windows, building services (boilers, heat pumps, lifts), internal finishes.
- State the number of replacement cycles for each component.

#### 6.3 Module B6: Operational Energy Use
- Present the predicted operational energy consumption (from the Energy Assessment or SAP/SBEM calculations).
- Convert operational energy to carbon emissions using grid carbon factors.
- Apply grid decarbonisation projections over the reference study period.
- Present results in kgCO2e/m2/year and total kgCO2e over the reference study period.

#### 6.4 Module B7: Operational Water Use
- Estimate operational water consumption and associated carbon emissions.
- State the water consumption rate assumed (litres per person per day).
- Apply carbon factors for water supply and treatment.

### 7. Module C -- End of Life Stage (300-500 words)
#### 7.1 Module C1: Deconstruction/Demolition
- Estimate the carbon emissions associated with demolition or deconstruction of the building at end of life.
- State assumptions for demolition methods and energy consumption.

#### 7.2 Module C2: Transport
- Estimate transport emissions for waste materials from site to processing or disposal.

#### 7.3 Module C3: Waste Processing
- Estimate emissions from waste processing (sorting, crushing, recycling).
- State assumed recycling/recovery rates for key materials.

#### 7.4 Module C4: Disposal
- Estimate emissions from final disposal of materials (landfill).
- State assumed disposal rates and landfill gas capture assumptions.

### 8. Module D -- Beyond the Lifecycle (200-400 words)
- Estimate the potential benefits or loads beyond the system boundary.
- Include credits for material recycling and energy recovery.
- Present Module D results separately from Modules A-C (as per BS EN 15978 requirements).
- State the recycled content assumptions and end-of-life recycling rates for key materials (steel, concrete, aluminium, timber).
- Note that Module D is reported separately and is not included in the whole life carbon total.

### 9. Carbon Reduction Strategy (500-800 words)
- Identify specific design decisions and measures that reduce whole life carbon:
  - **Structural efficiency**: optimised structural design, reduced material quantities, lean design.
  - **Material selection**: low-carbon concrete (GGBS, PFA replacement), responsibly sourced timber, recycled steel, bio-based insulation.
  - **Design for longevity**: durable materials, adaptable design, design for disassembly.
  - **Construction efficiency**: off-site manufacture (MMC), reduced wastage, efficient logistics.
  - **Operational efficiency**: high-performance fabric, renewable energy, heat pumps, LED lighting.
  - **End of life**: design for deconstruction, material passports, circular economy principles.
- Quantify the carbon savings from key measures where possible (kgCO2e or percentage reduction).
- Present a comparison: baseline design vs. proposed design.
- Set out commitments for post-construction monitoring and reporting (as required by GLA guidance).
- Identify further opportunities for carbon reduction in later design stages.

### 10. Conclusion (200-400 words)
- Summarise the whole life carbon results by module:
  - Module A1-A5 (upfront embodied carbon): total kgCO2e and kgCO2e/m2 (GIA).
  - Module B (in-use carbon): total kgCO2e and kgCO2e/m2 (GIA).
  - Module C (end of life carbon): total kgCO2e and kgCO2e/m2 (GIA).
  - Module D (beyond lifecycle): reported separately.
  - Whole life carbon (A-C): total kgCO2e and kgCO2e/m2 (GIA).
- Compare results against the relevant benchmarks (GLA, LETI, RIBA 2030).
- Confirm whether the development meets the required or aspirational targets.
- Summarise the key carbon reduction measures adopted.
- Confirm compliance with London Plan Policy SI 2 (for London) or relevant local plan policies.
- Set out any commitments for post-construction reporting.
- Note any areas where further design development could reduce whole life carbon.

## Quality Standards

- Reference specific NPPF paragraphs (157, 158, 159) by number.
- For London developments, reference London Plan Policy SI 2 and GLA WLC Guidance (2022/2024).
- Reference the RICS Whole Life Carbon Assessment methodology (2nd Edition, 2023).
- Reference BS EN 15978 and BS EN 15804 correctly.
- Present carbon data in kgCO2e and kgCO2e/m2 (GIA) consistently.
- Clearly separate Module D from the A-C total.
- Compare results against at least two recognised benchmarks (GLA, LETI, RIBA 2030).
- Use correct lifecycle module terminology (A1-A3, A4-A5, B1-B7, C1-C4, D).
- Where specific product data is not available, state this and note the use of generic data from recognised databases.
- Include a clear summary table of whole life carbon results by module and building element.`;

export const WLCA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site details, development summary, methodology, and document structure.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'State the WLCA purpose and policy basis. Identify the site. Summarise the development including GIA and building type. Confirm the methodology (RICS 2nd Edition). State assessment stage and any limitations.',
  },
  {
    name: 'Policy Framework',
    description: 'National, regional, and local planning policy context for whole life carbon.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF paragraphs 157-159. For London, detail London Plan Policy SI 2 and GLA guidance. Reference RICS methodology, LETI targets, and RIBA 2030 Climate Challenge. Set out relevant local plan policies.',
  },
  {
    name: 'Methodology',
    description: 'Assessment methodology, system boundary, data sources, and functional unit.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'Confirm RICS methodology and BS EN 15978. Define system boundary and lifecycle modules included. List building elements assessed. State reference study period, data sources, data quality approach, GIA, and assessment tool.',
  },
  {
    name: 'Baseline and Benchmarks',
    description: 'Relevant benchmarks and baseline scenario for comparison.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'State GLA, LETI, and RIBA 2030 benchmarks in kgCO2e/m2 (GIA) by module. Establish a baseline scenario. Note aspirational targets.',
  },
  {
    name: 'Module A -- Product and Construction Stage',
    description: 'Embodied carbon of materials (A1-A3), transport (A4), and construction (A5).',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present embodied carbon by building element for Modules A1-A3. Identify largest contributors. Estimate transport emissions (A4) and construction process emissions (A5). Compare against benchmarks.',
    subsections: [
      {
        name: 'Module A1-A3: Product Stage',
        description: 'Cradle-to-gate embodied carbon of materials by building element.',
        required: true,
        min_words: 300,
        max_words: 600,
        guidance: 'Present embodied carbon for substructure, superstructure, finishes, MEP. Results in kgCO2e and kgCO2e/m2.',
      },
      {
        name: 'Module A4-A5: Transport and Construction',
        description: 'Transport to site and construction process emissions.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Estimate transport and construction emissions. State assumptions for distances, wastage rates, and site energy.',
      },
    ],
  },
  {
    name: 'Module B -- In-Use Stage',
    description: 'Maintenance, replacement, operational energy, and operational water carbon.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Estimate replacement cycles and maintenance carbon (B1-B5). Present operational energy carbon (B6) using grid decarbonisation projections. Estimate operational water carbon (B7).',
    subsections: [
      {
        name: 'Module B1-B5: Maintenance and Replacement',
        description: 'Carbon from maintenance, repair, and component replacement over the study period.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'State component lifespans and replacement cycles. Estimate carbon from replacements.',
      },
      {
        name: 'Module B6-B7: Operational Energy and Water',
        description: 'Carbon from operational energy consumption and water use.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Present operational energy consumption and carbon using grid decarbonisation. Estimate water use carbon.',
      },
    ],
  },
  {
    name: 'Module C -- End of Life Stage',
    description: 'Deconstruction, transport, waste processing, and disposal carbon.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Estimate carbon for demolition/deconstruction (C1), transport (C2), waste processing (C3), and disposal (C4). State assumed recycling and recovery rates.',
  },
  {
    name: 'Module D -- Beyond the Lifecycle',
    description: 'Potential benefits from recycling and energy recovery beyond the system boundary.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Estimate credits for material recycling and energy recovery. Present Module D separately from A-C total. State recycled content and end-of-life recycling assumptions.',
  },
  {
    name: 'Carbon Reduction Strategy',
    description: 'Design measures to reduce whole life carbon with quantified savings.',
    required: true,
    min_words: 500,
    max_words: 800,
    guidance:
      'Identify specific carbon reduction measures: structural efficiency, material selection, design for longevity, construction efficiency, operational efficiency, end-of-life design. Quantify savings. Compare baseline vs. proposed design. Set out post-construction monitoring commitments.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of results by module, benchmark comparison, and compliance confirmation.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise whole life carbon results by module in kgCO2e and kgCO2e/m2. Compare against benchmarks. Confirm whether targets are met. Summarise key reduction measures. Confirm policy compliance.',
  },
];

export const WLCA_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Methodology',
    'Baseline and Benchmarks',
    'Module A -- Product and Construction Stage',
    'Module B -- In-Use Stage',
    'Module C -- End of Life Stage',
    'Module D -- Beyond the Lifecycle',
    'Carbon Reduction Strategy',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const WLCA_TEMPLATE = {
  assessment_type: 'Whole Life Carbon Assessment',
  short_name: 'WLCA',
  version: 1,
  sections: WLCA_SECTIONS,
  quality_criteria: WLCA_QUALITY,
};
