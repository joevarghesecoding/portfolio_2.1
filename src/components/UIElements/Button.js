import React from 'react';
import './Button.css';

const Button = props => {  
    return(
        <div className={props.className}>
            <a href={props.href} className="link">{props.text}</a>
        </div>
    );
}

export default Button;