import React from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from 'components/Navbar'
import { cart } from 'reducers/cart'

export const CheckedOut = () => {
  const dispatch = useDispatch()
  dispatch(cart.actions.removeAll())
  return (
    <div>
      <Navbar />
      <h3>Thank you for your purchase!</h3>
    </div>
  )
}





