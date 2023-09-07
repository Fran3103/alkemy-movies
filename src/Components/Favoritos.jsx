// import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Favoritos = ({addOrRemove, favoritos}) => {


    

    let token = localStorage.getItem('token')
   

    if(token===null){
        return <Navigate to='/'/>
      }


  return (
    <>
    
    
        
        <h1>Favoritos</h1>
    {/* <div>
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
        
        
        
        
    </div> */}
        
        <div className='  grid grid-cols-4 gap-5 mt-24  cursor-pointer relative m-auto max-w-6xl'>
          {
            // genero el mapeo del estado
            favoritos.map((movie) => {
              return(
                  <Link key={movie.id} to={`/detalle?Movie_id=${movie.id}`}>
                <div  className=' relative w-56 h-96 flex flex-col rounded-md mb-10 bg-cyan-950 hover:scale-105 duration-700  ease-in-out'>
                 <div className='w-full h-60 rouded-r-sm'>
                      <img src={movie.img} className='w-full h-full rounded-t-md ' alt={movie.title} />
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
             
           
        </div>
    </>
  )
}

export default Favoritos