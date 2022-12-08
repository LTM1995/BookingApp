import BookingModalCard from "./BookingModalCard"

export default function Modal({date, closeModal, existingBookingId}) {
    return (
        
            <div className="modalContainer">
                <div className="closeBtnModal">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <BookingModalCard date={date} existingBookingId={existingBookingId}/>
            </div>
    
    )
}