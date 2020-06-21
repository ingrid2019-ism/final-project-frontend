import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ui } from 'reducers/ui'
import { cart } from './reducers/cart'
import { products } from './reducers/products'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { SignUp } from 'pages/SignUp'
import { CartPage } from 'pages/CartPage'
import { CheckedOut } from 'pages/CheckedOut'
import { Books } from 'pages/Books'
import { Contact } from 'pages/Contact'


const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>

        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/books' exact>
            <Books />
          </Route>
          <Route path='/signup' exact>
            <SignUp />
          </Route>
          <Route path='/shoppingcart' exact>
            <CartPage />
          </Route>
          <Route path='/checkout' exact>
            <CheckedOut />
          </Route>

        </Switch>

      </Provider>
    </BrowserRouter>
  )
}
