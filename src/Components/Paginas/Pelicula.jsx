import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate} from 'react-router-dom'
import { useAddorRemoveFav} from './AppProvider'

const Pelicula = () => {


 
    let token = localStorage.getItem('token')

     const addOrRemove = useAddorRemoveFav()
    
    const[movies, setMovies]= useState([])
    const[page, setPage]= useState(1)
   
    const siguiente = () =>{
      setPage(page + 1)
    }
    const anterior = () =>{
      if(page > 1){
        
        setPage(page - 1)
      }
    }
    const keyApiMovies = `https://api.themoviedb.org/3/discover/movie?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&page=${page}`
    
    useEffect(() => {
      
      
      axios.get(keyApiMovies)
      .then(response => {
        const data = response.data.results
        
        setMovies(data)
        
      })
      

      
    }, [keyApiMovies])
    
    if(token===null){
      return <Navigate to='/'/>
    }

  
    
  return (
    <>
         
          
         
        <div className=' 2xl:max-w-6xl  xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-lg grid md:grid-cols-4 grid-cols-3 gap-5 mt-24  relative m-auto bg-slate-100 p-4'>
          {
            // genero el mapeo del estado
            movies.map((movie) => {
              return(
                  <div key={movie.id}>

                <div  className='
                 2xl:w-56 xl:w-48 lg:w-48 md:w-36  sm:w-32 
                
                z-10 relative  h-96 flex flex-col rounded-md mb-10 bg-cyan-950 hover:scale-105 duration-700  ease-in-out'>
                 <div className='w-full h-60 rouded-r-sm '>
                     <Link to={`/detalle?Movie_id=${movie.id}`}>
                           <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-full h-full rounded-t-md ' alt={movie.title} />
                     </Link>
                      
                 </div>
                 
                  <h3 className='text-lg p-2 mb-0'>{movie.title}</h3>
                  <div className='p-3 pl-2 h-20 mb-2 overflow-hidden'>
                    <p >{movie.overview}</p>

                  </div>
                  

              <button onClick={addOrRemove} data-select-id={movie.id} className={'absolute -top-8 z-0 w-8 h-16 rounded-t-md bg-black'}></button>
              </div>
              </div>
                  
              )
            })
          }
              <button className={page===1 ? 'absolute bottom-0 left-0 text-gray-700 cursor-context-menu' : 'absolute bottom-0 left-0' } onClick={anterior}>Anterior</button>
              <button className='absolute bottom-0 right-9' onClick={siguiente} >Siguiente</button>
            <div className='w-full p-2   '>
            </div>
        </div>

    </>
  )

}

export default Pelicula