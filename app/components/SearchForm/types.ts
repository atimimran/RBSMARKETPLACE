export type SearchCategory =
  | 'quotes'
  | 'lines'
  | 'warehouses'
  | 'brokers'
  | 'manufacturers';

export type SearchTab = 'quote' | 'booking';

export interface MoreOptionsData {
  insurance: string;
  customs: string;
  carrierNote: string;
}

export interface SearchFormData {
  category: SearchCategory;
  tab: SearchTab;

  fromLocation: string;
  toLocation: string;

  cargoType: string;
  trailer: string;
  weightTerm: string;

  customsPort: string;
  serviceRequired: string;

  warehouseLocation: string;
  storageType: string;
  spaceNeeded: string;

  industry: string;
  region: string;

  moreOptions: MoreOptionsData;
}
