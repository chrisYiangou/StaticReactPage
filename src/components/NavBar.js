import React from "react"
import Logo from "../pictures/ReactIcon.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="react-pic" src={Logo} alt ="React Logo"  />
            <h3 className="nav-title">
                ReactFacts
            </h3>
            <h4 className="nav-text">
                React Course - Project 1
            </h4>
        </nav>
  
    );
}