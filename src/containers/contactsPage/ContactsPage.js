import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [duplicates, setDuplicates] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(duplicates===false){ 
    props.addNewContact(currentName, currentPhone, currentEmail);
   }
   else alert('This name already exists in the contacts list!')
   setCurrentName('');
   setCurrentPhone('');
   setCurrentEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect( () => {
    let k=0;
    for(let i=0; i< props.contacts.length; i++){
      if(props.contacts[i].name===currentName){
        k++;
      }
    }
    if(k>0){
      setDuplicates(true);
    } else {
      setDuplicates(false);
    }
    
  }, [currentName, props.contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          onSubmit={handleSubmit} 
          currentName={currentName} 
          currentPhone={currentPhone} 
          currentEmail={currentEmail} 
          setCurrentName={setCurrentName} 
          setCurrentPhone={setCurrentPhone} 
          setCurrentEmail={setCurrentEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts}/>
      </section>
    </div>
  );
};
