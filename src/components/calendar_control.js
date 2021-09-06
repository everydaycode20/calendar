
import "../styles/calendar-control.css";

import ArrowLeft from "../assets/arrow_left_.svg";

const CalendarControl = ({ year, setNewMonth, newMonth, setYear, setChangeView, changeView, setLeftOrRight }) => {

    const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    
    const prevMonth = () => {
        
        if (changeView) {
            setYear(year - 1);
            setNewMonth( prev => ({...prev, view: false}) );
        }
        else{
            setNewMonth(prev => ({...prev, month: newMonth.month - 1}));
            setLeftOrRight("left");
            if (newMonth.month === 0) {
                setNewMonth(prev => ({...prev, month: 11 }));
                setYear(year - 1);
            }
        }

    }

    const nextMonth = () => {

        if (changeView) {
            setYear(year + 1);
            setNewMonth( prev => ({...prev, view: false}) );
        }
        else{
            // setNewMonth(newMonth + 1);
            setNewMonth(prev => ({...prev, month: newMonth.month + 1}));
            setLeftOrRight("right");
            if (newMonth.month >= 11) {
                // setNewMonth(0);
                setNewMonth(prev => ({...prev, month: 0}));
                setYear(year + 1);
            }
        }

    }

    const makeChangeView = () => {
        setChangeView(true);
        setNewMonth( prev => ({...prev, view: false}) );
    };

    return (
        <div className="calendar-control-container">
            <button onClick={() => prevMonth()}> <img src={ArrowLeft} alt="next month" /> </button>
            {!changeView ? <button onClick={() => makeChangeView()}>{months[newMonth.month]} {year}</button> : <button onClick={() => makeChangeView()}>{year}</button>}
            <button onClick={() => nextMonth()}><img src={ArrowLeft} alt="next month" className=""/> </button>
        </div>
    );

}

export default CalendarControl;