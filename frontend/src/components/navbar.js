import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ handleShowLogin, handleShowRegister }) =>{
    return(
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Taks React App</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/Register">Register</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar