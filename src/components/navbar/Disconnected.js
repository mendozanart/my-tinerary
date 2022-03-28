import React from "react";
import axios from "axios";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import Login from "../navegacion/Login";
import Facebook from "../navegacion/Facebook";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Disconnected = () => {
  const [{ user }, dispatch] = useStateValue();

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
        //console.log(data.response);
        localStorage.setItem("token", data.response.token)
      }

      dispatch({
        type: actionTypes.USER,
        user: data.response,
      });
      console.log(user);
    }
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <div className="col-sm-10 col-md-10 col-lg-10 mb-3 mt-3 m-auto">
          <label htmlFor="exampleInputEmail1" className="form-label">
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
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control bradio"
            id="exampleInputPassword1"
          />
        </div>
        <div className="blogin col-sm-10 col-md-10 col-lg-10 mb-1">
          <button
            className="btn btn-warning text-white bradio5 mt-3"
            type="submit"
            value="Login"
          >
            Log-in
          </button>
        </div>
      </form>

      <div className="mb-3 col-sm-10 col-md-10 col-lg-10 m-auto">
        <Login />
        <Facebook />
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
    </div>
  );
};

export default Disconnected;
