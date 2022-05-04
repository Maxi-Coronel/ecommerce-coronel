import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const {title, price, pictureUrl, description, measure, stock} = item
    const [buttonCart, setButtonCart] = useState(false)
    
    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${title} al carrito`);
        setButtonCart(true);
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
                {!buttonCart ? 
                    <ItemCount stock={stock} initial={1} onAdd={handlerCart}/> : 
                    <Link to={"/cart"}><Button content="Terminar mi compra"/></Link>
                }
            </div>
        </div>
    );
};

export default ItemDetail;