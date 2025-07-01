import React from 'react'
import './Contact.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })

  const [userdata, setUserdata] = useState([])

  const handleSubmit=(e)=>{
      e.preventDefault()
      setUserdata((prev)=>[...prev,form])
      console.log('data sent successfully',userdata)
       toast.success('Form submitted successfully!')
      setForm({
    name:'',
    email:'',
    message:''
  })

  }

  const handleChange=(e)=>{
      const{name,value}= e.target
      setForm(()=>({...form,[name]:value}))
  }
  return (
    <div className='mainContact bg-secondary' id='contact'>
    
    <div  className='bg-secondary  d-md-flex align-items-center'>
      <form className='form-control w-100 h-100 d-flex flex-column gap-4 bg-secondary-subtle  py-3 rounded-0' onSubmit={handleSubmit}>
        <h3 className='text-center text-bolder text-secondary'><u>Contact</u></h3>
        <input className='form-control py-3'
         type="text"
          placeholder='Enter your name' 
          name='name' 
          value={form.name} 
          onChange={handleChange}
          />
        <input className='form-control py-3'
         type="text"
          placeholder='Enter email' 
          name='email' 
          value={form.email}
           onChange={handleChange}
           />
        <textarea id="" rows={5}
         className='form-control'
          placeholder='Message'
           name='message' 
           value={form.message} 
           onChange={handleChange}>
        </textarea>
        <div className='text-center'>
          <button className='btn btn-warning fw-bold text-secondary fs-5 form-control py-3' type='submit'>Send</button>
          </div>
      </form>
      <img src="https://wallpapers.com/images/file/hands-on-keyboard-contact-us-uhmq1tyijy57ln84.jpg" alt="img" className='w-100 overflow-hidden' style={{height:"488px"}}/>
      </div>

      {userdata.map((item,index)=>(
        <div key={index}>

        </div>
      ))}
   
    </div>
  )
}

export default Contact
