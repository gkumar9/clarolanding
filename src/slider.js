import React, { Component } from "react";
import { Jumbotron, Carousel } from "react-bootstrap";
import irrigation from "./imgs/img2/irrigation.jpg";
import farm from "./imgs/img2/farm.jpg";
import grid from "./imgs/img2/grid.jpg";
import spice from "./imgs/img2/new.png";
import "./App.css";
class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  render() {
    const { index, direction } = this.state;
    return (
      <Jumbotron fluid>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={1000}
        >
          <Carousel.Item>
            <div className="imgtag">
              <img className="d-block w-100" src={spice} alt="First slide" />
            </div>

            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              <h1>Delight your craving</h1>
              <br />
              <h1>while discovering new flavours</h1>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <div className="imgtag">
              <img className="d-block w-100" src={grid} alt="Third slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imgtag">
              <img
                className="d-block w-100"
                src={irrigation}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imgtag">
              <img className="d-block w-100" src={farm} alt="Third slide" />
            </div>
          </Carousel.Item> */}
        </Carousel>
      </Jumbotron>
    );
  }
}
export default Slider;
