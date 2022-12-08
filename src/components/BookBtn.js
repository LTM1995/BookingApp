import { useNavigate } from "react-router-dom"

<<<<<<< Updated upstream
export default function BookBtn({date, room}){
=======
export default function BookBtn({date, room, existingBookingId, retriggerFetch}){
    const navigate = useNavigate();
>>>>>>> Stashed changes
     
    const handleBooking = async (e) => {
        e.preventDefault();
        
<<<<<<< Updated upstream
         let booking = {date: date, room: room.name, floor: room.floor}
       const response = await fetch(
        "https://bookingapp-6759a-default-rtdb.firebaseio.com/bookings.json", 
        {
            method: 'POST',
            body: JSON.stringify(booking)
            
        }
        
        );
        const result = await response.json();
        console.log(result);
        booking.id = result.name;
=======
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
       
>>>>>>> Stashed changes
        
    }
    return (
        <div>
            <button onClick = {handleBooking} className ="bookBtn">Book</button>
        </div> 
    );
}