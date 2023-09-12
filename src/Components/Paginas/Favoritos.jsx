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
    
    
        
        <h2 className='text-5xl mt-24 md:mt-16 text-center'>Favoritos</h2>
  
        {favoritos && 
          <div className=' 2xl:max-w-6xl  xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl    mt-16  relative justify-center flex flex-wrap gap-3 md:gap-5 xl:gap-7 p-4 pt-8'>
          { 
            // genero el mapeo del estado
            favoritos.map((movie) => {
              return(
                <div key={movie.id} className='
                2xl:w-64 xl:w-56 lg:w-48 md:w-44  sm:w-40 w-36 h-84 
                
                relative   flex flex-col rounded-md mb-10 bg-cyan-950 hover:scale-105 duration-700  ease-in-out'>
                  <Link  to={`/detalle?Movie_id=${movie.id}`}>
                 <div className='w-full h-60 rouded-r-sm'>
                      <img src={movie.img} className='w-full h-full rounded-t-md ' alt={movie.title} />
                 </div>
          </Link>
                  <h3 className='text-lg p-2 mb-0'>{movie.title}</h3>
                  <div className='p-3 pl-2 h-20 mb-2 overflow-hidden'>
                    <p >{movie.overview}</p>

                  </div>
                  <button onClick={addOrRemove} data-select-id={movie.id} className={`absolute -top-8 z-0 w-8 h-16 rounded-t-md ${favoritos.favColor}`}></button>

              </div>
              )
            })
          }
             
           
        </div>  } 
    </>
  )
}

export default Favoritos