import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ItemDetail from './ItemDetail/ItemDetail';
import { prueba } from '../../Services/firebase';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const {title} = useParams()

    const getItem = () => {
        setTimeout(() => {
            prueba()
                .then(res => {
                    setItem(res.find(item => item.title === title));
                })
                .catch(err => alert(`error en promise`))
                .finally(() => setLoading(false))
        },2000)
    }

    useEffect(() => {
        getItem()
    },[title])

    return (
        <div className='item-detail-container'>
            {!loading ? <ItemDetail item={item}/> : <Loading />}
        </div>
    );
};

export default ItemDetailContainer;