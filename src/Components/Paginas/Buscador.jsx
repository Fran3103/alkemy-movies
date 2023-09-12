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



    <div className='  mt-3  w-40 relative h-10 md:mt-0' >
        
        <form onSubmit={buscar} className=' flex items-center absolute right-6 top-0'  >
            <label >

                <input type="text" name='busqueda' className={`hover:text-blue-700  rounded-sm bg-transparent mr-2 p-1 pl-2 pr-1 text-black tracking-wider transition-all w-5  xl:h-10  duration-500 font-serif  ${active && ' w-28 md:w-44  bg-white/50 '} `}/>
               
            </label>
            <button type='submit ' className='absolute -right-5 md:-right-7 cursor-pointer'>

              <i className=' lg:text-2xl ' onClick={activar}>{BsSearch()}</i>
                  
            </button>
                  
            {/* <button className='hover:text-blue-300  tracking-wider transition-all  font-serif  bg-red-500 rounded-md ' type='submit'>Q</button> */}
        </form>
    </div>
  )
}

export default Buscador