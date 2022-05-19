import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { prueba } from '../../Services/firebase';

const ItemListContainer = () => {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    
    useEffect(() => {
        setLoading(true);
        prueba()
            .then(res => {
                setItems(categoryId? res.filter(e => e.category === categoryId) : res)
            })
            .catch(err => alert(`error en promise`))
            .finally(() => setLoading(false))
      },[categoryId]);

    return (
        <div className='item-list-container'>
            {!loading ? <ItemList items={items}/> : <Loading />}
        </div>
    );
};

export default ItemListContainer;