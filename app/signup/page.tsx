// 'use client';

// import { useState } from 'react';
// import { Ship, Globe, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
// import StepIndicator from './components/StepIndicator';
// import Step1Basic from './components/Step1Basic';
// import Step2Business from './components/Step2Business';
// import Step3Verification from './components/Step3Verification';

// export default function SignupPage() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({ accountType: 'shipper' });

//   const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
//   const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

//   const handleSubmit = () => {
//     console.log('Complete Signup Form Data:', formData);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#f8fafc] text-gray-900 flex flex-col font-sans  antialiased">
      
//       {/* Top Header Row (2 Columns aligned with main content) */}
//       <header className="w-full max-w-[1560px] mx-auto px-6 pt-6 pb-2 flex items-center justify-between">
//         {/* Left Header: Logo */}
//         <div className="flex items-center space-x-2.5">
//           <div className="bg-blue-600 text-white p-2 rounded-xl shadow-sm">
//             <Ship className="w-5 h-5" />
//           </div>
//           <div>
//             <span className="font-extrabold text-base tracking-tight text-gray-900 block leading-tight">FREIGHT<span className="text-blue-600">HUB</span></span>
//             <span className="text-[10px] text-gray-400 tracking-wider font-bold uppercase leading-none">Move Business Forward</span>
//           </div>
//         </div>

//         {/* Right Header: Sign in */}
//         <div className="flex items-center space-x-3">
//           <span className="text-xs text-gray-500 font-medium">Already have an account?</span>
//           <a href="/signin" className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-800 shadow-2xs transition">
//             Sign in
//           </a>
//         </div>
//       </header>

//       {/* Main Content Section */}
//       <main className="w-full max-w-[1560px] mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start flex-1">
        
//         {/* Left Column: Heading, Features & Exact Reference Image */}
//         <div className="lg:col-span-5 flex flex-col space-y-8 sticky top-6">
//           <div className="space-y-3">
//             <h1 className="text-3xl lg:text-[38px] font-extrabold tracking-tight text-gray-900 leading-[1.12]">
//               Join a global trade and logistics marketplace
//             </h1>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Connect with verified partners, get the best rates, and move goods with confidence.
//             </p>
//           </div>

//           {/* Features List */}
//           <div className="space-y-4">
//             <div className="flex items-start space-x-3.5">
//               <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5"><Globe className="w-4 h-4" /></div>
//               <div>
//                 <h4 className="text-xs font-bold text-gray-900">Access a global network</h4>
//                 <p className="text-xs text-gray-500">Shippers, carriers, brokers, buyers and sellers in one place.</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3.5">
//               <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5"><ShieldCheck className="w-4 h-4" /></div>
//               <div>
//                 <h4 className="text-xs font-bold text-gray-900">Verified partners</h4>
//                 <p className="text-xs text-gray-500">Work with trusted and audited businesses.</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3.5">
//               <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5"><Clock className="w-4 h-4" /></div>
//               <div>
//                 <h4 className="text-xs font-bold text-gray-900">Save time and cost</h4>
//                 <p className="text-xs text-gray-500">Compare quotes and get to market faster.</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3.5">
//               <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5"><TrendingUp className="w-4 h-4" /></div>
//               <div>
//                 <h4 className="text-xs font-bold text-gray-900">Grow your business</h4>
//                 <p className="text-xs text-gray-500">Find new opportunities worldwide.</p>
//               </div>
//             </div>
//           </div>

//           {/* Exact Screenshot Image Card with Quote Overlay */}
//           <div className="relative rounded-2xl overflow-hidden shadow-lg h-56 w-full border border-gray-200/50">
//             <img 
//               src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop" 
//               alt="Port container terminal and truck" 
//               className="w-full h-full object-cover object-center"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-5">
//               <p className="text-xs italic font-medium text-white mb-2 leading-relaxed">
//                 "A simpler way to move the world's goods."
//               </p>
//               <div className="w-10 h-1 bg-cyan-400 rounded-full" />
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Clean White Form Card */}
//         <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/80 shadow-sm p-8 lg:p-10 mb-8">
//           <div className="mb-6">
//             <h2 className="text-xl font-bold text-gray-900 tracking-tight">Create your account</h2>
//             <p className="text-xs text-gray-500 mt-0.5">Join FreightHub and start connecting with global trade and logistics partners.</p>
//           </div>

//           {/* Step Progress Bar */}
//           <StepIndicator currentStep={currentStep} />

//           {/* Dynamic Step Forms */}
//           <div className="mt-6">
//             {currentStep === 1 && <Step1Basic formData={formData} setFormData={setFormData} onNext={handleNext} />}
//             {currentStep === 2 && <Step2Business formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} />}
//             {currentStep === 3 && <Step3Verification formData={formData} setFormData={setFormData} onBack={handleBack} onSubmit={handleSubmit} />}
//           </div>
//         </div>

