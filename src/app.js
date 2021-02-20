
import LoginApp from "./components/Login/LoginApp";
import SignupApp from "./components/Signup/SignupApp";
import SignupAppInvite from "./components/SignupInvite/SignupAppInvite";
import HomePageApp from "./components/HomePage/HomePageApp";

import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';


//import test from './test';
import "./App.css";


class App extends Component {
  state = {  }
  render() { 
    return (
      <BrowserRouter>
        <div className="App text-white m-50">
          <Route exact path="/" component={LoginApp} />
          <Route path="/signup" component={SignupApp} />
          <Route path="/signupInvite" component={SignupAppInvite}/>

          {/* <Header />
          <Form /> */}
        </div>
        <Route path="/home" component={HomePageApp} />
       

      </BrowserRouter>
    );
  }
}
export default App;


