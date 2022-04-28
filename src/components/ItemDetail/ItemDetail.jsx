import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const {title, price, pictureUrl, description, stock} = item
    
    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${title} al carrito`)
    }

    return (
        <div className='item-detail'>
            <img src={pictureUrl} alt="title" />
            <div>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <p>{description}</p>
                <ItemCount stock={stock} initial={1} onAdd={handlerCart}/>
            </div>
        </div>
    );
};

export default ItemDetail;