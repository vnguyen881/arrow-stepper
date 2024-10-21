import React from 'react';
// import './Stepper4.css'; // Import the above CSS
import './Stepper.css'; // Import the above CSS

const Stepper = ({ steps, currentStep }) => {
  return (
    <ul className="stepper-container">
      {steps.map((step, index) => {
        console.log('index ', index)
        return(
        <li
          key={index}
          className={`${index === currentStep ? 'active' : ''} steps `}
        >
          <span className={`span`}>{step}</span>
        </li>
        )
      })}
    </ul>
  );
};

export default Stepper;
