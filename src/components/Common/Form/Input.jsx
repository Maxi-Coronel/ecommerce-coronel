import React from 'react';

const Input = ({ name, type, id, placeholder}) => {
    return (
        <label htmlFor={id}>
            <span>{name}</span>
            <input type={type} id={id} placeholder={placeholder} required />
        </label>
    );
};

export default Input;