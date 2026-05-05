import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Parking Beat Survey -- a methodical survey of on-street and public
 * off-street parking occupancy in the vicinity of a development site.
 * Often required by local planning authorities (particularly London
 * boroughs using the Lambeth methodology) to demonstrate that existing
 * parking stress levels are understood and that the development will not
 * exacerbate on-street parking pressure beyond acceptable levels.
 *
 * This prompt produces a professional Parking Beat Survey report. The
 * output should read as though prepared by a transport consultant
 * experienced in UK parking survey methodology.
 */

export const PARKING_SURVEY_PROMPT = `You are preparing a Parking Beat Survey report to accompany a planning application submitted to a local planning authority in England.

## Document Purpose

A Parking Beat Survey measures the existing demand for on-street (and sometimes off-street) parking in the streets surrounding a proposed development site. It is used to:
1. Establish the existing parking stress (occupancy) levels on surrounding streets.
2. Determine the available spare parking capacity.
3. Assess whether the proposed development would generate additional parking demand that could be accommodated within the existing on-street capacity.
4. Inform the acceptability of the proposed on-site parking provision (or car-free/low-car development).

Parking surveys are frequently required for developments in urban areas where on-street parking is at a premium, particularly:
- Developments with nil or low parking provision (car-free or car-lite schemes).
- Developments where the highway authority is concerned about parking overspill.
- Developments in Controlled Parking Zones (CPZs) or areas proposed for CPZs.
- Developments in areas with known parking stress.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 107**: If setting local parking standards for residential and non-residential development, policies should take into account: a) the accessibility of the development; b) the type, mix and use of development; c) the availability of and opportunities for public transport; d) local car ownership levels; and e) the need to ensure an adequate provision of spaces for charging plug-in and other ultra-low emission vehicles.
- **Paragraph 108**: Maximum parking standards for residential and non-residential development should only be set where there is a clear and compelling justification that they are necessary for managing the local road network, or for optimising the density of development in city and town centres and other locations that are well served by public transport.
- **Paragraph 109**: Development should only be prevented or refused on highways grounds if there would be an unacceptable impact on highway safety, or the residual cumulative impacts on the road network would be severe.

### Local Parking Standards
- Reference the adopted local plan parking standards or SPD.
- State the applicable parking standard for the proposed development (maximum or minimum provision, or range).
- Note any CPZ restrictions, permit arrangements, and hours of operation.

### Survey Methodology Standards
- **Lambeth Methodology** (widely adopted across London and other urban authorities): Overnight parking surveys conducted between midnight and 05:30 to capture maximum residential parking demand.
  - Survey area: typically all streets within a 200m radius of the site boundary.
  - Survey timing: minimum of two surveys on different nights (typically one weekday night and one weekend night, or two weekday nights), conducted between midnight and 05:30.
  - Data recorded: number of parked vehicles on each street/section, total available kerbside parking capacity (in vehicles or metres), type of parking restriction (single yellow, double yellow, resident permit, pay and display, unrestricted).
  - Parking stress calculation: (number of parked vehicles / available capacity) x 100 = parking stress percentage.
  - Threshold: parking stress above 85% is generally considered to indicate that spare capacity is insufficient and the area is under significant parking pressure.

- **Alternative methodologies**: Some authorities require daytime surveys (e.g., weekday 10:00-12:00 and 14:00-16:00) to capture commercial/visitor parking demand. Others require 12-hour or 24-hour surveys. Always follow the specific methodology required by the local authority.

- **DCLG Residential Car Parking Research (2007)**: Research into residential parking demand and the relationship between parking provision and car ownership.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Parking Beat Survey and the context for its requirement.
- Identify the application site by full postal address.
- Summarise the proposed development: use, scale, number of units, proposed parking provision (including nil if car-free).
- State the local parking standard applicable to the development and how the proposed provision compares.
- State whether the site is within a Controlled Parking Zone (CPZ) and if so, the hours of operation and permit eligibility arrangements.
- Note any agreement with the highway authority on survey methodology and scope.
- Outline the document structure.

### 2. Survey Methodology (300-600 words)
- State the methodology used (Lambeth methodology, or other as specified by the LPA).
- Describe the survey area: define the extent (e.g., 200m radius from the site boundary), and list every street included by name.
- Describe the survey timing:
  - Dates of survey (day and date for each survey night/period).
  - Times of survey (e.g., midnight to 05:30, or as applicable).
  - Confirm that surveys were conducted during neutral periods (avoiding school holidays, bank holidays, and local events that could distort results).
- Describe what was recorded:
  - Total kerbside parking capacity for each street section (number of spaces or total length in metres divided by average car length of 5m or 6m as specified).
  - Number of vehicles parked on each street section at the time of survey.
  - Type of parking restriction on each section: unrestricted, single yellow line (with times), double yellow line, resident permit bay, pay and display, disabled bay, loading bay, other.
- Describe the capacity calculation methodology:
  - How available kerbside length was measured (e.g., excluding driveways, crossovers, double yellow lines, dropped kerbs, bus stops, junctions).
  - How capacity was converted to spaces (e.g., 5m per space or 6m per space).
- State who conducted the survey (independent surveyors, or flag as "[SURVEYS TO BE CONDUCTED BY INDEPENDENT FIRM]").
- Note any limitations or abnormal conditions observed during the survey.

### 3. Survey Area and Timing (300-600 words)
#### 3.1 Survey Area Definition
- Present a plan showing the survey area boundary and the streets surveyed. If no plan is provided, describe the boundary verbally and list all streets by name, grouped by sector or direction from the site.
- Justify the survey area extent (200m is standard; explain if a larger or smaller area has been used and why).
- Describe the character of the survey area: residential, commercial, mixed-use; Controlled Parking Zone or uncontrolled; on-street parking patterns.

#### 3.2 Survey Dates and Conditions
- State the date, day of the week, and time for each survey.
- Confirm weather conditions during each survey (clear, rain, etc.) and whether conditions may have affected results.
- Confirm that no local events, roadworks, or other abnormal conditions affected parking patterns.
- If surveys were affected by any abnormal conditions, describe the impact and any adjustments applied.

### 4. Results and Analysis (500-1500 words)
#### 4.1 Parking Capacity
- Present the total available parking capacity for each street section in the survey area.
- Distinguish between: unrestricted kerbside, single yellow line (available overnight), resident permit bays, pay and display, and other bay types.
- Calculate the total available overnight capacity (or total daytime capacity as applicable).
- Present data in tabular format:
  | Street Name | Section | Length (m) | Restrictions | Available Capacity (spaces) |

#### 4.2 Observed Parking Demand
- Present the number of vehicles observed parked on each street section for each survey period.
- Present data in tabular format:
  | Street Name | Section | Capacity | Survey 1 Count | Survey 1 Stress | Survey 2 Count | Survey 2 Stress |

#### 4.3 Parking Stress by Street
- Calculate the parking stress for each street section for each survey:
  - Parking stress = (vehicles observed / available capacity) x 100%.
- Present the results in tabular format.
- Highlight streets with parking stress above 85% (high stress) and below 85% (capacity available).
- Calculate the maximum parking stress observed across both surveys for each street.

#### 4.4 Overall Survey Area Analysis
- Calculate the total parking stress across the entire survey area for each survey.
- Calculate the total spare capacity (in spaces) across the survey area.
- Present the average and maximum parking stress for the survey area.
- Identify which streets have the most spare capacity and which are under the greatest pressure.
- Note any patterns: are streets closest to the site under more or less stress? Are controlled streets less stressed than uncontrolled streets?

### 5. Parking Stress Calculations and Development Impact (300-800 words)
#### 5.1 Existing Parking Stress Summary
- Summarise the existing parking stress: overall percentage, range (lowest to highest street), and spare capacity in spaces.
- State whether the survey area is above or below the 85% stress threshold.

#### 5.2 Anticipated Development Parking Demand
- Estimate the additional parking demand generated by the proposed development.
- For residential developments: use Census car ownership data for the ward to estimate car ownership per dwelling, or use the local authority's parking demand calculator if one exists.
- Deduct on-site parking provision from the estimated demand to calculate potential overspill.
- If the development is car-free with a CPZ restriction on resident permits, note this and adjust the overspill estimate accordingly.

#### 5.3 Post-Development Parking Stress
- Add the estimated overspill demand to the existing survey results.
- Recalculate the parking stress for the survey area with the development demand included.
- Determine whether the post-development parking stress remains below the 85% threshold.
- If parking stress exceeds 85%, quantify the shortfall and discuss mitigation.

#### 5.4 Mitigation
- If parking overspill is anticipated, describe mitigation measures:
  - CPZ restriction: the developer will not seek resident parking permits for occupiers (secured by condition or S106).
  - Travel Plan measures to reduce car ownership (car club, cycle provision, PT incentives).
  - On-site parking provision or off-site parking arrangements.
  - Contributions to CPZ implementation or extension.
- If parking stress remains below 85% with the development demand, confirm that the existing spare capacity can absorb the anticipated demand.

### 6. Conclusion (200-400 words)
- Summarise the survey methodology, area, and timing.
- Summarise the key findings: existing parking stress percentage and spare capacity.
- State the anticipated development parking demand and estimated overspill.
- State the post-development parking stress and confirm whether it is below 85%.
- If below 85%: conclude that the existing parking capacity can accommodate the development demand and that the proposal will not give rise to unacceptable parking stress.
- If above 85%: describe the mitigation measures and conclude on the net position.
- Confirm compliance with NPPF Paragraphs 107-108 and local parking policies.
- Confirm that the parking position does not give rise to a highway safety concern per NPPF Paragraph 109.

## Quality Standards

- Reference NPPF Paragraphs 107-109 by number.
- Reference the local parking standard and CPZ arrangements.
- Clearly state the survey methodology (Lambeth or other as specified).
- Present all data in tabular format: capacity, demand, and stress by street section.
- Calculate parking stress as a percentage using the standard formula.
- Apply the 85% stress threshold (or the threshold specified by the LPA).
- Use correct terminology: parking stress, parking capacity, beat survey, kerbside capacity, Controlled Parking Zone.
- Where survey data has not been provided, flag as "[PARKING SURVEY DATA TO BE INSERTED FROM INDEPENDENT SURVEY]" and present the methodology framework.
- Professional transport planning language throughout.`;

