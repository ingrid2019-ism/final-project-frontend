import React from 'react'
import { useDispatch } from 'react-redux'
import { Products } from 'components/Products'
import { Navbar } from 'components/Navbar'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { fetchProducts } from 'reducers/products'

export const Books = () => {
  const dispatch = useDispatch()
  dispatch(fetchProducts())
  return (
    <div>
      {/*<Navbar sticky="top" />*/}
      <Navbar />
      <LoadingIndicator />
      <div className='book-cards'>
        <Products />
      </div>
    </div>
  )



}

