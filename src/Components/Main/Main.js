import "./Main.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Element } from "react-scroll";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Experience from "../Experience/Experience";

function Main() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
      >
        <Navbar.Brand className="col-3 text-center logo">Fabien. T Portfolio</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="col-12 justify-content-end">
            <li className="navli">
              <Link
                className="navLink"
                to="home"
                spy={true}
                smooth={true}
                offset={-120}
                duration={0}
              >
                Home
              </Link>
            </li>
            <li className="navli">
              <Link
                className="navLink"
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={0}
              >
                About
              </Link>
            </li>
            <li className="navli">
              <Link
                className="navLink"
                to="resume"
                spy={true}
                smooth={true}
                offset={-120}
                duration={0}
              >
                Resume
              </Link>
            </li>
            <li className="navli">
              <Link
                className="navLink"
                to="experience"
                spy={true}
                smooth={true}
                offset={-120}
                duration={0}
              >
                Experience
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
    </div>
  );
}

export default Main;
