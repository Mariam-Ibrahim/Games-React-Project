import React, { useState } from 'react'
import GamesImg from '../assests/gaming.ebaf2ffc84f4451d.jpg'
import logo from '../assests/logo (1).png'
import './Login.css'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'


export default function Login(props) {
  console.log(props);
  let navigate=useNavigate()
  let [dataError,setError]=useState(null)
  let[flag,setFlag]=useState(true)

let validate = yup.object({
  email:yup.string().required().email("enter a valid email"),
  password:yup.string().required().matches(/^[A-Z][a-zA-Z0-9_@$]{7,15}$/, "enter a valid password")
})

let formik = useFormik ({
  initialValues:{
    email:"",
    password:""
  },
  onSubmit:(values)=>{
    loginApi(values)

  },
  validationSchema:validate
})
async function loginApi(loginData){
  setFlag(false)
let {data}= await axios.post("https://sticky-note-fe.vercel.app/signin" , loginData ).catch((x)=>{
  console.log(x.response.data.message);
  setError(x.response.data.message)
  setFlag(true)

})
console.log(data);

if (data.message=="success"){
  setFlag(true)
  props.NewFunc(data.token)
  navigate ('/all')
  let Mytoken= jwtDecode(data.token)
  console.log("my token" ,Mytoken);
  localStorage.setItem("token", Mytoken)

}
}

  return (
    <div className='bgcolor pb-5 '>
      <div className='container pb-5 mb-5'>
        <div className='row pt-5 g-0 pb-5 mb-5 align-items-strech'>
          <div className='col-lg-6 col-sm-12 col-md-6'>
            <img src={GamesImg} alt=""  className='w-100 h-100'/>
          </div>
          <div className='col-lg-6 col-sm-12 col-md-6 bgsec  '>
            <div className='col-2 mx-auto pt-5'>
              <img src={logo} alt="" className='w-100' />
              
            </div>
            <h2 className='text-center text-muted h4'>Log in to GameOver</h2>
<div className='d-flex justify-content-center align-items-center'>
<form className=' col-9  border-bottom pb-2' onSubmit={formik.handleSubmit}>
            <input type="email" name='email' className='form-control mb-2' placeholder='Email' onChange={formik.handleChange} />
            <p className='text-danger'>{formik.errors.email}</p>
            <input type="password" name='password' className='form-control mb-2' placeholder='Password' onChange={formik.handleChange}/>
            <p className='text-danger'>{formik.errors.password}</p>
{flag?            <button type='submit' className='btn bgsec border-dark text-white col-12 '>Login</button>
:            <button type='button' className='btn bgsec border-dark  col-12 '><i className='fa-solid fa-spinner fa-spin text-white'></i></button>
}

            {dataError? <p className='text-danger'>{dataError}</p> :''}
          </form>
</div>

  {/* <div className='text-center pt-4'><a href="" className='text-center text-decoration-none  h6'>Forgot Password?</a></div> */}
<div className='text-center pt-3 pb-5'><span className='text-muted pe-2'>Not a member yet?</span><Link to="register"  className='text-decoration-none '>create account</Link></div>


          </div>
        </div>
      </div>
    </div>
  )
}
