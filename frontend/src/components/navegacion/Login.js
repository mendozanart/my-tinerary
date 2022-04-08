import React from 'react';
import GoogleLogin from 'react-google-login';

function Login () {

const responseGoogle = (response) => {
  console.log(response);
}

return(
    <div className='google mt-3'>
        <p> Log in with your Google account </p>
        <GoogleLogin
    clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>

);

}

export default Login;