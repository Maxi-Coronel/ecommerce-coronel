import React from 'react';
import Button from '../Button/Button';
import './ItemCount.css'

const ItemCount = ({maximo, cantidad, count, funcion}) => {

    const handlerAdd = () => {
        maximo > count + cantidad && funcion(count+1)
    }

    const handlerSubtract = () =>
        count > 1 && funcion(count-1);

    return (
        <div>
            <div className='flex'>
                <Button functional={handlerSubtract} nombre={"-"}/>
                <h3>{count}</h3>
                <Button functional={handlerAdd} nombre={"+"}/>
            </div>
        </div>
    );
};

export default ItemCount;