//       </main>

//     </div>
//   );
// }


/////////////////////////

// 'use client';

// import { useState } from 'react';
// import {
//   Ship,
//   Globe,
//   ShieldCheck,
//   Clock,
//   TrendingUp,
// } from 'lucide-react';

// import StepIndicator from './components/StepIndicator';
// import Step1Basic from './components/Step1Basic';
// import Step2Business from './components/Step2Business';
// import Step3Verification from './components/Step3Verification';
// import logistic from "../images/logistic.jpg";

// export default function Signup() {
//   const [currentStep, setCurrentStep] = useState(1);

//   const [formData, setFormData] = useState({
//     accountType: 'shipper',
//   });

//   const handleNext = () => {
//     setCurrentStep((prev) => Math.min(prev + 1, 3));
//   };

//   const handleBack = () => {
//     setCurrentStep((prev) => Math.max(prev - 1, 1));
//   };

//   const handleSubmit = () => {
//     console.log('Complete Signup Form Data:', formData);
//   };

// return (
//   <main
//     className="relative  w-full bg-[#eef4fb] bg-cover bg-center-bottom px-30"
//   style={{
//   backgroundImage: `url(${logistic.src})`,
//   backgroundPosition: "center left",
//   backgroundSize: "cover",
// }}


//     // style={{
//     //   backgroundImage:" ",
//     //     // "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=90&w=2200&auto=format&fit=crop')",
//     //   backgroundPosition: 'center bottom',
//     // }}
//   >

//     {/* IMAGE OVERLAY */}
//     <div className="absolute inset-0 bg-gradient-to-r from-[#eef5fd]/95 via-[#eef5fd]/75 to-[#eef5fd]/15 pointer-events-none" />


//     {/* CONTENT */}
//     <div className="relative z-10 w-full px-6 sm:px-8 lg:px-10 xl:px-12">

//       {/* ================= HEADER ================= */}

//       <header className="h-[30px] pt-[30] w-full flex items-center justify-between">

//         {/* BRAND */}
//         <div className="leading-none">

//           <div className="font-extrabold text-[21px] tracking-[-0.8px] text-[#10203f]">
//             RBS<span className="text-[#0877ed]"> MARKETPLACE</span>
//           </div>

//           <div className="text-[9px] text-[#52617a] tracking-wide mt-1">
//             Move Business Forward
//           </div>

//         </div>


//         {/* SIGN IN */}
//         <div className="flex items-center gap-3">

//           <span className="text-[12px] text-[#34445d] font-medium hidden sm:block">
//             Already have an account?
//           </span>

//           <a
//             href="/signin"
//             className="h-9 px-5 rounded-lg border border-[#72a5e8] bg-white flex items-center justify-center text-[12px] font-bold text-[#1769d3] shadow-sm hover:bg-[#f8fbff] transition"
//           >
//             Sign in
//           </a>

//         </div>

//       </header>


//       {/* ================= TWO COLUMNS ================= */}

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start">

//         {/* ================= LEFT ================= */}

//         <div className="lg:col-span-7 flex flex-col min-h-[calc(100vh-64px)] pt-6 lg:pt-7">

//           {/* HEADING */}

//           <div>

//             <h1 className="max-w-[620px] text-[35px] lg:pt-[50] sm:text-[40px] lg:text-[50px] xl:text-[50px] font-bold tracking-[-1.7px] leading-[1.08] text-[#10203f]">
//               Join a global trade and logistics marketplace
//             </h1>

//             <p className="mt-4 text-[13px] lg:text-[14px] leading-[1.55] text-[#52617a] max-w-[440px]">
//               Connect with verified partners, get the best rates,
//               and move goods with confidence.
//             </p>

//           </div>


//           {/* FEATURES */}

//           <div className="mt-7 lg:mt-8 space-y-4 lg:text-[50px]">

//             <Feature
//               icon={<Globe />}
//               title="Access a global network"
//               text="Shippers, carriers, brokers, buyers and sellers in one place."
//             />

//             <Feature
//               icon={<ShieldCheck />}
//               title="Verified partners"
//               text="Work with trusted and audited businesses."
//             />

//             <Feature
//               icon={<Clock />}
//               title="Save time and cost"
//               text="Compare quotes and get to market faster."
//             />

//             <Feature
//               icon={<TrendingUp />}
//               title="Grow your business"
//               text="Find new opportunities worldwide."
//             />

//           </div>


//           {/* QUOTE */}

//           <div className="mt-auto pb-8 pt-8">

//             <div className="w-[300px] rounded-xl bg-black/70 backdrop-blur-sm px-7 py-5 shadow-lg">

//               <p className="text-[17px] italic font-medium leading-[1.4] text-white">
//                 “A simpler way to move
//                 <br />
//                 the world's goods.”
//               </p>

