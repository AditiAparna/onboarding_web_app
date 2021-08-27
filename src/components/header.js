import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

function Header(){
    return(
        <div className="Header">
            <div className="Logo">
                beFriend
            </div>
            <div className="headerCenter">
                <div className="menuItem">
                    Home
                </div>
                <div className="menuItem">
                    Community
                </div>
                <div className="menuItem">
                    About Us
                </div>
                <div className="menuItem">
                    Workshop
                </div>
            </div>
            <div className="headerLeft">
                <Link to="/Screens">
                    <div className="signUp">
                        Sign Up
                    </div>
                </Link>
                <div className="login">
                    Login
                </div>
            </div>
        </div>
    );
}

export default Header;