

export default function EditBtn({id}){
    const handleEdit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(id)
        };
        fetch (`https://bookingapp-6759a-default-rtdb.firebaseio.com/bookings/${id}.json`, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ editId: data.id}));        
}


return (
    <div>
        <button onClick={handleEdit} className="openModalBtn">Ændre</button>
    </div>
)

}
