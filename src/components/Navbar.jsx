import React from 'react';
import '../styles/style.css';
import '../styles/style2.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const toggleNavbar = () => {
        var sideNavbar = document.getElementById("sideNavbar");
        if (sideNavbar.style.width === "250px") {
            sideNavbar.style.width = "0";
        } else {
            sideNavbar.style.width = "250px";
        }
    };

    const closeNavbar = () => {
        document.getElementById("sideNavbar").style.width = "0";
    };

    return (
        <div className='sticky top-4 z-50'>
            <nav className="nav">
                <img src="images/Profile/logo.png" id="logo" alt="Logo" />
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/youtube">Youtube</Link>
                    <Link to="/instagram">Instagram</Link>
                    <Link to="/videoediting">Video Editing</Link>
                    <Link to="/" id="apply">Apply Now</Link>
                </div>
            </nav>
            {/* mobile view nav */}
            <div onClick={toggleNavbar} id="toggleBtn">
                <img src="images/ham.png" style={{ width: "50px", marginTop: "20px", filter: "invert(100%)" }} alt="" />
            </div>

            <div className="mobile_view_logo">
                <img src="images/Profile/logo.png" width="70px" alt="Mobile Logo" />
            </div>

            <div id="sideNavbar" className="sidenav" style={{ width: "0" }}>
                <a href="#" className="closebtn" onClick={closeNavbar} style={{ color: "white" }}>&times;</a>
                <a href="./index.html">Home</a>
                <a href="/">About</a>
                <a href="./youtube.html">Youtube</a>
                <a href="./Instagram.html">Instagram</a>
                <a href="./Videoediting.html">Video Editing</a>
                <a href="/" id="apply">Apply Now</a>
            </div>
            {/* mobile view nav end */}
        </div>
    );
}

export default Navbar;
