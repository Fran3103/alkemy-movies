import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


const Lista = ({addOrRemove}) => {

    
  

   // obtengo el token desde el localstorage

    let token = localStorage.getItem('token')
    const[movies, setMovies]= useState([])
    
    
    const keyApiMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&page=1'
    

  // solicito datos a la api para  mostrar las peliculas
    useEffect(() => {
      
     
      axios.get(keyApiMovies)
        .then(response => {
          const data = response.data.results
          setMovies(data)
         
        })

      
    }, [])
    
   
   
    if(token===null){
      return <Navigate to='/'/>
    }

  return (
    <>
 
        <div>
          <h1>lista</h1>

{/* 
          Mapeo el estado y muestro los datos de la api */}
          {
            movies.map((movie) => {
              return(
                <div key={movie.id}>

                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <button onClick={addOrRemove} data-select-id={movie.id} >favorito</button>
              </div>)
            })
          }
            
        </div>
       
    </>
  )
}

export default Lista