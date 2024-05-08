import "./styles/About.css";
import pfp from "../assets/pfp.jpg";
import resume from "./data/Shahbin_Hossain_s_Resume.pdf";
import React, { useState, useEffect } from 'react';

const About = () => {
  const [componentHeight, setComponentHeight] = useState(0);

  useEffect(() => {
    const component1 = document.querySelector('#nav-app-bar');
    if (component1) {
      setComponentHeight(component1.offsetHeight);
    }
  }, []);

  return (
    <div id="about-me" className="section">
      <div id="about-section" style={{ height: `calc(100vh - ${componentHeight}px)`, marginTop: `calc(${componentHeight}px)`}}>
        <div id="about-left-column">
          <p id="about-p">
            Hello, My name is Shahbin (Sha) Hossain. I am a CS Major @ GaTech. 
            I have done both web-development as well as game development in the past. 
            Welcome to my portfolio website.
          </p>
          <a id="resume-button" href = {resume} target = "_blank"  rel="noopener noreferrer">Resume</a>
        </div>
        <img id="about-img" src={pfp} alt="Profile" />
      </div>
    </div>
  );
};

export default About;
