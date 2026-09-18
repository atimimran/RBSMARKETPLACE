// 'use client';

// import { useState } from 'react';
// import { 
//   MapPin, 
//   Package, 
//   SlidersHorizontal, 
//   Weight, 
//   ArrowRightLeft, 
//   ChevronDown, 
//   ChevronUp, 
//   Search 
// } from 'lucide-react';

// interface SearchFormProps {
//   activeCategory: string;
// }

// export default function SearchForm({ activeCategory }: SearchFormProps) {
//   const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false);
//   const [fromLocation, setFromLocation] = useState<string>('Shanghai, China (SHA)');
//   const [toLocation, setToLocation] = useState<string>('Jieyang, China (SWA)');
//   const [cargoType, setCargoType] = useState<string>('General Cargo');
//   const [trailer, setTrailer] = useState<string>('1 x 20ft Container');
//   const [weightTerm, setWeightTerm] = useState<string>('FOB');

//   const handleSwap = () => {
//     const temp = fromLocation;
//     setFromLocation(toLocation);
//     setToLocation(temp);
//   };

//   return (
//     <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-200/80 w-full">
      
//       {/* Dynamic Form Fields based on Category */}
//       {activeCategory === 'brokers' ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mb-5">
//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <span className="block text-[11px] text-gray-400 mb-1">Customs Port</span>
//             <input type="text" defaultValue="Port of Los Angeles (USLAX)" className="w-full text-xs font-semibold text-gray-800 focus:outline-none" />
//           </div>
//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <span className="block text-[11px] text-gray-400 mb-1">Service Required</span>
//             <select className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer">
//               <option>Import Clearance</option>
//               <option>Export Clearance</option>
//             </select>
//           </div>
//         </div>
//       ) : activeCategory === 'warehouses' ? (
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mb-5">
//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <span className="block text-[11px] text-gray-400 mb-1">Location</span>
//             <input type="text" defaultValue="Rotterdam, Netherlands" className="w-full text-xs font-semibold text-gray-800 focus:outline-none" />
//           </div>
//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <span className="block text-[11px] text-gray-400 mb-1">Storage Type</span>
//             <select className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer">
//               <option>Bonded Storage</option>
//               <option>Cold Chain</option>
//             </select>
//           </div>
//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <span className="block text-[11px] text-gray-400 mb-1">Space Needed</span>
//             <input type="text" defaultValue="500 CBM" className="w-full text-xs font-semibold text-gray-800 focus:outline-none" />
//           </div>
//         </div>
//       ) : activeCategory === 'manufacturers' ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mb-5">
//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <span className="block text-[11px] text-gray-400 mb-1">Industry</span>
//             <input type="text" defaultValue="Electronics & Hardware" className="w-full text-xs font-semibold text-gray-800 focus:outline-none" />
//           </div>
//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <span className="block text-[11px] text-gray-400 mb-1">Region</span>
//             <select className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer">
//               <option>Asia-Pacific</option>
//               <option>Europe</option>
//             </select>
//           </div>
//         </div>
//       ) : (
//         /* Freight Quotes / Shipping Lines Fields */
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center mb-5 relative">
          
//           <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//             <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//               <MapPin className="w-3 h-3" /><span>From</span>
//             </div>
//             <input 
//               type="text" 
//               value={fromLocation ?? ''}
//               onChange={(e) => setFromLocation(e.target.value)}
//               className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent truncate pr-4"
//             />
//             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs cursor-pointer" onClick={() => setFromLocation('')}>×</span>
//           </div>

//           <button 
//             onClick={handleSwap}
//             className="hidden lg:flex absolute left-[38%] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 w-6 h-6 rounded-full items-center justify-center text-gray-600 shadow-2xs hover:bg-gray-50 transition"
//           >
//             <ArrowRightLeft className="w-3 h-3" />
//           </button>

//           <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//             <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//               <MapPin className="w-3 h-3" /><span>To</span>
//             </div>
//             <input 
//               type="text" 
//               value={toLocation ?? ''}
//               onChange={(e) => setToLocation(e.target.value)}
//               className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent truncate pr-4"
//             />
//             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs cursor-pointer" onClick={() => setToLocation('')}>×</span>
//           </div>

