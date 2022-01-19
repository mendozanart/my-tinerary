import React from "react";
import bsas from "../../img/cities/bsas2.PNG";
import mural1 from "../../img/itinerary/mural1.jpg";
import mural2 from "../../img/itinerary/mural2.jpg";


const ciudad = () => {
  return (
    <div>
      <img src={bsas} className=" d-block w-100" alt="..." />


      <div className="cuidadreview col-sm-6 col-md-10 col-lg-10 mt-5">
        <div className="p-4">
          <div className="ubicity">
            <h2 className="titulocity">
              <strong>Buenos Aires</strong>
            </h2>
            <h5 className="locationcity">Argentina, Latin America.</h5>
          </div>
          <div className="textocuidad">
            <h4>A city to visit</h4>
            <h6>
              Buenos Aires a city that I choose to visit two or three times per
              year, since I love it and I live in Uruguay. City always in
              movementb, great places to visit, an ideal city where You find
              everything, nice to go shopping, you have many options from
              shopping, fairs or avenida avellaneda or the eleven . At night you
              have beautiful places to eat, theater, cinemas and night to go out
              to dance, like the City for those over 35 years
            </h6>
            <h6>
              <strong>Lenguage:</strong> Spanish
            </h6>
            <h6>
              <strong>Prices:</strong> $$$
            </h6>
            <h6>
              <strong>Date of experience:</strong> May/2018
            </h6>
            <h6>
              <strong>Trip type:</strong> Traveled as a couple
            </h6>
            <div className="col-3">
              <div className="stars2 mt-5">
              <img src={mural1} className="fciudad d-block w-100 p-2" alt="..." />
              <img src={mural2} className="fciudad  d-block w-100 p-2" alt="..." />
              </div>
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
    </div>
  );
};

export default ciudad;
