import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../../Context/UserContext';
import Loading from '../../Common/Loading/Loading';
import Order from './Order/Order';

const OrdersContainer = () => {
    const [loading, setLoading] = useState(true)
    const userCtx = useContext(UserContext)
    const [orders, setOrders] = useState()

    useEffect(() => {
        setOrders(userCtx.orders)
        setLoading(false)
    },[userCtx.orders])

    return (
        <div className='div-container flex-center'>
            {!loading
            ? orders?.map((order, key) => <Order key={key} orde={order}/>)
            : <Loading />}
        </div>
    );
};

export default OrdersContainer;