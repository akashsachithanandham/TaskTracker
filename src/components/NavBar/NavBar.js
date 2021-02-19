import React, { Component } from "react";
import "./NavBar.css";
import CreateTask from "../CreateTask/CreateTaskApp";

class NavbarPage extends Component {
  render() {
    return (
      // <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
      //   <a class="navbar-brand" href="#">
      //     Task Tracker
      //   </a>
      //   <button
      //     class="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      //   <div class=" ml-auto mr-1"></div>

      //   <div
      //     class="collapse navbar-collapse flex-grow-0"
      //     id="navbarSupportedContent"
      //   >
      // <ul class="navbar-nav text-right">
      //   <li class="nav-item active">
      //     <a class="nav-link" href="#">
      //       <CreateTask />
      //     </a>
      //   </li>
      //   <li class="nav-item active">
      //     <a class="nav-link" href="/">
      //       Logout
      //     </a>
      //   </li>
      // </ul>
      //   </div>
      // </nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
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

        <div
          class="collapse navbar-collapse flex-grow-0 "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <CreateTask />
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarPage;
