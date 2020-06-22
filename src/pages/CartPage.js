import React from 'react'
import { Cart } from 'components/Cart'
import { Navbar } from 'components/Navbar'
import { HeroImage } from 'components/StyledComponents'


export const CartPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImage>
        <Cart />
      </HeroImage>
    </div>
  )
}