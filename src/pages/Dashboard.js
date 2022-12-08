import YourBookings from "../components/YourBookings";
import { Link } from "react-router-dom";
import "../App.css";



export default function Dashboard(){
    
       
    return (
        <div className="RoomBookingContainer">
            <div>
                <h1>Booking Oversigt</h1>
                <Link to="/BookingApp/roombooking"><button id="dashBookBtn" className="openModalBtn">Book Lokale</button></Link>
            
            </div>
            <div>
                <h3 id="dashUnderTitle">Dine Bookings</h3>
                <YourBookings />
            </div>
        </div>
    )
}