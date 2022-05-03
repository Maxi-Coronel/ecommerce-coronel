import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../Services/getData'
import Loading from '../Loading/Loading';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    const getItem = () => {
        setTimeout(() => {
            getData
                .then(res => {
                    setItem(res.find(item => item.id === id));
                })
                .catch(err => alert(`error en promise`))
                .finally(() => setLoading(false))
        },2000)
    }

    useEffect(() => {
        getItem()
    },[])

    return (
        <div className='item-detail-container'>
            {!loading ? <ItemDetail item={item}/> : <Loading />}
        </div>
    );
};

export default ItemDetailContainer;