import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Slider from './slider.js';
import About from './about.js'

class App extends Component {
 
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <About />
      </div>
    );
  }
}

export default App;
