import React, {useState} from "react";
import {TileList} from '../../components/tileList/TileList';
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currentContact, setCurrentContact] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.addNewAppointment(currentContact, currentTitle, currentDate, currentTime);
   setCurrentContact('');
   setCurrentTitle('');
   setCurrentDate('');
   setCurrentTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts = {props.contacts} 
          onSubmit={handleSubmit} 
          currentContact={currentContact} 
          currentTitle={currentTitle} 
          currentDate={currentDate} 
          currentTime={currentTime} 
          setCurrentContact={setCurrentContact} 
          setCurrentTitle={setCurrentTitle} 
          setCurrentDate={setCurrentDate} 
          setCurrentTime={setCurrentTime}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={props.appointments}/>
      </section>
    </div>
  );
};
