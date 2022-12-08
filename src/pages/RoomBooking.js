import Team from "../components/Team"
import Time from "../components/Time"
import RoomInventory from "../components/RoomInventory"
import Searchbtn from "../components/Searchbtn"
import "../App.css"
import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

export default function RoomBooking(){
<<<<<<< Updated upstream
    const [date,setDate] = useState (new Date());
    const onChange = date => {
        setDate(date);
=======
    // Vi bruger useLocation hooken til at hive state ud fra Link som passer state værdierne pickedDate og exisitingBookingId fra editButton
    const location = useLocation();

    let pickedDate = null;
    let existingBookingId = null;

    // Hvis location state er sat 
    if(location.state){
        // Indlæser pickedDate fra location.state og formaterer den til en new Date(dato) sådan så kalenderen kan forstå det
        pickedDate = new Date(location.state.pickedDate);

        // Hvis location.state.existingBookingId er sat (sendt fra editbutton) så sæt existingBookindId variablen til at være den værdi som er i state
        if(location.state?.existingBookingId){
            existingBookingId = location.state.existingBookingId;
        }
    }

    const [date, setDate] = useState (new Date());

    const onChange = input => {

        if(pickedDate){
            pickedDate = input;
        }

        setDate(input);
>>>>>>> Stashed changes
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