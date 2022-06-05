import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Common/Button/Button';
import CartVoid from './CartVoid/CartVoid';
import CartItem from './Cart/CartItem';
import { sendOrder } from '../../../Services/firebase';
import CartContext from '../../../Context/CartContext';
import UserContext from '../../../Context/UserContext';

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
              <Link to={link}><Button functional={corroborarSesion} content='Comprar' styles={'button'}/></Link>
              <Button functional={cartCtx.clear} content={'Borrar Carrito'} styles={'close'}/>
            </div>
          </div>
          : <CartVoid />
    );
};

export default CartContainer;