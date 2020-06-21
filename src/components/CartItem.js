import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { ProductCard, SecondaryText, AddToCartButton } from 'components/StyledComponents'

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <main>
      <SecondaryText>{product.quantity} X </SecondaryText>
      <ProductCard
        title={product.title}
        secondaryText={product.price * product.quantity}
      />
      <div>
        <AddToCartButton onClick={() => dispatch(cart.actions.removeItem(product))}>-</AddToCartButton>
        <AddToCartButton onClick={() => dispatch(cart.actions.addItem(product))}>+</AddToCartButton>
      </div>
    </main>
  )

}