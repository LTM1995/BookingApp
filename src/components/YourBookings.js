import useFetch from "../API/useFetch"
import RoomComponent from "./RoomComponent";
import BookingComponent from "./BookingComponent";

const urlB = "https://bookingapp-6759a-default-rtdb.firebaseio.com/bookings.json"
export default function YourBookings(){
    const {data, loading, error, retriggerGetData} = useFetch(urlB);
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log(error);

    console.log(data);
    return (
        <div>
            {data.map(booking => {
                return (
                    <BookingComponent key={booking.id} retriggerFetch={retriggerGetData} booking={booking}/>
                ); 
            })}
        </div>
    )
}