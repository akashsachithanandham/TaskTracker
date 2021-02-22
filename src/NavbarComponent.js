import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <a class="navbar-brand" href="#">
          Task Tracker
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a
            href="/login"
            class="btn btn-primary btn-md active"
            role="button"
            aria-pressed="true"
          >
            Login
          </a>{" "}
          &nbsp; &nbsp; &nbsp;
          <a
            href="/signup"
            class="btn btn-primary btn-md active"
            role="button"
            aria-pressed="true"
          >
            Sign Up
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
