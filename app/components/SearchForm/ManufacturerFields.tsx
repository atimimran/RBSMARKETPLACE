interface ManufacturerFieldsProps {
  industry: string;
  region: string;

  onIndustryChange: (value: string) => void;
  onRegionChange: (value: string) => void;
}

export default function ManufacturerFields({
  industry,
  region,
  onIndustryChange,
  onRegionChange,
}: ManufacturerFieldsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mb-5">

      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <span className="block text-[11px] text-gray-400 mb-1">
          Industry
        </span>

        <input
          type="text"
          value={industry}
          onChange={(e) => onIndustryChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none"
        />
      </div>

      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <span className="block text-[11px] text-gray-400 mb-1">
          Region
        </span>

        <select
          value={region}
          onChange={(e) => onRegionChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
        >
          <option value="Asia-Pacific">Asia-Pacific</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </div>
  );
}
