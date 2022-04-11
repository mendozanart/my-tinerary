import React from 'react';
import axios from "axios";
import GoogleLogin from 'react-google-login';



function Login () {


const responseGoogle = async (response) => {
  console.log(response);
  

  const NuevoUsuario = {email : response.profileObj.email,
    firstname : response.profileObj.givenName,
    lastname : response.profileObj.familyName,
    password : response.profileObj.googleId + "aB",
    from : "Google",
    google : true
}

await axios.post("https://mytinerary-ana.herokuapp.com/api/usuarios",{NuevoUsuario})
.then(response =>//alert(response.data.response)) 


displayMessage(response.data))


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
        <p> Sign up with your Google account </p>
        <GoogleLogin
    clientId="899087157105-jinlo05larttf6f8gl5439sivs512ho5.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>

);

}

export default Login;