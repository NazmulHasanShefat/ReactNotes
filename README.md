# React notes
# React Lifecycle Methods vs Hooks (Mapping Table)

| Class Component Lifecycle           | Functional Component Hook         | ব্যাখ্যা |
|-------------------------------------|------------------------------------|-----------|
| `componentDidMount()`              | `useEffect(() => { ... }, [])`    | কম্পোনেন্ট প্রথমবার render হলে effect চালানোর জন্য। |
| `componentDidUpdate()`             | `useEffect(() => { ... }, [deps])`| ডিপেনডেন্সি পরিবর্তন হলে effect রান হবে। |
| `componentWillUnmount()`           | Cleanup function inside `useEffect`| কম্পোনেন্ট unmount হওয়ার সময় cleanup করার জন্য। |
| `shouldComponentUpdate()`          | `React.memo` বা `useMemo`         | unnecessary re-render আটকানোর জন্য। |
| `getDerivedStateFromProps()`       | `useEffect()` + state logic       | props অনুযায়ী state update করার জন্য। |
| `componentDidCatch()` / Error Boundaries | এখনো Class Component-এ (Hooks এ নেই) | Error handling এর জন্য class component দরকার। |
| `setState()`                       | `useState()` বা `useReducer()`    | state update করার জন্য। |
