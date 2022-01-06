import React from 'react'
import Carousel from '../carousel/Carousel'
import person1 from '../../img/person1.jpg'
import person2 from '../../img/person2.jpg'
import person3 from '../../img/person3.jpg'
import star from '../../img/star.png'


const review = () => {
    return (
        <div>
            <Carousel/>
            <h1 className='titulo mb-4 mt-4'> REVIEWS </h1>

            
            <div className='row row-cols-1 row-cols-md-6 g-4 mt-5 mb-5 infobanners'>
        <div className='infocard1 m-5'>
          <img src={person1} width='250' alt="infocard" style={{borderRadius:'200px', margin:'10px'}}/>
          <h5 className="card-title">Alejandro Massari</h5>
          <p className="card-text">"Increible la oportunidad que me brindó mytinerary. Pude disfrutar al máximo mi estadía en Miami."</p>
          <div className='stars'>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
          </div>
        </div>
        <div className='infocard2 m-5'>
        <img src={person2} width='250' alt="infocard" style={{borderRadius:'200px', margin:'10px'}}/>
          <h5 className="card-title">Flor Venaruzzo</h5>
          <p className="card-text">"Me hubiese gustado tener muchos más días libres para poder conocer todo lo que me recomendaron."</p>
          <div className='stars'>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
          </div>
        </div>
        <div className='infocard3 m-5'>
        <img src={person3} width='250' alt="infocard" style={{borderRadius:'200px', margin:'10px'}}/>
          <h5 className="card-title">Rafa Machado</h5>
          <p className="card-text">"Ya sea sobre lugares, restaurantes, bares, música.. consigue lo que buscas. Seguramente vuelva a utilizarlo."</p>
          <div className='stars'>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
            <img src={star} width='30' alt="star"/>
          </div>
        </div>
      </div>
            

        </div>
    )
}

export default review