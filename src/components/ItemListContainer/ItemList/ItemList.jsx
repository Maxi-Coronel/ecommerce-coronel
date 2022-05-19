import React from 'react';
import Item from './Item/Item';

const ItemList = ({ items }) => {
    return (
        <div className='menu'>
            {items.map((item, key) => <Item key={key} item={item}/>)}
        </div>
    );
};

export default ItemList;