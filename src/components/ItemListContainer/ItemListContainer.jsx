import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';/* 
import Products from '../Products/Products'; */
import './ItemListContainer.css'
import getData from '../../Services/getData';

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    
    useEffect(() => {
        getData
            .then(res => setItem(res))
            .catch(err => console.log(`error en promise`))
      },[]);


    return (
        <>
            <ItemList item={item}/>
        </>
    );
};

export default ItemListContainer;