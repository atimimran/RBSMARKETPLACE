interface SubTabsProps {
  activeTab: 'quote' | 'booking';
  setActiveTab: (tab: 'quote' | 'booking') => void;
}

export default function SubTabs({ activeTab, setActiveTab }: SubTabsProps) {
  return (
    <div className="flex items-center space-x-2.5 mb-4">
      <button
        onClick={() => setActiveTab('quote')}
        className={`px-5 py-2 rounded-full text-xs font-semibold transition ${
          activeTab === 'quote' 
            ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' 
            : 'bg-white text-gray-600 border border-gray-200/80 hover:bg-gray-50'
        }`}
      >
        Freight Quote
      </button>
      <button
        onClick={() => setActiveTab('booking')}
        className={`px-5 py-2 rounded-full text-xs font-semibold transition ${
          activeTab === 'booking' 
            ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' 
            : 'bg-white text-gray-600 border border-gray-200/80 hover:bg-gray-50'
        }`}
      >
        Instant Booking
      </button>
    </div>
  );
}