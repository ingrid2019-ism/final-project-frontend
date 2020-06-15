import React from 'react'


export const Product = ({ product }) => {
  return (
  <div>
<h3>{product.price}:-</h3>

<button
type='button'
//disabled={product.inventory === 0}
onclick={() => { }}>
  Add to cart
  
</button>
  </div>
  )
}