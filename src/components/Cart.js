import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'


export const Cart = () => {
  // TODO - fetch products from the cart store
  const products = useSelector((store) => store.cart.items)

  // TODO - calculate total from the sum of all products in the cart
  const totalPrice = 0

  return (
    <div>
      <span role='img' aria-label='cart'>🛒</span>
      <ul>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )

}