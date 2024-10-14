import Work from "./Work";
import "./AcademicWork.css";

function AcademicWork() {
  return (
    <div className="container PadExempt">
      <h1 data-aos="fade-up">Academic Work</h1>
      <div className="row">
        {Work.map((card) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5 cardHover">
              <div data-aos="fade-up" className="card work-card">
                <img src={card.image} className="work-card-image" />
                <div className="card-body">
                  <h5 className="card-title">
                    {card.title}
                    <p className={card.readLength <= 5 ? "blogShortRead" : 'blogLongRead'}>{card.readLength} Minute Read</p>
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <a className="btn btn-dark rounded-pill seeBlog">Read Blog</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AcademicWork;
