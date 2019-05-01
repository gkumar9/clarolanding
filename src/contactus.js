import React, { Component } from "react";
import { Jumbotron, Row, Col, Form, Container, Button } from "react-bootstrap";

import "./App.css";

class Contactus extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <div className="contactus">
          <div className="contactushead">
            <span>Contact us</span>
          </div>
          <div className="contacctusbody">
            <Container>
              <Row>
                <Col sm="7" />
                <Col sm="5">
                  <Form
                    action="https://formspree.io/g.kumar@claroenergy.in"
                    method="POST"
                  >
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="First name"
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Enter email"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ marginTop: "1em" }}>
                        <Form.Control
                          name="message"
                          as="textarea"
                          rows="6"
                          placeholder="Message"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ marginTop: "1em" }} sm="6">
                        <Button variant="warning" type="submit">
                          Submit
                        </Button>
                      </Col>
                      <Col sm="6" />
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Jumbotron>
    );
  }
}
export default Contactus;
