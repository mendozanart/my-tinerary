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
          <Linkrouter className="nav-link active" to='/inicio'>Home</Linkrouter>
        </li>
        <li className="nav-item">
          <Linkrouter className="nav-link" to='/ciudades'>Ciudades</Linkrouter>
        </li>
        <li className="nav-item">
          <Linkrouter className="nav-link" to='/review'>Reviews</Linkrouter>
        </li>
      </ul>
    </div>
    <Linkrouter to='/usuarios'>
        <img src={person} width='35' alt='logo' />
    </Linkrouter>
  </div>
</nav>
        </div>
    )
}

export default navbar 