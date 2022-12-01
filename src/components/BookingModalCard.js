import iconRoom from "../icon/room.png"
import iconProjector from "../icon/projector_blue.svg"
import iconScreen from "../icon/screen_blue.svg"
import iconSpeaker from "../icon/speaker_blue.svg"
import "../App.css"
import useFetch from "../useFetch"

export default function BookingModalCard(){
    const {data, loading, error} = useFetch("https://bookingapp-6759a-default-rtdb.firebaseio.com/.json")
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log(error); 
    console.log(data)
    return (
       
        <div className = "modalCardContainer">
            <div className="imgContainer">
                <h2>Lokale #{data.rooms.room}</h2>
                <h3>Etage:1</h3>
                <button className="bookKnap">BOOK</button>
                <img className="iconRoom"src= {iconRoom}/>
            </div>
            <div className="iconContainer">
                <img src={iconProjector}/>
                <img src={iconScreen}/>
                <img src={iconSpeaker}/>
            </div>
        </div>
    )
}