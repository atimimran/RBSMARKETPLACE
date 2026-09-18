'use client';

import { useState } from 'react';
import { 
  Building, 
  UserCheck, 
  Truck, 
  ShoppingBag, 
  Store, 
  Eye, 
  EyeOff 
} from 'lucide-react';

interface Step1Props {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export default function Step1Basic({ formData, setFormData, onNext }: Step1Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const accountTypes = [
    { id: 'shipper', label: 'Shipper', icon: Building },
    { id: 'broker', label: 'Broker', icon: UserCheck },
    { id: 'carrier', label: 'Carrier', icon: Truck },
    { id: 'buyer', label: 'Buyer', icon: ShoppingBag },
    { id: 'seller', label: 'Seller', icon: Store },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Account Type</h3>
        <label className="block text-xs font-medium text-gray-600 mb-2">I am a <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {accountTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = formData.accountType === type.id;
            return (
              <button
                type="button"
                key={type.id}
                onClick={() => setFormData({ ...formData, accountType: type.id })}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all ${
                  isSelected 
                    ? 'border-blue-600 bg-blue-50/40 text-blue-600 ring-1 ring-blue-600 shadow-xs' 
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                <Icon className="w-5 h-5 mb-1.5" />
                <span className="text-xs font-semibold">{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact Person Info */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Contact Person Information</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleChange}
              placeholder="Enter first name" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleChange}
              placeholder="Enter last name" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="you@company.com" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden px-3 py-2 bg-white">
              <span className="text-xs mr-2">🇺🇸 +1</span>
              <input 
                type="text" 
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                placeholder="(201) 555-0123" 
                className="w-full text-xs font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Job Title <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="jobTitle"
            value={formData.jobTitle || ''}
            onChange={handleChange}
            placeholder="e.g. CEO, Operations Manager, Sales Manager" 
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600"
          />
        </div>
      </div>

      {/* Account Security */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Account Security</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
            <input 
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              placeholder="Create a password" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600 pr-10"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-8 text-gray-400">
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">Confirm Password <span className="text-red-500">*</span></label>
            <input 
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword || ''}
              onChange={handleChange}
              placeholder="Confirm your password" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 focus:outline-blue-600 pr-10"
            />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-8 text-gray-400">
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <p className="text-[11px] text-gray-400">Use at least 8 characters with a mix of letters, numbers and symbols.</p>

        {/* Checkboxes */}
        <div className="space-y-2 pt-2">
          <label className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span>I agree to the <span className="text-blue-600 underline">Terms of Service</span> and <span className="text-blue-600 underline">Privacy Policy</span>. *</span>
          </label>
          <label className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span>I would like to receive product updates, industry insights and marketing communications.</span>
          </label>
        </div>
      </div>

      {/* Footer Action */}
      <div className="flex justify-end pt-4">
        <button 
          type="button" 
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 w-full text-white px-8 py-3 rounded-xl text-xs font-bold transition shadow-md shadow-blue-600/20"
        >
          Continue &rarr;
        </button>
      </div>

    </div>
  );
}