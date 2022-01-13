import React from "react";
import bsas from "../../img/bsas2.PNG";
import star from "../../img/star.png";
import like1 from "../../img/like1.png";
import like2 from "../../img/like2.png";

const ciudad = () => {
  return (
    <div>
      <img src={bsas} className=" d-block w-100" alt="..." />
      <h1 className="titulo mb-1 mt-3"> BUENOS AIRES </h1>
      <h3 className="subtitulo mb-3 mt-1">Argentina</h3>

      <div className="scomentario col-10 m-auto mb-4">
        <div className="col-12">
          <h3>Buenos Aires a city to visit</h3>
          <p className="textocuidad">
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
        </div>
        <div className="col-3">
          <div className="stars2">
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
          </div>
        </div>
        <div>
          <div className="btn btn-secundary botonlike mt-4">
            <p>
              <img src={like2} width="20" alt="star" /> Like
            </p>
          </div>
          <div className="btn btn-secundary botonlike mt-4">
            <p>
              <img src={like1} width="20" alt="star" /> Dislike
            </p>
          </div>
        </div>
        <input
          type="text"
          className="form-control form-input col-10 mt-4"
          placeholder="Leave your comment..."
        />{" "}
        <button type="button" class="btn btn-warning mt-4">Submit</button>
      </div>
    </div>
  );
};

export default ciudad;
