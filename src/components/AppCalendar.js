
import Calendar from "react-calendar"
import React, { useState} from "react"
import "../App.css"
import 'react-calendar/dist/Calendar.css'

export default function AppCalendar(){
    const [date,setDate] = useState (new Date());
    const onChange = date => {
        setDate(date);
    };
    return (
        <div>
            
            <Calendar className="calendar" onChange={onChange} value={date} />
        </div>
    )
}