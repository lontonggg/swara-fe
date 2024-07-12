'use client'

import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  steps: { label: string, icon: JSX.Element }[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current < currentStep) {
      const timeout = setTimeout(() => setCurrent(current + 1), 300);
      return () => clearTimeout(timeout);
    }
  }, [current, currentStep]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative flex items-start justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="relative flex items-center justify-center w-full">
              <div
                className={`w-8 h-8 rounded-full z-10 transition-colors duration-500 ${
                  index < current ? 'bg-primary' : 'bg-gray-300'
                }`}
              ></div>
              {index < steps.length - 1 && (
                <div className="absolute left-6 transform translate-x-1/2 h-1 w-5/6 bg-gray-300">
                  <div
                    className={`h-full transition-colors duration-500 ${
                      index < current - 1 ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  ></div>
                </div>
              )}
              {index === steps.length - 1 && (
                <div className="absolute left-6 transform -translate-x-1/2 h-1 w-1/2 bg-gray-300">
                  <div
                    className={`h-full transition-colors duration-500 ${
                      index < current ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  ></div>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center flex-grow">
              <span
                className={`mt-10 text-3xl transition-colors duration-500  ${
                  index < current ? 'text-primary' : 'text-gray-300'
                }`}
              >
                
                {step.icon} 
              </span>
              <div
                className={`mt-4 text-lg text-center font-semibold transition-colors duration-500 ${
                  index < current ? 'text-black' : 'text-gray-500'
                }`}
              >
                {step.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
