import React from 'react'
import './Home.css' 
const Home = () => {
  return (
    <div id='home' className='main container-fluid d-md-flex align-items-center bg-secondary mt-md-3 mt-5 w-100 gap-md-2'>
      <div className='bg-dark w-100 d-flex justify-content-center align-items-center flex-column vh-md-100 mt-5 mt-md-0 py-5' id='hire'>
        <h1 className='text-light fw-bolder'>Hi, I'm <span className='text-danger'>Satpal</span></h1>
         <hr className='text-light border border-2 w-75'/>
        <h1 className='text-warning'>Web Developer</h1><br /><br />
        <div className='d-flex gap-3'>
          <button className='btn btn-warning rounded px-5'>Hire Me</button>
          <button className='btn btn-outline-warning rounded px-5'>Latest Work</button>
      </div>
       </div>
      <div id='picBack' className=' w-100 d-md-flex justify-content-center align-items-center d-md-block bg-warning'>
        <img id='pic' src="/image.webp" 
        alt="img"/>
          </div>
       
    </div>

  )
}

export default Home
