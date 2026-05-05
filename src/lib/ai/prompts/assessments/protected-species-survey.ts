import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Protected Species Survey (Phase 2) -- required where a Preliminary Ecological
 * Appraisal (PEA) or other assessment has identified the potential for protected
 * species to be present on or near the application site, and further species-specific
 * surveys are needed to determine presence/absence, population size, and to inform
 * impact assessment, mitigation, and licensing requirements.
 *
 * AI Difficulty: Hard (10-30 pages). This is a desk-based template framework.
 * Actual field surveys MUST be conducted by appropriately licensed ecologists.
 * Survey data, results, and species-specific assessments must be provided by
 * the surveying ecologist.
 *
 * DISCLAIMER: This document is AI-generated and constitutes a draft framework only.
 * It MUST be reviewed, verified, and endorsed by a suitably qualified ecologist
 * (MCIEEM or equivalent) holding the appropriate survey licences before submission
 * to the local planning authority. Actual field surveys cannot be replicated by AI.
 */

export const PSS_PROMPT = `You are preparing a Protected Species Survey report (Phase 2 species-specific survey) to accompany a planning application submitted to a local planning authority in England. The report should read as though prepared by a suitably qualified and licensed ecologist (MCIEEM or equivalent) with experience of the relevant species group(s).

IMPORTANT DISCLAIMER: This document is AI-generated and constitutes a draft framework only. It MUST be reviewed, verified, and endorsed by a suitably qualified ecologist (MCIEEM or equivalent) holding the appropriate species survey licences before submission to the local planning authority. Actual field surveys -- including bat emergence/re-entry surveys, great crested newt eDNA or population surveys, reptile presence/absence surveys, badger sett surveys, and all other species-specific surveys -- MUST be conducted in the field by licensed ecologists. The AI cannot conduct field surveys and no survey data should be fabricated. Where survey data has not been provided by the user, it must be clearly flagged as "[FIELD SURVEY DATA REQUIRED]".

## Document Purpose

A Protected Species Survey report must:
1. Present the results of Phase 2 species-specific surveys conducted following the relevant survey guidelines and best practice.
2. Determine the presence or likely absence of protected species on and near the site.
3. Where species are present, characterise the population (size, distribution, status) and describe how the site is used (e.g., roosting, breeding, foraging, commuting).
4. Assess the likely impact of the proposed development on the identified protected species and their habitats.
5. Set out a mitigation strategy following the mitigation hierarchy (avoid, mitigate, compensate, enhance).
6. Identify any licensing requirements (European Protected Species Mitigation Licence, badger licence, etc.) and describe the proposed approach to obtaining the necessary licences.
7. Provide sufficient information for the local planning authority to discharge its duties under the relevant wildlife legislation.

## Key Legislation and Policy References

### Conservation of Habitats and Species Regulations 2017 (as amended) ("Habitats Regulations")
- Regulation 43: Offences relating to European Protected Species (EPS):
  - Deliberately capture, injure, or kill an EPS animal (Schedule 2: all bat species, great crested newt, dormouse, otter, natterjack toad, sand lizard, smooth snake, pool frog, large blue butterfly, sturgeon).
  - Deliberately disturb an EPS animal (disturbance includes impairing ability to survive, breed, rear young, hibernate, migrate, or significantly affecting local distribution or abundance).
  - Damage or destroy a breeding site or resting place of an EPS animal.
- Regulation 55: Derogation licences -- three tests must be satisfied:
  1. The action is for a purpose listed in Regulation 55(2) (e.g., preserving public health/safety, or for imperative reasons of overriding public interest including social or economic reasons).
  2. There is no satisfactory alternative.
  3. The action will not be detrimental to the maintenance of the population of the species at a favourable conservation status in their natural range.

### Wildlife and Countryside Act 1981 (as amended)
- **Section 1**: Protection of wild birds -- offence to intentionally kill, injure, or take any wild bird; take, damage, or destroy the nest of any wild bird while in use or being built; take or destroy an egg of any wild bird. Schedule 1 birds have additional protection (disturbance at/near nest).
- **Section 9**: Protection of certain animals listed on Schedule 5:
  - Full protection (as for EPS): water vole, red squirrel.
  - Partial protection (killing/injuring and sale only): common reptiles (common lizard, slow worm, grass snake, adder).
- **Section 13**: Protection of certain plants listed on Schedule 8.
- **Section 14**: Prevention of introduction of non-native species listed on Schedule 9.

### Protection of Badgers Act 1992
- Offence to wilfully kill, injure, or take a badger.
- Offence to interfere with a badger sett: damage, destroy, obstruct access, cause a dog to enter, or disturb a badger while occupying a sett.
- Licences available from Natural England for development purposes (sett closure permitted August-November, or with specific justification at other times).

### Natural Environment and Rural Communities Act 2006 (NERC Act)
- **Section 40**: Public authorities must have regard to conserving biodiversity.
- **Section 41**: Lists habitats and species of principal importance for conserving biodiversity in England ("Section 41 species").

### Environment Act 2021
- Mandatory Biodiversity Net Gain of minimum 10% for developments subject to planning permission.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 174**: Protecting and enhancing the natural environment, minimising impacts on biodiversity, providing net gains.
- **Paragraph 180**: Mitigation hierarchy -- refuse permission where significant harm cannot be avoided, mitigated, or compensated.
- **Paragraph 180(c)**: Irreplaceable habitats -- refuse unless wholly exceptional reasons.
- **Paragraph 181**: Habitats sites -- presumption in favour does not apply; appropriate assessment required.
- **Paragraph 182**: Same protection for potential SPAs, possible SACs, and proposed Ramsar sites.

### Species-Specific Survey Guidelines
- **Bats**: Bat Conservation Trust (BCT) Bat Surveys for Professional Ecologists: Good Practice Guidelines (4th Edition, 2023). Collins, J. (ed.). Covers:
  - Preliminary Roost Assessment (PRA) of buildings and trees.
  - Emergence/re-entry surveys (dusk/dawn): minimum 2 surveys for moderate potential structures/trees, minimum 3 for high potential, conducted May-September (optimal May-August), at least one in peak season.
  - Activity/transect surveys: monthly walked transects and/or static detector deployments during the active season.
  - Habitat assessment for foraging and commuting.
- **Great Crested Newt (GCN)**: English Nature Great Crested Newt Mitigation Guidelines (2001). Natural England standing advice. Preferred survey methods:
  - eDNA survey of ponds (April-June, single visit per pond, laboratory analysis).
  - Traditional presence/absence surveys: torch survey, bottle trapping, egg searching, netting, refugia (4 survey visits in March-June, including at least 2 in mid-April to mid-May).
  - Population size class assessment: 6 survey visits to determine small (<10), medium (10-100), large (>100) population.
  - Habitat Suitability Index (HSI) assessment of ponds.
- **Reptiles**: Froglife Advice Sheet 10 -- Reptile Survey (1999). Herpetological Conservation Trust guidelines:
  - 7 survey visits between April-September (optimal April-May and September).
  - Use of artificial refugia (corrugated tin/bitumen felt) placed at least 2 weeks before first survey.
  - Survey in suitable weather conditions: 9-18 degrees C, overcast, low wind.
  - Peak counts to determine population size: low (<5), good (5-20), exceptional (>20) per hectare.
- **Badger**: Scottish Natural Heritage (NatureScot) guidance, Natural England standing advice:
  - Search for setts within 30m of the development boundary (50m for major developments).
  - Classify setts: main, annexe, subsidiary, outlier.
  - Record signs of activity: bedding, latrines, paths, hair, footprints, snuffle holes.
  - Bait marking survey to determine territory boundaries (where relevant).
- **Breeding Birds**: British Trust for Ornithology (BTO) Common Birds Census methodology, RSPB guidance:
  - Breeding bird survey: minimum 3 visits (dawn chorus) during April-June.
  - Winter bird survey (if relevant): October-March.
  - Schedule 1 species: specialised survey if potential habitat present.
- **Dormouse**: Natural England dormouse survey guidance:
  - Nest tube survey: 50 tubes per hectare, checked monthly May-November.
  - Index of probability based on monthly scores.
- **Water Vole**: Dean, M. et al. Water Vole Conservation Handbook (3rd Edition, 2016):
  - Two surveys: April-June and July-September.
  - Search for latrines, burrows, feeding stations, runways.
- **Otter**: Natural England standing advice, Chanin, P. Monitoring the Otter (2003):
  - Search for spraints, footprints, slides, holts, couches within 250m of watercourses.

### Other Key References
- Natural England standing advice on protected species (species-specific web pages).
- CIEEM Guidelines for Ecological Impact Assessment in the UK and Ireland (2018, updated 2022).
- BS 42020:2013 Biodiversity -- Code of practice for planning and development.

## Section-by-Section Guidance

### 1. Introduction (300-600 words)
- State the purpose of the Protected Species Survey report and the legislative/policy context.
- Identify the site: full postal address, grid reference, site area.
- Summarise the proposed development.
- Explain why the Phase 2 survey was required (reference the Preliminary Ecological Appraisal/Phase 1 findings that triggered the survey).
- Identify the species group(s) surveyed (bats, GCN, reptiles, badger, breeding birds, dormouse, water vole, otter, etc.).
- State the qualifications and licence numbers of the surveying ecologist(s) (or "[SURVEYS CONDUCTED BY LICENSED ECOLOGIST -- LICENCE DETAILS TO BE INSERTED]").
- State any limitations of the survey.
- Include the AI-generated disclaimer.

### 2. Policy and Legislative Framework (400-800 words)
- Set out the relevant legislation for each species group surveyed:
  - Habitats Regulations 2017: for EPS (bats, GCN, dormouse, otter, etc.) -- Regulation 43 offences and Regulation 55 derogation licence tests.
  - Wildlife and Countryside Act 1981: for Schedule 5 species (water vole, common reptiles) and Schedule 1 birds.
  - Protection of Badgers Act 1992: for badger.
  - NERC Act 2006 Section 41: for species of principal importance.
- Set out NPPF paragraphs 174, 180-182.
- Reference relevant local plan ecology policies.
- Explain the legal implications: what constitutes an offence, what licences are required, and the three derogation tests for EPS.

### 3. Methodology (500-1000 words)
- For each species group surveyed, describe the survey methodology in detail:
  - Survey guidelines followed (BCT, English Nature, Froglife, etc.).
  - Survey dates and times.
  - Number of survey visits and spacing.
  - Survey techniques used (emergence/re-entry, eDNA, refugia, torch survey, transect, nest tubes, etc.).
  - Equipment used (bat detectors: make, model; eDNA kits; artificial refugia materials; etc.).
  - Personnel: surveyor names, qualifications, licence numbers (or "[TO BE INSERTED]").
  - Survey area and extent.
  - Weather conditions during each survey visit (temperature, wind speed, cloud cover, precipitation).
  - Constraints and limitations: suboptimal weather, access restrictions, seasonal limitations, equipment issues.
- Reference the specific survey guidelines and explain any departures from standard methodology.
- If survey data has not been provided, flag clearly: "[FIELD SURVEY DATA REQUIRED -- THE FOLLOWING METHODOLOGY DESCRIBES THE SURVEYS THAT SHOULD BE UNDERTAKEN]".

### 4. Survey Conditions (200-400 words)
- Present a table of survey conditions for each survey visit:
  - Date.
  - Start and end time.
  - Surveyor(s).
  - Weather: temperature (start/end), wind speed (Beaufort scale), cloud cover (oktas or %), precipitation.
  - Sunset/sunrise time (for bat surveys).
  - Survey method.
  - Whether conditions were suitable/optimal for the survey.
- Confirm that surveys were conducted within the optimal survey period and in suitable weather conditions.
- Note any surveys conducted in suboptimal conditions and explain the implications for the reliability of results.

### 5. Survey Results (600-1500 words)
- Present the survey results for each species group:

#### 5.1 Bat Survey Results (if applicable)
- PRA results: roost potential classification for each building/tree (negligible, low, moderate, high).
- Emergence/re-entry survey results: species recorded, numbers, behaviour (emerging, re-entering, commuting, foraging), roost locations, timing.
- Activity survey results: species recorded, activity levels, key commuting/foraging areas.
- Static detector results: species, number of registrations, temporal patterns.
- Roost characterisation: species, roost type (day, night, transitional, maternity, hibernation), population estimate.

#### 5.2 Great Crested Newt Survey Results (if applicable)
- HSI scores for surveyed ponds.
- eDNA results (positive/negative for each pond).
- Traditional survey results: species, counts per visit, peak count, population size class.
- Terrestrial habitat assessment.

#### 5.3 Reptile Survey Results (if applicable)
- Results for each survey visit: species, count, location, weather conditions.
- Peak count for each species.
- Population estimate: low, good, or exceptional.
- Distribution map of records across the site.

#### 5.4 Badger Survey Results (if applicable)
- Number and classification of setts found (main, annexe, subsidiary, outlier).
- Activity levels at each sett (well-used, partially used, disused).
- Signs of badger activity: latrines, paths, hair, footprints, snuffle holes.
- Estimated number of social groups.

#### 5.5 Other Species Results
- Breeding bird survey results: species list, breeding status, notable species.
- Dormouse: nest tube results, presence/absence.
- Water vole: signs recorded, burrow density, population estimate.
- Otter: spraints, footprints, holts/couches.

- If survey data has not been provided, state clearly for each section: "[SURVEY RESULTS TO BE INSERTED BY LICENSED SURVEYOR]".
- Do not fabricate survey results or species records.

### 6. Impact Assessment (500-1000 words)
- For each species/group confirmed present (or assumed present for precautionary assessment):
  - Describe the current use of the site by the species (roosting, breeding, foraging, commuting, shelter).
  - Describe the nature of the impact from the proposed development:
    - Direct habitat loss: quantify the area/length of habitat affected.
    - Disturbance during construction: noise, vibration, lighting, human presence.
    - Fragmentation of habitat connectivity.
    - Injury/killing risk during construction (e.g., vegetation clearance, demolition, excavation).
    - Indirect effects: changes to hydrology, air quality, lighting regimes.
  - Assess the significance of the impact on the local population:
    - Apply CIEEM EcIA methodology: characterise the importance of the ecological feature (international, national, regional, county, local, site), then assess the magnitude of impact (major, moderate, minor, negligible), and determine significance.
    - Consider the conservation status of the species.
  - Identify whether the impact triggers a licensing requirement.

### 7. Mitigation Strategy (600-1200 words)
- Apply the mitigation hierarchy for each species:

#### 7.1 Avoidance
- Design changes to avoid impacts: retaining roosts, maintaining habitat connectivity, buffer zones around setts, retention of ponds and terrestrial habitat.
- Seasonal timing of works: avoid bird nesting season (March-August), bat active season for roost disturbance (May-September, with hibernation period November-March also critical), reptile hibernation period, GCN breeding season.

#### 7.2 Mitigation
- Species-specific mitigation measures:
  - **Bats**: If roost loss is unavoidable -- EPS Mitigation Licence required. Replacement roost provision (bat boxes, integrated bat bricks, purpose-built bat loft/structure). Sensitive lighting scheme following BCT/ILP Guidance Note 08/23.
  - **GCN**: If GCN habitat is affected -- EPS Mitigation Licence or District Level Licensing (DLL) scheme. Exclusion fencing and pitfall trapping during active season. Receptor site preparation. Pond creation.
  - **Reptiles**: Phased habitat manipulation and capture/translocation to a prepared receptor site. Reptile fencing to prevent recolonisation during construction.
  - **Badger**: Natural England licence for sett closure (closure permitted August-November using one-way gates). Artificial sett provision. Buffer zones maintained around active setts retained.
  - **Breeding birds**: Vegetation clearance outside nesting season (March-August) or under supervision of ECoW with pre-clearance nest check.
  - **Dormouse**: EPS Mitigation Licence for habitat removal. Nest box provision. Habitat creation and connectivity.
  - **Water vole**: Conservation licence for displacement or translocation. Habitat creation along watercourses.
  - **Otter**: EPS Mitigation Licence if holts/couches affected. Artificial holt provision. Buffer zones around holts.

#### 7.3 Compensation
- Where habitat loss is unavoidable, describe compensation measures:
  - Like-for-like habitat creation or habitat of higher ecological value.
  - Quantify habitat loss and compensation ratios (typically minimum 2:1 for semi-natural habitats).
  - Receptor site details (location, size, habitat condition, management).

#### 7.4 Enhancement
- Describe ecological enhancements beyond mitigation:
  - Integrated bat bricks and bird boxes in new buildings.
  - Hedgehog highways (13cm gaps in boundary fences).
  - Native species planting (locally sourced stock).
  - Wildlife-sensitive lighting design.
  - Wildflower meadow creation.
  - Pond creation or enhancement.

### 8. Licensing Requirements (300-600 words)
- For each species requiring a licence:
  - State the type of licence required:
    - European Protected Species Mitigation Licence (EPSML) from Natural England for bats, GCN, dormouse, otter.
    - Badger development licence from Natural England.
    - District Level Licensing (DLL) for GCN (where available).
  - Describe the three derogation tests for EPS licensing:
    1. Purpose: the development meets an imperative reason of overriding public interest (e.g., housing delivery).
    2. No satisfactory alternative: the development cannot reasonably be modified to avoid the impact.
    3. Favourable conservation status: the licence will not be detrimental to the maintenance of the population at a favourable conservation status (the mitigation strategy must demonstrate this).
  - Describe the information required for the licence application: Method Statement, Reasoned Statement (addressing the three tests), mitigation plan, monitoring plan.
  - Describe the timing of the licence application relative to the planning process (licence cannot be applied for until planning permission is granted, but the LPA must be satisfied that a licence is likely to be granted -- the "Regulation 55 test" applied by the LPA at determination).
  - State that Natural England will be the licensing authority and describe the expected timeline for licence determination.

### 9. Conclusion (300-600 words)
- Summarise the species confirmed present (or assumed present) on the site.
- Summarise the significance of impacts.
- Summarise the mitigation strategy and confirm that it follows the mitigation hierarchy.
- Confirm that with the proposed mitigation, the development will not result in a detrimental effect on the favourable conservation status of any protected species population.
- Confirm that the three derogation tests for EPS licensing can be met (where relevant).
- Confirm compliance with the Habitats Regulations 2017, Wildlife and Countryside Act 1981, Protection of Badgers Act 1992, and NPPF Paragraphs 174, 180-182.
- Recommend planning conditions: CEMP (Biodiversity), pre-commencement surveys, ECoW, LEMP, lighting strategy.
- Note that the survey results are valid for a limited period (typically 1-2 years for most species, 1 year for bats per BCT guidelines) and that update surveys may be required if development is delayed.
- State the AI-generated disclaimer and professional endorsement requirement.

## Quality Standards

- Reference the Conservation of Habitats and Species Regulations 2017, including Regulation 43 (offences) and Regulation 55 (derogation licences), by specific regulation numbers.
- Reference the Wildlife and Countryside Act 1981 Sections 1 and 9 by section number.
- Reference the Protection of Badgers Act 1992 where badgers are relevant.
- Reference specific NPPF paragraphs (174, 180-182) by number.
- Reference the correct species-specific survey guidelines by name and edition (BCT 4th Edition 2023, English Nature GCN Mitigation Guidelines 2001, Froglife Advice Sheet 10, etc.).
- Use correct ecological terminology: EPS, EPSML, derogation tests, favourable conservation status, mitigation hierarchy, HSI, eDNA, PRA.
- Present survey conditions in tabular format.
- Where survey data has not been provided, clearly flag "[FIELD SURVEY DATA REQUIRED]" and do not fabricate results.
- Do not fabricate species records, population counts, or survey observations.
- Clearly state surveyor qualifications and licence numbers (or flag for insertion).
- Address the shelf-life of survey data and the potential need for update surveys.
- Maintain professional ecological report language throughout.`;

