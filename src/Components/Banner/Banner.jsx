import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageurl} from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => { 
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results.sort((a, b)=> { return 0.5 - Math.random() })[0])
    })
  }, [])
  
  return (
    <div style={{backgroundImage : `url(${movie ? imageurl+movie.backdrop_path : ""})` }} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name ||movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h2 className='description'>{movie ? movie.overview:""}</h2>
        </div>
        <div className="fade-bottom"></div>
    </div>
  ) 
}

export default Banner
