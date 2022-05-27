import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sendOrder } from '../../Services/firebase';
import CartContext from '../../storage/CartContext';
import UserContext from '../../storage/UserContext';
import Button from '../Button/Button';
import CartItem from './Cart/CartItem';
import CartVoid from './CartVoid';

const CartContainer = () => {
    const cartCtx = useContext(CartContext)
    const userCtx = useContext(UserContext)

    const [link, setLink] = useState('/cart');

    useEffect(() => {
      Object.keys(userCtx.user).length === 0
      ? setLink('/registro')
      : setLink('/finalizada')
    },[userCtx.user])

    const today = new Date();
    const output = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const date = output + '-' + time

    const cargarOrden = (user) => {
      sendOrder(user, cartCtx.products, cartCtx.totalPrice(), date);
      cartCtx.clear();
    }

    const corroborarSesion = () => {
      Object.keys(userCtx.user).length !== 0 && cargarOrden(userCtx.user)
    }

    return (
        cartCtx.products.length > 0
          ? <div className='cart'>
            {cartCtx.products.map(item => <CartItem key={item.id} item={item}/>)}
            <div>
                <p>Total: ${cartCtx.totalPrice()}</p>
            </div>
            <div className='flex'>
              <Button functional={corroborarSesion} content={<Link to={link}>Comprar</Link>} styles={'button'}/>
              <Button functional={cartCtx.clear} content={'Borrar Carrito'} styles={'close'}/>
            </div>
          </div>
          : <CartVoid />
    );
};

export default CartContainer;