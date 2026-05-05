import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Flood Risk Assessment (FRA) -- required for all proposals in Flood Zones 2
 * and 3, for sites in Flood Zone 1 exceeding 1 hectare, and for any site where
 * the Environment Agency, lead local flood authority, or local plan policy
 * identifies a flood risk concern.
 *
 * Note: A site-specific FRA prepared by a suitably qualified drainage engineer
 * remains necessary for detailed hydraulic modelling. This AI-generated FRA
 * provides the planning policy framework, qualitative flood risk assessment,
 * and drainage strategy narrative suitable for lower-risk sites or as a first
 * draft for professional review.
 */

export const FRA_PROMPT = `You are preparing a Flood Risk Assessment (FRA) to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A Flood Risk Assessment is required by national planning policy and the Environment Agency to demonstrate that:
1. The proposed development will be safe for its lifetime, taking account of climate change.
2. The development will not increase flood risk elsewhere.
3. Where possible, the development will reduce overall flood risk.

The FRA must demonstrate that the Sequential Test and, where necessary, the Exception Test have been applied, and that appropriate flood risk management and mitigation measures are proposed.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- Paragraph 159: Inappropriate development in areas at risk of flooding should be avoided by directing development away from areas at highest risk.
- Paragraph 160: Strategic policies should be informed by a strategic flood risk assessment, and should manage flood risk from all sources.
- Paragraph 161: All plans should apply a sequential, risk-based approach to the location of development.
- Paragraph 162: The aim of the sequential test is to steer new development to areas with the lowest risk of flooding.
- Paragraph 163: If it is not possible for development to be located in zones with a lower risk of flooding (the sequential test), the exception test may need to be applied.
- Paragraph 164: For the exception test to be passed, it should be demonstrated that the development would provide wider sustainability benefits that outweigh the flood risk, and that the development will be safe for its lifetime taking account of climate change.
- Paragraph 165: Both elements of the exception test must be satisfied for development to be allocated or permitted.
- Paragraph 167: When determining applications, LPAs should ensure that flood risk is not increased elsewhere.
- Paragraph 168: Major developments should incorporate sustainable drainage systems unless demonstrated to be inappropriate.
- Paragraph 169: Applications should be supported by a site-specific flood risk assessment where required.

### Planning Practice Guidance: Flood Risk and Coastal Change
- Flood zone definitions (Table 1): Zone 1 (low probability), Zone 2 (medium probability), Zone 3a (high probability), Zone 3b (functional floodplain).
- Flood risk vulnerability classification (Table 2): essential infrastructure, highly vulnerable, more vulnerable, less vulnerable, water-compatible.
- Flood risk vulnerability and flood zone compatibility (Table 3).
- Climate change allowances for peak river flow and peak rainfall intensity.
- Sequential Test guidance.
- Exception Test requirements.

### Environment Agency Guidance
- Flood Map for Planning (Rivers and Sea).
- Long-term flood risk information from surface water, reservoirs, and rivers/sea.
- Climate change allowances (updated periodically by the EA).
- Standing advice for Flood Zones 2 and 3.

### Other Key References
- The Flood and Water Management Act 2010.
- SuDS Manual (CIRIA C753, 2015).
- Building Regulations Approved Document H: Drainage and waste disposal.
- BS 8582:2013 Code of practice for surface water management.
- Non-statutory technical standards for SuDS (Defra, 2015).
- Lead Local Flood Authority (LLFA) guidance and local SuDS adoption standards.

## Section-by-Section Guidance

### 1. Introduction (200-500 words)
- State the purpose of the FRA and the policy requirement (NPPF Paragraph 169).
- Identify the site by full postal address and grid reference.
- Summarise the proposed development.
- State the flood zone classification from the EA Flood Map for Planning.
- Confirm whether the Sequential Test and/or Exception Test are required.
- Note any consultation with the Environment Agency or Lead Local Flood Authority.
- Outline the document structure.
- State the qualifications of the author (or note "[PREPARED BY A SUITABLY QUALIFIED PROFESSIONAL]" if AI-generated for review).

### 2. Site Description (400-800 words)
#### 2.1 Site Location
- Grid reference (National Grid) and Ordnance Survey map extract reference.
- Site area in hectares.
- Position relative to named watercourses, rivers, or coastline (including distances).
- Local topography and ground levels (AOD where available or "[LEVELS TO BE CONFIRMED BY TOPOGRAPHIC SURVEY]").

#### 2.2 Geology and Hydrogeology
- Underlying geology: bedrock and superficial deposits (reference BGS mapping).
- Soil type and infiltration potential.
- Groundwater vulnerability zone (EA mapping).
- Any known groundwater flooding issues.

#### 2.3 Existing Drainage
- Current surface water drainage: where does surface water go (watercourse, sewer, soakaway)?
- Current greenfield/brownfield status and estimated existing run-off rates.
- Existing impermeable area.
- Current foul drainage arrangements.

### 3. Flood Risk Assessment (600-1200 words)
#### 3.1 Flood Zone Classification
- State the EA Flood Zone: 1, 2, 3a, or 3b with evidence (EA Flood Map reference).
- Note any historic flood events on or near the site.
- Reference the Strategic Flood Risk Assessment (SFRA) where available.

#### 3.2 Sources of Flood Risk
Assess each source of flood risk:
- **Fluvial (river) flooding**: proximity to watercourses, flood levels, flood depths, velocities, rate of onset.
- **Tidal and coastal flooding**: proximity to coast or tidal rivers, tidal flood levels.
- **Surface water (pluvial) flooding**: EA surface water flood risk mapping, overland flow paths, ponding areas.
- **Groundwater flooding**: susceptibility mapping, historical records.
- **Sewer flooding**: records from the sewerage undertaker, capacity issues.
- **Reservoir flooding**: EA reservoir flood mapping.
- **Artificial sources**: canals, lakes, ponds.

#### 3.3 Climate Change Allowances
- State the applicable climate change allowances for peak river flow (central, higher central, upper end) from the EA guidance.
- State the applicable climate change allowance for peak rainfall intensity.
- Apply the allowances to the flood risk assessment (e.g., "the 1% AEP flood level with the higher central climate change allowance is [X]m AOD").
- Identify the design flood event (typically 1% AEP + climate change for fluvial, 0.5% AEP + climate change for tidal).

### 4. Sequential Test (200-600 words)
- State whether the Sequential Test is required (it is for sites in Flood Zones 2 and 3, and may be for Zone 1 sites with other flood risk sources).
- If required, explain the test: the aim is to steer development to areas with the lowest probability of flooding (NPPF Paragraph 162).
- For LPA-led assessments: note that the LPA applies the Sequential Test.
- For applicant-led assessments: define the area of search, identify reasonably available alternative sites, and demonstrate that there are no sequentially preferable sites.
- If the site is in Flood Zone 1 with no other flood risk, confirm the Sequential Test is passed.
- Conclude whether the Sequential Test is passed.

### 5. Exception Test (200-500 words)
- State whether the Exception Test is required (where the Sequential Test cannot direct development to a lower-risk zone and the vulnerability classification requires it -- see PPG Table 3).
- If not required, state why and move to the next section.
- If required, demonstrate both elements:
  1. **Wider sustainability benefits**: The development provides wider sustainability benefits to the community that outweigh flood risk (NPPF Paragraph 164a). Reference the benefits identified in the Planning Statement.
  2. **Safe development**: The development will be safe for its lifetime taking account of the vulnerability of its users, without increasing flood risk elsewhere, and where possible will reduce flood risk overall (NPPF Paragraph 164b).
- Conclude whether the Exception Test is passed.

### 6. Flood Risk Management and Mitigation (600-1200 words)
#### 6.1 Finished Floor Levels
- Proposed finished floor levels (FFLs) in metres AOD.
- Demonstrate freeboard above the design flood level (typically 300mm for residential, 600mm for sleeping accommodation).
- If site levels need raising, describe the compensatory flood storage requirements.

#### 6.2 Flood Resistance and Resilience
- Flood resistance measures (for developments in Flood Zone 2 or 3): flood-resistant construction to the design flood level.
- Flood resilience measures above the design flood level: electrical installations above flood level, resilient wall and floor finishes.
- Reference CIRIA C790 (Guidance on flood-resistant construction).

#### 6.3 Surface Water Drainage Strategy (SuDS)
- Design philosophy: mimic natural drainage, manage water close to source, provide amenity and biodiversity benefits.
- Proposed SuDS features: permeable paving, swales, rain gardens, attenuation basins, green roofs, filter drains, soakaways, underground storage.
- Design standards: manage the 1 in 100 year + climate change storm event on site.
- Discharge rate: restrict to greenfield run-off rate (or agreed rate with LLFA) for brownfield sites.
- Exceedance flow routes: manage safely without risk to property or persons.
- Water quality treatment: provide an appropriate SuDS management train (source control, site control, regional control).
- Reference CIRIA C753 (SuDS Manual) and Defra non-statutory technical standards.
- Adoption and maintenance: who will maintain the SuDS and under what arrangement (adoption by water company, management company, highway authority).

#### 6.4 Foul Drainage
- Proposed foul drainage connection: public sewer, package treatment plant, or septic tank.
- Capacity confirmation or need for pre-development enquiry with the sewerage undertaker.

### 7. Residual Risk Assessment (200-400 words)
- What is the residual risk if flood defences are overtopped or breached?
- What is the residual risk if the drainage system is exceeded (an exceedance event)?
- Emergency planning: safe access and egress during a flood event, flood warning arrangements (EA Flood Warnings Direct).
- Emergency flood plan for the site/building.

### 8. Conclusions and Recommendations (300-600 words)
- Summarise the flood risk to the site from all sources.
- Confirm the flood zone classification.
- State whether the Sequential Test is passed (and the Exception Test if applicable).
- Summarise the proposed flood risk management and mitigation measures.
- Confirm that the development will be safe for its lifetime taking account of climate change.
- Confirm that the development will not increase flood risk elsewhere.
- Confirm compliance with NPPF Paragraphs 159-169 and relevant local flood risk policies.
- List any recommended conditions or informatives for the decision notice.

## Quality Standards

- Reference specific NPPF paragraphs (159-169) by number.
- Reference EA Flood Map for Planning data and flood zone classification.
- Apply the correct climate change allowances from current EA guidance.
- Distinguish between sources of flood risk (fluvial, surface water, groundwater, sewer, tidal, reservoir).
- Include specific flood levels in metres AOD where provided, or flag as "[DATA REQUIRED FROM EA / TOPOGRAPHIC SURVEY]".
- Reference CIRIA C753 (SuDS Manual) for drainage design.
- Reference Defra non-statutory technical standards for SuDS.
- Use correct technical terminology throughout (AEP, AOD, SuDS, LLFA, SFRA).
- Where hydraulic modelling data has not been provided, clearly state this and recommend it be obtained.`;