export const PARKING_SURVEY_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site identification, development summary, parking standard, and CPZ context.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the survey purpose and context. Identify the site. Summarise the proposal and parking provision. State the local parking standard. State CPZ status and permit eligibility. Note any LPA methodology agreement. Outline the document structure.',
  },
  {
    name: 'Survey Methodology',
    description: 'Survey approach, area definition, timing, data recorded, and capacity calculation.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'State the methodology (Lambeth or other). Define the survey area and list all streets. State dates, times, and neutral period confirmation. Describe what was recorded (capacity, vehicles, restrictions). Describe capacity calculation method (kerbside length / 5m or 6m). State who conducted the survey. Note any limitations.',
  },
  {
    name: 'Survey Area and Timing',
    description: 'Survey area plan/description, street listing, dates, and conditions.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Present the survey area boundary (plan or verbal description). List all streets by name. Justify the area extent. Describe the area character and CPZ coverage. State each survey date, day, time, and weather. Confirm no abnormal conditions affected results.',
    subsections: [
      {
        name: 'Survey Area Definition',
        description: 'Boundary, streets included, and area character.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Define the survey boundary (200m standard). List all streets. Describe area character and parking regime.',
      },
      {
        name: 'Survey Dates and Conditions',
        description: 'Dates, times, weather, and abnormal conditions.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'State each survey date, day, time. Confirm weather and neutral conditions. Note any abnormalities.',
      },
    ],
  },
  {
    name: 'Results and Analysis',
    description: 'Parking capacity, observed demand, stress calculations by street, and overall analysis.',
    required: true,
    min_words: 500,
    max_words: 1500,
    guidance:
      'Present capacity by street section in tabular format. Present vehicle counts for each survey. Calculate parking stress per street section (vehicles/capacity x 100). Highlight streets above/below 85%. Calculate total survey area stress and spare capacity. Identify patterns.',
    subsections: [
      {
        name: 'Parking Capacity',
        description: 'Available capacity by street section with restriction types.',
        required: true,
        min_words: 100,
        max_words: 350,
        guidance: 'Present capacity data in tabular format by street: length, restrictions, available spaces.',
      },
      {
        name: 'Observed Parking Demand',
        description: 'Vehicle counts for each survey period by street.',
        required: true,
        min_words: 100,
        max_words: 350,
        guidance: 'Present vehicle counts per survey in tabular format by street section.',
      },
      {
        name: 'Parking Stress by Street',
        description: 'Stress percentage calculations for each street and survey.',
        required: true,
        min_words: 100,
        max_words: 400,
        guidance: 'Calculate and present stress percentages. Highlight above/below 85%. Present maximum stress.',
      },
      {
        name: 'Overall Survey Area Analysis',
        description: 'Total stress, spare capacity, and spatial patterns.',
        required: true,
        min_words: 100,
        max_words: 350,
        guidance: 'Calculate total area stress and spare capacity. Identify spatial patterns and pressure points.',
      },
    ],
  },
  {
    name: 'Parking Stress Calculations and Development Impact',
    description: 'Existing stress summary, development demand, post-development stress, and mitigation.',
    required: true,
    min_words: 300,
    max_words: 800,
    guidance:
      'Summarise existing stress and spare capacity. Estimate development parking demand using Census car ownership data. Deduct on-site provision to calculate overspill. Calculate post-development stress. Assess against 85% threshold. Describe mitigation if needed (CPZ restriction, Travel Plan, car club).',
    subsections: [
      {
        name: 'Existing Parking Stress Summary',
        description: 'Summary of current stress levels and spare capacity.',
        required: true,
        min_words: 50,
        max_words: 150,
        guidance: 'Summarise overall stress percentage and spare capacity in spaces.',
      },
      {
        name: 'Anticipated Development Parking Demand',
        description: 'Estimated additional parking demand and overspill calculation.',
        required: true,
        min_words: 75,
        max_words: 250,
        guidance: 'Estimate demand from Census car ownership. Deduct on-site provision. Calculate overspill.',
      },
      {
        name: 'Post-Development Parking Stress',
        description: 'Recalculated stress with development demand included.',
        required: true,
        min_words: 75,
        max_words: 200,
        guidance: 'Add overspill to existing demand. Recalculate stress. Assess against 85% threshold.',
      },
      {
        name: 'Mitigation',
        description: 'Measures to address parking overspill if required.',
        required: false,
        min_words: 75,
        max_words: 200,
        guidance: 'Describe CPZ permit restrictions, Travel Plan measures, car club, or other mitigation.',
      },
    ],
  },
  {
    name: 'Conclusion',
    description: 'Summary of findings, post-development stress assessment, and policy compliance.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise methodology and key findings. State existing and post-development stress. Confirm whether stress is below 85%. Describe mitigation if needed. Confirm compliance with NPPF Paragraphs 107-109 and local parking policies. Confirm no highway safety concern.',
  },
];

export const PARKING_SURVEY_QUALITY: QualityCriteria = {
  min_policy_refs: 3,
  required_sections: [
    'Introduction',
    'Survey Methodology',
    'Survey Area and Timing',
    'Results and Analysis',
    'Parking Stress Calculations and Development Impact',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const PARKING_SURVEY_TEMPLATE = {
  assessment_type: 'Parking Beat Survey',
  short_name: 'PKS',
  version: 1,
  sections: PARKING_SURVEY_SECTIONS,
  quality_criteria: PARKING_SURVEY_QUALITY,
};
