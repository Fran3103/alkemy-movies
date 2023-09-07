import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buscador = () => {

    const history = useNavigate()


// obtengo los datos del evento en el buscador y valido el submit redireccionando hacia el componente resultado
    const buscar = (e) =>{
        e.preventDefault()
        
        const busqueda = e.target.busqueda.value

        if(busqueda.length === 0 ){
            console.log('ingrese una palabra')
            return
        }
        if(busqueda.length < 3 ){
            console.log('ingrese una palabra mayor a 3 caracteres')
            return
        }

        history(`/resultado?busqueda=${busqueda}`)
    }
  return (



    <div className=' w-96 text-white p-3 shadow-outline '>
        <form onSubmit={buscar} >
            <label >

                <input type="text" name='busqueda' className='hover:text-blue-300 rounded-sm shadow tracking-wider transition-all text-xl font-serif'/>
            </label>
            <button className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif ml-5 ' type='submit'>Buscar</button>
        </form>
    </div>
  )
}

export default Buscador