import React, { Component } from "react";
import { Jumbotron, Row, Col, Button } from "react-bootstrap";

import "./App.css";

class Footer extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <div className="footer">
          <div>
            <Row>
              <Col sm="8" />
              <Col style={{ marginTop: "2em",paddingLeft:'0' }} sm="4">
                <Row>
                  <Col sm="6">
                    <Button variant="link">About Us</Button>
                  </Col>
                  <Col sm="6">
                    <Button variant="link">Terms of service</Button>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Button variant="link">Careers</Button>
                  </Col>
                  <Col sm="6">
                    <Button variant="link">Privacy policy</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="link">Blog</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              {/* <Col>
                <Row> */}
                  <Col sm="2">
                    <span style={{ fontSize: "xx-large" }}>
                      Claro <b>Agro</b>
                    </span>
                  </Col>
                  <Col sm="10" style={{ fontSize: "medium" }}>
                    <span>F213/A, Old MB Road, Lado Sarai,</span>
                    <br />
                    <span>New Delhi 110030</span>
                  </Col>
                {/* </Row>
              </Col>

              <Col xs="4" md="4" /> */}
            </Row>
          </div>
        </div>
      </Jumbotron>
    );
  }
}
export default Footer;
