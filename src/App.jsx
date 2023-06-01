import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import Frame from './Frame/Frame'
import Home from './Home/Home'
import All from './All/All'
import Platforms from './Platforms/Platforms'
import Categories from './Categories/Categories'
import Sortby from './Sort-by/Sortby'
import Details from './Details/Details'
import Notfound from './Notfound/Notfound'


export default function App() {
let [userData,setUserData]=useState(null)

function changeStatus(newData){
  setUserData(newData)
}
useEffect(()=>{
if (localStorage.getItem("token")){
  setUserData(localStorage.getItem("token"))

}

},[])

function logOut(){
  localStorage.removeItem("token")
  setUserData(null)
  return <Navigate to='/' />
}
function ProtectedRouting(props){
  if(localStorage.getItem("token")){
    return props.children
  }
  else{
    return <Navigate to='/'/>
  }
}



  let routes = createBrowserRouter([
    {path:"",element: <Frame userData={userData} logOut={logOut} /> , children:[
  {index:true , element: <Login changeStatus={changeStatus}/>},
  {path:'register' , element :<Register/>},
  {path:'home' , element : <ProtectedRouting><Home/></ProtectedRouting>},
  {path:'all' , element :<ProtectedRouting><All/></ProtectedRouting> },
  {path:'platforms/:x' , element : <ProtectedRouting><Platforms/></ProtectedRouting>},
  {path:'categories/:x' , element : <ProtectedRouting><Categories/></ProtectedRouting>},
  {path:'sortby/:x' , element : <ProtectedRouting><Sortby/></ProtectedRouting>},
  {path:'details/:x' , element : <ProtectedRouting><Details/></ProtectedRouting>},
  {path:"*" , element :<Login/>}





    ]}
  ])
  return (
    <RouterProvider router={routes}/>
  )
}


