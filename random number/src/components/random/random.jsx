import React from 'react'

export default function Random(props) {
  const min = Math.ceil(props.min)
  const max = Math.floor(props.max)
  const result = parseInt(Math.floor(Math.random() * (max - min)) + min)
  return (
    <div>
      <h2>Random Number</h2>
      <p>
        <strong>Min Number: </strong> {min}
      </p>
      <p>
        <strong>Max Number: </strong> {max}
      </p>
      <p>
        <strong>Result Number: </strong> {result}
      </p>
    </div>
  )
}
