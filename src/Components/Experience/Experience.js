import "./Experience.css";
import Cards from "./Cards.js";

function Experience() {
  return (
    <div className="container Pad">
      <h1>Experience</h1>
      <div className="row">
        {Cards.map((card) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 g-5">
              <div className="card">
                <img src={card.image} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a
                    href={card.link}
                    className="btn btn-dark rounded-pill seeMore"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
