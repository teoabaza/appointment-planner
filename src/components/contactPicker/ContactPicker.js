import React from "react";

export const ContactPicker = (props) => {

  const contacts = props.contacts;
  let contactNames = [];
  for(let i=0; i<contacts.length; i++){
    contactNames.push(contacts[i].name);
  }

  return (
    <select onChange={props.pickContact}>
      <option value="">--Please choose a contact--</option>
      {contactNames.map( (item) => (<option key={item}>{item}</option>))}
    </select>
  );
};
