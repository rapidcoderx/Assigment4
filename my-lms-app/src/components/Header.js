import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.jpg';
const Header=() => {
    return(
        <header className='Header'>
            <div className='logo'><img src={logo} alt="LMS Logo" height="40"/></div>
            <nav className='nav-links'>
                <Link to='/'>Home</Link>    
                <Link to='/courses'>Course Page</Link>    
                <Link to='/login'>Login</Link>   
            </nav>
        </header>
    )
}
export default Header;
