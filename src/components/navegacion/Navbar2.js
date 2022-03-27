import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import logo from "../../img/logo.png";
import person from "../../img/icons/person.png";
import Desconected from "../navbar/Desconected";


function Navbar2() {


  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [color] = useState("prueba");



  return (
    <>
      <nav
        className={
          colorChange
            ? "navbar navbar-expand-lg navbar-dark bg-warning fixed-top"
            : "colorChange navbar navbar-expand-lg navbar-light fixed-top"
        }
      >
        <div className="container-fluid">
          <LinkRouter to="/inicio">
            <img src={logo} width="100" alt="logo" />
          </LinkRouter>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={"collapse navbar-collapse" + color}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <LinkRouter className="nav-link" to="/inicio">
                  Home
                </LinkRouter>
              </li>
              <li className="nav-item">
                <LinkRouter className="nav-link" to="/ciudades">
                  Cities
                </LinkRouter>
              </li>
              <li className="nav-item">
                <LinkRouter className="nav-link" to="/review">
                  Reviews
                </LinkRouter>
              </li>
            </ul>
          </div>

          <div className="dropdown dropstart">
            <button
              className="btn btn-transparency dropstart"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={person} width="35" alt="logo" />
            </button>
            <ul
              className="navd dropdown-menu dropstart"
              aria-labelledby="dropdownMenuButton1"
            >
              <Desconected />
            </ul>
          </div>


        </div>
      </nav>
    </>
  );
}
export default Navbar2;
