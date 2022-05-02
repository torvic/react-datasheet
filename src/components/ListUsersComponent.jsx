import React from 'react'
import higherOrderComponent from './higherOrderComponent'

const ListUsersComponent = ({ data }) => {
  let renderedUsers = data.map((user) => {
    return <li key={user.id}>{user.name}</li>
  })

  return (
    <div>
      <ul>{renderedUsers}</ul>
    </div>
  )
}

const SearchUser = higherOrderComponent(ListUsersComponent, 'users')

export default SearchUser
