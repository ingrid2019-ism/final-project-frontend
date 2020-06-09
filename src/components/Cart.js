import React from 'react'
import { CartItem } from './CartItem'


export const Cart = () => {
  // TODO - fetch products from the cart store
  const books = []

  // TODO - calculate total from the sum of all products in the cart
  const totalPrice = 0

  return (
    <div>
      <span role='img' aria-label='cart'>🛒</span>
      <ul>
        {books.map((book) => (
          <CartItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  )

}