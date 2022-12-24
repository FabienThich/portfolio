import "./Experience.css";
import Cards from "./Experience.json";

function Experience() {
  return (
    <div className="container border">
      <h1 className="text-left">Experience</h1>
      <div className="row justify-content-center border">
        {Cards.map((card) => {
          return (
            <div className="card col-lg-3 col-md-6 col-sm-12 border">
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
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
