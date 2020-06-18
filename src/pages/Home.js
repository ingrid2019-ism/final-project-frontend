import React from 'react'

import { LoadingIndicator } from 'components/LoadingIndicator'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
import { FetchProductButton } from 'components/FetchProductsButton'
import { Navbar } from 'components/Navbar'


export const Home = () => {

  return (

    <div>
      <Navbar />
      <LoadingIndicator />
      <FetchProductButton />
      <Cart />
      <Products />
    </div>

  )
}