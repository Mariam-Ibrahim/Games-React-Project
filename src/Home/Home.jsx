import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
export default function Home() {
  return (
<div className='homecolbg'>
<div  className=' py-5 d-flex justify-content-center align-items-center Homebg border-dark' >
<div  >      <h2 className='text-muted'>Find & track the best <span className='text-info'>free-to-play</span> games!</h2>
      <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
      <div className='d-flex justify-content-center'><Link to='/all'><button className='btn btn-transparent text-muted border'>Browse Games</button></Link></div></div>
    </div>
</div>
  )
}
