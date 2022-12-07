
import Select from "react-select"
import { useState } from "react"
import useFetch from "../API/useFetch";

const urlT = "https://bookingapp-6759a-default-rtdb.firebaseio.com/teams.json"
export default function Team (){
    const {data, loading, error} = useFetch(urlT)
    const [selectedOptions, setSelectedOptions] = useState();
    
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log(error);
    console.log(data);
    const optionList = data.map(team=> {
        return {
            value: team.capacity, 
            label: team.id
        }});
   
    
    
    
    
    function handleSelect(data) {
        setSelectedOptions(data);
    }
    return (
        <div className ="dropdown-container">
            <Select
            options={optionList}
            placeholder="Hold"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            />
        </div>
    );
}


/*export default function Team(props){
    return (
        <div>
            <label for="hold">Hold:</label>
                <select id="hold" name="hold">
                    <option value="">{props.item.hold}</option>
                </select>
        </div>
    )

}*/
