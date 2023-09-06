import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pelicula = () => {

    const[movies, setMovies]= useState([])
    
    
    const keyApiMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&page=1'
    


    useEffect(() => {
      
     
      axios.get(keyApiMovies)
        .then(response => {
          const data = response.data.results
          setMovies(data)
         
        })

      
    }, [])
    
    
    

   
  

  return (
    <>

        <div>

          {
            movies.map((movie) => {
              return(
                <div key={movie.id}>

                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>

              </div>)
            })
          }
            
        </div>
       
    </>
  )
}


export default Pelicula