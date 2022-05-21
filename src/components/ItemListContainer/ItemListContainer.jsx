import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { getProducts } from '../../Services/firebase';

const ItemListContainer = () => {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId)
            .then(res => {
                setItems(res)
            })
            .catch(err => alert(`error en promise`))
            .finally(() => setLoading(true))
      },[categoryId]);

    return (
        <div className='item-list-container'>
            {loading
                ? <ItemList items={items}/>
                : <Loading />}
        </div>
    );
};

export default ItemListContainer;