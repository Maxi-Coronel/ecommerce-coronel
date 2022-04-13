import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <div className='header'>
                <h1>Frontera Living</h1>
                <ul className='nav'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Ofertas</a></li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;