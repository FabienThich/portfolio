import "./Resume.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselData from "./Carousel.js";

function Academics() {
  return (
    <div className="Pad border">
      <div className="container border">
        <h1>Academics</h1>
      </div>
      <Carousel className="CarouselParent">
        {CarouselData.map((data) => {
          return (
            <Carousel.Item>
              <div className="row">
                <div className="col-md-6 col-sm-12 text-center border">
                  <img
                    className="carouselImage rounded-5 border"
                    src={data.image}
                  />
                </div>
                <div className="col-md-6 col-sm-12 carouselDesc border">
                  <h3>{data.title}</h3>
                  <p>{data.caption} </p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Academics;
