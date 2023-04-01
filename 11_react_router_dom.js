// React Router Dom is a library that provides declarative routing for React applications.It allows you to handle routing within your application, making it easy to create multi - page applications with different URLs and navigation.

// To use React Router Dom, you'll need to install it first:


// npm install react - router - dom
// Once installed, you can use it in your application by importing it:


// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Let's dive into the key concepts and features of React Router Dom:

// BrowserRouter: This component provides a router for your application, and it must be placed at the top level of your component hierarchy.It listens for changes to the browser's URL and renders the appropriate components based on the URL.

// Route: This component defines a mapping between a URL and a component.It takes a path prop that defines the URL path and a component prop that specifies the component to render when the URL matches the path.


//     < Route path = "/" component = { Home } />
//         Switch: This component is used to group Route components and only renders the first matching Route.This is useful for preventing multiple routes from matching the same URL.

//     < Switch >
//   <Route path="/" component={Home} />
//   <Route path="/about" component={About} />
//   <Route path="/contact" component={Contact} />
// </ >

//     Link: This component is used to create links to other pages in your application.It takes a to prop that specifies the URL to link to.

//     < Link to = "/" > Home</ >
// <Link to="/about">About</Link>
// <Link to="/contact">Contact</Link>

// useParams: This hook allows you to access URL parameters in your components.It returns an object that contains key - value pairs for each parameter in the URL.

// import { useParams } from 'react-router-dom';

// function UserProfile() {
//     const { userId } = useParams();

//     return <div>User profile for user {userId}</div>;
// }

// useHistory: This hook allows you to access the browser history object in your components.This is useful for programmatic navigation within your application.

// import { useHistory } from 'react-router-dom';

// function ContactForm() {
//     const history = useHistory();

//     function handleSubmit(event) {
//         event.preventDefault();
         // Submit form logic...
//         history.push('/thank-you');
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             {/* Form fields */}
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// These are just a few of the key concepts and features of React Router Dom.By using these tools and techniques, you can create dynamic and powerful multi - page applications that are easy to navigate and use.




