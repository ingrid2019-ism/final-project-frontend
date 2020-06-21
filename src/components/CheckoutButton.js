import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { AddToCartButton } from './Product'
import { CheckedOut } from 'pages/CheckedOut'
import { Link } from 'react-router-dom'








export const CheckoutButton = () => {
  const dispatch = useDispatch()


  return (

    <AddToCartButton
      type='submit'
      onClick={() => dispatch(cart.actions.removeAll())}>

      Checkout <span role='img' aria-label='moneyemoji'>💸</span>
    </AddToCartButton>
  )
}