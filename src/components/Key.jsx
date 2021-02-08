import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Key.css';

const Key = ({ handleKeyPress, keyAction, keyType, keyValue }) => {
    const keyClass = `key-container ${keyType}`;
    let classes = "btn text-dark btn-sm bg-";
    if (
        keyValue == "+" ||
        keyValue == "-" ||
        keyValue == "*" ||
        keyValue == "/"
    ) {
        classes += 'success';
    }
    else if (keyValue == "=") {
        classes += 'warning';
    }
    else {
        classes += 'primary';
    }
    const classs =  keyClass  + " " +  classes ;
    console.log(keyClass);
    console.log(classes);
    console.log('class: ', classs);
    return (
      
        <div
            className={ classs  } 
          
      onClick={() => keyAction(keyValue)}
      //onKeyPress={(event) => handleKeyPress(event)}
    >
      <p className="key-value">{keyValue}</p>
    </div>
  );
};

Key.propTypes = {
  handleKeyPress: PropTypes.func.isRequired,
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

Key.defaultProps = {
  keyType: "default",
  keyAction: "default",
};

export default Key;