
import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

// Thunk
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://final-project-ingrid.herokuapp.com/books')
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setProducts(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

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


