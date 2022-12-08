import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import Logo from "../icon/cphbusiness-logo.png"

const BookingComponent = ({booking, retriggerFetch})=> {

    const {room, id, floor, date} = booking;


    return(
        <div>   
            <div className="yourBookingsCard">
                <img src={Logo} alt="CphBusiness Logo" />
                <h4>Nørgaardsvej 30, 2800 Kongens Lyngby</h4>
                <h3>Lokale#{room}</h3>
                <h3>{date}</h3>
                <h3 id="floorTitle">Etage: {floor}.Sal</h3>
                <EditBtn id={id} date={date}/>
                <DeleteBtn id={id} retriggerFetch={retriggerFetch}/>
            </div>
        </div>
        )
}

export default BookingComponent;