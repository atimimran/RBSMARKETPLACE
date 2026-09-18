export default function PopularRoutes() {
  const routes = [
    { from: 'Shanghai', to: 'Los Angeles', price: '$1,245' },
    { from: 'Shenzhen', to: 'Rotterdam', price: '$1,680' },
    { from: 'Ningbo', to: 'Hamburg', price: '$1,520' },
    { from: 'Qingdao', to: 'New York', price: '$2,180' },
  ];

  return (
    <div className="bg-[#f4f6f8]  rounded-[28px] p-6 sm:p-7 border border-gray-200/80 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      
      {/* Title */}
      <div className="min-w-max">
        <h3 className="text-sm font-bold text-gray-900 tracking-tight">Popular Routes</h3>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full flex-1">
        {routes.map((route, index) => (
          <div key={index} className="p-3.5 rounded-2x2 bg-white border border-gray-100 flex flex-col justify-between hover:border-gray-200 transition">
            <div className="flex items-center justify-between text-xs font-bold text-gray-800 mb-1.5">
              <span>{route.from}</span>
              <span className="text-gray-400 font-normal">→</span>
              <span>{route.to}</span>
            </div>
            <div className="text-[11px] text-gray-500 font-medium">
              From <span className="font-bold text-gray-900">{route.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="min-w-max">
        <a href="#all-routes" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-1 transition">
          <span>View all routes</span>
          <span>→</span>
        </a>
      </div>

    </div>
  );
}