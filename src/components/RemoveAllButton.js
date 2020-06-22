import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { AddToCartButton } from 'components/StyledComponents'

export const RemoveButton = () => {
  const dispatch = useDispatch()

  return (
    <AddToCartButton
      type='button'
      onClick={() => dispatch(cart.actions.removeAll())}>
      Clear <span role='img' aria-label='cart'>🛒</span>
    </AddToCartButton>
  )
}