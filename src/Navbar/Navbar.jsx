import React from 'react'
import logo from '../assests/logo (1).png'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar({userData , logOut}) {
  console.log("navbarprop" , userData);
  return (

    <div >
        <nav className="navbar navbar-expand-lg  bgcolor shadow-lg">
  <div className="container">
<div className='col-2 '>
<img src={logo} alt="logo"  className='w-25'/>
    <a className="navbar-brand pt-3 text-white" >Game Over</a>
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {userData?  <>  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active text-white" aria-current="page" to='home'>Home</Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white"to='all' >All</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Platforms
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/platforms/'+"pc"} >Pc</Link></li>
            <li><Link className="dropdown-item" to={'/platforms/'+"browser"} >Browser</Link></li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          sort-by
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/sortby/'+"release-date"} >release-date</Link></li>
            <li><Link className="dropdown-item" to={'/sortby/'+"popularity"} >popularity</Link></li>
            <li><Link className="dropdown-item" to={'/sortby/'+"alphabetical"} >alphabetical</Link></li>
            <li><Link className="dropdown-item"  to={'/sortby/'+"relevance"}>relevance</Link></li>


          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/categories/'+"racing"}>racing</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"sports"}>sports</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"social"}>social</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"shooter"}>shooter</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"open-world"}>open-world</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"zombie"}>zombie</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"fantasy"}>fantasy</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"action-rpg"}>action-rpg</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"action"}>action</Link></li>
            <li><Link className="dropdown-item" to={'/categories/'+"battle-royale"}>battle-royale</Link></li>




          </ul>
        </li>

      </ul> 
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" onClick={logOut}>Log Out</Link>
            </li>

            </ul></>  
 :    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

 <li className="nav-item">
   <Link className="nav-link text-white" to='login' >LogIn</Link>
 </li>

 <li className="nav-item">
   <a className="nav-link text-white" >Join free</a>
 </li>
 </ul>}

      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to='home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white"to='all' >All</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Platforms
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='platform/pc' >Pc</Link></li>
            <li><a className="dropdown-item" >Browser</a></li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          sort-by
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" >release-date</a></li>
            <li><a className="dropdown-item" >popularity</a></li>
            <li><a className="dropdown-item" >alphabetical</a></li>
            <li><a className="dropdown-item" >relevance</a></li>


          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" >racing</a></li>
            <li><a className="dropdown-item" >sports</a></li>
            <li><a className="dropdown-item" >social</a></li>
            <li><a className="dropdown-item" >shooter</a></li>
            <li><a className="dropdown-item" >open-world</a></li>
            <li><a className="dropdown-item" >zombie</a></li>
            <li><a className="dropdown-item" >fantasy</a></li>
            <li><a className="dropdown-item" >action-rpg</a></li>
            <li><a className="dropdown-item" >action</a></li>
            <li><a className="dropdown-item" >battle-royale</a></li>




          </ul>
        </li>

      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page">Log Out</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" >LogIn</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" >Join free</a>
        </li>
        </ul> */}

    </div>
  </div>
</nav>
    </div>
  )
}
