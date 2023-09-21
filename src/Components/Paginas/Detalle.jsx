import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'





const Detalle = () => {

 



  const [detalle , setDetalle] = useState([])

  // obtengo los datos enviado a la url 

  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('Movie_id')
 
  console.log(query)
  console.log(movieID)
 
  
    
    const DetalleApi = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES`
    // genero la nueva solicitud a la api con esos datos obtenidos
    useEffect(() => {
      axios.get(DetalleApi)
        .then(resp =>{
            const detalle = resp.data
            setDetalle(detalle)
        })
    }, [DetalleApi])
  
  
  return (
    <>
    
      <div className='  flex gap-9 m-auto max-w-6xl pt-4 h-full relative  flex-col p-7 mt-10 lg:flex-row lg:p-2'  >
        {/* reemplazo los datos los datos */}
          <img src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`} alt={detalle.title} className='mt-6 h-100 max-w-md md:max-w-lg m-auto w-full rounded-md' />

          <div className='flex flex-col w-full relative text-center lg:text-left lg:mt-7' >
                <h1 className='text-2xl sm:text-3xl '><span className='text-lg'>Titulo</span> <br />{detalle.title }</h1>

                <h5 className='mt-3 text-lg italic'>{detalle.tagline}</h5>
                
                <span className='text-lg  mt-7 sm:text-xl '>Resumen: </span> 
                
                <h4 className='text-xl mt-3 mb-2 ml-0  sm:text-2xl '>  {detalle.overview}</h4>
              
              <div className='mt-4 '>
                <a href={detalle.homepage} target='blank' className='text-lg hover:text-cyan-600'>HOMEPAGE</a>
                <p className='mt-3'>Fecha de estreno:   { detalle.release_date}</p>
              </div>
          <Link to='/' className='mt-32 hover:text-slate-400' > 
                <p>Volver</p>
          </Link>
          </div>
    </div> 
    
    
    </>
  
  
  )
}

export default Detalle