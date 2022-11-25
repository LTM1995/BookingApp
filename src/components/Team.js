
import Select from "react-select"
import React, { useState } from "react"

export default function Team ({data}){
    const [selectedOptions, setSelectedOptions] = useState();
    const optionList = [
        { value: "Mul1 Hold A", label: "Mul1 Hold A"},
        { value: "Mul2 Hold B", label: "Mul2 Hold B"},
        { value: "Mul3 Hold C", label: "Mul3 Hold C"}
    ];
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
