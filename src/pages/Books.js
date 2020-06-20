import React from 'react'
import { Products } from 'components/Products'
import { Navbar } from 'components/Navbar'

import { FetchProductButton } from 'components/FetchProductsButton'




export const Books = () => {

  return (
    <div>
      <Navbar />
      <FetchProductButton />
      <Products />

    </div>
  )
}

