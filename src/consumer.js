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
                    <span>For Farmers</span>
                  </div>
                  <div className="farmerbody">
                    <p>On Demand Irrigation</p>
                    <p>Lower Cost</p>
                    <p>Improved Yields</p>
                    <p>Better Prices</p>
                  </div>
                </Col>
                <Col className="consumercolconsumer" md="6">
                  <div className="farmerhead">
                    <span>For Enterprises</span>
                  </div>
                  <div className="farmerbody">
                    <p>Sustainable Sourcing</p>
                    <p>Traceability Of Produce</p>
                    <p>Visibility In Supply Chain</p>
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
