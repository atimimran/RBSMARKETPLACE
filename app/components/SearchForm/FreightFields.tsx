import {
  MapPin,
  Package,
  SlidersHorizontal,
  Weight,
  ArrowRightLeft,
} from 'lucide-react';

interface FreightFieldsProps {
  fromLocation: string;
  toLocation: string;
  cargoType: string;
  trailer: string;
  weightTerm: string;

  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onCargoChange: (value: string) => void;
  onTrailerChange: (value: string) => void;
  onWeightChange: (value: string) => void;

  onSwap: () => void;
}

export default function FreightFields({
  fromLocation,
  toLocation,
  cargoType,
  trailer,
  weightTerm,
  onFromChange,
  onToChange,
  onCargoChange,
  onTrailerChange,
  onWeightChange,
  onSwap,
}: FreightFieldsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center mb-5 relative">

      {/* From */}
      <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
        <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
          <MapPin className="w-3 h-3" />
          <span>From</span>
        </div>

        <input
          type="text"
          value={fromLocation}
          onChange={(e) => onFromChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent truncate pr-4"
        />

        <button
          type="button"
          aria-label="Clear from location"
          onClick={() => onFromChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
        >
          ×
        </button>
      </div>

      {/* Swap */}
      <button
        type="button"
        onClick={onSwap}
        aria-label="Swap locations"
        className="hidden lg:flex absolute left-[18%] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 w-6 h-6 rounded-full items-center justify-center text-gray-600 shadow-2xs hover:bg-gray-50 transition"
      >
        <ArrowRightLeft className="w-3 h-3" />
      </button>

      {/* To */}
      <div className="p-3 rounded-xl border border-gray-200 bg-white relative">
        <div className="flex items-center text-[11px] text-gray-400 mb-1 space-x-1">
          <MapPin className="w-3 h-3" />
          <span>To</span>
        </div>

        <input
          type="text"
          value={toLocation}
          onChange={(e) => onToChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent truncate pr-4"
        />

        <button
          type="button"
          aria-label="Clear to location"
          onClick={() => onToChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
        >
          ×
        </button>
      </div>

      {/* Cargo */}
      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
          <Package className="w-3 h-3" />
          <span>Cargo Type</span>
        </div>

        <select
          value={cargoType}
          onChange={(e) => onCargoChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
        >
          <option value="General Cargo">General Cargo</option>
          <option value="Hazardous">Hazardous</option>
          <option value="Refrigerated">Refrigerated</option>
        </select>
      </div>

      {/* Trailer */}
      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
          <SlidersHorizontal className="w-3 h-3" />
          <span>Trailer</span>
        </div>

        <select
          value={trailer}
          onChange={(e) => onTrailerChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
        >
          <option value="1 x 20ft Container">1 x 20ft Container</option>
          <option value="1 x 40ft Container">1 x 40ft Container</option>
          <option value="Dry Van">Dry Van</option>
        </select>
      </div>

      {/* Weight */}
      <div className="p-3 rounded-xl border border-gray-200 bg-white">
        <div className="text-[11px] text-gray-400 mb-1 flex items-center space-x-1">
          <Weight className="w-3 h-3" />
          <span>Weight</span>
        </div>

        <select
          value={weightTerm}
          onChange={(e) => onWeightChange(e.target.value)}
          className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
        >
          <option value="FOB">FOB</option>
          <option value="EXW">EXW</option>
          <option value="CIF">CIF</option>
        </select>
      </div>
    </div>
  );
}
