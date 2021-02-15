import React, { Component } from "react";
import "./NavBar.css";

class NavbarPage extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <a class="navbar-brand mb-0 h1" href="#">
          <span class="Texts">TaskTracker</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span class="Texts">(User)</span>{" "}
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="Texts">Logout</span>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li class="nav-item dropdown">
              <a
                class="nav-item nav-link dropdown-toggle mr-md-2"
                href="#"
                id="bd-versions"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="Texts">Sort By</span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="bd-versions"
              >
                <a class="dropdown-item" href="#">
                  <span class="Texts">Priority</span>
                </a>
                <a class="dropdown-item" href="#">
                  <span class="Texts">Due Date</span>
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-item nav-link dropdown-toggle mr-md-2"
                href="#"
                id="bd-versions"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="Texts">Filter By</span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="bd-versions"
              >
                <a class="dropdown-item" href="#">
                  <span class="Texts">Name</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarPage;
