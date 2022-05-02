import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import getData from '../../Services/getData';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getData
                .then(res => {
                    setItems(id? res.filter(e => e.category === id) : res);
                    setLoading(false)
                })
                .catch(err => console.log(`error en promise`))
        },2000);
      },[id]);

    return (
        <div className='item-list-container'>
            {!loading ?
                <ItemList items={items}/> :
                <img src='https://gifimage.net/wp-content/uploads/2017/10/cargando-gif-sin-fondo-3.gif' alt='cargando'/>
            }
        </div>
    );
};

export default ItemListContainer;