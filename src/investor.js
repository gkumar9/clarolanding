import React, { Component } from "react";
import { Jumbotron,Row,Col } from "react-bootstrap";
import "./App.css";
import usaid from './imgs/usaid.png'
import rbl from './imgs/rbl.png'
import sidbi from './imgs/sidbi.png'
import growx from './imgs/growx.png'
class Investor extends Component{
    render(){
        return(
            <Jumbotron fluid id="investor">
                <div className="investor">
                <div className="investorhead">
                    <span>We are backed by</span>
                </div>
                <div className="investorbody">
                    <Row>
                        <Col style={{padding:'2em',marginRight:'5em'}}><img src={usaid} alt="usaid"/></Col>
                        <Col style={{padding:'1em',marginRight:'5em'}}><img src={rbl} alt="rbl"/></Col>
                        <Col style={{padding:'2em',marginRight:'5em'}}><img src={growx} alt="rbl"/></Col>
                        <Col style={{padding:'1em'}}><img src={sidbi} alt="sidbi"/></Col>
                    </Row>
                </div>
                </div>
            </Jumbotron>
        )
    }
}
export default Investor