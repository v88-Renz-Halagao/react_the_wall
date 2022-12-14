/* React */
import React, { Component } from "react";

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
            login_data: loginData,
            login_input: {
                email: null,
                password: null
            }
        }
    }

    handleInputChnage = (input) => {
        this.setState = ({
            login_input: {
				...this.state.login_input,
				[input.name]: input.value,
			},
        })
    }

    handleOnLoginSubmit = (event) => {
        event.preventDefault();
        this.props.handleUserLogin(this.state.login_input);
    }

    render() { 
        return (
            <section>
                <div id="form_container">
                    <form method="post" id="form_sign_in" onSubmit={this.handleOnLoginSubmit}>
                        <h2>The Wall</h2>
                        <h3>Login</h3>
                        <label>Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email"
                            onChange={(event) => this.handleInputChnage(event.target)} 
                            required/>
                        <span className="sign_in_error">Error Email</span> 
                        <label>Password</label><a href="#" tabIndex="-1">Forgot Password</a>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            onChange={(event) => this.handleInputChnage(event.target)}
                            required/>
                        <span className="sign_in_error">Error Password</span> 
                        <button type="submit">SIGN IN</button>
                        <span>I don’t have an account ? <a href="signup" id="sign_up_link">Sign up</a></span>
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