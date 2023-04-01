// Here's a detailed explanation of how to use some of the most commonly used hooks in React:

// useState()
// The useState() hook allows you to add state to a functional component.It takes an initial state value as a parameter, and returns an array with two values: the current state value, and a function to update the state.


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

// In the example above, we initialize the state with a value of 0, and then use the setCount function to update the state when the button is clicked.

//     useEffect()
// The useEffect() hook allows you to perform side effects in a functional component.It takes a function as a parameter, which is called after every render.


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

// In the example above, we use useEffect() to update the document title with the current count value after every render.Note that we don't specify any dependencies for the effect, so it will run after every render regardless of whether the count value has changed or not.

// If you want the effect to only run when certain dependencies change, you can specify them as a second parameter to useEffect().For example:


// import React, { useState, useEffect } from 'react';

// function MyComponent({ initialCount }) {
//     const [count, setCount] = useState(initialCount);

//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//     }, [count]);

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

// In the example above, we specify[count] as the second parameter to useEffect(), so the effect will only run when the count value changes.

//     useContext()
// The useContext() hook allows you to access a context object that was created by a parent component.It takes a context object as a parameter, and returns the current value of that context.


// import React, { useContext } from 'react';
// import MyContext from './MyContext';

// function MyComponent() {
//     const { value } = useContext(MyContext);

//     return <div>The value is {value}</div>;
// }

// In the example above, we use useContext() to access the value of a context object created by a parent component.Note that the useContext() hook can only be used within a functional component, and only with context objects created by a React.createContext() call.

//     useRef()
// The useRef() hook allows you to create a mutable ref object that can be used to store a value between renders.It takes an initial value as a parameter, and returns a ref object with a`current


// useRef()

// import React, { useRef } from 'react';

// function MyComponent() {
//   const inputRef = useRef(null);

//   function handleFocus() {
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleFocus}>Focus input</button>
//     </div>
//   );
// }

// In the example above, we use useRef() to create a ref object that we attach to the input element. We then use the current property of the ref object to access the input element and call its focus() method when the button is clicked.

// useCallback()
// The useCallback() hook allows you to memoize a function so that it only gets recreated when its dependencies change. It takes a function and an array of dependencies as parameters, and returns a memoized version of the function.


// import React, { useState, useCallback } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={increment}>Click me</button>
//     </div>
//   );
// }

// In the example above, we use useCallback() to memoize the increment function so that it only gets recreated when the count value changes. This can be useful for optimizing performance when passing functions as props to child components.

// useMemo()
// The useMemo() hook allows you to memoize a value so that it only gets recalculated when its dependencies change. It takes a function and an array of dependencies as parameters, and returns the memoized value.


// import React, { useState, useMemo } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const doubledCount = useMemo(() => {
//     return count * 2;
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times (doubled: {doubledCount})</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// In the example above, we use useMemo() to memoize the doubled value of the count state. This can be useful for optimizing performance when calculating expensive values that don't need to be recalculated on every render.

// These are just a few of the most commonly used hooks in React. There are many other hooks available, such as useReducer(), useContext(), useImperativeHandle(), and more.



