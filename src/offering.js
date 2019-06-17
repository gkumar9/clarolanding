import React, { Component } from "react";
import { Jumbotron, Row, Col, Tab, Nav } from "react-bootstrap";
import solar from "./imgs/solar.png";
import "./App.css";
class Offering extends Component {
  render() {
    return (
      <Jumbotron fluid id="offering">
        <div className="offering">
          <div className="offeringhead">
            <span>Our Offerings</span>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="offeringrow">
              <Col sm={1} />
              <Col sm={4}>
                <Nav
                  style={{ fontSize: "1.2em", flexWrap: "initial" }}
                  variant="pills"
                  className="flex-column"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Row>
                        <Col xs="12">
                          <i
                            style={{ marginRight: "12px" }}
                            className="fas fa-hand-holding"
                          />
                          For Farmers
                        </Col>
                        {/* <Col xs="2">
                          <i
                            id="farmerhand"
                            style={{ display: "-webkit-inline-box" }}
                            className="fas fa-arrow-right"
                          />
                        </Col> */}
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Row>
                        <Col xs="12">
                          <i
                            style={{ marginRight: "12px" }}
                            className="fas fa-industry"
                          />
                          For Wholesalers/Retailers
                        </Col>
                        {/* <Col xs="2">
                          <i
                            id="enterprisehand"
                            style={{ display: "none" }}
                            className="fas fa-arrow-right"
                          />
                        </Col> */}
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <Row>
                        <Col xs="12">
                          <i
                            style={{ marginRight: "12px" }}
                            className="fas fa-smile"
                          />
                          For Consumers
                        </Col>
                        {/* <Col xs="2">
                          <i
                            id="consumerhand"
                            style={{ display: "none" }}
                            className="fas fa-arrow-right"
                          />
                        </Col> */}
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col sm={6}>
                {" "}
                <hr className="hrline" />
                <Tab.Content style={{ marginLeft: "1em" }}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {/* <Col sm={2}>
                        <img alt="solar" src={solar} />
                      </Col> */}
                      <Col sm={10}>
                        <div className="offeringheadtab">
                          <span>Solar Irrigation As a service</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Claro offer Pay As You Go irrigation to small &
                            marginal farmers through its award winning solar
                            irrigation trolley & mini grids
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "1em" }}>
                      {/* <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col> */}
                      <Col sm={10}>
                        <div className="offeringheadtab">
                          <span>Solar Irrigation Solutions</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            For middle & high income farmers, we offer
                            individual solar irrigation pumps often bundled with
                            loan from a bank.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "1em" }}>
                      {/* <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col> */}
                      <Col sm={10}>
                        <div className="offeringheadtab">
                          <span>Market Linkage</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            We buy produce from farmers at better rates, process
                            and/or package them before selling to
                            wholesalers/retailers
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {/* <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col> */}
                      <Col sm={10}>
                        <div className="offeringheadtab">
                          <span>Farm Fresh Agri produce</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Claro Agro offers a range of agri produce to Agri
                            Enterprises/Wholesalers/Retaile rs giving stability
                            to their supply chain
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "1em" }}>
                      {/* <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col> */}
                      <Col sm={10}>
                        <div className="offeringheadtab">
                          <span>Traceability</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            For Global FMCG companies, sustainable sourcing is
                            often a mandate. We offer traceability of farm
                            produce through our proprietary tech that captures
                            movement of goods in the supply chain.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {/* <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col> */}
                      <Col sm={10}>
                        <div className="offeringheadtab">
                          <span>Farm to Fork Fresh Produce</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Consumers can trace the origins of their food right
                            to the farmer and the land where the crop was grown.
                            A QR code is provided that can be scanned to fetch
                            all details.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "1em" }}>
                      {/* <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col> */}
                      <Col sm={10}>
                        <div className="offeringheadtab">
                          <span>Agri Food brand with Promise</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Claro Agro has a in house brands for Fresh &
                            processed Agri produce that come with the promise of
                            sustainable growing. These brands are available in
                            several modern trade formats and online stores.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "1em" }}>
                      {/* <Col sm={2}>
                        <img alt="soalr" src={solar} />
                      </Col> */}
                      <Col sm={10}>
                        <div className="offeringheadtab">
                          <span> Brands</span>
                        </div>
                        <div className="offeringbodytab">
                          <p>
                            Sanpuro logo
                            <br />
                            Sunny banana logo <br />
                            (KW will provide both these logos)
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
