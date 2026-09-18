interface BrokerFieldsProps {
  customsPort: string;
  serviceRequired: string;
  onCustomsPortChange: (value: string) => void;
  onServiceChange: (value: string) => void;
}

export default function BrokerFields({
  customsPort,
  serviceRequired,
  onCustomsPortChange,
  onServiceChange,
}: BrokerFieldsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mb-5">

      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <span className="block text-[11px] text-gray-400 mb-1">
          Customs Port
        </span>

        <input
          type="text"
          value={customsPort}
          onChange={(e) => onCustomsPortChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none"
        />
      </div>

      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <span className="block text-[11px] text-gray-400 mb-1">
          Service Required
        </span>

        <select
          value={serviceRequired}
          onChange={(e) => onServiceChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
        >
          <option value="Import Clearance">Import Clearance</option>
          <option value="Export Clearance">Export Clearance</option>
        </select>
      </div>
    </div>
  );
}