//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
//               <Package className="w-3 h-3" /><span>Cargo Type</span>
//             </div>
//             <select 
//               value={cargoType ?? 'General Cargo'}
//               onChange={(e) => setCargoType(e.target.value)}
//               className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
//             >
//               <option>General Cargo</option>
//               <option>Hazardous</option>
//               <option>Refrigerated</option>
//             </select>
//           </div>

//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
//               <SlidersHorizontal className="w-3 h-3" /><span>Trailer</span>
//             </div>
//             <select 
//               value={trailer ?? '1 x 20ft Container'}
//               onChange={(e) => setTrailer(e.target.value)}
//               className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
//             >
//               <option>1 x 20ft Container</option>
//               <option>1 x 40ft Container</option>
//               <option>Dry Van</option>
//             </select>
//           </div>

//           <div className="p-3 rounded-xl border border-gray-200 bg-white">
//             <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
//               <Weight className="w-3 h-3" /><span>Weight</span>
//             </div>
//             <select 
//               value={weightTerm ?? 'FOB'}
//               onChange={(e) => setWeightTerm(e.target.value)}
//               className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
//             >
//               <option>FOB</option>
//               <option>EXW</option>
//               <option>CIF</option>
//             </select>
//           </div>

//         </div>
//       )}

//       {/* Footer / Get Quotes button */}
//       <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
//         <button 
//           onClick={() => setShowMoreOptions(!showMoreOptions)}
//           className="flex items-center space-x-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
//         >
//           <span>More Options</span>
//           {showMoreOptions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
//         </button>

//         <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md shadow-blue-600/25 transition">
//           <Search className="w-3.5 h-3.5" />
//           <span>Get Quotes</span>
//         </button>
//       </div>

//       {showMoreOptions && (
//         <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
//           <div>
//             <label className="block font-semibold text-gray-600 mb-1">Insurance</label>
//             <select className="w-full p-2 bg-white border border-gray-200 rounded-xl">
//               <option>Full Cover</option>
//               <option>Basic</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold text-gray-600 mb-1">Customs</label>
//             <select className="w-full p-2 bg-white border border-gray-200 rounded-xl">
//               <option>Include Both</option>
//               <option>None</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold text-gray-600 mb-1">Carrier Note</label>
//             <input type="text" placeholder="Preferred carrier" className="w-full p-2 bg-white border border-gray-200 rounded-xl" />
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { 
  MapPin, 
  Package, 
  SlidersHorizontal, 
  Weight, 
  ArrowRightLeft, 
  ChevronDown, 
  ChevronUp, 
  Search 
} from 'lucide-react';

interface SearchFormProps {
  activeCategory: string;
}

