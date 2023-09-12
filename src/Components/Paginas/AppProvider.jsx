import React, {  useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const favContext = React.createContext()
const favColorContext = React.createContext()

const addorRemoveFav = React.createContext()

const buscador = React.createContext()

 export function useBuscador(){
  return useContext(buscador)
 }


export function useFavContext(){
    return useContext(favContext)
}

export function useFavColorContext(){
  return useContext(favColorContext)
}

export function useAddorRemoveFav(){
    return useContext(addorRemoveFav)
}




export function AppProvider  ({children}) {

// logica de seccion favoritos 
      const [favoritos, setFavoritos] = useState([])
      
    // veo si hay algo o no en el local y cambio el estado de favorito
      useEffect(() => {
        const favoritosArray = localStorage.getItem('secFavoritos')
        const arrayFav = JSON.parse(favoritosArray)
        setFavoritos(arrayFav)
    }, [])

//FUNCION DE AÑADIR Y ELIMAR FAVORITOS

    const addOrRemove = e => {
        // agarra el array del localstorage para mostrarlo en la seccion 
        const favoritos = localStorage.getItem('secFavoritos')
        
        let secFavs 
        // funcion para añadir la seleccion al localstorage
        if( favoritos === null ){
          secFavs = []
        } else{
          secFavs = JSON.parse(favoritos)
        }
    
      
      
      
       // obtengo el boton 
        const btn = e.currentTarget
        // obtengo el padre del boton y sus elementos
        const parent = btn.parentElement    
        const title = parent.querySelector('h3').innerText
        const overview = parent.querySelector('p').innerText
        const img = parent.querySelector('img').getAttribute('src')
     
      
      
        const fav = {
          title, img, overview,
          id: btn.dataset['selectId']
        }
    
        // busco ids iguales para agregar al array 
        
        let favArray = secFavs.find(movie =>{
          return movie.id === fav.id
        })
        if (!favArray){

          
          secFavs.push(fav)
          localStorage.setItem('secFavoritos', JSON.stringify(secFavs))
          setFavoritos(secFavs)
          
          btn.classList.add('bg-red-600')
        } 
        
    
       // filtro para quitar del array 
        else{
          const favColor = false
          let fav = {
            title, img, overview,favColor,
            id: btn.dataset['selectId']
            
          }
          secFavs.push(fav)
          btn.classList.add('bg-gray-600')
          let moviesselect = secFavs.filter(movie =>{
            return movie.id !== fav.id;
            
          })
         
          localStorage.setItem('secFavoritos', JSON.stringify(moviesselect))
          setFavoritos(moviesselect)
          
         }
    
       
      }

// LOGICA DE BUSCADOR

      const history = useNavigate()
// FUNCION DE BUSCADOR

      const buscar = (e) =>{
        e.preventDefault()
        
        const busqueda = e.target.busqueda.value.trim()

        if(busqueda.length === 0 ){
            console.log('ingrese una palabra')
            return
        }
        if(busqueda.length < 3 ){
            console.log('ingrese una palabra mayor a 3 caracteres')
            return
        }

        else{

          e.target.busqueda.value=''
          history(`/resultado?busqueda=${busqueda}`)
          
        }
    }


      return (
        <favContext.Provider value={favoritos}>
         
            <addorRemoveFav.Provider value={addOrRemove}>
              <buscador.Provider value={buscar}>
                {children}
              </buscador.Provider>
            </addorRemoveFav.Provider>
          
        </favContext.Provider>
      )
}
