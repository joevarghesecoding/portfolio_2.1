import React from 'react';
import './Image.css';
import PcBackground from './shared/pc-background.png';

const Image = props => {
    return (
        <div className="image">
            <h1 id="welcome">Welcome to my</h1>
            <h1 id="portfolio">Portfolio Page</h1>
            <img src={PcBackground} alt="pc-img"></img>
        </div>
        
    )
}

export default Image;