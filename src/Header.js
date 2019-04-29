import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./imgs/logonew.jpg";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="180"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2}>Offering</Nav.Link>
            <Nav.Link eventKey={3}>Presence</Nav.Link>
            <Nav.Link eventKey={4}>Investor</Nav.Link>
            <Nav.Link eventKey={5}>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
