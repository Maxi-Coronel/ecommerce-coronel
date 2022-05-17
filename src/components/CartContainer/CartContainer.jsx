import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import Cart from './Cart/Cart';

const CartContainer = () => {
    const cartCtx = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
        setTotalPrice(cartCtx.totalPrice());
    },)

    return (
            cartCtx.products.length > 0
            ? <div className='cart'>
                {cartCtx.products.map(item => <Cart key={item.id} item={item}/>)}
                <div>
                    <p>Total: ${totalPrice}</p>
                    <Button functional={cartCtx.clear} content={'Borrar Carrito'} styles={'close'}/>
                </div>
              </div>
            : <Link to={"/"} className='p-vacio'>
                <p><b>Tu carrito está vacío</b><br/>¿No sabés qué comprar? Vuelve al Home<br/>¡Tenemos muchas opciones para tí!</p>
              </Link>
    );
};

export default CartContainer;