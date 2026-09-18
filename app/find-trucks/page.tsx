// 'use client';

// import { useState } from 'react';
// import { 
//   Ship, Truck, Box, Warehouse, MapPin, Calendar, SlidersHorizontal, 
//   Search, ChevronDown, Bell, User, Heart, ChevronRight, Star, ShieldCheck, CheckCircle2, ArrowUpDown, List, Map, X 
// } from 'lucide-react';

// export default function FindTrucksPage() {
//   // State for filters, pagination, and expandable "Make Offer" drawer
//   const [expandedOfferId, setExpandedOfferId] = useState<number | null>(2); // Default 2nd open like screenshot
//   const [offerForm, setOfferForm] = useState({
//     rate: '2.05',
//     pickupDate: 'Sep 12, 2025',
//     pickupTime: '14:00',
//     weight: '45,000',
//     equipment: 'Dry Van (53 ft)',
//     comments: ''
//   });

//   const trucksData = [
//     {
//       id: 1,
//       name: 'Sunrise Logistics',
//       verified: true,
//       rating: '4.8',
//       reviews: '210',
//       location: 'Fort Worth, TX (120 mi)',
//       badge: 'On Time 98%',
//       badge2: 'ELD Verified',
//       equipment: 'Dry Van (53 ft)',
//       availability: 'Sep 12, 2025',
//       capacity: '45,000 lbs',
//       driverType: 'Solo',
//       deadhead: '35 miles',
//       ratePerMile: '$2.10 / mile',
//       image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400&auto=format&fit=crop'
//     },
//     {
//       id: 2,
//       name: 'Metro Carriers',
//       verified: true,
//       rating: '4.6',
//       reviews: '128',
//       location: 'Arlington, TX (25 mi)',
//       badge: '24/7 Dispatch',
//       badge2: 'Insured',
//       equipment: 'Reefer (53 ft)',
//       availability: 'Sep 11, 2025',
//       temperature: '-20°C to 20°C',
//       capacity: '42,000 lbs',
//       deadhead: '10 miles',
//       ratePerMile: '$2.35 / mile',
//       image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=400&auto=format&fit=crop'
//     },
//     {
//       id: 3,
//       name: 'Lone Star Transport',
//       verified: true,
//       rating: '4.7',
//       reviews: '96',
//       location: 'Dallas, TX (15 mi)',
//       badge: 'Flatbed Specialist',
//       badge2: 'Oversize OK',
//       equipment: 'Flatbed (48 ft)',
//       availability: 'Sep 13, 2025',
//       capacity: '48,000 lbs',
//       driverType: 'Team',
//       deadhead: '10 miles',
//       ratePerMile: '$2.00 / mile',
//       image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop'
//     },
//     {
//       id: 4,
//       name: 'Rapid Freight Solutions',
//       verified: true,
//       rating: '4.5',
//       reviews: '74',
//       location: 'Waco, TX (90 mi)',
//       badge: 'Power Only',
//       badge2: 'Flexible Scheduling',
//       equipment: 'Power Only',
//       mcNumber: 'MC 987654',
//       availability: 'Sep 14, 2025',
//       driverType: 'Solo',
//       deadhead: '90 miles',
//       ratePerMile: '$1.85 / mile',
//       image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=400&auto=format&fit=crop'
//     }
//   ];

//   const toggleOffer = (id: number) => {
//     setExpandedOfferId(expandedOfferId === id ? null : id);
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans antialiased select-none">
      
//       {/* Top Navbar */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          
//           {/* Logo & Main Nav Links */}
//           <div className="flex items-center space-x-8">
//             <div className="flex items-center space-x-2">
//               <div className="bg-blue-600 text-white p-2 rounded-xl shadow-xs">
//                 <Ship className="w-5 h-5" />
//               </div>
//               <span className="font-extrabold text-lg tracking-tight text-gray-900">RBS<span className="text-blue-600"> MARKETPLACE</span></span>
//             </div>

//             <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-gray-600">
//               <a href="#" className="flex items-center space-x-1.5 text-blue-600 border-b-2 border-blue-600 pb-5 pt-5"><Truck className="w-4 h-4" /><span>Transportation</span></a>
//               <a href="#" className="flex items-center space-x-1.5 hover:text-blue-600 transition pt-5 pb-5"><ShieldCheck className="w-4 h-4" /><span>Customs Brokers</span></a>
//               <a href="#" className="flex items-center space-x-1.5 hover:text-blue-600 transition pt-5 pb-5"><Ship className="w-4 h-4" /><span>Shipping Lines</span></a>
//               <a href="#" className="flex items-center space-x-1.5 hover:text-blue-600 transition pt-5 pb-5"><Warehouse className="w-4 h-4" /><span>Warehousing</span></a>
//             </nav>
//           </div>

//           {/* Right Header Actions */}
//           <div className="flex items-center space-x-5">
//             <a href="#" className="flex items-center space-x-1.5 text-xs font-semibold text-gray-700 hover:text-blue-600">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//               <span>Track Shipment</span>
//             </a>

//             <div className="flex items-center space-x-1 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg text-xs font-bold text-gray-700 cursor-pointer">
//               <span>USD</span>
//               <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//             </div>

//             <div className="relative cursor-pointer">
//               <Bell className="w-5 h-5 text-gray-600" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
//             </div>

//             <div className="flex items-center space-x-2 pl-2 border-l border-gray-200">
//               <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
//                 JD
//               </div>
//               <div className="hidden lg:block text-left leading-tight">
//                 <span className="text-xs font-bold text-gray-900 block">John D.</span>
//                 <span className="text-[10px] text-gray-400 font-medium">Carrier</span>
//               </div>
//               <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//             </div>
//           </div>

//         </div>
//       </header>

//       {/* Hero Banner Section with Find Trucks Title */}
//       <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-8 px-6 shadow-md relative overflow-hidden">
//         <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
//           <div>
//             <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Find Trucks</h1>
//             <p className="text-gray-300 text-xs mt-1">Available trucks. Reliable carriers. Move more, faster.</p>
//           </div>
//           <div className="hidden lg:block text-right">
//             <span className="text-xs uppercase font-bold tracking-widest text-blue-400 block">Trusted Carriers</span>
//             <span className="text-sm font-semibold text-gray-200">For Every Mile.</span>
//           </div>
//         </div>
//       </div>

//       {/* Top Search Filter Widget */}
//       <div className="max-w-[1440px] mx-auto px-6 -mt-4 relative z-20">
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 space-y-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
//             {/* Origin */}
//             <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-between">
//               <div className="space-y-0.5">
//                 <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">Origin</span>
//                 <div className="flex items-center space-x-1.5 text-xs font-bold text-gray-800">
//                   <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
//                   <span>Dallas, TX (DFW)</span>
//                 </div>
//               </div>
//               <X className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-gray-600" />
//             </div>

//             {/* Destination */}
//             <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-between">
//               <div className="space-y-0.5">
//                 <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">Destination</span>
//                 <div className="flex items-center space-x-1.5 text-xs font-bold text-gray-800">
//                   <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
//                   <span>Los Angeles, CA (LAX)</span>
//                 </div>
//               </div>
//               <X className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-gray-600" />
//             </div>

//             {/* Date Range */}
//             <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-between">
//               <div className="space-y-0.5">
//                 <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">Date Range</span>
//                 <div className="flex items-center space-x-1.5 text-xs font-bold text-gray-800">
//                   <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
//                   <span>Sep 10, 2025 – Sep 20, 2025</span>
//                 </div>
//               </div>
//             </div>

//             {/* Equipment Type */}
//             <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-between">
//               <div className="space-y-0.5 w-full">
//                 <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">Equipment Type</span>
//                 <div className="flex items-center justify-between text-xs font-bold text-gray-800">
//                   <span>All Equipment</span>
//                   <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//                 </div>
//               </div>
//             </div>

//             {/* Load Type */}
//             <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-between">
//               <div className="space-y-0.5 w-full">
//                 <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">Load Type</span>
//                 <div className="flex items-center justify-between text-xs font-bold text-gray-800">
//                   <span>All Load Types</span>
//                   <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* Secondary Filter Sliders Row */}
//           <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
//             <div className="flex flex-wrap items-center gap-6">
//               <div className="flex items-center space-x-2">
//                 <span className="text-xs font-semibold text-gray-600">Length (ft):</span>
//                 <select className="bg-gray-50 border border-gray-200 text-xs font-bold rounded-lg px-2.5 py-1.5 text-gray-800">
//                   <option>Any Length</option>
//                   <option>53 ft</option>
//                   <option>48 ft</option>
//                 </select>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <span className="text-xs font-semibold text-gray-600">Weight (lbs):</span>
//                 <select className="bg-gray-50 border border-gray-200 text-xs font-bold rounded-lg px-2.5 py-1.5 text-gray-800">
//                   <option>Any Weight</option>
//                   <option>Up to 45,000 lbs</option>
//                 </select>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <span className="text-xs font-semibold text-gray-600">Rate ($/mi):</span>
//                 <input type="range" className="accent-blue-600 h-1.5 bg-gray-200 rounded-lg w-32 cursor-pointer" />
//                 <span className="text-[11px] font-bold text-blue-600">$0.50 – $5.00</span>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <button className="text-xs font-bold text-gray-500 hover:text-gray-800 transition">Clear All</button>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-md shadow-blue-600/20 transition">
//                 <Search className="w-3.5 h-3.5" />
//                 <span>Search Trucks</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Layout (Sidebar Filters + Results Feed) */}
//       <main className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
//         {/* Left Sidebar Filters */}
//         <aside className="lg:col-span-3 space-y-6">
//           <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-6 shadow-xs">
//             <div className="flex items-center justify-between pb-3 border-b border-gray-100">
//               <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Filters</h3>
//               <button className="text-[11px] text-blue-600 font-bold hover:underline">Clear All</button>
//             </div>

