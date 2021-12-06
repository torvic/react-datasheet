import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const show = useSelector((state) => state.showCounter)
  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }
  const handleToggle = () => {
    dispatch(counterActions.toggle())
  }
  return (
    <main>
      <h1>Counter with Redux Toolkit</h1>
      {show && <p>{counter}</p>}
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={() => dispatch(counterActions.increase(5))}>
          Increment By 5
        </button>
      </div>
      <button onClick={handleToggle}>Toggle Counter</button>
    </main>
  )
}

export default Counter
