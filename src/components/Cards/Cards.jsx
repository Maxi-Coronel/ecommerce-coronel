import React from 'react';
import Button from '../Button/Button';
import './Card.css'

const Cards = (props) => {
    function handlerClick() {
        console.log(`compraste ${props.nombre}`);
    }
    return (
        <div className='card'>
            <img src={props.img} alt={props.nombre} />
            <div>
                <h3>{props.nombre}</h3>
                <h4>{props.precio}</h4>
                <Button function={handlerClick} nombre={"Compra!"}/>
            </div>
        </div>
    );
};

export default Cards;