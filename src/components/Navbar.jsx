// import React from 'react';
import '../assets/css/navbar.css';
import logo from '../assets/images/logo.png';
import Button from './Button';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <span><img src={logo} alt="Logo" /></span>
                    <li className='nav-list-items'>ABOUT US</li>
                    <li className='nav-list-items'>ORDERS</li>
                    <li className='nav-list-items'>TRACK</li>
                    <li className='nav-list-items'>CONTACT</li>
                    <li className='nav-list-items'><Button text='SIGNUP' /></li>
                    
                </ul>
            </nav>

        </>
    );
};

export default Navbar;
