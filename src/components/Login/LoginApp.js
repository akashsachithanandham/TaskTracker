//import React from "react";
import Login from "./Login";
import React, { Component } from "react";
import Header from "../Header/Header";


import "../../App.css";
class App extends Component {
  state = {};
  render() {
    return (
      
        <div className="App text-white m-50">
          

          <Header />
          <Login /> 
        </div>
      
    );
  }
}
export default App;

