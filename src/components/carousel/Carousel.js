import React from 'react'
import img1 from '../../img/img1.PNG'
import img2 from '../../img/img2.PNG'
import img3 from '../../img/img3.PNG'


const carousel = () => {
    return (
        <div>
                      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="img3"/>
    </div>
  </div>
</div>
        </div>
    )
}

export default carousel