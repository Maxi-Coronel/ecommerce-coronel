import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({ item }) => {
    const {title, pictureUrl, price, stock} = item;

    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${title} al carrito`)
    }

    return (
        <div className='card'>
            <img src={pictureUrl} alt={title} className='imgItem' />
            <div>
                <h3>{title}</h3>
                <h4>${price}</h4>
            </div>
            <ItemCount stock={stock} initial={1} onAdd={handlerCart} />
        </div>
    );
};

export default Item;