export const PSS_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description:
      'Purpose, site identification, proposed development, reason for Phase 2 survey, species groups, surveyor qualifications, and limitations.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the purpose and legislative/policy context. Identify the site (address, NGR, area). Summarise the proposed development. Explain why Phase 2 surveys were triggered (reference PEA findings). Identify species groups surveyed. State surveyor qualifications and licence numbers. Note limitations. Include AI disclaimer.',
  },
  {
    name: 'Policy and Legislative Framework',
    description:
      'Relevant wildlife legislation, NPPF policies, and local plan ecology policies for each species group.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out Habitats Regulations 2017 (Reg 43 offences, Reg 55 licence tests) for EPS. Set out WCA 1981 Sections 1 and 9 for birds and Schedule 5 species. Set out Protection of Badgers Act 1992. Reference NERC Act Section 41. Set out NPPF Paragraphs 174, 180-182. Identify local plan ecology policies. Explain legal implications and licence requirements.',
  },
  {
    name: 'Methodology',
    description:
      'Detailed survey methodology for each species group following published guidelines.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'For each species group: describe guidelines followed, survey dates, number of visits, techniques, equipment, personnel (qualifications, licences), survey area, weather constraints, limitations. Reference specific guidelines by name and edition. Flag if survey data not yet available.',
  },
  {
    name: 'Survey Conditions',
    description:
      'Tabulated survey conditions for each visit including date, time, weather, and suitability.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Present table: date, start/end time, surveyor(s), temperature, wind (Beaufort), cloud cover, precipitation, sunrise/sunset, method, suitability. Confirm surveys within optimal period and suitable conditions. Note any suboptimal visits and implications.',
  },
  {
    name: 'Survey Results',
    description:
      'Detailed presentation of survey results for each species group including species, numbers, behaviour, and distribution.',
    required: true,
    min_words: 600,
    max_words: 1500,
    guidance:
      'Present results for each species group. Bats: PRA classification, emergence/re-entry results (species, numbers, timing, roost type), activity results. GCN: HSI, eDNA, traditional survey counts, population size class. Reptiles: species, peak counts, population estimate. Badger: sett classification, activity. Birds: species list, breeding status. Other species as relevant. Do not fabricate data.',
    subsections: [
      {
        name: 'Bat Survey Results',
        description: 'PRA classification, emergence/re-entry results, activity surveys, roost characterisation.',
        required: false,
        min_words: 150,
        max_words: 500,
        guidance:
          'Present PRA results. Present emergence/re-entry data: species, numbers, behaviour, timing, roost locations. Present activity data. Characterise roosts: species, type, population.',
      },
      {
        name: 'Great Crested Newt Survey Results',
        description: 'HSI, eDNA, traditional survey results, population size class.',
        required: false,
        min_words: 100,
        max_words: 350,
        guidance:
          'Present HSI scores. Present eDNA results per pond. Present traditional survey counts and peak count. State population size class.',
      },
      {
        name: 'Reptile Survey Results',
        description: 'Species, counts, peak counts, population estimate, and distribution.',
        required: false,
        min_words: 100,
        max_words: 300,
        guidance:
          'Present results per visit with species and count. State peak count per species. Estimate population size (low/good/exceptional). Describe distribution.',
      },
      {
        name: 'Badger Survey Results',
        description: 'Sett locations, classification, activity levels, and signs.',
        required: false,
        min_words: 75,
        max_words: 250,
        guidance:
          'Describe setts found: location, classification, activity level. Describe signs: latrines, paths, hair, footprints. Estimate social groups.',
      },
      {
        name: 'Other Species Results',
        description: 'Results for breeding birds, dormouse, water vole, otter, and other species.',
        required: false,
        min_words: 75,
        max_words: 300,
        guidance:
          'Present results for other species surveyed. Include species list, status, and notable records.',
      },
    ],
  },
  {
    name: 'Impact Assessment',
    description:
      'Assessment of development impacts on each confirmed or assumed-present species, following CIEEM EcIA methodology.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'For each species: describe current use of site, describe nature of impact (habitat loss, disturbance, fragmentation, injury/killing, indirect effects), quantify habitat affected, assess significance using CIEEM EcIA methodology (importance of feature, magnitude of impact), consider conservation status, identify licensing triggers.',
  },
  {
    name: 'Mitigation Strategy',
    description:
      'Species-specific mitigation following the mitigation hierarchy: avoid, mitigate, compensate, enhance.',
    required: true,
    min_words: 600,
    max_words: 1200,
    guidance:
      'Apply mitigation hierarchy. Avoidance: design changes, buffers, seasonal timing. Mitigation: species-specific measures (bat boxes/roosts, GCN exclusion and translocation, reptile translocation, badger sett closure, nesting bird timing, dormouse nest boxes, water vole displacement). Compensation: habitat creation with ratios. Enhancement: integrated features (bat bricks, bird boxes, hedgehog highways, native planting, sensitive lighting).',
    subsections: [
      {
        name: 'Avoidance',
        description: 'Design changes and seasonal timing to avoid impacts.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance:
          'Describe layout adjustments, buffer zones, retention of key habitats, seasonal restrictions.',
      },
      {
        name: 'Mitigation',
        description: 'Species-specific mitigation measures and licensing approach.',
        required: true,
        min_words: 200,
        max_words: 500,
        guidance:
          'Describe measures for each species: replacement roosts, exclusion/translocation, sett closure, nesting season avoidance. Reference licences required.',
      },
      {
        name: 'Compensation and Enhancement',
        description: 'Habitat compensation for losses and ecological enhancements.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance:
          'Describe habitat creation and compensation ratios. Describe enhancements: bat bricks, bird boxes, hedgehog gates, native planting, sensitive lighting, pond creation.',
      },
    ],
  },
  {
    name: 'Licensing Requirements',
    description:
      'Identification of licences required, derogation tests, and licensing process.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'For each species requiring a licence: state licence type (EPSML, badger licence, DLL). Describe the three derogation tests for EPS. Describe licence application process, information required, timing relative to planning, and expected timeline. Note that LPA must apply the Regulation 55 test at determination.',
  },
  {
    name: 'Conclusion',
    description:
      'Summary of species present, impacts, mitigation, licensing, policy compliance, and recommended conditions.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Summarise species confirmed present. Summarise impact significance. Summarise mitigation strategy and confirm mitigation hierarchy applied. Confirm favourable conservation status maintained. Confirm derogation tests can be met. Confirm compliance with Habitats Regulations, WCA 1981, Badger Act, NPPF. Recommend conditions: CEMP, pre-commencement surveys, ECoW, LEMP, lighting. Note survey data validity period. State AI disclaimer.',
  },
];

export const PSS_QUALITY: QualityCriteria = {
  min_policy_refs: 8,
  required_sections: [
    'Introduction',
    'Policy and Legislative Framework',
    'Methodology',
    'Survey Conditions',
    'Survey Results',
    'Impact Assessment',
    'Mitigation Strategy',
    'Licensing Requirements',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const PSS_TEMPLATE = {
  assessment_type: 'Protected Species Survey (Phase 2)',
  short_name: 'PSS',
  version: 1,
  sections: PSS_SECTIONS,
  quality_criteria: PSS_QUALITY,
};
