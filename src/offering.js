import React, { Component } from "react";
import { Jumbotron, Row, Col, Tab, Nav } from "react-bootstrap";
import solar from "./imgs/solar.png";
import "./App.css";
class Offering extends Component {
  handletabclick = e => {
    document.getElementById("farmerhand").style.display = "none";
    document.getElementById("consumerhand").style.display = "none";
    if (e === "first") {
      document.getElementById("farmerhand").style.display =
        "-webkit-inline-box";
    } else {
      document.getElementById("consumerhand").style.display =
        "-webkit-inline-box";
    }
  };
  render() {
    return (
      <Jumbotron fluid>
        <div className="offering">
          <div className="offeringhead">
            <span>Our Offerings</span>
          </div>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="first"
            onSelect={this.handletabclick}
          >
            <Row>
              <Col sm={4}>
                <Nav
                  style={{ fontSize: "1.1em" }}
                  variant="pills"
                  className="flex-column"
                >
                  <Nav.Item style={{ marginBottom: "2em" }}>
                    <Nav.Link eventKey="first">
                      <Row>
                        <Col xs="10">
                          <i
                            style={{ marginRight: "12px" }}
                            className="fas fa-hand-holding"
                          />
                          Values for our farmers
                        </Col>
                        <Col xs="2">
                          <i
                            id="farmerhand"
                            style={{ display: "-webkit-inline-box" }}
                            className="fas fa-arrow-right"
                          />
                        </Col>
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Row>
                        <Col xs="10">
                          <i
                            style={{ marginRight: "12px" }}
                            className="far fa-smile"
                          />
                          Delights for consumers
                        </Col>
                        <Col xs="2">
                          <i
                            id="consumerhand"
                            style={{ display: "none" }}
                            className="fas fa-arrow-right"
                          />
                        </Col>
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content style={{ marginLeft: "2em" }}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col>
                      <Col sm={6}>
                        <div className="offeringheadtab">
                          <span>Irrigation as a service Solar Panel</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Claro offers a pay-per-use irrigation service that
                            uses a portable solar pump to provide affordable,
                            convenient, and on-demand irrigation.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2em" }}>
                      <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col>
                      <Col sm={6}>
                        <div className="offeringheadtab">
                          <span>Solar irrigation systems</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            The service meets the need of wide rnge of farmers
                            who do not own pumps, with no upfront capital costs
                            incurred.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <Row>
                      <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col>
                      <Col sm={6}>
                        <div className="offeringheadtab">
                          <span>Irrigation as a service Solar Panel</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Claro offers a pay-per-use irrigation service that
                            uses a portable solar pump to provide affordable,
                            convenient, and on-demand irrigation.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2em" }}>
                      <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col>
                      <Col sm={6}>
                        <div className="offeringheadtab">
                          <span>Solar irrigation systems</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            The service meets the need of wide rnge of farmers
                            who do not own pumps, with no upfront capital costs
                            incurred.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Jumbotron>
    );
  }
}
export default Offering;
