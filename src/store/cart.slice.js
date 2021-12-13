import { createSlice } from '@reduxjs/toolkit'

/* *************** Initial State *************** */
const initialState = {
  products: [
    {
      id: 1,
      name: 'producto 1',
      price: '120',
    },
    {
      id: 2,
      name: 'producto 2',
      price: 240,
    },
    {
      id: 3,
      name: 'producto 3',
      price: 120,
    },
    {
      id: 4,
      name: 'producto 4',
      price: 320,
    },
  ],
  cart: [],
  loading: false,
  error: null,
}
/* *************** Product Slicer *************** */
const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      // find product with an id
      const product = state.products.find((el) => el.id === action.payload)
      state.cart = [...state.cart, product]
    },
  },
})

/* *************** Cart Actions*************** */
export const cartAction = cartSlicer.actions

/* *************** Cart Reducer*************** */
export default cartSlicer.reducer


