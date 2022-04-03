import axios from "axios";
import React, {useEffect} from "react";
import registro from "../../img/header/registro.png";
import Facebook from "../navegacion/Facebook";

const Usuarios = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  async function NewUser(event){
    event.preventDefault()
    const NuevoUsuario = {email : event.target[0].value,
      firstname : event.target[1].value,
      lastname : event.target[2].value,
      password : event.target[3].value,
      from : "signup",
    }

    await axios.post("http://localhost:4000/api/usuarios",{NuevoUsuario})
    .then(response =>//alert(response.data.response)) 


    displayMessage(response.data)
  )


   function displayMessage(data){
         if (data.success === "falseval"){
      console.log(data.response.error.details)
            data.response.error.details.map(error=>alert(error.message))
          }else if (data.success === true) {
            console.log(data)
          }else if (data.success === false) {
            console.log(data)
          }
   }
  }

  



  return (
    <div>
      <div className="banner-image4 w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <div className="textoheader4 col-sm-6 col-md-6 col-lg-5">
            <h1 className="tituloheader2 ">SIGN UP</h1>
            <h4 className="subtituloheader">
              9 out of 10 people use Mytinerary to plan their trip
            </h4>
            <h4 className="subtituloheader">Join and enjoy!</h4>
          </div>
          <div className="imgheader4 col-sm-6 col-md-6 col-lg-6 col-lg-5">
            <img
              src={registro}
              className="d-block w-100 imgheader4 "
              alt="..."
            />
          </div>
        </div>
      </div>


        <div className="formulario col-sm-10 col-md-10 col-lg-10">
          <form onSubmit={NewUser}>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control bradiobarrauser col-sm-10 col-md-10 col-lg-10"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div
                id="emailHelp"
                className="form-text col-sm-10 col-md-10 col-lg-10"
              >
              </div>
            </div>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label htmlFor="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control bradiobarrauser col-sm-10 col-md-10 col-lg-10"
                id="exampleInputName1"
              />
            </div>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label htmlFor="exampleInputLastName1" className="form-label">
                {" "}
                Last Name
              </label>
              <input
                type="lastName"
                className="form-control bradiobarrauser col-sm-10 col-md-10 col-lg-10"
                id="exampleInputLastName1"
              />
            </div>
            <div className="mb-3 m-auto col-sm-10 col-md-10 col-lg-10">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control bradiobarrauser col-sm-10 col-md-10 col-lg-10"
                id="exampleInputPassword1"
              />
            </div>
            <div className="btnsign">
              <button
                type="submit"
                className="btn btn-warning mt-3 bradiouser"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

      
      <div className="col-sm-10 col-md-10 col-lg-10">

      <p className="siface">Signup with your Facebook account</p>

      <div className="siface2">
      <Facebook />
      </div>


      </div>

    </div>
  );
};

export default Usuarios;
