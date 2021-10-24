import React, { Component } from "react";
import Form from "../components/Form";
import { signInUser, createUserAccount, addUser } from "../firebase";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            pdga: "",
            udisc: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            const userAccount = await createUserAccount(this.state.email, this.state.password);
            this.props.successfulLoginHandler(userAccount);
            const user = await addUser({...this.state, uid : userAccount.uid});
        }      
        catch(error) {
            console.log(error);
        }  
    }

    render() {

        const questions = [
            {
                id: "firstName",
                type: "text",
                label: "First Name"
            },
            {
                id: "lastName",
                type: "text",
                label: "Last Name"
            },
            {
                id: "email",
                type: "email",
                label: "Email"
            },
            {
                id: "phone",
                type: "tel",
                label: "Phone"
            },
            
            {
                id: "udisc",
                type: "text",
                label: "U-Disc Username"
            },
            {
                id: "pdga",
                type: "number",
                label: "PDGA#"
            },
            {
                id: "password",
                type: "password",
                label: "Password"
            },
        ];

        return(
            <Form questions={questions} handleChange={this.handleChange} handleSubmit={this.handleSubmit} buttonLabel="Sign Up"/>
        )
    }
}

export default SignUp;