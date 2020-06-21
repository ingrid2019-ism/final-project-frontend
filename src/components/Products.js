import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  const allProducts = useSelector((state) => state.products.all)
  return (
    < div >
      {allProducts.map((product) => (
        <Product key={product._id} product={product} />
      ))
      }
    </div >
  )
}