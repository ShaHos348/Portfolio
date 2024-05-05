import NavBar from "./NavBar";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import "./styles/Home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
