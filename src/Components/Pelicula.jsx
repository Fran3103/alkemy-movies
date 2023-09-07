import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate} from 'react-router-dom'

const Pelicula = () => {


 
    let token = localStorage.getItem('token')


     

    const[movies, setMovies]= useState([])
    
    
    const keyApiMovies = `https://api.themoviedb.org/3/discover/movie?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&page=1`
    
  // solicito datos a la api para  mostrar las peliculas

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
         
          
         
        <div className='  grid grid-cols-4 gap-5 mt-24  cursor-pointer relative m-auto max-w-6xl'>
          {
            // genero el mapeo del estado
            movies.map((movie) => {
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

    </>
  )

}

export default Pelicula