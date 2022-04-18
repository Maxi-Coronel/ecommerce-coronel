import React from 'react';

const Categories = ({categories}) => {
    const {nombre, link} = categories;
    return (
        <li><a href={link}>{nombre}</a></li>
    );
};

export default Categories;