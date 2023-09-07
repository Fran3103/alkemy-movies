
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Lista from './Components/Lista';
import Login from './Components/Login';
import {Routes, Route} from 'react-router-dom'





import Pelicula from './Components/Pelicula';
import Series from './Components/Series';
import Detalle from './Components/Detalle';
import DetalleSeries from './Components/DetalleSeries';
import Resultado from './Components/Resultado';
import Favoritos from './Components/Favoritos';
import { useEffect, useState } from 'react';

function App() {

// Token para validar el protected
  const [token, setToken ]= useState('')

  console.log(token)
  useEffect(() => {
    const tokenTrue = localStorage.getItem('token')
  setToken(tokenTrue)
  }, [])
  

  // logica de seccion favoritos 
  const [favoritos, setFavoritos] = useState([])
// agarra el array del localstorage para mostrarlo en la seccion 
  useEffect(() => {
      const favoritosArray = localStorage.getItem('secFavoritos')
      const arrayFav = JSON.parse(favoritosArray)
      setFavoritos(arrayFav)
  }, [])
  




// funcion para añadir la seleccion al localstorage

  const addOrRemove = e => {
    const favoritos = localStorage.getItem('secFavoritos')
    
    let secFavs 
    
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
  
    // genero un objeto 
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
    
    } 
    

   // filtro para quitar del array 
    else{
      let moviesselect = secFavs.filter(movie =>{
        return movie.id !== fav.id
      })
      localStorage.setItem('secFavoritos', JSON.stringify(moviesselect))
      setFavoritos(moviesselect)
     }

   
  }
  return (

    <div className=" max-w-screen-xl m-auto ">

        
          <Header/>

   
        <Routes>
          <Route exact path='/' element={<Login/> }/>
          
            <Route path='/lista' element={<Lista addOrRemove={addOrRemove}/>}/>
            <Route path='/peliculas' element={<Pelicula/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='detalle' element={<Detalle/>}/>
            <Route path='detalleseries' element={<DetalleSeries/>}/>
            <Route path='/favoritos' element={<Favoritos favoritos={favoritos} addOrRemove={addOrRemove}/>}/>
            <Route path='/resultado' element={<Resultado/>}/>

         
        </Routes>
        <Footer/>
  
    
    </div>
  );
}

export default App;
