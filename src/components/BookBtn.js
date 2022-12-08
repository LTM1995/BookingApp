import { useNavigate } from "react-router-dom"

export default function BookBtn({date, room, existingBookingId, retriggerFetch}){
    const navigate = useNavigate();
     
    const handleBooking = async (e) => {
        e.preventDefault();
        
        // Hvis der er et eksisterende bookingid så laver vi en put request i stedet for en post
        if(existingBookingId){
            let booking = {date: date, room: room.name, floor: room.floor}
            const response = await fetch(
            `https://bookingapp-6759a-default-rtdb.firebaseio.com/bookings/${existingBookingId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(booking), 
                
            }
            
            );
            const result = await response.json();
            booking.id = result.name;
        }else{

            let booking = {date: date, room: room.name, floor: room.floor}
            const response = await fetch(
            "https://bookingapp-6759a-default-rtdb.firebaseio.com/bookings.json", 
            {
                method: 'POST',
                body: JSON.stringify(booking)
                
            }
            
            );
            const result = await response.json();
            booking.id = result.name;
        }

        // Naviger til /BookingApp
        	navigate("/BookingApp")
       
        
    }
    return (
        <div>
            <button onClick = {handleBooking} className ="bookBtn">Book</button>
        </div> 
    );
}