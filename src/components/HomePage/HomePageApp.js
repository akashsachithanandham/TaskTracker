import React, { Component } from "react";

import Home from "./HomeComponent";
import NavbarPage from "../NavBar/NavBar";

class HomepageApp extends Component {
  render() {
    return (
      <div className="App">
        <NavbarPage />

        <Home />
      </div>
    );
  }
}

export default HomepageApp;
