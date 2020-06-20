import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'reducers/products'
import { Products } from './Products'
import { AddToCartButton } from './Product'

export const FetchProductButton = () => {
  const dispatch = useDispatch()



  return (

    <AddToCartButton type='button' onClick={() => dispatch(fetchProducts())}>
      See All Our Books!
    </AddToCartButton>
  )
}