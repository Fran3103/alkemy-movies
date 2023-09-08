// import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useFavContext, useAddorRemoveFav} from './AppProvider'
const Favoritos = () => {


  const favoritos = useFavContext()  

    let token = localStorage.getItem('token')
    const addOrRemove = useAddorRemoveFav()

    if(token===null){
        return <Navigate to='/'/>
      }


  return (
    <>
    
    
        
        <h2 className='text-5xl mt-12 text-center'>Favoritos</h2>
  
        {favoritos && 
          <div className='  grid grid-cols-4 gap-5 mt-24  cursor-pointer relative m-auto max-w-6xl'>
          { 
            // genero el mapeo del estado
            favoritos.map((movie) => {
              return(
                <div key={movie.id} className=' relative w-56 h-96 flex flex-col rounded-md mb-10 bg-cyan-950 hover:scale-105 duration-700  ease-in-out'>
                  <Link  to={`/detalle?Movie_id=${movie.id}`}>
                 <div className='w-full h-60 rouded-r-sm'>
                      <img src={movie.img} className='w-full h-full rounded-t-md ' alt={movie.title} />
                 </div>
          </Link>
                  <h3 className='text-lg p-2 mb-0'>{movie.title}</h3>
                  <div className='p-3 pl-2 h-20 mb-2 overflow-hidden'>
                    <p >{movie.overview}</p>

                  </div>
                  <button onClick={addOrRemove} data-select-id={movie.id} className={'absolute -top-8 z-0 w-8 h-16 rounded-t-md bg-black'}></button>

              </div>
              )
            })
          }
             
           
        </div>  } 
    </>
  )
}

export default Favoritos