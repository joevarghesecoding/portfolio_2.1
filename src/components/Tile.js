import React from 'react';
import './Tile.css';


const Tile = props => {
    return (
        <div className={props.className}>
           <h1 >{props.h1}</h1>
           <img src={props.src} alt={props.alt}></img>
           <p>{props.text}</p>
        </div>
    )
}

export default Tile;