import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAddorRemoveFav} from './AppProvider'
import { AiOutlineHeart } from 'react-icons/ai'

const Series = () => {

   

    let token = localStorage.getItem('token')
    const addOrRemove = useAddorRemoveFav()

    const[series, setSeries]= useState([])
    const[page, setPage]= useState(1)
   
    const siguiente = () =>{
      setPage(page + 1)
    }
    const anterior = () =>{
      if(page > 1){
        
        setPage(page - 1)
      }
    }
    const keyApiSeries = `https://api.themoviedb.org/3/discover/tv?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&page=${page}`

// solicito datos a la api y los guardo en el estado



    useEffect(() => {
        axios.get(keyApiSeries)
        .then(resp =>{
          const dataSeries = resp.data.results
          setSeries(dataSeries)
        
        })
        .catch(console.error)
      }, [keyApiSeries])



 
      if(token===null){
        return <Navigate to='/'/>
      }




  return (
   <>
      <h2 className='m-auto text-xl sm:text-3xl md:text-5xl md:mt-12 mt-24  text-center '>Series</h2>
     <div className=' 2xl:max-w-6xl  xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl    mt-4  relative justify-center flex flex-wrap gap-3 md:gap-5 xl:gap-7 p-4 pt-8'>
     {
       // genero el mapeo del estado
       series.map((movie) => {
         return(
           <div  key={movie.id}  className='
           2xl:w-64 xl:w-56 lg:w-48 md:w-44  sm:w-40 w-36 h-84 
           
           relative   flex flex-col rounded-md mb-10 bg-cyan-950 hover:scale-105 duration-700  ease-in-out'>
            <Link  to={`/detalleSeries?Serie_id=${movie.id}`}>
                <div className='w-full h-60 rouded-r-sm'>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-full h-full rounded-t-md ' alt={movie.title} />
               </div>
            </Link>
           <h3 className='text-lg p-2 mb-0'>{movie.name || 'Sin Titulo'}</h3>
            <div className='p-3 pl-2 h-20 mb-2 overflow-hidden'>
               <p >{movie.overview || 'Sin Resumen'}</p>
              
            </div>
             
            
            <button  id={movie.id} onClick={addOrRemove} data-select-id={movie.id} className={  
                      
                      'absolute top-2 text-2xl right-2 pl-1 pt-0 z-0 w-8 h-8 rounded-full m-auto'}>{ AiOutlineHeart()} </button>
         </div>
         )
        })
      }
         <button className={page===1 ? 'absolute bottom-0 left-0 text-gray-700 cursor-context-menu' : 'absolute bottom-0 left-0' } onClick={anterior}>Anterior</button>
         <button className='absolute bottom-0 right-9' onClick={siguiente}> Siguiente</button>
       <div className='w-full p-2   '>
       </div>
   </div>
      </>
  )
}

export default Series