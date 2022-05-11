import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../storage/CartContext';
import Button from '../../Button/Button';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const {title, price, pictureUrl, description, measure, stock, quantityCart} = item
    const [quantityToAdd, setquantityToAdd] = useState(0)
    const cartCtx = useContext(CartContext)
    
    const handlerCart = (count) => {
        if (stock >= quantityCart + count) {
                setquantityToAdd(count)
                cartCtx.isInCart(item, count)
        } else {
            alert(`Tienes ${quantityCart} unidades en el carrito y solo hay ${stock} en stock, no puedes agregar ${count} más.`)
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
                {quantityToAdd<1
                    ? <ItemCount stock={stock} initial={1} onAdd={handlerCart}/>
                    : <Link to={"/cart"}><Button content={`Terminar mi compra (${quantityCart})`} styles={'button'}/></Link>
                }
            </div>
        </div>
    );
};

export default ItemDetail;