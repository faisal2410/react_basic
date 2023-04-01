// Rendering Components
// In React, you can render components by including them in your JSX code.Here's an example of how to render a component:


// function App() {
//     return (
//         <div>
//             <Greeting name="John" />
//         </div>
//     );
// }

// In this example, App is a functional component that renders a Greeting component with a name prop of "John".When the App component is rendered, it will include the Greeting component with the name prop.

// You can also render multiple components within a single component.Here's an example:


// function App() {
//     return (
//         <div>
//             <Greeting name="John" />
//             <Greeting name="Jane" />
//         </div>
//     );
// }

// In this example, App is a functional component that renders two Greeting components with different name props.

// Passing Props
// In React, you can pass data from a parent component to a child component using props.Here's an example of how to pass props:


// function Greeting(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//     return (
//         <div>
//             <Greeting name="John" />
//         </div>
//     );
// }

// In this example, Greeting is a functional component that accepts a name prop and uses it to render a personalized greeting.The App component includes the Greeting component with a name prop of "John".

// You can pass any data type as a prop, including strings, numbers, booleans, arrays, and objects.Here's an example of how to pass an array as a prop:


// function List(props) {
//     return (
//         <ul>
//             {props.items.map((item) => (
//                 <li>{item}</li>
//             ))}
//         </ul>
//     );
// }

// function App() {
//     const items = ["Apple", "Banana", "Orange"];
//     return (
//         <div>
//             <List items={items} />
//         </div>
//     );
// }

// In this example, List is a functional component that accepts an items prop, which is an array of items to be rendered in a list.The App component includes the List component with an items prop of["Apple", "Banana", "Orange"].

// When you pass an object as a prop, you can access its properties within the child component using dot notation.Here's an example:


// function User(props) {
//     return (
//         <div>
//             <h1>{props.user.name}</h1>
//             <p>{props.user.email}</p>
//         </div>
//     );
// }

// function App() {
//     const user = { name: "John", email: "john@example.com" };
//     return (
//         <div>
//             <User user={user} />
//         </div>
//     );
// }

// In this example, User is a functional component that accepts a user prop, which is an object with name and email properties.The App component includes the User component with a user prop that contains the name and email properties.Within the User component, the name and email properties are accessed using dot notation.



