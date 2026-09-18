// 'use client';

// import { Menu, Sparkles, Search, Heart, User, ChevronDown } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <header className="w-full bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50 shadow-xs">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Left: Menu & Brand Logo */}
//         <div className="flex items-center space-x-6">
//           <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-700">
//             <Menu className="w-5 h-5" />
//           </button>
          
//           <div className="flex items-center space-x-1">
//             <div className="bg-blue-600 text-white font-extrabold px-3 py-1.5 rounded-md tracking-wider text-lg shadow-sm">
//               FREIGHT<span className="font-light text-blue-100">HUB</span>
//             </div>
//           </div>
//         </div>

//         {/* Center: AI Assistant Button */}
//         <div className="hidden md:flex items-center">
//           <button className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 border border-gray-200/80 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition shadow-2xs">
//             <Sparkles className="w-4 h-4 text-purple-600 fill-purple-100" />
//             <span>Ask AI</span>
//           </button>
//         </div>

//         {/* Right Actions */}
//         <div className="flex items-center space-x-4">
//           <button className="hidden sm:flex items-center space-x-1.5 text-sm font-medium text-gray-700 hover:text-black transition">
//             <Search className="w-4 h-4 text-gray-500" />
//             <span>Track Shipment</span>
//           </button>

//           <div className="hidden lg:flex items-center space-x-1 text-sm font-medium text-gray-700 cursor-pointer border-l pl-4 border-gray-200">
//             <span>USD</span>
//             <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
//           </div>

//           <button className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
//             <Heart className="w-4 h-4 text-gray-600" />
//           </button>

//           <button className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-black transition shadow-sm">
//             <User className="w-4 h-4" />
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// }