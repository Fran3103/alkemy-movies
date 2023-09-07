import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Series = () => {

    const history = useNavigate()

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
 
  return (
    <div>
      {!token  && history('/')}
        {

          // genero el mapeo del estado

            series.map((serie) => {
              return(
                <div key={serie.id}>

                  <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} />
                  <h3>{serie.name}</h3>
                  <p>{serie.overview}</p>
                  <button ><Link to={`/detalleseries?Serie_id=${serie.id}`}>detalle </Link></button>
              </div>)
            })
          }
    </div>
  )
}

export default Series