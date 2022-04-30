import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({ item }) => {
    const {id, title, pictureUrl, price, stock} = item;

    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${title} al carrito`);
    }

    return (
        <Link to={`/item/${id}`} className='card'>
            <img src={pictureUrl} alt={title} className='imgItem' />
            <div>
                <h3>{title}</h3>
                <h4>${price}</h4>
            </div>
            <ItemCount stock={stock} initial={1} onAdd={handlerCart} />
        </Link>
    );
};

export default Item;