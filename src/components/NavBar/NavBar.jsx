import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Categories from './Categories/Categories';
import './NavBar.css';

const NavBar = () => {

    const categorias = [
        {
            nombre: "Home",
            link: "#",
        },{
            nombre: "Productos",
            link: "#",
        },{
            nombre: "Ofertas",
            link: "#",
        }
    ]

    return (
        <header>
            <div className='header'>
                <h1><b>Frontera</b> Living</h1>
                <ul className='nav'>
                    {categorias.map((item, index) =>
                        <Categories key={index} categories={item}/>
                    )}
                    <li><CartWidget /></li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;