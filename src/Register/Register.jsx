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
    name:yup.string().required().min(2, 'minimum 2 characters').max(10,'max 10 characters'),
    email:yup.string().required().email(),
    password:yup.string().required().matches(/^[a-zA-Z0-9_@-]{8,20}$/,'at least 8 characters'),
    rePassword:yup.string().required().oneOf([yup.ref('password')],"doesn't match password"),
    phone:yup.string().required().matches(/^(010|011|012|015)[0-9]{8}$/,'Not a valid number')
  })
  
  let formik = useFormik ({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },
    onSubmit:(values)=>{
      loginApi(values)
  
    },
    validationSchema:validate
  })
  async function loginApi(loginData){
    setFlag(false)
  let {data}= await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup" , loginData ).catch((x)=>{
    // console.log(x);
    setError(x.response.data.message)
    setFlag(true)
  
  })
  // console.log(data);

  
  
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
  <input type="text" name='name' className='form-control mb-2' placeholder=' name' onChange={formik.handleChange} />
              <p className='text-danger'>{formik.errors.name}</p>



              <input type="email" name='email' className='form-control mb-2 ' placeholder='Email' onChange={formik.handleChange} />
              <p className='text-danger'>{formik.errors.email}</p>
              <input type="password" name='password' className='form-control mb-2' placeholder='Password' onChange={formik.handleChange}/>
              <p className='text-danger'>{formik.errors.password}</p>


              <input type="password" name='rePassword' className='form-control mb-2' placeholder='rePassword' onChange={formik.handleChange}/>
              <p className='text-danger'>{formik.errors.rePassword}</p>


              
              <input type="text" name='phone' className='form-control mb-2' placeholder='phone' onChange={formik.handleChange}/>
              <p className='text-danger'>{formik.errors.phone}</p>
              
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
