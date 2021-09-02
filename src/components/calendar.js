import React, {useState} from "react";

import CalendarDays from "./calendar_days";
import CalendarControl from "./calendar_control";

import "../styles/calendar-main.css";

const Calendar = () => {

    const [daysInMonth, setDaysInMonth] = useState([]);

    const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    const [month, setMonth] = useState(months[new Date().getMonth()]);

    return (
        <div className="calendar-main-container">
            <CalendarControl month={month}/>
            <CalendarDays setDaysInMonth={setDaysInMonth} daysInMonth={daysInMonth}/>
        </div>
    );

}

export default Calendar;