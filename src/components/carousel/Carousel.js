import React from "react";
import paris from "../../img/paris.jpg";
import bsas from "../../img/bsas.jpg";
import miami from "../../img/miami.jpg";
import { Link as Linkrouter } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        draggable={true}
        autoPlaySpeed={1000}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div>
          <div className="content nodraggable">
            {" "}
            <Linkrouter to="/" className="nodraggable">
              <div className="content-overlay"></div>{" "}
              <img className="imgcard content-image" src={miami} alt="img" />
              <div className="content-details fadeIn-bottom nodraggable">
                <h3 className="content-title nodraggable">More info</h3>
                <p className="content-text nodraggable">
                  <i className="fa fa-map-marker"></i>Click here!
                </p>
              </div>
            </Linkrouter>{" "}
          </div>
          <h3 className="titulo">Miami</h3>
          <p className="subtitulo">United States</p>
        </div>
        <div>
          <div className="content nodraggable">
            {" "}
            <Linkrouter to="/" className="nodraggable">
              <div className="content-overlay"></div>{" "}
              <img className="imgcard content-image" src={paris} alt="img" />
              <div className="content-details fadeIn-bottom nodraggable">
                <h3 className="content-title nodraggable">More info</h3>
                <p className="content-text nodraggable">
                  <i className="fa fa-map-marker"></i>Click here!
                </p>
              </div>
            </Linkrouter>{" "}
          </div>
          <h3 className="titulo">Paris</h3>
          <p className="subtitulo">France</p>
        </div>
        <div>
          <div className="content nodraggable">
            {" "}
            <Linkrouter to="/ciudad" className="nodraggable">
              <div className="content-overlay"></div>{" "}
              <img className="imgcard content-image" src={bsas} alt="img" />
              <div className="content-details fadeIn-bottom nodraggable">
                <h3 className="content-title nodraggable">More info</h3>
                <p className="content-text nodraggable">
                  <i className="fa fa-map-marker"></i>Click here!
                </p>
              </div>
            </Linkrouter>{" "}
          </div>
          <h3 className="titulo">Buenos Aires</h3>
          <p className="subtitulo">Argentina</p>
        </div>
        <div>
          <div className="content nodraggable">
            {" "}
            <Linkrouter to="/" className="nodraggable">
              <div className="content-overlay"></div>{" "}
              <img className="imgcard content-image" src={miami} alt="img" />
              <div className="content-details fadeIn-bottom nodraggable">
                <h3 className="content-title nodraggable">More info</h3>
                <p className="content-text nodraggable">
                  <i className="fa fa-map-marker"></i>Click here!
                </p>
              </div>
            </Linkrouter>{" "}
          </div>
          <h3 className="titulo">Miami</h3>
          <p className="subtitulo">United States</p>
        </div>
        <div>
          <div className="content nodraggable">
            {" "}
            <Linkrouter to="/" className="nodraggable">
              <div className="content-overlay"></div>{" "}
              <img className="imgcard content-image" src={paris} alt="img" />
              <div className="content-details fadeIn-bottom nodraggable">
                <h3 className="content-title nodraggable">More info</h3>
                <p className="content-text nodraggable">
                  <i className="fa fa-map-marker"></i>Click here!
                </p>
              </div>
            </Linkrouter>{" "}
          </div>
          <h3 className="titulo">Paris</h3>
          <p className="subtitulo">France</p>
        </div>
        <div>
          <div className="content nodraggable">
            {" "}
            <Linkrouter to="/ciudad" className="nodraggable">
              <div className="content-overlay"></div>{" "}
              <img className="imgcard content-image" src={bsas} alt="img" />
              <div className="content-details fadeIn-bottom nodraggable">
                <h3 className="content-title nodraggable">More info</h3>
                <p className="content-text nodraggable">
                  <i className="fa fa-map-marker"></i>Click here!
                </p>
              </div>
            </Linkrouter>{" "}
          </div>
          <h3 className="titulo">Buenos Aires</h3>
          <p className="subtitulo">Argentina</p>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default carousel;