//             {/* Rate Filter */}
//             <div className="space-y-2">
//               <div className="flex justify-between text-xs font-bold text-gray-700">
//                 <span>Rate (USD per mile)</span>
//                 <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//               </div>
//               <input type="range" className="w-full accent-blue-600 h-1 bg-gray-200 rounded-lg cursor-pointer" />
//               <div className="flex justify-between text-[10px] font-bold text-gray-500">
//                 <span>$0.50</span>
//                 <span>$5.00</span>
//               </div>
//             </div>

//             {/* Equipment Type Checkboxes */}
//             <div className="space-y-3 pt-2 border-t border-gray-100">
//               <div className="flex justify-between text-xs font-bold text-gray-700">
//                 <span>Equipment Type</span>
//                 <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//               </div>
//               <div className="space-y-2 text-xs font-medium text-gray-600">
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" defaultChecked className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span className="font-bold text-gray-900">Dry Van</span></div><span className="text-gray-400 text-[11px]">1,248</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Reefer</span></div><span className="text-gray-400 text-[11px]">624</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Flatbed</span></div><span className="text-gray-400 text-[11px]">412</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Step Deck</span></div><span className="text-gray-400 text-[11px]">210</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Hotshot</span></div><span className="text-gray-400 text-[11px]">96</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Power Only</span></div><span className="text-gray-400 text-[11px]">180</span></label>
//               </div>
//             </div>

//             {/* Availability Date Filter */}
//             <div className="space-y-3 pt-2 border-t border-gray-100">
//               <div className="flex justify-between text-xs font-bold text-gray-700">
//                 <span>Availability Date</span>
//                 <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//               </div>
//               <div className="space-y-2 text-xs font-medium text-gray-600">
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Today</span></div><span className="text-gray-400 text-[11px]">320</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Next 3 Days</span></div><span className="text-gray-400 text-[11px]">1,102</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Next 7 Days</span></div><span className="text-gray-400 text-[11px]">1,980</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>Next 14 Days</span></div><span className="text-gray-400 text-[11px]">2,340</span></label>
//               </div>
//             </div>

//             {/* Carrier Rating */}
//             <div className="space-y-3 pt-2 border-t border-gray-100">
//               <div className="flex justify-between text-xs font-bold text-gray-700">
//                 <span>Carrier Rating</span>
//                 <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//               </div>
//               <div className="space-y-2 text-xs font-medium text-gray-600">
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>★★★★★ & up</span></div><span className="text-gray-400 text-[11px]">842</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>★★★★☆ & up</span></div><span className="text-gray-400 text-[11px]">1,560</span></label>
//                 <label className="flex items-center justify-between cursor-pointer"><div className="flex items-center space-x-2"><input type="checkbox" className="rounded text-blue-600 accent-blue-600 w-3.5 h-3.5" /><span>★★★☆☆ & up</span></div><span className="text-gray-400 text-[11px]">2,120</span></label>
//               </div>
//             </div>

//           </div>
//         </aside>

//         {/* Right Search Results Feed */}
//         <section className="lg:col-span-9 space-y-4">
          
//           {/* Results Summary Header */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white rounded-2xl border border-gray-200 px-5 py-4 shadow-xs gap-3">
//             <div>
//               <h2 className="text-base font-extrabold text-gray-900 tracking-tight">342 trucks available</h2>
//               <p className="text-xs text-gray-500 mt-0.5">Dallas, TX (DFW) → Los Angeles, CA (LAX)</p>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <span className="text-xs text-gray-500 font-semibold">Sort by</span>
//                 <select className="bg-gray-50 border border-gray-200 text-xs font-bold rounded-xl px-3 py-2 text-gray-800">
//                   <option>Best Match</option>
//                   <option>Lowest Rate</option>
//                   <option>Earliest Availability</option>
//                 </select>
//               </div>

//               <div className="flex bg-gray-100 p-1 rounded-xl">
//                 <button className="bg-white shadow-xs text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5">
//                   <List className="w-3.5 h-3.5" />
//                   <span>List</span>
//                 </button>
//                 <button className="text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition">
//                   <Map className="w-3.5 h-3.5" />
//                   <span>Map</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Truck Cards Feed */}
//           <div className="space-y-4">
//             {trucksData.map((truck) => (
//               <div key={truck.id} className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition hover:shadow-md">
                
//                 {/* Truck Main Summary Row */}
//                 <div className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  
//                   {/* Left: Thumbnail & Carrier Info */}
//                   <div className="flex items-start space-x-4">
//                     <img 
//                       src={truck.image} 
//                       alt={truck.name} 
//                       className="w-20 h-16 rounded-xl object-cover border border-gray-100 shrink-0"
//                     />
//                     <div className="space-y-1">
//                       <div className="flex items-center space-x-2">
//                         <h4 className="text-sm font-bold text-gray-900">{truck.name}</h4>
//                         {truck.verified && (
//                           <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center space-x-1">
//                             <ShieldCheck className="w-3 h-3" />
//                             <span>Verified</span>
//                           </span>
//                         )}
//                       </div>

//                       <div className="flex items-center space-x-1.5 text-xs text-gray-600 font-medium">
//                         <span className="text-amber-500 font-bold">{truck.rating}</span>
//                         <div className="flex text-amber-400">
//                           {[...Array(5)].map((_, i) => (
//                             <Star key={i} className="w-3 h-3 fill-current" />
//                           ))}
//                         </div>
//                         <span className="text-gray-400">({truck.reviews})</span>
//                       </div>

//                       <div className="flex items-center space-x-1 text-xs text-gray-500">
//                         <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
//                         <span>{truck.location}</span>
//                       </div>

//                       <div className="flex items-center space-x-2 pt-1">
//                         <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded">{truck.badge}</span>
//                         {truck.badge2 && <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded">{truck.badge2}</span>}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Middle: Equipment & Capacity Details */}
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 text-xs text-gray-600">
//                     <div><span className="text-gray-400 text-[10px] uppercase font-bold block">Equipment</span><span className="font-bold text-gray-800">{truck.equipment}</span></div>
//                     <div><span className="text-gray-400 text-[10px] uppercase font-bold block">Availability</span><span className="font-bold text-gray-800">{truck.availability}</span></div>
//                     {truck.temperature ? (
//                       <div><span className="text-gray-400 text-[10px] uppercase font-bold block">Temperature</span><span className="font-bold text-gray-800">{truck.temperature}</span></div>
//                     ) : (
//                       <div><span className="text-gray-400 text-[10px] uppercase font-bold block">Capacity</span><span className="font-bold text-gray-800">{truck.capacity}</span></div>
//                     )}
//                     {truck.driverType && <div><span className="text-gray-400 text-[10px] uppercase font-bold block">Driver Type</span><span className="font-bold text-gray-800">{truck.driverType}</span></div>}
//                     {truck.mcNumber && <div><span className="text-gray-400 text-[10px] uppercase font-bold block">MC Number</span><span className="font-bold text-gray-800">{truck.mcNumber}</span></div>}
//                   </div>

//                   {/* Right: Rate & Action Buttons */}
//                   <div className="flex items-center space-x-4 self-end md:self-center">
//                     <div className="text-right">
//                       <span className="text-[10px] text-gray-400 uppercase font-bold block">Deadhead to Origin</span>
//                       <span className="text-xs font-bold text-gray-700 block">{truck.deadhead}</span>
//                       <span className="text-[10px] text-gray-400 uppercase font-bold block mt-1">Rate</span>
//                       <span className="text-sm font-extrabold text-blue-600 block">{truck.ratePerMile}</span>
//                     </div>

//                     <div className="flex items-center space-x-2">
//                       <button 
//                         onClick={() => toggleOffer(truck.id)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition"
//                       >
//                         Make offer
//                       </button>
//                       <button 
//                         onClick={() => toggleOffer(truck.id)}
//                         className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-500 transition"
//                       >
//                         <ChevronDown className={`w-4 h-4 transition-transform ${expandedOfferId === truck.id ? 'rotate-180' : ''}`} />
//                       </button>
//                       <button className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-red-500 transition">
//                         <Heart className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>

//                 </div>

