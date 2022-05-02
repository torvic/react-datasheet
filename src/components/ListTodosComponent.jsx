import React, { useEffect, useState } from 'react'

const ListTodosComponent = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  // fetch api
  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const todos = await response.json()
			console.log(todos);
      setTodos(todos)
    })()
  }, [])

  /* let renderedUsers = users.map((user) => {
    return <div key={user.id}>{user.name}</div>
  }) */

  // Add filtered Users
  let filteredUsers = todos
    .filter(({ title }) => {
      return title.indexOf(input) >= 0
    })
		.slice(0, 10)
    .map((todo) => {
      return <div key={todo.id}>{todo.title}</div>
    })

  return (
    <div>
      <h2>Todos</h2>
      <input type='text' onChange={(e) => setInput(e.target.value)} />
      <div>{filteredUsers}</div>
    </div>
  )
}

export default ListTodosComponent
