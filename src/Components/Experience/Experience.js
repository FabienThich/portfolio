import "./Experience.css";
import JPCountries from "../../assets/JPCountries.png";

function Experience() {
  return (
    <div className="container">
      <h1 className="text-left">Experience</h1>
      <div className="card col-lg-3 col-md-6 col-sm-12">
        <img src={JPCountries} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">SVG Lag</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.jpabadir.com/countries"
            className="btn btn-dark rounded-pill seeMore"
          >
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
