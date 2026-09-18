// 'use client';

// import { useState } from 'react';
// import { 
//   Ship, 
//   Truck, 
//   Warehouse, 
//   ShieldCheck, 
//   Factory, 
//   ArrowRightLeft, 
//   ChevronDown, 
//   ChevronUp, 
//   Search, 
//   MapPin, 
//   Package, 
//   SlidersHorizontal,
//   Weight,
//   Building2,
//   FileText
// } from 'lucide-react';

// export default function SearchCard() {
//   const [activeTab, setActiveTab] = useState<'quote' | 'booking'>('quote');
//   const [activeCategory, setActiveCategory] = useState<string>('quotes');
//   const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false);

//   // Form states for Freight
//   const [fromLocation, setFromLocation] = useState<string>('Shanghai, China (SHA)');
//   const [toLocation, setToLocation] = useState<string>('Jieyang, China (SWA)');
//   const [cargoType, setCargoType] = useState<string>('General Cargo');
//   const [trailer, setTrailer] = useState<string>('1 x 20ft Container');
//   const [weightTerm, setWeightTerm] = useState<string>('FOB');

//   // Form states for Warehouses
//   const [warehouseLocation, setWarehouseLocation] = useState<string>('Rotterdam, Netherlands');
//   const [storageType, setStorageType] = useState<string>('Bonded Storage');
//   const [spaceNeeded, setSpaceNeeded] = useState<string>('500 CBM');

//   // Form states for Customs Brokers
//   const [customsPort, setCustomsPort] = useState<string>('Port of Los Angeles (USLAX)');
//   const [serviceRequired, setServiceRequired] = useState<string>('Import Clearance');

//   const categories = [
//     { id: 'quotes', label: 'Freight Quotes', icon: Ship },
//     { id: 'lines', label: 'Shipping Lines', icon: Truck },
//     { id: 'warehouses', label: 'Warehouses', icon: Warehouse },
//     { id: 'brokers', label: 'Customs Brokers', icon: ShieldCheck },
//     { id: 'manufacturers', label: 'Manufacturers', icon: Factory },
//   ];

//   const handleSwap = () => {
//     const temp = fromLocation;
//     setFromLocation(toLocation);
//     setToLocation(temp);
//   };

//   return (
//     <div className="w-full flex flex-col">
      
//       {/* 1. Category Icons Row */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
//         {categories.map((cat) => {
//           const IconComponent = cat.icon;
//           const isSelected = activeCategory === cat.id;
//           return (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all ${
//                 isSelected 
//                   ? 'bg-white border-blue-600 ring-1 ring-blue-600 text-blue-600 shadow-2xs' 
//                   : 'bg-white/90 border-gray-200/80 hover:border-gray-300 text-gray-700 shadow-2xs'
//               }`}
//             >
//               <div className={`p-2 rounded-xl mb-1.5 ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
//                 <IconComponent className="w-4 h-4" />
//               </div>
//               <span className="text-xs font-semibold text-center">{cat.label}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* 2. Sub-tabs */}
//       <div className="flex items-center space-x-2.5 mb-4">
//         <button
//           onClick={() => setActiveTab('quote')}
//           className={`px-5 py-2 rounded-full text-xs font-semibold transition ${
//             activeTab === 'quote' 
//               ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' 
//               : 'bg-white text-gray-600 border border-gray-200/80 hover:bg-gray-50'
//           }`}
//         >
//           Freight Quote
//         </button>
//         <button
//           onClick={() => setActiveTab('booking')}
//           className={`px-5 py-2 rounded-full text-xs font-semibold transition ${
//             activeTab === 'booking' 
//               ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' 
//               : 'bg-white text-gray-600 border border-gray-200/80 hover:bg-gray-50'
//           }`}
//         >
//           Instant Booking
//         </button>
//       </div>

//       {/* 3. White Form Card Box */}
//       <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-200/80">
        
//         {/* Dynamic Form Fields Based on Selected Category */}
//         {activeCategory === 'brokers' ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mb-5">
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <MapPin className="w-3 h-3" /><span>Customs Port</span>
//               </div>
//               <input 
//                 type="text" 
//                 value={customsPort}
//                 onChange={(e) => setCustomsPort(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent"
//               />
//             </div>
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <ShieldCheck className="w-3 h-3" /><span>Service Required</span>
//               </div>
//               <select 
//                 value={serviceRequired}
//                 onChange={(e) => setServiceRequired(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
//               >
//                 <option>Import Clearance</option>
//                 <option>Export Clearance</option>
//                 <option>Both Import & Export</option>
//               </select>
//             </div>
//           </div>
//         ) : activeCategory === 'warehouses' ? (
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mb-5">
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <MapPin className="w-3 h-3" /><span>Location</span>
//               </div>
//               <input 
//                 type="text" 
//                 value={warehouseLocation}
//                 onChange={(e) => setWarehouseLocation(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent"
//               />
//             </div>
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <Warehouse className="w-3 h-3" /><span>Storage Type</span>
//               </div>
//               <select 
//                 value={storageType}
//                 onChange={(e) => setStorageType(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
//               >
//                 <option>Bonded Storage</option>
//                 <option>Cold Chain</option>
//                 <option>General Warehouse</option>
//               </select>
//             </div>
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <Package className="w-3 h-3" /><span>Space Needed</span>
//               </div>
//               <input 
//                 type="text" 
//                 value={spaceNeeded}
//                 onChange={(e) => setSpaceNeeded(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent"
//               />
//             </div>
//           </div>
//         ) : activeCategory === 'manufacturers' ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mb-5">
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <Building2 className="w-3 h-3" /><span>Industry / Product</span>
//               </div>
//               <input 
//                 type="text" 
//                 defaultValue="Electronics & Hardware"
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent"
//               />
//             </div>
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <MapPin className="w-3 h-3" /><span>Region</span>
//               </div>
//               <select className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer">
//                 <option>Asia-Pacific</option>
//                 <option>North America</option>
//                 <option>Europe</option>
//               </select>
//             </div>
//           </div>
//         ) : (
//           /* Standard Freight Quotes / Shipping Lines Form */
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center mb-5 relative">
            
