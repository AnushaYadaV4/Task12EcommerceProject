import React, { useRef } from 'react';

import classes from './ContactUs.module.css';



function ContactUs(props){
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneNumberRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };

    props.onAddUserData(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>User Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='email'>Email ID</label>
        <input type='email' rows='5' id='email' ref={emailRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='phoneNumber'>Phone number</label>
        <input type='number' id='phoneNumber' ref={phoneNumberRef} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ContactUs;
