import type { AssessmentSection, QualityCriteria } from '@/types';

/**
 * Telecommunications (ICNIRP) Compliance Assessment (TCA) -- required for
 * telecommunications infrastructure proposals (masts, base stations, small
 * cells, cabinets) to demonstrate compliance with ICNIRP EMF exposure
 * guidelines, consideration of shared infrastructure, and acceptable
 * visual impact.
 */

export const TCA_PROMPT = `You are preparing a Telecommunications (ICNIRP) Compliance Assessment (TCA) to accompany a planning application or prior approval notification for telecommunications infrastructure submitted to a local planning authority in England. The TCA should read as though prepared by a competent telecommunications consultant or planning agent with experience of telecommunications planning applications and ICNIRP compliance certification.

## Document Purpose

A Telecommunications Compliance Assessment is required to accompany applications for telecommunications development (masts, base stations, antennas, small cells, equipment cabinets, and associated infrastructure). It demonstrates that:
1. The proposed installation complies with the International Commission on Non-Ionizing Radiation Protection (ICNIRP) guidelines for public exposure to electromagnetic fields (EMF).
2. The operator has explored the possibility of sharing existing masts, buildings, or other structures before proposing new infrastructure.
3. The visual impact of the installation has been minimised through appropriate siting, design, and appearance.
4. The proposal accords with national and local telecommunications planning policies.
5. The installation is necessary to provide or improve wireless telecommunications coverage and/or capacity.

## Key Policy and Guidance References

### National Planning Policy Framework (NPPF, December 2023)
- **Paragraph 114**: Advanced, high quality and reliable communications infrastructure is essential for economic growth and social well-being. Planning policies and decisions should support the expansion of electronic communications networks, including next generation mobile technology (such as 5G) and full fibre broadband connections, and the number of radio and electronic communications masts and sites should be kept to a minimum consistent with the needs of consumers, the efficient operation of the network, and ensuring adequate coverage.
- **Paragraph 115**: The number of radio and electronic communications masts, and the sites for such installations, should be kept to a minimum consistent with the needs of consumers, the efficient operation of the network and ensuring adequate coverage. Existing masts, buildings and other structures should be used, unless the need for a new site has been justified. Where new sites are required, equipment should be sympathetically designed and camouflaged where appropriate.
- **Paragraph 116**: Local planning authorities must determine applications on planning grounds only. They should not seek to prevent competition between different operators, question the need for an electronic communications system, or set health safeguards different from the International Commission guidelines for public exposure.
- **Paragraph 117**: Local planning authorities should not impose a ban on new electronic communications development in certain areas, impose blanket Article 4 directions over a wide area or a wide range of telecommunications development, or insist on minimum distances between new telecommunications development and existing development.
- **Paragraph 118**: Applications for electronic communications development (including applications for prior approval under Part 16 of the General Permitted Development Order) should be supported by the necessary evidence to justify the proposed development. This should include:
  (a) the outcome of consultations with organisations with an interest in the proposed development, in particular with the relevant body where a mast is to be installed near a school or college, or within a statutory safeguarding zone surrounding an aerodrome, technical site or military explosives storage area; and
  (b) for proposals to install telecommunications equipment on a building or other existing structure, a statement that self-certifies that the cumulative exposure, when operational, will not exceed ICNIRP guidelines; or
  (c) for proposals to install a mast within 3 km of the perimeter of an aerodrome, evidence of notification to the Civil Aviation Authority and the Ministry of Defence.

### ICNIRP Guidelines
- **ICNIRP Guidelines for Limiting Exposure to Electromagnetic Fields (100 kHz to 300 GHz) (2020)**: The current international guidelines for public exposure to radiofrequency electromagnetic fields (RF-EMF). Key reference levels for general public exposure:
  - Frequency range 400-2000 MHz: Power density reference level varies with frequency (f/200 W/m2, where f is in MHz).
  - Frequency range 2-300 GHz: Power density reference level of 10 W/m2.
  - For typical UK mobile frequencies (700 MHz, 800 MHz, 900 MHz, 1800 MHz, 2100 MHz, 2600 MHz, 3500 MHz):
    - The reference levels are well above typical exposure levels from base stations.
    - Compliance certificates confirm that the installation operates within a small fraction of the ICNIRP limits.
- **ICNIRP Statement on the Guidelines (2020)**: Clarification on the application of the guidelines, including considerations for 5G technology.

### Electronic Communications Code (Telecommunications Act 1984, as amended by Digital Economy Act 2017)
- The statutory framework for the deployment of electronic communications infrastructure.
- Code rights for operators to install and maintain apparatus.

### Planning Practice Guidance: Telecommunications (PPG)
- The need for evidence of pre-application consultation with organisations with an interest.
- The requirement for ICNIRP self-certification.
- Guidance on assessing visual impact and encouraging shared infrastructure.
- The distinction between full planning applications and prior approval applications under Part 16 of the GPDO.

### General Permitted Development Order (GPDO) 2015 (as amended)
- **Part 16**: Permitted development rights for electronic communications apparatus, including conditions and limitations.
- **Prior approval**: The matters for consideration under Part 16 prior approval (siting and appearance).
- **Class A**: Development by or on behalf of an electronic communications code operator.

### Other Key References
- **OFCOM Code of Practice on Mobile Network Development in England (2016)**: Best practice guidance for operators on community engagement, siting, and design.
- **Mobile UK Annual Connected Nations Report**: Coverage data and network deployment context.
- **Local plan telecommunications policies**: Authority-specific policies on telecommunications infrastructure, visual amenity, and heritage considerations.
- **Department for Science, Innovation and Technology**: Government policy on 5G deployment and the Shared Rural Network (SRN).
- **Civil Aviation Authority**: Consultation requirements for masts near aerodromes.

## Section-by-Section Guidance

### 1. Introduction (200-400 words)
- State the purpose of the Telecommunications Compliance Assessment and its policy basis (NPPF Paragraphs 114-118).
- Identify the site by full postal address, grid reference, and local authority.
- Identify the telecommunications operator and the network being deployed or upgraded (e.g., 4G, 5G, Shared Rural Network).
- Summarise the proposed installation:
  - Type: new mast, replacement mast, antenna upgrade on existing mast/building, small cell, equipment cabinet(s).
  - Height of mast or antenna (above ground level).
  - Number and type of antennas (panel, dish, omni).
  - Number and dimensions of equipment cabinets.
  - Any ancillary development (access track, compound, fencing, landscaping).
- State the application type: full planning application, prior approval under Part 16, or permitted development notification.
- Confirm that the assessment includes ICNIRP compliance self-certification, evidence of site sharing consideration, and visual impact analysis.
- Outline the document structure.

### 2. Policy Framework (300-600 words)
- Set out NPPF Paragraphs 114-118 in full, with particular emphasis on:
  - The support for expansion of communications networks (Paragraph 114).
  - The requirement to keep masts to a minimum and use existing structures (Paragraph 115).
  - The restriction on LPAs questioning health safeguards beyond ICNIRP (Paragraph 116).
  - The restriction on blanket bans and minimum distance requirements (Paragraph 117).
  - The evidence requirements including ICNIRP self-certification (Paragraph 118).
- Set out the PPG guidance on telecommunications, including:
  - Pre-application consultation requirements.
  - Assessment of siting and appearance.
  - Shared infrastructure considerations.
- Set out the relevant GPDO Part 16 provisions (for prior approval applications):
  - The scope of permitted development rights.
  - Conditions and limitations (height, location, SSSI, conservation area, AONB restrictions).
  - The prior approval process and the limited matters for consideration (siting and appearance).
- Set out the relevant local plan telecommunications policies:
  - Policies supporting telecommunications infrastructure.
  - Requirements for demonstrating need, site sharing, and visual impact mitigation.
  - Any local heritage, conservation area, or landscape sensitivity policies applicable to the site.
- Reference the OFCOM Code of Practice and government policy on 5G/SRN deployment.

### 3. ICNIRP Guidelines (300-500 words)
- Explain the ICNIRP Guidelines (2020) and their role in UK planning:
  - ICNIRP is the internationally recognised body providing science-based guidelines for limiting exposure to electromagnetic fields.
  - The UK Government has adopted the ICNIRP guidelines as the basis for assessing the safety of telecommunications installations.
  - NPPF Paragraph 116 confirms that LPAs should not set health safeguards different from the ICNIRP guidelines.
  - The guidelines set reference levels for general public exposure to RF-EMF that include substantial safety margins (reduction factors of 50 from established effects thresholds for the general public).
- Present the relevant ICNIRP reference levels for the frequencies used by the proposed installation:
  - State the operating frequencies of the proposed antennas (e.g., 700 MHz, 800 MHz, 1800 MHz, 2100 MHz, 2600 MHz, 3500 MHz).
  - State the applicable ICNIRP reference levels for each frequency band.
  - Explain that compliance is assessed on a cumulative basis (all antennas on the installation considered together).
- Reference the public health position:
  - UK Health Security Agency (UKHSA, formerly PHE) position: "The guidelines of the International Commission on Non-Ionizing Radiation Protection (ICNIRP) are used in the UK. The overall weight of evidence does not suggest health effects from RF fields below these guideline levels."
  - World Health Organization (WHO) position on RF-EMF and base stations.
- State that the operator provides an ICNIRP compliance certificate (a self-declaration) confirming that the installation, when operational, will not exceed the ICNIRP reference levels for general public exposure.

### 4. Proposed Installation (300-600 words)
- Describe the proposed installation in detail:
  - **Mast/structure**: Type (monopole, lattice, streetworks pole, wall-mounted, rooftop), height (m AGL), material, finish/colour.
  - **Antennas**: Number, type (panel/sector, dish, omni-directional, small cell), dimensions, mounting height (centre-line), orientation (azimuth), downtilt.
  - **Equipment cabinets**: Number, dimensions (H x W x D), colour/finish, location within the compound or attached to the structure.
  - **Compound/base**: Dimensions, surfacing, boundary treatment (fencing type and height, landscaping).
  - **Ancillary**: Access arrangements, power supply, fibre connection, lightning protection.
  - **Design considerations**: Colour matching to surroundings, slimline design, shrouding of antennas, concealment measures, camouflage (where applicable, e.g., tree mast).
- Provide a coverage justification:
  - Explain the coverage or capacity objective of the proposed installation (filling a coverage gap, upgrading capacity, introducing 5G, meeting SRN obligations).
  - Present coverage prediction maps showing the existing coverage and the predicted coverage with the proposed installation (or reference separately submitted coverage maps).
  - Explain why the proposed location, height, and antenna configuration are necessary to achieve the coverage objective.

### 5. EMF Compliance Assessment (300-600 words)
- Present the ICNIRP compliance self-certification:
  - Confirm that the operator (or their appointed agent) has assessed the cumulative EMF emissions from the proposed installation, including all existing and proposed antennas on the site.
  - State that the assessment has been carried out in accordance with the ICNIRP Guidelines (2020).
  - Confirm that the maximum cumulative exposure at any publicly accessible location will be a fraction of the ICNIRP reference levels (state the percentage or fraction where available, e.g., "the maximum exposure is X% of the ICNIRP reference level").
  - Present the ICNIRP compliance certificate or self-declaration (or reference it as an appendix).
  - Confirm compliance with NPPF Paragraph 118(b).
- Address public exclusion zones:
  - Describe any exclusion zones around the antennas where the ICNIRP reference levels could be exceeded (these are typically small areas immediately in front of the antenna panels and are not accessible to the general public).
  - Confirm that the exclusion zones are either above ground level (on the mast/structure) or within the secured compound, and are not accessible to the public.
  - Describe any signage or access restrictions to prevent unauthorised access to exclusion zones.
- Note that the ICNIRP assessment is a self-certification by the operator, as required by NPPF Paragraph 118(b), and that the LPA is not required to independently verify the EMF calculations.

### 6. Shared Infrastructure (300-500 words)
- Demonstrate that the operator has considered sharing existing infrastructure before proposing new equipment, in accordance with NPPF Paragraph 115:
  - **Existing masts**: Identify existing telecommunications masts within the search area. State why they are unsuitable for sharing (structural capacity, coverage, access, operator incompatibility, landlord restrictions).
  - **Existing buildings/structures**: Identify existing buildings or other structures that were considered as alternative mounting locations. State why they are unsuitable (height, structural capacity, planning restrictions, landlord consent, coverage performance).
  - **Other operators' sites**: State whether other operators have been consulted regarding site sharing opportunities.
  - **MBNL / CTIL / Network Rail / utility poles**: Reference any shared infrastructure arrangements or the Beacon database.
- Present a summary of the site selection process:
  - State the search area and the coverage objective.
  - List the alternative sites considered (typically presented in a supplementary information document or site selection report).
  - Explain why the proposed site is the most suitable option, considering coverage performance, visual impact, availability, and planning constraints.
  - Confirm that no reasonable alternative exists that would avoid the need for new infrastructure.
- Reference the OFCOM Code of Practice on promoting site sharing and minimising the number of masts.

### 7. Visual Impact (300-500 words)
- Assess the visual impact of the proposed installation:
  - Describe the existing visual character of the site and surroundings: urban streetscape, suburban residential, rural landscape, industrial area, town centre.
  - Assess the visibility of the proposed mast/antennas from key viewpoints:
    - Residential properties: nearest dwellings and their distance/orientation.
    - Public areas: streets, footpaths, parks, public open spaces.
    - Heritage assets: listed buildings, conservation areas, scheduled monuments (if applicable).
    - Landscape designations: AONB, Green Belt, National Park (if applicable).
  - Present photomontages or wireframe visualisations showing the proposed installation from representative viewpoints (or reference separately submitted drawings).
  - Assess the scale, form, and appearance of the installation in its context.
  - Assess the impact on the skyline and any views of significance.
- Describe the design and mitigation measures to reduce visual impact:
  - Colour and finish: matching to surroundings (e.g., galvanised steel, RAL colour to match street furniture, green for rural settings).
  - Slimline design: minimising the width and profile of the mast and antennas.
  - Antenna shrouding: concealing antennas within a GRP shroud.
  - Equipment cabinet siting: positioning cabinets behind boundary walls, within compounds screened by fencing and landscaping.
  - Landscaping: proposed planting to screen the installation from sensitive viewpoints.
  - Camouflage: where appropriate, use of a tree mast or other disguised structure.
- Conclude on the overall visual impact: acceptable, minor adverse, moderate adverse. State whether the visual impact is outweighed by the public benefit of improved telecommunications coverage.

### 8. Conclusion (200-400 words)
- Summarise the proposed installation and its purpose (coverage/capacity improvement, 5G deployment, SRN obligation).
- Confirm ICNIRP compliance: state that the installation complies with the ICNIRP guidelines for public exposure to EMF, as self-certified by the operator in accordance with NPPF Paragraph 118(b).
- Confirm site sharing consideration: state that existing masts, buildings, and structures have been considered and that the proposed site is the most suitable option in accordance with NPPF Paragraph 115.
- Confirm visual impact: state that the installation has been designed to minimise visual impact through appropriate siting, design, colour, and screening, and that any residual visual impact is outweighed by the public benefit of improved telecommunications coverage.
- Confirm compliance with NPPF Paragraphs 114-118 and relevant local plan policies.
- State that the application meets the requirements for prior approval (siting and appearance) under Part 16, or the tests for a full planning application, as applicable.
- Conclude that the proposal should be approved/given prior approval.

## Quality Standards

- Reference NPPF Paragraphs 114-118 by specific number.
- Reference the ICNIRP Guidelines (2020) and present or reference the ICNIRP compliance certificate.
- Reference the GPDO Part 16 provisions for prior approval applications.
- Reference the PPG on telecommunications.
- Reference the OFCOM Code of Practice.
- Demonstrate site sharing consideration with specific reference to alternative sites assessed.
- Present coverage justification with reference to coverage objectives and prediction data.
- Assess visual impact from representative viewpoints.
- Describe design and mitigation measures for visual impact.
- Use correct telecommunications terminology: base station, antenna, panel, sector, azimuth, downtilt, frequency band, RF-EMF, exclusion zone, monopole, ICNIRP reference level.
- Where coverage maps or ICNIRP certificates have not been provided, flag as "[COVERAGE MAPS / ICNIRP CERTIFICATE TO BE APPENDED]".
- Do not fabricate EMF exposure data or compliance percentages.
- Professional telecommunications planning language throughout.`;

