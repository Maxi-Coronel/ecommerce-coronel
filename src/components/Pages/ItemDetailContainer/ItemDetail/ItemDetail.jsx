import React, { useContext, useState } from 'react';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import CartContext from '../../../../Context/CartContext';
import ItemCount from '../../../Common/ItemCount/ItemCount';
import Button from '../../../Common/Button/Button';

const ItemDetail = ({ item }) => {
    const {id, title, price, pictureUrl, description, measure, stock} = item

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
        <div className='item-detail'>
            <img src={pictureUrl} alt={title} className='item-detail-img'/>
            <div className='item-detail-div'>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <h4>Descripción</h4>
                <p>{description}</p>
                <h4>Medidas</h4>
                <p>{measure}</p>
                {!isCart
                    ? <ItemCount stock={stock} initial={initial} onAdd={handlerCart}/>
                    : <Link to={"/cart"}><Button content={`Terminar mi compra (${cartCtx.products.find(item => item.id === id).quantity})`} styles={'button'}/></Link>
                }
            </div>
        </div>
    );
};

export default ItemDetail;