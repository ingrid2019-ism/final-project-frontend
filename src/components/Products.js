import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Product } from './Product'
import { fetchProducts } from 'reducers/products'




export const Products = () => {
  const dispatch = useDispatch()
  //const fetchAll = dispatch(fetchProducts())
  const allProducts = useSelector((state) => state.products.all)

  // TODO - fetch all products from the store
  //const allProducts = []

  return (

    < div >
      {

        allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      }
    </div >
  )

}