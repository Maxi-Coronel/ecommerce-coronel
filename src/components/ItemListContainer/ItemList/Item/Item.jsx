import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../../storage/CartContext';
import Button from '../../../Button/Button';
import ItemCount from '../../../ItemCount/ItemCount';
import Modal from '../../../Modal/Modal';
import './Item.css';

const Item = ({ item }) => {
    const {id, title, pictureUrl, price, stock} = item;

    const cartCtx = useContext(CartContext)
    const [isCart, setIsCart] = useState(false)
    const initial = cartCtx.initial
    
    const handlerCart = (count) => {
        if (stock >= count) {
                cartCtx.addItem(item, count)
                setIsCart(true)
        }
    }
    
    return (
        <div className='card'>
            <Link to={`/item/${id}`} className='card-link'>
                <img src={pictureUrl} alt={title} className='card-img' />
                <div>
                    <h3>{title}</h3>
                    <h4>${price}</h4>
                </div>
            </Link>
            {!isCart
                ? <ItemCount stock={stock} initial={initial} onAdd={handlerCart}/>
                : <Link to={"/cart"}><Button content={`Terminar mi compra (${cartCtx.products.find(item => item.id === id) ? cartCtx.products.find(item => item.id === id).quantity : setIsCart(false)})`} styles={'button'}/></Link>
            }
            
        <Modal title={cartCtx.modal.title} content={cartCtx.modal.content} isOpen={cartCtx.modal.isOpen} closeModal={cartCtx.closeModal} />
        </div>
    );
};

export default Item;