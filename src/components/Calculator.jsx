import React, { Component } from 'react';
import Keypad from './Keypad';
import Display from './Display';
import './Calculator.css';
class Calculator extends Component {
  state = {
    stackedValue: "",
    displayedValue: "0",
    integers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "ce"],
    arithmeticOperations: ["+", "-", "/", "*"],
    selectedOperation: "",
  };
//   componentWillMount = () => {
//     document.addEventListener("keydown", this.handleKeyPress);
//   };

//   componentWillUnmount = () => {
//     document.removeEventListener("keydown", this.handleKeyPress);
//   };
  callOperator = () => {
    let { displayedValue, selectedOperator, stackedValue } = this.state;
    const updatestackedValue = displayedValue;

    displayedValue = parseInt(displayedValue, 10);
    stackedValue = parseInt(stackedValue, 10);

    switch (selectedOperator) {
      case "+":
        displayedValue = stackedValue + displayedValue;
        break;
      case "-":
        displayedValue = stackedValue - displayedValue;
        break;
      case "*":
        displayedValue = stackedValue * displayedValue;
        break;
      case "/":
        displayedValue = stackedValue / displayedValue;
        break;
      default:
        displayedValue = "0";
    }

    displayedValue = displayedValue.toString();
    selectedOperator = "";
    if (displayedValue === "NaN" || displayedValue === "Infinity")
      displayedValue = "0";

    this.setState({
      displayedValue,
      selectedOperator,
      stackedValue: updatestackedValue,
    });
  };

//   handleKeyPress = (event) => {
//     const { numbers, operators } = this.state;

//     if (event.key === "Backspace") this.updateDisplay("ce");
//     if (event.key === "Enter" || event.key === "=") this.callOperator();

//     numbers.forEach((number) => {
//       if (event.key === number) this.updateDisplay(number);
//     });

//     operators.forEach((operator) => {
//       if (event.key === operator) this.setOperator(operator);
//     });
//   };

  setOperator = (value) => {
    let { displayedValue, selectedOperator, stackedValue } = this.state;

    if (selectedOperator === "") {
      stackedValue = displayedValue;
      displayedValue = "0";
      selectedOperator = value;
    } else {
      selectedOperator = value;
    }

    this.setState({ displayedValue, selectedOperator, stackedValue });
  };

  updateDisplay = (value) => {
    let { displayedValue } = this.state;

    if (value === "." && displayedValue.includes(".")) value = "";

    if (value === "ce") {
      displayedValue = displayedValue.substr(0, displayedValue.length - 1);
      if (displayedValue === "") displayedValue = "0";
    } else {
      displayedValue === "0" ? (displayedValue = value) : (displayedValue += value);
    }

    this.setState({ displayedValue });
  };

  render() {
    return (
      <React.Fragment>
        <Display displayedValue={this.state.displayedValue} />
        <Keypad
          //handleKeyPress={this.handleKeyPress}
          arithmeticOperations={this.state.arithmeticOperations}
          callOperator={this.callOperator}
          integers={this.state.integers}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </React.Fragment>
    );
  }
}
 
export default Calculator;