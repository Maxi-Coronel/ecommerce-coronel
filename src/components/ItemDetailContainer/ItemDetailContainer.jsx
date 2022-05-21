import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ItemDetail from './ItemDetail/ItemDetail';
import { getProductById } from '../../Services/firebase';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => console.log(`error en promise detail:`))
            .finally(() => setLoading(false))
    },[id])

    return (
        <div className='item-detail-container'>
            {!loading
            ? <ItemDetail item={item}/>
            : <Loading />}
        </div>
    );
};

export default ItemDetailContainer;