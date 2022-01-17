import React from "react";
import plane from "../../img/header/plane.png";
import Carousel from "../carousel/Carousel";

const ciudades = () => {
  return (
    <div>
      <div className="banner-image2 w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="header col-sm-6 col-md-12">
        <div className="textoheader2 col-sm-12 col-md-6 col-lg-5 ">
          <h1 className="tituloheader">GET MORE INFORMATION</h1>
          <h4 className="subtituloheader">
            About the CITIES you want to visit
          </h4>
        </div>
        <div className="imagen">
          <img src={plane} className="d-block w-100 imgheader3 col-sm-12 col-md-6 col-lg-6 col-lg-5" alt="..." />
        </div>
      </div>
    </div>

    <div class="container col-sm-8 col-md-7 col-lg-7 mb-5 mt-5 m-auto">
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
                placeholder="Search cities.."
              />{" "}
                </div>
                <div className="bbusqueda col-sm-2 col-md-4 col-lg-4 m-auto mt-1">
                <button type="button" class="btn btn-warning bradio2">let's go!</button>
                </div>
              
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="filtrociudades m-auto d-flex justify-content-center align-items-center col-sm-12 col-md-12 col-lg-12">
      <div className="form-check form-switch fswitch col-sm-1 col-md-3 col-lg-1">
  <input className="form-check-input col-sm-1 col-md-3 col-lg-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label col-sm-1 col-md-3 col-lg-1" for="flexSwitchCheckDefault">America</label>
</div>

<div className="form-check form-switch fswitch col-sm-1 col-md-3 col-lg-1">
  <input className="form-check-input col-sm-1 col-md-3 col-lg-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label col-sm-1 col-md-3 col-lg-1" for="flexSwitchCheckDefault">Europe</label>
</div>

<div className="form-check form-switch fswitch col-sm-1 col-md-3 col-lg-1">
  <input className="form-check-input col-sm-1 col-md-3 col-lg-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label col-sm-1 col-md-3 col-lg-1" for="flexSwitchCheckDefault">Asia</label>
</div>

<div className="form-check form-switch fswitch col-sm-1 col-md-3 col-lg-1">
  <input className="form-check-input col-sm-1 col-md-3 col-lg-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label col-sm-1 col-md-3 col-lg-1" for="flexSwitchCheckDefault">Oceania</label>
</div>


      </div>



      <Carousel/>

    </div>
  );
};

export default ciudades;
