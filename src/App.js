import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Slider from './slider.js';
import About from './about.js'
import Consumer from './consumer.js'
import Offering from './offering.js'
import Presence from './presence.js'
import Investor from './investor.js'
import Contactus from './contactus.js'
class App extends Component {
 
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <About />
        <Consumer />
        <Offering />
        <Presence />
        <Investor />
        <Contactus />
      </div>
    );
  }
}

export default App;
