import React from 'react'
import Carousel from '../carousel/Carousel'
import paris from '../../img/paris.jpg'
import bsas from '../../img/bsas.jpg'
import miami from '../../img/miami.jpg'


const inicio = () => {
    return (
        <div>
          <Carousel/>
          <h1 className='titulo mt-3 mb-4'> ¡Bienvenidos a Mytinerary! </h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={paris} class="card-img-top" alt="paris"/>
      <div class="card-body">
        <h5 class="card-title">Paris</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={bsas} class="card-img-top" alt="bsas"/>
      <div class="card-body">
        <h5 class="card-title">Buenos Aires</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={miami} class="card-img-top" alt="miami"/>
      <div class="card-body">
        <h5 class="card-title">Miami</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default inicio