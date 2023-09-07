import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DetalleSeries = () => {

    const [detalle , setDetalle] = useState([])


    let query = new URLSearchParams(window.location.search)
    
    let seriesID = query.get('Serie_id')
    const DetalleSerie = `https://api.themoviedb.org/3/tv/${seriesID}?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES`


    useEffect(() => {
        axios.get(DetalleSerie)
          .then(resp =>{
              const detalle = resp.data
              setDetalle(detalle)
          })
      }, [DetalleSerie])
      


  return (
    <div>
        <h1>{detalle.name}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`} alt={detalle.name} />
      <h4>{detalle.number_of_episodes}</h4>
      <a href={detalle.homepage} target='blank'>homepage</a>
      <h5>{detalle.number_of_seasons}</h5>
      <p>{detalle.type}</p>
    </div>
  )
}

export default DetalleSeries