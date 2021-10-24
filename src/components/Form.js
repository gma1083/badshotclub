import { setUserProperties } from "@firebase/analytics";
import React from "react";
import TextInput from "./TextInput";

export default function Form(props) {

    const inputs = props.questions.map(q => <TextInput question={q} handleChange={props.handleChange}/>);

    return(
        <form className="loginForm" onSubmit={props.handleSubmit}>
            {inputs}
            <input type="submit" value={props.buttonLabel} />

            {props.children}
        </form>
     )
    
}