//                 {/* Expandable "Make an Offer" Drawer */}
//                 {expandedOfferId === truck.id && (
//                   <div className="bg-blue-50/50 border-t border-blue-100 p-6 space-y-4 animate-fadeIn">
//                     <div className="space-y-0.5">
//                       <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Make an Offer</h4>
//                       <p className="text-[11px] text-gray-500">Submit your rate and details for this truck. The carrier will review and get back to you.</p>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//                       <div>
//                         <label className="block text-[11px] font-bold text-gray-700 mb-1">Rate (USD per mile) <span className="text-red-500">*</span></label>
//                         <div className="relative">
//                           <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-bold">$</span>
//                           <input 
//                             type="text" 
//                             value={offerForm.rate}
//                             onChange={(e) => setOfferForm({ ...offerForm, rate: e.target.value })}
//                             className="w-full pl-7 pr-3 py-2 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-800 focus:outline-blue-600" 
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-[11px] font-bold text-gray-700 mb-1">Pickup Date <span className="text-red-500">*</span></label>
//                         <div className="relative">
//                           <input 
//                             type="text" 
//                             value={offerForm.pickupDate}
//                             onChange={(e) => setOfferForm({ ...offerForm, pickupDate: e.target.value })}
//                             className="w-full px-3 py-2 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-800 focus:outline-blue-600" 
//                           />
//                           <Calendar className="absolute right-3 top-2.5 w-3.5 h-3.5 text-gray-400" />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-[11px] font-bold text-gray-700 mb-1">Pickup Time <span className="text-red-500">*</span></label>
//                         <div className="relative">
//                           <input 
//                             type="text" 
//                             placeholder="Select time"
//                             value={offerForm.pickupTime}
//                             onChange={(e) => setOfferForm({ ...offerForm, pickupTime: e.target.value })}
//                             className="w-full px-3 py-2 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-800 focus:outline-blue-600" 
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-[11px] font-bold text-gray-700 mb-1">Weight (lbs) <span className="text-red-500">*</span></label>
//                         <input 
//                           type="text" 
//                           value={offerForm.weight}
//                           onChange={(e) => setOfferForm({ ...offerForm, weight: e.target.value })}
//                           className="w-full px-3 py-2 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-800 focus:outline-blue-600" 
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-[11px] font-bold text-gray-700 mb-1">Equipment <span className="text-red-500">*</span></label>
//                         <select 
//                           value={offerForm.equipment}
//                           onChange={(e) => setOfferForm({ ...offerForm, equipment: e.target.value })}
//                           className="w-full px-3 py-2 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-800 focus:outline-blue-600"
//                         >
//                           <option>Dry Van (53 ft)</option>
//                           <option>Reefer (53 ft)</option>
//                           <option>Flatbed (48 ft)</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label className="block text-[11px] font-bold text-gray-700 mb-1">Additional Comments (Optional)</label>
//                         <input 
//                           type="text" 
//                           placeholder="e.g. preferred route, special requirements, detention policy, etc."
//                           className="w-full px-3 py-2 bg-white rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600" 
//                         />
//                       </div>
//                     </div>

//                     <div className="flex justify-end space-x-3 pt-2">
//                       <button 
//                         onClick={() => setExpandedOfferId(null)}
//                         className="px-6 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl transition"
//                       >
//                         Cancel
//                       </button>
//                       <button 
//                         onClick={() => alert('Offer submitted successfully!')}
//                         className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 transition"
//                       >
//                         Submit Offer
//                       </button>
//                     </div>

//                   </div>
//                 )}

//               </div>
//             ))}
//           </div>

//           {/* Pagination Footer */}
//           <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl border border-gray-200 p-4 shadow-xs gap-4">
//             <div className="flex items-center space-x-1">
//               <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition">&larr;</button>
//               <button className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</button>
//               <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition">2</button>
//               <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition">3</button>
//               <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition">4</button>
//               <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition">5</button>
//               <span className="px-2 text-gray-400 font-bold">...</span>
//               <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition">35</button>
//               <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition">&rarr;</button>
//             </div>

//             <span className="text-xs text-gray-500 font-medium">Showing 1–10 of 342 trucks</span>
//           </div>

//         </section>

//       </main>

//     </div>
//   );
// }



////////////////////////////////////


// 'use client';

// import { useState } from 'react';
// import {
//   Truck,
//   Ship,
//   Warehouse,
//   ShieldCheck,
//   MapPin,
//   Calendar,
//   Search,
//   ChevronDown,
//   Bell,
//   Heart,
//   List,
//   Map,
//   X,
//   Menu,
//   Package,
//   Clock3,
//   UserRound,
//   Gauge,
//   ChevronLeft,
//   ChevronRight,
// } from 'lucide-react';

// type TruckItem = {
//   id: number;
//   name: string;
//   rating: string;
//   reviews: string;
//   location: string;
//   badge: string;
//   badge2?: string;
//   equipment: string;
//   availability: string;
//   capacity?: string;
//   temperature?: string;
//   driverType?: string;
//   mcNumber?: string;
//   deadhead: string;
//   rate: string;
//   image: string;
// };

// const trucks: TruckItem[] = [
//   {
//     id: 1,
//     name: 'Sunrise Logistics',
//     rating: '4.8',
//     reviews: '120',
//     location: 'Fort Worth, TX (120 mi)',
//     badge: 'On Time 98%',
//     badge2: 'ELD Verified',
//     equipment: 'Dry Van (53 ft)',
//     availability: 'Sep 12, 2025',
//     capacity: '45,000 lbs',
//     driverType: 'Solo',
//     deadhead: '35 miles',
//     rate: '$2.10 / mile',
//     image:
//       'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=500&auto=format&fit=crop',
//   },
//   {
//     id: 2,
//     name: 'Metro Carriers',
//     rating: '4.6',
//     reviews: '128',
//     location: 'Arlington, TX (25 mi)',
//     badge: '24/7 Dispatch',
//     badge2: 'Insured',
//     equipment: 'Reefer (53 ft)',
//     availability: 'Sep 11, 2025',
//     temperature: '-20°C to 20°C',
//     capacity: '42,000 lbs',
//     deadhead: '10 miles',
//     rate: '$2.35 / mile',
//     image:
//       'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=500&auto=format&fit=crop',
//   },
//   {
//     id: 3,
//     name: 'Lone Star Transport',
//     rating: '4.7',
//     reviews: '96',
//     location: 'Dallas, TX (15 mi)',
//     badge: 'Flatbed Specialist',
//     badge2: 'Oversize OK',
//     equipment: 'Flatbed (48 ft)',
//     availability: 'Sep 13, 2025',
//     capacity: '48,000 lbs',
//     driverType: 'Team',
//     deadhead: '10 miles',
//     rate: '$2.00 / mile',
//     image:
//       'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500&auto=format&fit=crop',
//   },
//   {
//     id: 4,
//     name: 'Rapid Freight Solutions',
//     rating: '4.5',
//     reviews: '74',
//     location: 'Waco, TX (90 mi)',
//     badge: 'Power Only',
//     badge2: 'Flexible Scheduling',
//     equipment: 'Power Only',
//     availability: 'Sep 14, 2025',
//     driverType: 'Solo',
//     mcNumber: 'MC 987654',
//     deadhead: '90 miles',
//     rate: '$1.85 / mile',
//     image:
//       'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=500&auto=format&fit=crop',
//   },
// ];

// export default function FindTrucksPage() {
//   const [expandedId, setExpandedId] = useState<number | null>(null);
//   const [favorites, setFavorites] = useState<number[]>([]);

//   const [offer, setOffer] = useState({
//     rate: '2.05',
//     pickupDate: 'Sep 12, 2025',
//     pickupTime: '',
//     weight: '45,000',
//     equipment: 'Dry Van (53 ft)',
//     comments: '',
//   });

//   const toggleOffer = (id: number) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id)
//         ? prev.filter((item) => item !== id)
//         : [...prev, id]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f9fc] text-[#172033] font-sans">

//       {/* ================= NAVBAR ================= */}
//       <header className="h-[56px] bg-white border-b border-[#e5e9ef]">
//         <div className="max-w-[1500px] mx-auto h-full px-5 flex items-center justify-between">

//           <div className="flex items-center h-full gap-7">

//             <Menu className="w-[19px] h-[19px] text-[#334155]" />

//             {/* LOGO */}
//             <div className="flex items-center text-[20px] font-extrabold tracking-tight">
//               <span className="text-[#17213a]">FREIGHT</span>
//               <span className="bg-[#1475e6] text-white px-[2px] rounded-[2px]">
//                 HUB
//               </span>
//             </div>

//             {/* NAV */}
//             <nav className="hidden lg:flex h-full gap-7 text-[12px] font-semibold">

//               <a
//                 href="#"
//                 className="h-full flex items-center gap-2 text-[#1475e6] border-b-[3px] border-[#1475e6]"
//               >
//                 <Truck className="w-[17px]" />
//                 Transportation
//               </a>

//               <a href="#" className="flex items-center gap-2">
//                 <ShieldCheck className="w-[17px]" />
//                 Customs Brokers
//               </a>

//               <a href="#" className="flex items-center gap-2">
//                 <Ship className="w-[17px]" />
//                 Shipping Lines
//               </a>

//               <a href="#" className="flex items-center gap-2">
//                 <Warehouse className="w-[17px]" />
//                 Warehousing
//               </a>

//             </nav>
//           </div>

//           <div className="flex items-center gap-5">

//             <div className="hidden xl:flex items-center gap-2 text-[12px] font-semibold">
//               <Package className="w-4" />
//               Track Shipment
//             </div>

//             <div className="hidden md:flex items-center gap-1 text-[12px]">
//               USD
//               <ChevronDown className="w-3.5" />
//             </div>

//             <div className="relative">
//               <Bell className="w-[19px] text-[#475569]" />
//               <span className="absolute -top-2 -right-2 w-[17px] h-[17px] bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">
//                 3
//               </span>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-9 h-9 rounded-full bg-[#17375f] text-white flex items-center justify-center text-[11px] font-bold">
//                 JD
//               </div>

