import React from 'react'

import { LoadingIndicator } from 'components/LoadingIndicator'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
import { FetchProductButton } from 'components/FetchProductsButton'


export const Home = () => {

  return (

    <div>

      <LoadingIndicator />
      <FetchProductButton />
      <Cart />
      <Products />
    </div>

  )
}