import React from 'react'
import { Products } from './components/Products'
import { Cart } from './components/Cart'

export const App = () => {
  return (
    <div>
      <Cart />
      <Products />
    </div>
  )
}
