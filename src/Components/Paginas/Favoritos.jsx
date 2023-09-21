// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFavContext, useAddorRemoveFav} from './AppProvider'
import {AiFillHeart } from 'react-icons/ai'
import { useEffect, useState } from 'react'




const Favoritos = () => {


  const favoritos = useFavContext()  
const[hayFa, setHayFa]= useState(false)

    const addOrRemove = useAddorRemoveFav()

const valido = favoritos


useEffect(()=>{
  if(valido.length=== 0){
    setHayFa(true)
  }
},[valido])
 


   console.log(favoritos)
  console.log(hayFa)

      return (
        <>
        
    
    
        
        <h2 className='m-auto text-xl sm:text-3xl  md:text-5xl md:mt-12 mt-24  text-center '>Favoritos</h2>
        

      

        <h2 className={hayFa ?   'text-5xl mt-32 md:mt-28 text-center' : 'hidden'}>Sin Favoritos Agregrados</h2>
       
      
          <div className=' 2xl:max-w-6xl  xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl    mt-4  relative justify-center flex flex-wrap gap-3 md:gap-5 xl:gap-7 p-4 pt-8'>
          { 
            // genero el mapeo del estado
            favoritos?.map((movie) => {
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
                  
                  <button  id={movie.id} onClick={addOrRemove} data-select-id={movie.id} className={  
                      
                      'absolute top-2 text-2xl right-2 pl-1 pt-0 z-0 w-8 h-8 rounded-full m-auto text-red-500'}>{ AiFillHeart()} </button>

              </div>
              )
            })
          }
             
           
        </div>  
    </>
  )
}

export default Favoritos