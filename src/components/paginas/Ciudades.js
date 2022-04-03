import React, { useEffect }  from "react";
import plane from "../../img/header/plane.png";
import {Link as Linkrouter} from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";


const Ciudades = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //const [{cities}] = useStateValue ()
  const [{filterCity}, dispatch] = useStateValue ()

  //useEffect(() => {
  //  window.scrollTo(0, 0);
  //  dispatch({
  //    type: actionTypes.CITIESDB,
  //    citiesNew: cities
  //  })
  //}, [])


  const imputSearch = (event) => {
    dispatch({
      type: actionTypes.FILTER,
      value: event.target.value,
    })
  }
  const filtrocontinente = (event)=>{
    const checked = document.getElementById(event.target.id).checked;
    console.log('checkbox',document.getElementById(event.target.id),checked)
    

      dispatch({
        type: actionTypes.FILTERCONTINENT,
        value: event.target.id,
        id:checked
      })
    
  }

  return (
    <div>
      <div className="banner-image2 w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="header col-sm-6 col-md-12">
          <div className="textoheader2 col-sm-6 col-md-6 col-lg-5 ">
            <h1 className="tituloheader">GET MORE INFORMATION</h1>
            <h4 className="subtituloheader">
              About the CITIES you want to visit
            </h4>
          </div>
          <div className="imagen">
            <img
              src={plane}
              className="d-block w-100 imgheader3 col-sm-6 col-md-6 col-lg-6 col-lg-5"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="container motorb col-sm-10 col-md-10 col-lg-10 mb-5 mt-5 m-auto">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-sm-1 col-md-10 col-lg-5">
            <div className="form">
              {" "}
              <i className="fa fa-search"></i>{" "}
              <div className="mbusqueda">
                <div className="">
                  <input
                    type="text"
                    className="form-control form-input bradio"
                    placeholder="Search cities..."
                    onChange={imputSearch}
                  />{" "}
                </div>
                <div className="bbusqueda col-sm-4 col-md-3 col-lg-5 mt-1">
                  <button type="button" className="btn btn-warning bradio2">
                    let's go!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="filtrociudades m-auto d-flex justify-content-center align-items-center col-sm-10 col-md-10 col-lg-12">
        <div className="form-check form-switch fswitch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="america"
            onChange={filtrocontinente}
          />
          <label className="form-check-label" for="america">
             America
          </label>
        </div>

        <div className="form-check form-switch fswitch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="africa"
            onChange={filtrocontinente}
          />
          <label className="form-check-label" for="africa">
             Africa
          </label>
        </div>


        <div className="form-check form-switch fswitch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="asia"            
            onChange={filtrocontinente}
          />
          <label className="form-check-label" for="asia">
             Asia
          </label>
        </div>

        <div className="form-check form-switch fswitch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="europe"
            onChange={filtrocontinente}
          />
          <label className="form-check-label" for="europe">
             Europe
          </label>
        </div>



        <div className="form-check form-switch fswitch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="oceania"
            onChange={filtrocontinente}
          />
          <label className="form-check-label" for="oceania">
             Oceania
          </label>
        </div>


      </div>

          
<div className="allcities">
                { filterCity?.map((city)=> {
                    return(
                <div>
                    <div className="content m-4">
                        {" "}
                        <Linkrouter to={`/ciudad/${city._id}`}>
                            <div className="content-overlay"></div>{" "}
                            <img src={process.env.PUBLIC_URL + `/img/cities/${city.img}`} alt={city.city} className="imgcard"/>

                            {/* <img className="imgcard" src={process.env.PUBLIC_URL + `/img/cities/${city.img}`} alt={city.city} /> */}
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">More info</h3>
                                <p className="content-text">
                                    <i className="fa fa-map-marker"></i>Click here!
                                </p>
                            </div>
                        </Linkrouter>{" "}
                    </div>
                    <h3 className="titulo">{city.city}</h3>
                    <p className="subtitulo">{city.country}</p>
                </div>)})}
            </div>

          </div>

  );
};

export default Ciudades;
