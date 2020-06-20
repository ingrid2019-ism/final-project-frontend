import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FirstNavContainer, NavContent, NavStyleLink, StyledLink } from 'components/StyledComponents'


export const Navbar = () => {
  const numProducts = useSelector((store) => store.cart.items).length

  console.log(numProducts)

  return (
    <nav>
      <FirstNavContainer>

        <h1>
          <Link to='/'>Books 4 U</Link>
        </h1>
        {/*<ul>*/}
        <NavContent>
          <NavStyleLink>
            <StyledLink to='/contact'>Contact</StyledLink>
          </NavStyleLink>
          <NavStyleLink>
            <StyledLink to='/login'>Log in/Returning customer</StyledLink>
          </NavStyleLink>
          <NavStyleLink>
            <StyledLink to='/shoppingcart'><span role='img' aria-label='cart'>🛒{numProducts}</span></StyledLink>
          </NavStyleLink>
        </NavContent>
      </FirstNavContainer>
      <li>
        <StyledLink to='/books'>Books</StyledLink>
      </li>
      <li>
        <StyledLink to='/about'>About</StyledLink>
      </li>
      {/*</ul>*/}
    </nav>

  )
}