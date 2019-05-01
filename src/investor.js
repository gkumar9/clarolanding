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
                        <Col style={{textAlign:'center',padding:'2em'}}><img style={{opacity:'0.5'}} src={usaid} alt="usaid"/></Col>
                        <Col style={{textAlign:'center',padding:'1em'}}><img src={rbl} alt="rbl"/></Col>
                        <Col style={{textAlign:'center',padding:'2em 4em 2em 3em'}}><img style={{opacity:'0.5'}} src={growx} alt="rbl"/></Col>
                        <Col style={{textAlign:'center',padding:'1em'}}><img style={{opacity:'0.5'}} src={sidbi} alt="sidbi"/></Col>
                    </Row>
                </div>
                </div>
            </Jumbotron>
        )
    }
}
export default Investor