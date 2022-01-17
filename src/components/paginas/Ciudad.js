import React from "react";
import bsas from "../../img/cities/bsas2.PNG";
import star from "../../img/icons/star.png";



const ciudad = () => {
  return (
    <div>

      
      <img src={bsas} className=" d-block w-100" alt="..." />
      <h1 className="titulo mb-1 mt-3"> BUENOS AIRES </h1>
      <h3 className="subtitulo mb-3 mt-1">Argentina</h3>


      <div className="cuidadreview col-sm-6 col-md-10 mt-5">
        <div className="p-4">
        <div className="textocuidad">
        <h3>Buenos Aires a city to visit</h3>
        <p>
            Buenos Aires a city that I choose to visit two or three times per
            year, since I love it and I live in Uruguay. City always in
            movementb, great places to visit, an ideal city where You find
            everything, nice to go shopping, you have many options from
            shopping, fairs or avenida avellaneda or the eleven . At night you
            have beautiful places to eat, theater, cinemas and night to go out
            to dance, like the City for those over 35 years
          </p>
          <p>
            <strong>Date of experience:</strong> May/2018
          </p>
          <p>
            <strong>Trip type:</strong> Traveled as a couple
          </p>
          <div className="col-3">
          <div className="stars2">
            <img src={star} width="20" alt="star" />
            <img src={star} width="20" alt="star" />
            <img src={star} width="20" alt="star" />
            <img src={star} width="20" alt="star" />
            <img src={star} width="20" alt="star" />
          </div>
        </div>
        </div>
        <div className="ciudadcomentario">
      <input
          type="text"
          className="form-control form-input col-sm-6 col-md-10 mt-4 bradio"
          placeholder="Leave your comment..."
        />{" "}
        <button type="button" class="btn btn-warning mt-4 bradio2">Submit</button>
      </div>
        </div>
      </div>





      <div className="cuidadreview col-sm-6 col-md-10 mt-5">
        <div className="p-4">
        <div className="textocuidad">
        <h3>Buenos Aires is such a beautiful city</h3>
        <p>
        Buenos Aires is a beautiful and very complete city. I would love to go back and visit many more places
          </p>
          <p>
            <strong>Date of experience:</strong> June/2016
          </p>
          <p>
            <strong>Trip type:</strong> Business trip
          </p>
          <div className="col-3">
          <div className="stars2">
            <img src={star} width="20" alt="star" />
            <img src={star} width="20" alt="star" />
            <img src={star} width="20" alt="star" />
            <img src={star} width="20" alt="star" />
          </div>
        </div>
        </div>
        <div className="ciudadcomentario">
      <input
          type="text"
          className="form-control form-input col-sm-6 col-md-10 mt-4 bradio"
          placeholder="Leave your comment..."
        />{" "}
        <button type="button" class="btn btn-warning mt-4 bradio2">Submit</button>
      </div>
        </div>
      </div>





    </div>
  );
};

export default ciudad;
