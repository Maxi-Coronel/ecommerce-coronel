import React, { useContext, useEffect, useState } from 'react';
import { getCollection } from '../../Services/firebase';
import UserContext from '../../storage/UserContext';
import Loading from '../Loading/Loading';
import Order from './Order/Order';

const Orders = () => {
    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(true)
    const userCtx = useContext(UserContext)
    const collec = 'orders'
    const filter = 'user'
    const categoryId = userCtx.user
    
    useEffect(() => {
        getCollection(collec, filter, categoryId)
            .then(res => {
                setOrders(res)
            })
            .catch(err => alert(`error en promise`))
            .finally(() => setLoading(false))
      },[categoryId]);

    return (
        <div className='cart'>
            {!loading
            ? orders.map((order, key) => <Order key={key} orde={order}/>)
            : <Loading />}
        </div>
    );
};

export default Orders;