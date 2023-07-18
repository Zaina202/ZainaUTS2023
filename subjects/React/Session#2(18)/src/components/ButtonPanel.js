import React from 'react';
import Button from './Button';

const ButtonPanel = (props) => {
  const { clickHandler } = props;

  return (
    <div className="button-panel">
      <div className="button-row">
        <Button name="AC" clickHandler={clickHandler} />
        <Button name="+/-" clickHandler={clickHandler} />
        <Button name="%" clickHandler={clickHandler} />
        <Button name="÷" orangeColor clickHandler={clickHandler} />
      </div>
      <div className="button-row">
        <Button name="7" clickHandler={clickHandler} />
        <Button name="8" clickHandler={clickHandler} />
        <Button name="9" clickHandler={clickHandler} />
        <Button name="×" orangeColor clickHandler={clickHandler} />
      </div>
      <div className="button-row">
        <Button name="4" clickHandler={clickHandler} />
        <Button name="5" clickHandler={clickHandler} />
        <Button name="6" clickHandler={clickHandler} />
        <Button name="-" orangeColor clickHandler={clickHandler} />
      </div>
      <div className="button-row">
        <Button name="1" clickHandler={clickHandler} />
        <Button name="2" clickHandler={clickHandler} />
        <Button name="3" clickHandler={clickHandler} />
        <Button name="+" orangeColor clickHandler={clickHandler} />
      </div>
      <div className="button-row">
        <Button name="0" wide clickHandler={clickHandler} />
        <Button name="." clickHandler={clickHandler} />
        <Button name="=" orangeColor clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default ButtonPanel;
