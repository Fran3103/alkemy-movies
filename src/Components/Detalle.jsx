import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Detalle = () => {

  const history = useNavigate()

  let token = localStorage.getItem('token')


  const [detalle , setDetalle] = useState([])


  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('Movie_id')
 

  console.log(movieID)
  
    
    const DetalleApi = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES`
    
    useEffect(() => {
      axios.get(DetalleApi)
        .then(resp =>{
            const detalle = resp.data
            setDetalle(detalle)
        })
    }, [DetalleApi])

  
  return (
    <>
      {!token  && history('/')}
      <div>
      <h1>{detalle.title }</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`} alt={detalle.title} />
      <h4>{detalle.overview}</h4>
      <a href={detalle.homepage} target='blank'>homepage</a>
      <h5>{detalle.tagline}</h5>
      <p>{detalle.release_date}</p>

    </div> 

    
    
    
    
    </>
  )
}

export default Detalle