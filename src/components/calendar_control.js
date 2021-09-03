
import "../styles/calendar-control.css";

import ArrowLeft from "../assets/arrow_left_.svg";

const CalendarControl = ({ year, setNewMonth, newMonth, setYear, setChangeView, changeView }) => {

    const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    
    const prevMonth = () => {
        
        if (changeView) {
            setYear(year - 1);
        }
        else{
            setNewMonth(newMonth - 1);

            if (newMonth === 0) {
                setNewMonth(11);
                setYear(year - 1);
            }
        }

    }

    const nextMonth = () => {

        if (changeView) {
            setYear(year + 1);
        }
        else{
            setNewMonth(newMonth + 1);

            if (newMonth >= 11) {
                setNewMonth(0);
                setYear(year + 1);
            }
        }

    }

    return (
        <div className="calendar-control-container">
            <button onClick={() => prevMonth()}> <img src={ArrowLeft} alt="next month" /> </button>
            {!changeView ? <button onClick={() => setChangeView(true)}>{months[newMonth]} {year}</button> : <button onClick={() => setChangeView(true)}>{year}</button>}
            <button onClick={() => nextMonth()}><img src={ArrowLeft} alt="next month" className=""/> </button>
        </div>
    );

}

export default CalendarControl;