import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import Categories from './Categories/Categories';
import './NavBar.css';

const NavBar = () => {

    const categories = [
        {
            content: "Home",
            link: "/",
        },{
            content: "Sofa",
            link: "/category/sofa",
        },{
            content: "Rinconero",
            link: "/category/rinconero",
        }
    ]

    return (
        <header>
            <div className='header'>
                <h1><Link to={'/'}><b>Frontera</b> Living</Link></h1>
                <ul className='nav'>
                    {categories.map((item, index) =>
                        <Categories key={index} categories={item}/>
                    )}
                    <li><CartWidget /></li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;