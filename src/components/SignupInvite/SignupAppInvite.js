//import React from "react";
import Signup from "./Signup";
import React, { Component } from "react";
import Header from "../Header/Header";
import {
  useParams
} from "react-router-dom";

import axios from "axios";
import "../../App.css";
//const {inviteId} = useParams();
class App extends Component {
  constructor(props){
    super(props);
this.state = {
  i: this.props.match.params.inviteId,
  Email:""
    }
    console.log(this.props.match);
  }
  
  //let invites="";
  componentDidMount(){
  let invites = this.props.match.params.inviteId;
  console.log(this.props.match.params.inviteId);
  console.log(invites);
  this.setState({i:invites});
    console.log("inside state ", this.state.i)
   var res = fetch("https://jedischoolteam3.tk/sendemail", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
      
     },
     // We convert the React state to JSON and send it as the POST body
     body: JSON.stringify({
       token: this.state.i,
       
     }),
   }).then(function (response) {
     
     return response.json();
   });
    const getAccess = async () => {
      const UserDetails2 = await res;
      var email = UserDetails2.message;
      console.log(email);
      if (email == "You have already registered.Please Login") { alert(email); window.location.href = "/login";}
      else {
         this.setState({ Email: email });
      }
      
       
    };

    getAccess();
}
  render() {
    return (
      <div className="App text-white">
        <div style={{ marginTop: "-20px" }}>
          <Header />
        </div>
        <div style={{ marginTop: "-10px" }}>
          <Signup email={this.state.Email}/>
        </div>
      </div>
    );
  }
}
export default App;