export default function SearchForm({ activeCategory }: SearchFormProps) {
  const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false);
  const [fromLocation, setFromLocation] = useState<string>('Shanghai, China (SHA)');
  const [toLocation, setToLocation] = useState<string>('Jieyang, China (SWA)');
  const [cargoType, setCargoType] = useState<string>('General Cargo');
  const [trailer, setTrailer] = useState<string>('1 x 20ft Container');
  const [weightTerm, setWeightTerm] = useState<string>('FOB');

  const handleSwap = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-200/80 w-full">
      
      {/* Dynamic Form Fields based on Category */}
      {activeCategory === 'brokers' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mb-5">
          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <span className="block text-[11px] text-gray-400 mb-1">Customs Port</span>
            <input type="text" defaultValue="Port of Los Angeles (USLAX)" className="w-full text-xs font-semibold text-gray-800 focus:outline-none" />
          </div>
          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <span className="block text-[11px] text-gray-400 mb-1">Service Required</span>
            <select className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer">
              <option>Import Clearance</option>
              <option>Export Clearance</option>
            </select>
          </div>
        </div>
      ) : activeCategory === 'warehouses' ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mb-5">
          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <span className="block text-[11px] text-gray-400 mb-1">Location</span>
            <input type="text" defaultValue="Rotterdam, Netherlands" className="w-full text-xs font-semibold text-gray-800 focus:outline-none" />
          </div>
          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <span className="block text-[11px] text-gray-400 mb-1">Storage Type</span>
            <select className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer">
              <option>Bonded Storage</option>
              <option>Cold Chain</option>
            </select>
          </div>
          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <span className="block text-[11px] text-gray-400 mb-1">Space Needed</span>
            <input type="text" defaultValue="500 CBM" className="w-full text-xs font-semibold text-gray-800 focus:outline-none" />
          </div>
        </div>
      ) : activeCategory === 'manufacturers' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mb-5">
          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <span className="block text-[11px] text-gray-400 mb-1">Industry</span>
            <input type="text" defaultValue="Electronics & Hardware" className="w-full text-xs font-semibold text-gray-800 focus:outline-none" />
          </div>
          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <span className="block text-[11px] text-gray-400 mb-1">Region</span>
            <select className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer">
              <option>Asia-Pacific</option>
              <option>Europe</option>
            </select>
          </div>
        </div>
      ) : (
        /* Freight Quotes / Shipping Lines Fields */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center mb-5 relative">
          
          <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
            <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
              <MapPin className="w-3 h-3" /><span>From</span>
            </div>
            <input 
              type="text" 
              value={fromLocation ?? ''}
              onChange={(e) => setFromLocation(e.target.value)}
              className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent truncate pr-4"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs cursor-pointer" onClick={() => setFromLocation('')}>×</span>
          </div>

          <button 
            onClick={handleSwap}
            className="hidden lg:flex absolute left-[18%] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 w-6 h-6 rounded-full items-center justify-center text-gray-600 shadow-2xs hover:bg-gray-50 transition"
          >
            <ArrowRightLeft className="w-3 h-3" />
          </button>

          <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
            <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
              <MapPin className="w-3 h-3" /><span>To</span>
            </div>
            <input 
              type="text" 
              value={toLocation ?? ''}
              onChange={(e) => setToLocation(e.target.value)}
              className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent truncate pr-4"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs cursor-pointer" onClick={() => setToLocation('')}>×</span>
          </div>

          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
              <Package className="w-3 h-3" /><span>Cargo Type</span>
            </div>
            <select 
              value={cargoType ?? 'General Cargo'}
              onChange={(e) => setCargoType(e.target.value)}
              className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
            >
              <option>General Cargo</option>
              <option>Hazardous</option>
              <option>Refrigerated</option>
            </select>
          </div>

          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
              <SlidersHorizontal className="w-3 h-3" /><span>Trailer</span>
            </div>
            <select 
              value={trailer ?? '1 x 20ft Container'}
              onChange={(e) => setTrailer(e.target.value)}
              className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
            >
              <option>1 x 20ft Container</option>
              <option>1 x 40ft Container</option>
              <option>Dry Van</option>
            </select>
          </div>

          <div className="p-3 rounded-xl border border-gray-200 bg-white">
            <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
              <Weight className="w-3 h-3" /><span>Weight</span>
            </div>
            <select 
              value={weightTerm ?? 'FOB'}
              onChange={(e) => setWeightTerm(e.target.value)}
              className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
            >
              <option>FOB</option>
              <option>EXW</option>
              <option>CIF</option>
            </select>
          </div>

        </div>
      )}

      {/* Footer / Get Quotes button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
        <button 
          onClick={() => setShowMoreOptions(!showMoreOptions)}
          className="flex items-center space-x-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
        >
          <span>More Options</span>
          {showMoreOptions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md shadow-blue-600/25 transition">
          <Search className="w-3.5 h-3.5" />
          <span>Get Quotes</span>
        </button>
      </div>

      {showMoreOptions && (
        <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="block font-semibold text-gray-600 mb-1">Insurance</label>
            <select className="w-full p-2 bg-white border border-gray-200 rounded-xl">
              <option>Full Cover</option>
              <option>Basic</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-600 mb-1">Customs</label>
            <select className="w-full p-2 bg-white border border-gray-200 rounded-xl">
              <option>Include Both</option>
              <option>None</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-600 mb-1">Carrier Note</label>
            <input type="text" placeholder="Preferred carrier" className="w-full p-2 bg-white border border-gray-200 rounded-xl" />
          </div>
        </div>
      )}

    </div>
  );
}