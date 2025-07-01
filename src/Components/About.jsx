import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='container-fluid bg-dark h-md-25 h-100 d-md-flex align-items-center py-md-5 py-md-0' id='about'>
      <div className='row  container ' >
      <div className="col-md-4 text-light d-flex flex-column py-md-5 gap-4 mt-5 mt-md-0">
        <i class="fa-brands fa-facebook fs-md-5 fs-1 text-secondary"></i>
        <i class="fa-brands fa-instagram fs-md-5 fs-1 text-secondary"></i>
        <i class="fa-solid fa-phone fs-md-5 fs-1 text-secondary">
          <span className='fs-5 ms-2' style={{letterSpacing:'0.2rem'}}> +91-6284061106</span></i>
        <i class="fa-brands fa-whatsapp fs-md-5 fs-1 text-secondary"></i>
        <hr className='hr'/>
        </div>
      <div className="col-md-4 text-secondary d-md-flex flex-md-column gap-md-5 align-items-center fs-1 py-md-5 py-3">
        <div className='fw-bold'>Skills</div>
        <div className='d-flex gap-md-5 gap-4'>
          <i class="fa-brands fa-html5" style={{textAlign:'center'}}> <p style={{fontSize:'10px'}}>html</p></i>
        <i class="fa-brands fa-css3-alt " style={{textAlign:'center'}}><p style={{fontSize:'10px'}}>Css</p></i>
        <i class="fa-brands fa-js " style={{textAlign:'center'}}><p style={{fontSize:'10px'}}>JavaScript</p></i>
        <i class="fa-brands fa-bootstrap " style={{textAlign:'center'}}><p style={{fontSize:'10px'}}>Bootstrap</p></i>
        <i class="fa-brands fa-react" style={{textAlign:'center'}}><p style={{fontSize:'10px'}}>react</p></i>
        </div>
        <hr className='hr border-2'/>
      </div>
     
      <div className='col-md-4' >
        <div id='qualification' className='text-secondary py-md-5'>
          <h1 className='text-md-center fw-bold' >Qualification</h1>
        </div>
        <div id='qualifications' className='text-secondary fw-bold fs-5'>
          <ul>
            <li> BCA </li>
            <li>PGDCA </li>
            <li style={{listStyle:'none', paddingTop:"40px"}}>
              <div className='d-flex gap-2 '>
                <button className='btn btn-warning px-md-5 px-4' style={{whiteSpace:"nowrap"}} >Download CV</button>
              <button className='btn btn-outline-warning px-md-5 px-5' style={{whiteSpace:'nowrap'}}>Hire me</button></div></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
