import React from 'react'
import { useDispatch } from 'react-redux'
import { ProductCard, Display, AddToCartButton } from 'components/StyledComponents'
import { cart } from 'reducers/cart'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <Display>
      <div className='margin'>
        <ProductCard
          title={product.title}
          secondaryText={product.price} />
      </div>
      <div className='cart-button'>
        <AddToCartButton
          type='button'
          //disabled={product.inventory === 0}
          onClick={() => dispatch(cart.actions.addItem(product))}>
          Add to cart
        </AddToCartButton>
      </div>
    </Display>
  )
}