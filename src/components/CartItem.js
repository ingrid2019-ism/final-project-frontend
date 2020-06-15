import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <li>
      <div>
        {product.title}
        x{product.quantity}
        {/*{product.price * product.quantity}:-*/}
      </div>
      <div>
        <button type='button' onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
        <button type='button' onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
      </div>
    </li >
  )

}