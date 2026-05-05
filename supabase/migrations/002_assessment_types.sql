-- 002_assessment_types.sql
-- Seed all 66 UK planning assessment types

INSERT INTO assessment_types (name, short_name, category, description, typical_cost_min, typical_cost_max, typical_pages_min, typical_pages_max, requires_licensed_pro, ai_difficulty, credit_cost)
VALUES
-- Tier 1: Core Planning
('Planning Statement', 'PS', 'core_planning',
 'A comprehensive statement setting out the planning policy context and demonstrating how a proposed development complies with relevant national and local planning policies.',
 1500, 5000, 15, 40, false, 'easy', 1),

('Design and Access Statement', 'DAS', 'core_planning',
 'A document explaining the design principles and concepts that have been applied to the development, and how issues relating to access have been dealt with.',
 1000, 3000, 10, 30, false, 'medium', 1),

('Heritage Statement', 'HS', 'core_planning',
 'An assessment of the significance of heritage assets affected by a proposed development, and the impact of the proposal on that significance.',
 500, 5000, 10, 40, false, 'medium', 2),

('Affordable Housing Statement', 'AHS', 'core_planning',
 'A statement detailing the affordable housing provision within a development, including tenure mix, eligibility criteria, and compliance with local policy requirements.',
 1000, 5000, 5, 15, false, 'easy', 1),

('Statement of Community Involvement', 'SCI', 'core_planning',
 'A document outlining the pre-application consultation undertaken with the local community and stakeholders, summarising feedback received and how it has influenced the proposals.',
 1000, 5000, 10, 30, false, 'easy', 1),

-- Tier 2: Environmental
('Environmental Impact Assessment', 'EIA', 'environmental',
 'A comprehensive assessment of the likely significant environmental effects of a proposed development, required under the Town and Country Planning (EIA) Regulations 2017 for Schedule 1 and qualifying Schedule 2 developments.',
 15000, 100000, 100, 500, true, 'hard', 10),

('Preliminary Ecological Appraisal', 'PEA', 'environmental',
 'A desk study and extended Phase 1 habitat survey to identify ecological constraints and opportunities, determining whether further species-specific surveys are needed.',
 400, 1200, 15, 30, true, 'hard', 5),

('Protected Species Survey', 'PSS', 'environmental',
 'Detailed field surveys for protected species such as bats, great crested newts, badgers, and reptiles, conducted by licensed ecologists at appropriate times of year.',
 500, 3000, 10, 30, true, 'hard', 5),

('Biodiversity Net Gain Assessment', 'BNG', 'environmental',
 'An assessment using the DEFRA Biodiversity Metric to calculate baseline and post-development biodiversity value, demonstrating a minimum 10% net gain as required by the Environment Act 2021.',
 1000, 5000, 15, 40, true, 'hard', 5),

('Arboricultural Impact Assessment', 'AIA', 'environmental',
 'A survey and assessment of trees on or adjacent to a development site, evaluating the impact of proposals on retained trees and specifying protection measures in accordance with BS 5837:2012.',
 300, 1500, 10, 30, true, 'hard', 5),

('Air Quality Assessment', 'AQA', 'environmental',
 'An assessment of the air quality impacts of a development, including traffic-generated emissions and dust during construction, evaluated against national air quality objectives.',
 1500, 5000, 20, 50, false, 'medium', 3),

('Noise Impact Assessment', 'NIA', 'environmental',
 'A technical assessment of noise and vibration impacts from or on a proposed development, including baseline surveys and modelling against BS 8233 and WHO guidelines.',
 1000, 5000, 20, 50, true, 'hard', 5),

('Land Contamination Phase 1', 'LC1', 'environmental',
 'A preliminary risk assessment involving a desk study, site walkover, and conceptual site model to identify potential contamination sources, pathways, and receptors.',
 900, 2500, 20, 40, true, 'medium', 3),

('Land Contamination Phase 2', 'LC2', 'environmental',
 'An intrusive ground investigation with soil and groundwater sampling to characterise contamination identified in Phase 1, with quantitative risk assessment.',
 3000, 15000, 30, 60, true, 'hard', 5),

('Odour Assessment', 'OA', 'environmental',
 'An assessment of odour emissions from or affecting a development, using sniff testing, dispersion modelling, or IAQM methodology to evaluate amenity impacts.',
 2000, 8000, 20, 40, true, 'hard', 5),

('Agricultural Land Classification', 'ALC', 'environmental',
 'A survey to classify agricultural land quality using the MAFF revised guidelines, determining if land is Best and Most Versatile (Grades 1, 2, and 3a) agricultural land.',
 1500, 5000, 10, 20, true, 'hard', 5),

