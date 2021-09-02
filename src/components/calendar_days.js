import React, { useState, useEffect } from "react";

import "../styles/calendar-days.css";

const CalendarDays = ({daysInMonth, setDaysInMonth}) => {

    // const [daysInMonth, setDaysInMonth] = useState([]);

    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    useEffect(() => {
        
        let tempMonth = new Date().getMonth();

        // if(!month) {
        //     setMonthName(months[tempMonth]);
        // }

        let objDaysOfMonth = [];

        let daysOfMonth = [];

        const year = new Date().getFullYear();
        
        const month = new Date().getMonth();

        const date = new Date(year, month , 1);

        const tempDate = new Date(year, month , 1);

        const firstDayOfYear = new Date(year, month , 1).getDay();

        for (let i = 0; i < firstDayOfYear; i++) {
            
            tempDate.setDate(tempDate.getDate() - 1);
            // console.log(daysOfWeek[tempDate.getDay()]);
            // daysOfMonth.push(new Date(date).getDate());
            daysOfMonth.unshift(new Date(tempDate).getDate());
            objDaysOfMonth.unshift({"name": daysOfWeek[new Date(tempDate).getDay()], "day": new Date(tempDate).getDate(), "month": months[new Date(tempDate).getMonth()]});
            // daysOfMonth.push("x");
        }

        while (date.getMonth() === month) {
            daysOfMonth.push(new Date(date).getDate());
            objDaysOfMonth.push({"name": daysOfWeek[new Date(date).getDay()], "day": new Date(date).getDate(), "month": months[new Date(date).getMonth()]});
            date.setDate(date.getDate() + 1);
            
        }
        
        while (objDaysOfMonth.length % 7 !== 0) {
            daysOfMonth.push("x");
            
            objDaysOfMonth.push({"name": daysOfWeek[new Date(date).getDay()], "day": new Date(date).getDate(), "month": months[new Date(date).getMonth()]});
            date.setDate(date.getDate() + 1);
        }

        console.log(daysOfMonth);

        // setDaysInMonth(daysOfMonth);
        setDaysInMonth(objDaysOfMonth);
        console.log(objDaysOfMonth);
    }, []);

    const getDay = day => {
        console.log(day);
    };

    return (
        <div className="calendar-days-container" style={{gridTemplateRows: `repeat(${daysInMonth.length/7}, 30px)`}}>
            {daysInMonth.map((day, index) => {

                return (
                    <div key={index} className="day-item" onClick={() => getDay({"name": day.name, "day": day.day, "month": day.month})} style={{backgroundColor: (day.day === new Date().getDate() && day.month === months[new Date().getMonth()]) && "cyan"}}>
                        <span style={{color: day.month !== months[new Date().getMonth()] ? "#d8d8d8" : "black"}}>{day.day}</span>
                    </div>
                )
            })}
        </div>
    );

}

export default CalendarDays;