export const FRA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, flood zone, and document scope.',
    required: true,
    min_words: 200,
    max_words: 500,
    guidance:
      'State the FRA purpose and NPPF Paragraph 169 requirement. Identify the site by address and grid reference. State the flood zone from EA mapping. Confirm whether Sequential/Exception Tests are required. Note any EA/LLFA consultation. Outline the document structure.',
  },
  {
    name: 'Site Description',
    description: 'Location, topography, geology, hydrogeology, and existing drainage.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Provide grid reference and site area. Describe proximity to watercourses. Set out topography and ground levels (AOD). Describe geology and hydrogeology from BGS mapping. Assess groundwater vulnerability. Describe existing surface water and foul drainage. State greenfield/brownfield status and estimated existing run-off.',
    subsections: [
      {
        name: 'Site Location',
        description: 'Grid reference, area, proximity to watercourses, topography.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Grid reference, site area, distance to watercourses, topography and levels (AOD).',
      },
      {
        name: 'Geology and Hydrogeology',
        description: 'Bedrock, superficial deposits, soil type, groundwater.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Reference BGS mapping. Describe soil and infiltration potential. Note groundwater vulnerability zone.',
      },
      {
        name: 'Existing Drainage',
        description: 'Current surface water and foul drainage arrangements.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe existing drainage routes, impermeable area, greenfield/brownfield status, estimated run-off rates.',
      },
    ],
  },
  {
    name: 'Flood Risk Assessment',
    description: 'Flood zone, all sources of flood risk, and climate change allowances.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'State the flood zone with EA evidence. Assess all sources of flood risk: fluvial, tidal, surface water, groundwater, sewer, reservoir, and artificial. Apply EA climate change allowances to flood levels. Identify the design flood event. Reference the SFRA where available.',
    subsections: [
      {
        name: 'Flood Zone Classification',
        description: 'EA flood zone with evidence and historic flooding.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'State EA flood zone. Note historic flood events. Reference SFRA.',
      },
      {
        name: 'Sources of Flood Risk',
        description: 'Assessment of each flood risk source.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'Assess fluvial, tidal, surface water, groundwater, sewer, and reservoir flood risk with evidence.',
      },
      {
        name: 'Climate Change Allowances',
        description: 'EA climate change allowances applied to flood risk.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'State applicable allowances for peak river flow and peak rainfall. Apply to design flood event.',
      },
    ],
  },
  {
    name: 'Sequential Test',
    description: 'Application of the NPPF Sequential Test to steer development to lowest risk areas.',
    required: true,
    min_words: 200,
    max_words: 600,
    guidance:
      'State whether the Sequential Test is required. Define the area of search. Assess alternative sites. Conclude whether the test is passed. Reference NPPF Paragraph 162.',
  },
  {
    name: 'Exception Test',
    description: 'Application of the NPPF Exception Test where required.',
    required: false,
    min_words: 200,
    max_words: 500,
    guidance:
      'State whether the Exception Test is required (PPG Table 3). If required, demonstrate both elements: wider sustainability benefits (Paragraph 164a) and safe development (Paragraph 164b). If not required, state why.',
  },
  {
    name: 'Flood Risk Management and Mitigation',
    description: 'FFLs, resistance/resilience measures, SuDS strategy, and foul drainage.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Set out finished floor levels with freeboard above design flood level. Describe flood resistance and resilience measures. Present the SuDS strategy: features, design standard (1 in 100 + CC), discharge rates (greenfield), exceedance routes, water quality treatment, adoption and maintenance. Describe foul drainage. Reference CIRIA C753 and Defra non-statutory technical standards.',
    subsections: [
      {
        name: 'Finished Floor Levels',
        description: 'Proposed FFLs and freeboard above design flood level.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'State proposed FFLs in AOD. Demonstrate freeboard (typically 300mm residential, 600mm sleeping).',
      },
      {
        name: 'Flood Resistance and Resilience',
        description: 'Construction measures for flood resistance and resilience.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe flood-resistant construction below design flood level and resilient measures above. Reference CIRIA C790.',
      },
      {
        name: 'Surface Water Drainage Strategy',
        description: 'SuDS design, attenuation, discharge rates, and maintenance.',
        required: true,
        min_words: 250,
        max_words: 500,
        guidance: 'Describe SuDS features, design standard, discharge rate restriction, exceedance routes, water quality, and maintenance/adoption arrangements. Reference CIRIA C753 and Defra standards.',
      },
      {
        name: 'Foul Drainage',
        description: 'Foul drainage connection and capacity.',
        required: true,
        min_words: 50,
        max_words: 200,
        guidance: 'Describe proposed foul drainage arrangement and capacity confirmation.',
      },
    ],
  },
  {
    name: 'Residual Risk Assessment',
    description: 'Residual risk from defence failure, system exceedance, and emergency planning.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Assess residual risk from defence overtopping/breach and drainage exceedance. Describe safe access and egress during flooding. Set out flood warning and emergency planning arrangements.',
  },
  {
    name: 'Conclusions and Recommendations',
    description: 'Summary of flood risk, test outcomes, mitigation, and policy compliance.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise flood risk from all sources. Confirm flood zone. State Sequential/Exception Test outcomes. Summarise mitigation. Confirm the development is safe for its lifetime and does not increase flood risk elsewhere. Confirm NPPF Paragraphs 159-169 compliance. List recommended conditions.',
  },
];

export const FRA_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Site Description',
    'Flood Risk Assessment',
    'Sequential Test',
    'Flood Risk Management and Mitigation',
    'Residual Risk Assessment',
    'Conclusions and Recommendations',
  ],
  max_quality_score: 100,
};

export const FRA_TEMPLATE = {
  assessment_type: 'Flood Risk Assessment',
  short_name: 'FRA',
  version: 1,
  sections: FRA_SECTIONS,
  quality_criteria: FRA_QUALITY,
};
