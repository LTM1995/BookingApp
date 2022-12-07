import "../App.css"
import useFetch from "../API/useFetch"
import RoomComponent from "./RoomComponent"

const urlR = "https://bookingapp-6759a-default-rtdb.firebaseio.com/rooms.json"
export default function BookingModalCard({date, existingBookingId}){
    const {data, loading, error} = useFetch(urlR)
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log(error); 

    return (
       
        <div className = "modalCardContainer">
            
                <RoomComponent date={date} existingBookingId={existingBookingId}/>
            
             
        </div>
    )
}