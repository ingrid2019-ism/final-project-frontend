import React from 'react'

export const CartItem = ({ product }) => {
  return (
    <li>
      <div>
        {product.title}
        x{product.quantity}
        {/*{product.price * product.quantity}:-*/}
      </div>
      <div>
        <button type='button' onclick={() => { }}>-</button>
        <button type='button' onclick={() => { }}>+</button>
      </div>
    </li>
  )

}