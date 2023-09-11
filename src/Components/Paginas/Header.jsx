import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";
const Header = () => {

    const[display, setDisplay] = useState(false)


    const cambiarDisplay = ()=>{
        setDisplay(!display)
    }


  return (
    <>
    <header className='hidden md:flex max-w-full justify-between items-center mt-4 p-7 m-auto  '> 
        <nav className='flex-row md:max-w-full text-zinc-50 gap-4 lg:gap-7  hidden md:flex' >
            <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif lg:text-2xl'>
                    <Link to='/'> Inicio  </Link>
                </li>
            </ul>
         
            <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif lg:text-2xl '>
                    <Link to='/peliculas'  > Peliculas  </Link>
                </li>
            </ul>
            <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif lg:text-2xl'>
                    <Link to='/series'> Series  </Link>
                </li>
            </ul>
            <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif lg:text-2xl'>
                    <Link to='/favoritos'> Favoritos  </Link>
                </li>
              
            </ul>
        </nav> 
      
     
       
           
        <Buscador/>
    </header> 
    <div className=" fixed z-10 top-0 left-0 bg-blue-300  justify-between items-center  w-screen md:hidden flex ">
       <div className='flex  justify-between w-4/5 m-auto'>
            <button className='text-3xl ml-3 p-3 hover:text-gray-800' onClick={cambiarDisplay}>{ IoIosMenu()}</button>
                <div onClick={cambiarDisplay} className={`${!display && 'hidden'} bg-gray-100/30 duration-700 md:hidden min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}>

                </div>
                <Buscador/>
       </div>


        <nav className={`${display ? 'w-72' : 'w-0' } bg-black min-h-screen fixed top-0 left-0  duration-700 `} >
            <div className={`${!display && 'hidden'} pl-12 mt-32 flex flex-col gap-12`}>
                <ul>
                    <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                        <Link to='/' onClick={cambiarDisplay}> Inicio  </Link>
                    </li>
                </ul>

                <ul>
                    <li  className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                        <Link to='/lista' onClick={cambiarDisplay}> Listado </Link>
                    </li>
                </ul>

                <ul>
                    <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif  '>
                        <Link to='/peliculas' onClick={cambiarDisplay} > Peliculas  </Link>
                    </li>
                </ul>

                <ul>
                    <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                        <Link to='/series' onClick={cambiarDisplay}> Series  </Link>
                    </li>
                </ul>

                <ul>
                    <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                        <Link to='/favoritos' onClick={cambiarDisplay}> Favoritos  </Link>
                    </li>
                    
                </ul>
                
            </div>
            <button onClick={cambiarDisplay} className='absolute top-8 right-12 text-3xl hover:text-gray-500'>{IoIosCloseCircleOutline()}</button>
        </nav>

       
    </div>
    </>
  )
}

export default Header