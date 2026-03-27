# useContext hook

- step 01 Create a Contex
`ThemeContext.jsx`
```js
import { createContext } from "react";
export const ThemeContext = createContext();
```
- step 02 Wrap your parent component use your created context and give the context value this value can be Object string or Array any kind of javaScript data you can put in this `<ThemeContext.Provider value="anydata">` component props value.
```js
<ThemeContext.Provider value={[themeValue, "red"]}>
     <GrandParent />
</ThemeContext.Provider>
```
- step 3 you can access this ContextProvider value and nested componet like this
```js
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/UserContext';

const MyHeading = () => {
    // when you pass an array you can access like this
    // when you pass object you can distructure like this
    // const { theme, color }  = useContext(ThemeContext);
    // 
    const [ theme, color ]  = useContext(ThemeContext);
    return (
        <div>
           theme: { theme } <br />
           theme: { color } <br />
           this is my heading 
        </div>
    );
};

export default MyHeading;
```