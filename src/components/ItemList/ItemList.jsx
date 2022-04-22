import React from 'react';
import Item from '../Item/Item';

const ItemList = ({item}) => {
    return (
        <div className='menu'>
            {item.map((item, index) => <Item key={index} producto={item}/>)}
        </div>
    );
};

export default ItemList;