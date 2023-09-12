import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate} from 'react-router-dom'
import { useAddorRemoveFav } from './AppProvider'
import { AiOutlineHeart} from "react-icons/ai";
const Resultado = () => {
  
  
  const [result, setResult] = useState([])
  const[cantPages, setCantPages]= useState()
    const[busquedaTotal, setBusquedaTotal]= useState()
    
    // obtengo los datos enviado a la url 

    let query = new URLSearchParams(window.location.search)
    let resultado = query.get('busqueda')

    const addOrRemove = useAddorRemoveFav()
    
    //contador de paginas
    const siguiente = () =>{
      if(page !== cantPages ){
        
        setPage(page + 1)
      }
      
    }
    const anterior = () =>{
      if(page > 1){
        
        setPage(page - 1)
      }
    }
    
    
    const[page, setPage]= useState(1)
    
    
    const apiResultado = `https://api.themoviedb.org/3/search/movie?api_key=8e254443314af3e06e27dca5a351812e&language=es-ES&query=${resultado}&page=${page}`
    
    // busco los datos en la api
    useEffect(() => {
    axios.get(apiResultado)
    .then(resp =>{
              const detalle = resp.data.results
              const pages = resp.data.total_pages
              const totalResult = resp.data.total_results
            
              setResult(detalle)
              setBusquedaTotal(totalResult)
              setCantPages(pages)
          }
              
          )
         
      },[apiResultado,result])


    let token = localStorage.getItem('token')


    if(token===null){
      return <Navigate to='/'/>
    }
  return (
    <> 
    <div><h2 className='text-5xl mt-12 text-left ml-12'>{busquedaTotal} Resultados  para  :   {resultado}</h2>
    
        { 
          // mapeo esos datos obtenidos
          
          <div className='   2xl:max-w-6xl  xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl    mt-24  relative justify-center flex flex-wrap gap-3 md:gap-5 xl:gap-7 p-4 pt-8'>
          {
            // genero el mapeo del estado
            result.map((movie) => {
              return(
                <div key={movie.id} className=' relative w-56 h-96 flex flex-col rounded-md mb-10 bg-cyan-950 hover:scale-105 duration-700  ease-in-out'>
                  <Link  to={`/detalle?Movie_id=${movie.id}`}>
                 <div className='w-full h-60 rouded-r-sm'>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-full h-full rounded-t-md ' alt={movie.title} />
                 </div>
                  </Link>
                  <h3 className='text-lg p-2 mb-0'>{movie.title}</h3>
                  <div className='p-3 pl-2 h-20 mb-2 overflow-hidden'>
                    <p >{movie.overview}</p>

                  </div>


                  <button  id={movie.id} onClick={addOrRemove} data-select-id={movie.id} className={  
                      
                      'absolute top-2 text-2xl right-2 pl-1 pt-0 z-0 w-8 h-8 rounded-full m-auto'}>{ AiOutlineHeart()} </button>

              </div>
              )
            })
          }
          
              <button className={page===1 ? 'absolute bottom-0 left-0 text-gray-700 cursor-context-menu' : 'absolute bottom-0 left-0' } onClick={anterior} >Anterior</button>
              <button className={page===cantPages ? 'absolute bottom-0 right-0 text-gray-700 cursor-context-menu' : 'absolute bottom-0 right-0' }onClick={siguiente}>Siguiente</button>
            <div className='w-full p-2   '>
            </div>
        </div>
    
        }
    </div>
    </>
  )
}

export default Resultado