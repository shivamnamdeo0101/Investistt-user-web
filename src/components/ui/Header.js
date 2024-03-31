import React from 'react'
import logo from "../../assets/logo.jpeg";
import {RouteTypes} from "../../contants";
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    function handleClick(route) {
        console.log("route", route);
        navigate(route);
      }
    
    return (
        <div className='header'>
            <div className='left_header'>
                <img src={logo} alt="" onClick={() => handleClick(RouteTypes.HomePage)}/>
            </div>
            <div className='right_header'>
                <p onClick={() => handleClick(RouteTypes.HomePage)}>Home</p>
                <p onClick={() => handleClick(RouteTypes.NewsPage)}>News</p>
                <p onClick={() => handleClick(RouteTypes.PropertiesPage)}>Properties</p>
                <p onClick={() => handleClick(RouteTypes.AboutUsPage)}>About Us</p>
                <p onClick={() => handleClick(RouteTypes.ContactUsPage)}>Contact Us</p>
                <button onClick={() => handleClick(RouteTypes.SignInPage)}>Sign In</button>
            </div>
        </div>
    )
}

export {Header}