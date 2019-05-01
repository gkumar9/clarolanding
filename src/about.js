import React, { Component } from "react";
import { Jumbotron} from "react-bootstrap";
import "./App.css";
class About extends Component {
  render() {
    return (
      <Jumbotron fluid id="about">
        <div className="about">
          <div className="abouthead">
            <span>Delivering Trust: Discover Claro Agro</span>
          </div>
          <div className="aboutbody">
            <p>
              Building India's largest and most trusted agri brand for farms and
              consumers.
            </p>
            <br />
            <p>
              Built on fundamental principle of fairness, Calro Agro is
              subsidiary of Claro Energy.
            </p>
          </div>
        </div>
      </Jumbotron>
    );
  }
}
export default About;
