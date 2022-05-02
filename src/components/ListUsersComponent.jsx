import React, { useEffect, useState } from 'react'

const ListUsersComponent = () => {
  const [users, setUsers] = useState([])
  const [input, setInput] = useState('')
  // fetch api
  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      setUsers(users)
    })()
  }, [])

  /* let renderedUsers = users.map((user) => {
    return <div key={user.id}>{user.name}</div>
  }) */

  // Add filtered Users
  let filteredUsers = users
    .filter(({ name }) => {
      return name.indexOf(input) >= 0
    })
    .map((user) => {
      return <div key={user.id}>{user.name}</div>
    })

  return (
    <div>
      <h2>Users</h2>
      <input type='text' onChange={(e) => setInput(e.target.value)} />
      <div>{filteredUsers}</div>
    </div>
  )
}

export default ListUsersComponent
