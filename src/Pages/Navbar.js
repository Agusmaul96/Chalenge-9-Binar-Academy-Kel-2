import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedSabres } from "react-icons/gi";
import "../styles/navbar.css";
import assets from "./assets/logo.png";

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={assets} alt="app logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__sanserif">
                    <a href="/">Home</a>
                </li>
                <li className="p__sanserif">
                    <a href="#work">Work</a>
                </li>
                <li className="p__sanserif">
                    <a href="#contact">Contact</a>
                </li>
                <li className="p__sanserif">
                    <a href="#about">About Me</a>
                </li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__sanserif">
                    Login
                </a>
                <div></div>
                <a href="#signup" className="p__sanserif">
                    Sign Up
                </a>
            </div>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu
                    color="#fff"
                    fontSize={27}
                    onClick={() => {
                        setToggle(true);
                    }}
                />
                {toggle && (
                    <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
                        <GiCrossedSabres
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => {
                                setToggle(false);
                            }}
                        />
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__sanserif">
                                <a href="/">Home</a>
                            </li>
                            <li className="p__sanserif">
                                <a href="#work">Work</a>
                            </li>
                            <li className="p__sanserif">
                                <a href="#contact">Contact</a>
                            </li>
                            <li className="p__sanserif">
                                <a href="#about">About Me</a>
                            </li>
                            <li className="p__sanserif">
                                <a href="#login">Login</a>
                            </li>
                            <li className="p__sanserif">
                                <a href="#signup">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
