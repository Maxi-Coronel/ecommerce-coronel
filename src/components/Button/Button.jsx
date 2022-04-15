import React from 'react';
import './Button.css'

const Button = (props) => {

    const {functional, nombre} = props

    return (
        <>
            <button className='button' onClick={functional}>{nombre}</button>
        </>
    );
};

export default Button;