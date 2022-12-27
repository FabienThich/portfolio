import "./About.css";

function About() {
  return (
    <div className="container Pad">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-6">
          <div>Text here</div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div style={{ height: "90vh" }} className="rounded-5 bg-dark"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
