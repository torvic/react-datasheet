import './App.css'
import SearchTodos from './components/ListTodosComponent'
import SearchUser from './components/ListUsersComponent'

function App() {
  return (
    <div>
      <h2>Higher Order Components Example</h2>
      <div className='section'>
        <div>
          <SearchUser/>
        </div>
				<div>
					<SearchTodos/>
				</div>
      </div>
    </div>
  )
}

export default App
