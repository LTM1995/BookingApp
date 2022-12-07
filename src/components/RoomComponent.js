import iconRoom from "../icon/room.png"
import iconProjector from "../icon/projector_blue.svg"
import iconScreen from "../icon/screen_blue.svg"
import iconSpeaker from "../icon/speaker_blue.svg"
import useFetch from "../API/useFetch" 
import BookBtn from "./BookBtn"
import { Link } from "react-router-dom"


const urlR = "https://bookingapp-6759a-default-rtdb.firebaseio.com/rooms.json"
export default function RoomComponent({date, existingBookingId}){
    const {data, loading, error} = useFetch(urlR)
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log(error); 
    
    return ( 
    <div>
        {data.map(room=>(
        <div key={room.id}>   
            <div className="imgContainer">
                <h2>Lokale #{room.name}</h2>
                <h3>Etage:{room.floor}</h3>
                <BookBtn date={date} room={room} existingBookingId={existingBookingId} />
                <img className="iconRoom"src= {iconRoom}/>
            </div>
            <div className="iconContainer">
                <img src={iconProjector}/>
                <img src={iconScreen}/>
                <img src={iconSpeaker}/>
            </div>
        </div>))}
    </div>)

}