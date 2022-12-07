import { Link } from "react-router-dom";

export default function EditBtn({id, date}){

return (
    <div>
        <button className="openModalBtn"><Link to="/BookingApp/roombooking" state={{pickedDate: date, existingBookingId: id}} >Ændre</Link></button>
    </div>
)

}
