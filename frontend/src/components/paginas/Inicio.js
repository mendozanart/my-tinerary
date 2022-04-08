import React, {useEffect} from "react";
import { useStateValue } from "../../StateProvider";
import van from "../../img/cards/van.jpg";
import camp from "../../img/cards/camp.jpg";
import rest from "../../img/cards/rest.jpg";
import { Link as Linkrouter } from "react-router-dom";
import hand1 from "../../img/cards/hand1.png";
import handl from "../../img/cards/handl.png";
import hando from "../../img/cards/hando.png";
import girl from "../../img/header/girl.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Inicio = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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


  const [{ user }] = useStateValue();
  const [{cities}, dispatch] = useStateValue ()
  console.log(cities);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {!user ? 
            <Linkrouter
              className="btn btn-danger mt-3 bradio4 mb-2"
              to="/usuarios"
            >
              Sign up
            </Linkrouter> :             <Linkrouter
              className="btn btn-danger mt-3 bradio4 mb-2"
              to="/ciudades"
            >
              Let's go!
            </Linkrouter>}
          </div>
          <div className="imgheader col-sm-6 col-md-6 col-lg-6 col-lg-5">
            <img src={girl} className="d-block w-100 mt-5" alt="..." />
          </div>
        </div>
      </div>


      <div className="row row-cols-1 row-cols-md-6 g-4 mt-5 mb-5 infobanners">
        <div className="infocard col-sm-2 col-md-2 col-lg-3 m-5">
          <img src={hand1} width="70" alt="infocard" />
          <h5 className="card-title mt-5">
            <strong>SAVE TIME</strong>
          </h5>
          <p className="card-text binfo">
            Learn about the best options for your trip, from the best of them.
          </p>
        </div>
        <div className="infocard col-sm-2 col-md-2 col-lg-3 m-5">
          <img src={handl} width="85" alt="infocard" />
          <h5 className="card-title mt-5">
            <strong>PLAN</strong>
          </h5>
          <p className="card-text binfo">
            Plan your vacations, so that they are perfect.
          </p>
        </div>
        <div className="infocard col-sm-2 col-md-2 col-lg-3 m-5">
          <img src={hando} width="85" alt="infocard" />
          <h5 className="card-title mt-5">
            <strong>OPINIONS</strong>
          </h5>
          <p className="card-text binfo">
            Whether about places, restaurants, bars, music ... get what you are
            looking for.
          </p>
        </div>
      </div>

      <h1 className="titulo mt-5 mb-5"> Get to know new cities </h1>

      <div>
      <Carousel
        responsive={responsive}
        draggable={true}
        autoPlaySpeed={1000}
        transitionDuration={500}
      >

        {cities.map((city) => {


        return(
          <div>
          <div className="content nodraggable">
            {" "}
            <Linkrouter to={`/ciudad/${city._id}`} className="nodraggable">
              <div className="content-overlay"></div>{" "}
              <img className="imgcard" src={process.env.PUBLIC_URL + `/img/cities/${city.img}`} alt={city.city}/>
              <div className="content-details fadeIn-bottom nodraggable">
                <h3 className="content-title nodraggable titulo">{city.city}</h3>
                <p className="content-text nodraggable subtitulo">
                  <i className="fa fa-map-marker"></i>{city.country}
                </p>
              </div>
            </Linkrouter>{" "}
          </div>

          </div>
          )})}

        </Carousel> 
        </div>


        <h1 className="titulo mt-5 mb-5"> Find your activities </h1>

      <div className="row row-cols-1 row-cols-md-3 col-10 m-auto mt-3 mb-4 g-4">
        <div className="col">
          <div className="card h-100 bordeinicio">
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
          <div className="card h-100 bordeinicio">
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
          <div className="card h-100 bordeinicio">
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
