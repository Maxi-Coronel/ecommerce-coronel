import React from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const {title, price, pictureUrl, description, measure, stock} = item
    
    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${title} al carrito`)
    }

    return (
        <div className='item-detail'>
            <img src={pictureUrl} alt={title} className='item-detail-img'/>
            <div className='item-detail-div'>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <h4>Descripción</h4>
                <p>{description}</p>
                <h4>Medidas</h4>
                <p>{measure}</p>
                <ItemCount stock={stock} initial={1} onAdd={handlerCart}/>
            </div>
        </div>
    );
};

export default ItemDetail;