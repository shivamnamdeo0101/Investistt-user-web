import React from 'react'
import logo from "../Assets/logo.jpeg"
function Header() {
    return (
        <div className='header'>
            <div className='left_header'>
                <img src={logo} alt="" />
            </div>
            <div className='right_header'>
                <p>Home</p>
                <p>News</p>
                <p>Properties</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Header