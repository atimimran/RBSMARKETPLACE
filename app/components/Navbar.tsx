'use client';

import { Menu, Sparkles, Search, Heart, User, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 px-3  lg:px-12 py-4.5 sticky top-0 z-50">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">
        
        {/* Left: Menu, Logo & Divider */}
        <div className="flex items-center space-x-5">
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition text-gray-700">
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-1">
            <div className="bg-blue-600 text-white font-black px-3 py-1.5 rounded-md tracking-wider text-base shadow-sm">
              RBS<span className="font-light text-blue-100"> MARKETPLACE</span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block h-6 w-px bg-gray-200 mx-2"></div>

          {/* Ask AI with Sparkle */}
          <button className="hidden sm:flex items-center space-x-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200/80 text-gray-800 px-3.5 py-1.5 rounded-full text-xs font-medium transition">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 fill-purple-100" />
            <span>Ask AI</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          <button className="hidden md:flex items-center space-x-1.5 text-xs font-semibold text-gray-700 hover:text-black transition">
            <Search className="w-4 h-4 text-gray-500" />
            <span>Track Shipment</span>
          </button>

          <div className="flex items-center space-x-1 text-xs font-semibold text-gray-700 cursor-pointer border-l pl-4 border-gray-200">
            <span>USD</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>

          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
            <Heart className="w-3.5 h-3.5 text-gray-600" />
          </button>

          <button className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-black transition shadow-xs">
            <User className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}