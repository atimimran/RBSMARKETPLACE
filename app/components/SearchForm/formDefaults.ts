import type { SearchFormData, SearchCategory, SearchTab } from './types';

export const createDefaultFormData = (
  category: SearchCategory = 'quotes',
  tab: SearchTab = 'quote'
): SearchFormData => ({
  category,
  tab,

  fromLocation: 'Shanghai, China (SHA)',
  toLocation: 'Jieyang, China (SWA)',

  cargoType: 'General Cargo',
  trailer: '1 x 20ft Container',
  weightTerm: 'FOB',

  customsPort: 'Port of Los Angeles (USLAX)',
  serviceRequired: 'Import Clearance',

  warehouseLocation: 'Rotterdam, Netherlands',
  storageType: 'Bonded Storage',
  spaceNeeded: '500 CBM',

  industry: 'Electronics & Hardware',
  region: 'Asia-Pacific',

  moreOptions: {
    insurance: 'Full Cover',
    customs: 'Include Both',
    carrierNote: '',
  },
});
