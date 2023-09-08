import React from 'react'
import { useBuscador } from './AppProvider'

const Buscador = () => {

const buscar = useBuscador()
    
  return (



    <div className=' w-96 text-white p-3 shadow-outline '>
        
        <form onSubmit={buscar} >
            <label >

                <input type="text" name='busqueda' className='hover:text-blue-300 rounded-sm shadow text-black tracking-wider transition-all text-xl font-serif pl-3 p-1'/>
            </label>
            <button className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif ml-5 ' type='submit'>Buscar</button>
        </form>
    </div>
  )
}

export default Buscador