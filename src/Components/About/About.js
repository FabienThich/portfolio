import "./About.css";
import ReactLogo from '../../assets/React.svg'
import BootstrapLogo from '../../assets/Bootstrap.svg'

function About() {
  return (
    <div className="container Pad">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div style={{fontSize: "20px"}}></div>
          <div className="text-center">
            <img className="stackLogo" src={ReactLogo} />
            <img className="stackLogo" src={BootstrapLogo} />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="rounded-5 bg-dark">
            <img
              className="myHeadshot"
              src="https://sdk.bitmoji.com/render/panel/a41da708-81e9-4ec3-9364-9d8748f7063d-0c814c04-ec17-4cf9-adea-101958aaede1-v1.png?transparent=1&palette=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