-- Tier 3: Flood/Drainage
('Flood Risk Assessment', 'FRA', 'flood_drainage',
 'An assessment of flood risk to and from a development site, covering all sources of flooding and proposing appropriate mitigation measures, required for sites in Flood Zones 2 and 3 or over 1 hectare.',
 750, 5000, 15, 50, false, 'medium', 2),

('Drainage Strategy', 'DS', 'flood_drainage',
 'A surface water and foul water drainage design demonstrating compliance with SuDS hierarchy and local drainage requirements, with attenuation calculations for storm events.',
 1000, 5000, 15, 40, true, 'medium', 3),

('Sequential Test (Flood)', 'STF', 'flood_drainage',
 'A demonstration that there are no reasonably available alternative sites at lower flood risk where the proposed development could be located, as required by NPPF paragraph 162.',
 500, 2000, 5, 15, false, 'easy', 1),

('Exception Test (Flood)', 'ETF', 'flood_drainage',
 'Where the Sequential Test is passed for development in Flood Zone 3, a demonstration that the development provides wider sustainability benefits and will be safe for its lifetime.',
 500, 2000, 5, 10, false, 'easy', 1),

('Foul Sewage Assessment', 'FSA', 'flood_drainage',
 'An assessment of the foul sewage capacity and connection arrangements for a development, including consultation with the sewerage undertaker regarding network capacity.',
 500, 2000, 5, 15, true, 'medium', 2),

('Water Supply Assessment', 'WSA', 'flood_drainage',
 'An assessment of water supply availability and infrastructure requirements for a development, including consultation with the water undertaker.',
 500, 2000, 5, 15, false, 'easy', 1),

-- Tier 4: Transport
('Transport Assessment', 'TA', 'transport',
 'A comprehensive assessment of the transport implications of a development, including trip generation, distribution, junction capacity modelling, and impact on the local highway network.',
 2500, 20000, 30, 100, false, 'medium', 3),

('Transport Statement', 'TS', 'transport',
 'A simplified transport document for smaller developments, providing trip generation estimates and qualitative assessment of transport impacts and accessibility.',
 1500, 5000, 10, 30, false, 'easy', 1),

('Travel Plan', 'TP', 'transport',
 'A long-term management strategy for promoting sustainable transport choices for occupants of a development, including targets, measures, monitoring, and enforcement mechanisms.',
 1500, 5000, 15, 30, false, 'easy', 1),

('Parking Survey', 'PKS', 'transport',
 'A survey of existing parking demand and capacity in the vicinity of a development site, typically using the Lambeth methodology over multiple days and times.',
 500, 2000, 5, 15, false, 'easy', 1),

('Construction Traffic Management Plan', 'CTMP', 'transport',
 'A plan detailing construction vehicle routing, access arrangements, delivery scheduling, wheel washing, and temporary traffic management measures during the build phase.',
 1000, 3000, 10, 20, false, 'easy', 1),

-- Tier 5: Energy/Sustainability
('Energy Statement', 'ES', 'energy_sustainability',
 'An assessment demonstrating how a development meets energy performance requirements, including carbon reduction calculations using the energy hierarchy (Be Lean, Be Clean, Be Green).',
 1000, 5000, 15, 30, false, 'medium', 2),

('Sustainability Statement', 'SS', 'energy_sustainability',
 'A document demonstrating how sustainability principles have been embedded in the design and construction of a development, covering energy, water, materials, ecology, and waste.',
 1000, 3000, 10, 20, false, 'easy', 1),

('Whole Life Carbon Assessment', 'WLCA', 'energy_sustainability',
 'An assessment of the total carbon emissions over the lifetime of a building, including embodied carbon (Modules A1-A5, B, C) and operational carbon, following RICS methodology.',
 2000, 8000, 15, 30, false, 'medium', 3),

('Circular Economy Statement', 'CES', 'energy_sustainability',
 'A statement demonstrating how circular economy principles have been applied to building design, construction, and end-of-life, promoting material reuse and waste reduction.',
 1000, 5000, 10, 20, false, 'easy', 1),

('BREEAM Pre-Assessment', 'BREEAM', 'energy_sustainability',
 'A preliminary assessment against BREEAM criteria to identify the likely rating achievable and the most cost-effective credits to target for the required rating.',
 2000, 5000, 15, 30, true, 'medium', 3),

('Overheating Risk Assessment', 'ORA', 'energy_sustainability',
 'A dynamic thermal modelling assessment using CIBSE TM59 methodology to demonstrate that a development will not be subject to overheating in current and future climate scenarios.',
 1000, 3000, 10, 20, false, 'medium', 2),

