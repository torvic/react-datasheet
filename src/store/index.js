import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter - action.payload,
      }
    case 'toggle':
      return {
        ...state,
        showCounter: !state.showCounter,
      }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store
