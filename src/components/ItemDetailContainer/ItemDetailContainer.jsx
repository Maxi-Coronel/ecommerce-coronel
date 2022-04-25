import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Products from '../Products/Products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const numberX = useState(Math.floor(Math.random() * (4 - 0)) + 0)

    function traeProductos() {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products)
                setLoading(false)
            }, 2000)
        });
        return myPromise
    };
    
    useEffect(() => {
        traeProductos()
            .then(res => setItem(res[numberX[0]]))
            .catch(err => console.log(`error en promise`))
      },[]);

    return (
        <>
            {loading ?
                <img src="" alt="cargando" /> :
                <ItemDetail item={item} />
            }
        </>
    );
};

export default ItemDetailContainer;