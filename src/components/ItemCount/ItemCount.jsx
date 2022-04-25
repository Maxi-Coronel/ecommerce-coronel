import React from 'react';
import Button from '../Button/Button';
import './ItemCount.css'

const ItemCount = ({max, quantity, count, handlerCount}) => {

    const handlerAdd = () => {
        max > count + quantity && handlerCount(count+1)
    }

    const handlerSubtract = () =>
        count > 1 && handlerCount(count-1);

    return (
        <div>
        <div className='stock'>
            <p>Disponible:{max}</p>
        </div>
            <div className='flex'>
                <Button functional={handlerSubtract} nombre={"-"}/>
                <h3>{count}</h3>
                <Button functional={handlerAdd} nombre={"+"}/>
            </div>
        </div>
    );
};

export default ItemCount;