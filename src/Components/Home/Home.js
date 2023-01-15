import "./Home.css";
// import { scroller } from "react-scroll";
import LinkedIn from "../../assets/LinkedIn.svg";
import GitHub from "../../assets/GitHub.svg";
import Resume from "../../assets/Resume.png";

function Home() {
  return (
    <div className="container" style={{ height: "90vh" }}>
      <div className="row homeStarter text-center">
        <div className="col-12">
          <h4 className="myGreeting">Hello, I am...</h4>
          <h2 className="myName">Fabien Thich</h2>
          <div className="myStatus">
            Software Engineer Intern For North P&D, Inc.
          </div>

          <div className="col socialSpace">
            <a href="https://www.linkedin.com/in/fabienthich">
              <img className="socials" src={LinkedIn} />
            </a>
            <a href="https://github.com/FabienThich">
              <img className="socials" src={GitHub} />
            </a>
          </div>

          <div className="col downloadResumeSpace">
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
            <a href={Resume} download="Resume - Fabien Thich">
              <button className="btn btn-primary rounded-pill downloadResume">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        {/* <div className="col-md-6 col-sm-12"></div> */}
      </div>
    </div>
  );
}

export default Home;
