import iconRoom from "../icon/room.png"
import iconProjector from "../icon/projector_blue.svg"
import iconScreen from "../icon/screen_blue.svg"
import iconSpeaker from "../icon/speaker_blue.svg"
import "../App.css"

export default function BookingModalCard(){
    return (
        <div className = "modalCardContainer">
            <div className="imgContainer">
                <h2>Lokale #2.02</h2>
                <h3>Etage:2</h3>
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