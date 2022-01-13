import React from "react";
import paris2 from "../../img/paris2.PNG";
import bsas2 from "../../img/bsas2.PNG";
import miami2 from "../../img/miami2.PNG";
import van from "../../img/van.jpg";
import camp from "../../img/camp.jpg";
import rest from "../../img/rest.jpg";
import flight from "../../img/flight.png";
import { Link as Linkrouter } from "react-router-dom";
import hand1 from "../../img/hand1.png";
import handl from "../../img/handl.png";
import hando from "../../img/hando.png";

const inicio = () => {
  return (
    <div>
      <div className="header col-sm-6 col-md-12">
        <div className="textoheader col-4">
          <h1 className="tituloheader col-sm-6 col-md-12">
            PLAN YOUR NEXT VACATIONS
          </h1>
          <h4 className="subtituloheader col-sm-6 col-md-12">
            Get to know people's favorite places around the world
          </h4>
          <h4 className="subtituloheader col-sm-6 col-md-12">
            Plan the best vacations of your life
          </h4>
          <Linkrouter className="btn btn-warning mt-3" to="/usuarios">
            Sign up
          </Linkrouter>
        </div>
        <div className="imgheader col-4">
          <img src={flight} className="d-block w-100" alt="..." />
        </div>
      </div>

      <div className="container mb-5 mt-5">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-ms-6">
            <div className="form">
              {" "}
              <i className="fa fa-search"></i>{" "}
              <input
                type="text"
                className="form-control form-input"
                placeholder="Places, restaurants, bars ..."
              />{" "}
              <span className="left-pan">
                <i className="fa fa-microphone"></i>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-6 g-4 mt-5 mb-5 infobanners">
        <div className="infocard1 m-1">
          <img src={hand1} width="70" alt="infocard" />
          <h5 className="card-title mt-4">SAVE TIME</h5>
          <p className="card-text">
            Learn about the best options for your trip, from the best of them.
          </p>
        </div>
        <div className="infocard2 m-1">
          <img src={handl} width="85" alt="infocard" />
          <h5 className="card-title mt-4">PLAN</h5>
          <p className="card-text">
            Plan your vacations, so that they are perfect.
          </p>
        </div>
        <div className="infocard3 m-1">
          <img src={hando} width="85" alt="infocard" />
          <h5 className="card-title mt-4">OPINIONS</h5>
          <p className="card-text">
            Whether about places, restaurants, bars, music ... get what you are
            looking for.
          </p>
        </div>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide col-10 mb-2 m-auto"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={paris2} className="imgcard d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="tituloslide">PARIS</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={miami2} className="imgcard d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="tituloslide">MIAMI</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Linkrouter to="/ciudad">
            <img src={bsas2} className="imgcard d-block w-100" alt="..." />
            </Linkrouter>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="tituloslide">BUENOS AIRES</h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1 className="titulo mt-4 mb-4"> Find your activities </h1>

      <div className="row row-cols-1 row-cols-md-3 col-8 m-auto mt-4 mb-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={van} className="imgtop card-img-top" alt="van" />
            <div className="card-body">
              <h4 className="titulocard card-title">Travel by car</h4>
              <p className="subtitulocard card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={rest} className="imgtop card-img-top" alt="rest" />
            <div className="card-body">
              <h4 className="titulocard card-title">
                Visit the best restaurants
              </h4>
              <p className="subtitulocard card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={camp} className="imgtop card-img-top" alt="camp" />
            <div className="card-body">
              <h4 className="titulocard card-title">Best places to camp</h4>
              <p className="subtitulocard card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default inicio;
