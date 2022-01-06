import React from 'react'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import whatsapp from '../../img/whatsapp.png'
import {Link as Linkrouter}  from 'react-router-dom'


const footer = () => {
    return (
        <div className='footer col-12'>
        <div>
            <h3 className='tfooter'> © 2013 Mytinerary. All rights reserved. </h3>
        </div>
        <div className='ifooter'>
            <Linkrouter to='/'>
                <img src={instagram} width='20' alt='instagram' style={{margin: "1rem"}}/>
            </Linkrouter>
            <Linkrouter to='/'>
                <img src={facebook} width='20' alt='facebook' style={{margin: "1rem"}}/>
            </Linkrouter>
            <Linkrouter to='/'>
                <img src={whatsapp} width='20' alt='whatsapp' style={{margin: "1rem"}}/>
                </Linkrouter>
        </div>
        </div>
    )
}

export default footer