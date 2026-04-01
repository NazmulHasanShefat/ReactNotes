# how to change object for form or any other
```jsx
import React from 'react';
import { useState } from 'react';

const App = () => {
  const [myObj,setmyObj] = useState({
    kye1: "heloo",
    kye2:"rasel",
    kye3: "rony"
  });

// const change = ()=>{
//   setmyObj({
//     kye1: "redoy",
//     kye: "sonu",
//     kye3: "viky"
//   })
// }

// নতুন অবজেক্ট না বানিয়ে সেই অবজেক্ট এর kye and value change  update 

const change = ()=>{
  setmyObj(
    prevOBJ=>({
      ...prevOBJ,
      kye3: "shakhi",
      kye4: "maliksha"
    })
  )
}

  return (
    <div>
      <h1>{myObj.kye4}</h1>
      <button type='button' onClick={change}>change obj</button>
    </div>
  );
};

export default App;
```