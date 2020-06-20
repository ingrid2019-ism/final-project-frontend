import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <li>
      <div>
        <h3>{product.title}</h3>
        <h3> x{product.quantity}</h3>
        <h3>{product.price * product.quantity}:-</h3>
      </div>
      <div>
        <button type='button' onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
        <button type='button' onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
      </div>
    </li >
  )

}