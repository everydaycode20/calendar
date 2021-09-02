
import "../styles/calendar-control.css";

const CalendarControl = ({ year, setNewMonth, newMonth, setYear}) => {

    const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    const prevMonth = () => {

        setNewMonth(newMonth - 1);

        if (newMonth === 0) {
            setNewMonth(11);
            setYear(year - 1);
        }
        
    }

    const nextMonth = () => {

        setNewMonth(newMonth + 1);

        if (newMonth >= 11) {
            setNewMonth(0);
            setYear(year + 1);
        }
        
    }

    return (
        <div className="calendar-control-container">
            <button onClick={() => prevMonth()}>prev</button>
            <button>{months[newMonth]} {year}</button>
            <button onClick={() => nextMonth()}>next</button>
        </div>
    );

}

export default CalendarControl;