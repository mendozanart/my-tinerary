import React from "react";
import plane from "../../img/header/plane.png";
import Carousel from "../carousel/Carousel";

const ciudades = () => {
  return (
    <div>
      <div className="banner-image2 w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="header col-sm-6 col-md-12">
        <div className="textoheader2 col-4">
          <h1 className="tituloheader">GET MORE INFORMATION</h1>
          <h4 className="subtituloheader">
            About the CITIES you want to visit
          </h4>
        </div>
        <div className="imgheader2 col-4">
          <img src={plane} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>

      <div class="container col-sm-6 col-md-12 mb-1 mt-4">
        <div className="row height d-flex justify-content-center align-items-center m-auto">
          <div className="col-md-6">
            <div className="form">
              {" "}
              <i className="fa fa-search"></i>{" "}
              <div className="mbusqueda">
                <div className="">
                <input
                type="text"
                className="form-control form-input bradio"
                placeholder="Search cities ..."
              />{" "}
                </div>
                <div className="bbusqueda">
                <button type="button" class="btn btn-warning bradio2">let's go!</button>
                </div>
              
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="filtrociudades m-auto d-flex justify-content-center align-items-center">
      <div className="form-check form-switch fswitch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">America</label>
</div>

<div className="form-check form-switch fswitch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">Europe</label>
</div>

<div className="form-check form-switch fswitch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">Asia</label>
</div>

<div className="form-check form-switch fswitch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">Oceania</label>
</div>


      </div>



      <Carousel/>

    </div>
  );
};

export default ciudades;
