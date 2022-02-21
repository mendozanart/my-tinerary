import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import usuario from "../../img/persons/usuario.jpg";
import Carousel from "../carousel/Carousel";
import Carouselcity from "../carousel/Carouselcity";
import Like from "../like/Like";

const Ciudad = () => {

  const [{cities, itineraries}, dispatch] = useStateValue ()
  const {id} = useParams()
  const cityselected = cities.filter(city=> city._id === id)
  
  console.log(itineraries);


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

      
     


      <div className="cuidadreview col-sm-6 col-md-10 col-lg-10 mt-5">
        <div className="p-4">
          <Like />

          <div className="ubicity">
            <h2 className="titulocity">
              <strong>{data.city}</strong>
            </h2>
            <h5 className="locationcity">{data.country}, {data.region} - {data.continent}.</h5>
          </div>
          <div className="textocuidad">
            <h4 className="mb-3">
              <strong>A city to visit</strong>
            </h4>
            <h6 className="mb-5">
              Buenos Aires a city that I choose to visit two or three times per
              year, since I love it and I live in Uruguay. City always in
              movementb, great places to visit, an ideal city where You find
              everything, nice to go shopping, you have many options from
              shopping, fairs or avenida avellaneda or the eleven . At night you
              have beautiful places to eat, theater, cinemas and night to go out
              to dance, like the City for those over 35 years
            </h6>

            <h6>
              <strong>Schedule:</strong> 9:00 - 15:30
            </h6>
            <h6>
              <strong>Lenguage:</strong> {data.language}
            </h6>
            <h6>
              <strong>Currency:</strong> {data.currency}
            </h6>
            <h6>
              <strong>Price:</strong> $ 4,187.72
            </h6>
            <div className="col-sm-6 col-md-10 col-lg-10">
              <Carouselcity />
            </div>
          </div>

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

      <h1 className="titulo mt-5 mb-5">Find more cities to visit</h1>
      <Carousel/>
    </div>

)})
  );
};

export default Ciudad;