//               <div className="hidden md:block leading-tight">
//                 <div className="text-[12px] font-bold">John D.</div>
//                 <div className="text-[10px] text-gray-400">Carrier</div>
//               </div>

//               <ChevronDown className="w-3.5 text-gray-500" />
//             </div>

//           </div>
//         </div>
//       </header>

//       {/* ================= HERO ================= */}
//       <section className="relative h-[122px] overflow-hidden bg-[#edf6ff]">

//         {/* RIGHT IMAGE */}
//         <div
//           className="absolute right-0 top-0 h-full w-[53%] bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop')",
//           }}
//         />

//         {/* LEFT GRADIENT */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#edf6ff] via-[#edf6ff]/95 via-[48%] to-transparent z-10" />

//         {/* TEXT */}
//         <div className="relative z-20 max-w-[1500px] mx-auto h-full px-8 flex items-center">

//           <div>
//             <h1 className="text-[32px] leading-none font-extrabold text-[#101b36]">
//               Find Trucks
//             </h1>

//             <p className="mt-2 text-[16px] text-[#5b6679]">
//               Available trucks. Reliable carriers. Move more, faster.
//             </p>
//           </div>

//           <div className="absolute right-[17%] hidden xl:block text-white drop-shadow-lg">
//             <div className="text-[20px] font-bold leading-tight">
//               Trusted Carriers
//               <br />
//               For Every Mile.
//             </div>

//             <div className="mt-3 w-12 h-[4px] bg-[#0877ed]" />
//           </div>

//         </div>
//       </section>

//       {/* ================= SEARCH FORM ================= */}
//       <section className="max-w-[1500px] mx-auto px-5 relative z-30 -mt-1">

//         <div className="bg-white border border-[#dfe5ec] rounded-[7px] shadow-[0_3px_14px_rgba(0,0,0,.08)] p-4">

//           {/* FIRST ROW */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

//             <SearchBox
//               label="Origin"
//               value="Dallas, TX (DFW)"
//               icon={<MapPin className="w-4 text-[#1573df]" />}
//               clear
//             />

//             <SearchBox
//               label="Destination"
//               value="Los Angeles, CA (LAX)"
//               icon={<MapPin className="w-4 text-[#334155]" />}
//               clear
//             />

//             <SearchBox
//               label="Date Range"
//               value="Sep 10, 2025 – Sep 20, 2025"
//               icon={<Calendar className="w-4" />}
//             />

//             <SearchBox
//               label="Equipment Type"
//               value="All Equipment"
//               icon={<Truck className="w-4" />}
//               dropdown
//             />

//             <SearchBox
//               label="Load Type"
//               value="All Load Types"
//               icon={<Package className="w-4" />}
//               dropdown
//             />

//           </div>

//           {/* SECOND ROW */}
//           <div className="mt-3 pt-3 border-t border-[#edf0f4] flex flex-wrap items-end gap-4">

//             <div className="w-[190px]">
//               <label className="text-[10px] font-extrabold block mb-1.5">
//                 Length (ft)
//               </label>

//               <button className="h-[36px] w-full border border-[#dfe4eb] rounded-[5px] px-3 flex items-center justify-between text-[11px] font-semibold">
//                 Any Length
//                 <ChevronDown className="w-3.5 text-gray-500" />
//               </button>
//             </div>

//             <div className="w-[190px]">
//               <label className="text-[10px] font-extrabold block mb-1.5">
//                 Weight (lbs)
//               </label>

//               <button className="h-[36px] w-full border border-[#dfe4eb] rounded-[5px] px-3 flex items-center justify-between text-[11px] font-semibold">
//                 Any Weight
//                 <ChevronDown className="w-3.5 text-gray-500" />
//               </button>
//             </div>

//             <div className="flex-1" />

//             <button className="h-[39px] px-3 text-[12px] font-semibold text-[#1671d7]">
//               Clear All
//             </button>

//             <button className="h-[39px] px-7 bg-[#0872e8] hover:bg-[#0665d4] rounded-[6px] text-white text-[12px] font-bold flex items-center gap-2 shadow-sm">
//               <Search className="w-4" />
//               Search Trucks
//             </button>

//           </div>
//         </div>
//       </section>

//       {/* ================= MAIN CONTENT ================= */}
//       <main className="max-w-[1500px] mx-auto px-5 py-5 grid grid-cols-[245px_minmax(0,1fr)] gap-5 items-start">

//         {/* ================= SIDEBAR ================= */}
//         <aside className="bg-white border border-[#dfe4eb] rounded-[6px] overflow-hidden">

//           <div className="h-[48px] px-4 border-b border-[#e8ecf1] flex items-center justify-between">
//             <h3 className="text-[13px] font-extrabold">
//               Filters
//             </h3>

//             <button className="text-[11px] font-semibold text-[#1671d7]">
//               Clear All
//             </button>
//           </div>

//           <FilterSection title="Equipment Type">

//             <Filter label="Dry Van" count="1,248" checked />
//             <Filter label="Reefer" count="624" />
//             <Filter label="Flatbed" count="412" />
//             <Filter label="Step Deck" count="210" />
//             <Filter label="Hotshot" count="96" />
//             <Filter label="Power Only" count="180" />

//           </FilterSection>

//           <FilterSection title="Availability Date">

//             <Filter label="Today" count="320" />
//             <Filter label="Next 3 Days" count="1,102" />
//             <Filter label="Next 7 Days" count="1,980" />
//             <Filter label="Next 14 Days" count="2,340" />

//           </FilterSection>

//           <FilterSection title="Carrier Rating">

//             <Filter label="★★★★★ & up" count="842" stars />
//             <Filter label="★★★★☆ & up" count="1,560" stars />
//             <Filter label="★★★☆☆ & up" count="2,120" stars />

//           </FilterSection>

//           <FilterSection title="Additional">

//             <Filter label="ELD Verified" count="1,980" />
//             <Filter label="Hazmat Endorsement" count="420" />
//             <Filter label="Tanker" count="310" />
//             <Filter label="Team Drivers" count="640" />
//             <Filter label="Owner Operator" count="1,120" />

//           </FilterSection>

//         </aside>

//         {/* ================= RESULTS ================= */}
//         <section className="min-w-0">

//           {/* RESULT HEADER */}
//           <div className="h-[58px] bg-white border border-[#dfe4eb] rounded-[6px] px-4 flex items-center justify-between mb-2">

//             <div>
//               <h2 className="text-[18px] font-extrabold">
//                 342 trucks available
//               </h2>

//               <p className="text-[12px] text-[#596579] mt-0.5">
//                 Dallas, TX (DFW)
//                 <span className="mx-1.5">→</span>
//                 Los Angeles, CA (LAX)
//               </p>
//             </div>

//             <div className="flex items-center gap-4">

//               <div className="flex items-center gap-2 text-[11px] text-gray-500">
//                 Sort by

//                 <button className="h-[34px] min-w-[125px] px-3 border border-[#dce2ea] rounded-[5px] flex items-center justify-between text-[#263449] font-semibold">
//                   Best Match
//                   <ChevronDown className="w-3.5" />
//                 </button>
//               </div>

//               <div className="flex h-[34px] border border-[#dce2ea] rounded-[5px] overflow-hidden">

//                 <button className="px-3 bg-[#f5f9ff] text-[#1671dc] text-[11px] font-bold flex items-center gap-1.5">
//                   <List className="w-4" />
//                   List
//                 </button>

//                 <button className="px-3 text-gray-500 text-[11px] font-semibold border-l border-[#dce2ea] flex items-center gap-1.5">
//                   <Map className="w-4" />
//                   Map
//                 </button>

//               </div>

//             </div>
//           </div>

//           {/* TRUCK CARDS */}
//           <div className="space-y-2">

//             {trucks.map((truck) => (

//               <TruckCard
//                 key={truck.id}
//                 truck={truck}
//                 expanded={expandedId === truck.id}
//                 favorite={favorites.includes(truck.id)}
//                 onOffer={() => toggleOffer(truck.id)}
//                 onFavorite={() => toggleFavorite(truck.id)}
//                 offer={offer}
//                 setOffer={setOffer}
//                 onCancel={() => setExpandedId(null)}
//               />

//             ))}

//           </div>

//           {/* PAGINATION */}
//           <div className="mt-3 h-[53px] bg-white border border-[#dfe4eb] rounded-[6px] flex items-center justify-center relative">

//             <div className="flex items-center gap-1">

//               <button className="w-7 h-7 flex items-center justify-center">
//                 <ChevronLeft className="w-4 text-gray-500" />
//               </button>

//               {[1, 2, 3, 4, 5].map((page) => (

//                 <button
//                   key={page}
//                   className={`w-7 h-7 rounded-[4px] text-[11px] font-bold ${
//                     page === 1
//                       ? 'bg-[#0872e8] text-white'
//                       : 'text-[#334155]'
//                   }`}
//                 >
//                   {page}
//                 </button>

//               ))}

//               <span className="px-2 text-gray-400">...</span>

//               <button className="w-7 h-7 text-[11px] font-bold">
//                 35
//               </button>

//               <button className="w-7 h-7 flex items-center justify-center">
//                 <ChevronRight className="w-4 text-gray-500" />
//               </button>

//             </div>

//             <span className="absolute right-4 text-[11px] text-gray-500">
//               Showing 1–10 of 342 trucks
//             </span>

//           </div>

//         </section>

