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
import Footer from './footer.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'
class App extends Component {
 componentDidMount(){
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
 }
  render() {
    return (
      <div>
      <AnchorLink href="#head"><button  id="myBtn" title="Go to top">Top</button></AnchorLink>
        <Header />
        <Slider />
        <About />
        <Consumer />
        <Offering />
        <Presence />
        <Investor />
        <Contactus />
        <Footer />
      </div>
    );
  }
}

export default App;
