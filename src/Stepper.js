import React from 'react';
// import './Stepper4.css'; // Import the above CSS
import './Stepper.css'; // Import the above CSS

const Stepper = ({ steps, currentStep }) => {
  return (
    <ul className="stepper-container">
      {steps.map((step, index) => {
        return(
        <li
          key={index}
          className={`steps ${index < currentStep ? 'completed' : ''} ${
            index === currentStep ? 'active' : ''
          }`}
        >
          <span className="span">{step}</span>
        </li>
        )
      })}
    </ul>
  );
};

export default Stepper;
