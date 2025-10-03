import React from 'react'
import {useState} from 'react';
import Child from './Child'

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
    <div>
      <p>Value of Counter1: {count}</p>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
    <br />
    <br />
    <div>
      <p>Value of Counter2: {count2}</p>
      <button onClick={()=> setCount2(count2 +1)}>
        Increase2
      </button>
    </div>

    <br />
    <br />

    <Child count2 = {count2}></Child>
    </>
  )
}

export default App
