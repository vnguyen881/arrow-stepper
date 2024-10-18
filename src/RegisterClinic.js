import React, { useState } from 'react';
import NavTab from './NavTab';
import Stepper from './Stepper';

const RegisterClinic = () => {
  const steps = ['Log Inventory', 'Review'];
  const [currentStep, setCurrentStep] = useState(1); // Active step is the second one for example
  console.log('currentStep ', currentStep)

  return (
    <div>
      <h1>RegisterClinic</h1>
      <Stepper steps={steps} currentStep={currentStep} />
      <button
        onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))}
      >
        Next Step
      </button>
      <button onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}>
        Previous Step
      </button>
      {/* <NavTab /> */}
    </div>
  )
}

export default RegisterClinic;

// import React, { useState } from 'react';
// import Stepper from './Stepper';

// const App = () => {
//   const steps = ['Application Received', 'Language Exam', 'Oral Exam', 'Grant'];
//   const [currentStep, setCurrentStep] = useState(1); // Active step is the second one for example

//   return (
//     <div>
//       <h1>Stepper with Arrows</h1>
//       <Stepper steps={steps} currentStep={currentStep} />
//       <button
//         onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))}
//       >
//         Next Step
//       </button>
//       <button onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}>
//         Previous Step
//       </button>
//     </div>
//   );
// };

// export default App;
