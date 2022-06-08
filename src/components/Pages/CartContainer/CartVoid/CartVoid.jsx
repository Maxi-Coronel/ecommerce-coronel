import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Common/Button/Button';

const CartVoid = () => {
    return (
    <div className='div-container p-void'>
        <p><b>Tu carrito está vacío</b><br/>¿No sabés qué comprar?<br/>Tenemos muchas opciones para tí</p>
        <Link to={"/"}><Button content='Vuelve al Home' styles='button'/></Link>
    </div>
    );
};

export default CartVoid;