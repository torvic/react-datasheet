import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const counterSlicer = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  },
})

/* ************* COUNTER ACTION ************* */
export const counterActions = counterSlicer.actions

// just one slice (reducer)
const store = configureStore({
  reducer: counterSlicer.reducer,
})

export default store
