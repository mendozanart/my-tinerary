import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import axios from 'axios'
import usuario from "../../img/persons/usuario.jpg";
import Carousel from "../carousel/Carousel";
import Carouselcity from "../carousel/Carouselcity";
import Like from "../like/Like";
import Save from "../save/Save"

const Ciudad = () => {

  const [itineraries, setItineraries] = useState([])
  const [{cities}] = useStateValue ()
  const {id} = useParams()
  const cityselected = cities.filter(city=> city._id === id)

  useEffect(() => {
      cityselected.map(city =>
      axios.get(`http://localhost:4000/api/itinerarios/${city.city}`)
      .then(response=> setItineraries(response.data.response.itineraries)
        )
        )
      },[]);
  
      console.log(itineraries)


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    cityselected.map (data =>{
      console.log(data);

      return (
    <div>

      
      <h1 className="headercity">{data.city}</h1>
      <img src={process.env.PUBLIC_URL + `/img/cities/${data.img}`} alt={data.city} className="banner-image2"/>

      
      <div className="ubicity2">
      <Like />
            <h2 className="titulocity">
              <strong>{data.city}</strong>
            </h2>
            <h5 className="locationcity">{data.country}, {data.region} - {data.continent}.</h5>
            <h6>
              <strong>Lenguage:</strong> {data.language}
            </h6>
            <h6>
              <strong>Currency:</strong> {data.currency}
            </h6>
          </div>

          {itineraries.map(itinerarie =>
      <div className="cuidadreview col-sm-6 col-md-10 col-lg-10 mt-5">
        <Save/>
      <div className="p-4">
        <div className="textocuidad">
          <h4 className="mb-3">
            <strong>{itinerarie.title}</strong>
          </h4>
          <h6 className="mb-5">
            {itinerarie.description}
          </h6>

          <h6>
            <strong>Schedule:</strong> {itinerarie.schedule}
          </h6>
          <h6>
            <strong>Price:</strong> {itinerarie.price}
          </h6>
        </div>

        <Carouselcity itinerarie = {itinerarie}/>

        <div className="usuariocity mt-4">
            <div className="icousuario">
              <img
                src={usuario}
                className="icousuario d-block w-100"
                alt="..."
              />
            </div>
            <div className="txtusuario2">
              <div><h6><strong>Natalie Burgess </strong>| January 3, 2022</h6></div>
              <div className="txt1"><p>Amazing Experience! Will bring my family back!</p></div>
            </div>
          </div>

          <div className="ciudadcomentario">
            <input
              type="text"
              className="form-control form-input col-sm-6 col-md-10 mt-3 bradio"
              placeholder="Leave your comment..."
            />{" "}
            <button type="button" class="btn btn-warning mt-2 bradio2">
              Submit
            </button>
          </div>
        </div>
      </div>

  )}


      <h1 className="titulo mt-5 mb-5">Find more cities to visit</h1>
      <Carousel/>



    </div>

)})

  );
};

export default Ciudad;
