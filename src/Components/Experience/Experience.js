import JPCountries from "../../assets/JPCountries.png";

function Experience() {
  return (
    <div className="container">
      <h1 className="text-left">Experience</h1>
      <div className="card" style={{ width: "18rem" }}>
        <img src={JPCountries} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">SVG Lag</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.jpabadir.com/countries"
            className="btn btn-dark rounded-pill"
          >
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
