import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import {Dashboard, Forum, AccountBox, Handyman} from '@mui/icons-material';
import logo from "../images/helpfun-logo.png"

export default function Navbar() {
    const styles = {
        backgroundColor: '#34E0A1'
    }
  return (
    <div className="navbar">
        <div className='navbar-wrapper'>
            <div className='navbar-logo'>
                <img className='navbar-logo-icon' alt="" src={logo} />
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
                <div className='navbar-element navbar-tool-icon'>
                    <Handyman />
                </div>
            </div>
            <div className='navbar-profile'>
               
            </div>  
        </div>
    </div>
  )
}
