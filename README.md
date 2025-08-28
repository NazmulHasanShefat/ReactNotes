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
 - component have two syntax `1 class component` and `2 functional component`
 - why we use class component? because class component is a stateful component যদিও state management `useSate()` hook এর মাধ্যমে হয়। এটাই react এর recomanded way কিন্তু পুরোন application এ কাজ করতে গেলে এটা প্রয়জন আছে তাই class component শেখা জরুরী এটা শিখলে react er core syntex বোঝা যাবে।

<details>
  <summary>1 Class component</summary>

  #### How to access class component childred elements ?
  Ans: use this method `this.props.children` to access class component childred element 
  #### How to access class component attributes ?
  Ans: use this method `this.props.attribute_name` to access class component childred element 
  #### How to call calss component `function()` ?
  Ans: use `this.function_name` kyeword.
  ###### react এর class component এ যকোন `function()` এর মাধ্যমে কোন event handle করলে সেই `function()` কে call করতে হবে `this.function_name` এভাবে যেহুতু এই `function()` টা এই class এর একটা method তাই `this kyeword` use করতে হবে।  


  ###### props কখনো ভিতর থেকে change কারা যাবে না change করতে হলে বাহির থেকেই করতে হবে 
  ###### এখান থেকে change করা যাব না যদি render() kora হয় তাহলে এই পুরো component আবার re-render হবে। যখন সে দেখবে আবার props পরিবর্তন হয়েছে তখন সে আবার re-rander করবে এভাবে সে render করতেই থাকবে তখন সে infinity loop এ পরবে ফলে আপ্লিকেশন crash হতে পারে। 
  ###### change করা যাবে যেটা সেটা হলো state
  ```jsx
  import React from "react";
class Clock extends React.Component{
    render() {
        return(
            <>
              <h1 className='text-6xl font-bold'>
                {this.props.children} <br />
                {new Date().toLocaleTimeString(this.props.local)}
               </h1>
            </>
        )
    }
}
export default Clock;
  ```

**Example stateful component**
```jsx
import React from "react";

class Clock extends React.Component{
    constructor (props){ //
        super(props); //updating state 
        this.state = { date: new Date() };
    }
    componentDidMount(){  //component যখন load হয়ে গেছে তার পর এই function call হবে।
       this.clockTimer = setInterval(() => this.startClock(), 1000);
    }
    
    startClock(){  // created a function for start this clock
        this.setState({
            date: new Date() 
        })
    }
    // আমরা যখন আন্য পেইজে যাব রাঊট করে তখন যেন এই ঘড়িটা বন্ধ হয়ে যায় তার জন্য
    // ব্যবহার করতে হবে componentWillUnmount() এটা react er 
    // build in method
    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }
    render() {
        return(
            <>
              <h1 className='text-6xl font-bold'>
                {this.props.children} <br />
                {this.state.date.toLocaleTimeString(this.props.local)}
                <br />
               </h1>
                <button className="border border-gray-600">Stop time</button>
            </>
        )
    }
}
export default Clock;
```


  **Example**
  ```jsx
// class component কে use করতে হলে react নিজেই একটা class বানিয়েছে আমাদের 
// সুধু সেই class টাকে extend করে নিয়ে আসতে হবে রিএক্ট থেকে তাই 
// class component এর ক্ষেত্রে আমাদের extends React.Component লিখলেই হবে
// Component react এর একটা super class
// আমি সেই react pakeg এর component টাকে extend করে দিলাম। 
// যখনি এটাকে আমি extend করে ফেলব তখন react er পুরো component 
// class টার মধ্যে যা যা লিখা আছে সব কিছু আমি inharit ইনহেরিট করে 
// নিয়ে আসলাম আমার Clock er মধ্যে । 
// এখন এই react এর Component class er সব methods এবং propertis এর সবকিছুর access
// আমার কাছে আছে।  এটাকে extend করার সাথে সাথে react এই component টাকে চিনতে পারবে।
// function component er ক্ষেত্রে <Clock /> এই রকম কিছু থাকলে react খুজে Clock নামে 
// কোন function আছে কি না? কিন্তু class component er ক্ষেত্রে react খুজে (Clock) নামে 
// কোন class আছে কি না? যেটা React.Component কে extend করে।  সে পাইলো সেটা 
// পাওয়ার পরে সে যেটা করে এই class er ভিতরে নিজে নিজেই একটা Object create করে। automaticly
// সেই class এর render() নামে যে method আছে সে সেটাকে কল করে দেয়।

// এই render() method টা define করা আছে (React.Component) class এর মধ্যে 

// class component এর ক্ষেত্রে render() method er মধ্যে কোন কিছু return করতে হবে 
// তাহলে সেই component কাজ করবে।


// class component এর ক্ষেত্রে অবশ্যিক react import করতে হবে।
// imported 19:00----20:00
import React from "react";
class Clock extends React.Component{
    render() {
        return(
            <>
            // class component এর ক্ষেত্রে যদি attributes er মাধ্যমে কিছু পাঠানো হয় তাহলে তাকে
            // সেই React.Component class এর props নামক একটা propertis এর মধ্যে এটাকে ঢূকিয়ে দেয়। 
            // তখন সেই props নামক propertis থেকে আমরা সেই attibutes কে সেই attribute এর নামে 
            নিয়ে আসতে পারি । এবং ব্যবহার করয়ে পারি যেকোন যায়গায় 

            // class এর কোন properti কে access করতে হলে (this) ব্যবহার করতে হবে।
            // এই class এর অর্থাৎ Clock class এর কোন propertis এর মধ্যে আমরা attibutes পাঠিয়েছিলাম
            // props নামক properis এর মধ্যে 

            // তাই Object এর মতো করে তাকে কল করতে হবে (this.props.local)
            // this হলো Clock class , and props হলো clock er properti and local হলো সেই attribute er 
            // নাম যেটা Object আকারে props er মধ্যে store হয়েছিল। 

            // react আপনার জন্য যে Object টা create করেছে সেটাই হলো (this);
            // যেই Object create হয়েছে তার মধ্যে একটা properti ও create হয়েছে আটোমেটিকলি props নামে যখন 
            // আপনি class component er মধ্যে attribute পাঠিয়েছেন। 

            // সেই props এর মধ্যেই attribute ke paramiter হিসাবে পেয়ে যাবেন।

            // class এর যদি কোন properti কে access করতে হয় তাহলে 

              <h1 className='text-6xl font-bold'>{new Date().toLocaleTimeString(this.props.local)}</h1>
            </>
        )
    }
}
export default Clock;
  ```
</details>

<details>
 <summary>2 functional component</summary>

 **File**
 `Button.jsx`
 ```jsx
//  যেহুতু myclass Object হিসাবে এখানে এসেছে তাই object destructure করে নিতে হবে তাই একে {} এইরকম 
// block er মধ্যে রাখতে হবে
 const Button = ({myclass}) => {
     // now we can use {myclass} anywhere
    return (
        <div>
            <button className={myclass}>modal btn</button><br />
        </div>
    );
};

export default Button;
```

 **File**
 `app.jsx`
 ```jsx
 import Button from "component/Button"
 const app = () => {
     return (
         <div>
        // we con recive this button attributes as button component (paramiter) 
        // becouse button component is a valid javaScript function
        // এখানে যা attributes pass করা হবে তাই চলে যাবে Button component er (paramiter) হিসাবে Object আকারে
           <Button myclass={"mb-5 text-white"}>
        </div>
    );
};

export default app;
```
</details>



<!-- ===================================================================================== -->
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