//       </main>
//     </div>
//   );
// }

// /* ========================================================= */
// /* SEARCH BOX */
// /* ========================================================= */

// function SearchBox({
//   label,
//   value,
//   icon,
//   clear,
//   dropdown,
// }: {
//   label: string;
//   value: string;
//   icon: React.ReactNode;
//   clear?: boolean;
//   dropdown?: boolean;
// }) {
//   return (
//     <div className="h-[50px] border border-[#dfe4eb] rounded-[5px] px-3 flex items-center justify-between bg-white">

//       <div className="min-w-0">

//         <div className="text-[10px] font-extrabold text-[#1e293b] mb-1">
//           {label}
//         </div>

//         <div className="flex items-center gap-2 text-[12px] font-medium text-[#293548] truncate">
//           {icon}
//           <span className="truncate">{value}</span>
//         </div>

//       </div>

//       {clear && (
//         <X className="w-4 text-gray-400 shrink-0" />
//       )}

//       {dropdown && (
//         <ChevronDown className="w-4 text-gray-500 shrink-0" />
//       )}

//     </div>
//   );
// }

// /* ========================================================= */
// /* SIDEBAR */
// /* ========================================================= */

// function FilterSection({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="px-4 py-4 border-b border-[#e8ecf1]">

//       <div className="flex items-center justify-between mb-3">
//         <span className="text-[12px] font-extrabold text-[#283548]">
//           {title}
//         </span>

//         <ChevronDown className="w-3.5 text-gray-400" />
//       </div>

//       <div className="space-y-2.5">
//         {children}
//       </div>

//     </div>
//   );
// }

// function Filter({
//   label,
//   count,
//   checked,
//   stars,
// }: {
//   label: string;
//   count: string;
//   checked?: boolean;
//   stars?: boolean;
// }) {
//   return (
//     <label className="flex items-center justify-between cursor-pointer text-[11px]">

//       <span className="flex items-center gap-2">

//         <input
//           type="checkbox"
//           defaultChecked={checked}
//           className="w-[14px] h-[14px] accent-[#1474df]"
//         />

//         <span
//           className={
//             stars
//               ? 'text-[#f4ab00] tracking-[-1px]'
//               : checked
//               ? 'font-bold text-[#263449]'
//               : 'text-[#526074]'
//           }
//         >
//           {label}
//         </span>

//       </span>

//       <span className="text-[10px] text-gray-400">
//         {count}
//       </span>

//     </label>
//   );
// }

// /* ========================================================= */
// /* TRUCK CARD */
// /* ========================================================= */

// function TruckCard({
//   truck,
//   expanded,
//   favorite,
//   onOffer,
//   onFavorite,
//   offer,
//   setOffer,
//   onCancel,
// }: {
//   truck: TruckItem;
//   expanded: boolean;
//   favorite: boolean;
//   onOffer: () => void;
//   onFavorite: () => void;
//   offer: any;
//   setOffer: any;
//   onCancel: () => void;
// }) {
//   return (
//     <article className="bg-white border border-[#dfe4eb] rounded-[6px] overflow-hidden">

//       {/* CARD MAIN ROW */}
//       <div className="min-h-[100px] px-3.5 py-3 grid grid-cols-[1.4fr_1.25fr_.8fr_auto] gap-3 items-center">

//         {/* CARRIER */}
//         <div className="flex items-center gap-3 min-w-0">

//           <img
//             src={truck.image}
//             alt=""
//             className="w-[118px] h-[70px] rounded-[5px] object-cover border border-gray-100 shrink-0"
//           />

//           <div className="min-w-0">

//             <div className="flex items-center gap-1.5">

//               <h3 className="text-[13px] font-extrabold truncate">
//                 {truck.name}
//               </h3>

//               <span className="bg-[#edf5ff] text-[#1474df] rounded-[4px] px-1.5 py-0.5 text-[9px] font-bold flex items-center gap-1">
//                 <ShieldCheck className="w-3 h-3" />
//                 Verified
//               </span>

//             </div>

//             <div className="mt-1 flex items-center gap-1 text-[10px]">

//               <span className="font-bold">
//                 {truck.rating}
//               </span>

//               <span className="text-[#f5ad00] tracking-[-2px]">
//                 ★★★★★
//               </span>

//               <span className="text-gray-400">
//                 ({truck.reviews})
//               </span>

//             </div>

//             <div className="mt-1 flex items-center gap-1 text-[10px] text-[#687589]">
//               <MapPin className="w-3 h-3" />
//               {truck.location}
//             </div>

//             <div className="mt-1.5 flex gap-1.5">

//               <span className="text-[9px] font-bold bg-[#e8f8ef] text-[#25804a] rounded-full px-2 py-0.5">
//                 {truck.badge}
//               </span>

//               {truck.badge2 && (
//                 <span className="text-[9px] font-bold bg-[#e8f8ef] text-[#25804a] rounded-full px-2 py-0.5">
//                   {truck.badge2}
//                 </span>
//               )}

//             </div>

//           </div>
//         </div>

//         {/* DETAILS */}
//         <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-[10px]">

//           <Detail
//             icon={<Truck />}
//             label="Equipment"
//             value={truck.equipment}
//           />

//           <Detail
//             icon={<Calendar />}
//             label="Availability"
//             value={truck.availability}
//           />

//           {truck.temperature ? (
//             <Detail
//               icon={<Gauge />}
//               label="Temperature"
//               value={truck.temperature}
//             />
//           ) : (
//             <Detail
//               icon={<Package />}
//               label="Capacity"
//               value={truck.capacity || ''}
//             />
//           )}

//           {truck.mcNumber ? (
//             <Detail
//               icon={<ShieldCheck />}
//               label="MC Number"
//               value={truck.mcNumber}
//             />
//           ) : (
//             <Detail
//               icon={<UserRound />}
//               label="Driver Type"
//               value={truck.driverType || ''}
//             />
//           )}

//         </div>

//         {/* RATE */}
//         <div className="border-l border-[#edf0f4] pl-4">

//           <div className="text-[9px] font-bold text-gray-400">
//             Deadhead to Origin
//           </div>

//           <div className="text-[11px] font-extrabold mt-0.5">
//             {truck.deadhead}
//           </div>

//           <div className="text-[9px] font-bold text-gray-400 mt-2">
//             Rate
//           </div>

//           <div className="text-[13px] font-extrabold">
//             {truck.rate}
//           </div>

//         </div>

//         {/* ACTIONS */}
//         <div className="flex items-center gap-1.5">

//           <button
//             onClick={onOffer}
//             className="h-[34px] min-w-[105px] px-3 rounded-[5px] bg-[#0872e8] hover:bg-[#0665d2] text-white text-[11px] font-bold"
//           >
//             Make offer
//           </button>

//           <button
//             onClick={onOffer}
//             className="w-8 h-[34px] border border-[#dce2ea] rounded-[5px] flex items-center justify-center"
//           >
//             <ChevronDown
//               className={`w-4 transition-transform ${
//                 expanded ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           <button
//             onClick={onFavorite}
//             className="w-8 h-[34px] flex items-center justify-center text-gray-400 hover:text-red-500"
//           >
//             <Heart
//               className={`w-[18px] ${
//                 favorite ? 'fill-red-500 text-red-500' : ''
//               }`}
//             />
//           </button>

//         </div>

//       </div>

//       {/* ================================================= */}
//       {/* MAKE OFFER — OPENS BELOW CARD */}
//       {/* ================================================= */}

//       {expanded && (
//         <div className="bg-[#eff6ff] border-t border-[#d7e8ff] px-4 py-4">

//           <div className="mb-3">

//             <h4 className="text-[14px] font-extrabold">
//               Make an Offer
//             </h4>

//             <p className="text-[10px] text-gray-500 mt-0.5">
//               Submit your rate and details for this truck. The carrier will review and get back to you.
//             </p>

//           </div>

//           {/* FIRST FORM ROW */}
//           <div className="grid grid-cols-4 gap-3">

//             <OfferInput
//               label="Rate (USD per mile)"
//               required
//               prefix="$"
//               value={offer.rate}
//               onChange={(value: string) =>
//                 setOffer({
//                   ...offer,
//                   rate: value,
//                 })
//               }
//             />

//             <OfferInput
//               label="Pickup Date"
//               required
//               value={offer.pickupDate}
//               icon={<Calendar />}
//               onChange={(value: string) =>
//                 setOffer({
//                   ...offer,
//                   pickupDate: value,
//                 })
//               }
//             />

//             <OfferInput
//               label="Pickup Time"
//               required
//               placeholder="Select time"
//               value={offer.pickupTime}
//               icon={<Clock3 />}
//               onChange={(value: string) =>
//                 setOffer({
//                   ...offer,
//                   pickupTime: value,
//                 })
//               }
//             />

//             <OfferInput
//               label="Weight (lbs)"
//               required
//               value={offer.weight}
//               onChange={(value: string) =>
//                 setOffer({
//                   ...offer,
//                   weight: value,
//                 })
//               }
//             />

//           </div>

//           {/* SECOND FORM ROW */}
//           <div className="grid grid-cols-[1fr_2fr] gap-3 mt-3">

//             <div>

//               <label className="block text-[10px] font-bold mb-1">
//                 Equipment <span className="text-red-500">*</span>
//               </label>

