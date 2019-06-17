import React, { Component } from "react";
import { Jumbotron, Row, Col, Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import "./App.css";

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      validated: false
    };
  }
  onChangemessage = e => {
    this.setState({ message: e.target.value });
  };
  onChangename = e => {
    this.setState({ name: e.target.value });
  };
  onChangeemail = e => {
    this.setState({ email: e.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios({
        url: "../farmerinfo/visitorquery",
        method: "POST",
        data: {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        },
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (res.data.data.result) {
          this.setState({ name: "", email: "", message: "" });
          document.getElementById("formsubmit").style.display = "none";
          document.getElementById("submitmessage").style.display = "block";
        } else {
          alert(res.data.data.result);
        }
      });
    }
    this.setState({ validated: true });
  };
  render() {
    const { validated } = this.state;
    return (
      <Jumbotron fluid id="contactus">
        <div className="contactus">
          <div className="contactushead">
            <span>Contact Us</span>
          </div>
          <div className="contacctusbody">
            <Container>
              <Row>
                <Col sm="7" />
                <Col sm="5">
                  <Form
                    id="formsubmit"
                    style={{ display: "block" }}
                    ref="form"
                    noValidate
                    validated={validated}
                    onSubmit={e => this.onSubmit(e)}
                  >
                    <Row>
                      <Col>
                        <Form.Control
                          required
                          value={this.state.name}
                          onChange={this.onChangename}
                          placeholder="Name"
                        />
                        <Form.Control.Feedback
                          style={{ color: "white" }}
                          type="invalid"
                        >
                          Please provide a name.
                        </Form.Control.Feedback>
                      </Col>
                      <Col>
                        <Form.Control
                          required
                          type="email"
                          value={this.state.email}
                          onChange={this.onChangeemail}
                          placeholder="Enter email"
                        />
                        <Form.Control.Feedback
                          style={{ color: "white" }}
                          type="invalid"
                        >
                          Please provide valid email.
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ marginTop: "1em" }}>
                        <Form.Control
                          value={this.state.message}
                          onChange={this.onChangemessage}
                          as="textarea"
                          rows="6"
                          placeholder="Message"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ marginTop: "1em" }} sm="6">
                        <Button
                          style={{
                            color: "white",
                            padding: "0.375rem 1.75rem",
                            backgroundColor: "#E3BA08",
                            borderColor: "#E3BA08",
                            fontSize: "0.8rem"
                          }}
                          variant="warning"
                          type="submit"
                        >
                          SEND MESSAGE
                        </Button>
                      </Col>
                      <Col sm="6" />
                    </Row>
                  </Form>
                  <div
                    style={{ display: "none", color: "#535859" }}
                    id="submitmessage"
                  >
                    <h2>
                      Thank you for contacting us
                      <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61" />
                      </svg>
                    </h2>
                  </div>
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
