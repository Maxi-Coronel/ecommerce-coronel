import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <div className='header'>
                <h1><b>Frontera</b> Living</h1>
                <ul className='nav'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;