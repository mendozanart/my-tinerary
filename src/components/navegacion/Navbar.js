import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to='/'>
        <img src='./styles/img/logo.png' width='50' alt='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/'>Cities</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default navbar 