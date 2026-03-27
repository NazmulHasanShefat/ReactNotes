# useActioState
```jsx
import React, { useActionState } from 'react';

const LoginForm = () => {
    const handleAction = async (previousData, formData)=>{
        const name = formData.get("name");
        const email = formData.get("email");
        await new Promise(res => setTimeout(res, 1000))
        if(name && email){
            return { message: "data submited", name, email }
        }else{
            return { message: "faild to submit" };
        }
    }
    const [isDarkMode, setIsDarkMode] = React.useState(true);

    const [ data, action, isPending] = useActionState(handleAction, null)
    // const [ returnd_data, formaction, isPending] = useActionState(handleAction, initialState, permalink?)
   console.log(data)
    return (
        <>
        {data ? 
        <>
        <h1>name: {data?.name}</h1> 
        <h1>email: {data?.email}</h1> 
        </>
        :
        null
        }
        
        <form action={action} className={`max-w-md mx-auto p-6 rounded-lg shadow-md transition-colors ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <div className="mb-4">
                <label htmlFor="name" className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
            >
                {isPending ? "procing...": "submit"}
            </button>

            <button
                type="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full mt-4 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-2 rounded-lg transition"
            >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </form>
        </>
    );
};

export default LoginForm;
```