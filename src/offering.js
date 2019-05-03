import React, { Component } from "react";
import { Jumbotron, Row, Col, Tab, Nav } from "react-bootstrap";
import solar from "./imgs/solar.png";
import "./App.css";
class Offering extends Component {
  handletabclick = e => {
    document.getElementById("farmerhand").style.display = "none";
    document.getElementById("enterprisehand").style.display = "none";
    document.getElementById("consumerhand").style.display = "none";
    if (e === "first") {
      document.getElementById("farmerhand").style.display =
        "-webkit-inline-box";
    } else if (e === "second") {
      document.getElementById("enterprisehand").style.display =
        "-webkit-inline-box";
    } else if (e === "third") {
      document.getElementById("consumerhand").style.display =
        "-webkit-inline-box";
    }
  };
  render() {
    return (
      <Jumbotron fluid id="offering">
        <div className="offering">
          <div className="offeringhead">
            <span>Our Offerings</span>
          </div>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="first"
            onSelect={this.handletabclick}
          >
            <Row className="offeringrow">
              <Col sm={4}>
                <Nav
                  style={{ fontSize: "1.2em", flexWrap: "initial" }}
                  variant="pills"
                  className="flex-column"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Row>
                        <Col xs="10">
                          <i
                            style={{ marginRight: "12px" }}
                            className="fas fa-hand-holding"
                          />
                          Benefits for farmers
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
                            className="fas fa-industry"
                          />
                          Values for enterprises
                        </Col>
                        <Col xs="2">
                          <i
                            id="enterprisehand"
                            style={{ display: "none" }}
                            className="fas fa-arrow-right"
                          />
                        </Col>
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <Row>
                        <Col xs="10">
                          <i
                            style={{ marginRight: "12px" }}
                            className="fas fa-smile"
                          />
                          Delights for customers
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
             
              <Col sm={8}> <hr className="hrline" />
                <Tab.Content style={{ marginLeft: "2em" }}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col sm={2}>
                        <img alt="solar" src={solar} />
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
                    <Row style={{ marginTop: "2em" }}>
                      <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col>
                      <Col sm={6}>
                        <div className="offeringheadtab">
                          <span>Agricultural market linkage initiatives</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            We help farmers get fair market price for their agri
                            produces while promoting sustainable welfare in
                            their communities.
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
                          <span>Green agri produce</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Claro offers a range of agri produces from fruits to
                            spices, all free from chemicals and produced from
                            sustainable source of energy.
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
                          <span>Consistent control on supply</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Agri supply chain is the most complex and difficult
                            ones to predict and control. We ensure a consistent
                            supply of fresh produce.
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
                          <span>Traceability of the entire chain</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            We provide platform where our partners can trace the
                            source of the produce and track the consignment at
                            any given time.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col>
                      <Col sm={6}>
                        <div className="offeringheadtab">
                          <span>QR code linking to farmer profile</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Our customers can track the grower profile of the
                            food item she consumes by simply scanning the QR
                            code provided on our package.
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
                          <span>Green agri produce</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Claro provides a range of agri products, all free
                            from chemicals, pesticides and grown using
                            sustainable sources of energy.
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
                          <span>Traceability of the entire chain</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Customers can track food origin and farm profile as
                            well as all stages of production, processing and
                            distribution.
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
