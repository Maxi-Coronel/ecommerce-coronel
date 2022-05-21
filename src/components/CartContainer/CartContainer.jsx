import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { exmpleSendOrder } from '../../Services/firebase';
import CartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Cart from './Cart/Cart';

const CartContainer = () => {
    const cartCtx = useContext(CartContext)
    const [pay, setPay] = useState(false)

    const cargarOrden = (user) => {
      exmpleSendOrder(user, cartCtx.products)
      cartCtx.products.map(item => {
        console.log(item.id, item.quantity)
      })
    }

    return (
            cartCtx.products.length > 0
            ? !pay
              ? <div className='cart'>
                {cartCtx.products.map(item => <Cart key={item.id} item={item}/>)}
                <div>
                    <p>Total: ${cartCtx.totalPrice()}</p>
                </div>
                <div className='flex'>
                  <Button functional={() => setPay(true)} content={'Comprar'} styles={'button'}/>
                  <Button functional={cartCtx.clear} content={'Borrar Carrito'} styles={'close'}/>
                </div>
              </div>
              : <div className='cart'>
                  <Form functional={cargarOrden}/>
                </div>
            : <Link to={"/"} className='cart p-vacio'>
                <p><b>Tu carrito está vacío</b><br/>¿No sabés qué comprar? Vuelve al Home<br/>¡Tenemos muchas opciones para tí!</p>
              </Link>
    );
};

export default CartContainer;