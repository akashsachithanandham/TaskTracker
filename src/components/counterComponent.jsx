import React, { Component } from "react";

class Counter extends Component {
//   state = {
//     count: this.props.value,
//   };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  constructor(props) {
    super();
      this.state = {
        count: props.value,
      };
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  getBadgeColour() {
    let classes = "badge m-2 badge-";
    if (this.state.count == 0) {
      classes += "danger";
    } else {
      classes += "primary";
    }
    return classes;
  }

  render() {
    console.log("printing props");
    console.log(this.props.value);

    return (
      <React.Fragment>
        
        <span style={this.styles} className={this.getBadgeColour()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  formatCounter() {
    if (this.state.count == 0) {
      return "Zero";
    } else {
      return this.state.count;
    }
  }
}

export default Counter;
