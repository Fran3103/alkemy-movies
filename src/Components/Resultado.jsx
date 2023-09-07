import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate} from 'react-router-dom'

const Resultado = () => {


    const [result, setResult] = useState([])

 // obtengo los datos enviado a la url 

    let query = new URLSearchParams(window.location.search)
    let resultado = query.get('busqueda')
  
    const apiResultado = `https://api.themoviedb.org/3/search/movie?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&query=${resultado}`


    // busco los datos en la api
    useEffect(() => {
        axios.get(apiResultado)
          .then(resp =>{
              const detalle = resp.data.results
              setResult(detalle)
              
          })
      }, [apiResultado])


    let token = localStorage.getItem('token')


    if(token===null){
      return <Navigate to='/'/>
    }
  return (
    <> 
    <div><h2>Buscaste : {resultado} </h2>
    
        {
        // mapeo esos datos obtenidos
        result.map((movie) => {
            return( 
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h4>{movie.overview}</h4>
                <button ><Link to={`/detalle?Movie_id=${movie.id}`}>detalle </Link></button>

            </div>)})
        }
    
    
    </div>
    </>
  )
}

export default Resultado