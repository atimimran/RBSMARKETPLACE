// 'use client';

// interface Step2Props {
//   formData: any;
//   setFormData: (data: any) => void;
//   onNext: () => void;
//   onBack: () => void;
// }

// export default function Step2Business({ formData, setFormData, onNext, onBack }: Step2Props) {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="space-y-6">
      
//       {/* Company Information */}
//       <div className="space-y-4">
//         <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Information</h3>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
//             <input 
//               type="text" 
//               name="companyName" 
//               value={formData.companyName || ''}
//               onChange={handleChange}
//               placeholder="Enter company name" 
//               className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
//             />
//           </div>
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Legal Entity Type <span className="text-red-500">*</span></label>
//             <select 
//               name="legalEntityType"
//               value={formData.legalEntityType || ''}
//               onChange={handleChange}
//               className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
//             >
//               <option value="">Select entity type</option>
//               <option>Corporation</option>
//               <option>LLC</option>
//               <option>Partnership</option>
//             </select>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Registration / Tax ID (Optional)</label>
//             <input 
//               type="text" 
//               name="taxId"
//               value={formData.taxId || ''}
//               onChange={handleChange}
//               placeholder="Enter registration or tax ID" 
//               className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
//             />
//           </div>
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Country of Registration <span className="text-red-500">*</span></label>
//             <select 
//               name="country"
//               value={formData.country || ''}
//               onChange={handleChange}
//               className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
//             >
//               <option value="">Select country</option>
//               <option>United States</option>
//               <option>Canada</option>
//               <option>United Kingdom</option>
//             </select>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Company Website (Optional)</label>
//             <input 
//               type="text" 
//               name="website"
//               value={formData.website || ''}
//               onChange={handleChange}
//               placeholder="https://www.yourcompany.com" 
//               className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
//             />
//           </div>
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Year Established (Optional)</label>
//             <select 
//               name="yearEstablished"
//               value={formData.yearEstablished || ''}
//               onChange={handleChange}
//               className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
//             >
//               <option value="">Select year</option>
//               <option>2024</option>
//               <option>2020</option>
//               <option>2015</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Business Address */}
//       <div className="space-y-4 pt-2">
//         <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Business Address</h3>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Address Line 1 <span className="text-red-500">*</span></label>
//             <input 
//               type="text" 
//               placeholder="Enter address line 1" 
//               className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
//             />
//           </div>
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Address Line 2 (Optional)</label>
//             <input 
//               type="text" 
//               placeholder="Enter address line 2" 
//               className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
//             <input type="text" placeholder="Enter city" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600" />
//           </div>
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">State / Province (Optional)</label>
//             <input type="text" placeholder="Enter state or province" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600" />
//           </div>
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1">Postal Code (Optional)</label>
//             <input type="text" placeholder="Enter postal code" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600" />
//           </div>
//         </div>
//       </div>

//       {/* Footer Navigation */}
//       <div className="flex justify-between pt-4">
//         <button 
//           type="button" 
//           onClick={onBack}
//           className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-xl text-xs font-bold transition"
//         >
//           &larr; Back
//         </button>
//         <button 
//           type="button" 
//           onClick={onNext}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl text-xs font-bold transition shadow-md shadow-blue-600/20"
//         >
//           Continue &rarr;
//         </button>
//       </div>

//     </div>
//   );
// }

///////////////////////////


'use client';

interface Step2Props {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Business({ formData, setFormData, onNext, onBack }: Step2Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-6">
      
      {/* Company Information */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Information</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="companyName" 
              value={formData.companyName || ''}
              onChange={handleChange}
              placeholder="Enter company name" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Legal Entity Type <span className="text-red-500">*</span></label>
            <select 
              name="legalEntityType"
              value={formData.legalEntityType || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
            >
              <option value="">Select entity type</option>
              <option>Corporation</option>
              <option>LLC</option>
              <option>Partnership</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Registration / Tax ID (Optional)</label>
            <input 
              type="text" 
              name="taxId"
              value={formData.taxId || ''}
              onChange={handleChange}
              placeholder="Enter registration or tax ID" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Country of Registration <span className="text-red-500">*</span></label>
            <select 
              name="country"
              value={formData.country || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
            >
              <option value="">Select country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Company Website (Optional)</label>
            <input 
              type="text" 
              name="website"
              value={formData.website || ''}
              onChange={handleChange}
              placeholder="https://www.yourcompany.com" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Year Established (Optional)</label>
            <select 
              name="yearEstablished"
              value={formData.yearEstablished || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
            >
              <option value="">Select year</option>
              <option>2024</option>
              <option>2020</option>
              <option>2015</option>
            </select>
          </div>
        </div>
      </div>

      {/* Business Address */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Business Address</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Address Line 1 <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="addressLine1"
              value={formData.addressLine1 || ''}
              onChange={handleChange}
              placeholder="Enter address line 1" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Address Line 2 (Optional)</label>
            <input 
              type="text" 
              name="addressLine2"
              value={formData.addressLine2 || ''}
              onChange={handleChange}
              placeholder="Enter address line 2" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="city"
              value={formData.city || ''}
              onChange={handleChange}
              placeholder="Enter city" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600" 
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">State / Province (Optional)</label>
            <input 
              type="text" 
              name="state"
              value={formData.state || ''}
              onChange={handleChange}
              placeholder="Enter state or province" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600" 
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Postal Code (Optional)</label>
            <input 
              type="text" 
              name="postalCode"
              value={formData.postalCode || ''}
              onChange={handleChange}
              placeholder="Enter postal code" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600" 
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
          <select 
            name="businessCountry"
            value={formData.businessCountry || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
          >
            <option value="">Select country</option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
          </select>
        </div>
      </div>

      {/* Business Information */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Business Information</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Primary Business Activities <span className="text-red-500">*</span></label>
            <select 
              name="primaryActivity"
              value={formData.primaryActivity || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
            >
              <option value="">Select primary activity</option>
              <option>Freight Forwarding & Shipping</option>
              <option>Trucking & Logistics</option>
              <option>Import / Export Trading</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Secondary Activities (Optional)</label>
            <select 
              name="secondaryActivity"
              value={formData.secondaryActivity || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
            >
              <option value="">Select secondary activity</option>
              <option>Warehousing & Storage</option>
              <option>Customs Brokerage</option>
              <option>Distribution</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Number of Employees (Optional)</label>
            <select 
              name="employees"
              value={formData.employees || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
            >
              <option value="">Select range</option>
              <option>1 - 10 employees</option>
              <option>11 - 50 employees</option>
              <option>51 - 200 employees</option>
              <option>200+ employees</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Annual Revenue (Optional)</label>
            <select 
              name="revenue"
              value={formData.revenue || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 bg-white focus:outline-blue-600 cursor-pointer"
            >
              <option value="">Select range</option>
              <option>Under $1M</option>
              <option>$1M - $10M</option>
              <option>$10M - $50M</option>
              <option>$50M+</option>
            </select>
          </div>
        </div>
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
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl text-xs font-bold transition shadow-md shadow-blue-600/20"
        >
          Continue &rarr;
        </button>
      </div>

    </div>
  );
}