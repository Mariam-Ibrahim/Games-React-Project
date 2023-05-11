import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Platforms() {
  let {x}=useParams()
  let [myArray,setArray]=useState([])
  console.log(myArray , "my arrayyyy");


  console.log(x)
  useEffect((el)=>{
    getAll()
  },[  x   ])
  async function getAll(){


    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {platform: x},
      headers: {
        'X-RapidAPI-Key': '91b505f35emshbd8eef76ef94b37p1ecfa6jsn26ef5e49e232',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
  

  
      let response = await axios.request(options);

      console.log(response.data);
      setArray(response.data)
      console.log(myArray , "my array");

 

  }

  return (
    <div className='bgcolor'>
    {myArray?    <div className='container pt-5'>
        <div className='row g-4'>
        {myArray.map((el,i)=>{
          return           <div className="col-lg-3 col-md-6 col-sm-12  mycol clickonme"  id="selectmycol" key={i}>
                          <Link to={'/details/' + el.id} className='text-decoration-none'>

                          <div className="item card  cardbg outercard shadow-lg border-0 cardhov" >
            
                          <div className="card  cardbg w-100 border-0">
          <div >
            <img src={el.thumbnail} className="card-img-top " alt="..."/>
            <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
          <p className="card-text text-white text-muted h5 ">{el.title.split("").slice(0,15).join("")}</p>

          <button  className="btn btn-info px-2 py-1 text-white btn-xs ">FREE</button>
          {/* <p className="card-text text-white text-muted">{el.title}</p> */}

          </div>
          <p className="card-text text-white text-muted h6 ">{el.short_description.split("").slice(0,25).join("")}...</p>

              {/* <p className="card-text text-white text-muted">{el.title}</p> */}
            </div>
          </div>
          </div>
          <div className="d-flex justify-content-between p-2 ">
          <div><i className="fa-solid fa-square-plus text-muted px-2"></i></div>

          <div>
              <span className="text-dark fw-bold bg-secondary rounded px-3 fontweight smallfont">{el.genre}</span>
{el.platform=="PC (Windows)"?<i className="fa-brands fa-windows text-muted px-2"></i>:<i className="fa-solid fa-window-maximize text-muted px-2"></i>}
              </div>
          </div>
          </div>
          </Link>
                </div>

        })}




        </div>
      </div>
      
      

    :""}

  </div>  )
}
