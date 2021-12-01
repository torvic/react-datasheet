import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const showCounter = useSelector((state) => state.showCounter)
  const handleIncrement = (value) => {
    dispatch({ type: 'increment', payload: value})
  }
  const handleDecrement = (value) => {
    dispatch({ type: 'decrement', payload: value })
  }
  const handleToggleCounter = () => {
    dispatch({ type: 'toggle' })
  }
  const handleReset = () => {
    dispatch({ type: 'reset' })
  }
  return (
    <div>
      <h1>Redux Counter</h1>
      {showCounter && <p>{counter}</p>}
      <div>
        <button onClick={() => handleDecrement(5)}>Decrement -5</button>
        <button onClick={() => handleDecrement(1)}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <button onClick={() => handleIncrement(5)}>Increment +5</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </div>
  )
}

export default Counter
