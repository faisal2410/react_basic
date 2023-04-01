// React Hooks were introduced in React 16.8 as a way to allow developers to use state and other React features in functional components, which were previously limited to using props and context.

// Hooks are functions that allow you to "hook into" React state and lifecycle methods from a functional component, without needing to convert it into a class component. There are several built -in hooks provided by React, and you can also create your own custom hooks.

// Here are some of the most commonly used built -in hooks:

// useState(): This hook allows you to add state to a functional component.It returns an array with two values: the current state value and a function to update the state.

// import React, { useState } from 'react';

// function MyComponent() {
//     const [count, setCount] = useState(0);

//     function handleClick() {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// useEffect(): This hook allows you to perform side effects in a functional component.It is similar to the componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods in class components.

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//     });

//     function handleClick() {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }
// useContext(): This hook allows you to access a context object that was created by a parent component.

// import React, { useContext } from 'react';
// import MyContext from './MyContext';

// function MyComponent() {
//     const { value } = useContext(MyContext);

//     return <div>The value is {value}</div>;
// }

// useRef(): This hook allows you to create a mutable ref object that can be used to store a value between renders.

// import React, { useRef } from 'react';

// function MyComponent() {
//     const inputRef = useRef();

//     function handleClick() {
//         inputRef.current.focus();
//     }

//     return (
//         <div>
//             <input type="text" ref={inputRef} />
//             <button onClick={handleClick}>Focus</button>
//         </div>
//     );
// }

// useMemo(): This hook allows you to memoize a value so that it is only recomputed when its dependencies change.

// import React, { useMemo } from 'react';

// function MyComponent({ items }) {
//     const sortedItems = useMemo(() => {
//         return items.sort();
//     }, [items]);

//     return (
//         <ul>
//             {sortedItems.map((item) => (
//                 <li key={item}>{item}</li>
//             ))}
//         </ul>
//     );
// }

// These are just a few examples of the many hooks available in React.Hooks can be used to simplify complex state management and lifecycle code, and they can make functional components just as powerful as class components.





