import React from 'react';
import Button from '../Button/Button';
import './Card.css'

const Cards = (props) => {
    const {producto} = props
    const {nombre, img, precio} = producto;

    function handlerClick() {
        console.log(`compraste ${nombre}`);
    }
    return (
        <article className='card'>
            <img src={img} alt={nombre} />
            <div>
                <h3>{nombre}</h3>
                <h4>{precio}</h4>
                <Button functional={handlerClick} nombre={"Compra!"}/>
            </div>
        </article>
    );
};

export default Cards;