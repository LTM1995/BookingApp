import YourBookings from "./YourBookings";
import { Link } from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";

export default function Dashboard(){

    return (
        <div>
            <div>
                <h1>Booking Oversigt</h1>
                <button className="knapLokale"><Link to="/BookingApp/roombooking">Book Lokale</Link> </button>
            
            </div>
            <div>
                <h3>Dine Bookings</h3>
                <YourBookings />
            </div>
        </div>
    )
}