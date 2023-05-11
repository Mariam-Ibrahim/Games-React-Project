import React, { useEffect, useState } from 'react'
import anyimg from '../assests/gaming.ebaf2ffc84f4451d.jpg'
import './Details.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




export default function Details() {

  let {x}=useParams()
  let [obj,setobj]=useState(null)
  let [objimg,setimg]=useState(null)
  let [overlay,setoverlay]=useState(null)

  console.log(obj , "my id");


  console.log(x)
  useEffect((el)=>{
    getAll()


  },[    ])


  async function getAll(){


    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: {id: x},
      headers: {
        'X-RapidAPI-Key': '91b505f35emshbd8eef76ef94b37p1ecfa6jsn26ef5e49e232',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
      let response = await axios.request(options);
      console.log(response.data);
      setobj(response.data)

   


 
  }



  
  return (

<div className='bgcolor'>
  {obj?<div className='container pt-5  '  >
      <div className='row g-3 ' >
        <div className='col-4'>
          <img src={obj.thumbnail} alt="" className='w-100 rounded' />
          <div className='d-flex justify-content-between pt-2'>
            <div><button className='btn btn-dark'>FREE</button></div>
            <div className='col-8 '> <Link to={obj.freetogame_profile_url}><button className='btn btn-info col-12 text-white fw-bold'>PLAY NOW<i className="fa-solid fa-arrow-right-from-bracket ps-2"></i></button></Link></div>

          </div>
        </div>
        <div className='col-8'>
          <h2 className='h2 fw-bold text-muted '>{obj.title}</h2>
          <h2 className='h4 text-muted'>About {obj.title}</h2>
          <p className='text-muted h6'>{obj.description}</p>
          {obj.minimum_system_requirements?<>          <h3 className='text-muted h5 pt-3 fw-bold'>Minimum System Requirements</h3>
          <div><span className='text-muted fw-bold'>graphics :</span><span className='text-muted ps-2'>{obj.minimum_system_requirements.graphics}</span></div>
          <div><span className='text-muted fw-bold'>memory :</span><span className='text-muted ps-2'>{obj.minimum_system_requirements.memory}</span></div>
          <div><span className='text-muted fw-bold'>os :</span><span className='text-muted ps-2'>{obj.minimum_system_requirements.os}</span></div>
          <div><span className='text-muted fw-bold'>processor : </span><span className='text-muted ps-2'>{obj.minimum_system_requirements.processor}</span></div>
          <div><span className='text-muted fw-bold'>storage : </span><span className='text-muted ps-2'>{obj.minimum_system_requirements.storage}</span></div></>:""}


          <OwlCarousel className='owl-theme mb-0 pb-0 pt-3' loop autoplay={true} dots={false} margin={10} items={1} nav>
            {obj.screenshots.map((el,i)=>{
              return      <div className='item' key={i}>
              <img src={el.image}></img>
          </div>
            })}
 
    </OwlCarousel>
    <h3 className='text-muted pb-3'>Additional information</h3>
    <div className='row g-4'>
      <div className='col-4' >
        <h4 className='text-muted h6 pb-0 mb-0'>Title</h4>
        <h4 className='text-white-50 h6'>{obj.title}</h4>
      </div>
      <div className='col-4' >
        <h4 className='text-muted h6 pb-0 mb-0'>Developer</h4>
        <h4 className='text-white-50 h6'>{obj.developer}</h4>
      </div>
      <div className='col-4' >
        <h4 className='text-muted h6 pb-0 mb-0'>Publisher</h4>
        <h4 className='text-white-50 h6'>{obj.publisher}</h4>
      </div>
      <div className='col-4' >
        <h4 className='text-muted h6 pb-0 mb-0'>Release Date</h4>
        <h4 className='text-white-50 h6'>{obj.release_date}</h4>
      </div>
      <div className='col-4' >
        <h4 className='text-muted h6 pb-0 mb-0'>Genre</h4>
        <h4 className='text-white-50 h6'>{obj.genre}</h4>
      </div>
      <div className='col-4' >
        <h4 className='text-muted h6 pb-0 mb-0'>Platform</h4>
        <h4 className='text-white-50 h6 pt-0 mt-0'>{obj.platform}</h4>
      </div>
    </div>

        </div>
      </div>
    </div>:''}

</div>
  )
}
