import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../storage/CartContext';
import Button from '../../Button/Button';
import './Cart.css'

const Cart = ({ item }) => {
    const {id, title, pictureUrl, price, stock, quantity} = item;

    const cartCtx = useContext (CartContext);
    const subtotal = price * quantity

    const handlerSubtract = () => {
        quantity > 1 && cartCtx.addItem(item, (-1))
    }

    const handlerAdd = () => {
        stock >= quantity && cartCtx.addItem(item, 1)
    }
    
    return (
        <div className='cart-item'>
            <Link to={`/item/${title}`} className='div-img'>
                <img src={pictureUrl} alt={title} className='img-cart' />
            </Link>
            <p className='p-cart'>{title}</p>
            <div className='handlerQuantity'>
                <Button content={'-'} styles={'button'} functional={handlerSubtract}/>
                <p>{quantity}</p>
                <Button content={'+'} styles={'button'} functional={handlerAdd}/>
            </div>
            <p className='p-cart'>${subtotal}</p>
            <div className='button-delete'>
                <Button functional={() => cartCtx.removeItem(id)} styles='close' content='x' />
            </div>
        </div>
    );
};

export default Cart;