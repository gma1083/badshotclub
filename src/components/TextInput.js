import React from "react";

export default function TextInput(props) {

    const {question, handleChange} = props;
    const {label, id, type} = question;

    return(
        <div> 
            <label> {label} </label>
            <input
            id={id}
            type={type}
            onChange={handleChange}/>
        </div>
     )
    
}