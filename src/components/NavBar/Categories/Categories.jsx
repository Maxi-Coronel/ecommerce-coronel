import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    const {content, link} = categories;
    return (
        <>
        <li><NavLink to={link} className={(nav) => nav.isActive ? 'link-active' : ''}>{content}</NavLink></li>
        </>
    );
};

export default Categories;