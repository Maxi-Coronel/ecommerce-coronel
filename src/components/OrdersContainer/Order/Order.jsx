import React from 'react';

const Order = ({ orde }) => {
    const {date, order, total, user} = orde
    const {mail, mobile, name, surname} = user
    return (
        <div className='card'>
            <h3>{name} {surname}</h3>
            <h4>{date}</h4>
            {order.map(item =>  
                <div>
                    <p>{item.title}</p>
                    <p>{item.quantity}</p>
                </div>)}
            <h4>${total}</h4>
        </div>
    );
};

export default Order;