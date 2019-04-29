import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Slider from './slider.js';
import About from './about.js'
import Consumer from './consumer.js'
class App extends Component {
 
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <About />
        <Consumer />
      </div>
    );
  }
}

export default App;
