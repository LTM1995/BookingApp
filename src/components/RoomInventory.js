import iconProjector from "../icon/projector_yellow.svg"
import iconScreen from "../icon/screen_yellow.svg"
import iconSpeaker from "../icon/speaker_yellow.svg"

export default function RoomInventory(){
    return (
        <div className="RoomInventoryContainer">
            <img src={iconProjector} />
            <img src={iconScreen} />
            <img src={iconSpeaker} />
        </div>
    )
}