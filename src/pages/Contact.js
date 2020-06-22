import React from 'react'
import { Navbar } from 'components/Navbar'
import { HeroImage, ProductCard } from 'components/StyledComponents'


export const Contact = () => {

  return (
    <div>
      <Navbar />
      <HeroImage>
        <div className='about'>
          <ProductCard
            title='Welcome To Contact Us'
            secondaryTitle='books4u@info.com'
          />
        </div>
      </HeroImage>
    </div>
  )
}