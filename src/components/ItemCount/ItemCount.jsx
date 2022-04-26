import React, { useState } from 'react';
import Button from '../Button/Button';
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const handlerAdd = () => {
        stock > count && setCount(count+1)
    }

    const handlerSubtract = () =>
        count > 1 && setCount(count-1);

    return (
        <div>
        <div className='stock'>
            <p>Disponible:{stock}</p>
        </div>
            <div className='flex'>
                <Button functional={handlerSubtract} nombre={"-"}/>
                <h3>{count}</h3>
                <Button functional={handlerAdd} nombre={"+"}/>
            </div>
            <Button functional={() => onAdd(count)} nombre="Agregar al carrito" />
        </div>
    );
};

export default ItemCount;