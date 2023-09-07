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
         
          
         
        <div>
          {
        // genero el mapeo del estado
            movies.map((movie) => {
              return(
                <div key={movie.id}>

                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <h3 className='text-8xl'>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <button ><Link to={`/detalle?Movie_id=${movie.id}`}>detalle </Link></button>

              </div>)
            })
          }
            
        </div>

    </>
  )

}

export default Pelicula