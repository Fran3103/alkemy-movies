import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const DetalleSeries = () => {

    const [detalle , setDetalle] = useState([])

 // obtengo los datos enviado a la url 
    let query = new URLSearchParams(window.location.search)
    
    let seriesID = query.get('Serie_id')



    const DetalleSerie = `https://api.themoviedb.org/3/tv/${seriesID}?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES`


    // // busco los datos en la api y los muestro en el return
    useEffect(() => {
      axios.get(DetalleSerie)
      .then(resp =>{
        const detalle = resp.data
        setDetalle(detalle)
        console.log(detalle)
      })
      }, [DetalleSerie])
    console.log(detalle)

  return (
   
<>
  <div className='  flex gap-9 m-auto max-w-6xl pt-4  h-screen' >
    {/* reemplazo los datos los datos */}
    <img src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`} 
    alt={detalle.name} className='mt-6 h-100'/>
    <div className='flex flex-col h-screen'>
        <h1 className='text-5xl'><span className='text-lg'>Titulo</span> <br />{detalle.name}</h1>
        <h5 className='mt-3'>{detalle.type}</h5>
        <span className='text-lg  mt-7'>Resumen: </span> 
        <h4 className='text-xl mt-3 mb-2 ml-0  sm:text-2xl '>  {detalle.overview}</h4>
        <h4 className='text-2xl mt-3 mb-9 ml-0 '> Episodios {detalle.number_of_episodes}</h4>
    <div className='mt-24  flex flex-col'>
        <a href={detalle.homepage} target='blank' className='text-lg hover:text-cyan-600'>HOMEPAGE</a>
        <p className='mt-3'>Fecha de estreno:   { detalle.number_of_seasons}</p>
        <Link to='/series' className='mt-32 hover:text-slate-400' > 
                <p>Volver</p>
          </Link>
    </div>

    </div>
</div> 
    </>
  )
}

export default DetalleSeries