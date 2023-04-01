// Functional components
// Functional components are the simplest type of component in React.They are just JavaScript functions that return JSX.Here's an example of a functional component:


// function Greeting(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }

// In this example, Greeting is a functional component that accepts a name prop and uses it to render a personalized greeting.

// To create a functional component in React, you can simply define a JavaScript function that returns JSX.The function should accept props as an argument, which contains any properties that were passed to the component.Here's a more detailed example:


// function MyComponent(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.description}</p>
//         </div>
//     );
// }

// In this example, MyComponent is a functional component that accepts two props: title and description.It uses those props to render a title and a paragraph of text.

// When you create a functional component, you can use it just like any other HTML element in your JSX code.Here's an example of how you might use the MyComponent component:


// function App() {
//     return (
//         <div>
//             <MyComponent title="Welcome" description="This is a React app" />
//         </div>
//     );
// }

// In this example, App is a functional component that renders a MyComponent with a title prop of "Welcome" and a description prop of "This is a React app".

// Class components
// Class components are a more powerful type of component in React.They are JavaScript classes that extend the React.Component class. Here's an example of a class component:


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
// In this example, Counter is a class component that has a count state and a handleClick method that updates the state when the user clicks a button.

// To create a class component in React, you can define a JavaScript class that extends React.Component.The class should define a render method that returns JSX.Here's a more detailed example:


// class MyComponent extends React.Component {
//         render() {
//             return (
//                 <div>
//                     <h1>{this.props.title}</h1>
//                     <p>{this.props.description}</p>
//                 </div>
//             );
//         }
//     }

// In this example, MyComponent is a class component that accepts two props: title and description.It uses those props to render a title and a paragraph of text.

// When you create a class component, you can use it just like any other HTML element in your JSX code.Here's an example of how you might use the MyComponent component:


// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <MyComponent title="Welcome" description="This is a React app" />
//             </div>
//         );
//     }
// }

// In this example, App is a class component that renders a MyComponent



