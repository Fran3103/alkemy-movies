
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Lista from './Components/Lista';
import Login from './Components/Login';
import {Routes, Route} from 'react-router-dom'
import Protected from './Components/Protected';
import { useLocalStorage } from 'react-use';



import Pelicula from './Components/Pelicula';
import Series from './Components/Series';
import Detalle from './Components/Detalle';
import DetalleSeries from './Components/DetalleSeries';
import Resultado from './Components/Resultado';
import Favoritos from './Components/Favoritos';
import { useEffect, useState } from 'react';

function App() {


  const [token, setToken ]= useLocalStorage('token')

  
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
      const favoritosArray = localStorage.getItem('secFavoritos')
      const arrayFav = JSON.parse(favoritosArray)
      setFavoritos(arrayFav)
  }, [])
  







  const addOrRemove = e => {
    const favoritos = localStorage.getItem('secFavoritos')
    
    let secFavs 
    
    if( favoritos === null ){
      secFavs = []
    } else{
      secFavs = JSON.parse(favoritos)
    }
    console.log(secFavs)
  
  
   
    const btn = e.currentTarget
    const parent = btn.parentElement    
    const title = parent.querySelector('h3').innerText
    const overview = parent.querySelector('p').innerText
    const img = parent.querySelector('img').getAttribute('src')
  
    const fav = {
      title, img, overview,
      id: btn.dataset['selectId']
    }

    let favArray = secFavs.find(movie =>{
      return movie.id === fav.id
    })
    if (!favArray){
      secFavs.push(fav)
      localStorage.setItem('secFavoritos', JSON.stringify(secFavs))
      setFavoritos(secFavs)
      console.log('se agrego a favoritos')
    } 
    
    else{
      let moviesselect = secFavs.filter(movie =>{
        return movie.id !== fav.id
      })
      localStorage.setItem('secFavoritos', JSON.stringify(moviesselect))
      setFavoritos(moviesselect)
      console.log('se elimino de favoritos')}

   
  }
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/> }/>
          <Route element={<Protected active={token} redirectPath='/'/>}>
            <Route path='/lista' element={<Lista addOrRemove={addOrRemove}/>}/>
            <Route path='/peliculas' element={<Pelicula/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='detalle' element={<Detalle/>}/>
            <Route path='detalleseries' element={<DetalleSeries/>}/>
            <Route path='/favoritos' element={<Favoritos favoritos={favoritos} addOrRemove={addOrRemove}/>}/>
            <Route path='/resultado' element={<Resultado/>}/>

          </Route>
        </Routes>
        <Footer/>
  
    </div>
  );
}

export default App;
