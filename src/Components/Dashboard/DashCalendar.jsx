import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './DashCalendar.css';

function DashCalendar() {
  const [value, onChange] = useState(new Date());

  const task = value => {
    console.log(value);
  }

  return (
    <div className="calen">
      <Calendar 
        calendarClassName="responsive-calendar"
        onChange={onChange}
        value={value}
        onClickDay = {task}
      />

      
    </div>
  );
}
export default DashCalendar;