//               <select
//                 value={offer.equipment}
//                 onChange={(e) =>
//                   setOffer({
//                     ...offer,
//                     equipment: e.target.value,
//                   })
//                 }
//                 className="w-full h-[35px] bg-white border border-[#d7dee8] rounded-[5px] px-3 text-[10px] font-semibold outline-none"
//               >
//                 <option>Dry Van (53 ft)</option>
//                 <option>Reefer (53 ft)</option>
//                 <option>Flatbed (48 ft)</option>
//                 <option>Power Only</option>
//               </select>

//             </div>

//             <div>

//               <label className="block text-[10px] font-bold mb-1">
//                 Additional Comments (Optional)
//               </label>

//               <input
//                 value={offer.comments}
//                 onChange={(e) =>
//                   setOffer({
//                     ...offer,
//                     comments: e.target.value,
//                   })
//                 }
//                 placeholder="e.g. preferred route, special requirements, detention policy, etc."
//                 className="w-full h-[35px] bg-white border border-[#d7dee8] rounded-[5px] px-3 text-[10px] outline-none"
//               />

//             </div>

//           </div>

//           {/* BUTTONS */}
//           <div className="flex justify-end gap-2 mt-3">

//             <button
//               onClick={onCancel}
//               className="h-[35px] px-7 rounded-[5px] bg-white border border-[#cfd8e3] text-[11px] font-bold text-gray-600"
//             >
//               Cancel
//             </button>

//             <button
//               onClick={() => alert('Offer submitted successfully!')}
//               className="h-[35px] px-7 rounded-[5px] bg-[#0872e8] text-white text-[11px] font-bold"
//             >
//               Submit Offer
//             </button>

//           </div>

//         </div>
//       )}

//     </article>
//   );
// }

// /* ========================================================= */
// /* DETAIL */
// /* ========================================================= */

// function Detail({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="min-w-0">

//       <div className="flex items-center gap-1 text-gray-400">
//         <span className="[&>svg]:w-3 [&>svg]:h-3">
//           {icon}
//         </span>

//         <span>{label}</span>
//       </div>

//       <div className="font-bold text-[#334155] truncate mt-0.5">
//         {value}
//       </div>

//     </div>
//   );
// }

// /* ========================================================= */
// /* OFFER INPUT */
// /* ========================================================= */

// function OfferInput({
//   label,
//   required,
//   prefix,
//   icon,
//   value,
//   onChange,
//   placeholder,
// }: any) {
//   return (
//     <div>

//       <label className="block text-[10px] font-bold mb-1">
//         {label}{' '}
//         {required && (
//           <span className="text-red-500">*</span>
//         )}
//       </label>

//       <div className="relative">

//         {prefix && (
//           <span className="absolute left-3 top-[10px] text-[11px] font-bold text-gray-500">
//             {prefix}
//           </span>
//         )}

//         <input
//           value={value}
//           placeholder={placeholder}
//           onChange={(e) => onChange(e.target.value)}
//           className={`w-full h-[35px] bg-white border border-[#d7dee8] rounded-[5px] text-[10px] font-semibold outline-none focus:border-[#1474df]
//             ${prefix ? 'pl-7' : 'px-3'}
//             ${icon ? 'pr-8' : 'pr-3'}
//           `}
//         />

//         {icon && (
//           <span className="absolute right-3 top-[9px] text-gray-500">
//             {icon}
//           </span>
//         )}

//       </div>

//     </div>
//   );
// }

///////////////////////
'use client';

