import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'



export const Products = () => {
  const allProducts = useSelector((state) => state.products.all)

  // TODO - fetch all products from the store
  //const allProducts = []

  return (
    <div>
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )

}