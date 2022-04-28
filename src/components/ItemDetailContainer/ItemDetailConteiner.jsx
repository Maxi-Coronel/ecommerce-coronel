import React, { useEffect, useState } from 'react';
import getData from '../../Services/getData'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const numberRandom = Math.floor(Math.random() * 4);

    const getItem = () => {
        setTimeout(() => {
            getData
                .then(res => setItem(res[numberRandom]))
        },2000)
    }

    useEffect(() => {
        getItem()
    },[])

    return (
        <div>
            {item? <ItemDetail item={item}/> : <p>Espere</p>}
        </div>
    );
};

export default ItemDetailContainer;