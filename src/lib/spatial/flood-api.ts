interface FloodRiskData {
  flood_zone: '1' | '2' | '3a' | '3b';
  flood_zone_description: string;
  risk_level: 'low' | 'medium' | 'high' | 'very_high';
  flood_defences: boolean;
  climate_change_allowance: string;
  historical_flooding: boolean;
  source_of_flooding: string[];
}

export async function getDetailedFloodRisk(
  latitude: number,
  longitude: number
): Promise<FloodRiskData> {
  const defaultData: FloodRiskData = {
    flood_zone: '1',
    flood_zone_description: 'Low probability of flooding',
    risk_level: 'low',
    flood_defences: false,
    climate_change_allowance: 'Not applicable for Flood Zone 1',
    historical_flooding: false,
    source_of_flooding: [],
  };

  try {
    // Environment Agency Flood Risk API
    const stationsUrl = `https://environment.data.gov.uk/flood-monitoring/id/stations?lat=${latitude}&long=${longitude}&dist=2`;
    const stationsResp = await fetch(stationsUrl);

    if (stationsResp.ok) {
      const stationsData = await stationsResp.json();
      const stations = stationsData.items ?? [];

      if (stations.length > 0) {
        // Check for active flood warnings
        const warningsUrl = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${latitude}&long=${longitude}&dist=2`;
        const warningsResp = await fetch(warningsUrl);

        if (warningsResp.ok) {
          const warningsData = await warningsResp.json();
          const warnings = warningsData.items ?? [];

          if (warnings.length > 0) {
            defaultData.historical_flooding = true;
            defaultData.source_of_flooding = warnings.map(
              (w: Record<string, unknown>) => (w.floodArea as Record<string, unknown>)?.riverOrSea as string ?? 'Unknown'
            );
          }
        }
      }
    }

    // Flood zone determination via area check
    const areasUrl = `https://environment.data.gov.uk/flood-monitoring/id/floodAreas?lat=${latitude}&long=${longitude}&dist=0.5`;
    const areasResp = await fetch(areasUrl);

    if (areasResp.ok) {
      const areasData = await areasResp.json();
      const areas = areasData.items ?? [];

      if (areas.length > 0) {
        // Determine highest flood zone
        let maxZone: FloodRiskData['flood_zone'] = '1';
        const sources: string[] = [];

        for (const area of areas) {
          const notation: string = area?.notation ?? '';
          const riverOrSea: string = area?.riverOrSea ?? '';

          if (riverOrSea) sources.push(riverOrSea);

          if (notation.includes('3b') || notation.includes('functional')) {
            maxZone = '3b';
          } else if ((notation.includes('3a') || notation.includes('3')) && maxZone !== '3b') {
            maxZone = '3a';
          } else if (notation.includes('2') && !maxZone.startsWith('3')) {
            maxZone = '2';
          }
        }

        defaultData.flood_zone = maxZone;
        defaultData.source_of_flooding = [...new Set(sources)];

        const zoneDescriptions: Record<string, string> = {
          '1': 'Low probability of flooding (less than 1 in 1,000 annual probability)',
          '2': 'Medium probability of flooding (between 1 in 100 and 1 in 1,000 annual probability)',
          '3a': 'High probability of flooding (1 in 100 or greater annual probability from rivers, or 1 in 200 or greater from the sea)',
          '3b': 'Functional floodplain (land where water has to flow or be stored in times of flood)',
        };

        defaultData.flood_zone_description = zoneDescriptions[maxZone];

        const riskLevels: Record<string, FloodRiskData['risk_level']> = {
          '1': 'low',
          '2': 'medium',
          '3a': 'high',
          '3b': 'very_high',
        };

        defaultData.risk_level = riskLevels[maxZone];

        // Climate change allowances
        if (maxZone !== '1') {
          defaultData.climate_change_allowance =
            'Upper end allowance should be applied per EA guidance for Flood Zone ' + maxZone;
        }
      }
    }
  } catch {
    // Return defaults if API fails
  }

  return defaultData;
}
