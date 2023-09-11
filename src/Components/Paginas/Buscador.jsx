import React, { useState } from 'react'
import { useBuscador } from './AppProvider'
import { BsSearch } from "react-icons/bs";
const Buscador = () => {

const buscar = useBuscador()

  const [active, setActive] = useState(false)

  const activar = ()=>{
    setActive(!active)
  }
    
  return (      



    <div className='  p-3  lg:mr-24 '>
        
        <form onSubmit={buscar} className=' relative' >
            <label >

                <input type="text" name='busqueda' className={`hover:text-blue-700  rounded-sm bg-transparent mr-2 p-1 pl-2 pr-1 text-black tracking-wider transition-all w-5  xl:h-10  duration-500 font-serif  ${active && ' xl:w-32 bg-slate-300 w-16'} `}/>
               <button type='submit'>

                  <i className=' absolute top-2 right-6 lg:text-2xl' onClick={activar}>{BsSearch()}</i>
               </button>
                  
            </label>
            
            {/* <button className='hover:text-blue-300  tracking-wider transition-all  font-serif  bg-red-500 rounded-md ' type='submit'>Q</button> */}
        </form>
    </div>
  )
}

export default Buscador