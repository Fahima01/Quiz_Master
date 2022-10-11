import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-3 text-blue-900'>Welcome To Our Blog</h2>

            <div>
                <div className='p-10 border border-sky-200 mt-8 m-10 rounded-md shadow-lg shadow-cyan-200/50'>
                    <h2 className='text-2xl font-bold text-emerald-600 mb-4'>1. What is the purpose of react-router?</h2>
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. It provides different routing components according to the needs of the application and platform. The following illustration shows how react router’s dynamic routing works as compared to traditional static routing.</p>
                </div>
                <div className='p-10 border border-sky-200 mt-8 m-10 rounded-md shadow-lg shadow-cyan-200/50'>
                    <h2 className='text-2xl font-bold text-emerald-600 mb-4'>2. How does context API work?</h2>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Using Redux, context is also touted as a more manageable, lighter approach to state management.
                        React.createContext() is all you need. It returns a consumer and a provider. The provider is a component that as its name suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </p>
                </div>
                <div className='p-10 border border-sky-200 mt-8 m-10 rounded-md shadow-lg shadow-cyan-200/50'>
                    <h2 className='text-2xl font-bold text-emerald-600 mb-4'>3. what is useRef hook in react
                        ?</h2>
                    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. Returns a stateful value, and a function to update it.
                        Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                        You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes.
                        However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
                        This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render.
                        Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;