import React, { useState, useEffect } from "react";

import "../styles/calendar-days.css";

const CalendarDays = ({ newMonth, daysInMonth, changeView, leftOrRight }) => {
    
    const months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        }
    }, []);

    const getDay = day => {
        console.log(day);
    };
    
    return (
        <div className="calendar-days-container" style={{gridTemplateRows: `repeat(${daysInMonth.length/7 + 1}, 30px)`}} mounted={isMounted.toString()} pos={leftOrRight}>
            
                {daysOfWeek.map((day, index) => {
                    return <span key={index}>{day.substring(0, 3)}</span>
                })}

            {daysInMonth.map((day, index) => {

                let currentDay = day.date === new Date().getDate() && day.month === months[new Date().getMonth()] && day.year === new Date().getFullYear() && !changeView;

                return (
                    <div key={index} className="day-item" onClick={() => getDay({"day": day.day, "date": day.date, "month": day.month, "year": day.year})} style={{backgroundColor: currentDay && "#bcbcbc"}}>

                        <span style={{color: day.month !== months[newMonth.month] ? "#d8d8d8" : "black"}}>{day.date}</span>

                    </div>
                )
            })}
        </div>
    );

}

export default CalendarDays;