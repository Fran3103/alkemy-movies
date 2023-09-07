import React from 'react'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'

const Header = () => {
  return (
    <header className='flex max-w-full justify-between items-center mt-10 bg-slate-950 p-7 '> 
        <nav className='flex flex-row  text-zinc-50 gap-12' >
            <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                    <Link to='/'> Inicio  </Link>
                </li>
            </ul>
            {/* <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                    <Link to='/lista'> Listado </Link>
                </li>
            </ul> */}
            <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                    <Link to='/peliculas'> Peliculas  </Link>
                </li>
            </ul>
            <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                    <Link to='/series'> Series  </Link>
                </li>
            </ul>
            <ul>
                <li className='hover:text-blue-300  tracking-wider transition-all text-xl font-serif'>
                    <Link to='/favoritos'> Favoritos  </Link>
                </li>
              
            </ul>
        </nav>
        <Buscador/>
    </header>
  )
}

export default Header