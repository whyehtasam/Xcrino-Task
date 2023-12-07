// import React from 'react';
import '../assets/css/navbar.css';
import logo from '../assets/images/logo.png';
import Button from './Button/Button';
// import styles from '../assets/css/btn.module.css';

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
                    <li className='nav-list-items'><Button > SIGNUP</Button></li>
                    
                </ul>
            </nav>

        </>
    );
};

export default Navbar;
