import React, { useState } from "react";
import axios from "axios";
import { Link as LinkRouter } from "react-router-dom";
import logo from "../../img/logo.png";
import person from "../../img/icons/person.png";
import Login from "./Login";

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


  async function loginUser(event){
    event.preventDefault()
    const userData = {email : event.target[0].value,
      password : event.target[1].value,
    }

    await axios.post("http://localhost:4000/api/signin",{userData})
    .then(response =>//alert(response.data.response)) 


    displayMessage(response.data)
  )


   function displayMessage(data){
     if(!data.success){
      console.log(data.response)
    } else {
      console.log(data.response)
    }
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
              <LinkRouter to="/usuarios">
                <img src={person} width="35" alt="logo" />
              </LinkRouter>
            </button>
            <ul
              className="navd dropdown-menu dropstart"
              aria-labelledby="dropdownMenuButton1"
            >
              <form onSubmit={loginUser}>
              <div className="col-sm-10 col-md-10 col-lg-10 mb-3 mt-3 m-auto">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bradio"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-white">
                  We will not share your email with anyone.
                </div>
              </div>
              <div className="col-sm-10 col-md-10 col-lg-10 mb-3 m-auto">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control bradio"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="blogin col-sm-10 col-md-10 col-lg-10 mb-1">
                <LinkRouter to="">
                <button
                  type="submit"
                  className="btn btn-warning text-white bradio5 mt-3"
                >
                  Log-in
                </button>
                </LinkRouter>
              </div>
              <div className="mb-3 col-sm-10 col-md-10 col-lg-10 m-auto">
                <Login />
              </div>
              <p className="google col-sm-10 col-md-10 col-lg-10 mt-5 m-auto">
                You don't have an account?
              </p>
              <div className="blogin2 m-auto mb-3 col-10">
                <LinkRouter
                  className="btn btn-warning col-sm-10 col-md-10 col-lg-10 bradio5 text-white mt-2 "
                  to="/usuarios"
                >
                  Sign up
                </LinkRouter>
              </div>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar2;