//             {/* From */}
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <MapPin className="w-3 h-3" /><span>From</span>
//               </div>
//               <input 
//                 type="text" 
//                 value={fromLocation}
//                 onChange={(e) => setFromLocation(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent truncate pr-4"
//               />
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs cursor-pointer hover:text-gray-600" onClick={() => setFromLocation('')}>×</span>
//             </div>

//             {/* Swap Button */}
//             <button 
//               onClick={handleSwap}
//               className="hidden lg:flex absolute left-[38%] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 w-6 h-6 rounded-full items-center justify-center text-gray-600 shadow-2xs hover:bg-gray-50 transition"
//             >
//               <ArrowRightLeft className="w-3 h-3" />
//             </button>

//             {/* To */}
//             <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
//               <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
//                 <MapPin className="w-3 h-3" /><span>To</span>
//               </div>
//               <input 
//                 type="text" 
//                 value={toLocation}
//                 onChange={(e) => setToLocation(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent truncate pr-4"
//               />
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs cursor-pointer hover:text-gray-600" onClick={() => setToLocation('')}>×</span>
//             </div>

//             {/* Cargo Type */}
//             <div className="p-3 rounded-xl border border-gray-200 bg-white">
//               <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
//                 <Package className="w-3 h-3" /><span>Cargo Type</span>
//               </div>
//               <select 
//                 value={cargoType}
//                 onChange={(e) => setCargoType(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
//               >
//                 <option>General Cargo</option>
//                 <option>Hazardous</option>
//                 <option>Refrigerated</option>
//               </select>
//             </div>

//             {/* Trailer */}
//             <div className="p-3 rounded-xl border border-gray-200 bg-white">
//               <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
//                 <SlidersHorizontal className="w-3 h-3" /><span>Trailer</span>
//               </div>
//               <select 
//                 value={trailer}
//                 onChange={(e) => setTrailer(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
//               >
//                 <option>1 x 20ft Container</option>
//                 <option>1 x 40ft Container</option>
//                 <option>Dry Van</option>
//               </select>
//             </div>

//             {/* Weight */}
//             <div className="p-3 rounded-xl border border-gray-200 bg-white">
//               <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
//                 <Weight className="w-3 h-3" /><span>Weight</span>
//               </div>
//               <select 
//                 value={weightTerm}
//                 onChange={(e) => setWeightTerm(e.target.value)}
//                 className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
//               >
//                 <option>FOB</option>
//                 <option>EXW</option>
//                 <option>CIF</option>
//               </select>
//             </div>

//           </div>
//         )}

//         {/* Bottom Action Footer */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
//           <button 
//             onClick={() => setShowMoreOptions(!showMoreOptions)}
//             className="flex items-center space-x-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
//           >
//             <span>More Options</span>
//             {showMoreOptions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
//           </button>

//           <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md shadow-blue-600/25 transition">
//             <Search className="w-3.5 h-3.5" />
//             <span>Get Quotes</span>
//           </button>
//         </div>

//         {showMoreOptions && (
//           <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
//             <div>
//               <label className="block font-semibold text-gray-600 mb-1">Insurance</label>
//               <select className="w-full p-2 bg-white border border-gray-200 rounded-xl">
//                 <option>Full Cover</option>
//                 <option>Basic</option>
//               </select>
//             </div>
//             <div>
//               <label className="block font-semibold text-gray-600 mb-1">Customs</label>
//               <select className="w-full p-2 bg-white border border-gray-200 rounded-xl">
//                 <option>Include Both</option>
//                 <option>None</option>
//               </select>
//             </div>
//             <div>
//               <label className="block font-semibold text-gray-600 mb-1">Carrier Note</label>
//               <input type="text" placeholder="Preferred carrier" className="w-full p-2 bg-white border border-gray-200 rounded-xl" />
//             </div>
//           </div>
//         )}

//       </div>

//     </div>
//   );
// }