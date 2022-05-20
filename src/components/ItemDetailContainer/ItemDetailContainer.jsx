import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ItemDetail from './ItemDetail/ItemDetail';
import { getProductById } from '../../Services/firebase';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const { title } = useParams()

    useEffect(() => {
        getProductById(title)
            .then(res => {
                setItem(res);
            })
            .catch(err => alert(`error en promise`))
            .finally(() => setLoading(false))
    },[title])

    return (
        <div className='item-detail-container'>
            {!loading
            ? <ItemDetail item={item}/>
            : <Loading />}
        </div>
    );
};

export default ItemDetailContainer;