//               <div className="mt-4 w-9 h-[3px] rounded-full bg-[#20b8ff]" />

//             </div>

//           </div>

//         </div>


//         {/* ================= RIGHT ================= */}

//         <div className="lg:col-span-5 flex justify-end pt-5 lg:pt-6 pb-8">

//           {/* FORM CARD — UNTOUCHED */}

//           <div className="w-full max-w-[750px] bg-white rounded-2xl border border-gray-200 shadow-[0_5px_25px_rgba(20,45,80,0.10)] p-6 sm:p-7 lg:p-8">

//             <div className="mb-5">

//               <h2 className="text-2xl font-bold text-[#101b35]">
//                 Create your account
//               </h2>

//               <p className="text-xs text-gray-500 mt-1">
//                 Join FreightHub and start connecting with global trade and
//                 logistics partners.
//               </p>

//             </div>


//             <StepIndicator currentStep={currentStep} />


//             {/* EXISTING FORMS — NO CHANGE */}

//             <div className="mt-6">

//               {currentStep === 1 && (
//                 <Step1Basic
//                   formData={formData}
//                   setFormData={setFormData}
//                   onNext={handleNext}
//                 />
//               )}

//               {currentStep === 2 && (
//                 <Step2Business
//                   formData={formData}
//                   setFormData={setFormData}
//                   onNext={handleNext}
//                   onBack={handleBack}
//                 />
//               )}

//               {currentStep === 3 && (
//                 <Step3Verification
//                   formData={formData}
//                   setFormData={setFormData}
//                   onBack={handleBack}
//                   onSubmit={handleSubmit}
//                 />
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>

//   </main>
// );


// }


/* ============================================================
   FEATURE COMPONENT
============================================================ */

// function Feature({
//   icon,
//   title,
//   text,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   text: string;
// }) {
//   return (
//     <div className="flex items-start gap-3">

//       <div className="w-15 h-15 shrink-0 rounded-full bg-white flex items-center justify-center text-[#0877ed] shadow-sm">

//         <span className="w-[25px] h-[30px]">
//           {icon}
//         </span>

//       </div>

//       <div className="pt-0.5">

//         <h4 className="text-[13px] lg:text-[18px] font-bold text-[#17243d]">
//           {title}
//         </h4>

//         <p className="text-[11px] lg:text-[15px] leading-[1.45] text-[#657188] mt-0.5 max-w-[390px]">
//           {text}
//         </p>

//       </div>

//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import {
  Globe,
  ShieldCheck,
  Clock,
  TrendingUp,
} from 'lucide-react';

