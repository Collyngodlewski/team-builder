import React from 'react'

export default function Person(props) {
  const { details } = props;

  if(!details) {
    return <h1>This is WORKing</h1>
}

  return (
    <div className='friend container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
