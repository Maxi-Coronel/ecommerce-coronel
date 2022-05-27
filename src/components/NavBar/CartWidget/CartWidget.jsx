import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../storage/CartContext';
import './CartWidget.css'

const CartWidget = () => {
    const cartCtx = useContext(CartContext)

    return (
        cartCtx.quantityItem() > 0 &&
            <Link to={'/cart'} className='widget'>
                <img src="https://www.paypalobjects.com/webstatic/es_MX/mktg/express_checkout/carrito_ico.png" alt="carrito" />
                <p className='quantity-cart'>{cartCtx.quantityItem()}</p>
            </Link>
    );
};

export default CartWidget;