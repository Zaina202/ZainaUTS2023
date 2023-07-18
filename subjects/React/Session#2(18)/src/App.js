import React, { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = (buttonName) => {
    switch (buttonName) {
      case 'AC':
        setResult('');
        break;
      case '+/-':
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
          setResult(eval(result));
        } catch (error) {
          setResult('Error');
        }
        break;
      default:
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
