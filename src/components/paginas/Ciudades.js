import React from "react";
import plane from "../../img/plane.png";
import Carousel from "../carousel/Carousel";

const ciudades = () => {
  return (
    <div>
      <div className="header col-sm-6 col-md-12">
        <div className="textoheader col-4">
          <h1 className="tituloheader">GET MORE INFORMATION</h1>
          <h4 className="subtituloheader">
            About the CITIES you want to visit
          </h4>
        </div>
        <div className="imgheader col-4">
          <img src={plane} className="d-block w-100" alt="..." />
        </div>
      </div>

      <div class="container col-sm-6 col-md-12">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              {" "}
              <i className="fa fa-search"></i>{" "}
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search cities ..."
              />{" "}
              <span className="left-pan">
                <i className="fa fa-microphone"></i>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>

      <Carousel/>

    </div>
  );
};

export default ciudades;
