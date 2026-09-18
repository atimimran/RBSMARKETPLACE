// 'use client';

// import { Ship, Truck, Warehouse, ShieldCheck, Factory } from 'lucide-react';

// interface CategoryTabsProps {
//   activeCategory: string;
//   setActiveCategory: (id: string) => void;
// }

// export default function CategoryTabs({ activeCategory, setActiveCategory }: CategoryTabsProps) {
//   const categories = [
//     { id: 'quotes', label: 'Freight Quotes', icon: Ship },
//     { id: 'lines', label: 'Shipping Lines', icon: Truck },
//     { id: 'warehouses', label: 'Warehouses', icon: Warehouse },
//     { id: 'brokers', label: 'Customs Brokers', icon: ShieldCheck },
//     { id: 'manufacturers', label: 'Manufacturers', icon: Factory },
//   ];

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
//       {categories.map((cat) => {
//         const IconComponent = cat.icon;
//         const isSelected = activeCategory === cat.id;
//         return (
//           <button
//             key={cat.id}
//             onClick={() => setActiveCategory(cat.id)}
//             className={`flex flex-col items-center justify-center py-3.5 px-3 rounded-2xl border transition-all ${
//               isSelected 
//                 ? 'bg-white border-blue-600 ring-1 ring-blue-600 text-blue-600 shadow-xs' 
//                 : 'bg-white/90 border-gray-200/80 hover:border-gray-300 text-gray-700 shadow-2xs'
//             }`}
//           >
//             <div className={`p-2 rounded-xl mb-1.5 ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
//               <IconComponent className="w-4 h-4" />
//             </div>
//             <span className="text-xs font-semibold text-center">{cat.label}</span>
//           </button>
//         );
//       })}
//     </div>
//   );
// }

'use client';

import {
  Ship,
  Truck,
  Warehouse,
  ShieldCheck,
  Factory,
} from 'lucide-react';

import type { SearchCategory } from './SearchForm/types';

interface CategoryTabsProps {
  activeCategory: SearchCategory;
  setActiveCategory: (id: SearchCategory) => void;
}

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
}: CategoryTabsProps) {
  const categories: {
    id: SearchCategory;
    label: string;
    icon: typeof Ship;
  }[] = [
    {
      id: 'quotes',
      label: 'Freight Quotes',
      icon: Ship,
    },
    {
      id: 'lines',
      label: 'Shipping Lines',
      icon: Truck,
    },
    {
      id: 'warehouses',
      label: 'Warehouses',
      icon: Warehouse,
    },
    {
      id: 'brokers',
      label: 'Customs Brokers',
      icon: ShieldCheck,
    },
    {
      id: 'manufacturers',
      label: 'Manufacturers',
      icon: Factory,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
      {categories.map((cat) => {
        const IconComponent = cat.icon;
        const isSelected = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`flex flex-col items-center justify-center py-3.5 px-3 rounded-2xl border transition-all ${
              isSelected
                ? 'bg-white border-blue-600 ring-1 ring-blue-600 text-blue-600 shadow-xs'
                : 'bg-white/90 border-gray-200/80 hover:border-gray-300 text-gray-700 shadow-2xs'
            }`}
          >
            <div
              className={`p-2 rounded-xl mb-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <IconComponent className="w-4 h-4" />
            </div>

            <span className="text-xs font-semibold text-center">
              {cat.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
