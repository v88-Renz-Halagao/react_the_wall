/* React */
import React, { Component } from "react";

/* CSS */
import "./signup.scss";

/* Images */
import Image_for_container from "../../../assets/images/Group_2018.png"

class Signup extends Component {
    render() {
        return (
            <section>
                <div id="form_container">
                    <form method="post" id="form_sign_up">
                        <h2>The Wall</h2>
                        <h3>Register</h3>
                        <label>Email</label>
                        <input type="text" id="sign_up_email" class="sign_up_inputs" name="Email" />
                        <span class="sign_up_error">Error Email</span>
                        <label>Password</label>
                        <input type="password" id="sign_up_password" class="sign_up_inputs" name="Password" />
                        <span class="sign_up_error">Error Password</span>
                        <label>Confirm Password</label>
                        <input type="password" id="sign_up_confirm_password" class="sign_up_inputs" name="Confirm Password" />
                        <span class="sign_up_error">Error Confirm Password</span>
                        <span id="agreement_info">By creating an account, you agree with The Wall's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a> </span>
                        <button type="submit">SIGN UP</button>
                        <span>Already have an account ? <a href="/" id="sign_in_link">Sign In</a></span>
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