-- Tier 6: Daylight/Amenity
('Daylight and Sunlight Assessment', 'DSA', 'daylight_amenity',
 'A technical assessment of daylight and sunlight impacts on neighbouring properties and within a proposed development, using BRE guidelines (BR 209) methodologies including VSC, NSL, and APSH.',
 2000, 10000, 20, 60, false, 'hard', 5),

('Wind Microclimate Assessment', 'WMA', 'daylight_amenity',
 'A computational fluid dynamics (CFD) or wind tunnel assessment of pedestrian-level wind conditions around a development, evaluated against Lawson comfort and safety criteria.',
 5000, 20000, 20, 50, true, 'hard', 5),

('Overshadowing Study', 'OSS', 'daylight_amenity',
 'An analysis of shadow patterns cast by a proposed development on surrounding properties and amenity spaces, assessed against BRE guidelines for sun hours on ground.',
 0, 0, 5, 15, false, 'medium', 2),

-- Tier 7: Heritage/Archaeology
('Archaeological Desk-Based Assessment', 'ADBA', 'heritage_archaeology',
 'A desk-based assessment of the known and potential archaeological resource within a site, using HER data, historic mapping, and documentary sources to assess significance and impact.',
 1500, 5000, 20, 50, true, 'medium', 3),

('Archaeological Field Evaluation', 'AFE', 'heritage_archaeology',
 'An intrusive archaeological investigation (trial trenching or geophysical survey) to characterise the nature, extent, date, and significance of archaeological remains within a site.',
 5000, 50000, 30, 100, true, 'hard', 5),

('Historic Building Recording', 'HBR', 'heritage_archaeology',
 'A photographic and written record of a historic building prior to alteration or demolition, prepared to a level specified by the local planning authority (Levels 1-4 per Historic England guidance).',
 2000, 10000, 20, 50, true, 'hard', 5),

('Townscape and Visual Impact Assessment', 'TVIA', 'heritage_archaeology',
 'An assessment of the visual impact of a development on the surrounding townscape, using verified views, photomontages, and analysis against GLVIA3 methodology.',
 3000, 10000, 20, 50, false, 'medium', 3),

-- Tier 8: Fire/Structural
('Fire Statement', 'FS', 'fire_structural',
 'A statement for relevant buildings (18m+ residential) demonstrating how fire safety matters have been considered in the planning application, as required by Article 9A of the Town and Country Planning (Development Management Procedure) Order.',
 1000, 5000, 10, 20, true, 'medium', 3),

('Fire Safety Strategy', 'FSS', 'fire_structural',
 'A detailed fire engineering strategy covering means of escape, compartmentation, fire service access, and suppression systems, prepared by a qualified fire engineer.',
 2000, 10000, 20, 50, true, 'hard', 5),

('Structural Survey', 'SSV', 'fire_structural',
 'A structural assessment of an existing building or site conditions, evaluating load-bearing capacity, structural integrity, and feasibility of proposed alterations.',
 500, 3000, 10, 30, true, 'hard', 5),

('Basement Impact Assessment', 'BIA', 'fire_structural',
 'A technical assessment of the impacts of basement construction on neighbouring properties, groundwater, and structural stability, often required in London boroughs.',
 2500, 10000, 20, 40, true, 'hard', 5),

('Geotechnical Assessment', 'GA', 'fire_structural',
 'A ground investigation and geotechnical assessment to determine foundation design requirements, ground stability, and construction methodology for a development.',
 2000, 10000, 20, 40, true, 'hard', 5),

-- Tier 9: Landscape/Visual
('Landscape and Visual Impact Assessment', 'LVIA', 'landscape_visual',
 'A systematic assessment of the effects of a development on the landscape character and visual amenity, following GLVIA3 methodology with representative viewpoints and photomontages.',
 3000, 15000, 30, 80, false, 'medium', 3),

('Landscape Strategy', 'LS', 'landscape_visual',
 'A comprehensive landscape design strategy covering hard and soft landscaping, planting schedules, boundary treatments, and management and maintenance plans.',
 2000, 8000, 10, 30, false, 'medium', 2),

('Green Infrastructure Plan', 'GIP', 'landscape_visual',
 'A plan demonstrating how green infrastructure (trees, green roofs, rain gardens, wildlife corridors) has been integrated into the development to deliver multiple environmental benefits.',
 1000, 5000, 10, 20, false, 'easy', 1),

