import React from 'react'
import paris2 from '../../img/paris2.PNG'
import bsas2 from '../../img/bsas2.PNG'
import miami2 from '../../img/miami2.PNG'
import {Link as Linkrouter}  from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const carousel = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



    return (
        <div>

<Carousel responsive={responsive}
          draggable={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
>
  <div>
  <div className="content nodraggable"> <Linkrouter to='/' className='nodraggable'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={miami2} alt="img"/>
                    <div className="content-details fadeIn-bottom nodraggable">
                        <h3 className="content-title nodraggable">Miami</h3>
                        <p className="content-text nodraggable"><i className="fa fa-map-marker"></i>More info here</p>
                    </div>
                </Linkrouter> </div>
  </div>
  <div>
  <div className="content nodraggable"> <Linkrouter to='/' className='nodraggable'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={paris2} alt="img"/>
                    <div className="content-details fadeIn-bottom nodraggable">
                        <h3 className="content-title nodraggable">Paris</h3>
                        <p className="content-text nodraggable"><i className="fa fa-map-marker"></i>More info here</p>
                    </div>
                </Linkrouter> </div>
  </div>
  <div>
  <div className="content nodraggable"> <Linkrouter to='/' className='nodraggable'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={bsas2} alt="img"/>
                    <div className="content-details fadeIn-bottom nodraggable">
                        <h3 className="content-title nodraggable">Buenos Aires</h3>
                        <p className="content-text nodraggable"><i className="fa fa-map-marker"></i>More info here</p>
                    </div>
                </Linkrouter> </div>
  </div>
  <div>
  <div className="content nodraggable"> <Linkrouter to='/' className='nodraggable'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={miami2} alt="img"/>
                    <div className="content-details fadeIn-bottom nodraggable">
                        <h3 className="content-title nodraggable">Miami</h3>
                        <p className="content-text nodraggable"><i className="fa fa-map-marker"></i>More info here</p>
                    </div>
                </Linkrouter> </div>
  </div>
  <div>
  <div className="content nodraggable"> <Linkrouter to='/' className='nodraggable'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={paris2} alt="img"/>
                    <div className="content-details fadeIn-bottom nodraggable">
                        <h3 className="content-title nodraggable">Paris</h3>
                        <p className="content-text nodraggable"><i className="fa fa-map-marker"></i>More info here</p>
                    </div>
                </Linkrouter> </div>
  </div>
  <div>
  <div className="content nodraggable"> <Linkrouter to='/' className='nodraggable'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={bsas2} alt="img"/>
                    <div className="content-details fadeIn-bottom nodraggable">
                        <h3 className="content-title nodraggable">Buenos Aires</h3>
                        <p className="content-text nodraggable"><i className="fa fa-map-marker"></i>More info here</p>
                    </div>
                </Linkrouter> </div>
  </div>
</Carousel>;




</div>

    )
}

export default carousel
