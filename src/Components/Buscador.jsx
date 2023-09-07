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



    <div>
        <form onSubmit={buscar} >
            <label >

                <input type="text" name='busqueda' />
            </label>
            <button type='submit'>Buscar</button>
        </form>
    </div>
  )
}

export default Buscador