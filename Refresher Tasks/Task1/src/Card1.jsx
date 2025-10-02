import React from 'react'
import {useState} from 'react'
import './style.css'

const Card1 = (props) => {
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <>
        <div class="card text-start">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Title" />
          <p>Count: {count}</p>
          <div class="card-body">
            <button onClick={handleClick}>Increment</button>
          </div>
        </div>
    </>
  )
}

export default Card1
