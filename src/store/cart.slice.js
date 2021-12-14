import { createSlice } from '@reduxjs/toolkit'

/* *************** Initial State *************** */
const initialState = {
  cart: [],
  totalQuantity: 0,
}
/* *************** Product Slicer *************** */
const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
			const newItem = action.payload
      state.cart = [
				...state.cart, 
				{
					...newItem,
					quantity: 1
				}
			]
    },
  },
})

/* *************** Cart Actions*************** */
export const cartActions = cartSlicer.actions

/* *************** Cart Reducer*************** */
export default cartSlicer.reducer
