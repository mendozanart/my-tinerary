import React from "react";
import lugagge from "../../img/header/luggage.png";
import person1 from "../../img/persons/person1.jpg";
import person2 from "../../img/persons/person2.jpg";
import person3 from "../../img/persons/person3.jpg";
import star from "../../img/icons/star.png";

const review = () => {
  return (
    <div>
      <div className="banner-image3 w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="header">
        <div className="textoheader3 col-sm-12 col-md-6 col-lg-5">
          <h1 className="tituloheader">REVIEWS</h1>
          <h4 className="subtituloheader">
            Get to know what people said about Mytinerary
          </h4>
        </div>
        <div className="imagen">
          <img src={lugagge} className="d-block w-100 imgheader2 col-sm-12 col-md-6 col-lg-6 col-lg-5" alt="..." />
        </div>
      </div>
      </div>

      <div className="row row-cols-1 row-cols-md-6 g-4 mt-2 infobanners">
        <div className="infocard1 col-sm-10 col-md-7 col-lg-2 m-5">
          <img
            src={person1}
            width="250"
            alt="infocard"
            style={{ borderRadius: "200px", margin: "10px" }}
          />
          <h5 className="tituloreview card-title">Alejandro Massari</h5>
          <p className="card-text">
            "Incredible the opportunity that mytinerary gave me. I was able to
            enjoy my stay in Miami to the fullest."
          </p>

          <div className="stars">
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
          </div>
        </div>
        <div className="infocard2 col-sm-10 col-md-7 col-lg-2 m-5">
          <img
            src={person2}
            width="250"
            alt="infocard"
            style={{ borderRadius: "200px", margin: "10px" }}
          />
          <h5 className="tituloreview card-title">Flor Venaruzzo</h5>
          <p className="card-text">
            "I would have liked to have many more days off to be able to know
            everything that was recommended to me."
          </p>
          <div className="stars">
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
          </div>
        </div>
        <div className="infocard3 col-sm-10 col-md-7 col-lg-2 m-5">
          <img
            src={person3}
            width="250"
            alt="infocard"
            style={{ borderRadius: "200px", margin: "10px" }}
          />
          <h5 className="tituloreview card-title">Rafa Machado</h5>
          <p className="card-text">
            "Whether about places, restaurants, bars, music ... get what you are
            looking for. I will surely use it again."
          </p>
          <div className="stars">
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
            <img src={star} width="30" alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default review;
