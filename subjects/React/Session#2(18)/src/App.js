import React, { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = (buttonName) => {
    switch (buttonName) {
      case 'AC':
        // Clear the result
        setResult('');
        break;
      case '+/-':
        // Toggle the sign of the number
        setResult((prevResult) => {
          if (prevResult !== '') {
            const parsedResult = parseFloat(prevResult);
            return String(-parsedResult);
          }
          return '';
        });
        break;
      case '=':
        try {
          // Evaluate the expression and update the result
          setResult(eval(result));
        } catch (error) {
          // Handle any errors during evaluation
          setResult('Error');
        }
        break;
      default:
        // Append the clicked button value to the result
        setResult((prevResult) => prevResult + buttonName);
        break;
    }
  };
  

  return (
    <div className="container">
      <div className="title">
        <h3>My Calculator</h3>
      </div>
      <div className="calculator">
        <Display result={result} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
