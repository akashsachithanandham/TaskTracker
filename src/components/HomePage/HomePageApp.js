import React, { Component } from 'react';
//import "../../App.css";
import Home from "./HomeComponent";
import NavbarPage from "../NavBar/NavBar";

class HomepageApp extends Component {
    //state = {  }
    render() { 
        return (<div className="App">
      
        <NavbarPage />
      
      <Home />
    </div>  );
    }
}
 
export default HomepageApp;
