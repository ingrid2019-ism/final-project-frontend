
import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

// Here Damien has the product data




export const products = createSlice({
  name: 'products',
  initialState: {
    all: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.all = action.payload
    }
  }
})

// Thunk
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('http://localhost:8080/books')
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setProducts(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}