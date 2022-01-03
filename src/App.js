import './App.css';

import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([
   {name: 'Adam Cosgrove', phone: '07444393080', email: 'adamcozis@hotmail.co.uk'},
   {name: 'Teo Abaza', phone: '07909781340', email: 'teoabaza@yahoo.com'},
   {name: 'Gal Gadot', phone: '0721038550', email: 'galgadot@live.co.uk'},
   {name: 'Charles Xavier', phone: '0728319406', email: 'professorxavier@xavierschool.org'}
  ]);
 const [appointments, setAppointments] = useState([
   {contact: 'Teo Abaza', title: 'Radiology: swollen ankle', date: '16.12.21', time: '16:45'},
   {contact: 'Gal Gadot', title: 'Psychiatry: mental health', date: '22.01.22', time: '12:00'},
   {contact: 'Adam Cosgrove', title: 'Plastic surgery: breast implants', date: '17.02.22', time: '12:30'},
   {contact: 'Charles Xavier', title: 'Oncology: leg paralysis review', date: '03.03.22', time: '14:15'}
 ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addNewContact = (newName, newPhone, newEmail) => {
    setContacts(prev => [{name: newName, phone: newPhone, email: newEmail}, ...prev]);
  }

  const addNewAppointment = (newContact, newTitle, newDate, newTime) => {
    setAppointments(prev => [...prev, {contact: newContact, title: newTitle, date: newDate, time: newTime}]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>

          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>

          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addNewContact={addNewContact}/>
          </Route>

          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} contacts={contacts} addNewAppointment={addNewAppointment}/>
          </Route>

        </Switch>
      </main>
    </>
  );
}

export default App;
