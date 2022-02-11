import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className="container">
          <Link to="/" className='navbar-brand animate__animated animate__flipInX' style={{color:"#6f6"}}>Rick&Morty</Link>
          <Search/>
        </div>
    </nav>
  )
}

export default Navbar