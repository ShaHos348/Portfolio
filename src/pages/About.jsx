import "./styles/About.css";
import pfp from "../assets/pfp.jpg";

const About = () => {
  return (
    <div id="about-me">
      <h1>About Me</h1>
      <section>
        <p>
          Hello, My name is Shahbin (Sha) Hossain. I am a CS Major @ GaTech. I
          have done full-stack web-development as well as game development in
          the past. Welcome to my portfolio website.
        </p>
        <img src={pfp} alt="Profile" />
      </section>
    </div>
  );
};

export default About;
