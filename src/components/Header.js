import React from 'react';
import './Header.css';
import Button from '../components/UIElements/Button.js';

const Header = props => {
    return (
        <div className="Header_div">
            <Button className="home" text="Jyothish Joe Varghese" href="#"></Button>
            <Button className="navigation" text="About Me" href="#"></Button>
            <Button className="navigation" text="Projects" href="#"></Button>
            <Button className="navigation" text="Contact" href="#"></Button>
        </div>
    )
}

export default Header;