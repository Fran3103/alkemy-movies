// import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Favoritos = ({addOrRemove, favoritos}) => {


    

    let token = localStorage.getItem('token')
   

    if(token===null){
        return <Navigate to='/'/>
      }


  return (
    <>
    
    
        
    <div>
        <h1>Favoritos</h1>
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
        
    </>
  )
}

export default Favoritos