export const TCA_SECTIONS: AssessmentSection[] = [
  {
    name: 'Introduction',
    description: 'Purpose, site, operator, proposed installation, application type, and document structure.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'State the TCA purpose and NPPF basis. Identify the site and operator. Summarise the installation (mast type, height, antennas, cabinets). State the application type (full or prior approval). Confirm the assessment covers ICNIRP, site sharing, and visual impact. Outline the structure.',
  },
  {
    name: 'Policy Framework',
    description: 'NPPF Paragraphs 114-118, PPG telecommunications, GPDO Part 16, and local plan policies.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Set out NPPF Paragraphs 114-118 in full. Summarise PPG telecommunications guidance. Set out GPDO Part 16 provisions. Set out local plan telecommunications policies. Reference the OFCOM Code of Practice and government 5G/SRN policy.',
  },
  {
    name: 'ICNIRP Guidelines',
    description: 'Explanation of ICNIRP framework, reference levels, safety margins, and UK health position.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Explain the ICNIRP Guidelines (2020) and their role in UK planning. Present reference levels for the operating frequencies. Explain safety margins. Reference UKHSA and WHO positions on RF-EMF. State that the operator provides an ICNIRP compliance certificate.',
  },
  {
    name: 'Proposed Installation',
    description: 'Detailed description of mast, antennas, cabinets, compound, design measures, and coverage justification.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Describe the mast/structure (type, height, material). Describe antennas (number, type, height, azimuth). Describe cabinets and compound. Describe design considerations (colour, shrouding, camouflage). Provide coverage justification with reference to coverage maps.',
  },
  {
    name: 'EMF Compliance Assessment',
    description: 'ICNIRP self-certification, cumulative exposure assessment, exclusion zones, and public access.',
    required: true,
    min_words: 300,
    max_words: 600,
    guidance:
      'Present the ICNIRP compliance self-certification. Confirm cumulative assessment of all antennas. State the maximum exposure as a fraction of ICNIRP limits. Describe exclusion zones and confirm they are not publicly accessible. Note self-certification per NPPF Paragraph 118(b).',
  },
  {
    name: 'Shared Infrastructure',
    description: 'Assessment of alternative sites, existing masts/buildings, site sharing considerations, and site selection.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Identify existing masts and buildings considered. State why each is unsuitable. Reference other operators and shared infrastructure databases. Present the site selection process. Confirm no reasonable alternative exists. Reference OFCOM Code of Practice.',
  },
  {
    name: 'Visual Impact',
    description: 'Visual character, visibility from key viewpoints, design mitigation, and overall impact assessment.',
    required: true,
    min_words: 300,
    max_words: 500,
    guidance:
      'Describe the visual character of the site and surroundings. Assess visibility from residential properties, public areas, heritage assets, and landscape designations. Reference photomontages. Describe design mitigation (colour, slimline, shrouding, screening, landscaping). Conclude on overall visual impact balanced against public benefit.',
  },
  {
    name: 'Conclusion',
    description: 'Summary of ICNIRP compliance, site sharing, visual impact, and policy compliance.',
    required: true,
    min_words: 200,
    max_words: 400,
    guidance:
      'Summarise the installation and purpose. Confirm ICNIRP compliance per Paragraph 118(b). Confirm site sharing consideration per Paragraph 115. Confirm visual impact is acceptable and outweighed by public benefit. Confirm NPPF and local plan compliance. Conclude that approval should be granted.',
  },
];

export const TCA_QUALITY: QualityCriteria = {
  min_policy_refs: 5,
  required_sections: [
    'Introduction',
    'Policy Framework',
    'ICNIRP Guidelines',
    'Proposed Installation',
    'EMF Compliance Assessment',
    'Shared Infrastructure',
    'Visual Impact',
    'Conclusion',
  ],
  max_quality_score: 100,
};

export const TCA_TEMPLATE = {
  assessment_type: 'Telecommunications (ICNIRP) Compliance Assessment',
  short_name: 'TCA',
  version: 1,
  sections: TCA_SECTIONS,
  quality_criteria: TCA_QUALITY,
};
