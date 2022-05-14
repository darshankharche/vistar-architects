import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(){
    function addNavOpen(){
        document.body.classList.add('open-bar')
    }

    function removeNavOpen(){
        document.body.classList.remove('open-bar')
    }

    return(
        <div className='navbar'>
            <Link to="/" ><img src='./images/small-logo.png' alt="logo" /></Link>
            <div onClick={addNavOpen} className='hamburger-icon'>
            <i className="fa-solid fa-bars"></i>
            </div>
            <div onClick={removeNavOpen} className='cancel-icon'>
                <i className="fa-solid fa-xmark"></i>
            </div>
            
            <div onClick={removeNavOpen} className='links'>
                <Link className='link' to="/" >Home</Link>
                <Link className='link' to="/projects" >Projects</Link>
                <Link className='link' to="/about" >About</Link>
                <Link className='link' to="/contact" >Contact</Link>
            </div>
            
            
            
        </div>
    )
    
}