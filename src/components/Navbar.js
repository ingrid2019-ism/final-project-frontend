import React from 'react'
import { useSelector } from 'react-redux'
import { FirstNavContainer, SecondaryNavContainer, NavContent, NameLogo, HomeLink, StyledLink, SecondaryStyledLink } from 'components/StyledComponents'

export const Navbar = () => {
  const numProducts = useSelector((store) => store.cart.items).length

  return (
    <nav>
      <FirstNavContainer>
        <NameLogo>
          <HomeLink to='/' color='#ffffff'>Books 4 U</HomeLink>
        </NameLogo>
        <NavContent>
          <li>
            <StyledLink to='/contact' color='#ffffff'>Contact</StyledLink>
          </li>
          <li>
            <StyledLink to='/signup' color='#ffffff'>Sign Up</StyledLink>
          </li>
          <li>
            <StyledLink to='/shoppingcart' color='#ffffff'><span className='cart-icon' role='img' aria-label='shoppingcart'>🛒{numProducts}</span></StyledLink>
          </li>
        </NavContent>
      </FirstNavContainer>
      <SecondaryNavContainer>
        <SecondaryStyledLink to='/books' color='black'>Books</SecondaryStyledLink>
        <SecondaryStyledLink to='/about' color='black'>About</SecondaryStyledLink>
      </SecondaryNavContainer>
    </nav>
  )
}