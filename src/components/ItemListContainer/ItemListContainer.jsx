import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import getData from '../../Services/getData';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    
    useEffect(() => {

        /* const db = getFirestore();
        const itemsCollections = collection(db, 'products');
        const q = query(
            itemsCollections,
            where('title', '==', 'Sofa Verona'),
            limit(1)
        )
        getDocs(q)
            .then(snapshot => 
                setItems(snapshot.docs.map(doc => {
                    return {...doc.data(), id: doc.id}
                }))
            )
            .finally(() => setLoading(false)) */
        setLoading(true);
        setTimeout(() => {
            getData
                .then(res => {
                    setItems(categoryId? res.filter(e => e.category === categoryId) : res);
                })
                .catch(err => alert(`error en promise`))
                .finally(() => setLoading(false))
        },500);
      },[categoryId]);

    return (
        <div className='item-list-container'>
            {!loading ? <ItemList items={items}/> : <Loading />}
        </div>
    );
};

export default ItemListContainer;