import React, { useState, useEffect } from "react";

import "../styles/calendar-days.css";

const CalendarDays = ({ newMonth, daysInMonth }) => {

    const months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    const getDay = day => {
        console.log(day);
    };
    
    return (
        <div className="calendar-days-container" style={{gridTemplateRows: `repeat(${daysInMonth.length/7}, 30px)`}}>
            {daysInMonth.map((day, index) => {

                return (
                    <div key={index} className="day-item" onClick={() => getDay({"day": day.day, "date": day.date, "month": day.month, "year": day.year})} style={{backgroundColor: (day.date === new Date().getDate() && day.month === months[new Date().getMonth()] && new Date().getFullYear() === day.year) && "#bcbcbc"}}>

                        <span style={{color: day.month !== months[newMonth] ? "#d8d8d8" : "black"}}>{day.date}</span>

                    </div>
                )
            })}
        </div>
    );

}

export default CalendarDays;