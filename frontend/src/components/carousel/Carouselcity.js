import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carouselcity = (props) => {
  let itinerary = props.itinerarie
  console.log (itinerary)

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
          <img src={process.env.PUBLIC_URL + `/img/itinerary/${itinerary.img[0].img1}`} alt={itinerary.city} className="fciudad d-block w-100 p-2 mt-4 mb-4"/>
        </div>
        <div>
          {" "}
          <img src={process.env.PUBLIC_URL + `/img/itinerary/${itinerary.img[0].img2}`} alt={itinerary.city} className="fciudad d-block w-100 p-2 mt-4 mb-4"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselcity;
