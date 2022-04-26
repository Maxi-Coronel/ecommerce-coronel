import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({producto}) => {
    const {id, nombre, img, precio, stock, quantity} = producto;

    const [count, setCount] = useState(1)
    const [countQuotas, setCountQuotas] = useState(1)
    const [precioQuotas, setPrecioQuotas] = useState(precio)

    useEffect(() => {
        setPrecioQuotas(countQuotas > 1 ? (((precio * (0.05 * countQuotas) + precio) / countQuotas) * count) : precio * count)
      },[countQuotas, count]);

    const handlerCount = newValue => setCount(newValue)

    const handlerQuotas = () => {
        setCountQuotas(document.getElementById(id).value)
    }

    const handlerCart = () => {
        producto.quantity = producto.quantity + count;
        count + producto.quantity > producto.stock && setCount(producto.stock - producto.quantity)
        alert(`Tienes ${producto.quantity} ${producto.nombre} en el carrito`)
    }

    return (
        <article className='card'>
            <img src={img} alt={nombre} />
            <div>
                <h3>{nombre}</h3>
                <h4>${precio}</h4>
                <div className='cuotas'>
                    <select name="numCoutas" id={id} onChange={handlerQuotas}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                    </select>
                    <p> cuotas de ${precioQuotas.toFixed(2)}</p>
                </div>
            </div>
            <ItemCount max={stock} quantity={quantity} count={count} handlerCount={handlerCount} onAdd={handlerCart} />
        </article>
    );
};

export default Item;