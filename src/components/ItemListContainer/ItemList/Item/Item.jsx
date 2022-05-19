import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../../storage/CartContext';
import Button from '../../../Button/Button';
import ItemCount from '../../../ItemCount/ItemCount';
import './Item.css';

const Item = ({ item }) => {
    const {id, title, pictureUrl, price, stock} = item;

    const cartCtx = useContext(CartContext)
    const [irCart, setIrCart] = useState(false)
    
    const handlerCart = (count) => {
        if (stock >= count) {
                cartCtx.addItem(item, count)
                setIrCart(true)
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
            {!irCart
                ? <ItemCount stock={stock} initial={1} onAdd={handlerCart}/>
                : <Link to={"/cart"}><Button content={`Terminar mi compra (${cartCtx.products.find(item => item.id === id).quantity})`} styles={'button'}/></Link>
            }
        </div>
    );
};

export default Item;