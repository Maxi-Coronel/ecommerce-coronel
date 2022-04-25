import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Products from '../Products/Products';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [item, setItem] = useState([])

    function traeProductos() {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products)
            }, 2000)
        });
        return myPromise
    };
    
    useEffect(() => {
        traeProductos()
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