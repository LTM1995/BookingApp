
import { useState } from "react"
import Modal from "./RoomOptionModal"

export default function Searchbtn(){
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
        <button className="openModalBtn"
        onClick={() => {
            setOpenModal(true);
        }}
        >
            Søg
        </button>
        {openModal && <Modal closeModal={setOpenModal}/>}
        </>
    )
}