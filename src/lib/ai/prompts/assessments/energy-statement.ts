import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Energy Statement / Energy Strategy -- required for major developments and
 * increasingly for all new-build applications, particularly in London and
 * other local authorities with adopted energy/sustainability policies.
 *
 * The Energy Statement demonstrates how the proposed development minimises
 * carbon emissions and energy demand through the energy hierarchy (Be Lean,
 * Be Clean, Be Green) and achieves compliance with national and local
 * energy and carbon reduction targets.
 */

export const ES_PROMPT = `You are preparing an Energy Statement (also referred to as an Energy Strategy) to accompany a planning application submitted to a local planning authority in England. The Energy Statement demonstrates how the proposed development addresses energy efficiency, carbon reduction, and renewable energy provision in accordance with national and local planning policy.

## Document Purpose

The Energy Statement must:
- Demonstrate how the development follows the energy hierarchy: Be Lean (reduce energy demand through fabric efficiency and passive design), Be Clean (supply energy efficiently), and Be Green (use renewable energy sources).
- Quantify the predicted energy demand and carbon dioxide emissions of the proposed development.
- Demonstrate compliance with Building Regulations Part L (Conservation of Fuel and Power) and any local plan requirements that go beyond Part L.
- Set out the renewable and low-carbon energy strategy for the development.
- Address overheating risk in accordance with current guidance.
- Where applicable (London), demonstrate compliance with London Plan Policy SI 2 (Minimising greenhouse gas emissions) and the GLA Energy Assessment Guidance.

## Key Policy and Legislation References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 152**: The planning system should support the transition to a low carbon future in a changing climate, taking full account of flood risk and coastal change. It should help to shape places in ways that contribute to radical reductions in greenhouse gas emissions, minimise vulnerability and improve resilience, encourage the reuse of existing resources, and support renewable and low carbon energy and associated infrastructure.
- **Paragraph 153**: Plans should take a proactive approach to mitigating and adapting to climate change, taking into account the long-term implications for flood risk, coastal change, water supply, biodiversity and landscapes, and the risk of overheating from rising temperatures.
- **Paragraph 154**: New development should be planned for in ways that avoid increased vulnerability to the range of impacts arising from climate change and can help to reduce greenhouse gas emissions, such as through its location, orientation and design.
- **Paragraph 155**: To help increase the use and supply of renewable and low carbon energy and heat, plans should provide a positive strategy for energy from these sources that maximises the potential for suitable development.
- **Paragraph 156**: Local planning authorities should consider identifying suitable areas for renewable and low carbon energy sources.
- **Paragraph 157**: Community-led initiatives for renewable and low carbon energy should be supported.
- **Paragraph 158**: When determining planning applications for renewable and low carbon development, LPAs should not require applicants to demonstrate the overall need for renewable or low carbon energy, and should approve the application if its impacts are (or can be made) acceptable.

### Building Regulations
- **Approved Document Part L (2021)**: Conservation of Fuel and Power. Sets minimum standards for fabric performance (U-values, air tightness), system efficiency, and overall carbon emissions (Target Emission Rate and Target Primary Energy Rate).
- **Approved Document Part O (2022)**: Overheating. Sets requirements for limiting unwanted solar gains and providing adequate means of removing excess heat in new residential buildings.
- **Approved Document Part S (2022)**: Infrastructure for the charging of electric vehicles.
- **Future Homes Standard (expected 2025)**: Will require new homes to produce 75-80% fewer carbon emissions than Part L 2013 standards. Energy strategies should be future-proofed against this forthcoming standard.

### London Plan (where applicable)
- **Policy SI 2**: Minimising greenhouse gas emissions. Major development should be net zero-carbon, following the energy hierarchy (Be Lean, Be Clean, Be Green). A minimum on-site reduction of at least 35% beyond Part L 2013 is required, with residential development achieving at least 10% through energy efficiency measures alone (Be Lean). Any shortfall must be met through a carbon offset payment.
- **Policy SI 3**: Energy infrastructure. Major development proposals within Heat Network Priority Areas should have a communal low-temperature heating system.
- **Policy SI 4**: Managing heat risk. Development proposals should minimise adverse impacts on the urban heat island and reduce internal overheating through design, layout, orientation, materials, and green infrastructure.

### GLA Energy Assessment Guidance (2022, where applicable)
- Detailed methodology for preparing Energy Assessments for London planning applications.
- SAP 10.2 carbon emission factors.
- Cooling hierarchy.
- Carbon offset mechanism and payment calculations.

### Other Key References
- The Climate Change Act 2008 (as amended): UK net zero target by 2050.
- The Planning and Energy Act 2008: Allows LPAs to set energy efficiency standards above Building Regulations in their development plan.
- CIBSE TM52: The limits of thermal comfort -- avoiding overheating in European buildings.
- CIBSE TM59: Design methodology for the assessment of overheating risk in homes.
- CIBSE Guide A: Environmental design.
- Good Homes Alliance Overheating in New Homes Tool and Guidance.
- BRE SAP methodology (Standard Assessment Procedure) for calculating dwelling carbon emissions.
- SBEM (Simplified Building Energy Model) for non-domestic buildings.
- Passivhaus standard (reference where relevant).
- Local authority energy/climate SPDs and adopted targets.

## Section-by-Section Guidance

### 1. Introduction (200-500 words)
- State the purpose of the Energy Statement and the policy requirement.
- Identify the site and the proposed development (number of units, floor area, building type).
- Summarise the energy strategy approach (energy hierarchy).
- State the carbon reduction target being pursued (local plan target, London Plan SI 2, or Part L compliance).
- Identify the methodology used (SAP, SBEM, dynamic thermal modelling as appropriate).
- Outline the document structure.

### 2. Policy Framework (400-800 words)
- Set out the relevant national policy: NPPF Paragraphs 152-158.
- Set out Building Regulations Part L (2021) requirements: Target Emission Rate (TER), Target Fabric Energy Efficiency (TFEE), Target Primary Energy Rate (TPER).
- Reference the Future Homes Standard and its implications for the development.
- Set out relevant local plan energy and sustainability policies, quoting the specific requirements (e.g., percentage carbon reduction beyond Part L, renewable energy percentage, connection to heat networks).
- Where applicable, set out London Plan Policy SI 2, SI 3, and SI 4 requirements.
- Reference any adopted local energy SPDs or climate emergency declarations.
- Note the Climate Change Act 2008 net zero target context.

### 3. Energy Hierarchy -- Be Lean (Reduce Energy Demand) (600-1200 words)
This section addresses passive design and fabric performance measures to reduce energy demand.

#### 3.1 Passive Design Measures
- Building orientation and solar access: how the layout maximises beneficial solar gain in winter while minimising overheating risk in summer.
- Building form: compactness ratio (surface area to volume ratio) and its effect on heat loss.
- Natural ventilation strategy: cross-ventilation, stack effect, single-sided ventilation.
- Natural daylight: window sizing and placement to reduce artificial lighting demand.
- Thermal mass: use of thermal mass to moderate temperature swings.
- Shading: external shading devices, overhangs, brise-soleil, or internal blinds to reduce solar gain.

#### 3.2 Building Fabric Performance
- Proposed U-values for each building element compared with Part L 2021 notional building values:
  - External walls
  - Roof
  - Ground floor
  - Windows and doors
  - Party walls (where applicable)
- Proposed air permeability target (m3/h/m2 at 50 Pa) compared with Part L 2021 requirements.
- Thermal bridging strategy: Accredited Construction Details or bespoke junction calculations (psi-values).
- How the fabric specification delivers or exceeds the Target Fabric Energy Efficiency (TFEE) rate.

#### 3.3 Efficient Building Services
- Space heating system: type, efficiency, controls.
- Domestic hot water system: type, efficiency, storage, distribution losses.
- Ventilation system: natural, mechanical extract (MEV), or mechanical ventilation with heat recovery (MVHR). State specific fan power (SFP) and heat recovery efficiency.
- Lighting: low-energy lighting strategy, lighting controls, daylight-linked controls.
- Metering and monitoring: individual metering, energy displays, smart controls.

#### 3.4 Be Lean Carbon Savings
- Quantify the carbon savings achieved through Be Lean measures compared with the Part L 2021 baseline (or Part L 2013 baseline for London Plan compliance).
- Present the percentage reduction in regulated carbon emissions.
- For London: demonstrate achievement of the minimum 10% Be Lean reduction for residential.

### 4. Energy Hierarchy -- Be Clean (Supply Energy Efficiently) (300-600 words)
- Assess the feasibility of connection to an existing or planned district heat network.
- If the site falls within a Heat Network Priority Area (London) or local heat network zone, demonstrate compliance with connection requirements or provide justification for not connecting.
- If connection is not feasible, assess the potential for a site-wide communal heating system (e.g., communal ground source heat pump system, communal air source heat pump system).
- Assess combined heat and power (CHP) feasibility -- note that CHP is increasingly disfavoured in London due to carbon factor changes but may still be relevant in some local authority areas.
- Quantify any additional carbon savings achieved through Be Clean measures.

### 5. Energy Hierarchy -- Be Green (Renewable Energy) (600-1200 words)
- Set out the renewable and low-carbon energy technologies considered and the rationale for selection or rejection. Technologies to assess include:
  - Air source heat pumps (ASHP) -- individual or communal
  - Ground source heat pumps (GSHP) -- individual, communal, or shared ground loop
  - Solar photovoltaic (PV) panels -- roof-mounted or building-integrated
  - Solar thermal panels
  - Wind turbines (micro or small-scale) -- typically only feasible in rural/exposed locations
  - Biomass boilers or CHP -- note air quality constraints in urban areas
  - Battery storage
  - Waste water heat recovery
  - Green hydrogen (where applicable for larger schemes)

- For the selected technology or combination:
  - System sizing and specification.
  - Predicted annual energy generation (kWh/year).
  - Carbon savings (kgCO2/year and percentage reduction).
  - Roof area analysis for solar PV: available roof area, orientation, pitch, shading analysis.
  - Any spatial, visual, acoustic, or planning considerations (e.g., heat pump noise, solar panel visibility in conservation areas).

- Quantify the total carbon savings from Be Green measures.
- Demonstrate compliance with any local plan renewable energy percentage requirement.

### 6. Carbon Emissions Calculations (500-1000 words)
- Present a summary table showing:
  - Baseline regulated carbon emissions (Part L 2021 or Part L 2013 for London).
  - Carbon savings from Be Lean measures (absolute and percentage).
  - Carbon savings from Be Clean measures (absolute and percentage).
  - Carbon savings from Be Green measures (absolute and percentage).
  - Total on-site carbon savings (absolute and percentage).
  - Residual carbon emissions.
  - For London: carbon offset payment calculation for any shortfall from net zero.

- State the methodology (SAP 10.2, SBEM) and carbon emission factors used.
- Present energy demand figures: total energy demand (kWh/year), energy use intensity (kWh/m2/year), split by end-use (space heating, hot water, lighting, auxiliaries, cooling where applicable).
- For London: present results using both SAP 10.2 and the GLA's Be Seen monitoring framework metrics.
- Demonstrate compliance with the relevant target:
  - Part L 2021 Target Emission Rate (TER) and Target Primary Energy Rate (TPER).
  - Local plan percentage reduction beyond Part L.
  - London Plan SI 2: minimum 35% on-site reduction beyond Part L 2013, with net zero achieved through offset.

### 7. Overheating Risk Assessment (400-800 words)
- Describe the overheating risk assessment methodology:
  - For residential: CIBSE TM59 (dynamic thermal modelling) or Part O simplified method.
  - For non-domestic: CIBSE TM52.
- Set out the design measures to mitigate overheating risk following the cooling hierarchy:
  1. Reduce internal heat generation (efficient lighting, appliances, pipework insulation).
  2. Reduce the amount of heat entering the building (orientation, shading, glazing g-values, reflective surfaces).
  3. Manage heat within the building (exposed thermal mass, high ceilings).
  4. Use passive ventilation (openable windows, cross-ventilation, stack ventilation).
  5. Use mechanical ventilation (only where passive measures are insufficient).
  6. Use active cooling (only as a last resort, with low-carbon systems).
- Present the results of the overheating assessment or state that modelling will be undertaken at detailed design stage.
- Confirm compliance with Approved Document Part O (for residential) or demonstrate acceptable thermal comfort conditions (for non-domestic).
- Address the implications of future climate scenarios (2050s weather files) for overheating risk.

### 8. Conclusion (300-600 words)
- Summarise the energy hierarchy approach: Be Lean, Be Clean, Be Green.
- Restate the total on-site carbon reduction achieved (absolute and percentage).
- Confirm compliance with Building Regulations Part L (2021).
- Confirm compliance with relevant local plan energy policies.
- Where applicable, confirm compliance with London Plan Policy SI 2.
- Summarise the overheating risk mitigation strategy.
- Note any commitments to future monitoring (e.g., London Plan Be Seen energy monitoring).
- State that the Energy Statement demonstrates the development takes a proactive approach to climate change mitigation in accordance with NPPF Paragraphs 152-158.

## Quality Standards

- Reference specific NPPF paragraphs (152-158) by number.
- Reference Building Regulations Part L (2021) by name and specific requirements (TER, TFEE, TPER).
- Reference Part O for overheating where applicable.
- Include quantified carbon emissions data or clearly flag as "[TO BE CONFIRMED BY SAP/SBEM CALCULATIONS]".
- Reference specific U-values and air permeability targets with comparison to Part L notional values.
- Use correct technical terminology throughout (kWh, kgCO2, W/m2K, m3/h/m2, COP, SPF, SFP).
- Where London Plan applies, reference Policy SI 2 requirements and GLA methodology.
- Clearly distinguish between regulated and unregulated emissions.
- Present energy calculations in a structured table format.
- Professional energy consultancy language; no marketing or promotional claims about sustainability.`;

