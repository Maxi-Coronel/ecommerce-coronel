import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { getCollection } from '../../../Services/firebase';
import Loading from '../../Common/Loading/Loading';

const ItemListContainer = () => {
    const [items, setItems] = useState(false);
    const [loading, setLoading] = useState(true);
    const collec = 'products'
    const filter = 'category'
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        getCollection(collec, filter, categoryId)
            .then(res => {
                setItems(res)
            })
            .catch(err => alert(`error en promise`))
            .finally(() => setLoading(false))
      },[categoryId]);

    return (
        <div className='item-list-container'>
        {!loading
            ? <ItemList items={items}/>
            : <Loading />}
        </div>
    );
};

export default ItemListContainer;