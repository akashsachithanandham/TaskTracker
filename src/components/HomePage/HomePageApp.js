import React, { Component } from "react";

import Home from "./HomeComponent";
import NavbarPage from "../NavBar/NavBar";

class HomepageApp extends Component {
  render() {
    return (
      <div className="App">
        <NavbarPage />
        <div style={{marginTop:"25px"}}>
          <Home />
        </div>
      </div>
    );
  }
}

export default HomepageApp;
