import React from "react";
import mural1 from "../../img/itinerary/mural1.jpg";
import mural2 from "../../img/itinerary/mural2.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carouselcity = () => {
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
        <div>
          {" "}
          <img
            src={mural1}
            className="fciudad d-block w-100 p-2 mt-4 mb-4"
            alt="..."
          />
        </div>
        <div>
          {" "}
          <img
            src={mural2}
            className="fciudad d-block w-100 p-2 mt-4 mb-4"
            alt="..."
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselcity;
