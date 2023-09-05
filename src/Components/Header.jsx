import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'> Inicio  </Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/lista'> Listado </Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/peliculas'> Peliculas  </Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/series'> Series  </Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/favoritos'> Favoritos  </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header