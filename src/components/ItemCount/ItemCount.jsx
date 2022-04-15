import React, { useState } from 'react';
import Button from '../Button/Button';
import './ItemCount.css'

const ItemCount = (props) => {
    const {producto} = props
    const {stock} = producto;

    const [count, setCount] = useState(0)

    function handlerCart() {
        console.log(producto);
        producto.quantity = producto.quantity + count;
        props.setCart([producto])
    }

    function handlerAdd() {
        if (stock > count) {
            setCount(count+1)
            console.log(count);
        }
    }

    function handlerSubtract() {
        if (count > 0) {
            setCount(count-1)
            console.log(count);
        }
    }

    return (
        <div>
            <div className='flex'>
                <Button functional={handlerSubtract} nombre={"-"}/>
                <h3>{count}</h3>
                <Button functional={handlerAdd} nombre={"+"}/>
            </div>
            <Button functional={handlerCart} nombre={"Agregar al carrito"}/>
        </div>
    );
};

export default ItemCount;