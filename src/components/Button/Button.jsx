import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <>
            <button className='button' onClick={props.function}>{props.nombre}</button>
        </>
    );
};

export default Button;