import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="nav-bar">
        <div className="heading">
          <p className="name">LINSY JOYNER</p>
          <p className="title">Front-End Web Developer</p>
        </div>
        <div className="nav">
          <Scrollchor to="#about" animate={{offset: 20, duration: 600}} className="nav-items">About</Scrollchor>
          <Scrollchor to="#work" animate={{offset: 20, duration: 600}} className="nav-items">Work</Scrollchor>
          <Scrollchor to="#resume" animate={{offset: 20, duration: 600}} className="nav-items">Resume</Scrollchor>
          <Scrollchor to="#contact" animate={{offset: 20, duration: 600}} className="nav-items">Contact</Scrollchor>
        </div>
      </div>
      <div className="top">VIDEO</div>
      <div id="about" className="about">ABOUT</div>
      <div id="work" className="work">WORK</div>
      <div id="resume" className="resume">RESUME</div>
      <div id="contact" className="contact">CONTACT</div>
      </div>
    );
  }
}

export default App;
