// In React, controlled components are used to create forms and inputs that are fully controlled by the component's state. This means that the value of the input field is always controlled by the component, rather than being managed by the browser's DOM.In this way, controlled components allow for greater control over form input and validation.

//     Here's an example of a simple controlled form in React:


// import React, { useState } from 'react';

// function ContactForm() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     function handleSubmit(event) {
//         event.preventDefault();
//         console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
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
//             </label>
//             <label>
//                 Email:
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={event => setEmail(event.target.value)}
//                 />
//             </label>
//             <label>
//                 Message:
//                 <textarea
//                     value={message}
//                     onChange={event => setMessage(event.target.value)}
//                 />
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }


// In this example, we use the useState hook to manage the state of the input fields.We define three state variables: name, email, and message, which correspond to the input fields in the form.We use the value prop to bind the value of each input field to its corresponding state variable, and we use the onChange prop to update the state whenever the user enters text in the input field.

// When the user submits the form, we log the values of the input fields to the console.

// By using controlled components in this way, we can ensure that the state of the form is always in sync with the user's input, which allows for easier validation and error handling. For example, we can use the state variables to check whether the user has entered valid input, and we can disable the submit button until all fields are filled out correctly.

// Overall, creating controlled forms and inputs in React allows for greater control and flexibility when handling user input.By using the useState hook and the value and onChange props, you can create powerful and dynamic forms that are easy to manage and validate.



