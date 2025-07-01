import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div id='projects' className='container-fluid bg-secondary ' style={{height:"75vh"}}>
      <hr className='text-light'/>
      <h1>Projects</h1>
         <div className="container">
           <div className="row gap-1 shadow-lg p-2 bg-secondary mt-md-5 rounded" style={{height:'25vh'}}>
            <div className="col text-light bg-dark rounded">7418520</div>
            <div className="col text-light bg-dark rounded">74185263</div>
            <div className="col text-light bg-dark rounded">74185263</div>
            <div className="col text-light bg-dark rounded">74185263</div>
            <div className="col text-light bg-dark rounded">74185263</div>
          </div>
         </div>
      
    </div>
  )
}

export default Projects
