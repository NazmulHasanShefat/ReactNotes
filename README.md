# React notes
<details>
 <summary>React components and props</summary>
 <br>
 
 - components হল react এর কোন একটা পুরো `function()` টাই হল react এর একটা component,
 এবং সেই function টা যা return করে তাই হলো এক একটা element।
 - যেকোন component একটা **react element** return করবে। react er মধ্যে যদি ```jsx <Button />``` একটা element দেওয়া হয় তাহলে react খুজবে `Button` নামে কোন `function` আছে কি না ? তখন সেই `fuction এ যা return করা আছে তাকে react এর 
 element হিসাবে দেখাবে। 
 - `<button height={a}/>` এটা যদি normal HTML element এর মত হতো তাহলে এটাতে আমরা paramiter দিতে পারতাম না, এটা যেহুতু একটা valid javaScript `function()` এজন্য আমরা এটাতে paramiter use করতে পারব এটাই react component এর power
 এই `height={a}` paramiter হিসাবে component থেকে element এ যেকোন কিছু পাস করতে পারি।

 **Example**
 `Button.jsx`
 ```jsx
 const Button = ({myclass}) => {
    return (
        <div>
            <button className={myclass}>modal btn</button><br />
        </div>
    );
};

export default Button;
```

 **Example**
 `app.jsx`
 ```jsx
 const app = () => {
    return (
        <div>
        // recive this button paramiter
           <Button myclass={"mb-5 text-white"}>
        </div>
    );
};

export default app;
```


</details>
<details>
<summary>Where we use class component or functional component</summary>

<h5>React Lifecycle Methods vs Hooks</h5>
<details>
<summary>React Functional Component কোথায় ব্যবহার করব?</summary>
<br>
Functional Components মূলত সহজ এবং হালকা (lightweight)। আধুনিক React অ্যাপ্লিকেশনগুলোতে এগুলো বেশি জনপ্রিয়, ব্যবহারের ক্ষেত্র:

 - Simple UI Rendering: যখন শুধু UI দেখাতে হবে, জটিল logic বা lifecycle methods দরকার নেই।
 - Hooks ব্যবহার করতে চাইলে: Functional Component-এ useState, useEffect, useContext ইত্যাদি React Hooks ব্যবহার করা যায়।
 - Performance & Clean Code: Functional Components কম boilerplate কোড লিখতে হয়, তাই কোড পরিষ্কার এবং maintain করা সহজ।
 - Modern React Best Practice: React team-এর recommendation হলো functional component + hooks ব্যবহার করা।
</details>

<details>
<summary>React Class Component কোথায় ব্যবহার করব?</summary>
<br>
Class Components পুরনো React style, কিন্তু কিছু ক্ষেত্রে এখনও ব্যবহার হতে পারে, ব্যবহারের ক্ষেত্র:
<br>

 - Legacy Projects: পুরনো প্রোজেক্ট যেখানে আগে থেকেই class component ব্যবহার হচ্ছে।

 - Lifecycle Method দরকার: যেমন: `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()` ইত্যাদি। যদিও এখন hooks দিয়ে functional component-এও এই কাজ করা যায়।
 
 - State Management (Old Way): আগে functional component-এ state ছিল না, তাই stateful logic এর জন্য class component লাগত। এখন `useState()` ও `useReducer()` দিয়ে এই সমস্যা নেই।
</details>

# React Lifecycle Methods vs Hooks (Mapping Table)

| Class Component Lifecycle                | Functional Component Hook            | ব্যাখ্যা                                            |
| ---------------------------------------- | ------------------------------------ | --------------------------------------------------- |
| `componentDidMount()`                    | `useEffect(() => { ... }, [])`       | কম্পোনেন্ট প্রথমবার render হলে effect চালানোর জন্য। |
| `componentDidUpdate()`                   | `useEffect(() => { ... }, [deps])`   | ডিপেনডেন্সি পরিবর্তন হলে effect রান হবে।            |
| `componentWillUnmount()`                 | Cleanup function inside `useEffect`  | কম্পোনেন্ট unmount হওয়ার সময় cleanup করার জন্য।     |
| `shouldComponentUpdate()`                | `React.memo` বা `useMemo`            | unnecessary re-render আটকানোর জন্য।                 |
| `getDerivedStateFromProps()`             | `useEffect()` + state logic          | props অনুযায়ী state update করার জন্য।               |
| `componentDidCatch()` / Error Boundaries | এখনো Class Component-এ (Hooks এ নেই) | Error handling এর জন্য class component দরকার।       |
| `setState()`                             | `useState()` বা `useReducer()`       | state update করার জন্য।                             |

---

## ✅ Class Component Example

```jsx
class Example extends React.Component {
    componentDidMount() {
        console.log("Mounted");
    }

    componentWillUnmount() {
        console.log("Unmounted");
    }

    render() {
        return <h1>Hello</h1>;
    }
}
```

## ✅ Functional Component Example (Same Work)

```jsx
import { useEffect } from "react";

function Example() {
    
    useEffect(() => {
       console.log("Mounted");
        return () => {
          console.log("Unmounted");
        };
    }, []);

    return <h1>Hello</h1>;
}
```

</details>
