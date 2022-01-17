import React from "react";
import registro from "../../img/header/registro.png";

const usuarios = () => {
  return (
    <div>

<div className="banner-image2 w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <div className="textoheader col-5">
            <h1 className="tituloheader2">
              SIGN UP
            </h1>
            <h4 className="subtituloheader">
            9 out of 10 people use Mytinerary to plan their trip
            </h4>
            <h4 className="subtituloheader">
            Join and enjoy!
            </h4>
          </div>
          <div className="imgheader2 col-5">
            <img src={registro} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      


      
      <div className=" col-10 regform">
        <div className="col-sm-10 col-md-12 formulario">
          <form>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control bradio"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We will not share your email with anyone.
              </div>
            </div>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <label for="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control bradio"
                id="exampleInputName1"
              />
            </div>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <label for="exampleInputLastName1" className="form-label">
                {" "}
                Last Name
              </label>
              <input
                type="lastName"
                className="form-control bradio"
                id="exampleInputLastName1"
              />
            </div>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control bradio"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-sm-6 col-md-12 m-auto">
              <label for="exampleInputRPassword1" className="form-label">
                {" "}
                Repeat Password
              </label>
              <input
                type="rpassword"
                className="form-control bradio"
                id="exampleInputRPassword1"
              />
            </div>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
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

export default usuarios;
