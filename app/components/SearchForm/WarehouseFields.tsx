interface WarehouseFieldsProps {
  location: string;
  storageType: string;
  spaceNeeded: string;

  onLocationChange: (value: string) => void;
  onStorageChange: (value: string) => void;
  onSpaceChange: (value: string) => void;
}

export default function WarehouseFields({
  location,
  storageType,
  spaceNeeded,
  onLocationChange,
  onStorageChange,
  onSpaceChange,
}: WarehouseFieldsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mb-5">

      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <span className="block text-[11px] text-gray-400 mb-1">
          Location
        </span>

        <input
          type="text"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none"
        />
      </div>

      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <span className="block text-[11px] text-gray-400 mb-1">
          Storage Type
        </span>

        <select
          value={storageType}
          onChange={(e) => onStorageChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
        >
          <option value="Bonded Storage">Bonded Storage</option>
          <option value="Cold Chain">Cold Chain</option>
        </select>
      </div>

      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <span className="block text-[11px] text-gray-400 mb-1">
          Space Needed
        </span>

        <input
          type="text"
          value={spaceNeeded}
          onChange={(e) => onSpaceChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none"
        />
      </div>
    </div>
  );
}
