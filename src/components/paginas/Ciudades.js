import React from 'react'
import paris from '../../img/paris.jpg'
import bsas from '../../img/bsas.jpg'
import miami from '../../img/miami.jpg'
import {Link as Linkrouter}  from 'react-router-dom'
import plane from '../../img/plane.png'


const ciudades = () => {
    return (
        <div>

        <div className='header col-12'>
            <div className='textoheader col-4'>
              <h1 className='tituloheader'>GET MORE INFORMATION</h1>
              <h4 className='subtituloheader'>About the CITIES you want to visit</h4>
            </div>
            <div className='imgheader col-4'>
            <img src={plane} className="d-block w-100" alt="..."/>
            </div>
          </div>



            
          <div class="container mb-4 mt-4">
    <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
            <div className="form"> <i className="fa fa-search"></i> <input type="text" className="form-control form-input" placeholder="Search cities ..."/> <span className="left-pan"><i className="fa fa-microphone"></i></span> </div>
        </div>
    </div>
</div>




<div className="container">
    <div className="row">
        <div className="col-md-4">
          <div>
            <div className="content"> <Linkrouter to='/'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={paris} alt="img"/>
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">More info</h3>
                        <p className="content-text"><i className="fa fa-map-marker"></i>Click here</p>
                    </div>
                </Linkrouter>
                </div>
                <h3 className='titulo'>Paris</h3>
                <p className='subtitulo'>France</p>
                </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="content"> <Linkrouter to='/'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={miami} alt="img"/>
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">More info</h3>
                        <p className="content-text"><i className="fa fa-map-marker"></i>Click here</p>
                    </div>
                </Linkrouter> </div>
                <h3 className='titulo'>Miami</h3>
                <p className='subtitulo'>United States</p>
                </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="content"> <Linkrouter to='/ciudad'>
                    <div className="content-overlay"></div> <img className="imgcard content-image" src={bsas} alt="img"/>
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">More info</h3>
                        <p className="content-text"><i className="fa fa-map-marker"></i>Click here</p>
                    </div>
                </Linkrouter> </div>
                <h3 className='titulo'>Buenos Aires</h3>
                <p className='subtitulo'>Argentina</p>
                </div>
        </div>
    </div>
</div>



        </div>
    )
}

export default ciudades