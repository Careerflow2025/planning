import type { DevelopmentType, UseClass } from '@/types';

/**
 * Maps GuidedFlow's wizard answers to the backend's project fields.
 *
 * GuidedFlow collects (file: src/components/GuidedFlow.tsx):
 *   workType:     extension | conversion | new-build | change-of-use | demolition | renovation | other
 *   buildingType: house | flat | commercial | land | mixed | other
 *
 * Backend (file: src/types/project.ts):
 *   DevelopmentType: residential | commercial | mixed_use | industrial | retail | education |
 *                    healthcare | leisure | infrastructure | agricultural | change_of_use |
 *                    listed_building_consent | householder | other
 *   UseClass:        C3 | C2 | C1 | C4 | E | B2 | B8 | F1 | F2 | sui_generis | other
 */

export function mapWorkType(
  workType: string,
  buildingType: string,
): DevelopmentType {
  if (workType === 'change-of-use') return 'change_of_use';
  if (buildingType === 'commercial') return 'commercial';
  if (buildingType === 'mixed') return 'mixed_use';
  if (buildingType === 'land') return 'agricultural';
  if (workType === 'new-build') return 'residential';
  if (workType === 'extension' || workType === 'conversion' || workType === 'renovation') {
    return 'householder';
  }
  return 'other';
}

export function mapBuildingType(buildingType: string): UseClass {
  switch (buildingType) {
    case 'house':
    case 'flat':
      return 'C3';
    case 'commercial':
      return 'E';
    case 'mixed':
      return 'sui_generis';
    case 'land':
    case 'other':
    default:
      return 'other';
  }
}

interface NameInputs {
  workType: string;
  buildingType: string;
  address: string;
  projectDescription: string;
}

export function deriveProjectName(d: NameInputs): string {
  // Prefer the user's own description if it's short enough to use as a title
  const desc = d.projectDescription.trim();
  if (desc.length > 0 && desc.length <= 80) return desc;

  const workLabel = humanizeWorkType(d.workType);
  const buildingLabel = humanizeBuildingType(d.buildingType);
  const firstAddrPart = d.address.split(',')[0]?.trim() ?? '';

  if (firstAddrPart) return `${workLabel} — ${firstAddrPart}`;
  return `${workLabel} on ${buildingLabel}`;
}

function humanizeWorkType(s: string): string {
  switch (s) {
    case 'extension': return 'Extension';
    case 'conversion': return 'Conversion';
    case 'new-build': return 'New Build';
    case 'change-of-use': return 'Change of Use';
    case 'demolition': return 'Demolition';
    case 'renovation': return 'Renovation';
    default: return 'Planning Application';
  }
}

function humanizeBuildingType(s: string): string {
  switch (s) {
    case 'house': return 'house';
    case 'flat': return 'flat';
    case 'commercial': return 'commercial property';
    case 'land': return 'land';
    case 'mixed': return 'mixed-use property';
    default: return 'property';
  }
}
