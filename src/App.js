import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { cart } from './reducers/cart'
import { products } from './reducers/products'

import { LoadingIndicator } from './components/LoadingIndicator'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { FetchProductButton } from 'components/FetchProductsButton'



const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <FetchProductButton />
      <Cart />
      <Products />
    </Provider>
  )
}
