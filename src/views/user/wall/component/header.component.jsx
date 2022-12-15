/* React */
import React, { Component } from "react";
import  {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

/* CSS */
import "./header.scss";

class Header extends Component {
    render() { 
        return (
            <header>
                <Navbar >
                    <Link to="/wall">The Wall Assignment</Link>
                    <span>Welcome, Renz Halagao!</span>
                    <Link to="/">Logout</Link>
                </Navbar >
            </header>
        );
    }
}
 
export default Header;