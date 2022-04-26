import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({producto}) => {
    const {id, title, description, pictureUrl, price, stock} = producto;

    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${title} al carrito`)
    }

    return (
        <article className='card'>
            <img src={pictureUrl} alt={title} />
            <div>
                <h3>{title}</h3>
                <h4>${price}</h4>
            </div>
            <ItemCount stock={stock} initial={1} onAdd={handlerCart} />
        </article>
    );
};

export default Item;