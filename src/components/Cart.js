import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'



export const Cart = () => {
  const products = useSelector((store) => store.cart.items)
  // calculate total from the sum of all products in the cart

  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  if ((!products.length) == 0) {

    return (
      < div >
        <ul>
          {products.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
        </ul>
        <h3>Total:{totalPrice}:-</h3>
        <Link to='/checkout' color='#ffffff'>Checkout<span role='img' aria-label='moneyemoji'>💸</span></Link>
      </div >)
  } else {
    return (
      <h3>Your cart is empty. Let´s start shopping!</h3>
    )
  }
}

