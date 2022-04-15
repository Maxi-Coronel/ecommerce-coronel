import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Card.css'

const Cards = (props) => {
    const {producto} = props
    const {nombre, img, precio} = producto;

    return (
        <article className='card'>
            <img src={img} alt={nombre} />
            <div>
                <h3>{nombre}</h3>
                <h4>{precio}</h4>
            </div>
            <ItemCount producto={producto}  cart={props.setCart}/>
        </article>
    );
};

export default Cards;