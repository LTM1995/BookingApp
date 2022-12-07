

export default function DeleteBtn({id, retriggerFetch}){
    const handleDelete = async (e) => {
        e.preventDefault()
        
    
        await fetch(`https://bookingapp-6759a-default-rtdb.firebaseio.com/bookings/${id}.json`, {method: 'DELETE'});
        
        retriggerFetch();
    }

return (
    <div>
        <button  onClick={handleDelete} className="cancelBtn" >Annuller</button>
    </div>
)}