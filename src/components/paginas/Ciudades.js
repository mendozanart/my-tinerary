import React from 'react'
import paris from '../../img/paris.jpg'
import Carousel from '../carousel/Carousel'
import bsas from '../../img/bsas.jpg'
import miami from '../../img/miami.jpg'

const ciudades = () => {
    return (
        <div>
            <Carousel/>
            <h1 className='titulo mb-3 mt-3'> CITIES </h1>

            
          <div class="container mb-4 mt-4">
    <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
            <div className="form"> <i className="fa fa-search"></i> <input type="text" className="form-control form-input" placeholder="Search cities ..."/> <span className="left-pan"><i className="fa fa-microphone"></i></span> </div>
        </div>
    </div>
</div>


<div className="card mb-3 m-auto" style={{width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={paris} className="img-fluid rounded-start" alt="paris"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title">PARIS</h4>
        <h6 className="card-subtitle">Francia</h6>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 m-auto" style={{width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={bsas} className="img-fluid rounded-start" alt="bsas"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title">BUENOS AIRES</h4>
        <h6 className="card-subtitle">Argentina</h6>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 m-auto" style={{width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={miami} className="img-fluid rounded-start" alt="miami"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title">MIAMI</h4>
        <h6 className="card-subtitle">U.S</h6>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default ciudades