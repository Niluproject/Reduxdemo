import React from 'react'

const User=(props)=> {
    const {data} = props
  return (
    <div>
      <h1>Hello User</h1>
      <h4>Hello {data.name}</h4>
      <h4>Age {data.age}</h4>
    </div>
  )
}

export default User
