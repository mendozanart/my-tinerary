import React from "react";
import axios from "axios";
import { Link as LinkRouter} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Connected = () => {

  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  async function cerrarSesion() {
    const email = user.datosUser.email;
    console.log(email);
    await axios
      .post("http://localhost:4000/api/signOut", { email })
      .then(response => {
        console.log(response);
        navigate('/');

        localStorage.removeItem("token")
        dispatch({
          type:actionTypes.USER,
          user:null
        })

      });
  }

  
    return (
    <div>
      <div className="col-sm-10 col-md-10 col-lg-10 mb-3 mt-3 m-auto">
        <p className="connectedtext">{user.datosUser.firstname}, welcome to your account!</p>
        <LinkRouter to="/conexion"><button type="button" className="btn btn-outline-warning bradio8">Your Account</button></LinkRouter>
        <button type="button" className="btn btn-warning bradio7" onClick={() => cerrarSesion()}>Log out</button>
      </div>
    </div>
    
    )

};

export default Connected;
