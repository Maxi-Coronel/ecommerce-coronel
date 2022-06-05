import React from 'react';

const Order = ({ orde }) => {
    const {date, order, total} = orde
    return (
        <div className='order'>
            <h4>{date}</h4>
            {order.map((item, key) =>  
                <div key={key} className='cart-item'>
                    <div to={`/item/${item.title}`} className='div-img'>
                        <img src={item.pictureUrl} alt={item.title} className='img-cart' />
                    </div>
                    <p className='p-cart'>{item.title}</p>
                    <div className='handlerQuantity'>
                        <p>{item.quantity}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
            )}
            <h4 className='total'>Total: ${total}</h4>
        </div>
    );
};

export default Order;