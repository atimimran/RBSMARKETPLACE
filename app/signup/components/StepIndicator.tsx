interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { number: 1, label: 'Basic Information' },
    { number: 2, label: 'Business Details' },
    { number: 3, label: 'Verification' },
  ];

  return (
    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
      {steps.map((step, idx) => {
        const isCompleted = currentStep > step.number;
        const isCurrent = currentStep === step.number;

        return (
          <div key={step.number} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center space-x-3">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isCompleted || isCurrent 
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' 
                    : 'bg-gray-100 text-gray-400 border border-gray-200'
                }`}
              >
                {step.number}
              </div>
              <span className={`text-xs font-semibold hidden sm:inline ${isCurrent ? 'text-gray-900' : 'text-gray-400'}`}>
                {step.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}