import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Preliminary Ecological Appraisal (PEA) / Phase 1 Habitat Survey -- required
 * for developments where there is potential for ecological impact, including
 * sites with semi-natural habitats, watercourses, mature trees, hedgerows, or
 * proximity to designated nature conservation sites.
 *
 * IMPORTANT: This AI-generated assessment produces a desk-based ecological
 * appraisal. Field survey data (Phase 1 habitat mapping, species records) must
 * be supplied by the user or obtained from a qualified ecologist. The output
 * provides the planning policy framework, desk study analysis, constraints and
 * opportunities assessment, and mitigation strategy suitable as a first draft
 * for professional ecological review.
 */

export const PEA_PROMPT = `You are preparing a Preliminary Ecological Appraisal (PEA) to accompany a planning application submitted to a local planning authority in England. The PEA should read as though prepared by a suitably qualified ecologist (MCIEEM or equivalent) conducting a desk-based assessment. Where field survey data has not been provided by the user, clearly state that field surveys are required and flag data gaps as "[FIELD SURVEY DATA REQUIRED]".

## Document Purpose

A Preliminary Ecological Appraisal provides an initial assessment of the ecological value of a site and identifies the potential ecological constraints and opportunities associated with a proposed development. The PEA must:
1. Establish the baseline ecological conditions through a desk study and, where data is available, a Phase 1 habitat survey.
2. Identify designated nature conservation sites within the zone of influence.
3. Assess the potential for protected and notable species to be present on or near the site.
4. Identify ecological constraints that may affect the development design or phasing.
5. Recommend further surveys where required (e.g., Phase 2 protected species surveys).
6. Set out avoidance, mitigation, compensation, and enhancement measures following the mitigation hierarchy.
7. Address Biodiversity Net Gain (BNG) requirements under the Environment Act 2021.

## Key Policy and Legislation References

### Wildlife Legislation
- **Wildlife and Countryside Act 1981 (as amended)**: Protection of wild birds (Section 1), animals (Section 9), and plants (Section 13). Schedule 1 (specially protected birds), Schedule 5 (protected animals), Schedule 8 (protected plants).
- **Conservation of Habitats and Species Regulations 2017 (as amended) ("Habitats Regulations")**: Transposition of the EU Habitats Directive. Strict protection for European Protected Species (EPS) listed in Schedule 2 (great crested newts, all bat species, dormice, otters) and Schedule 5 (plants). Requirement for Habitats Regulations Assessment (HRA) for plans or projects likely to have a significant effect on a European site.
- **Protection of Badgers Act 1992**: Offence to kill, injure, or take a badger; or interfere with a badger sett.
- **Natural Environment and Rural Communities Act 2006 (NERC Act)**: Section 41 lists habitats and species of principal importance for conserving biodiversity in England. The "biodiversity duty" on public authorities (Section 40) to have regard to conserving biodiversity.
- **Environment Act 2021**: Mandatory Biodiversity Net Gain (BNG) of a minimum 10% for developments subject to planning permission (commenced November 2023 for major developments, April 2024 for minor developments). Section 98-101: general conditions requiring BNG. Strengthened biodiversity duty on public authorities.
- **Hedgerow Regulations 1997**: Protection of important hedgerows.
- **Wild Mammals (Protection) Act 1996**: General protection from cruel treatment.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174**: Planning policies and decisions should contribute to and enhance the natural and local environment by: (a) protecting and enhancing valued landscapes; (b) recognising the intrinsic character and beauty of the countryside; (d) minimising impacts on and providing net gains for biodiversity, including by establishing coherent ecological networks.
- **Paragraph 175**: Plans should: distinguish between the hierarchy of international, national, and locally designated sites; allocate land with the least environmental or amenity value; take a strategic approach to maintaining and enhancing networks of habitats and green infrastructure.
- **Paragraph 180**: When determining planning applications, LPAs should apply the following principles:
  (a) If significant harm to biodiversity cannot be avoided, adequately mitigated, or as a last resort compensated for, planning permission should be refused.
  (b) Development on land within or outside a SSSI likely to have an adverse effect should not normally be permitted.
  (c) Development resulting in the loss or deterioration of irreplaceable habitats (such as ancient woodland and ancient or veteran trees) should be refused unless there are wholly exceptional reasons and a suitable compensation strategy exists.
  (d) Development whose primary objective is to conserve or enhance biodiversity should be supported.
- **Paragraph 181**: The presumption in favour of sustainable development does not apply where the plan or project is likely to have a significant effect on a habitats site (alone or in combination) unless an appropriate assessment has concluded that the plan or project will not adversely affect the integrity of the habitats site.
- **Paragraph 182**: The following should be given the same protection as habitats sites: potential Special Protection Areas, possible Special Areas of Conservation, and listed or proposed Ramsar sites.

### Other Key Guidance
- **CIEEM Guidelines for Preliminary Ecological Appraisal (2017, updated 2019)**: Industry standard methodology for PEA.
- **CIEEM Guidelines for Ecological Impact Assessment in the UK and Ireland (2018, updated 2022)**: Methodology for assessing ecological impacts.
- **BS 42020:2013 Biodiversity -- Code of practice for planning and development**: Standard for ecological assessment in the planning process.
- **DEFRA Biodiversity Metric 4.0**: The statutory metric for calculating Biodiversity Net Gain.
- **Standing Advice (Natural England)**: Species-specific standing advice for protected species surveys and mitigation.
- **Multi-Agency Geographic Information for the Countryside (MAGIC) map**: Designated site boundaries and habitat inventories.
- **National Biodiversity Network (NBN) Atlas**: Biological records database.
- **Local Biological Records Centre (LBRC)**: Source of local species records and habitat data.

## Section-by-Section Guidance

### 1. Introduction and Methodology (400-800 words)
#### 1.1 Background and Brief
- State the purpose of the PEA and the policy basis (NPPF Paragraph 180, Environment Act 2021).
- Identify the site by full postal address, grid reference, and site area.
- Summarise the proposed development.
- State the qualifications of the assessor (or "[PREPARED FOR REVIEW BY A SUITABLY QUALIFIED ECOLOGIST (MCIEEM)]").
- Note any limitations of the assessment (e.g., desk-based only, seasonal constraints, access limitations).

#### 1.2 Methodology
- **Desk study**: Describe the data sources interrogated:
  - MAGIC map: designated sites within the appropriate zone of influence (typically 2km for local designations, 10km for SACs/SPAs where relevant species or habitats are present, 30km for SACs designated for bats).
  - Local Biological Records Centre: species records within 2km of the site.
  - NBN Atlas: additional species records.
  - Aerial photography (Google Earth, Bing Maps) for habitat identification.
  - OS mapping for landscape context.
  - Environment Agency data: watercourses, flood zones.
  - Previous ecological reports for the site or adjacent land.
- **Phase 1 Habitat Survey**: If field data is provided, describe the survey methodology following the JNCC Handbook for Phase 1 Habitat Survey. State the survey date, weather conditions, surveyor name and qualifications. If field data is not available, flag as "[PHASE 1 HABITAT SURVEY TO BE UNDERTAKEN BY A QUALIFIED ECOLOGIST]".
- **Zone of Influence**: Define the search radii used for different designations and species groups:
  - International designations (SAC, SPA, Ramsar): 10km (or 30km for bat SACs).
  - National designations (SSSI, NNR): 2km.
  - Local designations (LNR, LWS/SINC/CWS): 1km.
  - Species records: 2km.

### 2. Desk Study Results (500-1000 words)
#### 2.1 Statutory Designated Sites
- List all statutory designated sites within the defined zones of influence:
  - Special Areas of Conservation (SAC): name, distance, qualifying features.
  - Special Protection Areas (SPA): name, distance, qualifying species.
  - Ramsar sites: name, distance, qualifying criteria.
  - Sites of Special Scientific Interest (SSSI): name, distance, condition, notified features.
  - National Nature Reserves (NNR): name, distance.
  - Local Nature Reserves (LNR): name, distance.
- Assess whether the proposed development could have a direct or indirect impact on any statutory designated site.
- Where impacts on European sites are possible, note the requirement for Habitats Regulations Assessment.

#### 2.2 Non-Statutory Designated Sites
- List non-statutory designated sites within 1km: Local Wildlife Sites (LWS), Sites of Importance for Nature Conservation (SINCs), County Wildlife Sites (CWS).
- Describe their ecological interest and proximity to the site.

#### 2.3 Protected and Notable Species Records
- Summarise records of protected and notable species within 2km of the site, organised by species group:
  - Bats (all species EPS under Habitats Regulations).
  - Great crested newt (EPS).
  - Badger (Protection of Badgers Act 1992).
  - Reptiles (common lizard, slow worm, grass snake, adder -- Wildlife and Countryside Act Schedule 5 partial protection).
  - Birds (breeding birds, Schedule 1 species).
  - Dormouse (EPS).
  - Otter (EPS).
  - Water vole (Wildlife and Countryside Act Schedule 5 full protection).
  - Invertebrates (NERC Act Section 41 species).
  - Plants (Schedule 8 species, invasive non-native species).
- For each species group, state the number of records and the nearest record.
- If desk study data is not available, flag as "[BIOLOGICAL RECORDS DATA TO BE OBTAINED FROM THE LOCAL BIOLOGICAL RECORDS CENTRE]".

#### 2.4 Habitats of Principal Importance
- Identify any Habitats of Principal Importance (NERC Act Section 41) within or adjacent to the site, based on desk study and aerial photography:
  - Ancient woodland (check the Ancient Woodland Inventory on MAGIC).
  - Traditional orchards.
  - Hedgerows (native species-rich hedgerows).
  - Ponds.
  - Lowland meadows.
  - Other priority habitats identified from Priority Habitat Inventories on MAGIC.

### 3. Phase 1 Habitat Survey (500-1000 words)
- If field survey data has been provided by the user, describe the habitats present on site using the JNCC Phase 1 Habitat Survey classification:
  - Woodland (broadleaved, coniferous, mixed, plantation).
  - Scrub (dense, scattered).
  - Grassland (improved, semi-improved, unimproved, amenity).
  - Tall herb and fern.
  - Heathland.
  - Mire and bog.
  - Swamp, marginal, and inundation.
  - Open water (standing, running).
  - Rock exposure and waste.
  - Built environment (buildings, hardstanding, bare ground, walls).
  - Hedgerows (intact, defunct, species-rich, species-poor).
  - Trees (scattered, lines, groups).
  - Boundaries (fences, walls).
- Map the habitats present (or reference the Phase 1 Habitat Map).
- Describe the condition and ecological value of each habitat type.
- Note any invasive non-native species (INNS) identified: Japanese knotweed, Himalayan balsam, giant hogweed, etc.
- If no field data is available, clearly state: "[PHASE 1 HABITAT SURVEY HAS NOT YET BEEN UNDERTAKEN. The following habitat descriptions are based on desk study analysis of aerial photography and OS mapping only and must be verified by a qualified ecologist through field survey.]"
- Even without field data, provide a preliminary habitat assessment based on available information.

### 4. Protected Species Assessment (600-1200 words)
For each relevant species group, assess the potential for the species to be present on or near the site based on the desk study, habitat assessment, and any field data provided.

#### 4.1 Bats
- Assess buildings on site for bat roost potential (using the Bat Conservation Trust guidelines: negligible, low, moderate, high).
- Assess trees on site for bat roost potential (using the same categories).
- Assess habitats for commuting and foraging potential.
- Recommend further surveys if moderate or high potential is identified: preliminary roost assessment (PRA), emergence/re-entry surveys, activity surveys.

#### 4.2 Great Crested Newt (GCN)
- Identify ponds within 500m of the site (from OS mapping and MAGIC).
- Apply the Habitat Suitability Index (HSI) if pond data is available, or flag as "[HSI ASSESSMENT TO BE UNDERTAKEN]".
- Assess terrestrial habitat on site for GCN potential.
- Recommend further surveys if suitable habitat is present: eDNA survey (April-June) or traditional presence/absence surveys.

#### 4.3 Badger
- Assess habitat suitability for badger foraging and sett construction.
- Note any evidence of badger activity (from field survey or user-provided data).
- Recommend a badger survey if suitable habitat is present (survey within 30m of the development boundary).

#### 4.4 Reptiles
- Assess habitat suitability for common reptile species: south-facing slopes, rough grassland, scrub edges, log piles, compost heaps, rubble.
- Recommend a presence/absence survey if suitable habitat is present (7 survey visits between April-September using artificial refugia).

#### 4.5 Breeding Birds
- Assess habitat suitability for nesting birds: trees, hedgerows, scrub, buildings, grassland.
- Note any Schedule 1 species recorded within 2km.
- Recommend survey timing constraints: avoid vegetation clearance during the bird nesting season (March-August inclusive) or undertake a pre-clearance nesting bird check.

#### 4.6 Other Species
- Assess potential for dormouse, otter, water vole, invertebrates, and notable plants as relevant to the site and its habitats.
- For each species group, conclude on the likely presence/absence and recommend further survey if required.

### 5. Ecological Constraints and Opportunities (400-800 words)
#### 5.1 Constraints
- Summarise the ecological constraints that may affect the development:
  - Designated sites requiring avoidance or mitigation of impacts.
  - Protected species requiring further survey, licensing, or timing restrictions.
  - Habitats of Principal Importance to be retained or compensated.
  - Ancient woodland and veteran trees (irreplaceable habitats).
  - Hedgerow retention requirements.
  - Watercourse buffers and riparian zones.
  - Seasonal restrictions on works (bird nesting season, bat active season, reptile active season).

#### 5.2 Opportunities
- Identify ecological enhancement opportunities:
  - Habitat creation: native planting, wildflower meadows, pond creation, green roofs.
  - Species-specific enhancements: bat boxes, bird boxes, hedgehog highways, invertebrate hotels.
  - Green infrastructure and ecological connectivity: hedgerow planting, wildlife corridors, buffer zones.
  - Water features: SuDS with ecological design, rain gardens, attenuation ponds with marginal planting.

### 6. Mitigation and Enhancement (500-1000 words)
Apply the mitigation hierarchy (avoid, mitigate, compensate, enhance) as required by NPPF Paragraph 180(a).

#### 6.1 Avoidance
- Design changes to avoid ecological impacts: retaining habitats, adjusting layouts, maintaining buffer zones.
- Seasonal timing of works to avoid impacts on protected species.

#### 6.2 Mitigation
- Specific mitigation measures for each identified constraint:
  - Bat roost: European Protected Species Mitigation Licence (EPSML) if roosts are confirmed. Replacement roost provision.
  - GCN: District Level Licensing (DLL) or site-specific EPSML. Exclusion fencing and trapping.
  - Badger: Sett closure under Natural England licence (closed season July-November). Replacement artificial sett.
  - Reptiles: Phased habitat manipulation and translocation to a suitable receptor site.
  - Nesting birds: Vegetation clearance outside the nesting season (September-February) or supervised clearance with a pre-clearance check.
- Construction Environmental Management Plan (CEMP) requirements: ecological toolbox talks, pollution prevention, dust suppression, lighting design, noise management.
- Ecological Clerk of Works (ECoW) role during construction.

#### 6.3 Compensation
- Where habitat loss is unavoidable, set out the compensation strategy: like-for-like habitat creation or habitat of higher ecological value.
- Quantify habitat loss and compensation (area in hectares or length in metres for linear features).

#### 6.4 Enhancement
- Set out the proposed ecological enhancements:
  - Native species planting with locally sourced stock.
  - Species-specific features: integrated bat bricks/boxes (a minimum of 1 per dwelling is common good practice), swift bricks, house sparrow terraces, hedgehog gates in fences.
  - Hedgerow planting: native species-rich hedgerow (minimum 5 native species per 30m).
  - Wildflower grassland creation.
  - Pond creation or enhancement.
  - Green/brown roofs and living walls.
  - Sensitive external lighting design following the Bat Conservation Trust/Institution of Lighting Professionals guidance (ILP Guidance Note 08/23).

### 7. Biodiversity Net Gain Considerations (400-800 words)
- State the mandatory requirement for a minimum 10% Biodiversity Net Gain under the Environment Act 2021.
- Describe the DEFRA Biodiversity Metric 4.0 methodology for calculating BNG.
- If baseline habitat data is available, provide a preliminary assessment of the baseline habitat units.
- Describe the proposed approach to achieving the 10% net gain: on-site habitat creation, off-site habitat creation, or statutory biodiversity credits.
- Emphasise the hierarchy: on-site provision is preferred, then off-site within the local planning authority area, then off-site elsewhere, then statutory credits as a last resort.
- Note the requirement for a Biodiversity Gain Plan to be submitted and approved.
- Note the requirement for a 30-year management and monitoring plan for created and enhanced habitats.
- Reference the Small Sites Metric (SSM) for minor developments where applicable.
- If a full BNG assessment is provided separately, cross-reference it; otherwise note "[FULL BIODIVERSITY NET GAIN ASSESSMENT TO BE PROVIDED USING DEFRA METRIC 4.0]".

### 8. Conclusion (300-600 words)
- Summarise the ecological baseline: habitats present, designated sites, protected species potential.
- Summarise the ecological constraints and how they can be addressed through the mitigation hierarchy.
- List any further surveys recommended (species, timing, methodology).
- Confirm that, subject to the recommended mitigation and enhancement measures, the development can proceed without significant adverse ecological impact.
- Confirm that the proposals can deliver a minimum 10% Biodiversity Net Gain.
- Confirm compliance with NPPF Paragraphs 174, 180-182 and relevant local ecology policies.
- Note that further survey work may result in additional mitigation requirements or design amendments.
- Recommend conditions: CEMP, Biodiversity Gain Plan, landscape and ecological management plan (LEMP), lighting strategy.

## Quality Standards

- Reference specific NPPF paragraphs (174, 175, 180-182) by number.
- Reference the correct wildlife legislation for each species group (Habitats Regulations, WCA 1981, Badger Act 1992, NERC Act 2006).
- Reference the Environment Act 2021 BNG requirement.
- Reference CIEEM PEA and EcIA guidelines.
- Reference BS 42020:2013 where applicable.
- Use correct ecological terminology: Phase 1 habitat types, HSI, EPS, EPSML, CEMP, LEMP, BNG, DEFRA Metric.
- Follow the mitigation hierarchy explicitly (avoid, mitigate, compensate, enhance).
- Clearly distinguish between desk study findings and field survey data.
- Where field data has not been provided, clearly flag "[FIELD SURVEY DATA REQUIRED]" and recommend appropriate surveys with timing.
- Do not fabricate field survey results or species records. All species data must come from the desk study or user-provided information.
- Apply appropriate survey search radii for different designation levels.`;

