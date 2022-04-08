import React from "react";
import { Link as Linkrouter } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Carousel2 = () => {

  const [{cities}, dispatch] = useStateValue ()
  console.log(cities);

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
      >

        {cities.map((city) => {


        return(
          <div>
          <div className="content nodraggable">
            {" "}
            <Linkrouter to={`/ciudad/${city._id}`} className="nodraggable">
              <div className="content-overlay"></div>{" "}
              <img className="imgcard" src={process.env.PUBLIC_URL + `/img/cities/${city.img}`} alt={city.city}/>
              <div className="content-details fadeIn-bottom nodraggable">
                <h3 className="content-title nodraggable">More info</h3>
                <p className="content-text nodraggable">
                  <i className="fa fa-map-marker"></i>Click here!
                </p>
              </div>
            </Linkrouter>{" "}
          </div>
          <h3 className="titulo">{city.city}</h3>
          <p className="subtitulo">{city.country}</p>
          </div>
          )})}

        </Carousel> 
        </div>

  );
};

export default Carousel2;
