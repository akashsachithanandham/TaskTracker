import React, { Component } from 'react';
import Key from './Key';
import PropTypes from 'prop-types';
import './Keypad.css';
const Keypad = ({
  arithmeticOperations,
  callOperator,
  
  integers,
  setOperator,
  updateDisplay,
}) => {
  const numberKeys = integers.map((number, iterator) => (
    <Key
     // handleKeyPress={handleKeyPress}
      key={`${number}${iterator}`}
      keyType="number-key"
      keyValue={number}
      keyAction={updateDisplay}
    />
  ));

  const operatorKeys = arithmeticOperations.map((operator, iterator) => (
    <Key
      //handleKeyPress={handleKeyPress}
      key={`${operator}${iterator}`}
      keyType="operator-key"
      keyValue={operator}
      keyAction={setOperator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <div className="submit-container">
        <Key
          //handleKeyPress={handleKeyPress}
          keyType="submit-key"
          keyValue="="
          keyAction={callOperator}
        />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  //handleKeyPress: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

Keypad.defaultProps = {
  numbers: [],
  operators: [],
};


 
export default Keypad;