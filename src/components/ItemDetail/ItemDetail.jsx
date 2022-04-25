import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from '../Button/Button';

const ItemDetail = ({item}) => {
    const [count, setCount] = useState(1)

    const handlerCount = newValue => setCount(newValue)

    const handlerCart = () => {
        console.log(item);
        item.quantity = item.quantity + count;
        count + item.quantity > item.stock && setCount(item.stock - item.quantity)
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
                    <ItemCount max={item.stock} quantity={item.quantity} count={count} handlerCount={handlerCount}/>
                    <Button functional={handlerCart} nombre="Agregar al carrito" />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;