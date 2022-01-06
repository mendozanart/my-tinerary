import React from 'react'
import paris from '../../img/paris.jpg'
import Carousel from '../carousel/Carousel'
import bsas from '../../img/bsas.jpg'
import miami from '../../img/miami.jpg'

const ciudades = () => {
    return (
        <div>
            <Carousel/>
            <h1 className='titulo mb-3 mt-3'> CIUDADES </h1>
<div className="card mb-3 m-auto" style={{width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={paris} className="img-fluid rounded-start" alt="paris"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Paris</h5>
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
        <h5 className="card-title">Buenos Aires</h5>
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
        <h5 className="card-title">Miami</h5>
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