import "./Home.css";
import { scroller } from "react-scroll";
import LinkedIn from '../../assets/LinkedIn.svg'
import GitHub from '../../assets/GitHub.svg'

function Home() {
  return (
    <div className="container">
      <div className="row homeStarter">
        <div className="col-md-6 col-sm-12">
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

          <div className="col getInTouchSpace">
            <a
              onClick={() => {
                scroller.scrollTo("contact", {
                  duration: 0,
                  smooth: true,
                  spy: true,
                  offset: -85,
                });
              }}
            >
              <button className="border border-primary btn btn-primary rounded-pill getInTouch">
                Get In Touch 👋
              </button>
            </a>
            {/* <a download="Resume.pdf">
              <button className="btn btn-primary rounded-pill download">
                Download Resume
              </button>
            </a> */}
          </div>
        </div>
        <div className="col-md-6 col-sm-12 border"></div>
      </div>
    </div>
  );
}

export default Home;
