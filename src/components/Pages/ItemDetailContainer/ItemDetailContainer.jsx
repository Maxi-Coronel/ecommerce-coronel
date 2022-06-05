import './ItemDetailContainer.css'
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../../Context/CartContext';
import { getById } from '../../../Services/firebase';
import ItemDetail from './ItemDetail/ItemDetail';
import Error from '../Error/Error';
import Loading from '../../Common/Loading/Loading';
import Modal from '../../Common/Modal/Modal';

const ItemDetailContainer = () => {

    const cartCtx = useContext(CartContext)
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const collec = 'products'

    useEffect(() => {
        getById(id ,collec)
            .then(res => {
                setItem(res);
            })
            .catch(err => console.log(`error en promise detail:`))
            .finally(() => setLoading(false))
    },[id])

    return (
        <div className='item-detail-container'>
            {!loading
                ? item
                    ? <ItemDetail item={item}/>
                    : <Error />
                : <Loading />}
            <Modal title={cartCtx.modal.title} content={cartCtx.modal.content} isOpen={cartCtx.modal.isOpen} closeModal={cartCtx.closeModal} />
        </div>
    );
};

export default ItemDetailContainer;