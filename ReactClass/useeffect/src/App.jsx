import React from 'react'
import {useState, useEffect} from 'react';


const App = () => {
const [count, setCount] = useState(0);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [count]); 

  return (
    <div>
      <h2>Count is: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase</button>

      {/* <h3>Fetched Posts:</h3> */}
      
    </div>
  )
}

export default App
