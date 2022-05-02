import './App.css'
import ListTodosComponent from './components/ListTodosComponent'
import ListUsersComponent from './components/ListUsersComponent'

function App() {
  return (
    <div className='App'>
      <h2>Higher Order Components Example</h2>
      <div className='section'>
        <div>
          <ListUsersComponent />
        </div>
				<div>
					<ListTodosComponent/>
				</div>
      </div>
    </div>
  )
}

export default App
