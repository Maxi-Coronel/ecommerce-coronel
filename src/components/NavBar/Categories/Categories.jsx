import React from 'react';

const Categories = (props) => {
    const {categories} = props;
    const {nombre, link} = categories;
    return (
        <li><a href={link}>{nombre}</a></li>
    );
};

export default Categories;