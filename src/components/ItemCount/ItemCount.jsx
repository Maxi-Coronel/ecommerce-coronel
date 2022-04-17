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
        if (count + producto.quantity > stock) {
            setCount(stock - producto.quantity)
        }
    }

    function handlerAdd() {
        if (stock > count+producto.quantity) {
            setCount(count+1)
        }
    }

    function handlerSubtract() {
        if (count > 0) {
            setCount(count-1)
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