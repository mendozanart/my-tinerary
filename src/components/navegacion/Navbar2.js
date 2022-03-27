import React, { useState } from "react";
import axios from "axios";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import person from "../../img/icons/person.png";
import Desconected from "../navbar/Desconected";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Navbar2() {
  const [{ user }, dispatch] = useStateValue();

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

  const navigate = useNavigate();

  async function loginUser(event) {
    console.log("evento", event);
    event.preventDefault();
    const userData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    console.log("userdata", userData);

    await axios
      .post("http://localhost:4000/api/signIn", { userData })
      .then((response) => {
        displayMessage(response.data);
        navigate("conexion");
      });

    function displayMessage(data) {
      if (!data.success) {
        console.log(alert(data.error));
      } else {
        console.log(data.response);
      }

      dispatch({
        type: actionTypes.USER,
        user: data.response,
      });
      console.log(user);
    }
  }

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
