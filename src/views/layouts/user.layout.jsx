import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import  { Redirect } from 'react-router-dom'

/* Pages */
import Login from "../user/login/login";
import Signup from "../user/signup/signup";

class UserLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
           login_data: {
                email: "test1@gmail.com",
                password: "test1@gmail.com"
           }
        }
    }

    handleUserLogin = (input) => {
        console.log(input);
        let login_data = this.state.login_data;
        if (input.email === login_data.email && input.password === login_data.password) {
            return false;  
        }
        else{
            return true;
        }
    }

    render() { 
        return (
            <React.Fragment>
                 <Router>
                    <Routes>
                        <Route path="/" element={<Login handleUserLogin={this.handleUserLogin}/>} />
                        <Route path="/signup" element={<Signup/>} /> 
                    </Routes>
                </Router>
            </React.Fragment>
        );
    }
}
 
export default UserLayout;