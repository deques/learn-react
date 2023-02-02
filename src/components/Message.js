import React from 'react'

function Image({width, height}) {
  return (
    <img src="https://i.redd.it/p4lrht1neiea1.png" width = {width} height = {height} />
  );
}

function Message({name, children}) {
  return (
    <>
      <h1>Whatever {name}</h1>
      <p>{children}</p>
      <button>Test</button>
      <Image width="40%" height = "40%" />
    </>
  )
}

export default Message;