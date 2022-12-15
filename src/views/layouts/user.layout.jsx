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
           
        }
    }

    render() { 
        return (
            <React.Fragment>
                 <Router>
                    <Routes>
                        <Route path="/" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} /> 
                    </Routes>
                </Router>
            </React.Fragment>
        );
    }
}
 
export default UserLayout;