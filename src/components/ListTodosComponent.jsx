import React from 'react'
import higherOrderComponent from './higherOrderComponent'

const ListTodosComponent = ({ data }) => {
  let renderedUsers = data.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  })

  return (
    <div>
      <ul>{renderedUsers}</ul>
    </div>
  )
}

const SearchTodos = higherOrderComponent(ListTodosComponent, 'todos')

export default SearchTodos
