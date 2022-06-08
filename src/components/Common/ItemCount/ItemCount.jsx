import React, { useState } from 'react';
import Button from '../Button/Button';
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const handlerAdd = () => {
        stock > count && setCount(count+1)
    }

    const handlerSubtract = () =>
        count > 1 && setCount(count-1)

    return (
        <div className='item-count'>
            <div className='stock'>
                <p>Disponible:{stock}</p>
            </div>
            <div className='count'>
                <Button functional={handlerSubtract} content='-' styles='button'/>
                <h3>{count}</h3>
                <Button functional={handlerAdd} content='+' styles='button'/>
            </div>
            <Button functional={() => onAdd(count)} content='Agregar al carrito' styles='button'/>
        </div>
    );
};

export default ItemCount;