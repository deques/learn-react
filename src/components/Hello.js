import React from 'react'

const Greet = props => {
  console.log(props);

  return (
    <>
      <h1>Hello {props.name}</h1>
      {props.children}
    </>
  )
}

export default Greet;