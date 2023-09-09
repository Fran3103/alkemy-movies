
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Pelicula, Series, Detalle ,DetalleSeries ,Resultado ,Favoritos ,Footer ,Header ,Lista ,Login } from './Pages'
import { AppProvider } from './Components/Paginas/AppProvider';

function App() {

  return (

    <AppProvider>

    <div className=" 2xl:max-w-6xl  xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-lg m-auto ">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/> }/>
          <Route path='/lista' element={<Lista />}/>
          <Route path='/peliculas' element={<Pelicula />}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='detalle' element={<Detalle/>}/>
          <Route path='detalleseries' element={<DetalleSeries/>}/>
          <Route path='/favoritos' element={<Favoritos />}/>
        <Route path='/resultado' element={<Resultado/>}/>
        </Routes>
        <Footer/>
    </div>
    </AppProvider>
  );
}

export default App;
