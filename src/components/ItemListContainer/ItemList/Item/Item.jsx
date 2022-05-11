import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../../storage/CartContext';
import Button from '../../../Button/Button';
import ItemCount from '../../../ItemCount/ItemCount';
import './Item.css';

const Item = ({ item }) => {
    const {id, title, pictureUrl, price, stock, quantityCart} = item;
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
        <div className='card'>
            <Link to={`/item/${id}`} className='card-link'>
                <img src={pictureUrl} alt={title} className='card-img' />
                <div>
                    <h3>{title}</h3>
                    <h4>${price}</h4>
                </div>
            </Link>
            {quantityToAdd<1
                ? <ItemCount stock={stock} initial={1} onAdd={handlerCart}/>
                : <Link to={"/cart"}><Button content={`Terminar mi compra (${quantityCart})`} styles={'button'}/></Link>
            }
        </div>
    );
};

export default Item;