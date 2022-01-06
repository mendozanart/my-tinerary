import React from 'react'
import Carousel from '../carousel/Carousel'

const usuarios = () => {
    return (
        <div>
            <Carousel/>
            <h1 className='titulo mb-4 mt-4'> LOG-IN </h1>


            <form>
  <div className="mb-3 col-4 m-auto">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We will not share your email with anyone.</div>
  </div>
  <div className="mb-3 col-4 m-auto">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 col-4 m-auto form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Keep connected</label>
  </div>
  <div className="mb-3 col-4 m-auto">
  <button type="submit" className="btn btn-secondary mt-3 m-auto">Log-in</button>
  </div>

  
</form>
 


        </div>
    )
}

export default usuarios