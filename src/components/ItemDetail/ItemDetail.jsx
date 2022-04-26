import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    const [count, setCount] = useState(1)

    const handlerCount = newValue => setCount(newValue)

    const handlerCart = () => {
        item.quantity = item.quantity + count;
        count + item.quantity > item.stock && setCount(item.stock - item.quantity)
        alert(`Tienes ${item.quantity} ${item.nombre} en el carrito`)
    }

    return (
        <div className='detail'>
            <div className='detail-f'>
                <img src={item.img} alt={item.nombre} />
                <div className='caracteristicas'>
                    <h2>{item.nombre}</h2>
                    <h3>${item.precio}</h3>
                    <h4>Descripción</h4>
                    <p>{item.descripcion}</p>
                    <h4>Medida</h4>
                    <p>{item.medida}</p>
                    <ItemCount max={item.stock} quantity={item.quantity} count={count} handlerCount={handlerCount} onAdd={handlerCart}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;