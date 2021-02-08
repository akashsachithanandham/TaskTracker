import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './Display.css';
const Display = ({ displayedValue }) => (
  <div className="display-container">
    <p className="display-value">{displayedValue}</p>
  </div>
);

Display.propTypes = { displayedValue: PropTypes.string.isRequired };

Display.defaultProps = { displayedValue: "default" };

export default Display;