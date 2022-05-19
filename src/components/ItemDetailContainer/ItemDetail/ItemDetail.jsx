import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../storage/CartContext';
import Button from '../../Button/Button';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const {id, title, price, pictureUrl, description, measure, stock} = item

    const cartCtx = useContext(CartContext)
    const [irCart, setIrCart] = useState(false)
    
    const handlerCart = (count) => {
        if (stock >= count) {
                cartCtx.addItem(item, count)
                setIrCart(true)
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
                {!irCart
                    ? <ItemCount stock={stock} initial={1} onAdd={handlerCart}/>
                    : <Link to={"/cart"}><Button content={`Terminar mi compra (${cartCtx.products.find(item => item.id === id).quantity})`} styles={'button'}/></Link>
                }
            </div>
        </div>
    );
};

export default ItemDetail;