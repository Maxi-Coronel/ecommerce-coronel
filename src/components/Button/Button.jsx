import React from 'react';
import './Button.css'

const Button = ({functional, content}) => {
    return (
        <>
            <button className='button' onClick={functional}>{content}</button>
        </>
    );
};

export default Button;