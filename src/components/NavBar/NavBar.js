import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './NavBar.css';
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">TaskTracker</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
        <MDBNavItem active>
              <MDBNavLink to="#!">(User)</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">LogOut</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem >
              <MDBDropdown className = "space">
                <MDBDropdownToggle nav caret>
                  <strong className="white-text">Sort By</strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Prority</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Planned Date</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> 
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown className = "space">
                <MDBDropdownToggle nav caret>
                  <strong className="white-text">Filter By</strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Prority</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Planned Date</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> 
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;