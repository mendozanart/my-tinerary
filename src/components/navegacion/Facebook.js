import React from 'react';
import axios from "axios";
import FacebookLogin from 'react-facebook-login';

function Facebook () {

const responseFacebook = async (response) => {
  console.log(response);

  const NuevoUsuario = {email : response.email,
    firstname : response.name,
    lastname : "facebook",
    password : response.id + "aB",
    from : "Facebook",
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
        }
 }

}

return(
    <div className='google mt-3'>
<FacebookLogin
    appId="1686526751789048"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook} />
    </div>

);

}

export default Facebook;