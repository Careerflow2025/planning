import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Site Waste Management Plan (SWMP) -- identifies all waste streams
 * that will arise during the construction phase of the development,
 * sets targets for waste minimisation, reuse, and recycling, and
 * demonstrates compliance with the duty of care for waste management.
 *
 * Although the Site Waste Management Plans Regulations 2008 were
 * revoked in 2013, many local planning authorities continue to
 * require SWMPs as a planning condition or validation requirement,
 * and they remain best practice for responsible waste management.
 *
 * AI Difficulty: Easy | Typical length: 5-15 pages
 */

export const SWMP_PROMPT = `You are preparing a Site Waste Management Plan to accompany a planning application in England. The Site Waste Management Plan (SWMP) identifies the types and quantities of waste that will be generated during the construction (and any demolition) phase of the proposed development, and sets out the strategy for minimising waste generation and maximising reuse, recycling, and recovery in accordance with the waste hierarchy.

## Document Purpose

The Site Waste Management Plan must:
- Identify all waste streams anticipated during demolition (if applicable) and construction.
- Estimate the quantities of each waste stream.
- Set targets for waste minimisation, reuse, and recycling, with the aim of diverting the maximum practicable proportion of waste from landfill.
- Describe the waste management procedures on site, including segregation, storage, and collection arrangements.
- Demonstrate compliance with the duty of care for waste management under the Environmental Protection Act 1990.
- Provide a monitoring and review framework to track waste management performance against targets.
- Demonstrate compliance with national and local planning policies on waste management.

Note: The Site Waste Management Plans Regulations 2008 were revoked in December 2013. However, SWMPs remain industry best practice and are frequently required by local planning authorities as a planning condition or validation requirement. The SWMP also supports compliance with the Waste (England and Wales) Regulations 2011.

## Key Policy and Legislation References

### Environmental Protection Act 1990
- **Part II**: Establishes the framework for waste management and the waste management licensing system.
- **Section 33**: Prohibition on unauthorised or harmful deposit, treatment, or disposal of waste.
- **Section 34**: Duty of care — imposes a duty on any person who imports, produces, carries, keeps, treats, or disposes of controlled waste to take all reasonable measures to prevent the unauthorised or harmful deposit, treatment, or disposal of waste, to prevent the escape of waste, to ensure waste is transferred to an authorised person, and to provide an adequate description of waste on transfer.
- **Section 34A**: Fixed penalty notices for breaches of duty of care by householders.
- The duty of care is the cornerstone of waste management law and must be demonstrated in the SWMP.

### Waste (England and Wales) Regulations 2011
- Transpose the Waste Framework Directive (2008/98/EC) into English law.
- **Regulation 12**: Requires duty holders to apply the waste hierarchy (prevention, preparation for re-use, recycling, other recovery, disposal) when transferring waste.
- **Regulation 15**: Requires establishments or undertakings that collect or transport waste on a professional basis, or act as dealers or brokers, to register with the Environment Agency.
- The SWMP must demonstrate that the waste hierarchy has been applied.

### Waste Duty of Care Code of Practice (Defra, 2018)
- Provides practical guidance on complying with the duty of care under Section 34 of the Environmental Protection Act 1990.
- Covers: checking waste carriers are registered, providing accurate waste descriptions, using waste transfer notes, keeping records.
- The SWMP should reference this Code of Practice and demonstrate compliance.

### Hazardous Waste (England and Wales) Regulations 2005
- Set out the regime for managing hazardous waste (previously called "special waste").
- Require hazardous waste to be separated from non-hazardous waste.
- Require hazardous waste consignment notes for all movements of hazardous waste.
- The SWMP should identify any hazardous waste streams anticipated (asbestos, contaminated soils, oils, paints, solvents, treated timber) and set out the management procedures.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 8**: Achieving sustainable development includes an environmental objective to protect and enhance the natural, built, and historic environment, including making effective use of land and minimising waste and pollution.
- **Paragraph 180**: Planning policies and decisions should contribute to and enhance the natural and local environment by preventing new development from contributing to, or being put at unacceptable risk from, or being adversely affected by, unacceptable levels of pollution, including from waste.

### National Planning Policy for Waste (2014)
- Sets out the Government's ambition for a more sustainable and efficient approach to resource use and management of waste.
- Paragraph 8: When determining planning applications, waste planning authorities should ensure that the handling of waste arising from development maximises reuse/recovery opportunities and minimises the environmental effects of waste management.
- The SWMP should demonstrate consistency with the waste policies.

### Local Plan Policies
- Many local plans contain policies requiring SWMPs or construction waste management strategies for major developments.
- Some local authorities set specific diversion or recycling targets.
- Reference the specific local plan policies applicable to the development site.

### Other Key References
- WRAP (Waste and Resources Action Programme): Designing Out Waste guidance, Net Waste Tool, Waste Forecasting tools.
- BRE SMARTWaste: Construction waste benchmarks.
- BREEAM Wst 01 (Construction Waste Management) credit requirements.
- ICE Demolition Protocol: Pre-demolition audit methodology.
- CL:AIRE Definition of Waste: Development Industry Code of Practice for the re-use of excavated materials.
- Environment Agency regulatory position statements on waste.

## Section-by-Section Guidance

### 1. Introduction (150-300 words)
- State the purpose of the SWMP and the context for its preparation (planning condition, validation requirement, best practice).
- Identify the application site: address, site area, and existing use.
- Describe the proposed development: type, scale, number of units or floor area, and construction programme.
- If demolition is involved, describe the existing buildings to be demolished (type, size, construction materials, age).
- State who has prepared the SWMP (principal contractor, client, or consultant).
- Outline the document structure.

### 2. Policy Framework (250-400 words)
- Set out the relevant national policy and legislation:
  - Environmental Protection Act 1990 Section 34 (duty of care).
  - Waste (England and Wales) Regulations 2011 and the waste hierarchy.
  - National Planning Policy Framework paragraphs on waste and pollution.
  - National Planning Policy for Waste (2014).
- Reference the Waste Duty of Care Code of Practice.
- Reference the Hazardous Waste (England and Wales) Regulations 2005.
- Reference applicable local plan policies on construction waste management.
- Reference any specific targets or requirements set by the local planning authority.
- Reference industry guidance: WRAP, BRE SMARTWaste, BREEAM (if applicable).

### 3. Site Description and Proposed Works (300-500 words)
- Describe the site in the context of waste management:
  - Site access for waste collection vehicles.
  - Constraints affecting waste storage and segregation (site size, neighbouring uses, access restrictions).
  - Any contamination issues that may generate hazardous waste (cross-reference contamination assessment if applicable).
- Describe the proposed construction works in terms of waste-generating activities:
  - Demolition works: type of structures, materials present (including any suspected asbestos-containing materials).
  - Earthworks: volumes of excavation, potential for on-site reuse of excavated materials.
  - Substructure: foundation type, piling waste, temporary works.
  - Superstructure: frame construction, masonry, concrete works.
  - Envelope: cladding, roofing, glazing.
  - Fit-out: partitions, services, finishes.
- State the anticipated construction programme and phasing relevant to waste generation.

### 4. Waste Streams Identification (400-700 words)
- Identify and quantify all waste streams anticipated during demolition (if applicable) and construction:
  - **Demolition waste** (if applicable): concrete, brick, block, timber, metal, glass, plasterboard, asbestos-containing materials (ACMs), fixtures and fittings.
  - **Excavation waste**: topsoil, subsoil, clay, rock, made ground, potentially contaminated material.
  - **Construction waste**: concrete, brick, block, timber (structural and non-structural), metal (reinforcement, framing, fixings), plasterboard, insulation, packaging (cardboard, plastic wrap, pallets), plastic (pipes, fittings), glass, electrical and mechanical waste, paint/adhesive containers.
  - **Hazardous waste**: asbestos (from demolition), contaminated soils, oil/fuel, paint, solvents, treated timber, batteries, fluorescent tubes.
- Present the waste identification in tabular format:
  - Waste stream | EWC code | Estimated quantity (tonnes or m3) | Hazardous (Y/N) | Proposed management route (reuse/recycle/recover/dispose).
- State the basis for waste quantity estimates (WRAP benchmarks, BRE SMARTWaste data, experience from comparable projects, or measured survey data for demolition).
- Identify any waste streams that require specialist management (asbestos, contaminated soils).

### 5. Waste Minimisation Strategy (300-500 words)
- Describe the design and procurement measures to minimise waste generation:
  - Designing to standard material sizes to reduce cutting waste.
  - Off-site manufacture and prefabrication.
  - Just-in-time delivery to reduce damage and over-ordering.
  - Modular construction and standardised components.
  - Accurate quantity surveying and material ordering.
  - Material take-back schemes with suppliers (packaging, pallets, off-cuts).
  - Reuse of demolition materials on site (crushed concrete as aggregate, reclaimed bricks, structural steel).
  - Reuse of excavated materials on site (topsoil for landscaping, subsoil for fill) under the CL:AIRE Definition of Waste: Development Industry Code of Practice.
- Set waste generation targets:
  - Target waste generation rate (e.g., less than X tonnes per 100m2 of floor area) benchmarked against WRAP/BRE data.
  - Target waste reduction compared to benchmark (e.g., 15% reduction).
- Describe how waste minimisation will be communicated to the site team (training, induction, signage, toolbox talks).

### 6. Waste Management Procedures (400-600 words)
- Describe the on-site waste management procedures:
  - **Waste segregation**: Number and type of segregated waste streams (minimum: timber, metal, plasterboard, inert/masonry, mixed recyclables, general waste; additional: cardboard/packaging, plastic, hazardous).
  - **Waste storage areas**: Location of waste storage/segregation areas on site (shown on site layout plan or described). Adequate separation from watercourses, boundaries, and sensitive receptors. Hard-standing areas, containment for hazardous waste, covered storage where required.
  - **Skip/container management**: Type and number of skips or containers, labelling and signage, prevention of cross-contamination.
  - **On-site processing**: Any on-site crushing, screening, or treatment of waste for reuse (e.g., crushing concrete for use as aggregate). Mobile plant permits or exemptions required.
  - **Collection arrangements**: Frequency of waste collection, waste carriers used (confirm registered carriers with Environment Agency).
  - **Waste transfer notes**: Procedures for completing waste transfer notes for each waste movement. Retention of records for minimum 2 years (3 years for hazardous waste consignment notes).
  - **Hazardous waste procedures**: Separate storage, labelling, consignment notes, specialist licensed carriers and disposal/treatment facilities. Asbestos removal by licensed contractors under the Control of Asbestos Regulations 2012.
- Identify the waste management destinations (recycling facilities, transfer stations, energy-from-waste facilities, landfill sites) for each waste stream.

### 7. Duty of Care Compliance (200-400 words)
- Set out how the duty of care will be complied with:
  - All waste carriers are registered with the Environment Agency (check registration numbers).
  - Accurate waste descriptions provided on all waste transfer notes.
  - Waste transfer notes completed for every waste movement.
  - Records retained for minimum 2 years (waste transfer notes) or 3 years (hazardous waste consignment notes).
  - Waste only transferred to sites with the appropriate environmental permit or exemption.
  - Reasonable measures taken to prevent the escape or unauthorised deposit of waste.
- Confirm that the site manager or principal contractor has overall responsibility for duty of care compliance.
- Reference the Waste Duty of Care Code of Practice (Defra, 2018).
- Describe how duty of care compliance will be audited during the construction programme.

### 8. Monitoring and Review (200-400 words)
- Describe the monitoring and review framework:
  - Regular recording of waste quantities by stream (weekly or monthly).
  - Comparison of actual waste generation and diversion rates against SWMP targets.
  - Review of SWMP at key project stages (demolition complete, substructure complete, superstructure complete, fit-out complete).
  - Corrective actions if targets are not being met (additional segregation, alternative recycling routes, supplier engagement).
  - Final SWMP closeout report at project completion: actual quantities, diversion rates, destinations, lessons learned.
- Describe the reporting responsibilities (site manager, waste coordinator, or sustainability manager).
- State how waste data will be recorded (WRAP Net Waste Tool, BRE SMARTWaste, spreadsheet, or bespoke system).
- For BREEAM projects: describe how SWMP data supports the Wst 01 credit evidence requirements.
- State any planning condition requirements for SWMP monitoring and reporting.

### 9. Conclusion (150-300 words)
- Summarise the key findings and commitments of the SWMP:
  - Total estimated waste generation (tonnes).
  - Target diversion rate from landfill (e.g., minimum 90% or 95%).
  - Key waste minimisation measures.
  - Duty of care compliance commitment.
  - Monitoring and review commitment.
- Confirm compliance with the waste hierarchy.
- Confirm compliance with national and local planning policies on waste management.
- State any recommended planning conditions relating to waste management (e.g., condition requiring SWMP implementation and closeout report).
- Note that the SWMP is a living document that will be updated as the project progresses and more detailed information becomes available.

## Quality Standards

- Reference the Environmental Protection Act 1990 Section 34 (duty of care).
- Reference the Waste (England and Wales) Regulations 2011 and the waste hierarchy.
- Reference the Waste Duty of Care Code of Practice (Defra, 2018).
- Reference the NPPF and National Planning Policy for Waste (2014).
- Reference the Hazardous Waste (England and Wales) Regulations 2005 where hazardous waste is anticipated.
- Include waste quantity estimates in tabular format with EWC codes and management routes.
- Set quantified targets for waste diversion from landfill and waste generation rates.
- Describe specific waste segregation and management procedures (not generic statements).
- Address both demolition and construction waste where applicable.
- Address hazardous waste management (particularly asbestos) where applicable.
- Demonstrate duty of care compliance (registered carriers, waste transfer notes, record keeping).
- Use correct waste management terminology: waste hierarchy, EWC code, waste transfer note, consignment note, duty of care, registered carrier, environmental permit.
- Professional language appropriate for planning officers, environmental health officers, and waste management professionals.`;

