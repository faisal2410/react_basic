// Handling form submissions and validation is an important part of building any web application, and React provides several tools and techniques for making this process easy and intuitive.

//     Here's an example of a simple form with validation in React:


// import React, { useState } from 'react';

// function ContactForm() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [errors, setErrors] = useState({});

//     function validateForm() {
//         let errors = {};
//         let isValid = true;

//         if (!name) {
//             errors.name = 'Please enter your name';
//             isValid = false;
//         }

//         if (!email) {
//             errors.email = 'Please enter your email';
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             errors.email = 'Please enter a valid email';
//             isValid = false;
//         }

//         if (!message) {
//             errors.message = 'Please enter a message';
//             isValid = false;
//         }

//         setErrors(errors);
//         return isValid;
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         if (validateForm()) {
//             console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={event => setName(event.target.value)}
//                 />
//                 {errors.name && <span className="error">{errors.name}</span>}
//             </label>
//             <label>
//                 Email:
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={event => setEmail(event.target.value)}
//                 />
//                 {errors.email && <span className="error">{errors.email}</span>}
//             </label>
//             <label>
//                 Message:
//                 <textarea
//                     value={message}
//                     onChange={event => setMessage(event.target.value)}
//                 />
//                 {errors.message && <span className="error">{errors.message}</span>}
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// In this example, we've added a validateForm function that checks whether each field in the form is valid. We use the errors state variable to keep track of any validation errors that occur, and we use the setErrors function to update the state with any new errors.

// When the user submits the form, we call the validateForm function to check whether the form is valid.If it is, we log the values of the input fields to the console.If not, we simply return without doing anything.

// To display any validation errors that occur, we add a < span > element below each input field that will display the error message if the corresponding errors object contains an error message for that field.

//     Overall, this example shows how you can use React state to manage form validation and submission in a simple and intuitive way.By defining a validateForm function and using state to manage errors, you can create dynamic and powerful forms that are easy to use and understand.



