import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'


export const Product = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <h3>{product.title}:-</h3>

      <button
        type='button'
        //disabled={product.inventory === 0}
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Add to cart
          </button>
    </div >
  )
}