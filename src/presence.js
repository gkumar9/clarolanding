import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import map from "./imgs/map2.png";
import mapinfo from "./imgs/mapindex.png";
import "./App.css";

class Presence extends Component{
    render(){
        return(
            <Jumbotron fluid id="presence">
                <div className="presence">
                <div className="presencehead">
                    <span>Our presence</span>
                </div>
                <div className="presencebody">
                    <Row style={{marginRight:'0',marginLeft:'0'}}>
                        <Col sm={8} style={{paddingLeft:'0',paddingRight:'0'}}>
                            <img style={{width:'100%',height:'auto'}} src={map}  alt="map"/>
                        </Col>
                        <Col sm={4}>
                        <img style={{width:'91%',height:'auto'}} src={mapinfo}  alt="map"/>
                            {/* <div style={{textAlign:'center',padding:'3em'}}>
                                <h3>1,05,000</h3>
                                <span style={{color:'#6B6B6B'}}>No of lives impacted</span>
                            </div>
                            <div style={{textAlign:'center',padding:'3em'}}>
                                <h3>2,548</h3>
                                <span style={{color:'#6B6B6B'}}>kW of energy generated</span>
                            </div>
                            <div style={{textAlign:'center',padding:'3em'}}>
                                <h3>3,073</h3>
                                <span style={{color:'#6B6B6B'}}>Tonnes of annual CO2 offset</span>
                            </div> */}
                        </Col>
                    </Row>
                </div>
                </div>
            </Jumbotron>
        )
    }
}
export default Presence