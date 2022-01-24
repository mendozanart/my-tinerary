import React from "react";
import registro from "../../img/header/registro.png";

const Usuarios = () => {
  return (
    <div>

<div className="banner-image4 w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <div className="textoheader4 col-sm-6 col-md-6 col-lg-5">
            <h1 className="tituloheader2 ">
              SIGN UP
            </h1>
            <h4 className="subtituloheader">
            9 out of 10 people use Mytinerary to plan their trip
            </h4>
            <h4 className="subtituloheader">
            Join and enjoy!
            </h4>
          </div>
          <div className="imgheader4 col-sm-6 col-md-6 col-lg-6 col-lg-5">
            <img src={registro} className="d-block w-100 imgheader4 " alt="..." />
          </div>
        </div>
      </div>


      


      
      <div className="regform col-sm-10 col-md-10 col-lg-10 m-auto">
        <div className="formulario col-sm-10 col-md-10 col-lg-10 m-auto">
          <form>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control bradio col-sm-10 col-md-10 col-lg-10"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text col-sm-10 col-md-10 col-lg-10">
                We will not share your email with anyone.
              </div>
            </div>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label for="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control bradio col-sm-10 col-md-10 col-lg-10"
                id="exampleInputName1"
              />
            </div>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label for="exampleInputLastName1" className="form-label">
                {" "}
                Last Name
              </label>
              <input
                type="lastName"
                className="form-control bradio col-sm-10 col-md-10 col-lg-10"
                id="exampleInputLastName1"
              />
            </div>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control bradio col-sm-10 col-md-10 col-lg-10"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label for="exampleInputRPassword1" className="form-label">
                {" "}
                Repeat Password
              </label>
              <input
                type="rpassword"
                className="form-control bradio col-sm-10 col-md-10 col-lg-10"
                id="exampleInputRPassword1"
              />
            </div>
            <div className="btnsign">
              <button type="submit" className="btn btn-warning mt-3 m-auto bradio2">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
