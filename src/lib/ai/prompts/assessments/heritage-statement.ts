import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Heritage Statement -- required for applications affecting designated and
 * non-designated heritage assets, including listed buildings, conservation
 * areas, scheduled monuments, registered parks and gardens, and their settings.
 *
 * The Heritage Statement demonstrates compliance with the NPPF heritage
 * policies (Paragraphs 189-208) and the statutory duties under the Planning
 * (Listed Buildings and Conservation Areas) Act 1990.
 */

export const HERITAGE_PROMPT = `You are preparing a Heritage Statement to accompany a planning application that affects one or more heritage assets in England.

## Document Purpose

A Heritage Statement is required by NPPF Paragraph 200 to provide a proportionate level of information about the significance of heritage assets affected by a development proposal and the impact of the proposal on that significance. The level of detail should be proportionate to the importance of the asset and no more than is sufficient to understand the potential impact.

The Heritage Statement must:
- Identify all heritage assets that may be affected by the proposal, including those whose settings may be affected.
- Describe and assess the significance of each heritage asset, including any contribution made by its setting.
- Assess the impact of the proposed development on the significance of each heritage asset.
- Where harm to significance is identified, demonstrate that the harm is justified and that appropriate mitigation or enhancement measures are proposed.

## Key Policy and Legislation References

### Planning (Listed Buildings and Conservation Areas) Act 1990
- **Section 16(2)**: In considering whether to grant listed building consent, the LPA shall have special regard to the desirability of preserving the building or its setting or any features of special architectural or historic interest which it possesses.
- **Section 66(1)**: In considering whether to grant planning permission for development which affects a listed building or its setting, the LPA shall have special regard to the desirability of preserving the building or its setting or any features of special architectural or historic interest which it possesses.
- **Section 72(1)**: In the exercise of any planning functions, with respect to any buildings or other land in a Conservation Area, special attention shall be paid to the desirability of preserving or enhancing the character or appearance of that area.

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 189**: Heritage assets are an irreplaceable resource, and should be conserved in a manner appropriate to their significance.
- **Paragraph 190**: Plans should set out a positive strategy for the conservation and enjoyment of the historic environment.
- **Paragraph 194**: In determining applications, LPAs should require an applicant to describe the significance of any heritage assets affected, including any contribution made by their setting. The level of detail should be proportionate.
- **Paragraph 195**: LPAs should identify and assess the particular significance of any heritage asset that may be affected, taking account of available evidence and any necessary expertise.
- **Paragraph 196**: Where there is evidence of deliberate neglect or damage, this should not be taken into account.
- **Paragraph 197**: In determining applications, LPAs should take account of the desirability of sustaining and enhancing significance, the positive contribution that conservation of heritage assets can make to sustainable communities, and the desirability of new development making a positive contribution to local character and distinctiveness.
- **Paragraph 199**: When considering the impact of a proposed development on the significance of a designated heritage asset, great weight should be given to the asset's conservation. The more important the asset, the greater the weight should be.
- **Paragraph 200**: Any harm to, or loss of, the significance of a designated heritage asset should require clear and convincing justification. Substantial harm to Grade II listed buildings, registered parks and gardens, or battlefields should be exceptional. Substantial harm to Grade I or II* listed buildings, scheduled monuments, or registered battlefields should be wholly exceptional.
- **Paragraph 201**: Where a proposed development will lead to substantial harm to or total loss of significance of a designated heritage asset, consent should be refused unless it can be demonstrated that the substantial harm or total loss is necessary to achieve substantial public benefits.
- **Paragraph 202**: Where a development proposal will lead to less than substantial harm to the significance of a designated heritage asset, this harm should be weighed against the public benefits of the proposal.
- **Paragraph 203**: The effect of an application on the significance of a non-designated heritage asset should be taken into account. A balanced judgement should be applied, having regard to the scale of any harm or loss and the significance of the heritage asset.
- **Paragraph 205**: LPAs should require developers to record and advance understanding of the significance of any heritage assets to be lost in a manner proportionate to their importance and the impact.
- **Paragraph 206**: LPAs should look for opportunities for new development within Conservation Areas and within the setting of heritage assets to enhance or better reveal their significance.
- **Paragraph 207**: Not all elements of a Conservation Area or World Heritage Site will necessarily contribute to its significance.
- **Paragraph 208**: LPAs should assess whether the benefits of a proposal for enabling development which would otherwise conflict with planning policies but which would secure the future conservation of a heritage asset outweigh the disbenefits.

### Historic England Guidance
- The Setting of Heritage Assets (GPA 3, 2017): A five-step methodology for assessing setting.
- Conservation Principles, Policies and Guidance (2008): Framework for understanding heritage significance.
- Statements of Heritage Significance (Historic England Advice Note 12, 2019).
- Managing Significance in Decision-Taking in the Historic Environment (GPA 2, 2015).
- The Historic Environment in Local Plans (GPA 1, 2015).
- Making Changes to Heritage Assets (Historic England Advice Note 2, 2016).

### Heritage Significance Framework
Heritage significance comprises up to four types of interest (per Conservation Principles and NPPF):
- **Archaeological interest**: Potential to yield evidence about the past through physical remains.
- **Architectural interest**: Design, craftsmanship, decorative quality, or innovation of a building.
- **Artistic interest**: Human creative skill, including art, sculpture, and landscape design.
- **Historic interest**: Association with notable people, events, or aspects of social, economic, cultural, or military history.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Heritage Statement and the NPPF Paragraph 194 requirement.
- Identify the site and the proposed development.
- Identify the heritage assets considered in the assessment: listed buildings, conservation areas, scheduled monuments, registered parks and gardens, and non-designated heritage assets.
- State the methodology and guidance used.
- Outline the document structure.

### 2. Heritage Policy Framework (400-800 words)
- Set out the statutory duties: Section 66(1) and Section 72(1) of the 1990 Act.
- Set out the NPPF heritage policies (Paragraphs 189-208) with a summary of each key paragraph.
- Identify relevant local plan heritage policies and quote the most important requirements.
- Reference relevant Historic England guidance documents used in the assessment.
- Note any local heritage-specific SPDs, conservation area appraisals, or management plans.

### 3. Historical Background (400-800 words)
- Provide a concise history of the area and the heritage assets.
- Describe how the site and its surroundings have developed over time (using historic maps, records, and published histories).
- For listed buildings: date of construction, architect (if known), original purpose, subsequent alterations.
- For Conservation Areas: date of designation, reasons for designation, character and appearance.
- For scheduled monuments: nature and date of the remains, relationship to the wider landscape.
- Reference the Historic Environment Record (HER), the National Heritage List for England (NHLE), and any conservation area appraisal.
- Provide NHLE list entry numbers for designated heritage assets.

### 4. Assessment of Significance (500-1000 words)
For each heritage asset identified, assess significance under the four types of interest:

#### 4.1 Architectural Interest
- Describe the architectural qualities: style, form, materials, plan, craftsmanship, details, spatial qualities.
- Note the relative importance: is this a good, exceptional, or modest example of its type?
- Identify features of special interest noted in the listing description (for listed buildings).

#### 4.2 Historic Interest
- Describe associations with notable people, events, or historical themes.
- Describe the development of the asset over time and what this reveals about history.
- Assess the illustrative and associative value of the asset.

#### 4.3 Archaeological Interest
- Assess the potential for below-ground archaeological remains.
- Reference the HER and any archaeological desk-based assessment.
- Assess the significance of any known or potential archaeological remains.

#### 4.4 Artistic Interest
- Where applicable, describe artistic qualities: sculpture, decorative schemes, designed landscapes.
- Assess the artistic significance in relation to the asset's heritage value.

#### 4.5 Contribution of Setting
- Apply the Historic England five-step methodology (GPA 3):
  Step 1: Identify which heritage assets and their settings are affected.
  Step 2: Assess the degree to which these settings and views make a contribution to the significance of the heritage asset(s) or allow significance to be appreciated.
  Step 3: Assess the effects of the proposed development, whether beneficial or harmful, on the significance or on the ability to appreciate it.
  Step 4: Explore ways to maximise enhancement and avoid or minimise harm.
  Step 5: Make and document the decision and monitor outcomes.
- Consider: visual relationships, noise, vibration, activity, historic associations, group value.

### 5. Impact Assessment (500-1000 words)
#### 5.1 Direct Physical Impact
- Does the proposal involve any demolition, alteration, or extension of a heritage asset?
- What fabric will be affected and how does this relate to the asset's significance?
- Is the affected fabric of high, medium, or low heritage significance?

#### 5.2 Impact on Setting
- Apply GPA 3 Steps 2-3 systematically.
- Assess changes to views, visual prominence, spatial relationships, noise, activity, and character.
- Consider both construction-phase and permanent impacts.
- Consider cumulative impact with other developments.

#### 5.3 Level of Harm
- For each designated heritage asset, conclude whether the impact constitutes:
  - No harm (or enhancement).
  - Less than substantial harm (and where on the spectrum: low, medium, or high).
  - Substantial harm or total loss of significance.
- For non-designated heritage assets: assess the scale of harm relative to the asset's significance (NPPF Paragraph 203).
- Justify the assessment with clear reasoning.

### 6. Mitigation and Enhancement Measures (300-600 words)
- Describe design measures that avoid or reduce harm (GPA 3 Step 4).
- Describe mitigation measures: screening, landscaping, materials, scale reduction, setbacks.
- Describe enhancement opportunities: removal of detracting elements, repair of the heritage asset, improved public access, interpretation.
- For archaeological remains: describe any proposed investigation or recording (e.g., watching brief, archaeological evaluation, excavation).
- Describe any heritage benefits of the scheme.

### 7. Heritage Balance and Conclusions (400-800 words)
- Summarise the significance of each heritage asset assessed.
- Summarise the impact on each heritage asset.
- Apply the correct NPPF test:
  - **No harm**: The proposal preserves significance; the statutory duty is satisfied.
  - **Less than substantial harm to designated assets**: Weigh harm against public benefits (NPPF Paragraph 202). Set out the public benefits clearly.
  - **Substantial harm to designated assets**: Apply NPPF Paragraph 201 tests. Demonstrate necessity and substantial public benefits.
  - **Non-designated assets**: Apply the balanced judgement of NPPF Paragraph 203.
- Confirm compliance with Section 66(1) and/or Section 72(1) of the 1990 Act as applicable.
- Conclude whether the proposal is acceptable in heritage terms.

## Quality Standards

- Reference NPPF Paragraphs 189-208 by specific number (minimum 6 references).
- Reference the 1990 Act sections (66 and/or 72) where applicable.
- Reference Historic England guidance documents (GPA 3 as minimum).
- Provide NHLE list entry numbers for all designated heritage assets.
- Use the four types of interest framework (archaeological, architectural, artistic, historic).
- Apply the GPA 3 five-step setting assessment methodology.
- Clearly state the level of harm (no harm / less than substantial / substantial) with justification.
- Apply the correct NPPF test for the level of harm identified.
- Professional heritage language throughout (significance, setting, special interest, character and appearance).
- Do not conflate Conservation Area character with individual building significance.`;

