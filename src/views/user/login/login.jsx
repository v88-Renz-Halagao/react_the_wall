/* React */
import React, { Component } from "react";
import  {Link} from "react-router-dom";
import  {Navigate} from "react-router-dom";

/* Prototype Data */
import { loginData } from './login_prototype_data';

/* CSS */ 
import "./login.scss";

/* Images */
import Image_for_container from "../../../assets/images/Group_2018.png"

/** 
* @class 
* @extends Component
* This component class is use for login<br>
* All methods are related to login.<br>
* Last Updated Date: December 14, 2022.
*/
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login_error: null,
            login_input:{
                email: null,
                password: null
            },
            login_data: loginData
        }
    }

    handleInputChange = (input) => {
        this.setState({
            login_input: {
              ...this.state.login_input,
              [input.name]: input.value,
            },
        })
    }

    handleOnLoginSubmit = (event) => {
        event.preventDefault();
        let input = this.state.login_input;
        let login_data = this.state.login_data;
        if (input.email !== login_data.email && input.password !== login_data.password) {
            this.setState({ login_error: true});  
        }
        else{
            console.log("OK");
            window.location.href = "/wall";
        }
    }

    render() {
        let { login_error } = this.state;
        return (
            <section>
                <div id="form_container">
                    <form autoComplete="off" method="post" id="form_sign_in" onSubmit={this.handleOnLoginSubmit}>
                        <h2>The Wall</h2>
                        <h3>Login</h3>
                        <label htmlFor="email">Email</label> 
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className={`form-control ${ (login_error && login_error !== null) ? "input_error" : "" }`}
                            onChange={(event) => this.handleInputChange(event.target)} 
                            required/>
                        { (login_error) &&
                            <span className="sign_in_error">Incorrect Email</span> 
                        }
                        <label htmlFor="password">Password</label><a href="#" tabIndex="-1">Forgot Password</a>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            className={`form-control ${ (login_error && login_error !== null) ? "input_error" : "" }`}
                            onChange={(event) => this.handleInputChange(event.target)}
                            required/>
                        { (login_error) &&
                            <span className="sign_in_error">Incorrect Password</span> 
                        }
                        <button type="submit">SIGN IN</button>
                        <span>I don???t have an account ? <Link to="/signup" id="sign_up_link">Sign up</Link></span>
                    </form> 
                </div>
                <div id="right_container">
                    <img src={Image_for_container} alt="A man holding a form"/> 
                </div>
            </section>
        );
    }
}
 
export default Login;