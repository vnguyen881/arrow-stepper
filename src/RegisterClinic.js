import React, { useState } from 'react';
import Stepper from './Stepper';

const LogInventory = () => {
  const steps = ['Log Inventory', 'Review'];
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
      <h1>Manually log inventory</h1>
      <Stepper steps={steps} currentStep={currentStep} />
      <button
        onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))}
      >
        Next Step
      </button>
      <button onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}>
        Previous Step
      </button>
    </div>
  )
}

export default LogInventory;