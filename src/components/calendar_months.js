import React, {memo, useEffect, useState} from "react";

import "../styles/calendar-months.css";

const CalendarMonths = memo(({ setNewMonth, setChangeView }) => {

    const months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        }
    }, []);

    const getMonth = (index) => {
        setNewMonth( prev => ({...prev, month: index, view: true}) )
    };

    return (
        <div className="calendar-months-container" mount={isMounted.toString()}>
            {months.map((month, index) => {

                return (
                    <button key={index} onClick={() => getMonth(index)}>{month.substring(0, 3)}</button>
                )
            })}
        </div>
    );
});

export default CalendarMonths;