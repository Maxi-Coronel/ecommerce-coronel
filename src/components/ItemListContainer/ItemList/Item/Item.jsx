import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Button/Button';
import ItemCount from '../../../ItemCount/ItemCount';
import './Item.css';

const Item = ({ item }) => {
    const {id, title, pictureUrl, price, stock} = item;
    const [quantityToAdd, setquantityToAdd] = useState(0)
    
    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${title} al carrito`);
        setquantityToAdd(count);
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
            {quantityToAdd<1 ? 
                <ItemCount stock={stock} initial={1} onAdd={handlerCart}/> : 
                <Link to={"/cart"}><Button content="Terminar mi compra"/></Link>
            }
        </div>
    );
};

export default Item;