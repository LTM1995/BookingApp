
import { useState } from "react"
import BookingModalCard from "./BookingModalCard"

export default function Modal({closeModal}) {
    return (
        
            <div className="modalContainer">
                <div className="closeBtnModal">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <BookingModalCard />
            </div>
    
    )
}