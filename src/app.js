import React, { Component } from "react";
import Calculator from "./components/Calculator";
class App extends Component {
  //state = {  }
  render() {
    return (
      <div className="app-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
