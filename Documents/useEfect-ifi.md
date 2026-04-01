# how to use ifi or use Efect
```jsx
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  let [post,setpost] = useState();
  
  useEffect(()=>{
    (async () =>{
      let post_response = await fetch("https://dummyjson.com/posts");
      let post_json = await post_response.json();
      setpost(post_json);
    })()
  },[])

  return (
    <div>
      <p>{JSON.stringify(post)}</p>
    </div>
  );
};

export default App;
```