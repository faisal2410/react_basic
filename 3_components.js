// Components are the building blocks of a React application.A component is a reusable piece of UI that can be composed with other components to build more complex UIs.There are two main types of components in React:

// Functional components
// Functional components are simple functions that return JSX.They accept props as an argument and use those props to determine what to render.Here's an example of a functional component:

// function Greeting(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }

// Class components
// Class components are classes that extend the React.Component base class. They can have state and lifecycle methods in addition to props.Here's an example of a class component:

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
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.handleClick}>Increment</button>
//             </div>
//         );
//     }
// }
// Now that we've seen the two types of components in React, let's look at their role in building UIs.

// Components provide a way to break down a complex UI into smaller, reusable pieces.By composing components together, you can build complex UIs while keeping the code organized and maintainable.Here's an example of a simple UI built using components:


// function App() {
//     return (
//         <div>
//             <Header />
//             <Content />
//             <Footer />
//         </div>
//     );
// }
// In this example, Header, Content, and Footer are all components that can be defined elsewhere in the code.By breaking down the UI into components like this, it's easier to reason about and maintain the code.

// Components can also accept props, which allows them to be more flexible and reusable.Here's an example of a component that accepts props:


// function Greeting(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }
// In this example, the Greeting component accepts a name prop and uses it to render a personalized greeting.By passing different name props to the Greeting component, you can reuse it to render different greetings.

//     Finally, components can also have state and lifecycle methods, which allows them to be dynamic and respond to user interactions.Here's an example of a component that has state and lifecycle methods:


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
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.handleClick}>Increment</button>
//             </div>
//         );
//     }
// }
// In this example, the Counter component has a count state that is updated when the user clicks a button.By using state and lifecycle methods like this, components can respond to user interactions and update the UI dynamically.

//     Overall, components are a fundamental part of React and are essential for building complex and dynamic user interfaces.By breaking down the UI into smaller, reusable components, you can keep your code organized and maintainable while building powerful and flexible UIs.



