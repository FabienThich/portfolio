import "./About.css";
import ReactLogo from "../../assets/React.svg";
import BootstrapLogo from "../../assets/Bootstrap.svg";
import PythonLogo from "../../assets/Python.svg";
import NodeJSLogo from "../../assets/NodeJS.svg";

function About() {
  return (
    <div className="container PadExempt">
      <h1 data-aos="fade-up">About Me</h1>
      <div className="aboutParent">
        <div className="col-md-6 col-sm-12 aboutDesc">
          <div data-aos="fade-up" style={{ fontSize: "20px" }}>
            I'm a Specialist High Skills Major (SHSM) graduate and a former
            Junior Software Engineer at North P&D, Inc., where I worked with
            React.js, Webflow, Bootstrap, and Python. These days, I'm diving
            into machine learning, AI, and data science. I'm also a Data Science
            student at York University, building skills in Python, NumPy,
            Pandas, Seaborn, and Matplotlib (just to name a few). I'm excited to
            use these tools to tackle real-world problems in the data science
            space.
          </div>
          <div className="d-flex justify-content-between">
            <img data-aos="zoom-in-up" className="stackLogo" src={ReactLogo} />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="50"
              className="stackLogo"
              src={BootstrapLogo}
            />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="stackLogo"
              src={PythonLogo}
            />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="150"
              className="stackLogo"
              src={NodeJSLogo}
            />
          </div>
        </div>
        <div data-aos="fade-up" className="col-md-6 col-sm-12 aboutImage">
          <img
            className="myHeadshot"
            src="https://sdk.bitmoji.com/render/panel/a41da708-81e9-4ec3-9364-9d8748f7063d-0c814c04-ec17-4cf9-adea-101958aaede1-v1.png?transparent=1&palette=1"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
