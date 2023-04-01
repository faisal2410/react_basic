// What is State ?
//     State is a way to store data within a component and have that data update and trigger re - renders of the component when it changes.Unlike props, which are passed down from a parent component and cannot be modified by the child component, state is internal to the component and can be updated within the component.

// In React, state is typically managed within class components using the setState() method, or within functional components using the useState() hook.

// How to Use State in React
// Here's an example of how to use state in a class component:


// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     handleClick = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>You clicked the button {this.state.count} times.</p>
//                 <button onClick={this.handleClick}>Click me!</button>
//             </div>
//         );
//     }
// }

// In this example, Counter is a class component that initializes its state to { count: 0 }. The handleClick method updates the state by calling setState() with an object that merges the current state with the new state({ count: this.state.count + 1 }).When the state updates, React re - renders the component and updates the view to reflect the new state.

//     Here's an example of how to use state in a functional component with the useState() hook:


// function Counter() {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <p>You clicked the button {count} times.</p>
//             <button onClick={handleClick}>Click me!</button>
//         </div>
//     );
// }

// In this example, Counter is a functional component that uses the useState() hook to initialize its state to 0(const [count, setCount] = useState(0)).The handleClick function updates the state by calling setCount() with the new count value(setCount(count + 1)).When the state updates, React re - renders the component and updates the view to reflect the new state.

// When to Use State in React
// State is useful for managing data that changes within a component and needs to trigger a re - render.For example, you might use state to track the following:

// User input in a form
// A counter that updates when a button is clicked
// The status of a checkbox or radio button
// The visibility of a component or modal

// It's important to use state judiciously, however, as overusing state can make it difficult to reason about the behavior of your components and can lead to bugs. It's also important to avoid mutating state directly, as this can cause unexpected behavior and bugs.Instead, always use the setState() method(or setCount() in the case of useState()) to update state.



