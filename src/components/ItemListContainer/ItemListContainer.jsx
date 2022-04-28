import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';/* 
import Products from '../Products/Products'; */
import './ItemListContainer.css'
import getData from '../../Services/getData';

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        getData
            .then(res => setItems(res))
            .catch(err => console.log(`error en promise`))
      },[]);

    return (
        <>
            <ItemList items={items}/>
        </>
    );
};

export default ItemListContainer;