import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "./imgs/logonew.jpg";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" id="head">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="180"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link eventKey={1}>
              <AnchorLink href="#about">About</AnchorLink>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <AnchorLink href="#offering">Offerings</AnchorLink>
            </Nav.Link>
            <Nav.Link eventKey={3}>
              {" "}
              <AnchorLink href="#presence">Presence</AnchorLink>
            </Nav.Link>
            <Nav.Link eventKey={4}>
              {" "}
              <AnchorLink href="#investor">Investors</AnchorLink>
            </Nav.Link>
            <Nav.Link eventKey={5}>
              {" "}
              <AnchorLink href="#contactus">Contact</AnchorLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
