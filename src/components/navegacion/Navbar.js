import React from 'react'
import {Link as Linkrouter}  from 'react-router-dom'
import logo from '../../img/logo.png'
import person from '../../img/person.png'

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Linkrouter to='/inicio'>
        <img src={logo} width='100' alt='logo' />
    </Linkrouter>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Linkrouter className="nav-link" to='/inicio'>Home</Linkrouter>
        </li>
        <li className="nav-item">
          <Linkrouter className="nav-link" to='/ciudades'>Cities</Linkrouter>
        </li>
        <li className="nav-item">
          <Linkrouter className="nav-link" to='/review'>Reviews</Linkrouter>
        </li>
      </ul>
    </div>


    <div className="dropdown">
  <button className="btn btn-transparency" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <Linkrouter to='/usuarios'>
      <img src={person} width='35' alt='logo' />
  </Linkrouter>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <div className="mb-3 col-10 m-auto">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We will not share your email with anyone.</div>
  </div>
  <div className="mb-3 col-10 m-auto">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 col-10 m-auto form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Keep connected</label>
  </div>
  <div className="mb-3 col-10 m-auto">
  <button type="submit" className="btn btn-secondary mt-3 m-auto">Log-in</button>
  </div>
  <div className="mb-3 col-10 m-auto">
    <p>You don't have an account?</p><Linkrouter className='btn btn-warning' to='/usuarios'>Sign up</Linkrouter>
  </div>
  </ul>
</div>


  </div>
</nav>
        </div>
    )
}

export default navbar


