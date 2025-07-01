import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
     
      {/* <Navbar/>
        <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='#about' element={<About/>}></Route>
        </Routes> */}
<Navbar/>        
<Home/>
<Projects/>
<Contact/>
<About/>

     <ToastContainer/>
     
    </>
  )
}

export default App
