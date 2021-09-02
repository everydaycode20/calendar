
import "../styles/calendar-control.css";

const CalendarControl = ({month}) => {

    return (
        <div className="calendar-control-container">
            <button>prev</button>
            <span>{month}</span>
            <button>next</button>
        </div>
    );

}

export default CalendarControl;