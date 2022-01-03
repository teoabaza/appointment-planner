import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = (props) => {

  const handleContactChange = (e) => {
    props.setCurrentContact(e.target.value);
  }

  const handleTitleChange = (e) => {
    props.setCurrentTitle(e.target.value);
  }

  const handleDateChange = (e) => {
    props.setCurrentDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    props.setCurrentTime(e.target.value);
  }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  let today = getTodayString();

  return (
    <form onSubmit={props.onSubmit}>
      <ContactPicker contacts={props.contacts} pickContact={handleContactChange}/>
      <input type="text" aria-label="Appointment title" placeholder="Appointment title" value={props.currentTitle} onChange={handleTitleChange}/>
      <input type="date" aria-label="Date of appointment" placeholder="Date of appointment" min={today} value={props.currentDate} onChange={handleDateChange}/>
      <input type="time" aria-label="Time of appointment" placeholder="Time of appointment" value={props.currentTime} onChange={handleTimeChange} />
      <input type="submit" value='Submit'/>
    </form>
  );
};
