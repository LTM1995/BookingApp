import Team from "./Team"
import Time from "./Time"
import RoomInventory from "./RoomInventory"
import AppCalendar from "./AppCalendar"
import Searchbtn from "./Searchbtn"
import Modal from "react-modal"
import "../App.css"

export default function RoomBooking(){

    return (
        <div className="RoomBookingContainer">
            <h1>Book et lokale</h1>
            <Team />
            <AppCalendar />
            <Time />
            <RoomInventory />
            <Searchbtn />
        </div>
    )
}