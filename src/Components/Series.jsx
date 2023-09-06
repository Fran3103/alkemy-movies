import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Series = () => {
    const[series, setSeries]= useState([])
    const keyApiSeries = 'https://api.themoviedb.org/3/discover/tv?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&page=1'

    useEffect(() => {
        axios.get(keyApiSeries)
        .then(resp =>{
          const dataSeries = resp.data.results
          setSeries(dataSeries)
        })
      }, [])
 
  return (
    <div>
        {
            series.map((serie) => {
              return(
                <div key={serie.id}>

                  <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} />
                  <h3>{serie.name}</h3>
                  <p>{serie.overview}</p>

              </div>)
            })
          }
    </div>
  )
}

export default Series