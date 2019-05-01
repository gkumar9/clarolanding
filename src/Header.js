import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from "./imgs/logonew.jpg";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" id="head">
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
          <AnchorLink href="#about"><Nav.Link >About</Nav.Link></AnchorLink>
          <AnchorLink href="#offering"><Nav.Link eventKey={2}>Offering</Nav.Link></AnchorLink>
          <AnchorLink href="#presence"><Nav.Link eventKey={3}>Presence</Nav.Link></AnchorLink>
          <AnchorLink href="#investor"><Nav.Link eventKey={4}>Investor</Nav.Link></AnchorLink>
          <AnchorLink href="#contactus"><Nav.Link eventKey={5}>Contact us</Nav.Link></AnchorLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
