import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../storage/CartContext';
import Button from '../../Button/Button';
import './Cart.css'

const Cart = ({ item }) => {
    const {id, title, pictureUrl, price, stock} = item;

    const [quantity, setQuantity] = useState(item.quantityCart);
    const cartCtx = useContext (CartContext);
    const subtotal = price * quantity

    const handlerSubtract = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    const handlerAdd = () => {
        stock > quantity && setQuantity(quantity + 1)
    }
    
    useEffect(() => {
        item.quantityCart = quantity
    },[quantity])
    
    return (
        <div className='cart-item'>
            <Link to={`/item/${id}`} className='div-img'>
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