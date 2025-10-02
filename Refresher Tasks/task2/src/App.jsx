import React from 'react'
import Login from "./Login"
import Error from "./Error"
const App = () => {
   let isLoggedIn =true;
   let Cmp;
    if(isLoggedIn === true){
        Cmp =<Login></Login>
    }
    else{
       Cmp =<Error></Error>
    }
  return (
    <>
     {Cmp}
     
    </>
  )
}

export default App
