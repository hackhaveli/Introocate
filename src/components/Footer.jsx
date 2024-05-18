import React from 'react'
import '../styles/style2.css'; // Ensure you have corresponding CSS for your styles
import '../styles/style.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="left">
                <h3 id="creditcard" style={{ marginBottom: '2vw' }}>No Credit Card Required</h3>
                <h2 id="demo">Book A Demo!</h2>
                <div className="input-container">
                    <input type="text" className="input-field" placeholder="Enter Your Working Email" />
                    <span className="arrow">➡️</span>
                </div>
                <hr id="hrs" />
                <h4 id="intro-footer" style={{ marginTop: '2vw' }}>Introcate</h4>
                <p>We are a team of professionals</p>
                <p className='footer-copy'>© 2024 Introcat. All rights reserved.</p>
            </div>
            <div className="right">
                <img src="images/gif.gif" id="gif" alt="GIF" />
                <div className="right-subpart">
                    <i className="fa-brands fa-youtube fa-2x" style={{ color: '#ffffff', width: '23px' }}></i>
                    <i className="fa-brands fa-facebook fa-2x" style={{ color: '#ffffff' }}></i>
                    <i className="fa-brands fa-instagram fa-2x" style={{ color: '#ffffff' }}></i>
                    <i className="fa-brands fa-twitter fa-2x" style={{ color: '#ffffff' }}></i>
                </div>
                <p className='footer-copy1'>© 2024 Introcat. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer