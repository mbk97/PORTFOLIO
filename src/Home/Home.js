import "./Home.css";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contacts />
      <Scroll />
    </div>
  );
};

export default Home;
