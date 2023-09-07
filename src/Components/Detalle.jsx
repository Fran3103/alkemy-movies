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
    
      <div className='  flex gap-9 m-auto max-w-6xl pt-4 h-full ' >
        {/* reemplazo los datos los datos */}
      <img src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`} alt={detalle.title} className='mt-6 h-100'/>
     <div className='flex flex-col w-full relative'>
          <h1 className='text-5xl'><span className='text-lg'>Titulo</span> <br />{detalle.title }</h1>
          <h5 className='mt-3'>{detalle.tagline}</h5>
          <span className='text-lg  mt-7'>Resumen: </span> 
          <h4 className='text-2xl mt-3 mb-9 ml-0 '>  {detalle.overview}</h4>
         <div className='mt-24 absolute bottom-0'>
          <a href={detalle.homepage} target='blank' className='text-lg hover:text-cyan-600'>HOMEPAGE</a>
          <p className='mt-3'>Fecha de estreno:   { detalle.release_date}</p>
         </div>

     </div>
    </div> 
    
    
    </>
  
  
  )
}

export default Detalle