//import timeData from "./timeData" 
import icon from "../icon/clock.png"
export default function Time(){
    return (
        <div className="timeContainer">
            <div className="timeIcon">
                <img src={icon}/> <h3>Tid</h3>
           </div>
           <div className="timeTable">
                <h4>8:30-12:00</h4>
                <h4>12:30-16:00</h4>
                <h4>8:30-16:00</h4>
            </div>
        </div>
    )
}