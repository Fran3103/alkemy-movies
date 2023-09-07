import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate} from 'react-router-dom'




const Detalle = () => {

 

  let token = localStorage.getItem('token')


  const [detalle , setDetalle] = useState([])

  // obtengo los datos enviado a la url 

  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('Movie_id')
 

 
  
    
    const DetalleApi = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES`
    // genero la nueva solicitud a la api con esos datos obtenidos
    useEffect(() => {
      axios.get(DetalleApi)
        .then(resp =>{
            const detalle = resp.data
            setDetalle(detalle)
        })
    }, [DetalleApi])
    if(token===null){
      return <Navigate to='/'/>
    }
  
  return (
    <>
      
      <div>
        {/* mapeo los datos */}
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