export const HERITAGE_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, heritage assets considered, methodology, and document structure.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the Heritage Statement purpose and NPPF Paragraph 194 requirement. Identify the site and proposal. List heritage assets considered (with NHLE numbers for designated assets). State the methodology and guidance references. Outline the document structure.',
  },
  {
    name: 'Heritage Policy Framework',
    description: 'Statutory duties, NPPF heritage policies, and local heritage policies.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Set out Section 66(1) and Section 72(1) of the 1990 Act. Summarise NPPF Paragraphs 189-208 (key paragraphs). Identify and summarise relevant local plan heritage policies. Reference Historic England guidance documents. Note any conservation area appraisals or management plans.',
  },
  {
    name: 'Historical Background',
    description: 'History of the area, development over time, and background to heritage assets.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Provide a concise history of the area and the heritage assets. Use historic maps and records. For listed buildings: date, architect, purpose, alterations. For Conservation Areas: date of designation, reasons, character. Reference the HER and NHLE.',
  },
  {
    name: 'Assessment of Significance',
    description: 'Significance of each heritage asset under the four types of interest and contribution of setting.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Assess each heritage asset for archaeological, architectural, artistic, and historic interest. Describe features of special interest. Apply the Historic England GPA 3 five-step methodology for setting. Consider visual relationships, historic associations, and group value.',
    subsections: [
      {
        name: 'Architectural Interest',
        description: 'Style, form, materials, plan, craftsmanship, and special features.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe architectural qualities and features of special interest. Assess relative importance.',
      },
      {
        name: 'Historic Interest',
        description: 'Associations with people, events, and historical themes.',
        required: true,
        min_words: 100,
        max_words: 250,
        guidance: 'Describe historical associations and illustrative/associative value.',
      },
      {
        name: 'Archaeological Interest',
        description: 'Potential for archaeological remains.',
        required: false,
        min_words: 75,
        max_words: 200,
        guidance: 'Assess below-ground potential. Reference the HER and any desk-based assessment.',
      },
      {
        name: 'Artistic Interest',
        description: 'Creative and artistic qualities where applicable.',
        required: false,
        min_words: 50,
        max_words: 150,
        guidance: 'Describe any artistic qualities: sculpture, decorative schemes, designed landscapes.',
      },
      {
        name: 'Contribution of Setting',
        description: 'How setting contributes to significance, applying GPA 3.',
        required: true,
        min_words: 150,
        max_words: 350,
        guidance: 'Apply the five-step GPA 3 methodology. Assess visual, spatial, and experiential relationships.',
      },
    ],
  },
  {
    name: 'Impact Assessment',
    description: 'Direct physical impact, impact on setting, and level of harm.',
    required: true,
    min_words: 500,
    max_words: 1000,
    guidance:
      'Assess direct physical impact on heritage fabric. Apply GPA 3 Steps 2-3 for setting. Consider construction-phase and permanent impacts. Conclude on level of harm: no harm, less than substantial (low/medium/high), or substantial. Justify with clear reasoning.',
    subsections: [
      {
        name: 'Direct Physical Impact',
        description: 'Impact on the fabric of heritage assets.',
        required: true,
        min_words: 100,
        max_words: 300,
        guidance: 'Assess any demolition, alteration, or extension. Relate affected fabric to significance.',
      },
      {
        name: 'Impact on Setting',
        description: 'Changes to the setting of heritage assets.',
        required: true,
        min_words: 150,
        max_words: 400,
        guidance: 'Assess changes to views, spatial relationships, noise, activity, and character. Apply GPA 3.',
      },
      {
        name: 'Level of Harm',
        description: 'Conclusion on the level of harm to each heritage asset.',
        required: true,
        min_words: 150,
        max_words: 300,
        guidance: 'State no harm, less than substantial harm (spectrum), or substantial harm for each asset. Justify.',
      },
    ],
  },
  {
    name: 'Mitigation and Enhancement Measures',
    description: 'Design measures, mitigation, enhancement, and archaeological provisions.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe design measures that avoid or reduce harm. Describe mitigation: screening, materials, scale. Describe enhancements: removal of detracting elements, repair, access, interpretation. For archaeology: investigation or recording provisions. Describe heritage benefits.',
  },
  {
    name: 'Heritage Balance and Conclusions',
    description: 'Summary of significance and impact, application of NPPF tests, and conclusion.',
    required: true,
    min_words: 400,
    max_words: 800,
    guidance:
      'Summarise significance and impact for each asset. Apply the correct test: no harm (duty satisfied), less than substantial harm (weigh against public benefits per Paragraph 202), or substantial harm (Paragraph 201). Confirm compliance with Section 66(1) and/or 72(1). Conclude on acceptability.',
  },
];

export const HERITAGE_QUALITY: QualityCriteria = {
  min_policy_refs: 6,
  required_sections: [
    'Introduction',
    'Heritage Policy Framework',
    'Historical Background',
    'Assessment of Significance',
    'Impact Assessment',
    'Mitigation and Enhancement Measures',
    'Heritage Balance and Conclusions',
  ],
  max_quality_score: 100,
};

export const HERITAGE_TEMPLATE = {
  assessment_type: 'Heritage Statement',
  short_name: 'HS',
  version: 1,
  sections: HERITAGE_SECTIONS,
  quality_criteria: HERITAGE_QUALITY,
};
