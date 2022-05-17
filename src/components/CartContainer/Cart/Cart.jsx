import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../storage/CartContext';
import Button from '../../Button/Button';
import './Cart.css'

const Cart = ({ item }) => {
    const {id, title, pictureUrl, price, stock} = item;

    const cartCtx = useContext (CartContext);
    const [quantity, setQuantity] = useState(cartCtx?.products.find(product => product.id === item.id).quantityCart);
    const subtotal = price * quantity

    const handlerSubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            cartCtx.isInCart(item, (-1))
            cartCtx.totalPrice();
        }
    }

    const handlerAdd = () => {
        if (stock > quantity) {
            setQuantity(quantity + 1)
            cartCtx.isInCart(item, 1)
            cartCtx.totalPrice();
        }
    }
    
    useEffect(() => {
        setQuantity(cartCtx.products.find(product => product.id === item.id).quantityCart)
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