import React, { Component } from "react";
import { Jumbotron, Carousel, Container } from "react-bootstrap";
// import spice from "./imgs/img2/new.png";
import "./App.css";
import claro from "./imgs/img2/claro.JPG";
import pump from "./imgs/img2/pump.jpg";
// import haldi from "./imgs/img2/haldi.jpg";
// import irrigation from "./imgs/img2/irrigation.jpg";
// import shopmobile from "./imgs/img2/shopmobile.jpg";
// import haldimobile from "./imgs/img2/haldimobile.jpg";
// import irrigationmobile from "./imgs/img2/irrigationmobile.jpg";
class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      shopimg: "",
      irrigationimg: "",
      haldiimg: "",
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  // componentDidMount() {
  //   this.setState({
  //     shopimg: shop,
  //     irrigationimg: irrigation,
  //     haldiimg: haldi
  //   });
  //   if (window.screen.width <= 480) {
  //     this.setState({
  //       shopimg: shopmobile,
  //       irrigationimg: irrigationmobile,
  //       haldiimg: haldimobile
  //     });
  //   } else {
  //     this.setState({
  //       shopimg: shop,
  //       irrigationimg: irrigation,
  //       haldiimg: haldi
  //     });
  //   }
  // }
  render() {
    const { index, direction } = this.state;
    return (
      <Jumbotron fluid>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={1500}
        >
          <Carousel.Item>
            <div className="imgtag">
              <img className="d-block w-100" src={claro} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h1>Fresh green produce from our farms</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imgtag">
              <img className="d-block w-100" src={pump} alt="Second slide" />
            </div>

            <Carousel.Caption>
              <h1>Spices made from sustainable energy in Gangetic plains</h1>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <div className="imgtag">
              <img
                className="d-block w-100"
                src={this.state.irrigationimg}
                alt="First slide"
              />
            </div>

            <Carousel.Caption>
              <h1>
                We aim to revolutionise the social & economic fabric of rural
                India
              </h1>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </Jumbotron>
    );
  }
}
export default Slider;
