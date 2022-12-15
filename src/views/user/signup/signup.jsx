/* React */
import React, { Component } from "react";
import  {Link} from "react-router-dom";

/* Prototype Data */
import { regex } from './email_format_prototype_data';

/* CSS */
import "./signup.scss";

/* Images */
import Image_for_container from "../../../assets/images/Group_2018.png"

/** 
* @class 
* @extends Component
* This component class is use for signup<br>
* All methods are related to signup.<br>
* Last Updated Date: December 14, 2022.
*/
class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailFormat: regex,
            signup_error: {
                email: null,
                password: null,
                confirm_password: null
            },
            signup_input:{
                email: null,
                password: null,
                confirm_password: null,
            }
        }
    }

    handleInputChange = (input) => {
        this.setState({
            signup_input: {
              ...this.state.signup_input,
              [input.name]: input.value,
            },
        })
    }

    handleInputError = (input_name, input_error) => {
        this.setState(prevState =>({
            signup_error: {
                ...prevState.signup_error,
                [input_name]: input_error
            }
        }));
    }

    handleOnSignupSubmit = (event) => {
        event.preventDefault();
        let input = this.state.signup_input;
        let error = this.state.signup_error;
        let emailFormat = this.state.emailFormat;

        if (!emailFormat.test(String(input.email).toLowerCase())) {
            this.handleInputError("email", "Email is not valid");
        }
        else{
            this.handleInputError("email", null);
        }

        if (input.password !== input.confirm_password) {
            this.handleInputError("confirm_password", "Passwords does not match");
        }
        else{
            this.handleInputError("confirm_password", null);
        }

        if(error.email === null && error.password === null && error.confirm_password === null){
            console.log("Error");
        }
        
    }

    render() {
        let {signup_error} = this.state;
        return (
            <section>
                <div id="form_container">
                    <form autoComplete="off" method="post" id="form_sign_up" onSubmit={this.handleOnSignupSubmit}>
                        <h2>The Wall</h2>
                        <h3>Register</h3>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="sign_up_email"
                            className={`form-control ${ (signup_error.email !== null) ? "input_error" : "" }`}
                            onChange={(event) => this.handleInputChange(event.target)} 
                            name="email" 
                            required/>
                        { (signup_error.email !== null) &&
                            <span className="sign_up_error">{signup_error.email}</span>
                        }
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="sign_up_password" 
                            className={`form-control ${ (signup_error.password !== null) ? "input_error" : "" }`}
                            onChange={(event) => this.handleInputChange(event.target)}  
                            name="password" 
                            required/>
                        { (signup_error.password !== null) &&
                            <span className="sign_up_error">{signup_error.password}</span>
                        }
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input 
                            type="password" 
                            id="sign_up_confirm_password" 
                            className={`form-control ${ (signup_error.confirm_password !== null) ? "input_error" : "" }`}
                            onChange={(event) => this.handleInputChange(event.target)}  
                            name="confirm_password" 
                            required/>
                        { (signup_error.confirm_password !== null) &&
                            <span className="sign_up_error">{signup_error.confirm_password}</span>
                        }
                        <span id="agreement_info">By creating an account, you agree with The Wall's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a> </span>
                        <button type="submit">SIGN UP</button>
                        <span>Already have an account ? <Link to="/" id="sign_in_link">Sign In</Link></span>
                    </form>
                </div>
                <div id="right_container">
                    <img src={Image_for_container} alt="A man holding a form" />
                </div>
            </section>
        );
    }
}

export default Signup;