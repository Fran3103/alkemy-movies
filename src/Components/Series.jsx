import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Series = () => {

   

    let token = localStorage.getItem('token')


    const[series, setSeries]= useState([])
    const keyApiSeries = 'https://api.themoviedb.org/3/discover/tv?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&page=1'

// solicito datos a la api y los guardo en el estado

    useEffect(() => {
        axios.get(keyApiSeries)
        .then(resp =>{
          const dataSeries = resp.data.results
          setSeries(dataSeries)
        })
      }, [])
 
      if(token===null){
        return <Navigate to='/'/>
      }
  return (
    // <div>
     
    //     {

    //       // genero el mapeo del estado

    //         series.map((serie) => {
    //           return(
    //             <div key={serie.id} className='m-3'>

    //               <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} />
    //               <h3>{serie.name}</h3>
    //               <p>{serie.overview}</p>
    //               <button ><Link to={`/detalleseries?Serie_id=${serie.id}`}>detalle </Link></button>
    //           </div>)
    //         })
    //       }
    // </div>
     <div className='  grid grid-cols-4 gap-5 mt-24  cursor-pointer relative m-auto max-w-6xl'>
     {
       // genero el mapeo del estado
       series.map((movie) => {
         return(
             <Link key={movie.id} to={`/detalle?Movie_id=${movie.id}`}>
           <div  className=' relative w-56 h-96 flex flex-col rounded-md mb-10 bg-cyan-950 hover:scale-105 duration-700  ease-in-out'>
            <div className='w-full h-60 rouded-r-sm'>
                 <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-full h-full rounded-t-md ' alt={movie.title} />
            </div>
             <h3 className='text-lg p-2 mb-0'>{movie.title}</h3>
             <div className='p-3 pl-2 h-20 mb-2 overflow-hidden'>
               <p >{movie.overview}</p>

             </div>
             

         </div>
     </Link>
         )
       })
     }
         <button className='absolute bottom-0 left-0' >Anterior</button>
         <button className='absolute bottom-0 right-9'>Siguien</button>
       <div className='w-full p-2   '>
       </div>
   </div>
  )
}

export default Series