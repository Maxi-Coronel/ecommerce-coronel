import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../../ItemCount/ItemCount';
import './Item.css';

const Item = ({ item }) => {
    const {id, title, pictureUrl, price, stock} = item;

    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${title} al carrito`);
    }

    return (
        <div className='card'>
            <Link to={`/item/${id}`} className='card-link'>
                <img src={pictureUrl} alt={title} className='card-img' />
                <div>
                    <h3>{title}</h3>
                    <h4>${price}</h4>
                </div>
            </Link>
            <ItemCount stock={stock} initial={1} onAdd={handlerCart} />
        </div>
    );
};

export default Item;