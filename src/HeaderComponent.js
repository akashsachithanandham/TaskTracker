import React, { Component } from "react";
import bg from "./Assets/to-do-list-page-with-check-marks-and-pencil-concept-illustration-for-time-and-project-management-vector-illustration-template-in-flat-style.webp";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


 class Header extends Component {

  render() {
    return (
      <div className="row text-dark">
        <div className="col s12 m6 ">
          <img className="responsive-img" src={bg} />
        </div>
        <div className="col s12 m6">
          <h4 className="font">
            <b>Work your way out with</b>
          </h4>
          <h1 className="title purple-text text-darken-4">
            Task
            <span className="teal-text text-accent-3 i-line">Tracker</span>
          </h1>
          <p
            className="para"
            style={{
              fontSize: "23px",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Coordinate online with your team anytime, anywhere,
            <br /> with Task Tasker, a tool designed for task managament.
          </p>
          <p
            className="para"
            style={{ fontSize: "23px", fontStyle: "oblique" }}
          >
            With our application, you can :
            <ul
              style={{
                fontSize: "18px",
                fontFamily: "Georgia, Times, serif",
                fontWeight: "bold",
              }}
            >
              &bull; Create new tasks for your teams by defining features like
              priority,due date, etc.
              <br />
              &bull; Examine and Update the status of the tasks.
              <br />
              &bull; View the tasks based on "Priority" and "Planned Date".
              <br />
            </ul>
          </p>
          <div
            className="para"
            style={{
              fontSize: "23px",
              fontFamily: "Arial, Helvetica, sans-serif",
              marginTop:"25px"
            }}
          >
            If you don't have your Account,{" "}
            <a href="/signup">Sign Up </a> to join your team. 
            <br />
            If you have already created your Account,
            <a href="/login">Login</a> to see your tasks.
          </div>
        </div>
      </div>
    );
  }
}

export default Header;