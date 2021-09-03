import React, {memo} from "react";

import "../styles/calendar-months.css";

const CalendarMonths = memo(({ setNewMonth, setChangeView }) => {

    const months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    const getMonth = (index) => {
        // setNewMonth(index);
        setNewMonth( prev => ({...prev, month: index, view: true}) )
        // setChangeView(false);
    };

    return (
        <div className="calendar-months-container">
            {months.map((month, index) => {

                return (
                    <button key={index} onClick={() => getMonth(index)}>{month.substring(0, 3)}</button>
                )
            })}
        </div>
    );
});

export default CalendarMonths;