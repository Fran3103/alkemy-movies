
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

function App() {


  const [token, setToken ]= useLocalStorage('token')

  
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/> }/>
          <Route element={<Protected active={token} redirectPath='/'/>}>
            <Route path='/lista' element={<Lista/>}/>
            <Route path='/peliculas' element={<Pelicula/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/favoritos' element={<Lista/>}/>
         

          </Route>
        </Routes>
        <Footer/>
  
    </div>
  );
}

export default App;
