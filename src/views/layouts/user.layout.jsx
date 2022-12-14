import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages */
import Login from "../user/login/login";
import Signup from "../user/signup/signup";

class UserLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        }
    }

    handleUserLogin = (input) =>{
        console.log(input);
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