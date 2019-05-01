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
        url: "http://staging.clarolabs.in:7060/farmerinfo/visitorquery",
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
        console.log(res);
        this.setState({ name: "", email: "", message: "" });
        console.log(this.refs)
        // this.refs.form.refs.reset();
      });
    }
    this.setState({ validated: true });
    // axios({
    //   url: "http://staging.clarolabs.in:7060/farmerinfo/visitorquery",
    //   method: "POST",
    //   data: {
    //     name: this.state.name,
    //     email: this.state.email,
    //     message: this.state.message
    //   },
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // }).then(res => {
    //   console.log(res);
    // });
  };
  render() {
    const { validated } = this.state;
    return (
      <Jumbotron fluid id="contactus">
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
