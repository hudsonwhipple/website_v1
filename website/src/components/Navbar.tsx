import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    return (
        <nav className="navbar">
            {/* <img src="https://via.placeholder.com/150" alt="logo" height="50" width="50" /> */}
            <h1 className="logo">HUDSON WHIPPLE</h1>
            <ul className={isMobile ? "navbar-menu mobile" : "navbar-menu"}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button
                className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Navbar;
