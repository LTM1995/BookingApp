import YourBookings from "./YourBookings"
import { Link } from "react-router-dom"
import "../App.css"

export default function Dashboard(){
    return (
        <div>
            <h1>Booking Oversigt</h1>
            <button className="knapLokale"><Link to="/roombooking">Book Lokale</Link> </button>
            <YourBookings />
        </div>
    )
}