import React from 'react'
import { Cart } from 'components/Cart'
import { Navbar } from 'components/Navbar'
import { RemoveButton } from 'components/RemoveAllButton'


export const CartPage = () => {
  return (
    <div>
      <Navbar />
      <RemoveButton />
      <Cart />
    </div>
  )
}