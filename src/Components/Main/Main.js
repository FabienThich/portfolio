import "./Main.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Element } from "react-scroll";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume";

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
        <Navbar.Brand>Logo Here</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="col-12 justify-content-end">
            <li className="navli">
              <Link
                activeClass="active"
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
                activeClass="active"
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
                activeClass="active"
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
    </div>
  );
}

export default Main;
