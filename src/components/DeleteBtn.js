

export default function DeleteBtn({id}){
    const handleDelete = async (e) => {
        e.preventDefault()
        
    
        await fetch(`https://bookingapp-6759a-default-rtdb.firebaseio.com/bookings/${id}.json`, {method: 'DELETE'});    
    }

return (
    <div>
        <button  onClick={handleDelete} className="cancelBtn" >Annuller</button>
    </div>
)}