import { useState, useEffect } from 'react';
import {
  Truck,
  Ship,
  Warehouse,
  ShieldCheck,
  MapPin,
  Calendar,
  Search,
  ChevronDown,
  Bell,
  Heart,
  List,
  Map,
  X,
  Menu,
  Package,
  Clock3,
  UserRound,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

type TruckItem = {
  id: number;
  name: string;
  rating: string;
  reviews: string;
  location: string;
  badge: string;
  badge2?: string;
  equipment: string;
  availability: string;
  capacity?: string;
  temperature?: string;
  driverType?: string;
  mcNumber?: string;
  deadhead: string;
  rate: string;
  image: string;
};

type FilterState = {
  origin: string;
  destination: string;
  dateRange: string;
  equipmentType: string;
  loadType: string;
  length: string;
  weight: string;
  sortBy: string;
};

export default function FindTrucksPage() {
  const [trucks, setTrucks] = useState<TruckItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const [filters, setFilters] = useState<FilterState>({
    origin: 'Dallas, TX (DFW)',
    destination: 'Los Angeles, CA (LAX)',
    dateRange: 'Sep 10, 2025 – Sep 20, 2025',
    equipmentType: 'All Equipment',
    loadType: 'All Load Types',
    length: 'Any Length',
    weight: 'Any Weight',
    sortBy: 'Best Match',
  });

  const [offer, setOffer] = useState({
    rate: '2.05',
    pickupDate: 'Sep 12, 2025',
    pickupTime: '',
    weight: '45,000',
    equipment: 'Dry Van (53 ft)',
    comments: '',
  });

  useEffect(() => {
    async function fetchTrucks() {
      try {
        setLoading(true);
        const mockData: TruckItem[] = [
          {
            id: 1,
            name: 'Sunrise Logistics',
            rating: '4.8',
            reviews: '120',
            location: 'Fort Worth, TX (120 mi)',
            badge: 'On Time 98%',
            badge2: 'ELD Verified',
            equipment: 'Dry Van (53 ft)',
            availability: 'Sep 12, 2025',
            capacity: '45,000 lbs',
            driverType: 'Solo',
            deadhead: '35 miles',
            rate: '$2.10 / mile',
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop',
          },
          {
            id: 2,
            name: 'Metro Carriers',
            rating: '4.6',
            reviews: '128',
            location: 'Arlington, TX (25 mi)',
            badge: '24/7 Dispatch',
            badge2: 'Insured',
            equipment: 'Reefer (53 ft)',
            availability: 'Sep 11, 2025',
            temperature: '-20°C to 20°C',
            capacity: '42,000 lbs',
            deadhead: '10 miles',
            rate: '$2.35 / mile',
            image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=600&auto=format&fit=crop',
          },
          {
            id: 3,
            name: 'Lone Star Transport',
            rating: '4.7',
            reviews: '96',
            location: 'Dallas, TX (15 mi)',
            badge: 'Flatbed Specialist',
            badge2: 'Oversize OK',
            equipment: 'Flatbed (48 ft)',
            availability: 'Sep 13, 2025',
            capacity: '48,000 lbs',
            driverType: 'Team',
            deadhead: '10 miles',
            rate: '$2.00 / mile',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
          },
          {
            id: 4,
            name: 'Rapid Freight Solutions',
            rating: '4.5',
            reviews: '74',
            location: 'Waco, TX (90 mi)',
            badge: 'Power Only',
            badge2: 'Flexible Scheduling',
            equipment: 'Power Only',
            availability: 'Sep 14, 2025',
            driverType: 'Solo',
            mcNumber: 'MC 987654',
            deadhead: '90 miles',
            rate: '$1.85 / mile',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop',
          },
        ];
        setTrucks(mockData);
      } catch (error) {
        console.error('Failed to fetch trucks:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTrucks();
  }, [filters]);

  const toggleOffer = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSearchChange = (field: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f4f7fa] text-[#172033] font-sans">
      {/* NAVBAR */}
      <header className="h-[60px] bg-white border-b border-[#e2e8f0] sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1500px] mx-auto h-full px-4 sm:px-5 flex items-center justify-between">
          <div className="flex items-center h-full gap-4 sm:gap-7">
            <Menu 
              className="w-5 h-5 text-[#334155] cursor-pointer hover:text-[#1475e6] transition-colors" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
            <div className="flex items-center text-[20px] sm:text-[22px] font-extrabold tracking-tight">
              <span className="text-[#17213a]">RBS</span>
              <span className="bg-[#1475e6] text-white px-1 rounded-[3px] ml-0.5">MARKETPLACE</span>
            </div>
            <nav className="hidden lg:flex h-full gap-7 text-[13px] font-semibold">
              <a href="#" className="h-full flex items-center gap-2 text-[#1475e6] border-b-[3px] border-[#1475e6]">
                <Truck className="w-4 h-4" /> Transportation
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#1475e6]">
                <ShieldCheck className="w-4 h-4" /> Customs Brokers
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#1475e6]">
                <Ship className="w-4 h-4" /> Shipping Lines
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#1475e6]">
                <Warehouse className="w-4 h-4" /> Warehousing
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden xl:flex items-center gap-2 text-[13px] font-semibold text-gray-700 cursor-pointer">
              <Package className="w-4 h-4" /> Track Shipment
            </div>
            <div className="relative cursor-pointer">
              <Bell className="w-5 h-5 text-[#475569]" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-[#17375f] text-white flex items-center justify-center text-[12px] font-bold">
                JD
              </div>
              <div className="hidden md:block leading-tight">
                <div className="text-[13px] font-bold">John D.</div>
                <div className="text-[11px] text-gray-400">Carrier</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* HERO BANNER - Height Increased for Better Aesthetic */}
      <section className="relative h-[160px] sm:h-[180px] overflow-hidden bg-gradient-to-r from-[#eaf3ff] via-[#f3f7fd] to-white">
        <div
          className="absolute right-0 top-0 h-full w-[70%] sm:w-[65%] bg-cover bg-center-right"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop')",
            maskImage: 'linear-gradient(to right, transparent 0%, black 105%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 105%)',
          }}
        />

        <div className="relative z-20 max-w-[1500px] mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] sm:text-[36px] leading-tight font-black text-[#101b36] tracking-tight">Find Trucks</h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-[#5b6679] font-medium">Available trucks. Reliable carriers. Move more faster.</p>
          </div>

          <div className="text-left pr-6 sm:pr-20">
            <h2 className="text-[18px] sm:text-[24px] font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] leading-tight tracking-tight">
              Trusted Carriers
            </h2>
            <p className="text-[13px] sm:text-[16px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              For Every Mile.
            </p>
            <div className="w-[38px] h-[3.5px] bg-[#0872e8] rounded-full mt-1.5 shadow-sm" />
          </div>
        </div>
      </section>

      {/* SEARCH FORM */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-5 relative z-30 -mt-4 sm:-mt-5">
        <div className="bg-white border border-[#dfe5ec] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,.06)] p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <InteractiveSearchField
              label="Origin"
              value={filters.origin}
              onChange={(val: string) => handleSearchChange('origin', val)}
              icon={<MapPin className="w-4 h-4 text-[#1573df]" />}
              clearable
              onClear={() => handleSearchChange('origin', '')}
            />
            <InteractiveSearchField
              label="Destination"
              value={filters.destination}
              onChange={(val: string) => handleSearchChange('destination', val)}
              icon={<MapPin className="w-4 h-4 text-[#334155]" />}
              clearable
              onClear={() => handleSearchChange('destination', '')}
            />
            <InteractiveSearchField
              label="Date Range"
              value={filters.dateRange}
              onChange={(val: string) => handleSearchChange('dateRange', val)}
              icon={<Calendar className="w-4 h-4 text-gray-500" />}
            />
            <InteractiveDropdownField
              label="Equipment Type"
              value={filters.equipmentType}
              onChange={(val: string) => handleSearchChange('equipmentType', val)}
              options={['All Equipment', 'Dry Van', 'Reefer', 'Flatbed', 'Power Only']}
              icon={<Truck className="w-4 h-4 text-gray-500" />}
            />
            <InteractiveDropdownField
              label="Load Type"
              value={filters.loadType}
              onChange={(val: string) => handleSearchChange('loadType', val)}
              options={['All Load Types', 'Full Truckload (FTL)', 'Less Than Truckload (LTL)']}
              icon={<Package className="w-4 h-4 text-gray-500" />}
            />
          </div>

          <div className="mt-4 pt-4 border-t border-[#edf0f4] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-1/2 sm:w-[180px]">
                <label className="text-[11px] font-bold block mb-1 text-gray-700">Length (ft)</label>
                <select
                  value={filters.length}
                  onChange={(e) => handleSearchChange('length', e.target.value)}
                  className="w-full h-[40px] border border-[#dfe4eb] rounded-[6px] px-3 text-[12px] font-semibold bg-white outline-none"
                >
                  <option>Any Length</option>
                  <option>48 ft</option>
                  <option>53 ft</option>
                </select>
              </div>
              <div className="w-1/2 sm:w-[180px]">
                <label className="text-[11px] font-bold block mb-1 text-gray-700">Weight (lbs)</label>
                <select
                  value={filters.weight}
                  onChange={(e) => handleSearchChange('weight', e.target.value)}
                  className="w-full h-[40px] border border-[#dfe4eb] rounded-[6px] px-3 text-[12px] font-semibold bg-white outline-none"
                >
                  <option>Any Weight</option>
                  <option>Under 20,000 lbs</option>
                  <option>42,000+ lbs</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() =>
                  setFilters({
                    origin: '',
                    destination: '',
                    dateRange: '',
                    equipmentType: 'All Equipment',
                    loadType: 'All Load Types',
                    length: 'Any Length',
                    weight: 'Any Weight',
                    sortBy: 'Best Match',
                  })
                }
                className="h-[40px] px-4 text-[12px] font-semibold text-[#1671d7] hover:underline"
              >
                Clear All
              </button>
              <button className="h-[40px] px-8 bg-[#0872e8] hover:bg-[#0665d4] rounded-[6px] text-white text-[13px] font-bold flex items-center justify-center gap-2 shadow-sm transition-colors">
                <Search className="w-4 h-4" /> Search Trucks
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WITH TOGGLEABLE SIDEBAR */}
      <main className="max-w-[1500px] mx-auto px-4 sm:px-5 py-6 grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-6 items-start relative">
        
        {/* Backdrop for Mobile Sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:static top-0 left-0 h-full lg:h-auto z-50 w-[280px] lg:w-auto
          bg-white border border-[#dfe4eb] rounded-r-[8px] lg:rounded-[8px] overflow-y-auto lg:overflow-visible shadow-lg lg:shadow-sm
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="h-[50px] px-4 border-b border-[#e8ecf1] flex items-center justify-between bg-gray-50 lg:bg-white">
            <h3 className="text-[14px] font-extrabold text-[#172033]">Filters</h3>
            <div className="flex items-center gap-3">
              <button className="text-[12px] font-semibold text-[#1671d7] hover:underline">Clear All</button>
              <X className="w-5 h-5 text-gray-500 cursor-pointer lg:hidden" onClick={() => setSidebarOpen(false)} />
            </div>
          </div>

          <FilterSection title="Equipment Type">
            <Filter label="Dry Van" count="1,248" checked />
            <Filter label="Reefer" count="624" />
            <Filter label="Flatbed" count="412" />
            <Filter label="Step Deck" count="210" />
            <Filter label="Hotshot" count="96" />
            <Filter label="Power Only" count="180" />
          </FilterSection>

          <FilterSection title="Availability Date">
            <Filter label="Today" count="320" />
            <Filter label="Next 3 Days" count="1,102" />
            <Filter label="Next 7 Days" count="1,980" />
            <Filter label="Next 14 Days" count="2,340" />
          </FilterSection>

          <FilterSection title="Carrier Rating">
            <Filter label="★★★★★ & up" count="842" stars />
            <Filter label="★★★★☆ & up" count="1,560" stars />
            <Filter label="★★★☆☆ & up" count="2,120" stars />
          </FilterSection>

          <FilterSection title="Additional">
            <Filter label="ELD Verified" count="1,980" />
            <Filter label="Hazmat Endorsement" count="420" />
            <Filter label="Tanker" count="310" />
            <Filter label="Team Drivers" count="640" />
            <Filter label="Owner Operator" count="1,120" />
          </FilterSection>
        </aside>

        {/* Results Area */}
        <section className="min-w-0">
          <div className="bg-white border border-[#dfe4eb] rounded-[8px] p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 shadow-sm">
            <div>
              <h2 className="text-[16px] sm:text-[18px] font-extrabold text-[#172033]">
                {trucks.length} trucks available
              </h2>
              <p className="text-[12px] text-[#596579] font-medium mt-0.5 truncate max-w-md">
                {filters.origin || 'Any Origin'} <span className="mx-1.5">→</span> {filters.destination || 'Any Destination'}
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4">
              <div className="flex items-center gap-2 text-[12px] text-gray-600 font-medium">
                Sort by
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleSearchChange('sortBy', e.target.value)}
                  className="h-[38px] px-3 border border-[#dce2ea] rounded-[6px] bg-white text-[#263449] font-bold outline-none cursor-pointer"
                >
                  <option>Best Match</option>
                  <option>Lowest Rate</option>
                  <option>Highest Rating</option>
                  <option>Closest Deadhead</option>
                </select>
              </div>

              <div className="hidden md:flex h-[38px] border border-[#dce2ea] rounded-[6px] overflow-hidden bg-white">
                <button className="px-3.5 bg-[#f5f9ff] text-[#1671dc] text-[12px] font-bold flex items-center gap-1.5">
                  <List className="w-4 h-4" /> List
                </button>
                <button className="px-3.5 text-gray-500 text-[12px] font-semibold border-l border-[#dce2ea] flex items-center gap-1.5 hover:bg-gray-50">
                  <Map className="w-4 h-4" /> Map
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {loading ? (
              <div className="bg-white p-12 text-center border rounded-[8px] text-gray-500">Loading available trucks...</div>
            ) : (
              trucks.map((truck) => (
                <TruckCard
                  key={truck.id}
                  truck={truck}
                  expanded={expandedId === truck.id}
                  favorite={favorites.includes(truck.id)}
                  onOffer={() => toggleOffer(truck.id)}
                  onFavorite={() => toggleFavorite(truck.id)}
                  offer={offer}
                  setOffer={setOffer}
                  onCancel={() => setExpandedId(null)}
                />
              ))
            )}
          </div>

          <div className="mt-4 h-[56px] bg-white border border-[#dfe4eb] rounded-[8px] flex items-center justify-center relative shadow-sm px-4">
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-[6px] text-[12px] font-bold transition-colors ${
                    page === 1 ? 'bg-[#0872e8] text-white' : 'text-[#334155] hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 text-gray-400">...</span>
              <button className="w-8 h-8 text-[12px] font-bold hover:bg-gray-100 rounded">35</button>
              <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-50">
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <span className="absolute right-5 text-[12px] text-gray-500 font-medium hidden md:block">
              Showing 1–10 of 342 trucks
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

// HELPER SUB-COMPONENTS

function InteractiveSearchField({ label, value, onChange, icon, clearable, onClear }: any) {
  return (
    <div className="h-[52px] border border-[#dfe4eb] rounded-[6px] px-3.5 flex items-center justify-between bg-white hover:border-[#1474df] transition-colors">
      <div className="min-w-0 flex-1">
        <label className="text-[11px] font-extrabold text-[#1e293b] block mb-0.5">{label}</label>
        <div className="flex items-center gap-2 text-[13px] font-medium text-[#293548]">
          {icon}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent outline-none text-[#293548] font-semibold truncate"
          />
        </div>
      </div>
      {clearable && value && (
        <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 shrink-0 ml-2" onClick={onClear} />
      )}
    </div>
  );
}

function InteractiveDropdownField({ label, value, onChange, options, icon }: any) {
  return (
    <div className="h-[52px] border border-[#dfe4eb] rounded-[6px] px-3.5 flex items-center justify-between bg-white hover:border-[#1474df] transition-colors">
      <div className="min-w-0 flex-1">
        <label className="text-[11px] font-extrabold text-[#1e293b] block mb-0.5">{label}</label>
        <div className="flex items-center gap-2 text-[13px] font-medium text-[#293548]">
          {icon}
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent outline-none text-[#293548] font-semibold cursor-pointer truncate"
          >
            {options.map((opt: string) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-4 py-4 border-b border-[#e8ecf1]">
      <div className="flex items-center justify-between mb-3 cursor-pointer">
        <span className="text-[13px] font-extrabold text-[#283548]">{title}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Filter({ label, count, checked, stars }: any) {
  return (
    <label className="flex items-center justify-between cursor-pointer text-[12px] group">
      <span className="flex items-center gap-2.5">
        <input type="checkbox" defaultChecked={checked} className="w-4 h-4 accent-[#1474df] rounded cursor-pointer" />
        <span className={stars ? 'text-[#f4ab00] tracking-[-1px] font-bold' : checked ? 'font-bold text-[#263449]' : 'text-[#526074] group-hover:text-black'}>
          {label}
        </span>
      </span>
      <span className="text-[11px] text-gray-400 font-medium">{count}</span>
    </label>
  );
}

function TruckCard({ truck, expanded, favorite, onOffer, onFavorite, offer, setOffer, onCancel }: any) {
  return (
    <article className="bg-white border border-[#dfe4eb] rounded-[8px] overflow-hidden shadow-sm transition-all hover:shadow-md">
      <div className="p-4 grid grid-cols-1 lg:grid-cols-[1.4fr_1.3fr_0.8fr_auto] gap-4 items-center">
        <div className="flex items-center gap-4 min-w-0">
          <img src={truck.image} alt={truck.name} className="w-[120px] sm:w-[140px] h-[85px] sm:h-[90px] rounded-[6px] object-cover border border-gray-200 shrink-0 shadow-sm" />
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-[15px] font-extrabold text-[#172033] truncate">{truck.name}</h3>
              <span className="bg-[#edf5ff] text-[#1474df] rounded-[4px] px-2 py-0.5 text-[10px] font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Verified
              </span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-[11px]">
              <span className="font-bold text-[#172033]">{truck.rating}</span>
              <span className="text-[#f5ad00] tracking-[-2px]">★★★★★</span>
              <span className="text-gray-400 font-medium">({truck.reviews})</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#687589] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#1474df]" /> {truck.location}
            </div>
            <div className="mt-2 flex gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold bg-[#e8f8ef] text-[#25804a] rounded-full px-2.5 py-0.5">{truck.badge}</span>
              {truck.badge2 && (
                <span className="text-[10px] font-bold bg-[#e8f8ef] text-[#25804a] rounded-full px-2.5 py-0.5">{truck.badge2}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2 py-1 lg:pl-2 lg:border-l lg:border-[#f1f3f6]">
          <DetailRow icon={<Truck className="w-3.5 h-3.5 text-[#334155]" />} label="Equipment" value={truck.equipment} />
          <DetailRow icon={<Calendar className="w-3.5 h-3.5 text-[#334155]" />} label="Availability" value={truck.availability} />
          {truck.temperature ? (
            <DetailRow icon={<Gauge className="w-3.5 h-3.5 text-[#334155]" />} label="Temperature" value={truck.temperature} />
          ) : (
            <DetailRow icon={<Package className="w-3.5 h-3.5 text-[#334155]" />} label="Capacity" value={truck.capacity || '45,000 lbs'} />
          )}
          {truck.mcNumber ? (
            <DetailRow icon={<ShieldCheck className="w-3.5 h-3.5 text-[#334155]" />} label="MC Number" value={truck.mcNumber} />
          ) : (
            <DetailRow icon={<UserRound className="w-3.5 h-3.5 text-[#334155]" />} label="Driver Type" value={truck.driverType || 'Solo'} />
          )}
        </div>

        <div className="lg:border-l lg:border-[#edf0f4] lg:pl-4 flex lg:flex-col justify-between lg:justify-start">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Deadhead to Origin</div>
            <div className="text-[12px] font-extrabold text-[#172033] mt-0.5">{truck.deadhead}</div>
          </div>
          <div className="mt-0 lg:mt-2">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Rate</div>
            <div className="text-[15px] font-black text-[#0872e8]">{truck.rate}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end pt-2 lg:pt-0 border-t lg:border-t-0 border-gray-100">
          <button
            onClick={onOffer}
            className="h-[38px] px-4 rounded-[6px] bg-[#0872e8] hover:bg-[#0665d2] text-white text-[12px] font-bold shadow-sm transition-colors"
          >
            Make offer
          </button>
          <button onClick={onOffer} className="w-9 h-[38px] border border-[#dce2ea] rounded-[6px] flex items-center justify-center bg-white hover:bg-gray-50">
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
          <button onClick={onFavorite} className="w-9 h-[38px] flex items-center justify-center text-gray-400 hover:text-red-500 rounded-[6px] border border-transparent hover:border-gray-200">
            <Heart className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="bg-[#eff6ff] border-t border-[#d7e8ff] p-4 sm:p-5">
          <div className="mb-4">
            <h4 className="text-[15px] font-extrabold text-[#172033]">Make an Offer</h4>
            <p className="text-[11px] text-gray-600 mt-0.5 font-medium">
              Submit your rate and details for this truck. The carrier will review and respond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <OfferInput
              label="Rate (USD per mile)"
              required
              prefix="$"
              value={offer.rate}
              onChange={(val: string) => setOffer({ ...offer, rate: val })}
            />
            <OfferInput
              label="Pickup Date"
              required
              value={offer.pickupDate}
              icon={<Calendar className="w-4 h-4" />}
              onChange={(val: string) => setOffer({ ...offer, pickupDate: val })}
            />
            <OfferInput
              label="Pickup Time"
              required
              placeholder="Select time"
              value={offer.pickupTime}
              icon={<Clock3 className="w-4 h-4" />}
              onChange={(val: string) => setOffer({ ...offer, pickupTime: val })}
            />
            <OfferInput
              label="Weight (lbs)"
              required
              value={offer.weight}
              onChange={(val: string) => setOffer({ ...offer, weight: val })}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 mt-4">
            <div>
              <label className="block text-[11px] font-bold mb-1 text-gray-700">
                Equipment <span className="text-red-500">*</span>
              </label>
              <select
                value={offer.equipment}
                onChange={(e) => setOffer({ ...offer, equipment: e.target.value })}
                className="w-full h-[38px] bg-white border border-[#d7dee8] rounded-[6px] px-3 text-[11px] font-semibold outline-none cursor-pointer"
              >
                <option>Dry Van (53 ft)</option>
                <option>Reefer (53 ft)</option>
                <option>Flatbed (48 ft)</option>
                <option>Power Only</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold mb-1 text-gray-700">Additional Comments (Optional)</label>
              <input
                value={offer.comments}
                onChange={(e) => setOffer({ ...offer, comments: e.target.value })}
                placeholder="e.g. preferred route, special requirements, detention policy, etc."
                className="w-full h-[38px] bg-white border border-[#d7dee8] rounded-[6px] px-3 text-[11px] outline-none font-medium"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-5">
            <button
              onClick={onCancel}
              className="h-[38px] px-6 rounded-[6px] bg-white border border-[#cfd8e3] text-[12px] font-bold text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => alert('Offer submitted successfully!')}
              className="h-[38px] px-6 rounded-[6px] bg-[#0872e8] hover:bg-[#0665d2] text-white text-[12px] font-bold shadow-sm"
            >
              Submit Offer
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_minmax(0,1fr)] items-center text-[12px]">
      <div className="flex items-center gap-2 text-gray-400 font-medium">
        {icon}
        <span>{label}</span>
      </div>
      <div className="font-bold text-[#1a2638] truncate">{value}</div>
    </div>
  );
}

function OfferInput({ label, required, prefix, icon, value, onChange, placeholder }: any) {
  return (
    <div>
      <label className="block text-[11px] font-bold mb-1 text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative flex items-center">
        {prefix && <span className="absolute left-3 text-[12px] font-bold text-gray-500">{prefix}</span>}
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-[38px] bg-white border border-[#d7dee8] rounded-[6px] text-[11px] font-semibold outline-none focus:border-[#1474df] ${
            prefix ? 'pl-7' : 'px-3'
          } ${icon ? 'pr-9' : 'px-3'}`}
        />
        {icon && <span className="absolute right-3 text-gray-500">{icon}</span>}
      </div>
    </div>
  );
}