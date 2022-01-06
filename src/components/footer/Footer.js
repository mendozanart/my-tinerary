import React from 'react'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import whatsapp from '../../img/whatsapp.png'



const footer = () => {
    return (
        <div className='footer col-12'>
        <div>
            <h3 className='tfooter'> © 2013 Mytinerary. All rights reserved. </h3>
        </div>
        <div className='ifooter'>
        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} width='20' alt="Instagram" className="perfil m-2"/></a>
        <a href="https://www.facebook.com/" target="_blank"><img src={facebook} width='20' alt="Facebook" className="perfil m-2"/></a>
        <a href="https://www.whatsapp.com/?lang=es" target="_blank"><img src={whatsapp} width='20' alt="Whatsapp" className="perfil m-2"/></a>
        </div>
        </div>
    )
}

export default footer