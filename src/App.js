import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ui } from 'reducers/ui'
import { cart } from './reducers/cart'
import { products } from './reducers/products'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Login } from 'pages/Login'
import { CartPage } from 'pages/CartPage'
import { CustomerInfo } from 'pages/CustomerInfo'
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
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/shoppingcart' exact>
            <CartPage />
          </Route>
          <Route path='/page/:customer' exact>
            <CustomerInfo />
          </Route>
        </Switch>

      </Provider>
    </BrowserRouter>
  )
}
