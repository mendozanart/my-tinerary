import React from 'react'
import Carousel from '../carousel/Carousel'
import paris from '../../img/paris.jpg'
import bsas from '../../img/bsas.jpg'
import miami from '../../img/miami.jpg'
import smartwatch from '../../img/smartwatch.png'
import weather from '../../img/weather.png'
import slack from '../../img/slack.png'
import van from '../../img/van.jpg'
import camp from '../../img/camp.jpg'
import rest from '../../img/rest.jpg'
import {Link as Linkrouter}  from 'react-router-dom'


const inicio = () => {
    return (
        <div>
          
          <Carousel/>
          <h1 className='titulo mt-4 mb-4'> Welcome to Mytinerary! </h1>



          <div className="container mb-5 mt-5">
    <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
            <div className="form"> <i className="fa fa-search"></i> <input type="text" className="form-control form-input" placeholder="Places, restaurants, bars ..."/> <span className="left-pan"><i className="fa fa-microphone"></i></span> </div>
        </div>
    </div>
</div>

      <div className='row row-cols-1 row-cols-md-6 g-4 mt-5 mb-5 infobanners'>
        <div className='infocard1 m-1'>
          <img src={smartwatch} width='70' alt="infocard"/>
          <h5 className="card-title">SAVE TIME</h5>
          <p className="card-text">Learn about the best options for your trip, from the best of them.</p>
        </div>
        <div className='infocard2 m-1'>
        <img src={weather} width='70' alt="infocard"/>
          <h5 className="card-title">PLAN</h5>
          <p className="card-text">Plan your vacations, so that they are perfect.</p>
        </div>
        <div className='infocard3 m-1'>
        <img src={slack} width='70' alt="infocard"/>
          <h5 className="card-title">OPINIONS</h5>
          <p className="card-text">Whether about places, restaurants, bars, music ... get what you are looking for.</p>
        </div>
      </div>



      <div id="carouselExampleCaptions" className="carousel slide col-7 m-auto" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={paris} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>PARIS</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={miami} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>MIAMI</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={bsas} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>BUENOS AIRES</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<h1 className='titulo mt-5 mb-5'> The best hotels </h1>



<div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="content"> <Linkrouter to='/'>
                    <div className="content-overlay"></div> <img className="content-image" src="https://i.imgur.com/7cNRozs.jpg" alt="img"/>
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">Geysers Valley Hotel</h3>
                        <p className="content-text"><i className="fa fa-map-marker"></i> Russia</p>
                    </div>
                </Linkrouter> </div>
        </div>
        <div className="col-md-4">
            <div className="content"> <Linkrouter to='/'>
                    <div className="content-overlay"></div> <img className="content-image" src="https://i.imgur.com/CS59IJZ.jpg" alt="img"/>
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">Khumbu Valley Hotel</h3>
                        <p className="content-text"><i className="fa fa-map-marker"></i> Nepal</p>
                    </div>
                </Linkrouter> </div>
        </div>
        <div className="col-md-4">
            <div className="content"> <Linkrouter to='/'>
                    <div className="content-overlay"></div> <img className="content-image" src="https://i.imgur.com/LITAKvq.jpg" alt="img"/>
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">Waipi’o Valley Hotel</h3>
                        <p className="content-text"><i className="fa fa-map-marker"></i> Hawaii</p>
                    </div>
                </Linkrouter> </div>
        </div>
    </div>
</div>



<h1 className='titulo mt-4 mb-4'> Find your activities </h1>




<div className="row row-cols-1 row-cols-md-3 col-8 m-auto mt-4 mb-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={van} className="card-img-top" alt="van"/>
      <div className="card-body">
        <h5 className="card-title">Travel by car</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={rest} className="card-img-top" alt="rest"/>
      <div className="card-body">
        <h5 className="card-title">Visit the best restaurants</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={camp} className="card-img-top" alt="camp"/>
      <div className="card-body">
        <h5 className="card-title">Know the best places to camp</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>




        </div>
    )
}

export default inicio