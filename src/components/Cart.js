import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { RemoveButton } from 'components/RemoveAllButton'
import { Title, CheckoutLink, ProductCard } from 'components/StyledComponents'



export const Cart = () => {
  const products = useSelector((store) => store.cart.items)

  // calculate total from the sum of all products in the cart
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  if ((!products.length) === 0) {
    return (
      < div className='cart'>
        <div className='margin'>
          <RemoveButton />
        </div>
        <ul>
          {products.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
        </ul>
        <div className='margin'>
          <Title
            color='#ffffff'> Total: {totalPrice} :-</Title>
        </div>
        <div className='margin checkout-link'>
          <CheckoutLink to='/checkout' color='black'>Checkout<span role='img' aria-label='moneyemoji'>💸</span></CheckoutLink>
        </div>
      </div >)
  } else {
    return (
      <div className='about'>
        <ProductCard
          title='Your cart is empty. Let´s start shopping!'
        />
      </div>
    )
  }
}

