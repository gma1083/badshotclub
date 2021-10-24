import React, { Component } from "react";
import { signInUser } from "../firebase";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
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
        return(
            <form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
            <div> 
              <label> Email </label>
              <input
                id="email"
                type="email"
                onChange={this.handleChange.bind(this)}/>
            </div>
            <div> 
              <label> Password </label>
              <input
                id="password"
                type="password"
                onChange={this.handleChange.bind(this)}/>
            </div>
            <input type="submit" value="Login"/>
          </form> 
        )
    }
}

export default Login;