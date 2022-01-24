import React from "react";
import paris2 from "../../img/cities/paris2.PNG";
import bsas2 from "../../img/cities/bsas2.PNG";
import miami2 from "../../img/cities/miami2.PNG";
import van from "../../img/cards/van.jpg";
import camp from "../../img/cards/camp.jpg";
import rest from "../../img/cards/rest.jpg";
import { Link as Linkrouter } from "react-router-dom";
import hand1 from "../../img/cards/hand1.png";
import handl from "../../img/cards/handl.png";
import hando from "../../img/cards/hando.png";
import girl from "../../img/header/girl.png";

const Inicio = () => {
  return (
    <div>

<div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <div className="textoheader col-sm-6 col-md-6 col-lg-5">
            <h1 className="tituloheader">
              <strong>Plan your next vacations</strong>
            </h1>
            <h4 className="subtituloheader">
              Get to know people's favorite places around the world
            </h4>
            <Linkrouter className="btn btn-danger mt-3 bradio4 mb-2" to="/usuarios">
              Sign up
            </Linkrouter>
          </div>
          <div className="imgheader col-sm-6 col-md-6 col-lg-6 col-lg-5">
            <img src={girl} className="d-block w-100 mt-5" alt="..." />
          </div>
        </div>
      </div>

      <div class="container motorb col-sm-8 col-md-8 col-lg-10 mb-5 mt-5 m-auto">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              {" "}
              <i className="fa fa-search"></i>{" "}
              <div className="mbusqueda">
                <div className="">
                <input
                type="text"
                className="form-control form-input bradio"
                placeholder="Search cities, restaurants.."
              />{" "}
                </div>
                <div className="bbusqueda col-sm-2 col-md-4 col-lg-5 mt-1">
                <button type="button" class="btn btn-warning bradio2">let's go!</button>
                </div>
              
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-6 g-4 mt-5 mb-5 infobanners">
        <div className="infocard1 col-sm-2 col-md-4 col-lg-3 m-5">
          <img src={hand1} width="70" alt="infocard" />
          <h5 className="card-title mt-5"><strong>SAVE TIME</strong></h5>
          <p className="card-text binfo">
            Learn about the best options for your trip, from the best of them.
          </p>
        </div>
        <div className="infocard2 col-sm-2 col-md-4 col-lg-3 m-5">
          <img src={handl} width="85" alt="infocard" />
          <h5 className="card-title mt-5"><strong>PLAN</strong></h5>
          <p className="card-text binfo">
            Plan your vacations, so that they are perfect.
          </p>
        </div>
        <div className="infocard3 col-sm-2 col-md-4 col-lg-3 m-5">
          <img src={hando} width="85" alt="infocard" />
          <h5 className="card-title mt-5"><strong>OPINIONS</strong></h5>
          <p className="card-text binfo">
            Whether about places, restaurants, bars, music ... get what you are
            looking for.
          </p>
        </div>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide col-12 mb-2 m-auto"
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
            <img src={paris2} className=" d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="tituloslide">PARIS</h1>
              <p>
              That trip you want so much is waiting for you!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={miami2} className=" d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="tituloslide">MIAMI</h1>
              <p>
              That trip you want so much is waiting for you!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Linkrouter to="/ciudad">
            <img src={bsas2} className=" d-block w-100" alt="..." />
            </Linkrouter>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="tituloslide">BUENOS AIRES</h1>
              <p>
              That trip you want so much is waiting for you!
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
      <h1 className="titulo mt-5 mb-4"> Find your activities </h1>

      <div className="row row-cols-1 row-cols-md-3 col-10 m-auto mt-3 mb-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={van} className="imgtop card-img-top" alt="van" />
            <div className="card-body">
              <h4 className="titulocard card-title">Road trip</h4>
              <p className="subtitulocard card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
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
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={camp} className="imgtop card-img-top" alt="camp" />
            <div className="card-body">
              <h4 className="titulocard card-title">Best place to camp</h4>
              <p className="subtitulocard card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
