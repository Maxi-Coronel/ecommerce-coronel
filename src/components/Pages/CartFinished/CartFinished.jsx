import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Common/Button/Button';
import './CartFinished.css'

const CartFinished = () => {
    return (
        <div className='flex-center buy'>
            <img src="https://bikenbabia.files.wordpress.com/2016/11/ok.png?w=149&h=142" alt="" />
            <p><b>Tu compra fue realizada</b><br/>Muchas gracias por confiar en nosotros</p>
            <Link to={"/"}><Button content={'Vuelve al Home'} styles={'b-buy'}/></Link>
            <Link to={"/compras"}><Button content={'Ver órdenes'} styles={'b-buy'}/></Link>
        </div>
    );
};

export default CartFinished;