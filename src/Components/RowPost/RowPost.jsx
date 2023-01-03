import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { imageurl, API_KEY } from '../../constants/constants'
import "./RowPost.css"
import YouTube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [video, setVideo] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data)
      setMovies(response.data.results)
    }).catch((err) => {
      alert("Network error")
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const videoHandler = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setVideo(response.data.results[0])
      } else {
        console.log("Array empty")
      }
    })
  }

  return (
    <div className='row'>
      <h2 className='rshow'>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img onClick={() => videoHandler(obj.id)} className='poster' src={`${imageurl + obj.backdrop_path}`} alt="poster" />
        )}
      </div>
      {video && <YouTube opts={opts} videoId={video.key} />} {/*disable this line to remove youtube feature*/}
    </div>
  )
}

export default RowPost