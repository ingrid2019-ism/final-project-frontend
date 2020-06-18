import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <nav>
      <h1>Books 4 U</h1>

      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
      </ul>
    </nav>
  )
}