-- Tier 10: Commercial/Viability
('Viability Assessment', 'VA', 'commercial_viability',
 'A financial viability appraisal demonstrating whether a development can bear the cost of planning obligations (including affordable housing and CIL), prepared in accordance with NPPF and PPG guidance.',
 5000, 50000, 30, 80, true, 'hard', 10),

('Retail Impact Assessment', 'RIA', 'commercial_viability',
 'An assessment of the impact of a proposed retail development on existing town centres, including trade diversion analysis and cumulative impact, required for retail over 2,500 sqm (or local threshold).',
 3000, 15000, 20, 50, false, 'medium', 3),

('Sequential Test (Retail)', 'STR', 'commercial_viability',
 'A demonstration that there are no suitable and available sites for the proposed main town centre use within town centres or edge-of-centre locations, as required by NPPF paragraph 87.',
 1000, 5000, 5, 15, false, 'easy', 1),

('Economic Impact Assessment', 'ECIA', 'commercial_viability',
 'An assessment of the economic benefits and impacts of a development, including job creation, GVA contribution, supply chain effects, and fiscal impacts on the local economy.',
 2000, 10000, 15, 40, false, 'medium', 2),

('Employment Land Assessment', 'ELA', 'commercial_viability',
 'An assessment justifying the release of employment land for alternative uses, demonstrating the site is no longer suitable or viable for employment purposes through marketing evidence.',
 2000, 8000, 15, 30, false, 'medium', 2),

-- Tier 11: Specialist
('Construction Management Plan', 'CMP', 'specialist',
 'A detailed plan covering construction methodology, phasing, working hours, dust and noise control, site logistics, and community liaison arrangements.',
 750, 3000, 15, 30, false, 'easy', 1),

('Site Waste Management Plan', 'SWMP', 'specialist',
 'A plan identifying the types and quantities of waste expected during construction and demolition, with targets for reuse, recycling, and responsible disposal.',
 500, 2000, 5, 15, false, 'easy', 1),

('Waste Management Strategy', 'WMS', 'specialist',
 'A strategy for the operational waste management of a completed development, covering bin storage, collection arrangements, and recycling facilities.',
 500, 2000, 5, 15, false, 'easy', 1),

('Lighting Assessment', 'LA', 'specialist',
 'An assessment of external lighting proposals, including lux level calculations, light spill analysis, and mitigation of impacts on ecological receptors and residential amenity.',
 1000, 3000, 10, 20, false, 'medium', 2),

('Ventilation/Extraction Statement', 'VES', 'specialist',
 'A technical statement detailing ventilation and extraction systems for commercial premises, including kitchen extraction, odour control, and noise from plant equipment.',
 500, 2000, 5, 15, false, 'easy', 1),

('Telecommunications Compliance', 'TC', 'specialist',
 'A statement demonstrating compliance with ICNIRP public exposure guidelines for electromagnetic fields from telecommunications installations.',
 500, 2000, 5, 10, true, 'medium', 2),

('Utilities Assessment', 'UA', 'specialist',
 'An assessment of existing utility infrastructure (gas, electric, water, telecoms) and requirements for new connections, diversions, and upgrades to serve the development.',
 500, 2000, 5, 15, false, 'easy', 1),

('Open Space Assessment', 'OSA', 'specialist',
 'An assessment of open space provision within a development, demonstrating compliance with local standards for quantity, quality, and accessibility of public open space.',
 1000, 3000, 5, 15, false, 'easy', 1),

('Play Space Assessment', 'PSA', 'specialist',
 'An assessment of play space provision for children and young people within a development, demonstrating compliance with GLA or local play space standards.',
 500, 2000, 5, 10, false, 'easy', 1),

('Health Impact Assessment', 'HIA', 'specialist',
 'An assessment of the potential health impacts of a development on the local population, covering healthy environments, active travel, access to healthcare, and mental wellbeing.',
 3000, 15000, 20, 50, false, 'medium', 3),

('Equalities Impact Assessment', 'EqIA', 'specialist',
 'An assessment of how a development may differentially affect protected characteristic groups under the Equality Act 2010, with mitigation measures to promote inclusivity.',
 1000, 5000, 10, 20, false, 'easy', 1),

('Social Infrastructure Assessment', 'SIA', 'specialist',
 'An assessment of the impact of a development on local social infrastructure including schools, healthcare, community facilities, and emergency services capacity.',
 2000, 8000, 10, 20, false, 'medium', 2),

('Pre-redevelopment Audit', 'PRA', 'specialist',
 'An audit of an existing building or site prior to redevelopment, cataloguing materials, structures, and features for potential reuse, salvage, or recording.',
 2000, 5000, 15, 30, false, 'medium', 2);
