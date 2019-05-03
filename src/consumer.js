import React, { Component } from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";

import imgs from "./imgs/4.png";
import "./App.css";
class Consumer extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <div className="consumer">
          <img alt="img" width="60%" src={imgs} className="responsive" />
          <div>
            <Container>
              <Row>
                <Col className="consumercolfarm" md="6">
                  <div className="farmerhead">
                    <span>Happy farmer</span>
                  </div>
                  <div className="farmerbody">
                    <p>Low cost agri</p>
                    <p>Fair price for produce</p>
                    <p>Farm advisory</p>
                  </div>
                </Col>
                <Col className="consumercolconsumer" md="6">
                  <div className="farmerhead">
                    <span>Satisfied partner</span>
                  </div>
                  <div className="farmerbody">
                    <p>Sustainable farming</p>
                    <p>Tracebility via tech</p>
                    <p>Chemical free produce</p>
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
export default Consumer;
