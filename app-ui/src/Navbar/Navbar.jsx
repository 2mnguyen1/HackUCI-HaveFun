import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import {Dashboard, Forum, AccountBox} from '@mui/icons-material';


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
                    <Dashboard />
                </div>
                <div className='navbar-element navbar-showcase'>
                    <Forum />
                </div>
                <div className='navbar-element navbar-profile-icon'>
                    <AccountBox />
                </div>
            </div>
            <div className='navbar-profile'>
                    
            </div>
        </div>
    </div>
  )
}
