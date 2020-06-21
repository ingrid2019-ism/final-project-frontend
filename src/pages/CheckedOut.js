import React from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from 'components/Navbar'
import { ProductCard } from 'components/StyledComponents'
import { cart } from 'reducers/cart'

export const CheckedOut = () => {
  const dispatch = useDispatch()
  dispatch(cart.actions.removeAll())
  return (
    <div>
      <Navbar />
      <div className='about'>
        <ProductCard
          title='Thank you for your purchase!'
        />
      </div>
    </div>
  )
}





