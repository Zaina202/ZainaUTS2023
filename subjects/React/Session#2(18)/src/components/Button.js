import React from 'react';
import './Button.css';

const Button = (props) => {
  const { name, orangeColor, wide, clickHandler } = props;
  const buttonClass = orangeColor ? 'orange-button' : '';
  const buttonStyle = wide ? { width: '50%' } : {};

  return (
    <button
      className={`button ${buttonClass}`}
      style={buttonStyle}
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
};

export default Button;