import StepIndicator from './components/StepIndicator';
import Step1Basic from './components/Step1Basic';
import Step2Business from './components/Step2Business';
import Step3Verification from './components/Step3Verification';
import logistic from "../images/logistic.jpg";

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    accountType: 'shipper',
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log('Complete Signup Form Data:', formData);
  };

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#eef4fb]
        bg-cover
        bg-center
        px-4
        sm:px-6
        lg:px-10
      "
      style={{
        backgroundImage: `url(${logistic.src})`,
        backgroundPosition: 'center left',
        backgroundSize: 'cover',
      }}
    >
      {/* IMAGE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#eef5fd]/95 via-[#eef5fd]/75 to-[#eef5fd]/15 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-0 sm:px-2 lg:px-4">

        {/* ================= HEADER ================= */}

        <header className="w-full pt-6 sm:pt-7 lg:pt-8 flex items-center justify-between gap-4">

          {/* BRAND */}
          <div className="leading-none">

            <div className="font-extrabold text-[19px] sm:text-[21px] tracking-[-0.8px] text-[#10203f]">
              RBS<span className="text-[#0877ed]"> MARKETPLACE</span>
            </div>

            <div className="text-[8px] sm:text-[9px] text-[#52617a] tracking-wide mt-1">
              Move Business Forward
            </div>

          </div>

          {/* SIGN IN */}
          <div className="flex items-center gap-2 sm:gap-3">

            <span className="text-[11px] sm:text-[12px] text-[#34445d] font-medium hidden sm:block">
              Already have an account?
            </span>

            <a
              href="/signin"
              className="
                h-9
                px-4
                sm:px-5
                rounded-lg
                border
                border-[#72a5e8]
                bg-white
                flex
                items-center
                justify-center
                text-[11px]
                sm:text-[12px]
                font-bold
                text-[#1769d3]
                shadow-sm
                hover:bg-[#f8fbff]
                transition
                whitespace-nowrap
              "
            >
              Sign in
            </a>

          </div>

        </header>

        {/* ================= TWO COLUMNS ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 items-start">

          {/* ================= LEFT ================= */}

          <div
            className="
              lg:col-span-7
              flex
              flex-col
              lg:min-h-[calc(100vh-100px)]
              pt-8
              sm:pt-10
              lg:pt-12
            "
          >

            {/* HEADING */}

            <div>

              <h1
                className="
                  max-w-[620px]
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[50px]
                  xl:text-[50px]
                  font-bold
                  tracking-[-1.7px]
                  leading-[1.08]
                  text-[#10203f]
                "
              >
                Join a global trade and logistics marketplace
              </h1>

              <p
                className="
                  mt-4
                  text-[13px]
                  sm:text-[14px]
                  leading-[1.55]
                  text-[#52617a]
                  max-w-[440px]
                "
              >
                Connect with verified partners, get the best rates,
                and move goods with confidence.
              </p>

            </div>

            {/* FEATURES */}

            <div className="mt-7 lg:mt-8 space-y-4">

              <Feature
                icon={<Globe />}
                title="Access a global network"
                text="Shippers, carriers, brokers, buyers and sellers in one place."
              />

              <Feature
                icon={<ShieldCheck />}
                title="Verified partners"
                text="Work with trusted and audited businesses."
              />

              <Feature
                icon={<Clock />}
                title="Save time and cost"
                text="Compare quotes and get to market faster."
              />

              <Feature
                icon={<TrendingUp />}
                title="Grow your business"
                text="Find new opportunities worldwide."
              />

            </div>

            {/* QUOTE */}

            <div className="mt-8 lg:mt-auto pb-8 pt-4 lg:pt-8">

              <div
                className="
                  w-full
                  max-w-[300px]
                  rounded-xl
                  bg-black/70
                  backdrop-blur-sm
                  px-6
                  sm:px-7
                  py-5
                  shadow-lg
                "
              >

                <p className="text-[16px] sm:text-[17px] italic font-medium leading-[1.4] text-white">
                  “A simpler way to move
                  <br />
                  the world's goods.”
                </p>

                <div className="mt-4 w-9 h-[3px] rounded-full bg-[#20b8ff]" />

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="
              lg:col-span-5
              flex
              justify-end
              pt-2
              sm:pt-4
              lg:pt-6
              pb-8
              w-full
            "
          >

            {/* FORM CARD */}

            <div
              className="
                w-full
                max-w-[750px]
                bg-white
                rounded-2xl
                border
                border-gray-200
                shadow-[0_5px_25px_rgba(20,45,80,0.10)]
                p-4
                sm:p-6
                lg:p-8
                overflow-hidden
              "
            >

              <div className="mb-5">

                <h2 className="text-xl sm:text-2xl font-bold text-[#101b35]">
                  Create your account
                </h2>

                <p className="text-xs text-gray-500 mt-1 leading-5">
                  Join FreightHub and start connecting with global trade and
                  logistics partners.
                </p>

              </div>

              <StepIndicator currentStep={currentStep} />

              {/* EXISTING FORMS — NO CHANGE */}

              <div className="mt-6 w-full">

                {currentStep === 1 && (
                  <Step1Basic
                    formData={formData}
                    setFormData={setFormData}
                    onNext={handleNext}
                  />
                )}

                {currentStep === 2 && (
                  <Step2Business
                    formData={formData}
                    setFormData={setFormData}
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                )}

                {currentStep === 3 && (
                  <Step3Verification
                    formData={formData}
                    setFormData={setFormData}
                    onBack={handleBack}
                    onSubmit={handleSubmit}
                  />
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}


/* ================= FEATURE COMPONENT ================= */

// function Feature({ icon, title, text }) {
//   return (
//     <div className="flex items-start gap-3 sm:gap-4">

//       <div
//         className="
//           shrink-0
//           w-9
//           h-9
//           sm:w-10
//           sm:h-10
//           rounded-lg
//           bg-white
//           border
//           border-[#d8e5f5]
//           shadow-sm
//           flex
//           items-center
//           justify-center
//           text-[#0877ed]
//         "
//       >
//         {icon}
//       </div>

//       <div className="min-w-0">

//         <h3 className="text-[13px] sm:text-[14px] font-bold text-[#10203f]">
//           {title}
//         </h3>

//         <p className="mt-1 text-[11px] sm:text-[12px] leading-[1.5] text-[#52617a] max-w-[390px]">
//           {text}
//         </p>

//       </div>

//     </div>
//   );
// }
function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="w-15 h-15 shrink-0 rounded-full bg-white flex items-center justify-center text-[#0877ed] shadow-sm">

        <span className="w-[25px] h-[30px]">
          {icon}
        </span>

      </div>

      <div className="pt-0.5">

        <h4 className="text-[13px] lg:text-[18px] font-bold text-[#17243d]">
          {title}
        </h4>

        <p className="text-[11px] lg:text-[15px] leading-[1.45] text-[#657188] mt-0.5 max-w-[390px]">
          {text}
        </p>

      </div>

    </div>
  );
}
