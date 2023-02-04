import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import dashboard_icon from "../images/dashboard.png"
import group_icon from "../images/group.png"
import use_icon from "../images/user-icon.png"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className='navbar-wrapper'>
            <div className='navbar-logo'>
                <img className='navbar-logo-icon' alt="" src="" />
                <span className='logo-icon-name'>HelpFun</span>
            </div>
            <div className='navbar-elements'>
                <div className='navbar-element navbar-home'>
                    <img className='navbar-home-icon' alt="" src={dashboard_icon} />
                </div>
                <div className='navbar-element navbar-showcase'>
                    <img className='navbar-showcase-icon' alt="" src={group_icon} />
                </div>
                <div className='navbar-element navbar-profile-icon'>
                    <img className='navbar-profile-icon' alt="" src={use_icon}/>
                </div>
            </div>
            <div className='navbar-profile'>
                <img className='navbar-img' alt="" src={''}/>
            </div>
        </div>
    </div>
  )
}
