import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({producto}) => {
    const {id, nombre, img, precio, stock, quantity} = producto;

    const [count, setCount] = useState(1)
    const [countCuotas, setCountCuotas] = useState(1)
    const [precioCuotas, setPrecioCuotas] = useState(precio)

    useEffect(() => {
        setPrecioCuotas(countCuotas > 1 ? (((precio * (0.05 * countCuotas) + precio) / countCuotas) * count) : precio)
      },[countCuotas, count]);

    const handlerCount = a => setCount(a)

    const handlerCuotas = () => {
        setCountCuotas(document.getElementById(id).value)
    }

    const handlerCart = () => {
        console.log(producto);
        producto.quantity = producto.quantity + count;
        count + producto.quantity > producto.stock && setCount(producto.stock - producto.quantity)
    }

    return (
        <article className='card'>
            <img src={img} alt={nombre} />
            <div>
                <h3>{nombre}</h3>
                <h4>${precio}</h4>
                <div>
                    <select name="numCoutas" id={id} onChange={handlerCuotas}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                    </select>
                    <p>cuotas de ${precioCuotas.toFixed(2)}</p>
                </div>
            </div>
            <ItemCount maximo={stock} cantidad={quantity} count={count} funcion={handlerCount} />
            <Button functional={handlerCart} nombre={"Agregar al carrito"}/>
        </article>
    );
};

export default Item;