import Radium from 'radium'

function App() {
  let styles = {
    both: {
      background: 'black',
      border: 'solid 1px white',
      height: 100,
      width: 100,
    },
    one: {
      ':hover': {
        background: 'blue',
      },
    },
    two: {
      ':hover': {
        background: 'red',
      },
    },
  }
  return (
    <div>
      <div key='one' style={[styles.both, styles.one]} />
      <div key='two' style={[styles.both, styles.two]} />
    </div>
  )
}

export default Radium(App)
