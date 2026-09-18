'use client';

import { useEffect, useState } from 'react';

import FreightFields from './FreightFields';
import BrokerFields from './BrokerFields';
import WarehouseFields from './WarehouseFields';
import ManufacturerFields from './ManufacturerFields';
import MoreOptions from './MoreOptions';

import { createDefaultFormData } from './formDefaults';

import type {
  SearchCategory,
  SearchFormData,
  SearchTab,
} from './types';

interface SearchFormProps {
  activeCategory: SearchCategory;
  activeTab: SearchTab;
}

export default function SearchForm({
  activeCategory,
  activeTab,
}: SearchFormProps) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const [formData, setFormData] = useState<SearchFormData>(() =>
    createDefaultFormData(activeCategory, activeTab)
  );

  /*
   * Category / tab change par form context update hota hai.
   * Baaki values preserve rahengi.
   */
  useEffect(() => {
    setFormData((current) => ({
      ...current,
      category: activeCategory,
      tab: activeTab,
    }));

    setShowMoreOptions(false);
  }, [activeCategory, activeTab]);

  const updateField = <K extends keyof SearchFormData>(
    field: K,
    value: SearchFormData[K]
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSwap = () => {
    setFormData((current) => ({
      ...current,
      fromLocation: current.toLocation,
      toLocation: current.fromLocation,
    }));
  };

  const handleMoreOptionsChange = (
    moreOptions: SearchFormData['moreOptions']
  ) => {
    setFormData((current) => ({
      ...current,
      moreOptions,
    }));
  };

  /*
   * Abhi API nahi hai.
   * Ye clean object future mein directly Redux/API ko diya ja sakta hai.
   */
  const handleSearch = () => {
    console.log('Search Form Data:', formData);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-200/80 w-full">

      {/* Category-aware fields */}
      {activeCategory === 'brokers' ? (
        <BrokerFields
          customsPort={formData.customsPort}
          serviceRequired={formData.serviceRequired}
          onCustomsPortChange={(value) =>
            updateField('customsPort', value)
          }
          onServiceChange={(value) =>
            updateField('serviceRequired', value)
          }
        />
      ) : activeCategory === 'warehouses' ? (
        <WarehouseFields
          location={formData.warehouseLocation}
          storageType={formData.storageType}
          spaceNeeded={formData.spaceNeeded}
          onLocationChange={(value) =>
            updateField('warehouseLocation', value)
          }
          onStorageChange={(value) =>
            updateField('storageType', value)
          }
          onSpaceChange={(value) =>
            updateField('spaceNeeded', value)
          }
        />
      ) : activeCategory === 'manufacturers' ? (
        <ManufacturerFields
          industry={formData.industry}
          region={formData.region}
          onIndustryChange={(value) =>
            updateField('industry', value)
          }
          onRegionChange={(value) =>
            updateField('region', value)
          }
        />
      ) : (
        <FreightFields
          fromLocation={formData.fromLocation}
          toLocation={formData.toLocation}
          cargoType={formData.cargoType}
          trailer={formData.trailer}
          weightTerm={formData.weightTerm}
          onFromChange={(value) =>
            updateField('fromLocation', value)
          }
          onToChange={(value) =>
            updateField('toLocation', value)
          }
          onCargoChange={(value) =>
            updateField('cargoType', value)
          }
          onTrailerChange={(value) =>
            updateField('trailer', value)
          }
          onWeightChange={(value) =>
            updateField('weightTerm', value)
          }
          onSwap={handleSwap}
        />
      )}

      <MoreOptions
        open={showMoreOptions}
        value={formData.moreOptions}
        onToggle={() =>
          setShowMoreOptions((current) => !current)
        }
        onChange={handleMoreOptionsChange}
      />

    </div>
  );
}
