import Team from "../components/Team"
import Time from "../components/Time"
import RoomInventory from "../components/RoomInventory"
import Searchbtn from "../components/Searchbtn"
import Modal from "react-modal"
import "../App.css"
import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

export default function RoomBooking(){
    const [date,setDate] = useState (new Date());
    const onChange = date => {
        setDate(date);
    };
    return (
        <div className="RoomBookingContainer">
            <h1>Book et lokale</h1>
            <Team />
            <div>
            
            <Calendar className="calendar" onChange={onChange} value={date} />
        </div>
            <Time />
            <RoomInventory />
            <Searchbtn date={date}/>
        </div>
    )
}