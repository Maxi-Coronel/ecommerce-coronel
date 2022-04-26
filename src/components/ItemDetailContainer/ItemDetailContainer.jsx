import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import getData from '../../Services/getData';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const numberX = useState(Math.floor(Math.random() * (4 - 0)) + 0)
    
    useEffect(() => {
        getData
            .then(res => setItem(res[numberX[0]]))
            .catch(err => console.log(`error en promise`))
      },[]);

    return (
        <>
            <ItemDetail item={item} />
        </>
    );
};

export default ItemDetailContainer;