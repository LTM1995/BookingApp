import useFetch from "../API/useFetch"
<<<<<<< Updated upstream
import Logo from "../icon/cphbusiness-logo.png"
import RoomComponent from "./RoomComponent";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
=======
import BookingComponent from "./BookingComponent";
>>>>>>> Stashed changes

const urlB = "https://bookingapp-6759a-default-rtdb.firebaseio.com/bookings.json"
export default function YourBookings(){
    const {data, loading, error} = useFetch(urlB)
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log(error);
<<<<<<< Updated upstream
    console.log(data)
=======

>>>>>>> Stashed changes
    return (
        <div>
            {data.map(booking => (
            <div key={booking.id}>   
                <div className="yourBookingsCard">
                    <img src={Logo} />
                    <h4>Nørgaardsvej 30, 2800 Kongens Lyngby</h4>
                    <h3>Lokale#{booking.room}</h3>
                    <h3>{booking.date}</h3>
                    <h3>Etage: {booking.floor}.Sal</h3>
                    <EditBtn id={booking.id} />
                    <DeleteBtn id={booking.id}/>
                </div>
            </div>))}
        </div>
    )
}