import "./Main.css";
import { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Element } from "react-scroll";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Achievements from "../Achievements/Achievements";
import Contact from "../Contact/Contact";
import AcademicWork from "../AcademicWork/AcademicWork";

function Main() {
  useEffect(() => {
    const backToTop = document.querySelector(".backToTop");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        backToTop.classList.add("active");
      } else {
        backToTop.classList.remove("active");
      }
    });
  });

  useEffect(() => {
    const blurNav = document.querySelector(".blurNav");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        blurNav.classList.add("active");
      } else {
        blurNav.classList.remove("active");
      }
    });
  });

  return (
    <div>
      <Navbar
        style={{ backgroundColor: "black" }}
        className="blurNav"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
      >
        <Navbar.Brand className="col-3 text-center logo">
          Fabien. T Portfolio
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="col-12 justify-content-end">
            {/* <li className="navli">
              <Link
                className="navLink"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Home
              </Link>
            </li> */}
            <li className="navli">
              <Link
                className="navLink"
                to="about"
                spy={true}
                smooth={true}
                offset={-35}
                duration={0}
              >
                About
              </Link>
            </li>
            <li className="navli">
              <Link
                className="navLink"
                to="academicwork"
                spy={true}
                smooth={true}
                offset={-35}
                duration={0}
              >
                Academics
              </Link>
            </li>
            <li className="navli">
              <Link
                className="navLink"
                to="experience"
                spy={true}
                smooth={true}
                offset={50}
                duration={0}
              >
                Experience
              </Link>
            </li>
            <li className="navli">
              <Link
                className="navLink"
                to="achievements"
                spy={true}
                smooth={true}
                offset={-35}
                duration={0}
              >
                Achievements
              </Link>
            </li>
            <li className="navli">
              <Link
                className="navLink"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={0}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-90}
                duration={0}
              >
                <div className="backToTop">^</div>
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Element name="home">
        <Home />
      </Element>
      <div className="extra-space"></div>
      <Element name="about">
        <About />
      </Element>
      <Element name="academicwork">
        <AcademicWork />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <div className="extra-space"></div>
      <Element name="achievements">
        <Achievements />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default Main;