export const ES_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, development description, energy strategy summary, and methodology.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'State the purpose and policy requirement. Identify the site and development. Summarise the energy hierarchy approach. State the carbon reduction target. Identify the methodology (SAP, SBEM). Outline the document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'National, regional, and local energy and carbon policy context.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out NPPF Paragraphs 152-158. Describe Part L 2021 requirements (TER, TFEE, TPER). Reference the Future Homes Standard. List relevant local plan energy policies with specific targets. Where applicable, set out London Plan SI 2, SI 3, SI 4. Note the Climate Change Act 2008 net zero context.',
  },
  {
    name: 'Energy Hierarchy -- Be Lean',
    description: 'Passive design, building fabric performance, efficient services, and Be Lean carbon savings.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Describe passive design measures (orientation, form, ventilation, daylight, thermal mass, shading). Set out proposed U-values compared with Part L notional values for each element. State air permeability target. Describe thermal bridging strategy. Describe heating, hot water, ventilation, and lighting systems with efficiencies. Quantify Be Lean carbon savings. For London, demonstrate minimum 10% Be Lean reduction.',
    subsections: [
      {
        name: 'Passive Design Measures',
        description: 'Orientation, form, natural ventilation, daylight, thermal mass, and shading.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Describe building orientation, form factor, ventilation strategy, daylight, thermal mass, and solar shading.',
      },
      {
        name: 'Building Fabric Performance',
        description: 'U-values, air permeability, thermal bridging against Part L benchmarks.',
        required: true,
        min_words: 200,
        max_words: 400,
        guidance: 'Present U-values for walls, roof, floor, windows/doors compared with Part L 2021 notional values. State air permeability target. Describe thermal bridging strategy and psi-values.',
      },
      {
        name: 'Efficient Building Services',
        description: 'Heating, hot water, ventilation, lighting, and controls.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe space heating, DHW, ventilation (MVHR/MEV with SFP and efficiency), lighting, metering, and smart controls.',
      },
      {
        name: 'Be Lean Carbon Savings',
        description: 'Quantified carbon reduction from energy efficiency measures.',
        required: true,
        min_words: 100,
        max_words: 200,
        guidance: 'Quantify carbon savings from Be Lean measures as absolute and percentage. For London, confirm minimum 10% Be Lean target.',
      },
    ],
  },
  {
    name: 'Energy Hierarchy -- Be Clean',
    description: 'District heat networks, communal systems, and CHP feasibility.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Assess district heat network connection feasibility. Assess communal heating systems. Assess CHP feasibility (noting carbon factor changes). Quantify Be Clean carbon savings. For London, address Heat Network Priority Area requirements.',
  },
  {
    name: 'Energy Hierarchy -- Be Green',
    description: 'Renewable energy technology assessment, selection, sizing, and carbon savings.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Assess feasibility of ASHP, GSHP, solar PV, solar thermal, wind, biomass, battery storage. For selected technologies: system sizing, annual generation, carbon savings. Roof area analysis for PV. Address planning/acoustic/visual considerations. Quantify Be Green carbon savings. Demonstrate compliance with any local renewable energy target.',
  },
  {
    name: 'Carbon Emissions Calculations',
    description: 'Summary carbon calculations table, methodology, energy demand, and compliance demonstration.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Present a summary table: baseline emissions, Be Lean savings, Be Clean savings, Be Green savings, total on-site savings, residual emissions. State methodology and carbon factors. Present energy demand (kWh/year, kWh/m2/year) by end-use. For London, include carbon offset calculation. Demonstrate compliance with Part L TER/TPER and local/London targets.',
  },
  {
    name: 'Overheating Risk Assessment',
    description: 'Overheating methodology, cooling hierarchy measures, results, and compliance.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'State the methodology (TM59/Part O for residential, TM52 for non-domestic). Follow the cooling hierarchy: reduce internal gains, reduce solar gains, manage heat, passive ventilation, mechanical ventilation, active cooling as last resort. Present results or flag for detailed design stage. Confirm Part O compliance. Address future climate scenarios.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of energy strategy, carbon savings, and policy compliance.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise the energy hierarchy approach. Restate total on-site carbon reduction. Confirm Part L compliance. Confirm local plan policy compliance. Where applicable, confirm London Plan SI 2 compliance. Summarise overheating strategy. Note monitoring commitments. Confirm NPPF Paragraphs 152-158 compliance.',
  },
];

export const ES_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Energy Hierarchy -- Be Lean',
    'Energy Hierarchy -- Be Clean',
    'Energy Hierarchy -- Be Green',
    'Carbon Emissions Calculations',
    'Overheating Risk Assessment',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const ES_TEMPLATE = {
  assessment_type: 'Energy Statement',
  short_name: 'ES',
  version: 1,
  sections: ES_SECTIONS,
  quality_criteria: ES_QUALITY,
};
