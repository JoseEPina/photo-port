import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
   // Hooks
   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
   const [errorMessage, setErrorMessage] = useState('');

   // desctructure formState
   const { name, email, message } = formState;

   function handleChange(e) {
      if (e.target.name === 'email') {
         const isValid = validateEmail(e.target.value);
         console.log(isValid);
         //? isValid conditional statement
         if (!isValid) {
            setErrorMessage('Your email is invalid.');
         } else {
            if (!e.target.value.length) {
               setErrorMessage(`${e.target.name} is required.`);
            } else {
               setErrorMessage('');
            }
         }
      }
      if (!errorMessage) {
         setFormState({ ...formState, [e.target.name]: e.target.value });
      }
      console.log('errorMessage', errorMessage);
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
   }
   //console.log(formState);
   // JSX
   return (
      <section>
         <h1 data-testid='h1tag'>Contact me</h1>
         <form id='contact-form' onSubmit={handleSubmit}>
            {/*name input*/}
            <div>
               <label htmlFor='name'>Name:</label>
               <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
            </div>
            {/*email input*/}
            <div>
               <label htmlFor='email'>Email:</label>
               <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
            </div>
            {/*message text area*/}
            <div>
               <label htmlFor='message'>Message:</label>
               <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
               {errorMessage && (
                  <div>
                     <p className='error-text'>{errorMessage}</p>
                  </div>
               )}
            </div>
            <button data-testid='button' type='submit'>
               Submit
            </button>
         </form>
      </section>
   );
}

export default ContactForm;
