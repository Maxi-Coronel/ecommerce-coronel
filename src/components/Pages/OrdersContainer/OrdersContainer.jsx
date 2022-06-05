import React, { useContext, useEffect, useState } from 'react';
import { getCollection } from '../../../Services/firebase';
import UserContext from '../../../Context/UserContext';
import Loading from '../../Common/Loading/Loading';
import Order from './Order/Order';
import './OrdersContainer.css'

const OrdersContainer = () => {
    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(true)
    const userCtx = useContext(UserContext)
    const collec = 'orders'
    const filter = 'user'
    const users = userCtx.user
    
    useEffect(() => {
        getCollection(collec, filter, users)
            .then(res => {
                setOrders(res)
            })
            .catch(err => alert(`error en promise`))
            .finally(() => setLoading(false))
      },[users]);

    return (
        <div className='cart orders'>
            {!loading
            ? orders.map((order, key) => <Order key={key} orde={order}/>)
            : <Loading />}
        </div>
    );
};

export default OrdersContainer;