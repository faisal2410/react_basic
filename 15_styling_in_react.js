// Styling in React can be done in a number of ways, depending on your preferences and the requirements of your project.Here are some of the most common approaches:

// Inline styles
// Inline styles allow you to add styles directly to your JSX elements using JavaScript objects.The styles are defined as key - value pairs, where the keys are the CSS properties and the values are the values of those properties.


// import React from 'react';

// function MyComponent() {
//     const styles = {
//         backgroundColor: 'blue',
//         color: 'white',
//         padding: '10px',
//         borderRadius: '5px'
//     };

//     return (
//         <div style={styles}>
//             <p>Hello, world!</p>
//         </div>
//     );
// }

// In the example above, we define an object called styles that contains the CSS styles we want to apply to the div element.We then pass the styles object as a prop to the div element using the style attribute.

// CSS Modules
// CSS Modules are a popular approach to styling in React.They allow you to write traditional CSS files and import them into your React components as modules.CSS Modules provide local scoping for CSS classes, which helps prevent naming conflicts and allows for more modular code.


//     /* styles.module.css */

//     .container {
//     background - color: blue;
//     color: white;
//     padding: 10px;
//     border - radius: 5px;
// }

// import React from 'react';
// import styles from './styles.module.css';

// function MyComponent() {
//     return (
//         <div className={styles.container}>
//             <p>Hello, world!</p>
//         </div>
//     );
// }

// In the example above, we define a CSS file called styles.module.css that contains the styles we want to apply to our div element.We then import the styles module into our component and use the className attribute to apply the container class to the div element.

// Styled Components
// Styled Components are another popular approach to styling in React.They allow you to define styles as components, which can then be used as regular React components within your code.Styled Components provide scoped CSS styling, which makes it easy to manage complex styles and component hierarchies.


// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   background-color: blue;
//   color: white;
//   padding: 10px;
//   border-radius: 5px;
// `;

// function MyComponent() {
//     return (
//         <Container>
//             <p>Hello, world!</p>
//         </Container>
//     );
// }

// In the example above, we define a styled component called Container that contains the styles we want to apply to our div element.We then use the Container component within our code, just like any other React component.

// These are just a few of the most common approaches to styling in React.There are many other tools and libraries available for styling, such as CSS -in -JS libraries like Emotion and JSS, and utility libraries like Tailwind CSS.



