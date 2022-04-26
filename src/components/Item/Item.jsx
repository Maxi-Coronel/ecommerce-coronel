import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({producto}) => {
    const {nombre, img, precio, stock} = producto;

    const handlerCart = (count) => {
        alert(`Agregaste ${count} ${nombre} al carrito`)
    }

    return (
        <article className='card'>
            <img src={img} alt={nombre} />
            <div>
                <h3>{nombre}</h3>
                <h4>${precio}</h4>
            </div>
            <ItemCount stock={stock} initial={1} onAdd={handlerCart} />
        </article>
    );
};

export default Item;