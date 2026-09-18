'use client';

import { UploadCloud, Info } from 'lucide-react';

// interface Step3Props {
//   onBack: () => void;
//   onSubmit: () => void;
// }
interface Step3Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onBack: () => void;
  onSubmit: () => void;
}


export default function Step3Verification({ onBack, onSubmit }: Step3Props) {
  const uploadBoxes = [
    { title: 'Business Registration Certificate *', desc: 'e.g. Certificate of Incorporation, Business License' },
    { title: 'Tax Identification Number (TIN)', desc: 'e.g. EIN, VAT, GST, NTN' },
    { title: 'Proof of Business Address *', desc: 'e.g. Utility Bill, Bank Statement (issued within last 3 months)' },
    { title: 'Additional Document (Optional)', desc: 'e.g. Insurance Certificate, Carrier Authority, Chamber of Commerce' },
  ];

  return (
    <div className="space-y-6">
      
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Verify Your Business</h3>
        <p className="text-xs text-gray-500">Help us keep FreightHub safe and trusted. Please provide the following documents for verification.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {uploadBoxes.map((box, idx) => (
          <div key={idx} className="p-4 rounded-2xl border border-gray-200 bg-white">
            <h4 className="text-xs font-bold text-gray-800 mb-1">{box.title}</h4>
            <p className="text-[11px] text-gray-400 mb-4">{box.desc}</p>
            
            <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-500 bg-gray-50/50 cursor-pointer transition">
              <UploadCloud className="w-6 h-6 text-blue-500 mb-2" />
              <span className="text-xs font-semibold text-gray-700">Click to upload or drag and drop</span>
              <span className="text-[10px] text-gray-400 mt-0.5">PDF, JPG, PNG (Max 10 MB)</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        ))}
      </div>

      {/* Info Notice Box */}
      <div className="flex items-start space-x-3 p-4 bg-blue-50/60 border border-blue-100 rounded-2xl">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-xs text-blue-900">
          Your information will be reviewed by our team, usually within 1–2 business days. You'll be notified via email once your account is verified.
        </p>
      </div>

      {/* Agreements */}
      <div className="space-y-2 pt-2">
        <label className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer font-medium">
          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span>I confirm that all information provided is accurate and belongs to my business. *</span>
        </label>
        <label className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer">
          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span>I agree to the <span className="text-blue-600 underline">Terms of Service</span> and <span className="text-blue-600 underline">Privacy Policy</span>. *</span>
        </label>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between pt-4">
        <button 
          type="button" 
          onClick={onBack}
          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-xl text-xs font-bold transition"
        >
          &larr; Back
        </button>
        <button 
          type="button" 
          onClick={onSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl text-xs font-bold transition shadow-md shadow-blue-600/20"
        >
          Create Account
        </button>
      </div>

    </div>
  );
}