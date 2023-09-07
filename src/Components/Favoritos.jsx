// import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Favoritos = ({addOrRemove, favoritos}) => {


    const history = useNavigate()

    let token = localStorage.getItem('token')
   

  return (
    <> {!token  && history('/')}
    {
        favoritos && 
    <div>
        <h1>gola</h1>
        {
        
        
        //mapeo los datos que vienen desde el localstorage en el estado favoritos
        favoritos.map((fav) => {
            return(
                <div key={fav.id}>
                    <h3>{fav.title}</h3>
                    <img src={fav.img} alt={fav.title} />
                    <p>{fav.overview}</p>

                    <button onClick={addOrRemove} data-select-id={fav.id} >favorito</button>
                </div>
            )
        })}
        
        
        
        
        </div>
        }
    </>
  )
}

export default Favoritos