import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <div className='header'>
                <h1>Frontera Living</h1>
                <ul className='nav'>
                    <li><a href="#">Sofas</a></li>
                    <li><a href="#">Rinconeros</a></li>
                    <li><a href="#">Colchones</a></li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;