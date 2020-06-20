import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { cart } from 'reducers/cart'


export const Cart = () => {
  const products = useSelector((store) => store.cart.items)
  console.log(products)


  // calculate total from the sum of all products in the cart

  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))



  return (

    < div >
      <span role='img' aria-label='cart'>🛒</span>
      <ul>
        {products.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}

      </ul>
      <h3>Total:{totalPrice}:-</h3>
    </div >
  )

}

