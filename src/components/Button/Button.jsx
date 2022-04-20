import React from 'react';
import './Button.css'

const Button = ({functional, nombre}) => {
    return (
        <>
            <button className='button' onClick={functional}>{nombre}</button>
        </>
    );
};

export default Button;