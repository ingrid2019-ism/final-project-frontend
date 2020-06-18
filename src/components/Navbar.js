import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FetchProductsButton } from 'components/FetchProductsButton'

export const Navbar = () => {

  return (
    <nav>
      <h1>
        <Link to='/'>Books 4 U</Link>
      </h1>
      <ul>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Log in/Returning customer</NavLink>
        </li>
        <li>
          <NavLink to='/shoppingcart'><span role='img' aria-label='cart'>🛒</span></NavLink>
        </li>
        <li>
          <NavLink to='/books'>Books</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}