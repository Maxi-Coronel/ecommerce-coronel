import React from 'react';
import './Button.css'

const Button = ({ functional, content, styles }) => {
    return (
        <>
            <button className={styles} onClick={functional}>{content}</button>
        </>
    );
};

export default Button;