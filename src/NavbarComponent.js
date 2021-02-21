import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

 class Navbar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, "#");
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar navbar-expand-xl pmd-navbar  ">
        <a class="navbar-brand" href="#">
          <strong> Task Tracker</strong>
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
                Welcome {localStorage.getItem("userName")}!
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
              
              </a>
            </li>
            <li class="nav-item active justify-content-end">
              <a class="nav-link" href="/" onClick={this.handleLogout}>
                Logout
              </a>
            </li>
          </ul>
          {/* <div class="dropdown pmd-dropdown pmd-user-info ml-auto">
        <a href="javascript:void(0);" class="btn-user dropdown-toggle media align-items-center" data-toggle="dropdown" data-sidebar="true" aria-expanded="false">
            <img class="mr-2" src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" alt="avatar"></img>
            <div class="media-body">
                User
            </div>
            <i class="material-icons md-light ml-2 pmd-sm">more_vert</i>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" role="menu">
            <a class="dropdown-item" href="javascript:void(0);">Edit Profile</a>
            <a class="dropdown-item" href="javascript:void(0);">Logout</a>
        </ul>
    </div>
         */}
        </div>
      </nav>
    );
  }
}

export default Navbar;