export const PEA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction and Methodology',
    description: 'Background, brief, surveyor qualifications, limitations, and desk study/field survey methodology.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'State the PEA purpose and policy basis (NPPF Paragraph 180, Environment Act 2021). Identify the site by address, grid reference, and area. Summarise the proposed development. State qualifications or flag for professional review. Describe desk study data sources (MAGIC, LBRC, NBN, aerial photography). Define zones of influence for each designation level. Describe Phase 1 survey methodology if field data is available.',
    subsections: [
      {
        name: 'Background and Brief',
        description: 'Purpose, site identification, and scope of assessment.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'State the purpose, policy basis, site address, grid reference, area, proposed development, and limitations.',
      },
      {
        name: 'Methodology',
        description: 'Desk study and field survey methodology.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance: 'Describe desk study sources and search radii. Describe Phase 1 survey methodology if applicable. Define zones of influence.',
      },
    ],
  },
  {
    name: 'Desk Study Results',
    description: 'Statutory and non-statutory designated sites, protected species records, and habitats of principal importance.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'List all designated sites within the defined zones of influence with names, distances, and qualifying features. Summarise protected and notable species records within 2km by species group. Identify Habitats of Principal Importance from MAGIC and aerial photography. Assess potential for impacts on designated sites.',
    subsections: [
      {
        name: 'Statutory Designated Sites',
        description: 'SAC, SPA, Ramsar, SSSI, NNR, LNR within zones of influence.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'List each statutory site with name, distance, and qualifying features. Assess potential for impacts.',
      },
      {
        name: 'Non-Statutory Designated Sites',
        description: 'Local Wildlife Sites and other non-statutory designations within 1km.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'List non-statutory sites with name, distance, and ecological interest.',
      },
      {
        name: 'Protected and Notable Species Records',
        description: 'Species records within 2km organised by species group.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'Summarise records for bats, GCN, badger, reptiles, birds, dormouse, otter, water vole, invertebrates, plants.',
      },
      {
        name: 'Habitats of Principal Importance',
        description: 'NERC Act Section 41 priority habitats within or adjacent to the site.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Identify ancient woodland, priority habitats from MAGIC, hedgerows, ponds, traditional orchards.',
      },
    ],
  },
  {
    name: 'Phase 1 Habitat Survey',
    description: 'Description of habitats present on site using JNCC Phase 1 classification.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Describe each habitat type present using the JNCC Phase 1 classification. Assess condition and ecological value. Note invasive non-native species. If field data is not available, provide a preliminary assessment from aerial photography and clearly flag that field verification is required.',
  },
  {
    name: 'Protected Species Assessment',
    description: 'Assessment of potential for protected species presence based on habitat suitability and desk study records.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'For each species group (bats, GCN, badger, reptiles, breeding birds, dormouse, otter, water vole, others), assess habitat suitability and potential for presence. Recommend further surveys where required with survey type and timing. Reference species-specific legislation and Natural England standing advice.',
    subsections: [
      {
        name: 'Bats',
        description: 'Assessment of bat roost, commuting, and foraging potential.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Assess buildings and trees for roost potential. Assess habitats for commuting/foraging. Recommend surveys if moderate/high potential.',
      },
      {
        name: 'Great Crested Newt',
        description: 'Assessment of GCN potential based on pond proximity and habitat suitability.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Identify ponds within 500m. Assess terrestrial habitat. Recommend eDNA or traditional surveys if suitable.',
      },
      {
        name: 'Badger',
        description: 'Assessment of badger activity and habitat suitability.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Assess habitat suitability for foraging and sett construction. Note any evidence. Recommend survey if suitable.',
      },
      {
        name: 'Reptiles',
        description: 'Assessment of reptile habitat suitability.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Assess habitat features: south-facing slopes, rough grassland, scrub edges. Recommend presence/absence survey if suitable.',
      },
      {
        name: 'Breeding Birds',
        description: 'Assessment of nesting bird potential and Schedule 1 species.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Assess nesting habitat. Note Schedule 1 species records. Recommend timing constraints or pre-clearance checks.',
      },
      {
        name: 'Other Species',
        description: 'Assessment of potential for other protected or notable species.',
        required: false,
        min_words: 50,
        max_words: 200,
        guidance: 'Assess dormouse, otter, water vole, invertebrates, notable plants as relevant to site habitats.',
      },
    ],
  },
  {
    name: 'Ecological Constraints and Opportunities',
    description: 'Summary of ecological constraints on development and enhancement opportunities.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise constraints: designated sites, protected species, retained habitats, seasonal restrictions, watercourse buffers. Identify opportunities: habitat creation, species features (bat boxes, bird boxes, hedgehog highways), green infrastructure, ecological connectivity, SuDS with ecological design.',
    subsections: [
      {
        name: 'Constraints',
        description: 'Ecological constraints affecting development design or phasing.',
        required: true,
        min_words: 200,
        max_words: 450,
        guidance: 'List constraints from designated sites, protected species, habitats, seasonal restrictions, buffer zones.',
      },
      {
        name: 'Opportunities',
        description: 'Ecological enhancement opportunities within the development.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Identify habitat creation, species features, connectivity enhancements, and ecological SuDS design.',
      },
    ],
  },
  {
    name: 'Mitigation and Enhancement',
    description: 'Measures following the mitigation hierarchy: avoid, mitigate, compensate, enhance.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Apply the mitigation hierarchy. Describe avoidance measures (design changes, buffers, timing). Describe species-specific mitigation (licences, exclusion, translocation). Describe compensation (habitat creation to offset losses). Describe enhancements (bat bricks, bird boxes, native planting, hedgehog gates, sensitive lighting). Reference CEMP and ECoW requirements.',
    subsections: [
      {
        name: 'Avoidance',
        description: 'Design changes and timing restrictions to avoid ecological impacts.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Describe layout adjustments, buffer zones, and seasonal timing of works.',
      },
      {
        name: 'Mitigation',
        description: 'Species-specific and habitat mitigation measures.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Describe measures for each species group: licences, exclusion, translocation, CEMP, ECoW.',
      },
      {
        name: 'Compensation',
        description: 'Habitat compensation for unavoidable losses.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Quantify habitat loss and describe compensation: like-for-like or higher value habitat creation.',
      },
      {
        name: 'Enhancement',
        description: 'Ecological enhancements beyond mitigation.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Describe bat bricks/boxes, swift bricks, hedgehog gates, native planting, wildflower meadows, pond creation, sensitive lighting.',
      },
    ],
  },
  {
    name: 'Biodiversity Net Gain Considerations',
    description: 'Assessment of BNG requirements and preliminary approach to achieving 10% net gain.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'State the mandatory 10% BNG requirement (Environment Act 2021). Describe the DEFRA Metric 4.0 methodology. Provide a preliminary baseline assessment if habitat data is available. Describe the proposed approach to achieving net gain (on-site preferred, off-site, credits as last resort). Note the Biodiversity Gain Plan and 30-year management plan requirements. Reference the Small Sites Metric for minor developments.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of ecological baseline, constraints, further survey recommendations, and policy compliance.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise the ecological baseline. Summarise constraints and how they are addressed. List further surveys recommended with species, timing, and methodology. Confirm that with mitigation the development can proceed without significant ecological harm. Confirm BNG can be achieved. Confirm NPPF Paragraphs 174, 180-182 compliance. Note potential for additional requirements following further surveys. Recommend planning conditions.',
  },
];

export const PEA_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction and Methodology',
    'Desk Study Results',
    'Phase 1 Habitat Survey',
    'Protected Species Assessment',
    'Ecological Constraints and Opportunities',
    'Mitigation and Enhancement',
    'Biodiversity Net Gain Considerations',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const PEA_TEMPLATE = {
  assessment_type: 'Preliminary Ecological Appraisal',
  short_name: 'PEA',
  version: 1,
  sections: PEA_SECTIONS,
  quality_criteria: PEA_QUALITY,
};
