import React from 'react';
import './Display.css';

const Display = (props) => {
  const { result } = props;

  return (
    <div className="display">
      <input className="result" type="text" value={result} readOnly />
    </div>
  );
};

export default Display;
