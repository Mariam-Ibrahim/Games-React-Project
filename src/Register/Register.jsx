import React, { useState } from 'react'
import GamesImg from '../assests/gaming.ebaf2ffc84f4451d.jpg'
import logo from '../assests/logo (1).png'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function Register() {
  
    let navigate=useNavigate()
    let [dataError,setError]=useState(null)
    let[flag,setFlag]=useState(true)
  
  let validate = yup.object({
    first_name:yup.string().required().matches(/^[A-Z][a-zA-Z0-9 _]{2,7}$/,"First Name must start with Uppercase letter , not less than 2 characters"),
    last_name:yup.string().required().matches(/^[A-Z][a-zA-Z0-9 _]{2,7}$/,"Last Name must start with Uppercase letter , not less than 2 characters"),

    email:yup.string().required().email("at least 5 characters , and you can only use [Upper/Lower cases, Numbers ,- , _] then @example.com").matches(/^[a-zA-Z0-9_-]{5,20}@[a-z]{3,10}\.(com)$/,"emails has to contain at least 5 characters , and you can only use [Upper/Lower cases, Numbers ,- , _]"),
    password:yup.string().required().matches(/^[A-Z][a-zA-Z0-9_@$]{7,15}$/, "password has to start with an upper case followed by at least 7 characters"),
    age:yup.string().required().matches(/^[1-9][0-9]$/, "enter your true age")
  })
  
  let formik = useFormik ({
    initialValues:{
      email:"",
      first_name:"",
      password:"",
      last_name:"",
      age:""
    },
    onSubmit:(values)=>{
      loginApi(values)
  
    },
    validationSchema:validate
  })
  async function loginApi(loginData){
    setFlag(false)
  let {data}= await axios.post("https://sticky-note-fe.vercel.app/signup" , loginData ).catch((x)=>{
    console.log(x);
    setError(x.response.data.message)
    setFlag(true)
  
  })
  console.log(data);

  
  
  if (data.message=="success"){
    setFlag(true)
  
    navigate ('/')
  
  }
  }
  
    return (
      <div className='bgcolor pb-5 '>
        <div className='container pb-5 mb-5'>
          <div className='row pt-5 g-0 pb-5 mb-5 align-items-stretch '>
            <div className='col-lg-6 col-sm-12 col-md-6  '>
              <img src={GamesImg} alt=""  className='w-100 h-100'/>
            </div>
            <div className='col-lg-6 col-sm-12 col-md-6 bgsec  '>

              <h2 className='text-center text-muted h4 pt-3 '>Create My Account!</h2>
  <div className='d-flex justify-content-center align-items-center'>
  <form className=' col-9 border-bottom pb-2' onSubmit={formik.handleSubmit}>
  <input type="text" name='first_name' className='form-control mb-2' placeholder='first name' onChange={formik.handleChange} />
              <p className='text-danger'>{formik.errors.first_name}</p>
              <input type="text" name='last_name' className='form-control mb-2' placeholder='last name' onChange={formik.handleChange} />
              <p className='text-danger'>{formik.errors.last_name}</p>

              <input type="email" name='email' className='form-control mb-2 ' placeholder='Email' onChange={formik.handleChange} />
              <p className='text-danger'>{formik.errors.email}</p>
              <input type="password" name='password' className='form-control mb-2' placeholder='Password' onChange={formik.handleChange}/>
              <p className='text-danger'>{formik.errors.password}</p>

              <input type="text" name='age' className='form-control mb-2' placeholder='age' onChange={formik.handleChange}/>
              <p className='text-danger'>{formik.errors.age}</p>
              
  {flag?            <button type='submit' className='btn bgsec border-dark text-white col-12 '>SignUp</button>
  :            <button type='button' className='btn bgsec border-dark  col-12 '><i className='fa-solid fa-spinner fa-spin text-white'></i></button>
  }
  
              {dataError? <p className='text-danger'>{dataError}</p> :''}
            </form>
  </div>
  
  <div className='text-center pt-2 pb-4'><span className='text-muted pe-2'>Already a member?</span><Link to="/"  className='text-decoration-none '>LogIn</Link></div>
  
  
            </div>
          </div>
        </div>
      </div>  )
}
