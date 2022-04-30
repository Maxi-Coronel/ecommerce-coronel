import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../Services/getData'
import ItemDetail from '../ItemDetail/ItemDetail';
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
                    setLoading(false)
                })
        },2000)
    }

    useEffect(() => {
        getItem()
    },[])

    return (
        <div className='item-detail-container'>
            {!loading? <ItemDetail item={item}/> : <img src='https://gifimage.net/wp-content/uploads/2017/10/cargando-gif-sin-fondo-3.gif' alt='cargando'/>}
        </div>
    );
};

export default ItemDetailContainer;