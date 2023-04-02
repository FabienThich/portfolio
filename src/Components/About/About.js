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
            I am a specialist high skills major student working as a junior
            software engineer for North P&D, Inc. I specialize in React.js,
            Bootstrap and Python, though I am familiarizing myself with Node.js.
            I love learning and working hands-on with the latest technologies.
            Outside of tech, I have major interest in the stock market, sports,
            and cooking.
          </div>
          <div className="d-flex justify-content-between">
            <img
              data-aos="zoom-in-up"
              className="stackLogo"
              src={ReactLogo}
            />
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