export const SWMP_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose of the SWMP, site description, development summary, and preparation context.',
    required: true,
    min_words: 150,
    max_words: 300,
    guidance:
      'State the purpose and context for the SWMP. Identify the site and proposed development. Describe demolition scope if applicable. State who prepared the SWMP. Outline document structure.',
  },
  {
    name: 'Policy Framework',
    description: 'Environmental Protection Act, waste regulations, NPPF, and local policies.',
    required: true,
    min_words: 250,
    max_words: 400,
    guidance:
      'Reference EPA 1990 Section 34. Reference Waste (England and Wales) Regulations 2011 and waste hierarchy. Reference NPPF and National Planning Policy for Waste. Reference Waste Duty of Care Code of Practice. Reference Hazardous Waste Regulations. Reference local plan policies.',
  },
  {
    name: 'Site Description and Proposed Works',
    description: 'Site access, constraints, demolition scope, and construction works relevant to waste generation.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe site access and constraints for waste management. Describe demolition works and existing materials. Describe earthworks and excavation volumes. Describe construction activities by phase. State anticipated programme.',
  },
  {
    name: 'Waste Streams Identification',
    description: 'All waste streams with quantities, EWC codes, and proposed management routes.',
    required: true,
    min_words: 400,
    max_words: 700,
    guidance:
      'List demolition, excavation, construction, and hazardous waste streams. Present in tabular format with EWC codes and quantities. State basis for estimates. Identify specialist management requirements.',
  },
  {
    name: 'Waste Minimisation Strategy',
    description: 'Design and procurement measures to reduce waste, generation targets, and site team communication.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe design measures (standard sizes, prefabrication, modular). Describe procurement measures (just-in-time, take-back). Address on-site reuse of demolition and excavation materials. Set waste generation targets. Describe site team training.',
  },
  {
    name: 'Waste Management Procedures',
    description: 'Segregation, storage, collection, processing, waste transfer notes, and hazardous waste handling.',
    required: true,
    min_words: 400,
    max_words: 600,
    guidance:
      'Describe segregation streams and storage areas. Address skip management and labelling. Describe on-site processing. State collection arrangements and registered carriers. Describe waste transfer note procedures. Address hazardous waste handling (especially asbestos). Identify waste destinations.',
  },
  {
    name: 'Duty of Care Compliance',
    description: 'Registered carriers, waste transfer notes, record keeping, and audit procedures.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Confirm registered carrier checks. Describe waste transfer note procedures. State record retention periods. Confirm waste destinations hold appropriate permits. State duty of care responsibilities. Reference Defra Code of Practice. Describe audit procedures.',
  },
  {
    name: 'Monitoring and Review',
    description: 'Waste recording, target tracking, review stages, and closeout reporting.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Describe waste quantity recording. Set out comparison against targets. Describe review stages and corrective actions. Describe closeout report. State reporting responsibilities and recording tools. Address planning condition requirements.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of waste estimates, targets, compliance, and living document status.',
    required: true,
    min_words: 150,
    max_words: 300,
    guidance:
      'Summarise total estimated waste and diversion target. Confirm waste hierarchy compliance. Confirm duty of care compliance. Confirm policy compliance. State recommended conditions. Note living document status.',
  },
];

export const SWMP_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'Site Description and Proposed Works',
    'Waste Streams Identification',
    'Waste Minimisation Strategy',
    'Waste Management Procedures',
    'Duty of Care Compliance',
    'Monitoring and Review',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const SWMP_TEMPLATE = {
  assessment_type: 'Site Waste Management Plan',
  short_name: 'SWMP',
  version: 1,
  sections: SWMP_SECTIONS,
  quality_criteria: SWMP_QUALITY,
};
