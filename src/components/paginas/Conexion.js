import React from "react";
import axios from "axios";
import conexion from "../../img/header/conexion1.png";
import { useStateValue } from "../../StateProvider";
import { useNavigate } from 'react-router-dom';

const Conexion = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  async function cerrarSesion() {
    const email = user.datosUser.email;
    console.log(email);
    await axios
      .post("http://localhost:4000/api/signOut", { email })
      .then((response) => {
        console.log(response);
        navigate('/');
      });
  }

  return (
    <div>
      <div className="banner-image3 w-10respon0 vh-100 d-flex justify-content-center align-items-center">
        <div className="header">
          <div className="textoheader3 col-sm-12 col-md-6 col-lg-5">
            <h1 className="tituloheader">YOUR ACCOUNT</h1>
            <h4 className="subtituloheader">Find your activity history here</h4>
          </div>
          <div className="imagen">
            <img
              src={conexion}
              className="d-block w-100 imgheader2 col-sm-12 col-md-6 col-lg-6 col-lg-5"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="card text-center col-sm-10 col-md-10 col-lg-11 m-auto mb-5 ">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                Favorites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Notifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Your itineraries
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Your favorites itineraries</h5>
          <p className="card-text">
            Here you can find a list of your favorites itineraries. Do you want
            to take a trip?
          </p>
          <a href="#" className="btn btn-warning bradio2">
            Find a new place to go!
          </a>
        </div>
      </div>

      <div className="blogin col-sm-10 col-md-10 col-lg-10 mb-1">
        <button
          type="submit"
          className="btn btn-warning text-white bradio6 mt-1 mb-5"
          onClick={() => cerrarSesion()}
        >
          Log-out
        </button>
      </div>
    </div>
  );
};

export default Conexion;
