import React, {useState, useEffect} from "react";

import CalendarDays from "./calendar_days";
import CalendarControl from "./calendar_control";
import CalendarMonths from "./calendar_months";

import "../styles/calendar-main.css";

const Calendar = () => {

    const [daysInMonth, setDaysInMonth] = useState([]);

    const [newMonth, setNewMonth] = useState({ "month": new Date().getMonth(), "view": true });

    const [year, setYear] = useState(new Date().getFullYear());
    
    const [changeView, setChangeView] = useState(false);

    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    useEffect(() => {
        
        let objDaysOfMonth = [];

        const tempYear = year;
        
        const month = newMonth.month;

        const date = new Date(tempYear, month , 1);

        const tempDate = new Date(tempYear, month , 1);

        const firstDayOfYear = new Date(tempYear, month , 1).getDay();

        for (let i = 0; i < firstDayOfYear; i++) {
            
            tempDate.setDate(tempDate.getDate() - 1);
            
            objDaysOfMonth.unshift({"day": daysOfWeek[new Date(tempDate).getDay()], "date": new Date(tempDate).getDate(), "month": months[new Date(tempDate).getMonth()], "year": tempDate.getFullYear()});
        }

        while (date.getMonth() === month ) {
            
            objDaysOfMonth.push({"day": daysOfWeek[new Date(date).getDay()], "date": new Date(date).getDate(), "month": months[new Date(date).getMonth()], "year": date.getFullYear()});
            
            date.setDate(date.getDate() + 1);
            
        }
        
        while (objDaysOfMonth.length % 7 !== 0) {
            
            objDaysOfMonth.push({"day": daysOfWeek[new Date(date).getDay()], "date": new Date(date).getDate(), "month": months[new Date(date).getMonth()], "year": date.getFullYear()});

            date.setDate(date.getDate() + 1);
        }

        setDaysInMonth(objDaysOfMonth);

        if (newMonth.view === true) {
            setChangeView(false);
        }
        else{
            setChangeView(true);
        }
        
    }, [newMonth, year]);
    
    return (
        daysInMonth.length > 0 && <div className="calendar-main-container">
            <CalendarControl setYear={setYear} year={year} setNewMonth={setNewMonth} newMonth={newMonth} setChangeView={setChangeView} changeView={changeView}/>
            {!changeView && <CalendarDays newMonth={newMonth} setDaysInMonth={setDaysInMonth} daysInMonth={daysInMonth} setYear={setYear} year={year} changeView={changeView}/>}
            {changeView && <CalendarMonths setNewMonth={setNewMonth} setChangeView={setChangeView}/>}
        </div>
    );

}

export default Calendar;