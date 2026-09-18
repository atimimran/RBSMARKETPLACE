import { ChevronDown, ChevronUp } from 'lucide-react';
import type { MoreOptionsData } from './types';

interface MoreOptionsProps {
  open: boolean;
  value: MoreOptionsData;

  onToggle: () => void;
  onChange: (data: MoreOptionsData) => void;
}

export default function MoreOptions({
  open,
  value,
  onToggle,
  onChange,
}: MoreOptionsProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">

        <button
          type="button"
          onClick={onToggle}
          className="flex items-center space-x-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
        >
          <span>More Options</span>

          {open ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        <button
          type="button"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md shadow-blue-600/25 transition"
        >
          <span>Get Quotes</span>
        </button>
      </div>

      {open && (
        <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">

          <div>
            <label className="block font-semibold text-gray-600 mb-1">
              Insurance
            </label>

            <select
              value={value.insurance}
              onChange={(e) =>
                onChange({
                  ...value,
                  insurance: e.target.value,
                })
              }
              className="w-full p-2 bg-white border border-gray-200 rounded-xl"
            >
              <option value="Full Cover">Full Cover</option>
              <option value="Basic">Basic</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">
              Customs
            </label>

            <select
              value={value.customs}
              onChange={(e) =>
                onChange({
                  ...value,
                  customs: e.target.value,
                })
              }
              className="w-full p-2 bg-white border border-gray-200 rounded-xl"
            >
              <option value="Include Both">Include Both</option>
              <option value="None">None</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">
              Carrier Note
            </label>

            <input
              type="text"
              value={value.carrierNote}
              onChange={(e) =>
                onChange({
                  ...value,
                  carrierNote: e.target.value,
                })
              }
              placeholder="Preferred carrier"
              className="w-full p-2 bg-white border border-gray-200 rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
