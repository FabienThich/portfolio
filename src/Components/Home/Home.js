import "./Home.css";
// import { scroller } from "react-scroll";
import LinkedIn from "../../assets/LinkedIn.svg";
import GitHub from "../../assets/GitHub.svg";
import Resume from "../../assets/Resume.png";

function Home() {
  return (
    <div className="HomeBackground">
      <div className="container" style={{ height: "90vh", color: "white" }}>
        <div className="homeStarter text-center">
          <h4 data-aos="fade" data-aos-delay="50" className="myGreeting">
            Hello, I am...
          </h4>
          <h2 data-aos="fade" data-aos-delay="100" className="myName">
            Fabien Thich
          </h2>
          <div data-aos="fade" data-aos-delay="150" className="myStatus">
            Junior Software Engineer At North P&D, Inc.
          </div>

          <div className="socialSpace">
            <a href="https://www.linkedin.com/in/fabienthich">
              <img
                data-aos="fade" data-aos-delay="200"
                className="socials"
                src={LinkedIn}
                alt="LinkedIn Icon"
              />
            </a>
            <a href="https://github.com/FabienThich">
              <img
                data-aos="fade" data-aos-delay="200"
                className="socials"
                src={GitHub}
                alt="GitHub Icon"
              />
            </a>
          </div>

          <div className="downloadResumeSpace">
            {/* <a
              onClick={() => {
                scroller.scrollTo("contact", {
                  duration: 0,
                  smooth: true,
                  spy: true,
                  offset: 40,
                });
              }}
            >
              <button className="btn btn-primary rounded-pill getInTouch">
                Get In Touch 👋
              </button>
            </a> */}
            <a
              data-aos="fade" data-aos-delay="250"
              href={Resume}
              download="Resume - Fabien Thich"
            >
              <button className="btn btn-light rounded-pill downloadResume">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
