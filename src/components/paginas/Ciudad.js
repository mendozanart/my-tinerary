import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import Carousel from "../carousel/Carousel";
import Carouselcity from "../carousel/Carouselcity";
import Like from "../like/Like";
import Save from "../save/Save";
import Comments from "../comments/Comments";

const Ciudad = () => {
  const [itineraries, setItineraries] = useState([]);
  const [{ cities }] = useStateValue();
  const { id } = useParams();
  const cityselected = cities.filter((city) => city._id === id);

  useEffect(() => {
    cityselected.map((city) =>
      axios
        .get(`http://localhost:4000/api/itinerarios/${city.city}`)
        .then((response) => setItineraries(response.data.response.itineraries))
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return cityselected.map((data) => {
    console.log(data);

    return (
      <div>
        <h1 className="headercity">{data.city}</h1>
        <img
          src={process.env.PUBLIC_URL + `/img/cities/${data.img}`}
          alt={data.city}
          className="banner-image2"
        />

        <div className="ubicity2">
          <h2 className="titulocity">
            <strong>{data.city}</strong>
          </h2>
          <h5 className="locationcity">
            {data.country}, {data.region} - {data.continent}.
          </h5>
          <h6>
            <strong>Lenguage:</strong> {data.language}
          </h6>
          <h6>
            <strong>Currency:</strong> {data.currency}
          </h6>
        </div>

        {itineraries.map((itinerarie) => (
          <div className="cuidadreview col-sm-6 col-md-10 col-lg-10 mt-5">
            <Like likes={itinerarie.likes} id={itinerarie._id}/>
            <div className="p-4">
              <div className="textocuidad">
                <h4 className="mb-3">
                  <strong>{itinerarie.title}</strong>
                </h4>
                <h6 className="mb-5">{itinerarie.description}</h6>

                <h6>
                  <strong>Schedule:</strong> {itinerarie.schedule}
                </h6>
                <h6>
                  <strong>Price:</strong> {itinerarie.price}
                </h6>
              </div>

              <Carouselcity itinerarie={itinerarie} />

              <Comments itinerario = {itinerarie._id}/>
            </div>
          </div>
        ))}

        <h1 className="titulo mt-5 mb-5">Find more cities to visit</h1>
        <Carousel />
      </div>
    );
  });
};

export default Ciudad;
