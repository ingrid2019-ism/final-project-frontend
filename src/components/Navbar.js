import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { CartItem } from 'components/CartItem'


export const Navbar = () => {
  const numProducts = useSelector((store) => store.cart.items).length

  console.log(numProducts)

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
          <NavLink to='/shoppingcart'><span role='img' aria-label='cart'>🛒{numProducts}</span></NavLink>
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