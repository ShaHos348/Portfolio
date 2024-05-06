import "./styles/About.css";
import pfp from "../assets/pfp.jpg";
import resume from "./data/Shahbin_Hossain_s_Resume.pdf";

const About = () => {

  return (
    <div id="about-me">
      <h1 className="section-header">About Me</h1>
      <div id="about-section">
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
