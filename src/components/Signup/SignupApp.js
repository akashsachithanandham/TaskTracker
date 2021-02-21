
import Signup from "./Signup";
import React, { Component } from "react";
import Header from "../Header/Header";


import "../../App.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App text-white">
        <div style={{ marginTop: "-20px" }}>
          <Header />
        </div>
        <div style={{ marginTop: "-10px" }}>
          <Signup />{" "}
        </div>
      </div>
    );
  }
}
export default App;

