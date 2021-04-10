import React from "react";

import useAppContext from '../context/useAppContext';

import "./styles/BasicCalculator.scss";

const BasicCalculator = () => {
  const { dispatch } = useAppContext();

  const handleClick = (e) => {
    dispatch({
      type: 'ADD_TO_DISPLAY',
      payload: e.target.dataset.key
    })
  }

  const clear = () => {
    dispatch({
      type: 'CLEAR'
    })
  }

  const del = () => {
    dispatch({
      type: 'DELETE'
    })
  }

  const getResult = () => {
    dispatch({
      type: 'GET_RESULT'
    })
  }
  
  return (
    <div className="keys">
      <div className="btn operator" data-key='(' onClick={handleClick}>(</div>
      <div className="btn operator" data-key=')' onClick={handleClick}>)</div>
      <div className="btn" onClick={del}>C</div>
      <div className="btn" onClick={clear}>AC</div>
      <div className="btn number" data-key='7' onClick={handleClick}>7</div>
      <div className="btn number" data-key='8' onClick={handleClick}>8</div>
      <div className="btn number" data-key='9' onClick={handleClick}>9</div>
      <div className="btn operator" data-key='/' onClick={handleClick}>/</div>
      <div className="btn number" data-key='4' onClick={handleClick}>4</div>
      <div className="btn number" data-key='5' onClick={handleClick}>5</div>
      <div className="btn number" data-key='6' onClick={handleClick}>6</div>
      <div className="btn operator" data-key='*' onClick={handleClick}>x</div>
      <div className="btn number" data-key='1' onClick={handleClick}>1</div>
      <div className="btn number" data-key='2' onClick={handleClick}>2</div>
      <div className="btn number" data-key='3' onClick={handleClick}>3</div>
      <div className="btn operator" data-key='-' onClick={handleClick}>-</div>
      <div className="btn number" data-key='0' onClick={handleClick}>0</div>
      <div className="btn number" data-key='.' onClick={handleClick}>,</div>
      <div className="btn operator" onClick={getResult}>=</div>
      <div className="btn operator" data-key='+' onClick={handleClick}>+</div>
    </div>
  );
}

export default BasicCalculator;
