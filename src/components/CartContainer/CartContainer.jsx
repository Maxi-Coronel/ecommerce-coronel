import React, { useContext } from 'react';
import CartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import Cart from './Cart/Cart';

const CartContainer = () => {
    const cartCtx = useContext(CartContext)

    return (
        <>
            {cartCtx.products.length > 0 
            ? <div className='cart'>
                {cartCtx.products.map(item => <Cart key={item.id} item={item}/>)}
                <div>
                    <Button functional={cartCtx.clear} content={'Borrar Carrito'} styles={'close'}/>
                </div>
              </div>
            : <p className='p-vacio'><b>Tu carrito está vacío</b><br/> ¿No sabés qué comprar? ¡Tenemos muchas opciones para tí!</p>}
        </>
    );
};

export default CartContainer;