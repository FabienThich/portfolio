import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Element } from "react-scroll";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume";

function NavBar() {
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
          <Nav>
            <li>
              <Link
                className="navLink"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="navLink"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="navLink"
                to="resume"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
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

export default NavBar;
