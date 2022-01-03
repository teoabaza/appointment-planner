import React from "react";

export const ContactForm = (props) => {

  const handleNameChange = (e) => {
    props.setCurrentName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    props.setCurrentPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    props.setCurrentEmail(e.target.value);
  }

  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" aria-label="Full name" placeholder="Full name" value={props.currentName} onChange={handleNameChange}/>
      <input type="tel" aria-label="Phone number" placeholder="Phone number" pattern="^\d{11}$" value={props.currentPhone} onChange={handlePhoneChange}/>
      <input type="email" aria-label="Email address" placeholder="Email address" value={props.currentEmail} onChange={handleEmailChange}/>
      <input type="submit" value='Submit'/>
    </form>
  );
}; 
