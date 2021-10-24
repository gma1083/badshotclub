import React, { Component, Fragment } from "react";
import { signInUser } from "../firebase";
import Form from "../components/Form";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
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
            const user = await signInUser(this.state.email, this.state.password);
            this.props.successfulLoginHandler(user);
        }      
        catch(error) {
            console.log(error);
        }  
    }



    render() {

        const questions = [
            {
                id: "email",
                type: "email",
                label: "Email"
            },
            {
                id: "password",
                type: "password",
                label: "Password"
            },
        ];

        return(
            <Fragment>
                <h1> Login </h1>
                <Form questions={questions} handleChange={this.handleChange} handleSubmit={this.handleSubmit}> 
                    <button className="buttonLink" onClick={this.props.handleClickSignUp}> Sign Up</button>
                </Form>
            </Fragment>
            
        )
    }

}

export default Login;