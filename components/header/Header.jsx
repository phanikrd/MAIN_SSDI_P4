// components/header/Header.jsx

import React from 'react';
import './Header.css';
import logoImage from '../header/facebook-icon.png';
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                <img src={logoImage} alt="Logo" className="logo" />
                    <h1>Welcome to My Creative App</h1>
                    <p>Explore, Create, Innovate</p>
                  
                        
                    
                </div>
            </div>
        );
    }
}

export default Header;
