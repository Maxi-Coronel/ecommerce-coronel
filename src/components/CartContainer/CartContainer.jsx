import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { exmpleSendOrder } from '../../Services/firebase';
import CartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Cart from './Cart/Cart';

const CartContainer = () => {
    const cartCtx = useContext(CartContext)
    const [pay, setPay] = useState(false);
    const [buy, setBuy] = useState(false);

    const today = new Date();
    const output = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const date = output + '-' + time

    const cargarOrden = (user) => {
      exmpleSendOrder(user, cartCtx.products, cartCtx.totalPrice(), date);
      setBuy(true);
      cartCtx.clear();
    }


    return (
      !buy
      ? cartCtx.products.length > 0
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
        : <div className='cart p-vacio'>
            <p><b>Tu carrito está vacío</b><br/>¿No sabés qué comprar?<br/>Tenemos muchas opciones para tí</p>
            <Link to={"/"}><Button content={'Vuelve al Home'} styles={'button'}/></Link>
            
          </div>
      : <div className='cart buy'>
          <img src="https://bikenbabia.files.wordpress.com/2016/11/ok.png?w=149&h=142" alt="" />
          <p><b>Tu compra fue realizada</b><br/>Muchas gracias por confiar en nosotros</p>
            <Link to={"/"}><Button content={'Vuelve al Home'} styles={'b-buy'}/></Link>
        </div>
        
    );
};

export default CartContainer;