import React from 'react'
import {useState, useRef, useEffect} from 'react';
const App = () => {
 const [count, setCount] = useState(0);
 const ref = useRef();


useEffect(()=>{
  if(!ref.current){
    return null;
  }
  else{
    ref.current.style.backgroundColor ="red";
  }
},[])

 
 const handleClick = ()=>{
  setCount(count+1);

 }
  return (
   

    <div>
        <p>vlaue of count: {count}</p>
        <h1 ref={ref}>Sahdev</h1>
        {/* {console.log(ref.current)} */}
        
        <button onClick={handleClick}>Increase</button>    
    </div>
  )
}

export default App
