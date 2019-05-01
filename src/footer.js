import React, { Component } from "react";
import { Jumbotron, Row, Col, Form, Container, Button } from "react-bootstrap";

import "./App.css";

class Footer extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <div className="footer">
          <div>
            <Row>
              <Col xs="8" md="8" />
              <Col style={{ marginTop: "80px" }} xs="4" md="4">
                <Row>
                  <Col>
                    <Button variant="link">About Us</Button>
                  </Col>
                  <Col>
                    <Button variant="link">Terms of service</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="link">Careers</Button>
                  </Col>
                  <Col>
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
              <Col>
                <Row>
                  <Col xs="3" md="3">
                    <span style={{ fontSize: "xx-large" }}>
                      Claro <b>Agro</b>
                    </span>
                  </Col>
                  <Col xs="4" md="4" style={{ fontSize: "medium" }}>
                    <span>F213/A, Old MB Road, Lado Sarai,</span>
                    <br />
                    <span>New Delhi 110030</span>
                  </Col>
                </Row>
              </Col>

              <Col xs="4" md="4" />
            </Row>
          </div>
        </div>
      </Jumbotron>
    );
  }
}
export default Footer;
