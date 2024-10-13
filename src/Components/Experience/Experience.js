import "./Experience.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselData from "./Carousel.js";

function Experience() {
  return (
    <div style={{ backgroundColor: "black" }} className="Pad">
      <div className="container">
        <h1 data-aos="fade-up" className="darkHeading">
          Experience
        </h1>
        <Carousel className="CarouselParent">
          {CarouselData.map((data) => {
            return (
              <Carousel.Item>
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-12 carouselImageFrame">
                    <a data-aos="zoom-in" href={data.link}>
                      <img
                        className="carouselImage rounded-5"
                        src={data.image}
                      />
                    </a>
                  </div>
                  <div
                    data-aos="zoom-in"
                    className="col-md-5 col-sm-12 carouselDesc"
                  >
                    <h3>
                      {data.title}
                      <p className="status">{data.status}</p>
                    </h3>
                    <p className="mt-4">{data.description}</p>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Experience;
